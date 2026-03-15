# AGENTS.md

This is an OpenSpec specification-driven development project using the OpenCode AI platform.
There is currently no application source code — only workflow definitions and specifications.

## Project Structure

```
welewetka/
  .opencode/              # AI tooling configuration
    command/              # Slash commands (opsx-*.md)
    skills/               # Reusable AI skills (openspec-*/SKILL.md)
    package.json          # Plugin dependency (@opencode-ai/plugin)
  openspec/               # Specification content
    config.yaml           # OpenSpec config (schema: spec-driven)
    specs/                # Main specifications
    changes/              # Active and archived changes
      archive/
```

## Build / Lint / Test

No build system, test framework, or linters are configured yet.
When application code is added, update this section.

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

Examples:
```
feat(auth): add OAuth2 login flow
fix(api): handle null response from upstream service
docs: add AGENTS.md with project conventions
chore: update @opencode-ai/plugin to 1.3.0
refactor(db)!: switch from SQL to document store
```

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
