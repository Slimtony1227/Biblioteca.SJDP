# Biblioteca SJDP — MVP image prompt

Historical record of the first concept generation. The user has since chosen non-AI images for the website, fun sans-serif typography, and removal of the decorative side strokes. Follow [wireframe-spec.md](./wireframe-spec.md) for current implementation requirements; the original prompt below is preserved unchanged as generation history.

Tool: built-in `image_gen`  
Use case: `ui-mockup`  
Input image 1: `C:\biblioteca.sjdp\bibliotecaSJDPlogo.jpeg`, supporting logo reference for insertion into the header, not a redesign target.  
Output: `wireframe.png` in this folder.

## Final generation prompt

Use case: ui-mockup.
Asset type: one medium-fidelity, carefully typeset Spanish library activities webpage mockup, portrait 1024 × 1536 image. A single mobile-first webpage composition with a roughly 430 CSS-pixel-wide layout scaled up crisply; no device frame or browser chrome. Show the entire compact header and both complete activity cards. This is an image of a website, not a paper flyer or presentation board.

Input image 1 is the existing Biblioteca Superior Jardines de Ponce logo. Place this exact identity, faithfully preserving its red book/house, black lettering, little pencil and heart, as a SMALL header logo. Visually trim only the large surrounding blank white margins when placing it, do not redraw the identity. Keep it on white. Do not use the reference's blank margins to make a huge header.

Visual direction: youthful, playful, calm, very easy to use for high-school grades 9–12. Restrained postcard aesthetic, white page and warm cream card surfaces (#FFF9EF). Plenty of useful breathing room without a large hero. Clear dark body text (#262626). Flat 2D web layout; no drop shadows or gradients. Slightly imperfect hand-drawn outlines and handwritten event titles/dates give a mailed-postcard feeling, while body details stay neatly aligned and highly legible. Formal bookish serif greeting and section heading. Friendly legible handwritten PRINT lettering, never difficult cursive, on event titles only. All practical details in a clean sans-serif. The page should feel mature enough for teenagers, not childish or corporate.

Order and hierarchy:
1. A compact white header with the small logo, followed by the formal greeting "Bienvenidos a la biblioteca." and the smaller reflective line "Cada lectura abre una puerta al mundo." No author attribution. Keep header compact, approximately the upper 18–20% of the page.
2. Section heading "Próximas actividades" in a bookish serif.
3. One small NONINTERACTIVE color key with tiny outline circles or short strokes and these exact labels: "9.º" orange #D47730, "10.º" blue #3478B7, "11.º" gray #777777, "12.º" wine #8B3B50, "Todos" soft black #262626. This is just a legend, not navigation, tabs, filters, or buttons.
4. Two generously readable but compact postcard-style activity cards in ONE vertical column, with about 16 CSS px gap. Outer page padding around 20 CSS px. Each card has a warm cream background, approximately 12 CSS px corner radius, and a thin 1.5–2 CSS px outline keyed to its audience. All details must remain within each card.

Card 1: soft black #262626 outline because everyone is invited. Top line has date "16 OCT" prominently on the left and the small plain audience label "Todos los grados" on the right. Under it use a modest narrow image area on the left (about 18–22% of the card width) containing a charming small cream postcard stamp illustration of a running shoe and one rose. No text inside the stamp. It must be secondary to the information. Main text area on its right. Exact content, with natural wrapping:
"Jardines de Rosa 3K"
"7:15 a. m."
"Lugar: Escuela Superior Jardines de Ponce"
"Costo: $10"
"Premios/Medallas para las primeras 300 personas"
Make the event name the largest card text. Keep time, location, price and short description easy to scan, with restrained dividers or label emphasis only if useful. No invented date year or weekday.

Card 2: wine #8B3B50 outline because it is for 12th grade. Top line has "Próximamente" as the date/status and the plain audience label "12.º grado" on the right. A similar modest stamp illustration on the left shows a laptop with a document and a small microphone, mostly cream and wine. No text inside the stamp. Main text area on its right. Exact content, with natural wrapping:
"Taller práctico de OneDrive y teleprompter"
"12:00 p. m."
"Lugar: Biblioteca SJDP"
"Prof. Verónica E. Cortés Cruz"
"Herramientas para el trabajo académico"
The workshop has NO confirmed date. Do not put October 16 on this card. Do not invent a cost. Give this longer title enough room; never shrink all the text to accommodate the image.

Composition: visually balanced, small illustrations left and neat information right, easy scanning, a little playful handwriting without clutter. Both events must be completely visible. The first card uses black, the second wine; the other grade colors appear only in the small explanatory legend. Only the two real supplied activities. Artwork is illustrative placeholder content, not official event poster art.

Strict avoid list: navbar, hamburger menu, footer, social feeds, registration, login, search, filters, month grid, big hero, oversized logo, QR code, calls-to-action, links/buttons that were not requested, extra cards, fake events, fake quote attribution, extra slogans, watermarks, device frame, desk scene, paper mockup, perspective, heavy textures, shadows, gradients, giant illustrations, scattered stickers, childlike doodles. All visible interface copy must be Spanish and spell the supplied text accurately with accents. This image proposes a visual MVP for later coding; it is not a working site.
