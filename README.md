# Elearna — React Website Recreation

A responsive, standalone recreation of the **Elearna education website**, built with React and Vite using the publicly available Webflow website as the design reference.

**Reference Website:** https://elearna.webflow.io

The project recreates the third design variants of the main page categories, along with the related detail pages, shared layouts, navigation, animations, and interactive components.

The goal is to preserve the original website's visual identity and behavior while making the project independent of the Webflow platform.

---

## Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Technology Stack](#technology-stack)
* [Pages and Coverage](#pages-and-coverage)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Available Commands](#available-commands)
* [Routing](#routing)
* [Responsive Design](#responsive-design)
* [Design and Animation](#design-and-animation)
* [Interactive Components](#interactive-components)
* [Asset Management](#asset-management)
* [Testing and Verification](#testing-and-verification)
* [Known Limitations](#known-limitations)
* [Documentation](#documentation)

---

## Project Overview

Elearna is an education website recreation focused on delivering a professional, responsive, and interactive user experience.

The project uses the original published website as a reference for its layouts, typography, colors, imagery, page structure, and visual interactions.

### Project Goals

* Recreate the third design variants of the main website pages.
* Preserve the reference website's visual style and layout.
* Implement a consistent navigation bar across all pages.
* Reproduce dropdown menus, hover effects, scroll animations, and page transitions.
* Provide responsive layouts for desktop, tablet, and mobile devices.
* Localize website assets so the application does not depend on the original Webflow asset CDN at runtime.
* Maintain clean routing and functional internal navigation.
* Provide a straightforward development and production workflow.

### Project Scope

The primary design variants included in this project are:

* Home Three
* Course Three
* Pricing Three
* Blog Three
* Contact Three

Related pages are also included where they are linked from these designs.

Page categories that do not have a third variant on the reference website use the appropriate published reference design. See `PAGE_CHECKLIST.md` for the complete coverage list.

---

## Features

### Website and Navigation

* Shared navigation component used across the website.
* Desktop navigation with dropdown menus.
* Courses navigation with course-related links and categories.
* Pages dropdown containing About, Course, FAQ, Pricing, Career, Events, and Team.
* Direct navigation links for Home, Blogs, and Contacts.
* Responsive mobile navigation drawer.
* Expandable mobile dropdowns.
* Active-page navigation styling.
* Cart indicator in the header.
* Shared footer component.
* Hash-based routing for static hosting compatibility.

### Visual Design

* Original reference stylesheet retained for visual fidelity.
* Space Grotesk typography for headings.
* Outfit typography for body text.
* Bonheur Royale decorative typography.
* Original brand colors and styling.
* Responsive content containers and card layouts.
* Consistent spacing and alignment.
* Image treatments and card hover effects.

### Animations and Interactions

* Navbar entrance animation.
* Navbar background transition on scroll.
* Dropdown opening and closing transitions.
* Mobile hamburger-to-close animation.
* Scroll-triggered reveal animations.
* Smooth scrolling for internal page anchors.
* Course card hover effects.
* Image scaling and card elevation effects.
* Testimonial slider transitions.
* FAQ accordions and tab interactions.
* Animated counters and marquees.
* Pricing billing-period toggle.
* Checkout billing-address toggle.
* Career application-form navigation.
* Reduced-motion support for users who prefer fewer animations.

### Shopping and Forms

* Demo shopping cart.
* Add-to-cart interactions.
* Cart item count in the header.
* Cart drawer with item removal.
* Checkout order summary.
* Demo order submission with cart clearing and confirmation feedback.
* Form submission feedback.
* Login and signup interface elements.

**Important:** These features are implemented on the frontend. They do not provide real payment processing, account authentication, order storage, or backend form submission.

---

## Technology Stack

| Technology       | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| React 18         | Component-based user interface                       |
| Vite             | Development server and production build              |
| JSX              | Component markup                                     |
| React Router DOM | Client-side navigation                               |
| HashRouter       | Static-host-compatible routing                       |
| HTML5            | Page structure                                       |
| CSS3             | Layout, styling, responsive behavior, and animations |
| JavaScript       | Interactive behavior and application logic           |
| Google Fonts     | Typography matching the reference website            |

No CSS framework is required.

The website does not require the Webflow platform to run.

---

## Pages and Coverage

The project includes the main design variants and their related content pages.

### Main Pages

| Category | Included Page |
| -------- | ------------- |
| Home     | Home Three    |
| Courses  | Course Three  |
| Pricing  | Pricing Three |
| Blog     | Blog Three    |
| Contact  | Contact Three |

### Related Pages

Additional pages include:

* About
* Course details
* Blog posts
* Blog categories
* Products
* Team member details
* Events
* Career
* FAQ
* Checkout
* Membership
* Information pages
* Error and 404 pages

The precise route list, coverage status, and known approximations are documented in `PAGE_CHECKLIST.md`.

### Navigation Structure

The main navigation follows this structure:

* **Home** — Home Three
* **Courses** — Course listings and course categories
* **Pages**

  * About
  * Course
  * FAQ
  * Pricing
  * Career
  * Events
  * Team
* **Blogs** — Blog Three
* **Contacts** — Contact Three

Design variant numbers are not displayed in the website's navigation labels.

All internal navigation should point to implemented routes rather than placeholder pages.

---

## Project Structure

The main project structure is organized as follows:

```text
elearna-react/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
│
├── public/
│   ├── elearna-webflow.css
│   └── assets/
│       └── img/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   │
│   ├── components/
│   │   ├── SiteHeader.jsx
│   │   ├── Footer.jsx
│   │   ├── PageMeta.jsx
│   │   └── PageEnhance.jsx
│   │
│   ├── data/
│   │
│   ├── lib/
│   │   ├── cartStore.js
│   │   └── cartDom.js
│   │
│   ├── pages/
│   │   ├── posts/
│   │   ├── categories/
│   │   ├── products/
│   │   └── ...
│   │
│   └── styles/
│       └── interactions.css
│
├── tools/
│
├── PAGE_CHECKLIST.md
├── MISSING_ASSETS.md
└── README.md
```

### Important Files

| File                             | Responsibility                                     |
| -------------------------------- | -------------------------------------------------- |
| `index.html`                     | HTML entry point and global metadata               |
| `vite.config.js`                 | Vite configuration and relative asset paths        |
| `src/main.jsx`                   | React application entry point                      |
| `src/App.jsx`                    | Routing and shared application structure           |
| `src/components/SiteHeader.jsx`  | Shared navigation and header                       |
| `src/components/Footer.jsx`      | Shared footer                                      |
| `src/components/PageMeta.jsx`    | Page titles and meta descriptions                  |
| `src/components/PageEnhance.jsx` | Page interactions and enhancements                 |
| `src/styles/interactions.css`    | Custom interaction styles and responsive behavior  |
| `src/data/`                      | Page metadata and content registries               |
| `src/lib/`                       | Cart-related utilities                             |
| `src/pages/`                     | Page components and route-specific content         |
| `public/elearna-webflow.css`     | Localized reference stylesheet                     |
| `public/assets/img/`             | Local images, icons, and other media               |
| `tools/`                         | Conversion, localization, and verification scripts |

---

## Getting Started

### Prerequisites

Install the following before running the project:

* Node.js with npm
* A code editor, such as Visual Studio Code
* A terminal or command prompt

You can check whether Node.js and npm are installed by running:

```bash
node --version
npm --version
```

### 1. Open the Project

Open a terminal inside the project directory:

```bash
cd elearna-react
```

Make sure the directory contains `package.json`.

### 2. Install Dependencies

Run:

```bash
npm install
```

This installs the dependencies defined in the project's package files.

### 3. Start the Development Server

Run:

```bash
npm run dev
```

Vite will display a local development address in the terminal, usually:

```text
http://localhost:5173
```

Open the displayed address in your browser.

The development server supports hot module replacement, allowing many code changes to appear without manually restarting the server.

### 4. Build for Production

Run:

```bash
npm run build
```

Vite generates the production-ready application in:

```text
dist/
```

### 5. Preview the Production Build

Run:

```bash
npm run preview
```

Open the local address displayed in the terminal to preview the production build.

---

## Available Commands

| Command                            | Description                               |
| ---------------------------------- | ----------------------------------------- |
| `npm install`                      | Install project dependencies              |
| `npm run dev`                      | Start the development server              |
| `npm run build`                    | Create the production build               |
| `npm run preview`                  | Preview the production build              |
| `node tools/ssr-smoke.mjs`         | Run server-side rendering smoke checks    |
| `node tools/audit-links.mjs`       | Check internal links and route references |
| `node tools/verify-asset-refs.mjs` | Check local asset references              |
| `node tools/check-syntax.mjs`      | Check page-component syntax               |

Run the verification scripts from the project root.

These scripts are intended to identify common implementation issues before deployment.

---

## Routing

The application uses React Router DOM with `HashRouter`.

### Why HashRouter?

Hash-based routing allows the application to run on static hosting services without requiring the server to rewrite every route to `index.html`.

Example routes:

```text
/#/
/#/course-three
/#/pricing-three
/#/blog-three
/#/contact-three
```

The actual route list depends on the routes registered in `src/App.jsx` and the corresponding route components.

### Root Route

The root route displays Home Three.

The original reference website uses a different home variant at its root, but this project intentionally makes Home Three the default page.

### Unknown Routes

Unknown routes display the project's 404 page.

Unknown course or other detail slugs follow the fallback behavior documented in `PAGE_CHECKLIST.md`.

### Static Hosting

The Vite configuration uses relative base paths:

```js
base: './'
```

The production assets directory is configured as:

```text
static/
```

This configuration is intended to support static hosting, including GitHub Pages, provided the application is deployed with the correct base URL and file structure.

---

## Responsive Design

The website is designed to adapt to desktop, tablet, and mobile screens.

### Desktop — 1280 px and Above

* Full desktop navigation.
* Logo aligned to the left.
* Main navigation centered as a group.
* Account actions and cart aligned to the right.
* Multi-column content and card layouts.

### Small Desktop and Large Tablet — 992 px to 1279 px

* Full navigation remains visible.
* Dropdowns support pointer hover and keyboard focus.
* Course and team grids adapt to the available width.
* Utility navigation remains visible.

### Tablet and Mobile — 991 px and Below

* Desktop navigation is replaced by a hamburger menu.
* The mobile menu opens as a fixed-height-aware drawer.
* Dropdowns expand as inline accordions.
* Body scrolling is locked while the drawer is open.
* Account actions move into the mobile menu.

### Small Tablets — 600 px to 991 px

* Blog cards display in two columns.
* Team cards display in two columns.
* Other layouts adapt to the available content width.

### Mobile — 599 px and Below

* Course, team, and career card grids use a single column.
* Category tiles retain a compact two-column layout where appropriate.
* Spacing and icon sizes are reduced for smaller screens.
* Touch devices receive usable alternatives to hover-only interactions.

### Responsive Testing

The implementation includes layout checks at multiple viewport widths.

Before publishing, test the actual website on desktop, tablet, and mobile devices, including navigation, dropdowns, forms, images, and page-specific interactions.

---

## Design and Animation

### Reference Stylesheet

The original published stylesheet is stored at:

```text
public/elearna-webflow.css
```

It provides the foundation for the reference typography, colors, layout, and visual styling.

**Keep this stylesheet at the root of `public/`.**

Its relative image URLs depend on the stylesheet's location. Moving it into another directory without updating those URLs can break background images.

### Custom Interaction Layer

The custom behavior layer is implemented primarily through:

```text
src/components/PageEnhance.jsx
src/styles/interactions.css
```

These files recreate selected observable interactions from the published Webflow website.

### Navigation Behavior

The shared header supports:

* Scroll-dependent background styling.
* Entrance animation.
* Dropdown transitions.
* Active-page styling.
* Responsive menu switching.
* Mobile drawer behavior.
* Hamburger icon animation.
* Scroll locking while the mobile menu is open.

### Card Behavior

Shared card interactions include:

* Subtle elevation on hover.
* Soft shadow transitions.
* Image scaling.
* Consistent hover behavior across course, blog, team, pricing, career, and category cards.

Hover-dependent effects are adapted for touch devices.

### Scroll Effects

Scroll-based behavior includes:

* Reveal animations.
* Animated counters.
* Smooth scrolling to page anchors.
* Marquee animations.
* Course-card effects.

Elements that use scroll reveals should not remain permanently hidden if they enter the viewport or if the user jumps directly to a section.

### Motion Accessibility

Reduced-motion preferences should be respected wherever practical. Avoid introducing animations that prevent users from navigating or reading the content comfortably.

---

## Interactive Components

### Course Cards

Popular-course cards include an expandable detail panel.

The panel is designed to stay within its own card rather than overlap neighboring cards when the layout changes.

On touch devices, the interaction can be triggered by tapping.

### Shopping Cart

The demo cart supports:

* Adding items.
* Displaying the item count.
* Opening the cart drawer.
* Removing items.
* Displaying an order summary.
* Clearing the cart after the demo order action.

Cart-related utilities are located in:

```text
src/lib/
```

### Pricing

The Pricing Three page includes a monthly/yearly billing toggle.

### FAQ and Tabs

FAQ accordions and tab groups provide interactive content switching.

### Checkout

The checkout page includes an order summary and a billing-address toggle.

### Forms

Forms provide frontend success feedback or notifications.

They do not submit data to a backend service.

---

## Asset Management

Website assets are stored locally in:

```text
public/assets/img/
```

The asset collection includes images, icons, and other media referenced by the pages.

The project is designed to avoid runtime dependencies on the original Webflow asset CDN.

### Important Asset Rules

* Keep assets in their expected directories.
* Preserve filenames unless all references are updated.
* Check image and background-image paths when adding new pages.
* Verify `srcset` entries when working with responsive images.
* Keep the reference stylesheet at `public/elearna-webflow.css` unless its relative URLs are adjusted.

Run the asset verification script after making changes:

```bash
node tools/verify-asset-refs.mjs
```

### External Resources

Google Fonts remains an external runtime resource.

As a result, typography may fall back to locally available fonts if the Google Fonts service cannot be reached.

For more information, see `MISSING_ASSETS.md`.

---

## Testing and Verification

The project includes utility scripts for checking page rendering, routing, asset references, and syntax.

### Server-Side Rendering Smoke Test

```bash
node tools/ssr-smoke.mjs
```

Checks whether the page components and shared components can render in the configured server-side test environment.

### Internal Link Audit

```bash
node tools/audit-links.mjs
```

Checks internal links against the project's known routes.

### Asset Reference Audit

```bash
node tools/verify-asset-refs.mjs
```

Checks whether referenced local assets exist.

### Syntax Check

```bash
node tools/check-syntax.mjs
```

Checks the syntax of the page components covered by the script.

### Production Build

```bash
npm run build
```

Confirms that Vite can compile the application for production.

### Recommended Manual Checks

Before publishing, verify:

1. The homepage loads correctly.
2. Every navigation link opens the intended page.
3. Dropdowns work with a mouse, keyboard, and touch.
4. The mobile menu opens and closes correctly.
5. The header behaves correctly while scrolling.
6. Page animations do not leave content hidden.
7. Images and background images load.
8. Forms provide appropriate feedback.
9. Cart interactions work as expected.
10. The website has no unintended horizontal overflow.
11. Layouts remain usable at narrow viewport widths.
12. The production build works at the intended hosting location.

Automated checks do not replace a visual comparison with the reference website.

---

## Known Limitations

### No Backend

This project is a frontend recreation.

It does not include:

* A database.
* User account persistence.
* Real login or registration.
* Server-side form processing.
* Real order management.
* Payment processing.
* A production shopping system.

These capabilities would require additional backend services and integration.

### Demo Checkout

The cart and checkout interactions are for demonstration purposes only.

They do not process real payments. Payment-related markup from the reference website should not be treated as a working payment integration.

### Reference-Gated Course Pages

Some course-detail pages are access-restricted on the reference website.

The recreation uses the documented fallback behavior for those pages. Consult `PAGE_CHECKLIST.md` for the relevant routes and notes.

### Visual Fidelity

The original stylesheet and converted page markup provide the visual foundation, while custom React and CSS recreate selected interactions.

Some behavior may differ from the original Webflow implementation because its native interaction runtime is not included.

A final visual inspection on real devices is recommended, particularly for animation timing, responsive transitions, and page-specific layouts.

### External Fonts

Google Fonts requires an internet connection unless the fonts are downloaded and served locally.

---

## Documentation

Additional project documentation is available in the repository.

### `PAGE_CHECKLIST.md`

Contains the page coverage checklist, route status, variant availability, and documented approximations.

### `MISSING_ASSETS.md`

Documents asset verification, external dependencies, and resources that could not be sourced from the reference.

### `tools/`

Contains scripts for page conversion, asset localization, metadata generation, syntax checks, and route verification.

The four verification scripts referenced under [Available Commands](#available-commands) — `ssr-smoke.mjs`, `audit-links.mjs`, `verify-asset-refs.mjs` and `check-syntax.mjs` — are tracked in this repository. The remaining one-shot conversion and QA scripts are kept locally: they hardcode paths from the machine they were written on and several target components that no longer exist, so they will not run elsewhere.

---

## Development Guidelines

When modifying the project:

1. Reuse shared components wherever possible.
2. Keep navigation consistent across all pages.
3. Avoid duplicating the header or footer in individual page components.
4. Preserve the reference stylesheet's expected asset paths.
5. Use responsive CSS rather than fixed desktop-only dimensions.
6. Test hover behavior and touch interactions separately.
7. Ensure new routes are registered and linked correctly.
8. Run the verification scripts after significant changes.
9. Check the production build before deployment.
10. Update `PAGE_CHECKLIST.md` when page coverage or known limitations change.

---

## License and Reference

This project is a recreation for development, learning, and demonstration purposes.

The original design reference is:

**Elearna:** https://elearna.webflow.io

Original website assets, branding, and design elements may belong to their respective owners. Confirm that you have the necessary rights before redistributing or using them commercially.

---

**Built with React and Vite.**
