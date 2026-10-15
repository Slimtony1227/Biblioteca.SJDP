import { spawn } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { networkInterfaces } from 'node:os';
import { delimiter, dirname, resolve } from 'node:path';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const host = '0.0.0.0';
const port = 4321;

async function askToStart() {
  console.log('\nBiblioteca SJDP - Local Network Server\n');
  console.log('  1 - Start the website on this computer and your local network');
  console.log('  0 - Exit\n');
  process.stdout.write('Press 1 then Enter to start, or 0 then Enter to exit: ');

  const input = createInterface({ input: process.stdin, output: process.stdout });
  try {
    for await (const line of input) {
      const choice = line.trim();
      if (choice === '1') return true;
      if (choice === '0') return false;
      process.stdout.write('Please enter 1 to start or 0 to exit: ');
    }
    return false;
  } finally {
    input.close();
    // Let the menu process exit; a running server child keeps the launcher alive when needed.
    process.stdin.unref?.();
  }
}

async function checkPort() {
  await new Promise((resolveCheck, rejectCheck) => {
    const probe = createServer();
    probe.once('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        rejectCheck(new Error(
          `Port ${port} is already in use. Stop the existing server with Ctrl+C in its terminal, then run this launcher again.`,
        ));
      } else {
        rejectCheck(error);
      }
    });
    probe.listen({ host, port, exclusive: true }, () => probe.close(resolveCheck));
  });
}

function localAddresses() {
  const addresses = [];
  const seen = new Set();
  // Router-assigned IPv4 addresses; skip loopback, unconfigured adapters, and VPN-only ranges.
  const privateAddress = /^(?:10\.|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.)/;
  for (const [name, entries] of Object.entries(networkInterfaces())) {
    for (const entry of entries ?? []) {
      if (entry.family !== 'IPv4' || entry.internal || !privateAddress.test(entry.address)) continue;
      if (/\b(?:vethernet|docker|wsl|vmware|virtualbox)\b/i.test(name)) continue;
      if (seen.has(entry.address)) continue;
      seen.add(entry.address);
      addresses.push({ name, address: entry.address });
    }
  }
  const priority = (name) => /wi-?fi|wireless|wlan/i.test(name) ? 0 : /ethernet/i.test(name) ? 1 : 2;
  return addresses.sort((left, right) => priority(left.name) - priority(right.name));
}

async function startServer(astroCli) {
  const child = spawn(process.execPath, [astroCli, 'dev', '--host', host, '--port', String(port)], {
    cwd: projectRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      PATH: `${dirname(process.execPath)}${delimiter}${process.env.PATH ?? ''}`,
    },
  });

  let stopping = false;
  const stop = () => {
    stopping = true;
    child.kill();
  };
  process.once('SIGINT', stop);
  process.once('SIGTERM', stop);
  try {
    const exitCode = await new Promise((resolveExit, rejectExit) => {
      child.once('error', rejectExit);
      child.once('exit', (code) => resolveExit(code ?? 1));
    });
    return stopping ? 0 : exitCode;
  } finally {
    process.removeListener('SIGINT', stop);
    process.removeListener('SIGTERM', stop);
  }
}

async function main() {
  if (!await askToStart()) return 0;

  const [major, minor] = process.versions.node.split('.').map(Number);
  if (major < 22 || (major === 22 && minor < 12)) {
    throw new Error('Astro requires Node.js 22.12 or newer. Update your existing Node.js installation.');
  }

  const astroManifestPath = resolve(projectRoot, 'node_modules/astro/package.json');
  if (!existsSync(astroManifestPath)) {
    throw new Error('Project dependencies are missing. Run npm ci in the project folder, then open this launcher again.');
  }
  const astroManifest = JSON.parse(readFileSync(astroManifestPath, 'utf8'));
  const astroCli = resolve(dirname(astroManifestPath), astroManifest.bin.astro);
  await checkPort();

  console.log('\nStarting Astro. Wait for the ready message below.\n');
  console.log(`  This computer:  http://localhost:${port}/`);
  const addresses = localAddresses();
  for (const { name, address } of addresses) {
    console.log(`  Same network:   http://${address}:${port}/  (${name})`);
  }
  if (addresses.length === 0) {
    console.log('  No router-assigned LAN address found. Connect this computer to Wi-Fi or Ethernet, then retry.');
  }
  console.log('\nOpen a Same network URL on phones and laptops connected to the same router.');
  console.log('If Windows prompts, allow Node.js on Private networks.');
  console.log('Keep this window open. Press Ctrl+C to stop the server.\n');

  return startServer(astroCli);
}

try {
  process.exitCode = await main();
} catch (error) {
  console.error(`\nCould not start the server: ${error.message}\n`);
  process.exitCode = 1;
}
