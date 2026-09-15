## 1. Analytics Integration

- [x] 1.1 Add the `welewetka` GoatCounter site identifier to `config/_default/params.toml` and verify Hugo exposes the value through the site parameters without configuration warnings
- [x] 1.2 Add one asynchronous GoatCounter script to `layouts/_default/baseof.html`, guarded by `hugo.IsProduction`, and verify a production-rendered page contains the `gc.zgo.at/count.js` source and the exact `https://welewetka.goatcounter.com/count` endpoint

## 2. Build And Scope Verification

- [x] 2.1 Build development and production variants into separate temporary destinations and verify all development HTML omits GoatCounter while every production HTML page contains exactly one GoatCounter script
- [x] 2.2 Inspect the production output and verify it contains no GoatCounter event attributes, JavaScript API calls, `noscript` tracking pixel, consent interface, privacy notice, or analytics UI
- [x] 2.3 Load a production build with GoatCounter requests blocked and verify page content and local navigation remain usable

## 3. Hosted Service Verification

- [x] 3.1 Open `https://welewetka.goatcounter.com/` without authentication and verify the dashboard prompts for sign-in instead of exposing analytics
- [ ] 3.2 After deployment, load one live site page with JavaScript enabled and ad blocking disabled, then verify its page view appears in the authenticated GoatCounter dashboard without analytics cookies or persistent browser storage
