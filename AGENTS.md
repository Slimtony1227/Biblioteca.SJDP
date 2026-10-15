# Biblioteca SJDP project instructions

- Read `bibliotecaSite.md` and `wireframes/biblioteca-sjdp/wireframe-spec.md` for the accepted content and design.
- Approved stack: Astro, npm, plain CSS, and JavaScript/JSON for activity data. The user approved this complete supporting setup and authorized implementation on 2026-10-15.
- Astro is the only approved direct package dependency. Its required transitive dependencies are installed through npm; they are not separately selected application tools.
- Ask before adding or changing other parts of the code stack, including frameworks, languages, direct packages, integrations, package managers, and development/build tools.
- Explain each proposed stack addition and its purpose before installing or configuring it. React, Tailwind, TypeScript source, a CMS, and hosting integrations have not been approved.
- Keep the user informed about the actual project files, direct dependencies, and configuration. Distinguish proposed choices from installed tools.
- Once a stack choice is approved, ordinary implementation within that approved stack does not require repeated approval.
- The user explicitly approved the Google Fonts Bitcount Ink stylesheet (weights 100–900, display=swap) for the “Próximas actividades” heading only. Retain the system sans-serif font elsewhere; no font package or other font service was requested.
- The user authorized a Windows launcher with a press-1 prompt that exposes the Astro development server to their local network for phones and laptops. `start-local.cmd` and the native Node helper use the existing approved stack; no new packages or automatic firewall/router changes are required.
