/**
 * Handcrafts remaining AwardVariant shells (batch 8) — gate 100.
 * node scripts/handcraft-batch-8.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");

function write(file, title, body, motion = false) {
  const reduceLine = motion
    ? "  const reduce = useReducedMotion() ?? false;"
    : "  const _reduce = useReducedMotion() ?? false;";
  const imports = motion
    ? `import { motion, useReducedMotion } from "framer-motion";`
    : `import { useReducedMotion } from "framer-motion";`;
  fs.writeFileSync(
    path.join(dir, `${file}.tsx`),
    `"use client";

${imports}
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** ${title} — handcrafted award cell */
export function Variant() {
${reduceLine}
${body}
}
`,
  );
  console.log("wrote", file);
}

const archive = `      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="opacity-80" /></section>`;
const archiveLight = `      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>`;

write("V80PaperFoldTerminal", "Paper Fold Terminal", `  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-slate-500">fold://terminal</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold" style={{ transform: "perspective(600px) rotateX(8deg)" }}>{cv.name}</h1>
        <p className="mt-3 text-slate-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
      </section>
${archiveLight}
    </main>
  );`);

write("V82TelescopeMonograph", "Telescope Monograph", `  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <section className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 pt-28 text-center">
        <div className="relative aspect-square w-[min(80vw,380px)] overflow-hidden rounded-full border border-white/20 shadow-[0_0_80px_rgba(125,211,252,0.25)]">
          <div className="absolute inset-[14%] rounded-full border border-white/15" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10">
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">{cv.name}</h1>
            <p className="mt-3 text-sm text-sky-200/80">{cv.title}</p>
          </div>
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
${archive}
    </main>
  );`);

write("V83ChromedJourney", "Chromed Journey", `  return (
    <main className="min-h-screen bg-[#111113] text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">Chromed journey</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold" style={{ backgroundImage: "linear-gradient(120deg,#e2e8f0,#94a3b8,#f8fafc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{cv.name}</h1>
        <p className="mt-3 text-zinc-300">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">{cv.summary}</p>
        <svg viewBox="0 0 640 120" className="mt-10 w-full" aria-hidden><path d="M20 80 C120 20 220 100 320 50 S520 20 620 70" fill="none" stroke="#a1a1aa" strokeWidth="3" /><circle cx="20" cy="80" r="6" fill="#e4e4e7" /><circle cx="320" cy="50" r="6" fill="#e4e4e7" /><circle cx="620" cy="70" r="6" fill="#e4e4e7" /></svg>
      </section>
${archive}
    </main>
  );`);

write("V84ExperimentalCoverLab", "Experimental Cover Lab", `  return (
    <main className="min-h-screen bg-[#1c1917] text-orange-50">
      <section className="px-6 pb-8 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold">{cv.name}</h1>
        <p className="mt-3 text-orange-100/70">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
      </section>
      <div className="flex gap-4 overflow-x-auto px-6 pb-12">{cv.experience.map((job, i) => <article key={job.company} className="w-[240px] shrink-0 rounded-2xl border border-orange-200/20 p-5" style={{ background: i % 2 ? "#292524" : "#44403c" }}><p className="text-[10px] uppercase text-orange-200/50">Cover 0{i + 1}</p><h2 className="mt-2 text-xl font-semibold">{job.company}</h2><p className="mt-2 text-xs text-white/50">{job.period}</p></article>)}</div>
${archive}
    </main>
  );`);

write("V85SignalNoiseFinale", "Signal Noise Finale", `  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-zinc-500">signal / noise · finale</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-zinc-300">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="border border-white/10 p-4"><p className="text-2xl font-bold">{h.value}</p><p className="text-[10px] uppercase text-white/40">{h.label}</p></div>)}</div>
      </section>
${archive}
    </main>
  );`);

write(
  "V87HybridMuseumMetrics",
  "Hybrid Museum Metrics",
  `  return (
    <main className="min-h-screen bg-[#07111c] text-sky-50">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Steals alcove storytelling + outcome hierarchy</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-sky-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-10 grid gap-3 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="rounded-2xl border border-sky-400/25 bg-sky-950/40 p-4"><p className="text-2xl font-bold text-sky-200">{h.value}</p><p className="text-[10px] uppercase text-sky-200/50">{h.label}</p></div>)}</div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-12 md:grid-cols-2">{cv.experience.map((job, i) => <motion.article key={job.company} initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-sky-400/20 bg-sky-950/30 p-6"><p className="text-xs text-sky-300/60">Alcove {i + 1} · {job.period}</p><h2 className="mt-2 text-xl font-semibold">{job.company}</h2><p className="text-sm text-white/70">{job.role}</p><ul className="mt-4 space-y-2 text-sm text-white/55">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul></motion.article>)}</section>
      <section className="mx-auto max-w-5xl space-y-12 px-6 pb-28"><SkillsCloud /><ProjectLinks /><ContactRow className="text-sky-200/70" /></section>
    </main>
  );`,
  true,
);

write("V88HybridEditorialOrbit", "Hybrid Editorial Orbit", `  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <header className="border-b border-stone-900 px-6 pb-8 pt-28 text-center">
        <p className="text-[10px] uppercase tracking-[0.45em]">Steals editorial authority + spatial focus</p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-7xl">{cv.name}</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.2em]">{cv.title}</p>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-stone-600">{cv.summary}</p>
      </header>
${archiveLight}
    </main>
  );`);

write("V89HybridClinicAurora", "Hybrid Clinic Aurora", `  return (
    <main className="min-h-screen bg-[#f0fdfa] text-teal-950">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-teal-700">Steals healthcare trust + atmospheric restraint</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-teal-800/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-teal-900/70">{cv.summary}</p>
        <a href={\`mailto:\${cv.email}\`} className="mt-8 inline-flex rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white">Book a conversation</a>
      </section>
${archiveLight}
    </main>
  );`);

write(
  "V91HybridSwissKinetic",
  "Hybrid Swiss Kinetic",
  `  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-10 pt-28 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="text-[10px] uppercase tracking-[0.3em]">Steals scan speed + oversized motion type</p>
          <motion.h1 initial={reduce ? false : { y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-4 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-8xl">{cv.name}</motion.h1>
          <p className="mt-6 text-lg">{cv.title}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-black/70">{cv.summary}</p>
        </div>
        <aside className="space-y-3 md:col-span-4">{cv.highlights.map((h) => <div key={h.label} className="border border-black p-4"><p className="text-2xl font-bold">{h.value}</p><p className="text-[10px] uppercase">{h.label}</p></div>)}</aside>
      </section>
${archiveLight}
    </main>
  );`,
  true,
);

write("V92HybridJourneyProfile", "Hybrid Journey Profile", `  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Steals geographic narrative + recruiter clarity</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-slate-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
        <ol className="mt-8 flex flex-wrap gap-2">{["Kyiv", "Geneva", "Italy", "SF", "Vancouver"].map((s, i) => <li key={s} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm"><span className="mr-1 text-slate-400">{i + 1}</span>{s}</li>)}</ol>
      </section>
${archiveLight}
    </main>
  );`);

write("V93HybridHoloProof", "Hybrid Holo Proof", `  return (
    <main className="min-h-screen bg-[#030b12] text-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.08) 3px)" }} aria-hidden />
      <section className="relative mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] text-cyan-400">Steals scanline atmosphere + outcome-first evidence</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl" style={{ textShadow: "0 0 24px rgba(34,211,238,0.45)" }}>{cv.name}</h1>
        <p className="mt-3 text-cyan-200/70">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm text-cyan-50/60">{cv.summary}</p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="border border-cyan-400/25 bg-cyan-950/30 p-3"><p className="text-xl font-bold text-cyan-200">{h.value}</p><p className="text-[10px] uppercase text-cyan-200/50">{h.label}</p></div>)}</div>
      </section>
      <section className="relative mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-cyan-200" /></section>
    </main>
  );`);

write("V94HybridCoverChapters", "Hybrid Cover Chapters", `  return (
    <main className="min-h-screen bg-[#0c0a09] text-amber-50">
      <section className="px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/60">Steals object-like covers + viewport storytelling</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold">{cv.name}</h1>
        <p className="mt-3 text-amber-100/70">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
      </section>
      <div className="snap-x snap-mandatory flex gap-5 overflow-x-auto px-6 pb-10">{cv.experience.map((job) => <article key={job.company} className="w-[min(85vw,380px)] shrink-0 snap-center rounded-3xl border border-amber-200/20 bg-amber-950/20 p-6"><p className="text-xs text-amber-200/50">{job.period}</p><h2 className="mt-2 text-2xl font-semibold">{job.company}</h2><p className="mt-1 text-sm text-white/70">{job.role}</p><ul className="mt-4 space-y-2 text-sm text-white/55">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul></article>)}</div>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><SkillsCloud /><ProjectLinks /><ContactRow className="text-amber-100/70" /></section>
    </main>
  );`);

write("V96HybridTelescopeCases", "Hybrid Telescope Cases", `  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28 text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Steals focus control + applied-AI case depth</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-sky-100/75">{cv.title}</p>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-8 px-6 pb-16">{cv.experience.map((job, i) => <article key={job.company} className="rounded-[2rem] border border-white/10 bg-white/5 p-8"><p className="text-xs uppercase tracking-wider text-sky-300/60">Case {String(i + 1).padStart(2, "0")} · {job.period}</p><h2 className="mt-2 text-2xl font-semibold">{job.role}</h2><p className="text-sm text-white/50">{job.company} · {job.place}</p><ul className="mt-4 space-y-2 text-sm text-white/65">{job.bullets.map((b) => <li key={b.slice(0, 28)}>{b}</li>)}</ul></article>)}</section>
      <section className="mx-auto max-w-4xl space-y-12 px-6 pb-28"><SkillsCloud /><ProjectLinks /><ContactRow className="text-sky-200/70" /></section>
    </main>
  );`);

write(
  "V97HybridLiquidBrief",
  "Hybrid Liquid Brief",
  `  return (
    <main className="min-h-screen bg-[#111113] text-zinc-100">
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 pt-24">
        <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">Steals liquid headline craft + hiring-manager brevity</p>
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mt-4 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-7xl" style={{ backgroundImage: "linear-gradient(120deg,#e2e8f0,#94a3b8,#f8fafc,#64748b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{cv.name}</motion.h1>
        <p className="mt-6 text-xl text-zinc-300">{cv.title}</p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">{cv.summary}</p>
        <a href={\`mailto:\${cv.email}\`} className="mt-8 inline-flex w-fit rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-black">Talk</a>
      </section>
${archive}
    </main>
  );`,
  true,
);

write("V98HybridPlanetPress", "Hybrid Planet Press", `  return (
    <main className="min-h-screen bg-[#04060f] text-slate-100">
      <section className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 px-6 pb-12 pt-28 md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex justify-center"><div aria-hidden className="aspect-square w-[min(60vw,280px)] rounded-full border border-cyan-400/30" style={{ background: "radial-gradient(circle at 35% 30%, #67e8f9, #0e7490 55%, #082f49)" }} /></div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Steals spatial stagecraft + press hierarchy</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg text-cyan-100/80">{cv.title}</p>
          <p className="mt-6 text-sm leading-7 text-white/55">{cv.summary}</p>
          <ContactRow className="mt-8 text-cyan-100/70" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /></section>
    </main>
  );`);

console.log("done", 15);
