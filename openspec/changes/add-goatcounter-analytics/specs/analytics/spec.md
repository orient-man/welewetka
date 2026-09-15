## Purpose

Provide aggregate visibility into production page usage while preserving the
site's lightweight, cookie-free visitor experience.

## ADDED Requirements

### Requirement: Production page-view analytics
The site SHALL send one page-view event to the GoatCounter site identified as
`welewetka` whenever a visitor loads a page from a production build and
JavaScript is enabled.

#### Scenario: Visitor loads a production page
- **WHEN** a visitor loads any page from a production build with JavaScript enabled and GoatCounter reachable
- **THEN** exactly one page-view event is sent to `https://welewetka.goatcounter.com/count`

#### Scenario: Visitor navigates between pages
- **WHEN** a visitor follows an internal link to another page
- **THEN** the destination page load sends its own page-view event

### Requirement: Non-production analytics exclusion
The site MUST NOT load analytics resources or send analytics events from a
non-production build.

#### Scenario: Developer runs the local site
- **WHEN** the site is built or served in the development environment
- **THEN** the rendered pages contain no GoatCounter script or tracking endpoint

### Requirement: Privacy-respecting collection
Normal page-view tracking MUST NOT set cookies, write persistent browser
storage, or assign a persistent visitor identifier.

#### Scenario: Page view is recorded
- **WHEN** GoatCounter records a normal page view
- **THEN** no analytics cookie, local storage entry, or persistent visitor identifier is created in the visitor's browser

#### Scenario: Visitor opens the site
- **WHEN** any site page is displayed
- **THEN** no analytics consent banner, privacy notice, modal, or interstitial is introduced by this capability

### Requirement: Page-view-only tracking
The analytics capability SHALL collect page views only and MUST NOT emit custom
interaction events or track visitors who have disabled JavaScript.

#### Scenario: Visitor activates a call to action
- **WHEN** a visitor clicks a ticket, booking, email, or other call-to-action link
- **THEN** no custom GoatCounter click event is sent

#### Scenario: JavaScript is disabled
- **WHEN** a visitor loads a page with JavaScript disabled
- **THEN** no fallback analytics request is sent

### Requirement: Private analytics dashboard
The GoatCounter dashboard for the site MUST require authentication and MUST NOT
expose analytics data publicly.

#### Scenario: Unauthenticated dashboard access
- **WHEN** an unauthenticated visitor opens `https://welewetka.goatcounter.com/`
- **THEN** the visitor is prompted to sign in instead of seeing analytics data

### Requirement: Graceful analytics failure
Analytics loading or delivery failures MUST NOT prevent site content or local
functionality from loading.

#### Scenario: GoatCounter is unavailable
- **WHEN** the analytics script or tracking endpoint is blocked or unavailable
- **THEN** the page content and local navigation functionality remain usable
