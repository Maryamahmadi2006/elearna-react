# Missing-asset list

Audit of everything the pages reference at runtime.

**Result: nothing referenced is missing.**

| Check | Command | Result |
|---|---|---|
| Local asset references | `node tools/verify-asset-refs.mjs` | 2,043 references scanned → **0 missing on disk**, **0 malformed `srcset`** |
| Remote CDN references | grep `cdn.prod.website-files.com` across `src/` and `public/assets/elearna-webflow.css` | **0** — every asset is served locally, including the 42 `url(…)` backgrounds inside the stylesheet (`tools/localize-css-assets.mjs`) |
| Favicon + stylesheet | `index.html` references | `favicon-32.png`, `favicon-256.png`, `elearna-webflow.css` all present |
| Download failures | `tools/fetch-missing-assets.mjs` | 0 failures |

## What is on disk

- `public/assets/img/` — **458 files**, 65 MB:
  images (webp/jpg/png/svg), icons, the background video set
  (`Home One Video-transcode.mp4` 2.8 MB, `…-transcode.webm` 5.8 MB,
  `…-poster-00001.jpg`), and favicons.
- `public/assets/elearna-webflow.css` — byte-copy of the reference stylesheet
  (the pre-localization copy is kept as `tools/elearna-webflow.original.css`).

Filenames keep the reference's spaces (`Category Cards Four Image.webp`). In
`srcset` attributes those spaces must stay percent-encoded — a raw space is the
descriptor separator there — so `tools/fix-srcset.mjs` writes them as `%20` and
the audit decodes before comparing with disk.

## External runtime dependencies

The only resources loaded from the network at runtime are the **same Google
Fonts the reference loads**:

| Host | Why |
|---|---|
| `fonts.googleapis.com` | stylesheet for Space Grotesk, Outfit, Bonheur Royale |
| `fonts.gstatic.com` | font files (preconnected) |

Everything else (CSS, JS, images, video) is local. No other `<script>`,
stylesheet, tracking tag, or API call exists — the build is fully static apart
from the font CDN. If the font CDN is unreachable the site still renders with
system font fallbacks; to fully self-host, download the three families and
replace the `<link>` in `index.html`.

## Content that could not be sourced from the reference

These are **not downloadable assets** — the reference site itself does not
publish usable material for them. Each substitution is flagged in-page and
documented in `PAGE_CHECKLIST.md`:

| Item | Reason | What was done |
|---|---|---|
| 7 of 12 `course-details` pages | URLs redirect to *Access Denied* (membership-gated) on the reference | Rebuilt from the shared course-details template with publicly available data + an on-page notice |
| Checkout card fields (number/expiry/CVC) | Webflow publishes them as visual placeholder `<div>`s, never as inputs — there is no real field markup to copy | Kept as-is (visual only, non-functional by design) |
| Webflow IX2 interaction configs | Live inside the published `webflow.js` runtime, not addressable per-element once `data-w-id` attributes are stripped | Behaviors re-implemented in `PageEnhance.jsx` + `interactions.css` (approximations listed in the checklist) |
| `/privacy-policy`, `/terms-of-service` | **404 on the reference** | Sign-up's policy links point at the implemented `/information/license` page instead of a dead URL |

## Outbound link domains (not fetched at runtime)

Plain hyperlinks in the content/footer, kept exactly as the reference links
them: `www.facebook.com`, `x.com`, `in.linkedin.com`, `www.behance.net`
(8 each), `www.freepik.com` / `img.freepik.com` (image attributions),
`webflow.com`, `www.radianttemplates.com`, `www.freepikcompany.com`,
`fonts.google.com`. These are never requested unless a user clicks them.
