## Why

The site currently provides no visibility into which pages visitors use or how
interest changes around performances. Privacy-respecting page-view analytics
will provide that feedback without introducing cookies, persistent visitor
identifiers, or analytics infrastructure to operate.

## What Changes

- Add GoatCounter page-view tracking to every page in production builds.
- Use the hosted `welewetka.goatcounter.com` site with a private dashboard.
- Load GoatCounter's official unversioned script asynchronously, without adding
  project dependencies or blocking page rendering.
- Keep analytics out of development builds and limit collection to page views;
  do not add click events or a no-JavaScript tracking pixel.
- Do not add a consent banner, privacy page, footer disclosure, or other public
  analytics UI.

## Capabilities

### New Capabilities

- `analytics`: Privacy-respecting, production-only GoatCounter page-view
  analytics and private dashboard access.

### Modified Capabilities

<!-- None. -->

## Impact

- **Configuration** (`config/_default/params.toml`): declare the GoatCounter
  site identifier.
- **Global layout** (`layouts/_default/baseof.html`): conditionally load the
  asynchronous GoatCounter script for production builds.
- **External services**: production visitors' browsers request the tracking
  script from `gc.zgo.at` and send page views to
  `welewetka.goatcounter.com/count`.
- **Dependencies and UI**: no new package, runtime service, content page,
  consent interface, or visual component.
