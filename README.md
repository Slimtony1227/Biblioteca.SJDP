# Biblioteca SJDP

A small Spanish-language activity page for the Biblioteca Escolar Superior Jardines de Ponce. The page follows the accepted postcard concept, with a compact welcome, a grade-color key, and one column of upcoming activities.

Repository: [Slimtony1227/Biblioteca.SJDP](https://github.com/Slimtony1227/Biblioteca.SJDP). The source files are ready for Cloudflare Pages; connect the repository using the settings below to publish the website.

## Where to change things

Click a file link to open it on GitHub, or open the same path in your local project folder.

| What you want to change | File to edit | What to look for |
| --- | --- | --- |
| Welcome message, quotation, or author | [LibraryHeader.astro](./src/components/LibraryHeader.astro) | `<h1>`, `<blockquote>`, and `quote-author` |
| Activity titles, dates, times, descriptions, grades, or links | [activities.json](./src/data/activities.json) | One `{ ... }` object per card |
| Add or remove an activity | [activities.json](./src/data/activities.json) | Add or remove a complete object in the array |
| Activity images and logo files | [public/images](./public/images/) | Upload images here; reference them as `images/filename.png` |
| “Próximas actividades” or the empty-list message | [index.astro](./src/pages/index.astro) | `activities-title` and `empty-state` |
| Grade names and their matching card/legend colors | [activities.js](./src/lib/activities.js) | The `audiences` array at the top |
| Card field labels or the “Próximamente” text | [ActivityCard.astro](./src/components/ActivityCard.astro) | `Lugar:`, `Costo:`, and `Próximamente` |
| Card layout shared by every activity | [ActivityCard.astro](./src/components/ActivityCard.astro) | The `<article>` markup |
| Spacing, font sizes, card shapes, or background | [global.css](./src/styles/global.css) | See the selector guide below |
| Instagram icon's destination | [LibraryHeader.astro](./src/components/LibraryHeader.astro) | The `instagram-link` anchor's `href`, `title`, and `aria-label` |
| Browser-tab title and search description | [PageLayout.astro](./src/layouts/PageLayout.astro) | `<title>` and `<meta name="description">` |
| Footer credit and WhatsApp destination | [FooterSignature.astro](./src/components/FooterSignature.astro) | Credit text and `whatsappUrl` |
| School watermark assets | [PageLayout.astro](./src/layouts/PageLayout.astro) | The `<picture>` inside `school-watermark` |

Editing [bibliotecaSite.md](./bibliotecaSite.md) or the [wireframe specification](./wireframes/biblioteca-sjdp/wireframe-spec.md) updates the project notes. Change the files in the table above to change the actual website.

## Edit directly on GitHub

For small text changes, you can maintain the website entirely in the GitHub browser editor:

1. Open this repository and select the `main` branch.
2. Open the file from the table above and click the pencil icon to edit it.
3. Make your change, then click **Commit changes** and write a short message, such as `Update library quotation`.
4. Commit to `main` for a routine update. For changes you want to review first, choose a new branch and open a pull request, then merge it when ready. Branch protections, if enabled later, may require the pull request route.
5. Once Cloudflare Pages is connected, changes reaching `main` trigger a production build and deployment. Check **Cloudflare → Workers & Pages → your Pages project → Deployments** for a successful deployment, then refresh the public website.

GitHub's Markdown preview shows this README. It does not render the Astro website. Use the local preview below to inspect the actual page before publishing a layout change. See [GitHub's file-editing guide](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) for the editor controls.

If you also edit this project on your computer, pull GitHub changes before starting local work. The publishing section below explains both workflows.

## Approved stack

- Astro **7.3.8**, the only direct package dependency.
- npm for dependency management; `package-lock.json` records the dependency tree.
- Plain CSS, JavaScript, and JSON. Cloudflare Pages is the selected hosting target, using its dashboard and GitHub connection. No hosting adapter, Wrangler package, React, Tailwind, separately configured TypeScript, or CMS is installed.
- Node.js **22.12.0 or newer** and npm **9.6.5 or newer** are required. Astro's required transitive dependencies, including its build tooling, are installed by npm. They are not separately selected application frameworks.
- The base font is a system sans-serif stack (`Trebuchet MS`, then Verdana, then the browser's sans-serif). The user requested **Bitcount Ink** from Google Fonts for **“Próximas actividades” only**. The shared head loads the supplied variable-weight stylesheet with preconnects and `display=swap`; the system stack remains the fallback. No font package was installed.

Ask the user before changing this stack; see [AGENTS.md](./AGENTS.md).

## Run locally

### Windows launcher: computer, phones, and laptops on the same network

Double-click **`start-local.cmd`**, press **1**, then **Enter**. Choose **0** to exit without starting anything.

The launcher uses the existing Node installation directly, so it also works when npm is missing from PATH. It starts Astro on **`0.0.0.0:4321`** and prints:

- `http://localhost:4321/` for this computer.
- Your current LAN IPv4 URL, such as `http://192.168.x.x:4321/`, for phones and laptops connected to the same router. Use the address printed by the launcher; it can change when the network changes.

Keep the launcher window open. Press **Ctrl+C** to stop the server; if Windows asks “Terminate batch job?”, press **Y** then **Enter**. If Windows asks about firewall access, allow Node.js for **Private networks**. Devices on a guest Wi-Fi network with client isolation may be unable to reach one another.

The launcher reports a clear error if port 4321 is occupied; it does not stop another server or silently change ports. Stop the existing server in its terminal before starting this one. It does not install dependencies or change firewall/router settings. If dependencies are missing, run `npm ci` first.

For an earlier Astro server with no visible terminal, run `node node_modules/astro/bin/astro.mjs dev stop` from this project folder, then start the launcher again. This targets the Astro server registered to this project.

The same interactive launcher is available from a terminal as `npm run start:local`. Plain `npm run dev` retains its computer-only binding.

Launcher verification covered exiting with 0, retrying invalid input, rejecting an occupied port, starting on `0.0.0.0:4321`, successful localhost/LAN HTTP responses, and stopping with Ctrl+C. Connecting from a separate phone still depends on your Wi-Fi routing and Windows firewall permissions.

### Development and production preview

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, normally `http://127.0.0.1:4321/`.

```sh
npm run build
npm run preview
```

The build creates `dist/`, containing static HTML and public assets. The current production page sends no JavaScript to the browser. Preview serves the production build; rebuild after changing source files. `npm run dev` updates the local development page as you save files.

If npm or Node is unavailable in a Windows terminal, add your existing Node installation to that terminal's PATH. For the installation used during development here:

```powershell
$env:Path = 'C:\Program Files\nodejs;' + $env:Path
npm run dev
```

## Project inventory

| Path | Purpose |
| --- | --- |
| `src/pages/index.astro` | Homepage and activity list |
| `start-local.cmd` / `scripts/start-local.mjs` | Windows launcher and native Node helper: press 1, start Astro on the LAN, print device URLs |
| `src/layouts/PageLayout.astro` | Spanish document, metadata, stylesheet, and fixed decorative school-logo watermark |
| `src/components/LibraryHeader.astro` | Centered library logo and Instagram on the right, followed by the welcome and an italic quotation with Dr. Seuss attribution |
| `src/components/FooterSignature.astro` | “Designed and developed by Anthony M. Aguilar”, with only the name linked to the WhatsApp draft; no displayed phone number or call action |
| `src/components/GradeLegend.astro` | Explanatory grade-color key |
| `src/components/ActivityCard.astro` | Reusable event card with optional time, image, cost, presenter, and information link |
| `src/data/activities.json` | All event content; edit this for routine updates |
| `src/lib/activities.js` | Shared grade colors, date labels, ordering, and content validation |
| `src/styles/global.css` | All styling, including narrow-screen and optional-image layouts |
| `public/images/` | Original library JPEG and school SVG, plus a lossless PNG watermark derivative for a smaller download |
| `astro.config.mjs` | Static output and disabled development toolbar |
| `package.json` / `package-lock.json` | Commands and installed dependencies |
| `bibliotecaSite.md` | Requirements, decisions, and implementation status |
| `wireframes/biblioteca-sjdp/` | Historical concept and authoritative design handoff |
| `AGENTS.md` | Project instructions and the stack approval rule |

`node_modules/`, `.astro/`, `dist/`, `.npm-cache/`, and `.verification/` are generated or local folders excluded by `.gitignore`. Environment files such as `.env` are also ignored. The repository keeps the source, npm lockfile, original artwork, and design references; Cloudflare generates its own build from the source.

## Change the welcome message and quotation

Open [src/components/LibraryHeader.astro](./src/components/LibraryHeader.astro). Near the bottom, find these elements:

```html
<h1>Bienvenidos a la biblioteca.</h1>
<figure class="library-quote">
  <blockquote>
    <p>“Your quotation goes here.”</p>
  </blockquote>
  <figcaption>— <span class="quote-author">Author name</span></figcaption>
</figure>
```

This is an editing example, not additional content to paste below the existing quote. Replace the text inside the existing `<h1>`, quotation `<p>`, and `quote-author` `<span>`. Keep their tags and classes so the formatting stays in place. The quotation marks and author attribution are typed manually. There is one quotation, with no automatic rotation.

To remove the quotation completely, remove its entire `<figure class="library-quote"> ... </figure>` block. Keep the welcome `<h1>` and surrounding header. For literal `<`, `>`, or `&` in Astro text, use `&lt;`, `&gt;`, or `&amp;`.

Change the section heading and the message shown when there are no activities in [src/pages/index.astro](./src/pages/index.astro):

```html
<h2 id="activities-title">Próximas actividades</h2>
```

The empty-list message is the paragraph with `class="empty-state"` in the same file.

## Update activities

Open [src/data/activities.json](./src/data/activities.json). The file is an array (`[ ... ]`); each object (`{ ... }`) supplies one activity card. Routine content updates only require editing this file.

### Activity fields

| Field | What to enter |
| --- | --- |
| `id` | Required unique identifier, such as `club-lectura-noviembre`. Prefer lowercase letters, numbers, and hyphens, without spaces. Never reuse another card's ID. |
| `title` | Required activity name. |
| `date` | `{ "year": null, "month": 11, "day": 20 }` for November 20 with an unconfirmed year, or `null` for **Próximamente**. Months are numbers from 1 through 12. Use a numeric year only when confirmed. |
| `time` | Display text such as `"9:00 a. m."` or `"12:00 p. m."`; use `null` to omit it. There is no time-zone conversion. |
| `location` | Required place name. The card adds **Lugar:** automatically. |
| `audience` | Required string: `"9"`, `"10"`, `"11"`, `"12"`, or `"all"`. It controls the grade label and outline color. Keep quotation marks around grade numbers. |
| `cost` | Optional display text such as `"$10"`; use `null` to omit it. The card adds **Costo:** automatically. |
| `presenter` | Optional presenter name; use `null` to omit it. |
| `description` | Optional short description; use `null` or omit the field when there is none. |
| `moreInfo` | Optional object with `text`, `label`, and an HTTPS `url`; see the link example below. Use `null` or omit it when unused. |
| `image` | Optional path such as `"images/club-lectura.png"`; use `null` for a text-only card. |
| `imageAlt` | Required descriptive text when `image` is supplied. Use `""` when there is no image. |

### Add, edit, or remove a card

To edit a card, locate its `title` and change the values in that object. To add a card, copy an existing object, paste it inside the outer `[ ... ]`, and give it a unique `id` and its real details.

For example, this is a complete one-card data file for reference. **Do not replace the current file with this example unless you intend to remove the existing activities.** The example activity is not part of the published schedule.

```json
[
  {
    "id": "club-lectura-ejemplo",
    "title": "Club de lectura (ejemplo)",
    "date": { "year": null, "month": 11, "day": 20 },
    "time": "9:00 a. m.",
    "location": "Biblioteca SJDP",
    "audience": "all",
    "cost": null,
    "presenter": null,
    "description": "Comparte tu libro favorito con el grupo.",
    "image": null,
    "imageAlt": ""
  }
]
```

Put a comma between neighboring activity objects: `},` followed by the next `{`. Do not put a comma after the final object or final field. JSON requires straight double quotes (`"`), has no comments, and uses the bare value `null`, not the string `"null"`. For a double quote inside text, escape it as `\"`, for example `"Tema: \"Mi libro favorito\""`. Accents and Spanish punctuation can be typed normally; save files as UTF-8. Keep JSON content as plain text rather than adding HTML tags.

To remove a completed or canceled activity, delete its entire object and fix the separating comma. There is no `hidden` or `published` switch. To show no activities, the complete file can be `[]`; the homepage will display its empty-list message.

### Dates and display order

Dates are entered as numbers, not a typed Spanish date. A dated card shows a short label such as **20 NOV**. A confirmed year is included in the accessible/full date and HTML date value; the visible short label still uses day and month. Set the entire `date` field to `null` when the activity has no confirmed date.

The build validates required content, unique IDs, supported audiences, calendar dates, optional time/description values, HTTPS information links, and image alternative text. Dated entries appear before date-pending announcements and are sorted by calendar date, regardless of their position in the JSON file. Entries with the same date, and undated entries, keep their relative file order. When a year is unknown, ordering uses month and day; use confirmed years for schedules crossing into a new year.

**Past activities are not automatically removed.** Remove completed entries yourself. The current supplied event years remain unconfirmed. Automatic expiry would require confirmed event years, the school's time zone, and a decision about archiving.

### Add a card's information link

Add this field inside the activity object, with a comma separating it from the surrounding fields:

```json
"moreInfo": {
  "text": "Para más información, visita nuestro Instagram",
  "label": "@biblioteca.sjdp",
  "url": "https://www.instagram.com/biblioteca.sjdp/"
}
```

This is a field snippet rather than a complete JSON file. The introductory text is followed by the clickable label; the card adds a final period. Use a full `https://` URL. If the library's Instagram account changes, update this URL and label in any relevant activities as well as the separate header link in `LibraryHeader.astro`.

### Add a supplied activity image

1. Put the chosen non-AI image in [public/images](./public/images/). In GitHub, open that folder, choose **Add file → Upload files**, and commit the upload.
2. Use a simple filename such as `club-lectura.png`; match capitalization and the extension exactly. Cloudflare's build environment is case-sensitive.
3. Set the activity's `image` to `"images/club-lectura.png"`. Leave `public/` out of this value and use forward slashes, not Windows backslashes.
4. Set `imageAlt` to a useful description of the supplied image. Upload the image before committing a card that refers to it, or commit both changes together locally.

Without an image, the card uses its full width for information. No placeholder illustration or empty image box is rendered. The header crops only surrounding logo whitespace with CSS; the JPEG artwork is not edited.

## Change colors, spacing, fonts, and logos

### CSS selector guide

Open [src/styles/global.css](./src/styles/global.css), search for the selector, and change its existing rule. Some mobile/desktop adjustments appear in `@media` blocks near the bottom; check those when a change only affects certain screen sizes.

| What to adjust | CSS selector / property |
| --- | --- |
| Default text color and system font | `:root` → `color` and `font-family` |
| Cream card background | `:root` → `--paper` |
| Page side padding and maximum width | `:root` → `--page-gutter`; `.page` → `max-width` |
| Space between logo row and welcome | `.header-identity` → `margin-bottom` (currently `2rem`) |
| Library logo's displayed size | `.library-logo` → `width` |
| Library JPEG's whitespace crop | `.library-logo img` → `top`, `left`, and `width` |
| Welcome size | `h1` → `font-size` |
| Quote size, color, italics, and line spacing | `.library-quote blockquote p` |
| Author appearance | `.library-quote figcaption` and `.quote-author` |
| “Próximas actividades” font and size | `#activities-title` (its font-size overrides the general `h2` rule) |
| Space between cards | `.activity-list` → `gap` |
| Card padding, outline thickness, and corners | `.activity-card` → `padding`, `border`, and `border-radius` |
| Activity title size | `h3` → `font-size` |
| Date and time sizes | `.activity-date`, `.activity-pending`, and `.activity-time` |
| Small activity image layout | `.activity-content.has-image`, `.postage-frame`, and `.postage-frame img` |
| Watermark visibility | `.school-watermark` → `opacity` (`0.05` means 5%) |
| Watermark size | `.school-watermark img` → `width` |
| Footer appearance | `.site-footer` and `.site-footer a` |

Grade colors are defined in the `audiences` array in [src/lib/activities.js](./src/lib/activities.js), rather than separately in every card. Change an audience's `color` there to update both its card outlines and legend dot. `label` is the compact legend text; `cardLabel` is the label on the card. Keep the audience IDs consistent with the JSON.

The heading alone uses the approved Google Fonts Bitcount Ink stylesheet loaded in `PageLayout.astro`; the rest of the site uses the system font. CSS changes within the existing design need no new packages. Ask before introducing additional font services, packages, frameworks, or build tools, as recorded in [AGENTS.md](./AGENTS.md).

### Replace logos

The displayed library logo is [public/images/biblioteca-sjdp.jpeg](./public/images/biblioteca-sjdp.jpeg). Replace that public asset, or change `logoUrl` in `LibraryHeader.astro` to a new filename. If the artwork dimensions change, update the image's `width`, `height`, and alternative text as needed, and review the CSS crop: it was tuned for the current JPEG's white margins. The root `bibliotecaSJDPlogo.jpeg` is a preserved original; replacing only that root file will not update the displayed logo.

The school watermark uses [public/images/school-watermark.png](./public/images/school-watermark.png) first, with [public/images/school-logo.svg](./public/images/school-logo.svg) as fallback. Update both public assets together, or change the `<picture>` paths in `PageLayout.astro`. Replacing only the SVG will leave the old PNG visible in browsers that support it. The root school SVG is a preserved original. The fixed watermark stays behind the content, ignores pointer input, and is hidden from assistive technology; retain those attributes when replacing its artwork.

## Publish updates and recover from mistakes

### Local editing workflow

From this project folder, first check for uncommitted work, then get changes made through GitHub:

```sh
git status
git pull --ff-only
```

If you have existing local edits, commit or otherwise save them before pulling. If the fast-forward pull reports diverging histories, stop and resolve the difference before publishing; do not force-push over the other changes.

Make your edits, inspect the local page, and build:

```sh
npm run build
```

After a successful build, review and upload your changes:

```sh
git diff
git add README.md src public
git diff --cached
git commit -m "Update library activities"
git push origin main
```

That `git add` command stages the usual content, styling, images, and documentation. Add any other files you intentionally edited by their path. `git diff` does not show untracked new files; use `git status` to find them, then inspect `git diff --cached` after staging. If npm is missing from PATH, use the Windows PATH command in the local setup section above.

Saving a file changes the local project. Committing records it in Git history. Pushing sends it to GitHub. Once Pages is connected, a successful Cloudflare build publishes the new version. A local build alone does not publish anything.

### Fix a failed build or undo an edit

- For a JSON syntax error, check the reported line for missing commas, trailing commas, unmatched braces, or quotation marks. For an activity validation error, read the named field or duplicate ID in the build log.
- If an image is missing, check that its file is committed under `public/images/` and that the JSON path's capitalization and extension match exactly. The current activity validation checks alternative text, not whether an image file exists.
- If the live page has old content, confirm your change reached `main`, then check Cloudflare's latest production deployment. A failed build leaves the previous successful website in place. Also confirm you are opening the production URL rather than a branch preview.
- To undo a small GitHub edit, open that file's **History**, find the previous version, and copy the correct text into a new edit, then commit it. Locally, `git log --oneline` shows commit IDs; `git revert COMMIT_ID` creates a new undo commit. Replace `COMMIT_ID` with the actual ID, review the result, then push it. Reverting an entire commit undoes every file changed in that commit.

## Cloudflare Pages setup

Cloudflare Pages is the selected provider. These are setup instructions; they do not mean an account connection, deployment, custom domain, or QR code has already been created.

1. In Cloudflare, go to **Workers & Pages → Create application → Pages → Import an existing Git repository** (the Git connection may be labeled **Connect to Git**).
2. Authorize GitHub access to `Slimtony1227/Biblioteca.SJDP`, select the repository, and begin setup.
3. Apply these values:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Leave blank; `package.json` is at the repository root |
| Build environment variable | `NODE_VERSION` = `24.19.0`, matching the tested local runtime |

4. Choose **Save and Deploy**, wait for success, and open the returned `pages.dev` address. Use the actual address Cloudflare assigns; the GitHub repository URL is not the public website URL.

Pages installs the npm dependencies and builds the site from this repository. Commit `package-lock.json`; keep generated `node_modules/` and `dist/` out of Git. The existing `output: 'static'` configuration is sufficient for this site; no adapter or additional npm package is required. Once connected with automatic deployments enabled, commits to `main` rebuild the production site, while other branches can receive preview deployments.

Official references: [Cloudflare's Astro build settings and Git deployment flow](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/) and [Node version configuration](https://developers.cloudflare.com/pages/configuration/build-image/). Pages does not infer the Node version from `package.json` engines in its v3 build system, so set `NODE_VERSION` explicitly.

After the first deployment, check the public page on a phone and computer, verify its links and artwork, and use the chosen stable homepage URL for a later printed QR code. Add a custom domain through the Pages project's **Custom domains** section if wanted.

## Mobile layout

The primary audience uses Android phones and iPhones. The CSS targets narrow screens from 320 CSS pixels upward, including portrait and short landscape viewports:

- Safe-area padding protects content around display cutouts and the iPhone home indicator. The viewport uses `viewport-fit=cover`; user zoom is unrestricted.
- The compact header uses a responsive 104–132px library logo and reserves 48px for Instagram. The date/audience row and long event details can wrap without clipping.
- Event details and the reflection use 16px text at the default root size. The grade key wraps as needed, while each dot/label pair stays together. Footer text is 13px and the credit wraps on narrow phones.
- Instagram and footer links have at least 48px-high touch targets, visible focus outlines, and touch feedback. Hover styles are limited to devices with a fine pointer and hover support.
- The fixed watermark uses a large-viewport-height unit with a `vh` fallback, keeping its center stable while mobile browser controls expand/collapse. The page uses the small viewport height as its minimum.
- The decorative watermark uses a compressed, lossless PNG export (159,093 bytes versus the 329,486-byte SVG, about 52% less watermark transfer), with the unchanged SVG as fallback. It was generated once using Astro's existing Sharp dependency; no package, runtime script, or additional build tool was added. The original supplied artwork is retained. Regenerate the PNG if the school artwork changes.

Build and asset checks do not replace Safari/Chrome or physical-phone layout testing. Browser visual inspection remains blocked in this session; verify scrolling, safe areas, enlarged text, and portrait/landscape on actual devices before public launch.

## Current content and verification

- Jardines de Rosa 3K: October 16, year unconfirmed; all grades; 7:15 a. m.; $10.
- Iniciación del Club de Asistentes de Biblioteca: October 23, year unconfirmed; all grades; 9:00 a. m.; Cancha de baloncesto de la Escuela SJDP; supplied invitation to bring classmates and support the new club.
- Packing Party Operation Christmas Child (Donaciones): November 13, year unconfirmed; all grades; Biblioteca SJDP; donations for children ages 2–14; linked Instagram account for more information. No time was supplied.
- OneDrive/teleprompter workshop: date pending; 12th grade; noon; supplied presenter and description retained. No price is implied.
- Production build completed successfully. The generated HTML contains the four activities, all five legend entries, Spanish copy, optional-field omissions, and no browser script.
- Browser inspection was blocked by the Codex app's URL policy. Mobile/desktop visual QA is still pending; responsive CSS is implemented but has not been visually verified.
- Cloudflare Pages is the selected hosting provider, with this GitHub repository as its source. The dashboard connection, public deployment, domain, and printable QR code have not been configured by these instructions.
