/**
 * Handcrafts 10 more non-AwardVariant cells (batch 6) — gate 75.
 * node scripts/handcraft-batch-6.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");

function write(file, title, body, useReduce = true) {
  const reduceLine = useReduce
    ? "  const reduce = useReducedMotion() ?? false;"
    : "  const _reduce = useReducedMotion() ?? false;";
  fs.writeFileSync(
    path.join(dir, `${file}.tsx`),
    `"use client";

import { motion, useReducedMotion } from "framer-motion";
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

write("V49HolographicRecord", "Holographic Record", `  return (
    <main className="min-h-screen bg-[#030b12] text-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.08) 3px)" }} aria-hidden />
      <section className="relative mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] text-cyan-400">HOLO // RECORD</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl" style={{ textShadow: "0 0 24px rgba(34,211,238,0.45)" }}>{cv.name}</h1>
        <p className="mt-3 text-cyan-200/70">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm text-cyan-50/60">{cv.summary}</p>
      </section>
      <section className="relative mx-auto max-w-4xl space-y-6 px-6 pb-12">
        {cv.experience.map((job, i) => (
          <motion.div key={job.company} initial={reduce ? false : { opacity: 0, x: i % 2 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border border-cyan-400/30 bg-cyan-950/20 p-6 backdrop-blur-md">
            <p className="text-xs text-cyan-400/70">{job.period}</p>
            <h3 className="mt-1 text-xl">{job.role} · {job.company}</h3>
            <ul className="mt-3 space-y-1 text-sm text-cyan-50/70">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </motion.div>
        ))}
      </section>
      <section className="relative mx-auto max-w-4xl space-y-12 px-6 pb-28"><SkillsCloud /><ProjectLinks /><ContactRow className="text-cyan-200" /></section>
    </main>
  );`);

write("V51CaseFileSwitchboard", "Case File Switchboard", `  return (
    <main className="min-h-screen bg-[#111827] text-slate-100">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Switchboard</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-slate-300">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-2">{cv.experience.map((job) => <a key={job.company} href={\`#\${job.company.replace(/\\s+/g, "-")}\`} className="rounded-full border border-white/15 px-4 py-2 text-xs hover:border-sky-300/50">{job.company}</a>)}</div>
      </section>
      <section className="mx-auto max-w-5xl space-y-10 px-6 pb-16">
        {cv.experience.map((job) => (
          <article key={job.company} id={job.company.replace(/\\s+/g, "-")} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs text-slate-400">{job.period}</p>
            <h2 className="mt-2 text-2xl font-semibold">{job.role}</h2>
            <p className="text-sm text-slate-400">{job.company} · {job.place}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-5xl space-y-12 px-6 pb-28"><SkillsCloud /><ProjectLinks /><ContactRow className="text-slate-300" /></section>
    </main>
  );`, false);

write("V52TelemetryTape", "Telemetry Tape", `  return (
    <main className="min-h-screen bg-[#020617] text-lime-50">
      <div className="overflow-hidden border-y border-lime-400/20 bg-lime-950/30 py-2 font-[family-name:var(--font-mono)] text-xs text-lime-300/80">
        <motion.p animate={reduce ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="whitespace-nowrap">
          {cv.highlights.map((h) => \`\${h.label}: \${h.value}\`).join("   ·   ")}   ·   {cv.title}   ·   {cv.location}   ·   {cv.highlights.map((h) => \`\${h.label}: \${h.value}\`).join("   ·   ")}
        </motion.p>
      </div>
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-24">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lime-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-lime-100/70" /></section>
    </main>
  );`);

write("V54ConstellationIndex", "Constellation Index", `  return (
    <main className="min-h-screen bg-[#030712] text-sky-50">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Index</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-sky-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <ul className="mt-10 space-y-2 font-[family-name:var(--font-mono)] text-sm text-sky-200/80">
          {Object.entries(cv.skills).flatMap(([g, items]) => items.slice(0, 2).map((s) => <li key={s}>★ {g}/{s}</li>))}
        </ul>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-sky-200/70" /></section>
    </main>
  );`, false);

write("V55DualNarrativeConsole", "Dual Narrative Console", `  return (
    <main className="min-h-screen md:grid md:grid-cols-2">
      <section className="bg-[#fafaf9] px-6 py-28 text-stone-900">
        <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">For hiring managers</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold">{cv.name}</h1>
        <p className="mt-3 text-stone-600">{cv.title}</p>
        <p className="mt-6 text-sm leading-7 text-stone-600">{cv.summary}</p>
        <div className="mt-8 grid grid-cols-2 gap-3">{cv.highlights.map((h) => <div key={h.label} className="border border-stone-200 p-3"><p className="text-xl font-bold">{h.value}</p><p className="text-[10px] uppercase text-stone-500">{h.label}</p></div>)}</div>
      </section>
      <section className="bg-[#0f172a] px-6 py-28 text-slate-100">
        <p className="font-[family-name:var(--font-mono)] text-xs text-sky-300">engineer@orbitfolio:~$</p>
        <pre className="mt-4 whitespace-pre-wrap font-[family-name:var(--font-mono)] text-xs leading-6 text-sky-100/80">{cv.experience.map((j) => \`# \${j.company}\\n\${j.role} (\${j.period})\\n\`).join("\\n")}</pre>
        <ContactRow className="mt-8 text-sky-200/70" />
      </section>
      <section className="col-span-full mx-auto max-w-5xl space-y-14 bg-[#fafaf9] px-6 py-16 text-stone-900"><ExperienceList tone="light" /><div className="grid gap-10 md:grid-cols-2"><SkillsCloud tone="light" /><ProjectLinks tone="light" /></div></section>
    </main>
  );`, false);

write("V56SystemStatusPortfolio", "System Status Portfolio", `  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-emerald-400">STATUS · ALL SYSTEMS NOMINAL</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-zinc-300">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-8 space-y-2 font-[family-name:var(--font-mono)] text-xs">
          {cv.highlights.map((h) => <div key={h.label} className="flex justify-between border border-white/10 px-4 py-3"><span className="text-zinc-400">{h.label}</span><span className="text-emerald-300">{h.value} · OK</span></div>)}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-zinc-300" /></section>
    </main>
  );`, false);

write("V60OutcomeFirstResume", "Outcome First Resume", `  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Outcomes first</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-slate-600">{cv.title}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200"><p className="text-3xl font-bold text-sky-700">{h.value}</p><p className="mt-1 text-xs text-slate-500">{h.label}</p></div>)}</div>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`, false);

write("V61FounderFitProfile", "Founder Fit Profile", `  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Founder fit</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-lg text-slate-600">{cv.title}</p>
        <p className="mt-6 text-sm leading-7 text-slate-600">{cv.summary}</p>
        <a href={\`mailto:\${cv.email}\`} className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white">Talk founding work</a>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`, false);

write("V62HealthcareTrustSheet", "Healthcare Trust Sheet", `  return (
    <main className="min-h-screen bg-[#f0fdfa] text-teal-950">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-teal-700">Healthcare trust</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-teal-800/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-teal-900/70">{cv.summary}</p>
        <div className="mt-8 rounded-2xl border border-teal-100 bg-white p-6 text-sm text-teal-900/80">Built production AI for multi-org healthcare scheduling and RAG — privacy-aware, constraint-heavy, clinic-ready.</div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`, false);

write("V64LeadershipEvidence", "Leadership Evidence", `  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">Leadership evidence</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-neutral-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-600">{cv.summary}</p>
        <ul className="mt-8 space-y-3 text-sm">{cv.skills.leadership.map((item) => <li key={item} className="rounded-xl border border-neutral-200 bg-white px-4 py-3">{item}</li>)}</ul>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`, false);

console.log("done 10");
