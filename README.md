# Orbitfolio

Personal portfolio for **Serhii Kucherenko** — Founding Full-Stack Engineer (applied AI).

**Live:** [orbitfolio-kohl.vercel.app](https://orbitfolio-kohl.vercel.app)

[![CI](https://github.com/serhii-kucherenko/orbitfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/serhii-kucherenko/orbitfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)

Built as an **AI Method Lab** product experiment: **100 structurally different UI/UX variants**, scored, with the champion promoted to `/`.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Champion portfolio (best composite score) |
| `/test/1` … `/test/100` | Design experiments |
| `/lab` | Leaderboard + rubric scores |
| `/goals` | 100 Goals (living list) |
| `/resume` | Printable / PDF-friendly resume |

## Stack

Next.js 16 · React 19 · Tailwind 4 · Framer Motion · GSAP · Lenis · Three.js / R3F

## Develop

```bash
npm install
npm run dev
```

## Deploy

One-click import to Vercel (team **kucherenko-web**):

[Import orbitfolio on Vercel](https://vercel.com/new/import?s=https://github.com/serhii-kucherenko/orbitfolio&teamSlug=kucherenko-web)

Or run `npx vercel` after logging in. Optional GitHub Actions secrets for `.github/workflows/deploy.yml`: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

Sitemap/robots use `https://orbitfolio-kohl.vercel.app`.

## Lab process

1. Ship a distinct variant under `/test/n`
2. Score axes in `src/data/variants.ts` (see `docs/RUBRIC.md`)
3. Promote highest composite to `/`
4. Keep losers browsable for comparison

## Contact

- [kucherenko.web@gmail.com](mailto:kucherenko.web@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/serhii-kucherenko/)
- [GitHub](https://github.com/serhii-kucherenko)
