# Fail-then-pass checks (Orbitfolio)

How we build this product: write a check that fails, then change the site until the check passes.

```text
Write a failing check → build until it passes → verify → open a pull request → merge → write down what we learned
```

## Automated checks

| Suite | Path | What it enforces |
|-------|------|------------------|
| Award-100 lab | `oracles/award-100.test.mjs` | Full catalog, team ranges, resume content, motion safety, Hybrid learning ladder, champion sync, at least 75 uniquely built designs |

```bash
npm test          # must pass before merge
npm run lint
npm run build
```

Automated checks on GitHub run **test → lint → build** on every pull request and every push to `main`.

## Rules

1. **Never** add a new lab rule without a failing check first.
2. Uniquely built designs (not the shared `AwardVariant` shell) raise uniqueness — keep deepening until the diversity check passes.
3. Hybrid team designs (#86–#100) must start their thesis with `Steals …`, and each one’s overall score must beat the previous Hybrid.
4. After merge, add one learning note in `docs/FINDINGS.md`.
