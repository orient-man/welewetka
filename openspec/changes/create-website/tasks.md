## 1. Hugo Project Scaffolding

- [x] 1.1 Create `config/_default/hugo.toml` with baseURL, languageCode `pl`, title, and basic settings
- [x] 1.2 Create `config/_default/menus.toml` with 8 flat navigation items
- [x] 1.3 Create `config/_default/params.toml` with contact data, social media links, site description
- [x] 1.4 Create `.gitignore` (public/, resources/, .hugo_build.lock)
- [x] 1.5 Create `static/CNAME` with `welewetka.orientman.com`

## 2. GitHub Actions Deploy

- [x] 2.1 Create `.github/workflows/deploy.yml` — Hugo build + deploy to GitHub Pages on push to main
- [ ] 2.2 Verify workflow runs successfully (first deploy)

## 3. Fonts and CSS Foundation

- [x] 3.1 Download and place Playfair Display woff2 files in `static/fonts/`
- [x] 3.2 Download and place Source Sans 3 woff2 files in `static/fonts/`
- [x] 3.3 Create `assets/css/_variables.css` — color palette, font stacks, breakpoints as CSS custom properties
- [x] 3.4 Create `assets/css/_reset.css` — minimal CSS reset
- [x] 3.5 Create `assets/css/_typography.css` — headings, body text, blockquotes, links
- [x] 3.6 Create `assets/css/_layout.css` — container, grid utilities, spacing
- [x] 3.7 Create `assets/css/main.css` — imports all partials, processed by Hugo Pipes

## 4. Base Layout

- [x] 4.1 Create `layouts/_default/baseof.html` — HTML5 doctype, head partial, body with nav + content block + footer
- [x] 4.2 Create `layouts/partials/head.html` — meta charset, viewport, SEO meta, OG tags, font-face declarations, CSS link

## 5. Navigation and Footer

- [x] 5.1 Create `layouts/partials/nav.html` — flat navigation bar with site title/logo, 8 menu items, hamburger on mobile
- [x] 5.2 Create `assets/css/_nav.css` — desktop horizontal nav, mobile hamburger styles
- [x] 5.3 Create `assets/js/nav.js` — mobile hamburger toggle (~20 lines)
- [x] 5.4 Create `layouts/partials/footer.html` — foundation info, contact mailto, copyright
- [x] 5.5 Create `assets/css/_footer.css`

## 6. Homepage

- [x] 6.1 Create `layouts/index.html` — custom homepage layout with hero, quotes, events, intro, press, footer
- [x] 6.2 Create `layouts/partials/hero.html` — full-width image, title overlay, 2 CTA buttons
- [x] 6.3 Create `assets/css/_hero.css`
- [x] 6.4 Create `layouts/partials/event-card.html` — date, venue, link
- [x] 6.5 Create `layouts/partials/review-card.html` — blockquote, author, source
- [x] 6.6 Create `assets/css/_cards.css`
- [x] 6.7 Create SVG wave separators for section dividers
- [x] 6.8 Write `content/_index.md` — hero text, key quotes, intro paragraph, featured reviews data in frontmatter

## 7. Single Page and List Layouts

- [x] 7.1 Create `layouts/_default/single.html` — renders Markdown content with styled typography
- [x] 7.2 Create `layouts/_default/list.html` — aktualności list with date, title, summary per post
- [x] 7.3 Create `assets/css/_blog.css` — list styling, post cards

## 8. Content — Spektakl and Książka

- [x] 8.1 Write `content/spektakl.md` — monodrama description, premiere, thematic layers, dekalog milczenia, Ojcowizna reference, key quote
- [x] 8.2 Write `content/ksiazka.md` — book description, publication details, reviews (Wysocki, Kasprolewicz), purchase link

## 9. Content — Zespół and Fundacja

- [x] 9.1 Write `content/zespol.md` — YAML frontmatter with 7 team members (name, role, bio), intro text
- [x] 9.2 Create `layouts/partials/team-card.html` — renders person card with name, role, bio
- [x] 9.3 Write `content/fundacja.md` — Fundacja Wiatrakcje mission, KRS, address, president, funding, contact

## 10. Content — Recenzje

- [x] 10.1 Write `content/recenzje.md` — YAML frontmatter with press quotes (Wysocki, Kasprolewicz, Puzdrowska, Potrękus, Gołuński), intro text
- [x] 10.2 Ensure review-card partial renders quotes with attribution styling

## 11. Photo Gallery

- [x] 11.1 Copy photos to `static/images/galeria/` (optimize file sizes)
- [x] 11.2 Add GLightbox JS and CSS to `assets/js/glightbox.min.js` and `assets/css/glightbox.min.css`
- [x] 11.3 Create `layouts/shortcodes/gallery.html` — responsive grid with GLightbox integration and lazy loading
- [x] 11.4 Create `assets/css/_gallery.css` — 3/2/1 column grid, hover effects
- [x] 11.5 Write `content/galeria.md` — page with `{{< gallery >}}` shortcode

## 12. Zamów Spektakl

- [x] 12.1 Write `content/zamow.md` — offer description, technical requirements, mailto contact
- [x] 12.2 Create `layouts/shortcodes/cta-button.html` — prominent call-to-action button

## 13. Aktualności (Blog)

- [x] 13.1 Write `content/aktualnosci/_index.md` — list page title and intro
- [x] 13.2 Write `content/aktualnosci/2025-11-12-premiera-kartuzy.md` — premiere blog post
- [x] 13.3 Write `content/aktualnosci/2025-11-21-sierakowice.md` — Sierakowice performance post

## 14. Responsiveness, SEO, and Final Polish

- [x] 14.1 Create `assets/css/_responsive.css` — media queries for mobile (<768px), tablet (768-1024px), desktop (>1024px)
- [ ] 14.2 Test responsive layout on mobile, tablet, and desktop viewports
- [x] 14.3 Verify SEO meta tags and Open Graph tags on all pages
- [ ] 14.4 Optimize images (compression, appropriate dimensions)
- [ ] 14.5 Configure DNS CNAME `welewetka.orientman.com` → GitHub Pages
- [ ] 14.6 Final deploy and end-to-end production test
