# Orbitfolio — AI Method Lab findings

## Experiment

Build a personal portfolio by running **100 interface designs**, score each, promote the best.

## Rubric weights

Coolness 30 · Completeness 20 · Uniqueness 20 · Motion 15 · Hireability 15  
Full definitions: [`docs/RUBRIC.md`](RUBRIC.md)

## Outcomes

- **100 / 100** designs shipped at `/test/n` across many layout types and seven teams
- Champion **#100 Orbitfolio Centurion** (provisional overall score 9.70) promoted to `/`
- Supporting pages: `/goals` (100 goals), `/lab` (leaderboard), cosmic 404
- Stack: [Next.js](https://nextjs.org/docs) 16, [Tailwind](https://tailwindcss.com/docs) 4, [Framer Motion](https://www.framer.com/motion/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (select designs), canvas effects
- **Live:** https://orbitfolio-kohl.vercel.app
- Automated checks green on `main`; Vercel project `orbitfolio` on team kucherenko-web
- Keep-going loop log: [`docs/LOOP.md`](LOOP.md)
- Lab compare mode + stack filters for discovering experiments

## Learn

- Structural diversity beats palette swaps for lab signal
- Fail-then-pass diversity checks forced at least 20 fully custom designs instead of shared-shell palette swaps — see [`docs/RED_GREEN.md`](RED_GREEN.md)
- Gate raised to **85** custom designs (batch 7) — daylight product / hiring brief / metrics / mosaic / one-pager / origami / void / code rain / aurora / event horizon
- Shared resume blocks keep completeness high while experience diverges — but overusing them plus the same starfield made designs feel identical
- Diversity reboot (tick 26): magazine / [Swiss Style](https://www.designhistory.org/Art_Movements_pages/SwissDesign.html) / clinic product / daylight glass / paper void / dual narrative / mosaic / case chapters / isometric rooms / brutal press / [Bauhaus](https://www.bauhaus.de/en/) / recruiter profile / docs workspace
- Champion hybrid should synthesize (warp + glass + metrics + clear action buttons), not average mediocre traits
- Hireability peaks when proof (metrics + experience) is reachable in under 10 seconds without fighting the effects
- Hybrid designs #86–#100 form a rising learning ladder: every thesis cites earlier cells and the provisional overall score improves each step

## Next

- Validate the provisional 100-cell scores with human review and real recruiter sessions
- Optionally compare the champion against high-hireability light layouts (#17 Clinic, #16 Recruiter, #8 Dual)
- Enrich goals from ongoing GitHub / life updates

## Learn more

- Award craft sources: [`docs/BENCHMARKS.md`](BENCHMARKS.md)
- Product brief: [`docs/PRODUCT.md`](PRODUCT.md)
- Parent method lab: https://github.com/serhii-kucherenko/ai-method-lab
- Hosting: [Vercel docs](https://vercel.com/docs)
