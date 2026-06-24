## 1. Fonts — self-hosted poster + serif body

- [x] 1.1 Verify Polish diacritics (Ą Ć Ę Ł Ń Ó Ś Ź Ż) in the chosen poster face (default: Anton; fallbacks: Oswald, Archivo Narrow)
- [x] 1.2 Add poster face woff2 (latin + latin-ext) to `static/fonts/`
- [x] 1.3 Add serif body face woff2 (default: Source Serif 4; alt: Lora — 400 + italic, latin + latin-ext) to `static/fonts/`
- [x] 1.4 Declare `@font-face` rules for both faces (in `_typography.css` or `_variables.css`), `font-display: swap`
- [x] 1.5 Confirm `head.html` preloads the hero poster font and that no external font CDN is requested

## 2. Design tokens — palette, fonts, geometry

- [x] 2.1 Update `_variables.css` colors: `--color-bg:#FAF6EC`, `--color-bg-alt:#F2EBD8`, `--color-primary:#1B3A5C`, `--color-secondary:#3E7B9C`, `--color-accent:#E8B84B`, `--color-text:#22201C`, `--color-border:#C9C2B2`
- [x] 2.2 Add font tokens: `--font-poster`, keep `--font-heading` (Playfair), add `--font-serif-body`, keep `--font-body` (Source Sans 3)
- [x] 2.3 Set radius tokens to 0 (`--radius-sm/md/lg: 0`) and remove/neutralize `--shadow-*` usage in favor of hairlines
- [x] 2.4 Verify amber CTA (amber bg + navy/ink text) passes WCAG AA contrast

## 3. Hero — net motif, texture, poster wordmark

- [x] 3.1 Rework `_hero.css`: deep-sea radial gradient + CSS dot-texture overlay (`::before`, `background-size:4px`), remove flat gradient
- [x] 3.2 Update `hero.html`: eyebrow label, poster wordmark (uppercase), italic subtitle, square CTAs
- [x] 3.3 Add inline dissolving fishing-net SVG (strokes denser at horizon, opacity fading downward) with amber floats in `hero.html`
- [x] 3.4 Make hero buttons square (0px), amber primary + ghost secondary; verify hover states
- [x] 3.5 Check hero on mobile — net does not overwhelm the title; title scales via `clamp()`

## 4. Typography — registers, lede drop cap, pull-quotes

- [x] 4.1 Update `_typography.css`: map poster/Playfair/serif-body/sans registers per spec
- [x] 4.2 Add lede + amber drop cap styling for the about-intro paragraph
- [x] 4.3 Add pull-quote typography (serif quote + uppercase sans byline/source)

## 5. Components — broadsheet discipline

- [x] 5.1 Rework `_cards.css`: pull-quotes in a ruled grid (hairline right/bottom dividers), remove drop-shadows, square corners
- [x] 5.2 Update `review-card.html` to the pull-quote variant
- [x] 5.3 Update `_nav.css` + `nav.html`: masthead band with poster wordmark + bottom border; keep mobile hamburger working
- [x] 5.4 Repurpose `wave-separator.html` to a thin net/horizon separator consistent with the hero
- [x] 5.5 Adjust `_layout.css` / `_responsive.css` for broadsheet rhythm (section padding, reading width) at 768/1024 breakpoints

## 6. DESIGN.md — awesome-design-md format

- [x] 6.1 Author root `DESIGN.md` with the 9 sections (theme, colors+roles, typography, components, layout, depth, do/don't, responsive, agent prompt guide) describing "Reportaż morski"
- [x] 6.2 Ensure DESIGN.md tokens match the final `_variables.css` values exactly

## 7. Verification

- [x] 7.1 Run `hugo server` and review homepage hero, quotes, intro, footer
- [x] 7.2 Verify all routes render: /spektakl, /ksiazka, /zespol, /fundacja, /recenzje, /galeria, /zamow, /aktualnosci
- [x] 7.3 Test responsive at <768px, 768–1024px, ≥1024px (nav collapse, pull-quote grid stacking)
- [x] 7.4 Confirm no external font requests in the network panel
- [x] 7.5 Run `hugo --minify` and confirm a clean production build
