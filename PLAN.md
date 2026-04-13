# Para Bellum Lounge — Website Redesign Plan

## Overview

Full redesign from static HTML to React + Vite, deployed on GitHub Pages with custom domain `parabellumlounge.cz`. Two pages: **Home** and **References**. Dark green + dark brown cozy aesthetic. Shisha as the dominant service.

---

## Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool (fast dev + optimized prod build) |
| React Router (HashRouter) | Client-side routing — works on GitHub Pages without 404 tricks |
| Pure CSS (modular per component) | Styling — no framework, easy to edit HTML/JSX |
| GitHub Actions | Auto-build and deploy to `gh-pages` branch on every push to `master` |

---

## Cookie Consent & Analytics

Czech Republic is EU territory — **GDPR applies**. Microsoft Clarity and Google Analytics both set cookies and collect personal data, so they **must not load until the user gives explicit consent**.

### How it works

1. On first visit a **cookie bar** appears at the bottom of the screen.
2. User picks **Accept** or **Decline**.
3. Choice is saved to `localStorage` (`cookie_consent: "accepted" | "declined"`).
4. On subsequent visits the bar does not appear — the stored preference is read on mount.
5. Analytics scripts are only injected into `<head>` **after** the user accepts.

### Component

```
src/components/ui/CookieBar.jsx
src/components/ui/CookieBar.css
```

`CookieBar` is rendered once in `App.jsx`, outside the router, so it appears on every page.

### Analytics loading logic

```
src/utils/analytics.js
```

This module exposes a single `initAnalytics()` function that dynamically injects both GA4 and Clarity scripts. It is called only when the user accepts, or on mount if a prior acceptance is found in `localStorage`.

```js
// pseudocode — actual code goes in analytics.js
export function initAnalytics() {
  injectScript('https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX')
  injectScript('https://www.clarity.ms/tag/XXXXXXX')
  // configure window.gtag and window.clarity after injection
}
```

### Clarity — correct setup

Clarity's standard embed snippet loads immediately and unconditionally. That is **not GDPR-compliant**. The correct approach:

1. Do **not** put the Clarity snippet in `index.html`.
2. Call `initAnalytics()` only after consent is given.
3. Clarity also supports a **consent API** — after injecting the script, call:
   ```js
   window.clarity('consent')
   ```
   This tells Clarity the user has consented and enables full session recording. Without this call, Clarity runs in a limited mode even if the script is loaded.

4. If user **declines**, do not inject the script at all. If they previously accepted and later you want to add a "withdraw consent" option, you'd need to clear `localStorage` and reload — scripts injected into the DOM cannot be un-run without a page reload.

### Full flow

```
Page load
    ↓
Read localStorage
    ├─ "accepted" → initAnalytics() → hide cookie bar
    ├─ "declined" → hide cookie bar, no scripts
    └─ not set   → show cookie bar
                      ↓
              User clicks Accept
                      ↓
              save "accepted" → initAnalytics() → hide bar
              User clicks Decline
                      ↓
              save "declined" → hide bar, no scripts
```

### Cookie bar content (Czech + English)

The bar should include:
- Brief explanation of what cookies are used for (analytics, session recording)
- Link to the Privacy Policy page
- **Accept** button (primary style)
- **Decline** button (secondary/ghost style)

Example text:
> "Používáme analytické cookies (Google Analytics, Microsoft Clarity) pro zlepšení webu. Vaše data nezpracováváme pro reklamu."
> *(We use analytics cookies (Google Analytics, Microsoft Clarity) to improve the site. Your data is not used for advertising.)*

### Checklist — Cookie Consent

- [ ] `CookieBar` component renders on first visit only
- [ ] Accept/Decline choice saved to `localStorage`
- [ ] GA4 script **not** in `index.html` — loaded dynamically via `analytics.js`
- [ ] Clarity script **not** in `index.html` — loaded dynamically via `analytics.js`
- [ ] `window.clarity('consent')` called after user accepts
- [ ] Cookie bar has link to Privacy Policy
- [ ] Cookie bar is readable on mobile
- [ ] No analytics network requests visible in DevTools before user accepts
- [ ] On second visit with prior acceptance — bar does not show, analytics fire immediately

---

## Project Structure

```
parabellum.github.io/
├── _backup/                        ← original static site backup (do not delete)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          ← navigation, mobile hamburger menu
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx          ← social links, copyright, quick links
│   │   │   └── Footer.css
│   │   ├── sections/               ← each section of the home page
│   │   │   ├── Hero.jsx            ← full-screen opening with logo + tagline
│   │   │   ├── Hero.css
│   │   │   ├── About.jsx           ← brief story/premise intro
│   │   │   ├── About.css
│   │   │   ├── Shisha.jsx          ← DOMINANT section, largest, most images
│   │   │   ├── Shisha.css
│   │   │   ├── Drinks.jsx          ← drinks section
│   │   │   ├── Drinks.css
│   │   │   ├── Events.jsx          ← private events / catering
│   │   │   ├── Events.css
│   │   │   ├── ReferencesPreview.jsx  ← teaser quotes → links to /references
│   │   │   ├── ReferencesPreview.css
│   │   │   ├── OpeningHours.jsx    ← hours + contact info + map
│   │   │   └── OpeningHours.css
│   │   └── ui/                     ← reusable small components
│   │       ├── Button.jsx          ← primary/secondary variants
│   │       ├── Button.css
│   │       ├── SectionTitle.jsx    ← consistent heading style
│   │       ├── SectionTitle.css
│   │       ├── Card.jsx            ← used in drinks, events, references
│   │       ├── Card.css
│   │       ├── CookieBar.jsx       ← GDPR cookie consent bar
│   │       └── CookieBar.css
│   ├── pages/
│   │   ├── Home.jsx                ← assembles all sections
│   │   └── References.jsx          ← full references/testimonials page
│   ├── data/
│   │   ├── hours.js                ← opening hours (single source of truth)
│   │   ├── references.js           ← testimonials/quotes data
│   │   └── contact.js              ← phone, email, social links, address
│   ├── utils/
│   │   └── analytics.js            ← dynamic GA4 + Clarity loader, consent-gated
│   ├── styles/
│   │   └── global.css              ← CSS variables, reset, typography, colors
│   ├── App.jsx                     ← router setup, CookieBar rendered here
│   └── main.jsx                    ← React entry point
├── public/
│   ├── CNAME                       ← parabellumlounge.cz (for GitHub Pages)
│   ├── fonts/                      ← FreshScript.woff
│   └── img/                        ← all images (Hkhs/, Drinks/, Events/, Web/, etc.)
├── .github/
│   └── workflows/
│       └── deploy.yml              ← GitHub Actions: build + deploy to gh-pages
├── index.html                      ← Vite entry HTML
├── vite.config.js
├── package.json
├── PLAN.md                         ← this file
└── _backup/                        ← original site backup
```

---

## Color Palette

| Role | Variable | Value |
|---|---|---|
| Page background | `--color-bg` | `#0b130b` (very dark green-black) |
| Surface (cards, panels) | `--color-surface` | `#1a1008` (dark brown) |
| Surface secondary | `--color-surface-2` | `#121a0e` (dark green) |
| Accent (gold/bronze) | `--color-accent` | `#8a6a3a` |
| Accent hover | `--color-accent-hover` | `#a67c48` |
| Text primary | `--color-text` | `#f0ebe3` (warm off-white) |
| Text muted | `--color-text-muted` | `#9e9080` |
| Border | `--color-border` | `#2a3a22` (dark green border) |

---

## Pages

### Home
Sections in order:
1. **Hero** — full-screen, logo, tagline, CTA button (reservation link)
2. **About** — 2–3 sentences about the premise, cozy intro
3. **Offer** — combined visual section: shisha dominant (images first, no separate text block for drinks), drinks shown below/secondary via images only; no text-heavy descriptions, images tell the story
4. **Events** — private events, catering inquiry CTA
5. **References preview** — 2–3 quote teasers with "See all references →" link
6. **Opening Hours** — hours table, phone, email, Google Maps embed

> **Note:** Shisha and Drinks are NOT separate sections. They are combined in one visual "Offer" section where shisha images come first and are more prominent. No descriptive text needed — images provided by client will carry the content. If placeholder icons are needed temporarily, shisha icons come first.

### References
- Masonry or card grid layout
- Each card: customer quote, name (first name only or alias), optional star rating
- Atmospheric dark background or mood image per card
- Easy to add new entries (just add to a data array in the file)

---

## Setup — First Time

### Prerequisites
- Node.js 18+ (check: `node -v`)
- npm 9+ (check: `npm -v`)
- Git configured with your GitHub account

### 1. Initialize the React + Vite project ✅ Done

`package.json` was created manually with React 19.2.5, Vite 6, and react-router-dom 7.
Run `npm install` to install all dependencies.

> **Note:** `npm create vite` is interactive and won't work in a non-empty directory without confirming overwrite. It's simpler to write `package.json` directly and run `npm install`.

### 2. Configure Vite for GitHub Pages ✅ Done

`vite.config.js` is set with `base: '/'` (correct for custom domain — no subdirectory prefix needed).

### 3. Move images to public/ ✅ Done

Images are at `public/img/`, font at `public/fonts/FreshScript.woff`, CNAME at `public/CNAME`.
Vite copies everything from `public/` into `dist/` automatically on build.

### 4. Configure CNAME ✅ Done

`public/CNAME` contains `parabellumlounge.cz`.

### 5. Set up GitHub Actions for auto-deploy ✅ Done

`.github/workflows/deploy.yml` is ready:
- Triggers on push to `master`
- Runs `npm ci && npm run build`
- Deploys `dist/` to `gh-pages` branch via `peaceiris/actions-gh-pages@v4`
- Writes CNAME automatically via the `cname:` option

### 6. Configure GitHub Pages in repository settings ⬅ Still needed

- Go to **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: `gh-pages` / `/ (root)`
- Custom domain: `parabellumlounge.cz`
- Enable **Enforce HTTPS**

> The `gh-pages` branch is created automatically on first push to `master` by the Actions workflow. Do this step after the first successful workflow run.

---

## Running Locally (Development)

```bash
# Install dependencies (first time or after pulling changes)
npm install

# Start dev server — live reload, opens at http://localhost:5173
npm run dev

# Build for production (output goes to dist/)
npm run build

# Preview the production build locally
npm run preview
```

---

## Deployment Flow

```
You push to master
        ↓
GitHub Actions runs
        ↓
npm ci + npm run build
        ↓
dist/ deployed to gh-pages branch
        ↓
GitHub Pages serves from gh-pages
        ↓
parabellumlounge.cz is live
```

**Manual deploy** (if you don't want GitHub Actions):
```bash
npm run build
# Then manually copy dist/ contents and push to gh-pages branch
# OR use: npx gh-pages -d dist
```

---

## Checklist — Before Starting Code

- [ ] Confirm images to use — swap placeholders in `public/img/` when new ones are ready
- [ ] Confirm About/story text — placeholder copy is in `About.jsx`, replace when ready
- [x] Reservation link URL — set to `https://www.storyous.com/cz/places/5e6d24a6bde4650004cb1c0c/` (from last commit)
- [x] Phone numbers and email — pulled from original site: reservations `+420 793 959 339`, contact `+420 733 382 121`
- [ ] Confirm opening hours are current — copied from original site into `src/data/hours.js`, marked with TODO
- [x] Google Maps embed — copied from original site into `src/data/contact.js`
- [ ] Real customer testimonials — placeholder entries in `src/data/references.js`, replace when ready
- [x] Social media links — Facebook and Instagram URLs pulled from original site
- [x] Navigation items — Home, Shisha (scroll), Události (scroll), Reference, Kontakt (scroll)
- [x] Google Analytics ID — `G-W9PN9CGD8L` in `src/utils/analytics.js`
- [x] Microsoft Clarity ID — `46a2fmbv8u` in `src/utils/analytics.js`

---

## Checklist — During Development

- [x] CSS variables defined in `global.css`
- [x] Navbar works on mobile (hamburger menu)
- [x] HashRouter set up — `/#/` for home, `/#/references` for references page
- [x] Hero section with CTA button linked to reservation URL
- [x] Shisha section is visually dominant (largest, most prominent)
- [x] References preview on home links to references page
- [x] References page has data-driven structure (easy to add new entries)
- [ ] All images load correctly — verify in browser with `npm run dev`
- [ ] Google Maps embed works — verify in browser
- [x] `CookieBar` renders on first visit, hidden after choice
- [x] `analytics.js` loads GA4 and Clarity only after consent
- [x] `window.clarity('consent')` called on accept
- [ ] No analytics requests in DevTools before user accepts — verify in browser
- [x] CNAME file in `public/`
- [ ] Responsive design tested at: 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] Fonts load correctly (FreshScript)
- [ ] No broken links or console errors

---

## Checklist — Before Going Live

- [x] `npm run build` completes without errors or warnings — clean build, 71 modules
- [ ] `npm run preview` — check the production build looks correct
- [ ] All images visible in production build
- [ ] Routing works (navigate to references page and back)
- [ ] Mobile layout looks good (test in browser DevTools)
- [ ] GitHub Actions workflow triggers on push to master
- [ ] `gh-pages` branch exists and has built files
- [ ] GitHub Pages → Settings → Pages set to serve from `gh-pages` branch
- [ ] Custom domain `parabellumlounge.cz` resolves correctly
- [ ] HTTPS is active
- [ ] Cookie bar visible on first visit in incognito window
- [ ] Analytics fire only after Accept (verify in DevTools Network tab)
- [ ] Analytics are firing (check Google Analytics real-time after accepting)

---

## My Recommendations

### Things worth doing that will make a big difference

**1. Reservation CTA prominent in Hero**
Put the reservation button immediately in the hero section, above the fold. This is the most important conversion point — users who want to book shouldn't have to scroll.

**2. Shisha flavor/style cards**
Instead of just describing shishas generically, create cards for different flavor categories (fruity, mint, exotic, etc.) with a short description. Looks great, helps customers pick before they arrive.

**3. Atmosphere image gallery**
Even a simple 3–4 image grid showing the interior creates instant emotional connection. Makes the place feel real and inviting.

**4. Opening hours always visible**
Consider putting a small opening hours badge in the footer or navbar — many customers just want to quickly check if you're open. Don't make them scroll to find it.

**5. Single source of truth for data**
Store opening hours, contact info, references/testimonials in simple JS data files (`src/data/hours.js`, `src/data/references.js`). When something changes, you edit one file — not multiple components.

**6. Smooth scroll between sections**
Navbar links on the home page should smoothly scroll to sections (`#shisha`, `#contact`) rather than hard navigating. Better user experience, especially on mobile.

**7. "WhatsApp / call us" sticky button on mobile**
A floating call/WhatsApp button on mobile makes it trivial for customers to contact you. Very low effort, high value for a lounge.

**8. Lazy load images**
The existing site had progressive image loading. Keep this — the images are the heaviest assets and it makes the site feel much faster on mobile.

**9. SEO meta tags and Open Graph**
Keep the existing OG tags structure. Make sure each page has a proper title and description — important for when the link is shared on social media.

**10. Add `sitemap.xml` after build**
Once live, regenerate `sitemap.xml` with the new URLs. Submit to Google Search Console. The old static site was already indexed — you want to keep that SEO value.

---

## Things to Avoid

- **Do not use BrowserRouter** — requires server-side routing config that GitHub Pages doesn't support. Use HashRouter.
- **Do not commit `node_modules/`** — already in `.gitignore`, keep it that way.
- **Do not commit `dist/`** — GitHub Actions builds this. Keep `dist/` in `.gitignore` and let the workflow handle deployment.
- **Do not delete `_backup/`** — useful reference for content and structure.
- **Do not over-engineer components** — if a component is used once, it's fine to keep it simple. Don't abstract prematurely.

---

## Open Questions (answer before starting code)

1. What is the reservation URL?
2. Do you have real customer testimonials for the references page?
3. Are the existing images in `img/` the ones to use, or do you have new/better ones?
4. What text should go in the About/story section?
5. Should the catering/events inquiry go to an email, a form, or a third-party booking link?
6. Anything else on the nav besides Home and References?
