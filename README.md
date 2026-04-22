# Suresh Kumar — Portfolio


## Design Philosophy
- Minimal, typographic, white — large DM Serif Display headings
- Scroll-triggered fade-in animations
- Expandable project cards
- Responsive across all screen sizes
- No external UI libraries — pure CSS

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Install & Run

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `build/` folder. Deploy that folder to GitHub Pages, Vercel, or Netlify.

## Deploying to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://sureshkumartibirisetti.github.io/Portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## Folder Structure

```
src/
  components/
    Nav.js / Nav.css          — Sticky navigation with mobile menu
    Hero.js / Hero.css        — Full-height intro with stats card + marquee
    About.js / About.css      — About me + education
    Experience.js / .css      — Work history (julius.fm grid style)
    Projects.js / .css        — Expandable project accordion
    Skills.js / .css          — Skills in a bordered grid
    Achievements.js / .css    — Certifications + coding profiles
    Contact.js / .css         — Contact CTA section
    Footer.js / .css          — Dark footer
  hooks/
    useFadeIn.js              — IntersectionObserver scroll animation hook
  App.js / App.css            — Root layout + shared styles
  index.js / index.css        — Entry point + global reset
```

## Customization

- **Colors**: Edit CSS variables in `src/index.css` under `:root`
- **Fonts**: Change Google Fonts import in `public/index.html` and `--serif`/`--sans` vars
- **Content**: Update data arrays inside each component file
- **Photo**: Add your photo to `public/` and reference it in `Hero.js`
