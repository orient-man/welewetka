## ADDED Requirements

### Requirement: Blog post structure
Each blog post SHALL be a Markdown file in `content/aktualnosci/` with YAML frontmatter containing: `title` (string), `date` (ISO date), `summary` (string, 1-2 sentences), and optional `tags` (list of strings).

#### Scenario: Blog post renders correctly
- **WHEN** a Markdown file with valid frontmatter exists in `content/aktualnosci/`
- **THEN** it appears in the aktualności list with title, formatted date, and summary

### Requirement: Chronological listing
The aktualności list page SHALL display posts sorted by date from newest to oldest.

#### Scenario: Newest post appears first
- **WHEN** a user visits `/aktualnosci/`
- **THEN** the most recent post (by `date` frontmatter) is displayed at the top

### Requirement: Homepage integration
The homepage SHALL display the 2-3 nearest upcoming events from aktualności, filtered by the `terminarz` tag or by future dates.

#### Scenario: Upcoming events on homepage
- **WHEN** the homepage is loaded and there are posts tagged `terminarz` with future dates
- **THEN** up to 3 upcoming events are displayed in the "Najbliższe terminy" section

### Requirement: Tags support
Posts MAY have tags (e.g., `terminarz`, `ogłoszenie`, `prasa`). The system SHALL support filtering or grouping by tags.

#### Scenario: Tagged post categorization
- **WHEN** a post has tags in its frontmatter
- **THEN** the tags are displayed on the post and can be used for filtering

### Requirement: Starter content
The system SHALL include at least 2 example posts: Kartuzy premiere (12.11.2025) and Sierakowice performance (21.11.2025).

#### Scenario: Example posts exist
- **WHEN** the site is first built
- **THEN** the aktualności section contains at least 2 posts with real event data
