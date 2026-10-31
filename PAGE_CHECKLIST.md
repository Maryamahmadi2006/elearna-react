# Page checklist

Every route in the app, its source, and its status. Status values:

- **Implemented** — converted from the reference page's published HTML, uses
  the reference stylesheet and downloaded assets.
- **Rebuilt (approximate)** — the reference does not publish usable content for
  this URL; rebuilt from the shared template, flagged in-page.
- **Demo** — interactive control present but backend-less by design (see notes).

---

## 1. Third-variant pages (assigned scope)

| Route | Page component | Status | Notes |
|---|---|---|---|
| `/`, `/home-three` | `HomeThree` | Implemented | Reference serves *home-one* at `/`; this project serves Home Three (scope decision) |
| `/course-three` | `CourseThree` | Implemented | Filter tabs + pagination tabs wired |
| `/pricing-three` | `PricingThree` | Implemented | Monthly/Yearly toggle wired (price swap + ball slide) |
| `/blog-three` | `BlogThree` | Implemented | |
| `/contact-three` | `ContactThree` | Implemented | Form submits → success/toast (demo) |

## 2. Detail pages linked from the third-variant pages

| Route | Registry / dispatcher | Count | Status |
|---|---|---|---|
| `/:slug/course-details` | `coursePages` + `CourseDetailsRoute` | 12 linked | **5 Implemented** (generated from reference), **7 Rebuilt (approximate)** — reference redirects to *Access Denied* (membership-gated), rebuilt from the shared course template and flagged |
| `/blog-posts/:slug` | `postPages` + `PostRoute` | 9 | Implemented |
| `/category/:slug` | `categoryPages` + `CategoryRoute` | 4 | Implemented |
| `/product/:slug` | `productPages` + `ProductRoute` | 12 | Implemented (8 linked from categories + 4 previously unlinked, all published by the reference) |

### The 7 rebuilt course pages (reference = Access Denied)

```
database-integration-with-mongodb
design-systems-and-pattern-libraries
full-stack-development-with-the-mern-stack
grow-your-brand-and-reach-your-audience
learn-interactive-web-design-by-building-real-projects
risk-management-and-business-continuity
the-complete-guide-to-personal-and-business-finance
```

Each renders the shared course-details template with public data plus an
"Access denied on the reference" notice explaining the substitution.

## 3. Categories with a third variant vs. without

| Category | Third variant on reference? | What is implemented here |
|---|---|---|
| Home | ✅ `home-three` | Home Three (+ served at `/`) |
| Course | ✅ `course-three` | Course Three + 12 course-details pages |
| Pricing | ✅ `pricing-three` | Pricing Three |
| Blog | ✅ `blog-three` | Blog Three + 9 posts + 4 categories |
| Contact | ✅ `contact-three` | Contact Three |
| About | ❌ `/about-three` is **404 on the reference** | Both published variants — `/about-one`, `/about-two` — because variant-three pages link to them (no third variant exists to substitute) |
| Team | ❌ single design | `/team` + 8 member pages (Lee Schmitt + 7) |
| Events | ❌ single design | `/events` + 6 event detail pages |
| Career | ❌ single design | `/career` + 4 job detail pages |
| FAQ | ❌ single design | `/faq` (accordion wired) |
| Shop / Checkout | ❌ single design | `/checkout` + 12 product pages |
| Membership | ❌ single design | `/sign-up`, `/log-in` (demo forms) |
| Information | ❌ single design | `/information/license`, `/information/style-guide` |
| Errors | ❌ single design | `/401`, 404 (catch-all) |

**Not implemented by design** (variant one/two of scoped categories):
`/home-one`, `/home-two`, `/course-one`, `/course-two`, `/pricing-one`,
`/pricing-two`, `/blog-one`, `/blog-two`, `/contact-one`, `/contact-two`.
They are not linked from any variant-three page and are outside the assigned
third-variant scope.

## 4. Shared pages (nav / footer destinations)

| Route | Page component | Status | Notes |
|---|---|---|---|
| `/about-one` | `AboutOne` | Implemented | No longer linked from the nav (the Pages dropdown uses `/about-two`); kept routable |
| `/about-two` | `AboutTwo` | Implemented | Same |
| `/team` | `Team` | Implemented | All 8 member links resolve |
| `/team-members/lee-schmitt` | `TeamMemberLeeSchmitt` | Implemented | Static route (also handled by the dispatcher) |
| `/team-members/:slug` | `TeamMemberRoute` | 7 more → Implemented | leslie-upton, jasmine-konopelski, wanda-abshire, darnell-kuphal, steven-roob, tonya-flatley, colin-fay |
| `/events` | `Events` | Implemented | 6 event links resolve |
| `/events/:slug` | `EventRoute` | 6 → Implemented | best-practices-for-virtual-classroom-management, innovative-teaching-strategies-for-modern-classrooms, leadership-strategies-for-higher-education-institutions, navigating-the-future-of-online-education-platforms, professional-development-for-online-educators-and-trainers, the-impact-of-emotional-intelligence-on-student-success |
| `/career` | `Career` | Implemented | 4 job links resolve |
| `/career/:slug` | `CareerRoute` | 4 → Implemented | blockchain-technology-instructor, digital-design-and-ux-instructor, machine-learning-educator, software-development-instructor |
| `/faq` | `Faq` | Implemented | 25 accordion items wired |
| `/sign-up` | `SignUp` | Implemented | **Demo** form; privacy/terms links → `/information/license` (they are 404 on the reference) |
| `/log-in` | `Login` | Implemented | **Demo** form; reached from Sign Up |
| `/checkout` | `Checkout` | Implemented | **Demo** — see notes below |
| `/information/license` | `License` | Implemented | |
| `/information/style-guide` | `StyleGuide` | Implemented | |
| `/401` | `Forbidden` | Implemented | |
| `*` (incl. `/404`) | `NotFound` | Implemented | Unknown detail slugs land here |

---

## 5. Documented approximations

The site's original interactions live in Webflow's IX2 runtime and cannot run
outside the platform. Their observable behavior was re-implemented; where the
exact configuration was unrecoverable, the approximation is listed here.

| Behavior | Implementation | Approximation |
|---|---|---|
| Scroll reveal | `PageEnhance` IntersectionObserver on elements the reference publishes with inline hidden states, plus a scroll-idle pass that shows anything the viewport already passed | Reference timing reproduced (1000 ms outQuart, 100 ms delay); hover-driven states are handled in CSS instead |
| Counter digit rolls | Each `.counter-train` rolls up one digit height (−100 %) over 2 s with the reference cubic-bezier when its `.counter-box` scrolls into view | Landing digit is whatever the second train holds in the markup (IX2 per-element landing values are not recoverable — `data-w-id` stripped) |
| Client-logo, event & team-detail marquees | CSS `translateX(-100%)` loop over the duplicated copies | Constant linear speed; IX2 easing/timing not reproduced |
| Navbar states | JS scroll-progress background (transparent → `#0f252a` over the first 5 % of scroll) + CSS entrance slide-in (1000 ms outQuart) on the one shared header (`SiteHeader.jsx`), matching the reference IX2 events. A page whose hero resolves light starts already filled so the white nav text stays readable. The bar itself is a `1fr · auto · 1fr` grid — logo left, links centred as one tight group (Webflow's `margin: auto` on nav links/dropdowns is zeroed and the 40 px caret padding dropped), cart/search right, hamburger flush right in the drawer layout | Scroll fill is rAF-interpolated rather than IX2-timed |
| Course-card hover popups | CSS `:hover` reveal (`elearna-pop-in`), **re-anchored to fill its own card** (`inset: 0`, flex column, title/description clamped to two lines, button pinned to the bottom) | **Deliberate divergence**: the published sheet anchors the 350 px panel at `right: -44%` (`left: -44%` for the `.course-popup-last` / `.course-card-pop-up-two` variants), which buries the neighbouring card and — because those variants are hard-coded per index — spills outside the container once the grid reflows (measured 146 px past the edge at 1100 px). IX2 stagger timing still approximated |
| Course panel on touch | `initCoursePopups` toggles `.is-popped` on `pointerdown` when `(hover: none)`, so the Course Details link inside the panel is reachable; a tap on an anchor is skipped so the click still fires | The reference has no touch path to this panel at all |
| Card / navbar breathing room | Trending-course grid 34 × 38 px gaps with 42 px under the heading; navbar-right 26 px to the Register group and 16 px inside it | The published grid keeps 30 px everywhere and the Register · divider · Log in group sat 10–15 px from the cart |
| Card hover depth | Shared language over every card family (course, trending, blog, team, category, pricing, career, event): `translate: 0 -8px` + soft shadow + `scale: 1.06` on the picture, pointer devices only, disabled under reduced motion | The reference hovered only a few families; this is a deliberate, uniform upgrade rather than a reproduction |
| Card grid columns | 3-across course/team cards at 992–1279 px, 2-across blog/team at 600–991 px, 1-across course/team/career at ≤ 599 px, tightened category tiles at ≤ 479 px | **Deliberate divergence**: the published stylesheet only steps columns at 991/767/479, which squeezes four-across cards to 214 px on a 1024 laptop and leaves the career cards 210 px wide at 520 px |
| Contact hero + form pop-up under 860 px of viewport height | Hero switches from `height: 100vh` centring to its own flow with top padding clear of the navbar, heading drops to `clamp(56px, 10vw, 116px)`, and the pop-up is anchored below the bar and capped with internal scroll as a fallback; the round button moves to the corner | **Deliberate divergence**: the published page sizes both by viewport *height* — the pop-up is 452 px tall at `bottom: 250px` inside a 100vh section, so its top lands at `100vh − 702px`, which is −102 px on a 1366×600 screen and 66 px (behind the 91 px navbar) on a fullscreen 1366×768 laptop. Above 860 px the reference geometry is left exactly as published |
| About-two category cards | CSS `:hover` / `:focus-within`: the photo tilts aside and the label panel + arrow fade in; touch devices see the arrow permanently | The reference tilted with IX2 transform values that are not recoverable — the tilt angle is chosen to match the look |
| Testimonial slider | Cross-fade, honouring the reference's published `data-animation="cross"` / `data-duration="500"` / `data-easing="ease"`: the slides stack inside the mask and the active one fades in over 500 ms | Swipe is not wired; autoplay stays off (`data-autoplay="false"`) and the dot strip stays hidden exactly as the reference publishes it (`display-off` on `.w-slider-nav`) |
| Checkout card fields | Webflow's visual placeholder markup (`w-commerce-commercecheckoutcardsecuritycode` etc.) | **Non-functional by design** — no Stripe/backend; the form does not accept card input |
| Checkout billing toggle | Wired: unchecking reveals the billing-address form | Works as on the reference |
| Place Order | Clears the demo cart + toast confirmation | No order is transmitted |
| Forms (contact, career, comment, newsletter, auth) | `preventDefault` → `.w-form-done` block or toast | No backend; no email is sent |
| Cursor-follow parallax (team page) | Not reproduced | Purely decorative IX2 effect following the pointer, no content impact. The home-three course-card parallax *is* wired (`initCourseParallax`) |

## 6. Verification

| Check | Result |
|---|---|
| `npm run build` | green; `dist/` is self-contained (458 assets copied, every `src`/`href` in `dist/index.html` resolves, stylesheet emitted at the `dist/` root so its `url(…)`s land on `dist/assets/img/`) |
| `node tools/ssr-smoke.mjs` | 76 passed / 0 failed |
| `node tools/audit-links.mjs` | 624 hrefs, 0 unresolved |
| `node tools/verify-asset-refs.mjs` | 2,043 refs, 0 missing, 0 malformed `srcset` |
| `node tools/check-syntax.mjs` | 74 page components, 0 broken |
| Layout sweep, 25 routes × 6 widths (1440/1100/992/768/390/320) | 0 horizontal overflow, 0 content under the fixed bar, 0 unrevealed elements, 0 broken images, desktop menu ≥ 992 px and hamburger < 992 px everywhere |
| Content sweep, all 66 routes × 2 widths (1440/390) | 0 overflow / 0 unrevealed / 0 broken images / correct nav mode on every route. The only flags are "no page heading" on `/contact-three` and `/checkout`, which is faithful: the reference publishes those two with no `h1`–`h3` either (its "Contact information" label is a `<div class="heading-four">`) |
| Interaction checks (nav labels, hamburger drawer, body-scroll lock, inline accordion groups, slider arrows, FAQ, tabs, pricing toggle, add/remove from cart, career anchor) | all pass; nav reads Home · Courses ▾ · Pages  · Blogs · Contacts — the two submenu triggers carry an inline-SVG caret that turns over while the group is open, and the Pages panel lists About, Course, FAQ, Pricing, Career, Events, Team |
| Current-page nav label | brand yellow `#ffb606`, matching the reference's own `.dropdown-link.w--current` | Webflow's baseline `.w-nav-link.w--current { color: #0082f3 }` blue is overridden — the template recolours dropdown links but never the top-level ones |
| Navbar + card-grid re-measure (Home / Course / Blog / Pricing / Contact / About-two / Team / Events × 1440-1200-992-768-560-390-320) | menu centre equals bar centre at every width, 1–2 px between link boxes, hamburger flush right, no overflow, no nav-mode flip; card tracks stay ≥ 290 px on laptops/tablets and go single-column on phones |
| Contact page on short laptop screens (1440×900, 1366×768, 1366×600, 1280×560, 1024×640, 768×1024, 390×844) | at 1440×900 the published geometry is untouched (pop-up top 198, height 452, hero top 177). Below 860 px of viewport height the pop-up is anchored under the navbar and capped, so it is fully on screen at every size, its top clears the 91 px bar, the round button stays below it and reachable, and the hero no longer starts underneath the bar (was y = 20 at 1280×560). The form fits without internal scroll except at 1280×560, where it needs 5 px |
| CSS `background-image` resolution (Home / Contact / About-two / Course-three / Pricing / Blog) | 15 distinct background URLs across those routes, every one `200 image/webp`. Before the stylesheet moved to the public root all 56 local `background-image` rules resolved to `/assets/assets/img/…` and silently received the SPA's HTML fallback |

Every link in the shared header, the footer and every page reaches an
implemented route — there are no `#` navigation placeholders. The 11 remaining
`href="#"` attributes are controls that perform an action in JS (open cart,
remove item, place order, career anchor scroll), matching the reference's own
markup for those controls.
