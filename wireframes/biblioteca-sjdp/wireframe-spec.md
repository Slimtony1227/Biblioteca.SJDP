# Biblioteca SJDP - wireframe specification

## Purpose

- Page type: a single public landing page with upcoming school-library activities, reached primarily by scanning a printed QR code.
- Primary user goal: quickly learn what is happening, when, where, and which grades can attend.
- Fidelity: medium; concept accepted by the user with the revisions in this specification. This is a build handoff, not a functioning website.
- Target viewport: a narrow/mobile-first page represented by a portrait 1024 × 1536 raster image; interpret layout measurements below in CSS pixels around a 430 px viewport. The image is a visual reference rather than a literal pixel-perfect browser capture.
- Brief: [bibliotecaSite.md](../../bibliotecaSite.md).

Review status: preserve the concept's header, greeting, legend, and postcard-card composition. Use fun sans-serif typography and user-sourced non-AI activity images in code. Omit the decorative side strokes shown in the original raster. The first image is retained as a historical visual reference; these written revisions take precedence.

Implementation update (2026-10-15): the user subsequently authorized an Astro build with npm, plain CSS, and JavaScript/JSON. The local source now implements this handoff. The stage-specific exclusion of frontend coding below applies to the historical wireframe phase, not the newly authorized implementation. See `../../README.md` for the current inventory and verification limits; browser visual inspection is pending because the app's URL policy blocked it.

## Page structure

1. Compact identity header using the existing logo on white.
   - School logo revision (2026-10-15): remove the earlier top-left school-logo placement. Use the supplied school SVG once as a large, centered watermark behind the whole site at 5% opacity, sized to `min(115vw, 60rem)`. Keep this decorative layer fixed while scrolling, outside document flow, noninteractive, and hidden from assistive technology. The library logo stays centered and Instagram right-aligned in the compact header.
   - Later authorized addition (2026-10-15): a small clickable Instagram camera icon at the upper right links to `https://www.instagram.com/biblioteca.sjdp/` in a new tab. Preserve the centered library logo and compact header; use a Spanish accessible name, visible keyboard focus, and a 44px touch target.
2. Formal greeting and one short reflection.
3. “Próximas actividades” section heading and a small noninteractive grade-color key.
4. One vertical list of activity postcards: the October 16 3K, October 23 club initiation, November 13 Packing Party, then the undated workshop.

## Exact content

- Logo: use the original [bibliotecaSJDPlogo.jpeg](../../bibliotecaSJDPlogo.jpeg), preserving its lettering and artwork. The local original is `C:\biblioteca.sjdp\bibliotecaSJDPlogo.jpeg`.
- Main greeting: “Bienvenidos a la biblioteca.”
- Supporting quotation (replaces the original reflection): “The more that you read, the more things you will know. The more that you learn, the more places you'll go.” Display in italics with quotation marks; center “— Dr. Seuss” on its own line underneath in smaller wine-colored italic type. Both wording and attribution were supplied by the user.
- Section heading: “Próximas actividades”
- Legend, in order: “9.º”, “10.º”, “11.º”, “12.º”, “Todos”.

Repeated item 1:

- Date: “16 OCT” (accessible/full display equivalent: “16 de octubre”).
- Audience: “Todos los grados”.
- Title: “Jardines de Rosa 3K”.
- Time: “7:15 a. m.”
- Location: “Lugar: Escuela Superior Jardines de Ponce”.
- Price: “Costo: $10”.
- Description: “Premios/Medallas para las primeras 300 personas”.

Repeated item 2 (added 2026-10-15):

- Date: “23 OCT” (accessible/full display equivalent: “23 de octubre”; no year supplied).
- Audience: “Integrantes del Club”; the user's latest instruction restricts participation to club members. Retain the black outline and existing grade-color key.
- Title: “Iniciación del Club de Asistentes de Biblioteca”.
- Time: “9:00 a. m.”
- Location: “Lugar: Cancha de baloncesto de la Escuela SJDP”.
- Description: “Acompáñanos a dar inicio al Club de Asistentes de Biblioteca. ¡Traigan a 1 padre para apoyar a los nuevos integrantes de este nuevo club! (Solo para integrantes del Club)”
- No cost, presenter, or image was supplied; omit those fields from the rendered card. Use the all-grades black outline.

Repeated item 3 (added 2026-10-15):

- Date: “13 NOV” (accessible/full display equivalent: “13 de noviembre”; no year supplied).
- Audience: “Todos los grados”.
- Title: “Packing Party Operation Christmas Child (Donaciones)”.
- Location: “Lugar: Biblioteca SJDP”.
- Description: “Escoge un niño o una niña de entre 2 y 14 años para hacer una donación de artículos. ¡Juntos llevaremos alegrías a los niños de nuestras comunidades!”.
- More information: “Para más información, visita nuestro Instagram @biblioteca.sjdp.” Link the account name to `https://www.instagram.com/biblioteca.sjdp/`.
- No time, cost, presenter, or image was supplied; omit those fields from the rendered card. Use the all-grades black outline.

Repeated item 4:

- Date/status: “Próximamente”.
- Audience: “12.º grado”.
- Title: “Taller práctico de OneDrive y teleprompter”.
- Time: “12:00 p. m.”
- Location: “Lugar: Biblioteca SJDP”.
- Presenter: “Prof. Verónica E. Cortés Cruz”.
- Description: “Herramientas para el trabajo académico”.

Interface copy is Spanish; the user-supplied Dr. Seuss quotation remains in English as provided. No book title or source URL was supplied for the quotation. The four event entries are based on the user's information, with spelling, capitalization, and accents normalized in the brief. The Packing Party includes the user-requested Instagram information link. No event year, weekday, workshop date, workshop price, or registration was supplied.

## Layout

- Content width: one column; approximately `max-width: 46rem` for a later desktop layout, reduced to the viewport width less side padding on phones. This desktop width is an implementation proposal, not a second generated design.
- Alignment: centered header; left-aligned list and event details.
- Column structure: one page column. Each card has a date/audience row, then a small optional image column on the left and the main information on the right.
- Major proportions: logo approximately 110–135 CSS px wide on mobile; card image around 18–25% of card width. Keep the title, date, location, time, and description visually dominant. Let text use the available width when an image has not been supplied.
- Borders and dividers: approximately 1.5–2 px card outline in the audience color, 10–14 px corner radius. The illustration may have a subtle stamp-like edge. Slight irregularity is a stylistic detail, not a reason to compromise alignment.
- The first image has expressive large headings. In implementation preserve the user's priority of a compact welcome and promptly visible activities; use the practical text sizes below if literal raster scaling would push the list too far down.
- No shadows or gradients are needed. The image's slight paper-like variation is optional; a flat cream surface is sufficient.
- Keep the slightly old-school, janky/DIY character through the supplied images, playful type, and postcard shapes. Do not reproduce the extra ray/dash clusters beside headings, dates, status, or grade labels.

## Spacing

- Page edges: about 16–20 px on phones, 24–32 px on wider viewports.
- Section gaps: the user's later “two fingers” spacing request sets 2rem (32px at the default root size) between the logo row and welcome heading. Retain 8–12 px between greeting/reflection, 20–28 px before the activity heading, 12–16 px between heading/legend/list, and 16–20 px between cards.
- Component padding: approximately 14–18 px per card, with 12–16 px between image and text.
- Human-language instruction and interpretation: “small logo and greetings immediately leading to the list” means no full-height hero or large spacer. “Postal card style, small in the left” means a narrow supporting illustration beside readable information, not a full-width poster.
- Let cards grow vertically for actual content. Do not crop a long title, location, or presenter to force identical heights.

## Typography

- Activity heading size update (2026-10-15): “Próximas actividades” now scales from 28px on phones to 36px on larger screens at the default root size, using `clamp(1.75rem, 1.25rem + 2vw, 2.25rem)`. This overrides the earlier approximate section-heading sizes only; the welcome and card-title sizes are unchanged.

- Later user selection (2026-10-15): use **Bitcount Ink** only for the “Próximas actividades” heading (`#activities-title`), at weight 700 with normal letter spacing. Load the user's Google Fonts stylesheet for weights 100–900 with `display=swap`, plus the supplied preconnects. Keep the system sans-serif fallback and the existing font choices everywhere else.

- Typeface direction: fun, legible sans-serif for the coded interface, replacing the generated handwritten lettering. Preserve the header/greeting's composition and more formal tone through hierarchy, spacing, and restrained styling. Exact font families are not selected; font matching to the raster is not required.
- Heading treatment: approximately 24–30 px for the greeting and section heading on phones; around 21–27 px for card titles. Use friendly shapes and weights rather than scribbled or cursive letterforms. Keep the greeting more formal than the activity titles.
- Supporting text treatment: around 14–16 px for details with a comfortable line height near 1.4–1.5. Keep the presenter, time, and long school name readable. The reflection may be 14–16 px in an upright, restrained style.
- Case and letter spacing: Spanish sentence case; “OCT” and “3K” as supplied in the display copy. Ordinary letter spacing and preserved accents.
- Prioritize legibility over imitating every irregular stroke in the raster image.

## Color

- Background: white `#FFFFFF` for page/header, warm cream `#FFF9EF` for postcard surfaces.
- Text: soft black `#262626`. Wine may be used for the 12th-grade status/audience label.
- Borders: audience-specific; the 3K, club initiation, and Packing Party use `#262626`, and the workshop uses `#8B3B50`.
- Accent mapping:

| Audience | Color |
| --- | --- |
| 9.º | Orange `#D47730` |
| 10.º | Blue `#3478B7` |
| 11.º | Gray `#777777` |
| 12.º | Wine `#8B3B50` |
| All grades / Todos | Soft black `#262626` |

- These hex values interpret the user's color choices; no exact school palette was supplied.
- Retain explicit audience text on every card so color is not the only eligibility cue.
- The original image includes rose/wine illustrations that will be replaced by the user's assets. Imagery never overrides the audience color mapping: the 3K remains black-outlined and open to all grades.
- Remove the red/wine side strokes beside “Próximas actividades” and the small ray/dash clusters beside “Próximamente”, “Todos los grados”, and “12.º grado”. Do not repeat that motif beside dates or other labels. Keep the grade legend's color marks and the card/stamp borders. Subtle event-title underlines are separate from these rejected side accents and may remain restrained as in the concept.

## Components and placeholders

- Logo:
  - Purpose: establish the library's identity.
  - Shape/aspect ratio: preserve the artwork's natural proportions; remove only excess display whitespace when implementing, not any logo content.
  - Visible states: one small static mark on white. Use the supplied file in the eventual build; the generated rendition is not a replacement brand asset.
- Grade-color legend:
  - Purpose: explain the card outlines.
  - Shape/aspect ratio: one compact line of colored dots/strokes with text labels, wrapping if necessary.
  - Visible states: explanatory only; no selected state, filter, or button behavior.
- Activity postcard:
  - Purpose: communicate the full supplied event details without extra navigation.
  - Shape/aspect ratio: a flexible-height landscape rectangle inside the single-column list.
  - Visible states: dated event; announcement with date pending (“Próximamente”).
- Activity images:
  - Purpose: give the postcard a small recognizable visual cue.
  - Shape/aspect ratio: modest square/portrait stamp-like area, approximately 64–90 px wide on mobile.
  - Visible states: user-chosen pink bow or similar for the 3K; user-chosen OneDrive/teleprompter logos or imagery for the workshop. Both are pending supply.
  - Production images must not be AI-generated. Do not extract or reuse the concept's shoe/rose or laptop/microphone drawings as production assets. Do not assume a specific teleprompter brand.
  - Keep file paths replaceable in event data. When no image is supplied, render a complete text card without a broken-image marker or generated substitute.
  - These images should help create the user's old-school, slightly janky feel while remaining small and secondary to event details.
- Empty state:
  - Purpose: later communicate when there are no upcoming activities.
  - Shape/aspect ratio: plain text in the list area.
  - Visible states: not shown in this two-event mockup. Draft future copy: “Pronto anunciaremos nuevas actividades.”

## Responsive behavior

Mobile implementation update (2026-10-15): Android phones and iPhones are the primary audience. Target widths from 320 CSS pixels upward, safe-area insets in portrait/landscape, and unrestricted user zoom. The header logo scales from 104 to 132px with a reserved 48px Instagram target. Keep details at 16px, allow long titles/details and the grade key to wrap, and let the footer credit wrap on narrow phones with a 48px-high WhatsApp link. Compact the header further in short landscape viewports. Keep the watermark fixed at 5% opacity with a stable large viewport height and a `vh` fallback. Serve the smaller lossless PNG watermark export with the original SVG as fallback. These later implementation decisions refine the original approximate measurements below. Actual phone-browser visual verification remains pending.

- Small-screen stacking: keep one card per row. At very narrow widths around 360 px or below, the image may move above the details or shrink so the text stays comfortably readable; the event date/audience row may wrap.
- Width changes: maintain one main page column at all widths; widen card text space on desktop without converting the page into a grid.
- Spacing changes: reduce page/card padding slightly on smaller phones, retain clear card separation.
- Text-size changes: modest heading adjustment; keep useful detail text readable rather than shrinking the whole card to match the image.
- Allow long titles and the full school name to wrap without clipping or horizontal scrolling.
- These are instructions for a later build; responsiveness has not been implemented or browser-tested in this image stage.

## Interaction notes

- Static in this wireframe: all content, legend, logo, images, and cards. There are no visible controls to implement.
- Behavior implied for a later build: scanning the printed QR opens a stable public page; visitors scroll to read all upcoming activities.
- Show dated upcoming events in chronological order, followed by date-pending announcements. Keep “Próximamente” independent of the first event's date.
- The user will maintain a simple isolated event data list/file with Codex. A shared audience-to-color map should control borders rather than manual repeated styling.
- Event data should support optional image, price, and presenter, plus a nullable date. Do not require fields the user has not supplied.
- The year of October 16 and the school's time zone require confirmation before any automatic date filtering. Do not silently use the development computer's time zone.
- Past-event archiving is undecided; the main page's confirmed scope is everything upcoming.

## Exclusions

- No navbar, hamburger menu, login, registration, payment, book catalog, search, filters, month grid, social feed, or added buttons.
- The initial wireframe excluded a footer. The user's latest request on 2026-10-15 authorizes only the shared credit “Designed and developed by Anthony M. Aguilar”, with Anthony's name linked to the WhatsApp draft. Remove the displayed phone number and call action; retain the page's existing styling.
- No QR code inside this mockup; it is intended for the eventual printed access material.
- No extra invented events, unsupported workshop date/price, event registration link, or quotations/attributions beyond the user's supplied Dr. Seuss quote.
- No large hero illustration, oversized identity block, heavy shadows, gradients, or elaborate decorative scene.
- No AI-generated production activity images, including crops of the original mockup's illustrations.
- No decorative ray/dash clusters beside “Próximas actividades”, “Próximamente”, audience/grade labels, or dates. See the user's [reference crop](./references/unwanted-accent-strokes.png). Card outlines, stamp edges, and legend dots remain.
- No HTML/CSS/frontend build in this stage.

## Assumptions

- The phone experience is primary because students will scan printed QR codes.
- The user replaced the original draft reflection with the English Dr. Seuss quotation and attribution above. Preserve the welcome and the supplied quotation wording.
- “12 media día” means noon and is displayed as `12:00 p. m.`.
- The race date is displayed without a year or weekday because the user did not explicitly supply a year. The current project context suggests 2026, but that inference is not encoded as a confirmed fact.
- Currency remains `$10`, as supplied; no currency code or additional cost information is invented.
- The user explicitly wants to keep the grade-color legend; it is explanatory, not an interactive feature.
- Final activity image files have not been supplied. The user plans to find non-AI images, and cards can be implemented with optional image fields in the meantime.
- Exact fonts and color hex values remain adjustable.
- The user likes the overall concept. Typography, imagery, and decoration changes in this specification are confirmed refinements for implementation.

## Source of truth

This specification is authoritative for exact copy, ordering, behavior, implementation details, and the user's latest refinements. `wireframe.png` records the accepted overall composition but includes superseded generated imagery, handwriting, and decorative side strokes. Follow this specification for those differences; do not treat those raster details as approved production requirements.

Historical generation record: [imagegen-prompt.md](./imagegen-prompt.md). The built-in `image_gen` tool was used for the first concept with the local logo as a supporting reference. The original generated file is preserved outside the project, and a copy is saved here as `wireframe.png`. The historical prompt does not override the user's subsequent no-AI-production-imagery and no-side-strokes requirements.
