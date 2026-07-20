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
- CI green on `main`; Vercel project not created yet (import URL + optional GH secrets ready)
- Keep-going loop log: `docs/LOOP.md`
- Lab compare mode + stack filters for discovering experiments

## Learn

- Structural diversity beats palette swaps for lab signal
- Shared CV blocks keep comprehensiveness high while UX diverges
- Champion hybrid should synthesize (warp + glass + metrics + CTAs), not average mediocre traits
- Interactive metaphors (⌘K palette, infinite canvas, R3F planet) score high on uniqueness
- Hireability peaks when proof (metrics + experience) is reachable in <10s without fighting the FX

## Next

- Deploy to Vercel
- Enrich goals from ongoing GitHub / life updates
- Optional: A/B champion vs #40 Command Palette with real recruiter feedback
