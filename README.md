# portfolio

Single-page digital CV / portfolio site for Simon Beijer. Editorial layout
with theme + accent + display-font tweaks, built from a Claude Design
handoff.

## Tech stack

- **React 18** — UI
- **Vite 5** — dev server + bundler
- **Vanilla CSS** — variables for theming, inline styles for layout
- **Google Fonts** — Gloock (display), Geist (sans), JetBrains Mono (mono),
  Fraunces (alt display)
- **Vercel** — hosting target

No CSS framework, no router, no state library. The Tweaks panel uses the
Claude Design `postMessage` edit-mode protocol — harmless when running
standalone.

## Requirements

- Node `>=20` (LTS)
- npm 10+

## Setup

```sh
npm install
npm run dev
```

Dev server runs at <http://localhost:5173>.

## Build

```sh
npm run build      # outputs to dist/
npm run preview    # serves dist/ locally for sanity check
```

## Project structure

```
portfolio/
├── index.html              # entry, sets window.__TWEAKS__ defaults
├── public/
│   └── images/projects/    # project card images (webp)
└── src/
    ├── main.jsx            # ReactDOM mount
    ├── App.jsx             # shell: SideNav, Curtain, Tweaks panel
    ├── index.css           # CSS vars, grain overlay, responsive rules
    ├── data/cv.js          # all CV content (single source)
    ├── components/         # Reveal, SplitText, Marquee, Cursor, …
    └── sections/           # Hero, About, Work, Projects, Skills, Contact
```

## Project images

`src/data/cv.js` references `/images/projects/{physiolink,dayboard,skooli,matmind}.webp`.
Drop matching files into `public/images/projects/` and they show up
automatically. If a file is missing, the `Placeholder` component renders
in its place — no broken-image icon.

## Responsive + accessibility

- Breakpoints handled at 768px and 480px (see `src/index.css`)
- `prefers-reduced-motion` is honored — all transitions/animations and
  the pixel cursor are disabled when the user opts out
- Custom cursor + magnetic links are no-ops on touch devices
  (`pointer: coarse`)

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the repo at <https://vercel.com/new>.
3. Vercel auto-detects Vite. Defaults are correct:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy. Every push to `main` triggers a production build; PR branches
   get preview URLs automatically.

A custom domain can be attached later under Project → Settings → Domains.
