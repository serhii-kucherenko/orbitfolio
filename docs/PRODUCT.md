# Orbitfolio — product brief

**ID:** orbitfolio  
**Hypothesis:** Running many scored portfolio designs and promoting the best one produces an award-grade personal site faster than designing a single page once.

## Success

- 100 distinct `/test/n` designs (structure and interaction differ, not only theme)
- Scored on coolness / completeness / uniqueness / motion / hireability
- Best design on `/` with full resume content plus memorable motion or atmosphere
- `/goals` page with 100 goals seed
- Public GitHub repo; trunk stays mergeable

## Non-goals

- Content management system / login
- Pixel-perfect resume PDF export
- Full multilingual site (one bilingual experiment only)

## Workflow

**Fail-then-pass checks** (primary) plus craft research when the visual approach is unclear. Each design experiment is one “cell.”

1. Write or extend a check in `oracles/` that fails
2. Build or deepen the design until `npm test` passes
3. Lint + build → open a pull request → merge → note in `docs/FINDINGS.md`

See `docs/RED_GREEN.md`.
