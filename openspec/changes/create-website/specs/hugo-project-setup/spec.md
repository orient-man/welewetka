## ADDED Requirements

### Requirement: Hugo project configuration
The system SHALL use Hugo extended edition as the static site generator with configuration in `config/_default/` directory using TOML format.

#### Scenario: Valid Hugo configuration
- **WHEN** Hugo reads the configuration files
- **THEN** the site builds with baseURL `https://welewetka.orientman.com/`, language code `pl`, and Polish date formatting

### Requirement: Directory structure
The system SHALL follow the Hugo standard directory structure with `content/`, `layouts/`, `assets/`, `static/`, and `config/` directories at the repository root.

#### Scenario: Hugo recognizes project structure
- **WHEN** `hugo` command is run in the repository root
- **THEN** Hugo finds all configuration, content, layouts, and assets without errors

### Requirement: Navigation menu configuration
The system SHALL define a flat navigation menu with 8 items in `config/_default/menus.toml`: Spektakl, Książka, Zespół, Fundacja, Recenzje, Galeria, Zamów spektakl, Aktualności.

#### Scenario: All menu items rendered
- **WHEN** any page is loaded
- **THEN** the navigation contains exactly 8 items in the specified order, each linking to the correct page

### Requirement: GitHub Actions deployment
The system SHALL include a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the Hugo site and deploys to GitHub Pages on every push to `main` branch.

#### Scenario: Automatic deployment on push
- **WHEN** a commit is pushed to `main`
- **THEN** GitHub Actions runs `hugo --minify` and deploys the `public/` directory to GitHub Pages

#### Scenario: Failed build does not deploy
- **WHEN** Hugo build fails (e.g., template error)
- **THEN** the deployment step is skipped and the current live site remains unchanged

### Requirement: Custom domain
The system SHALL serve the site at `welewetka.orientman.com` via a `CNAME` file in `static/` and appropriate DNS configuration.

#### Scenario: Custom domain resolves
- **WHEN** a user visits `https://welewetka.orientman.com`
- **THEN** the site loads with HTTPS enabled via GitHub Pages

### Requirement: Git ignore
The system SHALL include a `.gitignore` file excluding `public/`, `resources/`, and `.hugo_build.lock`.

#### Scenario: Build artifacts not tracked
- **WHEN** `hugo` is run locally
- **THEN** generated files in `public/` and `resources/` are not tracked by git
