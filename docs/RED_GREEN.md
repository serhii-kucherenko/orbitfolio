# A03 red → green (Orbitfolio)

Primary Method Lab build loop for this product.

```text
Write oracle (RED) → implement / deepen cell (GREEN) → verify → PR → merge → learn
```

## Oracles

| Suite | Path | Gate |
|-------|------|------|
| Award-100 lab | `oracles/award-100.test.mjs` | Catalog, teams, CV surface, motion, Eta ladder, champion sync, ≥20 handcrafted cells |

```bash
npm test          # must be green before merge
npm run lint
npm run build
```

CI runs **test → lint → build** on every PR and `main` push.

## Rules

1. **Never** implement a new lab contract without a failing oracle first.
2. Handcrafted cells (no `AwardVariant` shell) raise uniqueness — deepen until the diversity oracle is green.
3. Eta Hybrid theses must start with `Steals …` and composite must strictly increase 86→100.
4. After merge, record one learn note in `docs/FINDINGS.md`.
