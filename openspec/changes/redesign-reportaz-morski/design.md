## Context

The current Welewetka site (Hugo, pure CSS) presents a "morsko-kaszubska"
palette with Playfair Display headings, but renders as a generic SaaS landing:
a flat blue gradient hero with no imagery, centered soft-shadow cards, and large
empty sections ("Najbliższe terminy", "W mediach"). The subject — a monodrama
about disappearing Kashubian culture, based on Stasia Budzisz's reportage book —
demands atmosphere, identity, and emotional weight the current design lacks.

Two existing assets anchor this redesign:

1. **The current CSS palette** (`assets/css/_variables.css`): sea-navy `#1B3A5C`,
   sea `#4A7C9B`, terracotta `#C17B3A`, paper `#FAFAF7` — already close to the
   right direction.
2. **The book cover** (welewetka_300dpi): steel-sea blue `~#3E7B9C` ground with
   paper texture, a heavy condensed cream uppercase wordmark, amber/mustard net
   floats `~#E8B84B`, and a **dissolving black fishing-net motif** — the visual
   heart of the project's identity.

The cover and the CSS palette are nearly the same colors; the cover is simply
bolder and adds a motif and a poster typeface. This redesign reconciles the site
with the cover and borrows layout *discipline* (not identity) from editorial
sites in the awesome-design-md collection.

Constraints: pure CSS (no framework), self-hosted fonts only (no external CDN),
Hugo Pipes pipeline, mobile-first with 768/1024 breakpoints, no content/config
changes.

## Goals / Non-Goals

**Goals:**
- Make the site read as an extension of the book cover and as a press reportage
  about a vanishing culture — not a SaaS landing.
- Give the hero a meaningful visual (dissolving fishing-net motif + amber floats)
  that expresses "disappearing", replacing the flat gradient.
- Establish broadsheet discipline: square corners, hairline dividers, press
  pull-quotes, masthead band, lede drop cap.
- Keep the Kashubian palette (sea/amber/paper) — borrow structure from WIRED-like
  editorial systems, not their black-and-white identity.
- Produce a project-root `DESIGN.md` (awesome-design-md format) so future
  AI-assisted UI work stays on-system.
- Work well **without** professional photography (typography + SVG carry it),
  with room to add imagery later.

**Non-Goals:**
- No content, routing, Hugo config, i18n, or build-pipeline changes.
- No literal reproduction of the book cover ("inspiration, not copy").
- No dark-only redesign; sections remain light/paper for reading.
- No JS framework or CSS framework introduction.
- Not adopting any single awesome-design-md file wholesale (e.g. Stripe, Notion).

## Decisions

### D1 — Direction: "Reportaż morski" (book-cover identity + WIRED discipline)

Three awesome-design-md directions were evaluated against the theme
(monodrama / reportage book / vanishing culture):

| Direction | Fit | Verdict |
|---|---|---|
| **WIRED** (broadsheet, serif, square, hairline) | Site is based on a *book*; broadsheet = natural. Serif already present. | ★★★★★ structure |
| **Sanity** (dark, sans + mono, neon) | Cinematic/theatrical, great for photos, but sans+mono+neon reads as *tech*, alien to folk culture. | ★★★★ atmosphere only |
| **Notion** (purple, pastel, workspace) | Warm and serif-friendly but SaaS-branded, least distinctive. | ★★★ |

**Chosen:** a hybrid — take *structure and discipline* from WIRED (broadsheet
grid, masthead band, square corners, hairlines, pull-quotes, serif body for
reportage), but take *identity* (palette + net motif + poster wordmark) from the
**book cover**. Rationale: this fixes the SaaS-look without stripping the
theme-specific, book-tied identity. A validated in-browser mockup confirmed the
direction.

*Alternative considered:* pure WIRED (rejected — loses the Kashubian color, all
black-and-white). Pure Sanity dark (rejected — tech/neon mismatch). Adopting a
single DESIGN.md verbatim (rejected — none match a folk-culture theatre piece).

### D2 — Palette: amber accent promoted to single signal color

Realign roles to the cover (close to current values):

```
--color-primary    #1B3A5C  deep navy   → dark hero, footer, wordmark on light
--color-secondary  #3E7B9C  sea         → links, hover, eyebrows, hairline tint
--color-accent     #E8B84B  amber/mustard (cover floats) → THE single signal
--color-bg         #FAF6EC  paper-soft  → page canvas
--color-bg-alt     #F2EBD8  cream       → reading bands (cover cream)
--color-text       #22201C  ink
--color-border     #C9C2B2  hairline
```

The amber accent is used **sparingly** (primary CTA, drop cap, footer top rule) —
like WIRED's inline link blue: rare and meaningful. This is the one **BREAKING**
token change vs. the documented `--color-accent: #C17B3A`.

*Alternative:* keep terracotta `#C17B3A`. Rejected — the cover's float color is
more vivid and ties the page to the book; terracotta reads muddier on navy.

### D3 — Typography: three-register system

- **Poster display** (wordmark, hero title): heavy condensed sans, uppercase —
  echoes the cover's "WELEWETKA". Candidates: **Anton** (closest to cover, single
  weight), **Oswald**, **Archivo Narrow**. Self-hosted woff2 (latin + latin-ext
  for Polish diacritics).
- **Section headings**: keep **Playfair Display** (literary register, already
  self-hosted).
- **Body / reportage**: add a serif body face for lede + pull-quotes
  (**Source Serif 4** or **Lora**); **Source Sans 3** stays for nav, metadata,
  buttons, eyebrows.

Rationale: the cover voice (poster sans) and the literary voice (Playfair) and
the reportage voice (serif body) map cleanly to three roles, mirroring WIRED's
"serif for narrative, sans for structure" with an added poster layer for the
brand wordmark.

*Alternative:* keep Playfair for the hero too (offered to user; user accepted the
poster direction via mockup). Poster diacritics must be verified for Polish.

### D4 — Hero net motif as inline SVG, CSS-driven

The dissolving fishing net + amber floats is an **inline SVG** in `hero.html`
(strokes denser at the horizon, fading/opacity-dropping downward to express
disappearance) over a radial sea gradient with a CSS dot-texture overlay
(`::before`, `background-size:4px`). No raster asset, no external request,
scales fluidly, themable via `currentColor`/tokens.

*Alternative:* a raster illustration from the cover artist (higher fidelity but
licensing + weight + not responsive) — deferred; SVG ships now, raster can
replace later.

### D5 — Square corners + hairlines replace radius + shadows

Set `--radius-* → 0` (or drop usage), replace `--shadow-*` with 1px
`--color-border` hairlines. Pull-quotes render in a ruled CSS grid (right/bottom
hairlines) instead of floating shadowed cards. Matches broadsheet discipline and
removes the SaaS "floating card" feel.

### D6 — Separators: net/horizon motif replaces SVG waves

`wave-separator.html` is repurposed to a thin net/horizon line consistent with
the hero, keeping the spec's "section separator" intent but on-theme.

### D7 — Scope the spec delta to `custom-theme` only

All affected requirements live in the existing `custom-theme` capability. Use a
delta spec (MODIFIED requirements) rather than new capabilities; behavior of
routing/content/gallery is untouched.

## Risks / Trade-offs

- **Poster font lacks Polish diacritics** → Verify Ą Ć Ę Ł Ń Ó Ś Ź Ż in chosen
  face before committing; subset latin-ext woff2. Fallback to `Arial Narrow`/
  Playfair if a glyph is missing.
- **Amber `#E8B84B` contrast on cream** for text → Use amber only for large
  display/CTA fills with dark ink text, never small body text; check WCAG AA on
  CTA (amber bg + navy text passes; verify).
- **BREAKING accent change** may surprise anyone referencing `--color-accent`
  → It's an internal CSS token, single project; documented in proposal + DESIGN.md.
- **Net SVG could read as decorative noise** → Keep low opacity, confine to hero
  + thin separators; test on mobile that it doesn't overwhelm the title.
- **Two new font families add page weight** → Subset aggressively (latin +
  latin-ext, only needed weights: poster 1 weight, serif body 400/italic);
  poster used only for wordmark/hero so a single weight suffices.
- **"Inspiration not copy" boundary** → Avoid replicating the cover's exact net
  drawing; use an original simplified net so it's an homage, not a reproduction.
- **Regression on existing pages** → Changes are token + partial level; verify
  /spektakl, /zespol, /recenzje, /galeria, /aktualnosci render correctly after.

## Migration Plan

1. Add poster + serif-body woff2 to `static/fonts/`; declare `@font-face`.
2. Update `_variables.css` tokens (palette, fonts, radius→0).
3. Rework `_hero.css` + `hero.html` (net SVG, texture, poster wordmark, square
   buttons), then ripple to `_typography.css`, `_cards.css`, `_nav.css`,
   `_layout.css`, `_responsive.css`; repurpose `wave-separator.html`.
4. Author root `DESIGN.md` (awesome-design-md format).
5. Verify with `hugo server` across all routes + breakpoints; run `hugo --minify`.

Rollback: revert the CSS/partial commit and remove added fonts; content and
config are untouched, so rollback is isolated to presentation.

## Open Questions

- **Poster typeface choice** — Anton (closest to cover), Oswald, or Archivo
  Narrow? Pending diacritic check. (Default: Anton.)
- **Serif body face** — Source Serif 4 vs Lora for lede/pull-quotes.
  (Default: Source Serif 4, pairs with Source Sans 3.)
- **Kashubian photography** — user referenced Shutterstock "kaszubski" results;
  licensing must be cleared before any stock photo is used. Design intentionally
  works without photos for now.
- **Net rendering** — ship simplified inline SVG now; revisit a commissioned
  raster from the cover artist later?
