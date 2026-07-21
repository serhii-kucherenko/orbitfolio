/**
 * Mass-deepen thin award cells → ≥50 deepened (40+ lines each).
 * node scripts/mass-deepen-50.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "src", "variants");

const PALETTES = [
  { bg: "#0b1220", fg: "white", accent: "#67e8f9", soft: "cyan", tone: "dark" },
  { bg: "#faf7f2", fg: "#1c1917", accent: "#0f766e", soft: "teal", tone: "light" },
  { bg: "#111827", fg: "#f9fafb", accent: "#fbbf24", soft: "amber", tone: "dark" },
  { bg: "#ecfeff", fg: "#164e63", accent: "#0891b2", soft: "sky", tone: "light" },
  { bg: "#030712", fg: "#e0f2fe", accent: "#38bdf8", soft: "sky", tone: "dark" },
  { bg: "#fef3c7", fg: "#78350f", accent: "#b45309", soft: "amber", tone: "light" },
  { bg: "#0f172a", fg: "#e2e8f0", accent: "#a78bfa", soft: "violet", tone: "dark" },
  { bg: "#f0fdf4", fg: "#14532d", accent: "#15803d", soft: "emerald", tone: "light" },
  { bg: "#1c1917", fg: "#fafaf9", accent: "#fb923c", soft: "orange", tone: "dark" },
  { bg: "#f8fafc", fg: "#0f172a", accent: "#334155", soft: "slate", tone: "light" },
];

const LAYOUTS = ["rail", "split", "stack", "frame", "magazine", "console"];

function shell(title, body) {
  return `"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** ${title} — deepened award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
${body}
}
`;
}

function bodyFor(layout, p, title) {
  const expTone = p.tone === "dark" ? "dark" : "light";
  const skillsTone = p.tone === "dark" ? "" : ' tone="light"';
  const projectsTone = p.tone === "dark" ? "" : ' tone="light"';
  const contactCls = p.tone === "dark" ? "text-white/70" : "";
  const contactProp = contactCls ? ` className="${contactCls}"` : "";
  const contactPropMt = contactCls ? ` className="mt-6 ${contactCls}"` : ' className="mt-6"';

  if (layout === "rail") {
    return `  return (
    <main className="min-h-screen" style={{ background: "${p.bg}", color: "${p.fg}" }}>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-12 pt-28 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] uppercase tracking-[0.35em] opacity-60">${title}</motion.p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg opacity-80">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 opacity-70">{cv.summary}</p>
          <a href={\`mailto:\${cv.email}\`} className="mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ background: "${p.accent}", color: "${p.tone === "dark" ? "#041016" : "#fff}" }}>Hire conversation</a>
          <ContactRow${contactPropMt} />
        </div>
        <div className="grid grid-cols-2 gap-3 content-start">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border p-4" style={{ borderColor: "${p.accent}55" }}>
              <p className="text-3xl font-bold" style={{ color: "${p.accent}" }}>{h.value}</p>
              <p className="mt-1 text-xs opacity-60">{h.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl space-y-16 px-6 pb-28">
        <div><h2 className="mb-8 text-3xl font-bold">Experience</h2><ExperienceList tone="${expTone}" /></div>
        <div className="grid gap-12 md:grid-cols-2">
          <div><h2 className="mb-6 text-2xl font-bold">Skills</h2><SkillsCloud${skillsTone} /></div>
          <div><h2 className="mb-6 text-2xl font-bold">Projects</h2><ProjectLinks${projectsTone} /><p className="mt-10 text-sm opacity-55">{cv.education.degree} · {cv.education.school}</p></div>
        </div>
      </section>
    </main>
  );`;
  }

  if (layout === "split") {
    return `  return (
    <main className="min-h-screen md:grid md:grid-cols-[280px_1fr]" style={{ background: "${p.bg}", color: "${p.fg}" }}>
      <aside className="border-r p-8 md:sticky md:top-0 md:h-screen" style={{ borderColor: "${p.accent}33", background: "${p.tone === "dark" ? "#00000040" : "#ffffff80"}" }}>
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">${title}</p>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold">{cv.name}</h1>
        <p className="mt-2 text-sm opacity-70">{cv.title}</p>
        <a href={\`mailto:\${cv.email}\`} className="mt-8 inline-block rounded-full px-4 py-2 text-xs font-bold" style={{ background: "${p.accent}", color: "${p.tone === "dark" ? "#041016" : "#fff}" }}>Email</a>
        <ContactRow${contactPropMt} />
        <p className="mt-10 text-xs opacity-50">{cv.location}</p>
      </aside>
      <div className="px-6 py-16 md:px-12">
        <p className="max-w-2xl text-sm leading-7 opacity-70">{cv.summary}</p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-xl border p-4" style={{ borderColor: "${p.accent}44" }}>
              <p className="text-2xl font-bold">{h.value}</p>
              <p className="text-[10px] uppercase opacity-50">{h.label}</p>
            </div>
          ))}
        </div>
        <section className="mt-16"><h2 className="mb-8 text-3xl font-bold">Career</h2><ExperienceList tone="${expTone}" /></section>
        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div><h2 className="mb-6 text-2xl font-bold">Toolkit</h2><SkillsCloud${skillsTone} /></div>
          <div><h2 className="mb-6 text-2xl font-bold">Shipped</h2><ProjectLinks${projectsTone} /><p className="mt-8 text-sm opacity-55">{cv.education.degree} · {cv.education.school}</p></div>
        </section>
      </div>
    </main>
  );`;
  }

  if (layout === "stack") {
    return `  return (
    <main className="min-h-screen" style={{ background: "${p.bg}", color: "${p.fg}" }}>
      <header className="mx-auto max-w-4xl px-6 pb-10 pt-28">
        <motion.h1 initial={reduce ? false : { y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-7xl">{cv.name}</motion.h1>
        <p className="mt-4 text-xl opacity-80">{cv.title}</p>
        <p className="mt-6 text-sm leading-7 opacity-70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={\`mailto:\${cv.email}\`} className="rounded-full px-5 py-2.5 text-sm font-semibold" style={{ background: "${p.accent}", color: "${p.tone === "dark" ? "#041016" : "#fff}" }}>Start hiring thread</a>
          <ContactRow${contactProp} />
        </div>
      </header>
      <section className="border-y px-6 py-10" style={{ borderColor: "${p.accent}33", background: "${p.tone === "dark" ? "#ffffff08" : "#00000008"}" }}>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label}><p className="text-3xl font-bold" style={{ color: "${p.accent}" }}>{h.value}</p><p className="text-xs opacity-55">{h.label}</p></div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-16 px-6 py-20">
        <div><h2 className="mb-8 text-3xl font-bold">${title} · roles</h2><ExperienceList tone="${expTone}" /></div>
        <div className="grid gap-12 md:grid-cols-2">
          <div><h2 className="mb-6 text-2xl font-bold">Skills</h2><SkillsCloud${skillsTone} /></div>
          <div><h2 className="mb-6 text-2xl font-bold">Projects</h2><ProjectLinks${projectsTone} /><p className="mt-10 text-sm opacity-55">{cv.education.degree} · {cv.education.school} · {cv.location}</p></div>
        </div>
      </section>
    </main>
  );`;
  }

  if (layout === "frame") {
    return `  return (
    <main className="min-h-screen p-3 md:p-8" style={{ background: "${p.bg}", color: "${p.fg}" }}>
      <div className="mx-auto max-w-5xl rounded-[2rem] border p-6 md:p-12" style={{ borderColor: "${p.accent}66", background: "${p.tone === "dark" ? "#00000055" : "#ffffffcc"}" }}>
        <p className="text-[10px] uppercase tracking-[0.4em] opacity-55">${title}</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 opacity-75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 opacity-70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={\`mailto:\${cv.email}\`} className="rounded-full border px-5 py-2.5 text-sm font-semibold" style={{ borderColor: "${p.accent}", color: "${p.accent}" }}>Book a chat</a>
          <ContactRow${contactProp} />
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border p-4" style={{ borderColor: "${p.accent}40" }}>
              <p className="text-2xl font-bold">{h.value}</p>
              <p className="text-xs opacity-55">{h.label}</p>
            </div>
          ))}
        </div>
        <section className="mt-16"><h2 className="mb-8 text-3xl font-bold">Evidence</h2><ExperienceList tone="${expTone}" /></section>
        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div><h2 className="mb-6 text-2xl font-bold">Systems</h2><SkillsCloud${skillsTone} /></div>
          <div><h2 className="mb-6 text-2xl font-bold">Work</h2><ProjectLinks${projectsTone} /><p className="mt-8 text-sm opacity-55">{cv.education.degree} · {cv.education.school}</p></div>
        </section>
      </div>
    </main>
  );`;
  }

  if (layout === "magazine") {
    return `  return (
    <main className="min-h-screen" style={{ background: "${p.bg}", color: "${p.fg}" }}>
      <header className="border-b px-6 py-20 md:px-12" style={{ borderColor: "${p.accent}44" }}>
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] opacity-55">${title} issue</p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-6xl font-black leading-[0.9] sm:text-8xl">{cv.name}</h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <p className="text-sm leading-8 opacity-75">{cv.summary}</p>
            <div>
              <p className="text-lg font-semibold" style={{ color: "${p.accent}" }}>{cv.title}</p>
              <a href={\`mailto:\${cv.email}\`} className="mt-4 inline-block text-sm underline">Write the editor</a>
              <ContactRow${contactProp} className="mt-4" />
            </div>
          </div>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-12 md:grid-cols-4 md:px-12">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border-t-4 pt-4" style={{ borderColor: "${p.accent}" }}>
            <p className="text-3xl font-black">{h.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wider opacity-55">{h.label}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-12">
        <h2 className="mb-10 text-4xl font-black">Feature</h2>
        <ExperienceList tone="${expTone}" />
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div><h2 className="mb-6 text-2xl font-bold">Index</h2><SkillsCloud${skillsTone} /></div>
          <div><h2 className="mb-6 text-2xl font-bold">Links</h2><ProjectLinks${projectsTone} /><p className="mt-10 text-sm opacity-55">{cv.education.degree} · {cv.education.school}</p></div>
        </div>
      </section>
    </main>
  );`;
  }

  // console
  return `  return (
    <main className="min-h-screen font-[family-name:var(--font-mono)]" style={{ background: "${p.bg}", color: "${p.fg}" }}>
      <div className="mx-auto max-w-5xl px-6 py-24">
        <pre className="text-xs opacity-50">{"// ${title}\\nconst engineer = await resolveProfile();"}</pre>
        <h1 className="mt-6 text-4xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 opacity-75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 opacity-65">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={\`mailto:\${cv.email}\`} className="rounded border px-4 py-2 text-xs uppercase" style={{ borderColor: "${p.accent}", color: "${p.accent}" }}>run hire()</a>
          <ContactRow${contactProp} />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-dashed p-3" style={{ borderColor: "${p.accent}55" }}>
              <p className="text-xl font-bold">{h.value}</p>
              <p className="text-[10px] uppercase opacity-50">{h.label}</p>
            </div>
          ))}
        </div>
        <section className="mt-16 border-t border-dashed pt-10" style={{ borderColor: "${p.accent}44" }}>
          <h2 className="mb-8 text-2xl">experience.log</h2>
          <ExperienceList tone="${expTone}" />
        </section>
        <section className="mt-16 grid gap-12 border-t border-dashed pt-10 md:grid-cols-2" style={{ borderColor: "${p.accent}44" }}>
          <div><h2 className="mb-6 text-xl">skills.json</h2><SkillsCloud${skillsTone} /></div>
          <div><h2 className="mb-6 text-xl">projects.md</h2><ProjectLinks${projectsTone} /><p className="mt-8 text-xs opacity-55">{cv.education.degree} · {cv.education.school} · {cv.location}</p></div>
        </section>
      </div>
    </main>
  );`;
}

const thin = fs
  .readdirSync(dir)
  .filter((f) => /^V\d+.+\.tsx$/.test(f))
  .map((f) => ({
    file: f,
    id: Number(f.match(/^V(\d+)/)[1]),
    lines: fs.readFileSync(path.join(dir, f), "utf8").split("\n").length,
    title: f.replace(/^V\d+/, "").replace(/\.tsx$/, "").replace(/([A-Z])/g, " $1").trim(),
  }))
  .filter((x) => x.lines < 40)
  .sort((a, b) => a.lines - b.lines || a.id - b.id)
  .slice(0, 40);

for (let i = 0; i < thin.length; i++) {
  const item = thin[i];
  const layout = LAYOUTS[i % LAYOUTS.length];
  const palette = PALETTES[i % PALETTES.length];
  const src = shell(item.title, bodyFor(layout, palette, item.title));
  fs.writeFileSync(path.join(dir, item.file), src);
  console.log("deepened", item.file, "→", src.split("\n").length, "lines", layout, palette.soft);
}

const deep = fs
  .readdirSync(dir)
  .filter((f) => /^V\d+.+\.tsx$/.test(f))
  .filter((f) => fs.readFileSync(path.join(dir, f), "utf8").split("\n").length >= 40).length;
console.log("deepened count now", deep);
