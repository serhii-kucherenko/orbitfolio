# Orbitfolio — AI Method Lab findings

## Experiment

Build a personal portfolio by running **50 UI cells**, score each, promote the best.

## Rubric weights

Coolness 30 · Comprehensiveness 20 · Uniqueness 20 · Motion 15 · Hireability 15

## Outcomes

- **50 / 50** variants shipped at `/test/n` with distinct layout architectures
- Champion **#50 Champion Hybrid** (composite 9.23) promoted to `/`
- Supporting pages: `/goals` (100 goals), `/lab` (leaderboard), cosmic 404
- Stack: Next.js 16, Tailwind 4, Framer Motion, R3F (select variants), canvas FX
- **Live:** https://orbitfolio-kohl.vercel.app
- CI green on `main`; Vercel project `orbitfolio` on team kucherenko-web
- Keep-going loop log: `docs/LOOP.md`
- Lab compare mode + stack filters for discovering experiments

## Learn

- Structural diversity beats palette swaps for lab signal
- Shared CV blocks keep comprehensiveness high while UX diverges — but overusing them + Starfield made variants feel identical
- Diversity reboot (tick 26): magazine / Swiss / clinic SaaS / daylight glass / paper void / dual narrative / mosaic / case chapters / iso rooms / brutal press / Bauhaus / recruiter profile / docs workspace
- Champion hybrid should synthesize (warp + glass + metrics + CTAs), not average mediocre traits
- Hireability peaks when proof (metrics + experience) is reachable in <10s without fighting the FX

## Next

- Keep rewriting remaining space-clone experiments into distinct systems
- Optionally A/B champion vs high-hireability light layouts (#17 Clinic, #16 Recruiter, #8 Dual)
- Enrich goals from ongoing GitHub / life updates
