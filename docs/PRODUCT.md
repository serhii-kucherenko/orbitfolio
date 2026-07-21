# Orbitfolio — product brief

**ID:** orbitfolio  
**Hypothesis:** A Method Lab product loop (many scored UI variants → promote champion) can produce an award-grade personal portfolio faster than a single-shot design.

## Success

- 100 distinct `/test/n` variants (structure/UX differ, not only theme)
- Scored on coolness / comprehensiveness / uniqueness / motion / hireability
- Champion at `/` with CV completeness + space FX wow
- `/goals` page with 100 goals seed
- Public GitHub repo; mergeable trunk

## Non-goals

- CMS / auth
- Pixel-perfect resume PDF export
- Multilingual full site (dual-signal experiment only)

## Workflow

**A03 red→green** (primary) + craft research (A08). Design cells = variants.

1. Write / extend an oracle in `oracles/` that fails (RED)
2. Implement or deepen the cell until `npm test` is green
3. Lint + build → PR → merge → note in `docs/FINDINGS.md`

See `docs/RED_GREEN.md`.
