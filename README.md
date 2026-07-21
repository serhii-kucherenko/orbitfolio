# Orbitfolio

Personal portfolio for **Serhii Kucherenko** — Founding Full-Stack Engineer (applied AI).

**Live:** [orbitfolio-kohl.vercel.app](https://orbitfolio-kohl.vercel.app)

[![Build status](https://github.com/serhii-kucherenko/orbitfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/serhii-kucherenko/orbitfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)

Built as an **AI Method Lab** product experiment: **100 structurally different portfolio designs**, scored, with the champion promoted to `/`.

## Routes

| Path | Purpose |
|------|---------|
| [`/`](https://orbitfolio-kohl.vercel.app/) | Champion portfolio (best overall score) |
| [`/test/1`](https://orbitfolio-kohl.vercel.app/test/1) … `/test/100` | Design experiments |
| [`/lab`](https://orbitfolio-kohl.vercel.app/lab) | Leaderboard + rubric scores |
| [`/goals`](https://orbitfolio-kohl.vercel.app/goals) | 100 Goals (living list) |
| [`/resume`](https://orbitfolio-kohl.vercel.app/resume) | Printable / PDF-friendly resume |

## Stack

| Piece | What it is | Docs |
|-------|------------|------|
| [Next.js](https://nextjs.org/) 16 | React framework for the site | [Docs](https://nextjs.org/docs) |
| [React](https://react.dev/) 19 | UI library | [Docs](https://react.dev/learn) |
| [Tailwind](https://tailwindcss.com/) 4 | Utility CSS | [Docs](https://tailwindcss.com/docs) |
| [Framer Motion](https://www.framer.com/motion/) | Animation for React | [Docs](https://motion.dev/docs) |
| [GreenSock (GSAP)](https://gsap.com/) | Timeline / scroll animation | [Docs](https://gsap.com/docs/v3/) |
| [Lenis](https://github.com/darkroomengineering/lenis) | Smooth scrolling | [Repo](https://github.com/darkroomengineering/lenis) |
| [Three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) | Browser 3D | [Three.js manual](https://threejs.org/manual/) · [R3F docs](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) |

## Develop

```bash
npm install
npm run dev
```

## Deploy

One-click import to [Vercel](https://vercel.com/docs) (team **kucherenko-web**):

[Import orbitfolio on Vercel](https://vercel.com/new/import?s=https://github.com/serhii-kucherenko/orbitfolio&teamSlug=kucherenko-web)

Or run `npx vercel` after logging in. Optional GitHub Actions secrets for `.github/workflows/deploy.yml`: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

Sitemap/robots use `https://orbitfolio-kohl.vercel.app`.

## Lab process

1. Ship a distinct design under `/test/n`
2. Score axes in [`src/data/variants.ts`](src/data/variants.ts) (see [`docs/RUBRIC.md`](docs/RUBRIC.md))
3. Promote highest overall score to `/`
4. Keep other experiments browsable for comparison
5. Use fail-then-pass checks ([`docs/RED_GREEN.md`](docs/RED_GREEN.md)) before merging

## Docs map

| Doc | What it’s for |
|-----|----------------|
| [`docs/PRODUCT.md`](docs/PRODUCT.md) | Goals and workflow |
| [`docs/RUBRIC.md`](docs/RUBRIC.md) | How designs are scored |
| [`docs/BENCHMARKS.md`](docs/BENCHMARKS.md) | Award sites and craft patterns |
| [`docs/RED_GREEN.md`](docs/RED_GREEN.md) | Fail-then-pass checks |
| [`docs/FINDINGS.md`](docs/FINDINGS.md) | What we learned |
| [`docs/LOOP.md`](docs/LOOP.md) | Keep-going progress log |

## Contact

- [kucherenko.web@gmail.com](mailto:kucherenko.web@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/serhii-kucherenko/)
- [GitHub](https://github.com/serhii-kucherenko)
