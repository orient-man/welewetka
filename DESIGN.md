# Reportaż morski — Design System

The visual language for **Welewetka. Jak znikają Kaszuby** — a theatrical
monodrama based on Stasia Budzisz's reportage book, produced by Fundacja
Wiatrakcje. The system marries the **book cover's identity** (steel-sea blue,
amber net floats, a dissolving fishing-net motif, a heavy poster wordmark) with
**editorial / broadsheet discipline** (square corners, hairline rules,
press pull-quotes, a serif reportage voice). It is a press dossier about a
vanishing culture — not a SaaS landing page.

This document is the single source of truth for AI-assisted UI changes. Keep it
in sync with `assets/css/_variables.css`.

---

## 1. Theme

- **Name:** Reportaż morski ("sea reportage").
- **Mood:** elegiac, documentary, weathered, dignified. The site should feel
  like a broadsheet feature about something disappearing — atmospheric, never
  cheerful or corporate.
- **Two anchors:**
  1. *Identity* from the book cover — palette, the dissolving fishing-net motif,
     amber floats, and the condensed uppercase poster wordmark.
  2. *Discipline* from editorial systems (WIRED-like) — broadsheet grid, masthead
     band, square corners, 1px hairlines, serif body for narrative + sans for
     structure.
- **Metaphor:** the **fishing net dissolves downward** — denser at the horizon,
  fading into the depths — visually expressing "jak znikają Kaszuby" (how the
  Kashubians disappear).
- **Constraints:** pure CSS (no framework), self-hosted fonts only (no external
  CDN), Hugo Pipes, mobile-first with 768/1024 breakpoints. Works without
  photography (type + SVG carry the design).

---

## 2. Colors + Roles

All colors are CSS custom properties in `assets/css/_variables.css`.

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#FAF6EC` | Paper-soft — the page canvas. |
| `--color-bg-alt` | `#F2EBD8` | Cream — alternating reading bands (`.section--alt`). |
| `--color-primary` | `#1B3A5C` | Deep navy — dark hero ground, footer, nav wordmark, headings, link text. |
| `--color-secondary` | `#3E7B9C` | Sea — eyebrows, hover, underline/decoration accent, hairline tint, net diamonds. |
| `--color-accent` | `#E8B84B` | Amber/mustard (the cover's net-float color) — **the single signal color**. |
| `--color-text` | `#22201C` | Ink — body copy, CTA labels on amber. |
| `--color-text-light` | `#5A554C` | Muted ink — metadata, captions, sources. |
| `--color-border` | `#C9C2B2` | Hairline — 1px rules and dividers everywhere. |
| `--color-white` | `#FFFFFF` | Card fills on paper (team/blog cards). |

### Amber is sacred

`--color-accent` is reserved as a **rare signal**, used in exactly these places:

- the **primary CTA** fill (amber bg + ink label),
- the **lede drop cap** on the homepage intro,
- the **footer top rule** (3px amber band),
- the **section kicker rule** above each `h2` (a short amber tick),
- tiny **net-float dots** in the hero SVG and separators.

**Never** use amber as a background for paragraph text, and never use amber text
on cream/paper at body size.

### Contrast (WCAG)

| Pair | Ratio | Verdict |
|---|---|---|
| Amber `#E8B84B` bg + navy `#1B3A5C` text | 6.30:1 | AA pass (CTA hover/ghost) |
| Amber `#E8B84B` bg + ink `#22201C` text | 8.82:1 | AA pass (primary CTA) |
| Amber `#E8B84B` bg + white text | 1.84:1 | **FAIL — never do this** |
| Ink `#22201C` on paper `#FAF6EC` | 15.1:1 | AA pass (body) |
| Navy `#1B3A5C` link text on paper | 10.8:1 | AA pass (links use navy text) |
| Amber `#E8B84B` on navy `#1B3A5C` (footer email) | 6.30:1 | AA pass |

> Sea `#3E7B9C` as **text** on paper is only 4.31:1, so links use **navy text**
> with sea as the underline/hover accent, not sea as the body link color.

---

## 3. Typography

A **three-register system** plus a structural sans. All faces are self-hosted
woff2 (latin + latin-ext for Polish diacritics) in `static/fonts/`, declared as
`@font-face` with `font-display: swap` in `layouts/partials/head.html`. No
Google Fonts or external CDN is ever requested.

| Token | Face | Register / Use |
|---|---|---|
| `--font-poster` | **Anton** (heavy condensed, uppercase) | Hero wordmark, nav masthead, event day number, drop cap. Single weight (400). |
| `--font-heading` | **Playfair Display** (400/700) | Section headings `h1`–`h6` (literary voice). |
| `--font-serif-body` | **Source Serif 4** (400 + italic) | Reportage reading — lede, pull-quotes, blockquotes, intro paragraphs. |
| `--font-body` | **Source Sans 3** (400/600) | Nav links, eyebrows, metadata, buttons, default body copy. |

### Scale

`--text-sm 0.875rem` · `--text-base 1rem` · `--text-lg 1.125rem` ·
`--text-xl 1.25rem` · `--text-2xl 1.5rem` · `--text-3xl 2rem` ·
`--text-4xl 2.5rem` · `--text-5xl 3.25rem`.

The hero wordmark scales fluidly with `clamp(3rem, 13vw, 7.5rem)`; the subtitle
with `clamp(1.125rem, 3.5vw, 1.75rem)`.

### Register rules

- Poster face is **always uppercase** with positive letter-spacing (~0.04em).
- Eyebrows / bylines / sources / nav: uppercase sans, `letter-spacing` 0.08–0.22em.
- Lede: serif body, `--text-xl`, with an **amber drop cap** in the poster face.
- Pull-quotes: serif body quote + uppercase sans byline/source.

### Polish diacritics

The poster face **must** carry Ą Ć Ę Ł Ń Ó Ś Ź Ż. Anton's `latin` subset covers
Ó/ó; its `latin-ext` subset covers the rest — verified. If swapping the poster
face, re-verify all nine before shipping; fall back to `Arial Narrow` / Playfair
for any missing glyph.

---

## 4. Components

Broadsheet discipline governs every component.

- **Buttons** (`.btn`): square (0 radius), 1px border, uppercase sans label.
  - `.btn--primary` / `.btn--accent`: amber fill + ink label (the CTA).
  - `.btn--ghost`: transparent + white border (on the dark hero).
  - `.btn--outline`: navy outline (on light sections).
- **Hero** (`.hero`): deep-sea radial gradient, 4px paper-dot `::before` texture,
  an inline dissolving fishing-net SVG (`.hero__net`, masked to fade downward)
  with amber floats, an eyebrow, the poster wordmark, and an italic serif subtitle.
- **Pull-quotes / review cards** (`.review-card`): arranged in a **ruled grid**
  (`.reviews-grid` with top/left hairlines; each card carries right/bottom
  hairlines). No shadow, square corners, hanging amber quote mark, serif quote,
  uppercase sans byline + source.
- **Press quotes** (`.press-quote`): large centered serif italic, separated by
  bottom hairlines, with an uppercase sans cite.
- **Event cards** (`.event-card`): a ruled list (hairline rows), poster-face day
  number on a navy date block, uppercase sans venue.
- **Navigation** (`.nav`): a **masthead band** — paper ground, poster wordmark,
  2px navy bottom border; active link gets an inset amber underline. Mobile
  hamburger collapses the menu into a paper dropdown.
- **Separators** (`.net-separator`, from `wave-separator.html`): a thin horizon
  line with a sparse net-diamond band and amber floats — consistent with the hero,
  replacing the old SVG waves.
- **Footer**: navy ground, 3px amber top rule, poster-face organisation name,
  amber email link.

---

## 5. Layout

- **Containers:** `--container-max: 1140px` (default), `--container-narrow: 780px`
  (reading width for prose and pull-quotes).
- **Section rhythm:** `.section` pads `--space-4xl` (6rem) top/bottom for an airy
  broadsheet cadence; `.section--alt` alternates the cream reading band.
- **Section heads:** each `h2` carries a short amber kicker rule (3px × 56px)
  above it via `::before`.
- **Grid:** mobile-first single column; `.reviews-grid`, `.team-grid`, `.gallery`
  go 2-up at ≥768px and 3-up at ≥1024px. `.grid--2` / `.grid--3` helpers follow
  the same steps.
- **Spacing scale:** `--space-xs 0.25rem` → `--space-4xl 6rem` (xs, sm, md, lg,
  xl, 2xl, 3xl, 4xl).

---

## 6. Depth (Elevation)

Broadsheet design has **no floating cards**. Elevation is expressed with
**1px `--color-border` hairlines and ruled grids**, not drop-shadows.

- `--shadow-sm/md/lg` are deliberately set to `none` (no-op tokens) so any stray
  reference cannot reintroduce a SaaS-style shadow.
- `--radius-sm/md/lg` are all `0` — every corner is square.
- Separation comes from: hairline dividers, the cream/paper band alternation,
  the navy hero/footer blocks, and the amber signal accents.

---

## 7. Do / Don't

**Do**
- Use amber only as a rare signal (CTA, drop cap, footer rule, section tick, net floats).
- Keep corners square and dividers to 1px hairlines.
- Use the serif body for narrative (lede, quotes) and sans for structure (nav, metadata).
- Keep the hero net low-opacity and *behind* the text; let it fade downward.
- Set the wordmark and mastheads in uppercase Anton.
- Maintain the paper/cream canvas for all reading sections.

**Don't**
- Don't put white text on amber, or amber text on paper at body size.
- Don't add border-radius or drop-shadows ("floating card" look).
- Don't reintroduce the flat blue gradient hero or generic SVG waves.
- Don't reproduce the book cover's exact net drawing — keep it an original homage.
- Don't load fonts from Google Fonts or any external CDN.
- Don't let the net motif overwhelm or sit on top of the hero title.

---

## 8. Responsive

Mobile-first; two breakpoints.

- **< 768px:** single column; nav collapses to a hamburger + paper dropdown; the
  hero wordmark shrinks via `clamp()` (min 3rem) so the net never overwhelms it;
  pull-quote and team grids stack to one column.
- **768–1024px:** nav expands to a horizontal masthead; `.reviews-grid`,
  `.team-grid`, `.gallery` go 2-up; footer becomes a row.
- **≥ 1024px:** grids go 3-up; the wordmark reaches its `clamp()` max (7.5rem);
  separators grow to 48px tall.

The hero net SVG uses `preserveAspectRatio` slicing and a downward opacity mask,
so it scales without overwhelming the title at any width.

---

## 9. Agent Prompt Guide

When asked to build or change UI for this site, instruct the agent to:

- **Honor the tokens.** Pull every color, font, space, and radius from
  `assets/css/_variables.css`. Never hardcode hex values that duplicate a token.
- **Respect amber scarcity.** If a change would use amber outside the five
  sanctioned roles (CTA, drop cap, footer rule, section tick, net floats), stop
  and reconsider.
- **Stay broadsheet.** Square corners, 1px hairlines, ruled grids — no radius,
  no shadows, no floating cards.
- **Pick the right register.** Poster (Anton) for wordmark/masthead/display;
  Playfair for section headings; Source Serif 4 for narrative/quotes; Source
  Sans 3 for nav/metadata/buttons.
- **Keep fonts local.** Add new faces as self-hosted woff2 (latin + latin-ext),
  declare `@font-face` with `font-display: swap` in `head.html`, and verify
  Polish diacritics. Never add an external font link.
- **Theme the motif, don't copy it.** Reuse the dissolving-net + amber-float
  language (hero, separators) as an original homage to the cover.
- **Check contrast.** Any new text/background pair must meet WCAG AA (≥4.5:1 for
  body, ≥3:1 for large). CTA labels on amber use ink/navy, never white.
- **Mind the CSS pipeline.** Partials are concatenated explicitly in `head.html`
  (`resources.Concat`), not via `@import`. Any new `_*.css` file must be added to
  that slice to take effect.
