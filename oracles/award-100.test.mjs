/**
 * Fail-then-pass checks for the award-100 portfolio lab.
 * Run: node --test oracles/award-100.test.mjs
 *
 * Contract: catalog integrity, resume content, motion safety, team ranges,
 * Hybrid learning ladder, champion sync, structural diversity.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const variantsDir = path.join(root, "src", "variants");

const TEAM_RANGES = [
  ["Alpha WebGL", 1, 15],
  ["Beta Editorial", 16, 28],
  ["Gamma Kinetic", 29, 42],
  ["Delta Systems", 43, 56],
  ["Epsilon Hire", 57, 70],
  ["Zeta Experimental", 71, 85],
  ["Eta Hybrid", 86, 100],
];

function listVariantFiles() {
  return fs
    .readdirSync(variantsDir)
    .filter((name) => /^V\d+.+\.tsx$/.test(name))
    .sort((a, b) => Number(a.match(/^V(\d+)/)[1]) - Number(b.match(/^V(\d+)/)[1]));
}

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function loadVariantsModule() {
  const src = read("src/data/variants.ts");
  const declaration = "export const variants: VariantMeta[] = ";
  const start = src.indexOf(`${declaration}[`);
  assert.ok(start >= 0, "variants array export missing");
  const bracket = src.indexOf("[", start + declaration.length);
  let depth = 0;
  let end = -1;
  for (let i = bracket; i < src.length; i++) {
    if (src[i] === "[") depth += 1;
    else if (src[i] === "]") {
      depth -= 1;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  assert.ok(end > bracket, "could not find variants array end");
  const variants = JSON.parse(src.slice(bracket, end + 1).replace(/,\s*]$/, "]"));
  const countMatch = src.match(/export const VARIANT_COUNT = (\d+)/);
  assert.ok(countMatch, "VARIANT_COUNT missing");
  const VARIANT_COUNT = Number(countMatch[1]);

  function composite(scores) {
    return (
      scores.coolness * 0.3 +
      scores.comprehensiveness * 0.2 +
      scores.uniqueness * 0.2 +
      scores.motion * 0.15 +
      scores.hireability * 0.15
    );
  }

  function getChampion() {
    return [...variants]
      .filter((v) => v.scores)
      .sort((a, b) => {
        const d = composite(b.scores) - composite(a.scores);
        if (d !== 0) return d;
        const c = b.scores.coolness - a.scores.coolness;
        if (c !== 0) return c;
        return b.scores.hireability - a.scores.hireability;
      })[0];
  }

  return { variants, VARIANT_COUNT, composite, getChampion };
}

test("Fail-then-pass: catalog has exactly 100 scored cells", () => {
  const { variants, VARIANT_COUNT } = loadVariantsModule();
  assert.equal(VARIANT_COUNT, 100);
  assert.equal(variants.length, 100);
  assert.deepEqual(
    variants.map((v) => v.id),
    Array.from({ length: 100 }, (_, i) => i + 1),
  );
  for (const v of variants) {
    assert.ok(v.scores, `missing scores for #${v.id}`);
    assert.ok(v.team && v.thesis && v.slug && v.name);
    assert.ok(Array.isArray(v.stack) && v.stack.length > 0);
    for (const axis of ["coolness", "comprehensiveness", "uniqueness", "motion", "hireability"]) {
      assert.ok(v.scores[axis] >= 0 && v.scores[axis] <= 10, `${v.id}.${axis} out of range`);
    }
    assert.ok(v.scores.hireability >= 7, `#${v.id} hireability floor`);
    assert.ok(v.scores.comprehensiveness >= 8, `#${v.id} comprehensiveness floor`);
  }
});

test("Fail-then-pass: team ownership ranges match Method Lab bench", () => {
  const { variants } = loadVariantsModule();
  for (const [team, from, to] of TEAM_RANGES) {
    for (let id = from; id <= to; id++) {
      assert.equal(variants.find((x) => x.id === id)?.team, team, `#${id} expected ${team}`);
    }
  }
});

test("Fail-then-pass: every variant file exists, exports Variant, reduced-motion safe", () => {
  const files = listVariantFiles();
  assert.equal(files.length, 100, `expected 100 variant files, got ${files.length}`);
  for (const file of files) {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    assert.match(src, /export function Variant\s*\(/, `${file} must export Variant`);
    assert.doesNotMatch(src, /export default/, `${file} must not use export default`);
    assert.match(src, /useReducedMotion/, `${file} must respect reduced motion`);
    assert.match(src, /from ["']@\/data\/cv["']/, `${file} must import cv`);
  }
});

test("Fail-then-pass: loadVariant switch covers 1..100", () => {
  const src = read("src/variants/loadVariant.ts");
  for (let id = 1; id <= 100; id++) {
    assert.match(src, new RegExp(`case ${id}:`), `loadVariant missing case ${id}`);
  }
  assert.match(src, /default:\s*\n\s*throw new Error/);
});

test("Fail-then-pass: AwardVariant resume surface is complete", () => {
  const src = read("src/components/AwardVariant.tsx");
  for (const needle of [
    "cv.name",
    "cv.title",
    "cv.summary",
    "cv.experience",
    "cv.skills",
    "cv.projects",
    "cv.email",
    "cv.linkedin",
    "cv.github",
    "cv.phone",
    "cv.location",
    "cv.highlights",
    "cv.education",
  ]) {
    assert.ok(src.includes(needle), `AwardVariant missing ${needle}`);
  }
});

test("Fail-then-pass: Hybrid learning ladder rises in composite", () => {
  const { variants, composite } = loadVariantsModule();
  const eta = variants.filter((v) => v.id >= 86);
  assert.equal(eta.length, 15);
  for (let i = 1; i < eta.length; i++) {
    const prev = composite(eta[i - 1].scores);
    const next = composite(eta[i].scores);
    assert.ok(next > prev, `Eta #${eta[i].id} must beat #${eta[i - 1].id}`);
  }
  for (const v of eta) {
    assert.match(v.thesis, /Steals /i, `Eta #${v.id} thesis must cite stolen lessons`);
  }
});

test("Fail-then-pass: champion route matches getChampion()", () => {
  const { getChampion } = loadVariantsModule();
  const champion = getChampion();
  const home = read("src/app/page.tsx");
  const slugPascal = champion.slug
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
  const expected = `V${champion.id}${slugPascal}`;
  assert.ok(
    home.includes(expected) || home.includes(`V${champion.id}`),
    `page.tsx must import champion ${expected}`,
  );
});

test("Fail-then-pass: test route generates 100 static params and bounds", () => {
  const src = read("src/app/test/[n]/page.tsx");
  assert.match(src, /VARIANT_COUNT/);
  assert.match(src, /id > VARIANT_COUNT|id > 100/);
});

test("Fail-then-pass: structural diversity — not a monoculture of identical layouts", () => {
  const files = listVariantFiles();
  const layouts = new Set();
  let handcrafted = 0;
  for (const file of files) {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    const layoutMatch = src.match(/"layout"\s*:\s*"([^"]+)"/);
    if (layoutMatch) layouts.add(layoutMatch[1]);
    if (!src.includes("AwardVariant")) handcrafted += 1;
  }
  // Once every cell is handcrafted, AwardVariant layout diversity is N/A.
  if (handcrafted < 100) {
    assert.ok(
      layouts.size >= 8,
      `need ≥8 distinct AwardVariant layouts among remaining shells, got ${layouts.size}`,
    );
  }
  assert.ok(
    handcrafted >= 100,
    `RED: need ≥100 handcrafted (non-AwardVariant) cells for award diversity, got ${handcrafted}`,
  );
});

test("Fail-then-pass: shared AwardVariant shell is fully retired", () => {
  const files = listVariantFiles();
  const shellUsers = files.filter((file) => {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    return src.includes("AwardVariant");
  });
  assert.equal(shellUsers.length, 0, `expected 0 shared shells, found: ${shellUsers.join(", ")}`);
});

test("Fail-then-pass: no banned AI-cliché palettes in AwardVariant light mode", () => {
  const src = read("src/components/AwardVariant.tsx");
  assert.doesNotMatch(src, /#f4f1ea/i);
  assert.doesNotMatch(src, /#c2410[cf]/i);
  assert.doesNotMatch(src, /terracotta/i);
});

test("Fail-then-pass: package scripts and GitHub checks run oracles", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.scripts.test, "node --test oracles/**/*.test.mjs");
  assert.match(read(".github/workflows/ci.yml"), /npm (?:run )?test/);
});
