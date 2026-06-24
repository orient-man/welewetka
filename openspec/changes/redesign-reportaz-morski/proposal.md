## Why

The current site looks like a generic 2018-era SaaS landing page — a flat blue
gradient hero with no imagery, soft centered cards, and large empty sections.
For a theatrical monodrama about the *disappearing* Kashubian culture, rooted in
Stasia Budzisz's reportage book, the design carries none of the subject's
emotion, atmosphere, or visual identity. The book cover already provides a
strong, professional visual language (steel-sea blue, amber net floats, a
dissolving fishing-net motif) that the website ignores. This redesign aligns the
site with the book's identity and the gravity of the theme.

## What Changes

- **Redirect the visual language to "Reportaż morski"** — a press/broadsheet
  aesthetic (discipline borrowed from editorial sites like WIRED) carrying the
  book cover's palette and motif, replacing the SaaS-template look.
- **Hero** gains a dissolving **fishing-net SVG motif** with amber floats
  (echoing the book cover) over a deep-sea gradient with paper texture, replacing
  the flat blue gradient. The net visually expresses "disappearing".
- **Color palette** shifts the accent role to amber/mustard `#E8B84B` (book-cover
  float color) used sparingly as the single signal color; sea-blue and cream
  roles realign to the cover. **BREAKING** for the documented `--color-accent`
  value.
- **Typography** adds a heavy condensed poster sans (uppercase) for the
  wordmark/hero display, keeps Playfair Display for section headings, and
  introduces a serif body face for reportage-style reading (pull-quotes, lede
  with drop cap). Source Sans 3 remains for nav/metadata.
- **Components** adopt broadsheet discipline: square corners (0px radius),
  1px hairline dividers instead of drop-shadows, press-style pull-quotes in a
  ruled grid, a masthead band, and a lede drop cap.
- **Section separators**: the SVG "wave" dividers are replaced by the
  net/horizon motif consistent with the hero.

This is a **visual redesign only** — no content, routing, Hugo config, or build
pipeline changes. All existing pages, partials, and shortcodes keep working.

## Capabilities

### New Capabilities
<!-- None — this redesign modifies the existing theme capability rather than introducing new behavior. -->

### Modified Capabilities
- `custom-theme`: The color-palette, typography, homepage hero, and section-separator
  requirements change. The accent color, font stack (added poster + serif body
  faces), hero composition (net motif + texture), and separators (net/horizon
  instead of waves) are redefined. Component styling gains square-corner /
  hairline / pull-quote rules.

## Impact

- **CSS** (`assets/css/`): `_variables.css` (palette + new font tokens, radius
  → 0), `_hero.css` (net motif, texture, poster wordmark, square buttons),
  `_typography.css` (poster + serif-body faces, drop cap), `_cards.css`
  (pull-quote grid, hairline borders), `_nav.css` (masthead band),
  `_layout.css` / `_responsive.css` (broadsheet rhythm). Possibly a new
  `_net.css` for the motif.
- **Fonts** (`static/fonts/`): add self-hosted woff2 for the poster face
  (e.g. Anton / Oswald / Archivo Narrow) and a serif body face
  (e.g. Source Serif 4 / Lora), keeping the no-external-font-CDN rule.
- **Layouts** (`layouts/partials/`): `hero.html` (net SVG + eyebrow + poster
  wordmark), `nav.html` (masthead), `wave-separator.html` (→ net/horizon motif),
  `review-card.html` (pull-quote variant). `layouts/index.html` section rhythm.
- **New design artifact**: a `DESIGN.md` at the project root, in the
  awesome-design-md format (9 sections), documenting the "Reportaż morski"
  system so future AI-assisted UI changes stay consistent.
- **No impact** on `content/`, `config/`, `blog-aktualnosci`, `content-pages`,
  `photo-gallery`, or `hugo-project-setup` capabilities.
