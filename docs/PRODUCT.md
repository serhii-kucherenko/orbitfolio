# Orbitfolio — product brief

**ID:** orbitfolio  
**Hypothesis:** Running many scored portfolio designs and promoting the best one produces an award-grade personal site faster than designing a single page once.

## Success

- 100 distinct `/test/n` designs (structure and interaction differ, not only theme)
- Scored on coolness / completeness / uniqueness / motion / hireability — see [`docs/RUBRIC.md`](RUBRIC.md)
- Best design on `/` with full resume content plus memorable motion or atmosphere
- `/goals` page with 100 goals seed
- Public GitHub repo; trunk stays mergeable

## Non-goals

- Content management system / login
- Pixel-perfect resume PDF export
- Full multilingual site (one bilingual experiment only)

## Workflow

**Fail-then-pass checks** (primary) plus craft research when the visual approach is unclear. Each design experiment is one “cell.” Details: [`docs/RED_GREEN.md`](RED_GREEN.md).

1. Write or extend a check in [`oracles/`](../oracles/) that fails
2. Build or deepen the design until `npm test` passes
3. Lint + build → open a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) → merge → note in [`docs/FINDINGS.md`](FINDINGS.md)

## Learn more

- Live site: https://orbitfolio-kohl.vercel.app
- Leaderboard: https://orbitfolio-kohl.vercel.app/lab
- Award craft benchmarks: [`docs/BENCHMARKS.md`](BENCHMARKS.md)
- What we learned so far: [`docs/FINDINGS.md`](FINDINGS.md)
- Parent method lab (how we run experiments): https://github.com/serhii-kucherenko/ai-method-lab
