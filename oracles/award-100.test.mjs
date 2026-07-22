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
    "cv.location",
    "cv.highlights",
    "cv.education",
  ]) {
    assert.ok(src.includes(needle), `AwardVariant missing ${needle}`);
  }
  assert.doesNotMatch(src, /cv\.phone/, "AwardVariant must not expose phone");
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

test("Fail-then-pass: public homepage loads selected theme dynamically", () => {
  const home = read("src/app/page.tsx");
  assert.match(home, /getPublicThemeId/);
  assert.match(home, /loadVariant/);
  assert.match(home, /force-dynamic/);
  assert.ok(fs.existsSync(path.join(root, "src", "data", "publicTheme.json")));
  assert.ok(fs.existsSync(path.join(root, "src", "app", "api", "public-theme", "route.ts")));
  const api = read("src/app/api/public-theme/route.ts");
  assert.match(api, /passwordsMatch|getAdminPassword/);
  assert.match(api, /setPublicTheme/);
  const cv = read("src/data/cv.ts");
  assert.doesNotMatch(cv, /phone\s*:/);
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

test("Fail-then-pass: every variant exposes hire surface (name, contact, experience, main)", () => {
  const files = listVariantFiles();
  for (const file of files) {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    assert.ok(src.includes("cv.name"), `${file} must show cv.name`);
    assert.ok(
      src.includes("mailto:") || src.includes("ContactRow"),
      `${file} must expose email contact`,
    );
    assert.ok(
      src.includes("ExperienceList") || src.includes("cv.experience"),
      `${file} must expose experience`,
    );
    assert.ok(src.includes("<main"), `${file} must use a main landmark`);
  }
});

test("Fail-then-pass: printable resume reachable from every design", () => {
  const contactRow = read("src/components/CvBlocks.tsx");
  assert.ok(contactRow.includes('href="/resume"'), "ContactRow must link to printable resume");
  const files = listVariantFiles();
  for (const file of files) {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    assert.ok(
      src.includes("/resume") || src.includes("ContactRow"),
      `${file} must route recruiters to printable resume`,
    );
  }
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

test("Fail-then-pass: deepened unique UIs keep rising past the 100-handcraft floor", () => {
  const files = listVariantFiles();
  const shallow = [];
  for (const file of files) {
    const lines = fs.readFileSync(path.join(variantsDir, file), "utf8").split("\n").length;
    if (lines < 115) shallow.push(`${file}(${lines})`);
  }
  // Lab-wide floor keeps rising so borderline shells cannot slip back after team gates.
  assert.equal(
    shallow.length,
    0,
    `RED: need all 100 cells ≥115 source lines, thin: ${shallow.join(", ")}`,
  );
});

test("Fail-then-pass: no generic mass-deepen template leftovers", () => {
  const files = listVariantFiles();
  const generic = files.filter((file) => {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    return /deepened award cell/i.test(src);
  });
  assert.equal(
    generic.length,
    0,
    `RED: generic template cells remain: ${generic.slice(0, 12).join(", ")}${generic.length > 12 ? "…" : ""}`,
  );
});

test("Fail-then-pass: UI smoke e2e is wired into scripts and CI", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.scripts["test:e2e"], "playwright test");
  assert.match(pkg.scripts["test:ui"] ?? "", /test:e2e/);
  const ci = read(".github/workflows/ci.yml");
  assert.match(ci, /test:e2e|playwright test/);
  assert.ok(fs.existsSync(path.join(root, "e2e", "smoke.spec.ts")));
  assert.ok(fs.existsSync(path.join(root, "playwright.config.ts")));
});

test("Fail-then-pass: package scripts and GitHub checks run oracles", () => {
  const pkg = JSON.parse(read("package.json"));
  assert.equal(pkg.scripts.test, "node --test oracles/**/*.test.mjs");
  assert.match(read(".github/workflows/ci.yml"), /npm (?:run )?test/);
});

test("Fail-then-pass: Alpha r3f-stacked cells mount real WebGL", () => {
  const { variants } = loadVariantsModule();
  const webglKit = read("src/components/webgl/AwardWebGL.tsx");
  assert.match(webglKit, /@react-three\/fiber/);
  assert.match(webglKit, /Canvas/);
  assert.match(webglKit, /useReducedMotion|reduce/);
  const r3fCells = variants.filter((v) => v.stack.includes("r3f"));
  assert.ok(r3fCells.length >= 9, `expected ≥9 r3f-stacked cells, got ${r3fCells.length}`);
  for (const cell of r3fCells) {
    const file = listVariantFiles().find((name) => Number(name.match(/^V(\d+)/)[1]) === cell.id);
    assert.ok(file, `missing file for #${cell.id}`);
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    assert.ok(
      src.includes("@/components/webgl/AwardWebGL") || src.includes("@react-three/fiber"),
      `RED: #${cell.id} ${file} claims r3f but never mounts WebGL`,
    );
    assert.match(src, /WebGLStage|Canvas/, `${file} must render a WebGL stage`);
  }
});

test("Fail-then-pass: Alpha WebGL team stays ≥110 lines of craft", () => {
  const alpha = listVariantFiles().filter((name) => {
    const id = Number(name.match(/^V(\d+)/)[1]);
    return id >= 1 && id <= 15;
  });
  assert.equal(alpha.length, 15);
  const shallow = [];
  for (const file of alpha) {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    const lines = src.split("\n").length;
    if (lines < 110) shallow.push(`${file}(${lines})`);
  }
  assert.equal(shallow.length, 0, `RED: Alpha cells under 110 lines: ${shallow.join(", ")}`);
});

test("Fail-then-pass: champion Centurion also mounts WebGL atmosphere", () => {
  const src = read("src/variants/V100OrbitfolioCenturion.tsx");
  assert.match(src, /AwardWebGL|@react-three\/fiber/);
  assert.match(src, /SceneCenturion|WebGLStage/);
});

test("Fail-then-pass: Hybrid ladder ships award motion tech (WebGL or Lenis)", () => {
  assert.ok(fs.existsSync(path.join(root, "src", "components", "SmoothScroll.tsx")));
  const smooth = read("src/components/SmoothScroll.tsx");
  assert.match(smooth, /from ["']lenis["']/);
  assert.match(smooth, /useReducedMotion/);
  const { variants } = loadVariantsModule();
  const eta = variants.filter((v) => v.id >= 86 && v.id <= 100);
  for (const cell of eta) {
    const file = listVariantFiles().find((name) => Number(name.match(/^V(\d+)/)[1]) === cell.id);
    assert.ok(file, `missing file for #${cell.id}`);
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    const hasWebGL = src.includes("AwardWebGL") || src.includes("@react-three/fiber");
    const hasLenis = src.includes("SmoothScroll") || src.includes("lenis");
    assert.ok(
      hasWebGL || hasLenis,
      `RED: Hybrid #${cell.id} must mount AwardWebGL or Lenis SmoothScroll`,
    );
  }
});

test("Fail-then-pass: Hybrid cells stay deep enough for award craft", () => {
  const etaFiles = listVariantFiles().filter((name) => {
    const id = Number(name.match(/^V(\d+)/)[1]);
    return id >= 86 && id <= 100;
  });
  assert.equal(etaFiles.length, 15);
  const shallow = etaFiles.filter((file) => {
    const lines = fs.readFileSync(path.join(variantsDir, file), "utf8").split("\n").length;
    return lines < 130;
  });
  assert.equal(
    shallow.length,
    0,
    `RED: Hybrid cells under 130 lines (too thin for award craft): ${shallow.join(", ")}`,
  );
});

test("Fail-then-pass: Gamma kinetic ships GSAP in ≥7 cells and stays ≥110 lines", () => {
  assert.ok(fs.existsSync(path.join(root, "src", "components", "useGsapReveal.ts")));
  const hook = read("src/components/useGsapReveal.ts");
  assert.match(hook, /from ["']gsap["']/);
  assert.match(hook, /ScrollTrigger/);
  const gamma = listVariantFiles().filter((name) => {
    const id = Number(name.match(/^V(\d+)/)[1]);
    return id >= 29 && id <= 42;
  });
  assert.equal(gamma.length, 14);
  const shallow = [];
  const withGsap = [];
  for (const file of gamma) {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    const lines = src.split("\n").length;
    if (lines < 110) shallow.push(`${file}(${lines})`);
    if (src.includes("useGsapReveal") || src.includes('from "gsap"') || src.includes("from 'gsap'")) {
      withGsap.push(file);
    }
  }
  assert.equal(shallow.length, 0, `RED: Gamma cells under 110 lines: ${shallow.join(", ")}`);
  assert.ok(
    withGsap.length >= 7,
    `RED: need ≥7 Gamma cells using GSAP, got ${withGsap.length}: ${withGsap.join(", ") || "none"}`,
  );
});

test("Fail-then-pass: Epsilon hire cells stay deep, expose a 10-second proof strip, and ship award motion on ≥5 cells", () => {
  const epsilon = listVariantFiles().filter((name) => {
    const id = Number(name.match(/^V(\d+)/)[1]);
    return id >= 57 && id <= 70;
  });
  assert.equal(epsilon.length, 14);
  const shallow = [];
  const missingProof = [];
  let withMotion = 0;
  for (const file of epsilon) {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    const lines = src.split("\n").length;
    if (lines < 110) shallow.push(`${file}(${lines})`);
    const hasProof =
      /who\s*\/\s*what\s*\/\s*proof/i.test(src) ||
      /data-hire-proof/.test(src) ||
      /ten.?second/i.test(src) ||
      /10.?second/i.test(src) ||
      /recruiter scan/i.test(src);
    if (!hasProof) missingProof.push(file);
    if (
      src.includes("AwardWebGL") ||
      src.includes("SmoothScroll") ||
      src.includes("useGsapReveal") ||
      src.includes("@react-three/fiber")
    ) {
      withMotion += 1;
    }
  }
  assert.equal(
    shallow.length,
    0,
    `RED: Epsilon cells under 110 lines: ${shallow.join(", ")}`,
  );
  assert.equal(
    missingProof.length,
    0,
    `RED: Epsilon cells missing 10-second proof strip: ${missingProof.join(", ")}`,
  );
  assert.ok(
    withMotion >= 5,
    `RED: need ≥5 Epsilon hire cells with WebGL/Lenis/GSAP, got ${withMotion}`,
  );
});

test("Fail-then-pass: Beta editorial ships Lenis on ≥10 cells and stays ≥110 lines", () => {
  const beta = listVariantFiles().filter((name) => {
    const id = Number(name.match(/^V(\d+)/)[1]);
    return id >= 16 && id <= 28;
  });
  assert.equal(beta.length, 13);
  const shallow = [];
  let withLenis = 0;
  for (const file of beta) {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    const lines = src.split("\n").length;
    if (lines < 110) shallow.push(`${file}(${lines})`);
    if (src.includes("SmoothScroll") || src.includes("lenis")) withLenis += 1;
  }
  assert.equal(shallow.length, 0, `RED: Beta cells under 110 lines: ${shallow.join(", ")}`);
  assert.ok(
    withLenis >= 10,
    `RED: need ≥10 Beta editorial cells with Lenis SmoothScroll, got ${withLenis}`,
  );
});

test("Fail-then-pass: Zeta experimental stays deep and ships award motion on ≥8 cells", () => {
  const zeta = listVariantFiles().filter((name) => {
    const id = Number(name.match(/^V(\d+)/)[1]);
    return id >= 71 && id <= 85;
  });
  assert.equal(zeta.length, 15);
  const shallow = [];
  let withMotion = 0;
  for (const file of zeta) {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    const lines = src.split("\n").length;
    if (lines < 110) shallow.push(`${file}(${lines})`);
    if (
      src.includes("AwardWebGL") ||
      src.includes("SmoothScroll") ||
      src.includes("useGsapReveal") ||
      src.includes("@react-three/fiber")
    ) {
      withMotion += 1;
    }
  }
  assert.equal(shallow.length, 0, `RED: Zeta cells under 110 lines: ${shallow.join(", ")}`);
  assert.ok(
    withMotion >= 8,
    `RED: need ≥8 Zeta cells with WebGL/Lenis/GSAP, got ${withMotion}`,
  );
});

test("Fail-then-pass: Delta systems stay deep and ship award motion on ≥8 cells", () => {
  const delta = listVariantFiles().filter((name) => {
    const id = Number(name.match(/^V(\d+)/)[1]);
    return id >= 43 && id <= 56;
  });
  assert.equal(delta.length, 14);
  const shallow = [];
  let withMotion = 0;
  for (const file of delta) {
    const src = fs.readFileSync(path.join(variantsDir, file), "utf8");
    const lines = src.split("\n").length;
    if (lines < 110) shallow.push(`${file}(${lines})`);
    if (
      src.includes("AwardWebGL") ||
      src.includes("SmoothScroll") ||
      src.includes("useGsapReveal") ||
      src.includes("@react-three/fiber")
    ) {
      withMotion += 1;
    }
  }
  assert.equal(shallow.length, 0, `RED: Delta cells under 110 lines: ${shallow.join(", ")}`);
  assert.ok(
    withMotion >= 8,
    `RED: need ≥8 Delta systems cells with WebGL/Lenis/GSAP, got ${withMotion}`,
  );
});
