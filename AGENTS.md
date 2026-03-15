# AGENTS.md

Hugo static website for the theatrical performance
"Welewetka. Jak znikają Kaszuby" — a monodrama based on the book by
Stasia Budzisz, produced by Fundacja Wiatrakcje.

## Project Structure

```
welewetka/
  config/_default/          # Hugo configuration (TOML)
    hugo.toml               # Base URL, language, build settings
    menus.toml              # 8-item flat navigation
    params.toml             # Contact, social, foundation data
  content/                  # Markdown content pages
    _index.md               # Homepage (hero, quotes, events)
    spektakl.md             # Performance description
    ksiazka.md              # Book details and reviews
    zespol.md               # Team members (YAML frontmatter)
    fundacja.md             # Foundation info
    recenzje.md             # Press reviews (YAML frontmatter)
    galeria.md              # Photo gallery
    zamow.md                # Booking page
    aktualnosci/            # Blog section
  layouts/                  # Hugo templates
    _default/               # baseof, single, list
    index.html              # Custom homepage
    partials/               # head, nav, footer, hero, cards, wave
    shortcodes/             # gallery, cta-button
  assets/
    css/                    # CSS partials (Hugo Pipes concat)
    js/                     # nav.js, glightbox.min.js
  static/
    fonts/                  # Self-hosted woff2 (Playfair Display, Source Sans 3)
    images/galeria/         # Gallery photos
    CNAME                   # Custom domain
  .github/workflows/        # CI/CD
    deploy.yml              # Hugo build + GH Pages deploy
  .opencode/                # AI tooling configuration
  openspec/                 # Specification content
```

## Build / Lint / Test

**Prerequisites:** Hugo extended edition (v0.144+)

```bash
# Install (macOS)
brew install hugo

# Development server
hugo server -D

# Production build
hugo --minify
```

Output goes to `public/` (gitignored). No npm, Node, or PostCSS required.

**Deployment:** Automatic via GitHub Actions on push to `main`.
Workflow installs Hugo extended, runs `hugo --minify`, deploys to GitHub Pages.

## Content Editing

All content is in `content/*.md` files with YAML frontmatter.
Team members and reviews are defined as YAML arrays in frontmatter
of `zespol.md` and `recenzje.md` respectively.

To add gallery photos: drop images into `static/images/galeria/`.
The gallery shortcode auto-discovers them.

To add blog posts: create `content/aktualnosci/YYYY-MM-DD-slug.md`
with `title`, `date`, `summary`, and optional `tags` in frontmatter.

## Commits

Use **Conventional Commits** (<https://www.conventionalcommits.org/>).

Format: `<type>(<scope>): <description>`

Types:
- `feat` — new feature
- `fix` — bug fix
- `docs` — documentation only
- `style` — formatting, no logic change
- `refactor` — code restructuring, no behavior change
- `test` — adding or updating tests
- `chore` — maintenance, dependencies, tooling
- `ci` — CI/CD changes

Rules:
- Subject line: imperative mood, lowercase, no period, max 72 chars
- Body (optional): wrap at 80 chars, explain *why* not *what*
- Breaking changes: add `!` after type/scope (e.g., `feat!: ...`) and include `BREAKING CHANGE:` in footer

## OpenSpec Workflow

This project uses a spec-driven workflow with four commands:

| Command           | Purpose                                  |
|-------------------|------------------------------------------|
| `/opsx-propose`   | Create a new change with design and tasks |
| `/opsx-apply`     | Implement tasks from a change            |
| `/opsx-explore`   | Investigate and clarify before/during work |
| `/opsx-archive`   | Archive a completed change               |

### Authoring Conventions

**Commands** (`.opencode/command/opsx-*.md`):
- Minimal YAML frontmatter: `description` only
- Structure: Summary > Input > Steps > Output > Guardrails

**Skills** (`.opencode/skills/openspec-*/SKILL.md`):
- Rich YAML frontmatter: name, description, license, compatibility, metadata
- Same body structure as commands but standalone/reusable

### Naming

- Change names: `kebab-case` (e.g., `add-user-auth`)
- Archive dirs: `YYYY-MM-DD-<change-name>`
- Spec files: `kebab-case.md` (e.g., `proposal.md`, `design.md`, `tasks.md`)
- CLI pattern: `openspec <verb> [--change "<name>"] [--json]`

### Guardrails

- Always read context files before starting implementation
- Pause on errors, blockers, or unclear requirements — don't guess
- Keep code changes minimal and scoped to each task
- Warnings never block workflow; inform and confirm
- Workflow is fluid — commands can be invoked anytime, not phase-locked
