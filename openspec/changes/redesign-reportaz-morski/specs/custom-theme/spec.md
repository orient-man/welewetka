## MODIFIED Requirements

### Requirement: Color palette — morsko-kaszubska
The system SHALL use CSS custom properties for the color palette defined in `assets/css/_variables.css`, realigned to the book cover's "Reportaż morski" identity: `--color-bg: #FAF6EC` (paper-soft), `--color-bg-alt: #F2EBD8` (cream reading bands), `--color-primary: #1B3A5C` (deep navy), `--color-secondary: #3E7B9C` (sea), `--color-accent: #E8B84B` (amber/mustard — the book cover's net-float color), `--color-text: #22201C` (ink), `--color-border: #C9C2B2` (hairline). The amber accent SHALL be used sparingly as the single signal color (primary CTA, lede drop cap, footer top rule) and SHALL NOT be used for small body text.

#### Scenario: Consistent colors across pages
- **WHEN** any page is loaded
- **THEN** headings use `--color-primary`, links and hover states use `--color-secondary`, CTA buttons use `--color-accent`, body text uses `--color-text`

#### Scenario: Amber accent is reserved as a signal color
- **WHEN** the amber accent `--color-accent` is applied
- **THEN** it appears only on the primary CTA, the lede drop cap, or the footer top rule — not as a background for paragraph text

#### Scenario: CTA contrast is accessible
- **WHEN** a primary CTA renders with the amber accent background
- **THEN** its label uses dark navy/ink text meeting WCAG AA contrast

### Requirement: Typography — self-hosted fonts
The system SHALL use a three-register, self-hosted font system loaded from woff2 files in `static/fonts/` with no external font CDN requests: a heavy condensed poster sans (uppercase) for the wordmark and hero display title, Playfair Display (serif) for section headings, a serif body face (e.g. Source Serif 4 or Lora) for reportage reading such as the lede and pull-quotes, and Source Sans 3 (sans-serif) for navigation, metadata, eyebrows, and buttons. The poster face SHALL include Polish diacritics (latin-ext subset).

#### Scenario: Fonts load without external requests
- **WHEN** the site is loaded
- **THEN** no requests are made to Google Fonts or other external font CDNs

#### Scenario: Poster wordmark renders with Polish diacritics
- **WHEN** the wordmark or hero title containing Polish characters (e.g. Ą, Ę, Ł, Ó) is rendered in the poster face
- **THEN** all diacritics display correctly without falling back to a different font

#### Scenario: Register mapping
- **WHEN** any page renders text
- **THEN** the hero/wordmark uses the poster face, section headings use Playfair Display, lede and pull-quotes use the serif body face, and nav/metadata/buttons use Source Sans 3

### Requirement: Homepage — custom layout
The system SHALL provide a custom `layouts/index.html` for the homepage with sections: hero (deep-sea gradient with paper texture, a dissolving fishing-net SVG motif with amber floats, eyebrow label, poster wordmark, subtitle, and square CTAs), quotes rendered as press-style pull-quotes, upcoming events, about intro with a lede drop cap, press quotes, and footer.

#### Scenario: Homepage displays all sections
- **WHEN** a user visits the homepage
- **THEN** they see hero, quotes, upcoming events, intro text, press quotes, and footer in that order

#### Scenario: Hero shows the net motif instead of a flat gradient
- **WHEN** a user views the homepage hero
- **THEN** a dissolving fishing-net SVG motif with amber floats appears over a sea gradient with paper texture, with the poster wordmark and subtitle, replacing the previous flat blue gradient

#### Scenario: Lede uses a drop cap
- **WHEN** the about-intro lede paragraph renders
- **THEN** its first letter is set as an amber drop cap in the poster face

### Requirement: SVG section separators — net/horizon motif
The system SHALL use thin SVG net/horizon shapes as visual separators between major sections on the homepage, consistent with the hero's fishing-net motif, rendered via the `wave-separator.html` partial.

#### Scenario: Separators visible between sections
- **WHEN** the homepage is viewed
- **THEN** subtle net/horizon SVG dividers appear between the hero, quotes, events, and footer sections, matching the hero motif rather than generic waves

## ADDED Requirements

### Requirement: Broadsheet component styling
The system SHALL style interactive and container components with editorial broadsheet discipline: square corners (0px border-radius) on buttons, inputs, and cards; 1px hairline borders using `--color-border` instead of drop-shadows for elevation; press-style pull-quotes arranged in a ruled grid (hairline right/bottom dividers); and a masthead band in the navigation carrying the poster wordmark.

#### Scenario: Square corners on interactive elements
- **WHEN** a button, input, or card is rendered
- **THEN** its corners are square (0px radius)

#### Scenario: Hairlines instead of shadows
- **WHEN** a card or quote container is rendered
- **THEN** it is separated by a 1px `--color-border` hairline and carries no drop-shadow

#### Scenario: Press pull-quotes in a ruled grid
- **WHEN** the homepage quotes section renders multiple quotes
- **THEN** they appear in a grid divided by hairline rules, each with the quote in serif and the author/source in uppercase sans metadata

#### Scenario: Masthead navigation band
- **WHEN** the navigation renders on desktop
- **THEN** it appears as a masthead band with the poster wordmark and a bottom border separating it from the content
