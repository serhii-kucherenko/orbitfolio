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

- Claiming `r3f` in the stack without mounting Canvas is lab fraud — tick 94 added a fail-then-pass oracle and real Three.js scenes (alcove / orbit / veil / flythrough / spotlight / fleet / atmosphere / monolith / planet / centurion) with reduced-motion CSS fallbacks
- Hybrid ladder award motion (tick 95): every #86–#100 cell must mount WebGL or Lenis smooth scroll — learning continues by stealing technique, not only layout metaphors
- Hybrid craft depth (tick 96): Lenis-only wrappers were too cheap — Hybrid cells must stay ≥120 lines of real structure (who/what/proof rails, lessons, secondary CTAs)
- Gamma GSAP (tick 97): Framer alone was monoculture motion — warp / waveform / launch now use GSAP ScrollTrigger reveals with reduced-motion no-ops
- Epsilon hire proof (tick 98): hire cells must stay ≥110 lines and expose an explicit who / what / proof strip — depth without a ten-second scan still fails recruiters
- Beta editorial Lenis (tick 99): magazine cells need depth plus smooth reading — ≥3 Beta designs mount Lenis; all stay ≥110 lines
- Zeta experimental craft (tick 100): experimental cells stay ≥110 lines and at least three mount AwardWebGL, Lenis, or GSAP — liquid metal + swarm fleet, void Lenis, telescope GSAP
- Delta systems craft (tick 101): systems cells stay ≥110 lines with docs Lenis, holodisc WebGL, and switchboard GSAP — dense UI still has to feel like a product, not a dump
- Gamma kinetic depth (tick 102): motion cells keep GSAP on ≥3 designs and every Gamma page stays ≥110 lines — kinetics without substance fails the lab
- Alpha WebGL depth (tick 103): WebGL cells still need ≥110 lines of page craft — Canvas alone is not an award layout
- Structural diversity beats palette swaps for lab signal
- Fail-then-pass diversity checks forced at least 20 fully custom designs instead of shared-shell palette swaps — see [`docs/RED_GREEN.md`](RED_GREEN.md)
- Gate raised to **100** custom designs (batch 8) — every `/test/n` cell is now uniquely built; shared `AwardVariant` shell retired from active experiments
- Hire UX oracles (tick 40): every cell exposes name, email contact, experience, and a `<main>` landmark; printable `/resume` reachable from every design via `ContactRow` or inline link
- After 100/100 uniqueness, the next fail-then-pass lever is **depth** — drip-feeding +5 cells per loop left ~half the lab looking like thin resume dumps (tick 46 mass-deepened to **100/100** ≥40-line designs)
- Public homepage is now **selectable**: while browsing `/test/n`, “Use as public home” (password-gated) publishes that design to `/` for everyone
- Shared resume blocks keep completeness high while experience diverges — but overusing them plus the same starfield made designs feel identical
- Diversity reboot (tick 26): magazine / [Swiss Style](https://www.designhistory.org/Art_Movements_pages/SwissDesign.html) / clinic product / daylight glass / paper void / dual narrative / mosaic / case chapters / isometric rooms / brutal press / [Bauhaus](https://www.bauhaus.de/en/) / recruiter profile / docs workspace
- Champion hybrid should synthesize (warp + glass + metrics + clear action buttons), not average mediocre traits — Centurion polish (tick 38) rebuilt `/` with scroll warp, glass metrics, and hire CTAs including printable resume
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
