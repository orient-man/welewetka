## Context

See `proposal.md` for motivation and `specs/analytics/spec.md` for the behavior
contract. The site is a statically exported Hugo project: all pages inherit
`layouts/_default/baseof.html`, site-wide values live in
`config/_default/params.toml`, and the GitHub Pages workflow explicitly sets
`HUGO_ENVIRONMENT=production`. Local `hugo server` runs in development by
default. The project has no Content Security Policy or existing analytics
integration.

The related `orientman-blog` site already uses GoatCounter through the official
unversioned script and keeps the provider identifier in central site
configuration. This design preserves that operational precedent while using
Hugo's production-environment signal to avoid third-party requests during local
development.

## Goals / Non-Goals

**Goals:**

- Keep the provider identifier in site configuration rather than embedding it
  in multiple templates.
- Add analytics once at the global layout boundary so every rendered page has
  identical behavior.
- Ensure analytics is absent from non-production output and cannot block the
  site's own content or scripts.
- Make development and production behavior verifiable from generated HTML.

**Non-Goals:**

- Abstract analytics behind a provider-neutral integration layer.
- Track interactions, conversions, JavaScript-disabled visits, or individual
  visitors.
- Add consent, disclosure, dashboard, or analytics-related visual components.
- Add a Content Security Policy as part of this change.

## Decisions

### Store the GoatCounter site identifier in default parameters

Add the public site identifier `welewetka` to `config/_default/params.toml` and
construct the collection endpoint from it in the layout. The identifier is
configuration, not a secret, and this mirrors `orientman-blog`'s centralized
`goatcounterId` setting.

Keeping the parameter in the default configuration makes the selected account
visible in one established configuration file. Production gating remains the
layout's responsibility. A production-only configuration directory was
considered, but it would split a single public value into a new configuration
layer without improving secrecy or behavior.

### Add one production-gated script to the global base layout

Render the GoatCounter script once near the end of
`layouts/_default/baseof.html`, guarded by `hugo.IsProduction`. Every page uses
this base template, and the existing deployment workflow already sets the
production environment explicitly.

The script will load asynchronously so an unavailable or blocked analytics
service does not delay rendering or local navigation. A dedicated partial was
considered, but a single declarative script block is too small to justify
another template abstraction.

### Use GoatCounter's official unversioned script

Load `//gc.zgo.at/count.js` and set `data-goatcounter` to
`https://welewetka.goatcounter.com/count`. This matches the established
Orientman integration and receives GoatCounter's current compatibility and
privacy updates automatically.

Pinning a version with Subresource Integrity would reduce mutable third-party
script risk, but would also create a manual update obligation and diverge from
the agreed existing-site precedent. Self-hosting was rejected because it adds
the same maintenance burden without a requirement to operate analytics assets
locally.

### Rely on standard page-load tracking only

Do not add GoatCounter event attributes, JavaScript API calls, or a `noscript`
tracking pixel. Hugo generates conventional full-page navigation, so the
standard script records each destination without SPA-specific routing logic.

The GoatCounter account remains private through provider-side configuration;
no dashboard credentials or access controls belong in this repository.

## Risks / Trade-offs

- **Ad blockers can suppress analytics** -> Accept intentional undercounting;
  analytics must never be required for site operation.
- **The unversioned script is mutable third-party code** -> Load only the
  official GoatCounter endpoint, keep it asynchronous, and retain the option to
  adopt a versioned SRI script in a separate policy change.
- **A wrongly selected Hugo environment could omit or enable analytics** -> Use
  `hugo.IsProduction` and verify both development and production build output;
  CI already sets `HUGO_ENVIRONMENT=production` explicitly.
- **GoatCounter's privacy behavior or account visibility could drift** -> Verify
  normal visits do not create persistent browser state and unauthenticated
  dashboard access still requires sign-in.
- **A future Content Security Policy could block tracking** -> If CSP is added,
  explicitly allow `gc.zgo.at` for scripts and the GoatCounter collection
  endpoint for connections as part of that future change.

## Migration Plan

1. Add the GoatCounter site identifier to the existing Hugo parameters.
2. Add the production-gated asynchronous script to the global base layout.
3. Build development and production variants into separate temporary outputs
   and inspect representative pages for absence or exactly one script tag.
4. Deploy through the existing GitHub Pages workflow and verify a live page
   view appears in the authenticated GoatCounter dashboard.

Rollback consists of removing the script block and its site parameter. The
site has no data migration or runtime dependency on GoatCounter, and historical
analytics may remain in or be deleted from the provider account independently.
