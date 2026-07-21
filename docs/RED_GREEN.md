# Fail-then-pass checks (Orbitfolio)

How we build this product: write a check that fails, then change the site until the check passes.

```text
Write a failing check → build until it passes → verify → open a pull request → merge → write down what we learned
```

This is the same idea as [test-driven development](https://martinfowler.com/bliki/TestDrivenDevelopment.html): the failing check comes first so “done” is measurable.

## Automated checks

| Suite | Path | What it enforces |
|-------|------|------------------|
| Award-100 lab | [`oracles/award-100.test.mjs`](../oracles/award-100.test.mjs) | Full catalog, team ranges, resume content, motion safety, Hybrid learning ladder, champion sync, **100** uniquely built designs, hire surface + printable resume, **≥20 deepened** (≥40-line) cells |

```bash
npm test          # must pass before merge
npm run lint
npm run build
```

Automated checks on GitHub ([GitHub Actions](https://docs.github.com/en/actions)) run **test → lint → build** on every [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) and every push to `main`.

## Rules

1. **Never** add a new lab rule without a failing check first.
2. Uniquely built designs (not the shared `AwardVariant` shell) raise uniqueness — keep deepening until the diversity check passes.
3. Hybrid team designs (#86–#100) must start their thesis with `Steals …`, and each one’s overall score must beat the previous Hybrid.
4. After merge, add one learning note in [`docs/FINDINGS.md`](FINDINGS.md).

## Learn more

- Scoring axes: [`docs/RUBRIC.md`](RUBRIC.md)
- Award patterns we steal from: [`docs/BENCHMARKS.md`](BENCHMARKS.md)
- Product goals: [`docs/PRODUCT.md`](PRODUCT.md)
- Progress log: [`docs/LOOP.md`](LOOP.md)
