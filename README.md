# Orbitfolio

Personal portfolio for **Serhii Kucherenko** — Founding Full-Stack Engineer (applied AI).

[![CI](https://github.com/serhii-kucherenko/orbitfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/serhii-kucherenko/orbitfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)

Built as an **AI Method Lab** product experiment: **50 structurally different UI/UX variants**, scored, with the champion promoted to `/`.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Champion portfolio (best composite score) |
| `/test/1` … `/test/50` | Design experiments |
| `/lab` | Leaderboard + rubric scores |
| `/goals` | 100 Goals (living list) |

## Stack

Next.js 16 · React 19 · Tailwind 4 · Framer Motion · GSAP · Lenis · Three.js / R3F

## Develop

```bash
npm install
npm run dev
```

## Deploy

Connect the GitHub repo to Vercel (or run `npx vercel`). Sitemap/robots assume `https://orbitfolio.vercel.app` — update if the production host differs.

## Lab process

1. Ship a distinct variant under `/test/n`
2. Score axes in `src/data/variants.ts` (see `docs/RUBRIC.md`)
3. Promote highest composite to `/`
4. Keep losers browsable for comparison

## Contact

- [kucherenko.web@gmail.com](mailto:kucherenko.web@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/serhii-kucherenko/)
- [GitHub](https://github.com/serhii-kucherenko)
