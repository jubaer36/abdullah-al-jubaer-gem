# Portfolio

Minimal, fast, static portfolio. Next.js static export, TypeScript, Tailwind v4. No animation library, no icon library, no runtime font requests — everything ships pre-rendered as plain HTML/CSS with a small amount of JS for scroll reveals.

## Edit content

All content lives in `data/`:

- `data/hero.ts` — name, title, description, stats
- `data/skills.ts` — capabilities + skill tags
- `data/experience.ts` — work history
- `data/education.ts` — education history
- `data/projects.ts` — featured projects
- `data/social.ts` — email, GitHub, LinkedIn, site URL

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
# static site output in /out
```

Deploy `/out` to GitHub Pages, Vercel, Netlify, or any static host.
