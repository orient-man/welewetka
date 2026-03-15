## ADDED Requirements

### Requirement: Base layout
The system SHALL provide a `baseof.html` layout with HTML5 doctype, `<head>` (SEO meta, Open Graph tags, self-hosted fonts, CSS via Hugo Pipes), `<body>` with navigation partial, content block, and footer partial.

#### Scenario: Every page has consistent structure
- **WHEN** any page is rendered
- **THEN** it includes the nav, content area, and footer within the base HTML structure

### Requirement: Color palette — morsko-kaszubska
The system SHALL use CSS custom properties for the color palette defined in `assets/css/_variables.css`: `--color-bg: #FAFAF7`, `--color-bg-alt: #F0E9DD`, `--color-primary: #1B3A5C`, `--color-secondary: #4A7C9B`, `--color-accent: #C17B3A`, `--color-text: #2C2C2C`.

#### Scenario: Consistent colors across pages
- **WHEN** any page is loaded
- **THEN** headings use `--color-primary`, links use `--color-secondary`, CTA buttons use `--color-accent`, body text uses `--color-text`

### Requirement: Typography — self-hosted fonts
The system SHALL use Playfair Display (serif) for headings and Source Sans 3 (sans-serif) for body text, loaded from self-hosted woff2 files in `static/fonts/`.

#### Scenario: Fonts load without external requests
- **WHEN** the site is loaded
- **THEN** no requests are made to Google Fonts or other external font CDNs

### Requirement: Navigation — flat, responsive
The system SHALL render a flat navigation bar with 8 items visible on desktop (>1024px). On mobile (<768px) the navigation SHALL collapse into a hamburger menu toggled by `assets/js/nav.js`.

#### Scenario: Desktop navigation
- **WHEN** the viewport is wider than 1024px
- **THEN** all 8 navigation items are visible in a single horizontal row

#### Scenario: Mobile navigation
- **WHEN** the viewport is narrower than 768px
- **THEN** navigation items are hidden behind a hamburger icon, revealed on tap/click

### Requirement: Homepage — custom layout
The system SHALL provide a custom `layouts/index.html` for the homepage with sections: hero (full-width image + title + CTA), quotes, upcoming events, about intro, press quotes, and footer.

#### Scenario: Homepage displays all sections
- **WHEN** a user visits the homepage
- **THEN** they see hero, quotes, upcoming events, intro text, press quotes, and footer in that order

### Requirement: Single page layout
The system SHALL provide a `single.html` layout rendering Markdown content with styled headings, paragraphs, lists, blockquotes, and images.

#### Scenario: Content page renders Markdown
- **WHEN** a user visits a content page (e.g., /spektakl/)
- **THEN** the Markdown content is rendered with the site's typography and color styles

### Requirement: List layout for aktualności
The system SHALL provide a `list.html` layout rendering blog posts sorted by date (newest first) with title, date, and summary.

#### Scenario: Aktualności list shows posts
- **WHEN** a user visits /aktualnosci/
- **THEN** they see a list of posts ordered from newest to oldest, each with title, date, and summary excerpt

### Requirement: Partials — reusable components
The system SHALL provide Hugo partials: `head.html`, `nav.html`, `footer.html`, `hero.html`, `team-card.html`, `review-card.html`, `event-card.html`.

#### Scenario: Team card renders person data
- **WHEN** the zespol page loops over team members in frontmatter
- **THEN** each person is rendered as a card with name, role, and bio via `team-card.html`

#### Scenario: Review card renders quote
- **WHEN** the recenzje page loops over reviews in frontmatter
- **THEN** each review is rendered as a styled blockquote with author and source via `review-card.html`

### Requirement: CSS — pure, no framework
The system SHALL use pure CSS (no Tailwind, Bootstrap, or other framework) organized in separate files under `assets/css/`, processed by Hugo Pipes for minification and fingerprinting.

#### Scenario: CSS is minified in production
- **WHEN** Hugo builds with `--minify`
- **THEN** the CSS output is minified and served with a fingerprinted filename for cache busting

### Requirement: Responsive design — mobile-first
The system SHALL be designed mobile-first with breakpoints at 768px (tablet) and 1024px (desktop) defined in `assets/css/_responsive.css`.

#### Scenario: Mobile layout
- **WHEN** viewport is less than 768px
- **THEN** content stacks vertically, images are full-width, team cards are single-column

#### Scenario: Desktop layout
- **WHEN** viewport is greater than 1024px
- **THEN** team cards display in a multi-column grid, gallery uses 3 columns

### Requirement: SVG wave separators
The system SHALL use SVG wave shapes as visual separators between major sections on the homepage.

#### Scenario: Waves visible between sections
- **WHEN** the homepage is viewed
- **THEN** subtle wave-shaped SVG dividers appear between the hero, quotes, events, and footer sections

### Requirement: SEO and Open Graph
The system SHALL include meta description, Open Graph title, description, and image tags in the `<head>` of every page.

#### Scenario: Social media sharing
- **WHEN** a page URL is shared on Facebook or Twitter
- **THEN** the platform displays the correct title, description, and preview image from OG tags
