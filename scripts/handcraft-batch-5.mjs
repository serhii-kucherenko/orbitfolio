/**
 * Handcrafts 10 more non-AwardVariant cells (batch 5) — gate 65.
 * node scripts/handcraft-batch-5.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");

function write(file, title, body) {
  fs.writeFileSync(
    path.join(dir, `${file}.tsx`),
    `"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** ${title} — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
${body}
}
`,
  );
  console.log("wrote", file);
}

write("V33WaveformResume", "Waveform Resume", `  return (
    <main className="min-h-screen bg-[#061018] text-sky-50">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Waveform</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-sky-100/75">{cv.title}</p>
        <div className="mt-10 flex h-24 items-end gap-1" aria-hidden>
          {Array.from({ length: 48 }, (_, i) => (
            <motion.span key={i} className="w-full rounded-sm bg-sky-400" animate={reduce ? { height: "30%" } : { height: [\`\${20 + (i % 5) * 10}%\`, \`\${55 + (i % 4) * 10}%\`, \`\${20 + (i % 5) * 10}%\`] }} transition={{ duration: 1.2 + (i % 3) * 0.2, repeat: Infinity }} />
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-sky-200/70" /></section>
    </main>
  );`);

write("V34ParticleNameAssembly", "Particle Name Assembly", `  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-cyan-50">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: 40 }, (_, i) => (
          <motion.i key={i} className="absolute h-1 w-1 rounded-full bg-cyan-300" style={{ left: \`\${(i * 17) % 100}%\`, top: \`\${(i * 23) % 100}%\` }} animate={reduce ? undefined : { x: [0, ((i % 5) - 2) * 20, 0], y: [0, ((i % 4) - 2) * 16, 0] }} transition={{ duration: 4 + (i % 3), repeat: Infinity }} />
        ))}
      </div>
      <section className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-24">
        <motion.h1 initial={reduce ? false : { opacity: 0, letterSpacing: "0.4em" }} animate={{ opacity: 1, letterSpacing: "-0.04em" }} transition={{ duration: 1.2 }} className="font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-7xl">{cv.name}</motion.h1>
        <p className="mt-5 text-xl text-cyan-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <ContactRow className="mt-8 text-cyan-100/70" />
      </section>
      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /></section>
    </main>
  );`);

write("V35AuroraMotionLedger", "Aurora Motion Ledger", `  return (
    <main className="min-h-screen bg-[#04101a] text-emerald-50">
      {!reduce && <motion.div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 h-[50vh] opacity-40" style={{ background: "linear-gradient(120deg, transparent, rgba(52,211,153,0.35), rgba(56,189,248,0.25), transparent)" }} animate={{ x: ["-10%", "10%", "-10%"] }} transition={{ duration: 12, repeat: Infinity }} />}
      <section className="relative mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-300/70">Aurora ledger · Vancouver</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-emerald-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="relative mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-emerald-100/70" /></section>
    </main>
  );`);

write("V36VelocityCaseChapters", "Velocity Case Chapters", `  return (
    <main className="min-h-screen bg-[#0b0f14] text-slate-50">
      <section className="snap-y snap-mandatory">
        <header className="flex min-h-[80vh] snap-start flex-col justify-center px-6 pt-24">
          <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Velocity chapters</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-7xl">{cv.name}</h1>
          <p className="mt-4 text-xl text-sky-100/80">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        </header>
        {cv.experience.map((job) => (
          <article key={job.company} className="flex min-h-[75vh] snap-start flex-col justify-center border-t border-white/10 px-6 py-16">
            <p className="text-xs uppercase tracking-wider text-sky-300/60">{job.period}</p>
            <h2 className="mt-3 text-3xl font-semibold">{job.company}</h2>
            <p className="mt-2 text-white/70">{job.role}</p>
            <ul className="mt-6 max-w-2xl space-y-2 text-sm text-white/55">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 py-20"><SkillsCloud /><ProjectLinks /><ContactRow className="text-sky-200/70" /></section>
    </main>
  );`);

write("V38GoalsOrbitKinetics", "Goals Orbit Kinetics", `  return (
    <main className="min-h-screen bg-[#0c0a09] text-amber-50">
      <section className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 pt-28 text-center">
        <motion.div aria-hidden className="absolute h-64 w-64 rounded-full border border-amber-300/20" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
        <h1 className="relative font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="relative mt-4 text-amber-100/75">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-3">{cv.highlights.map((h) => <span key={h.label} className="rounded-full border border-amber-200/25 px-4 py-2 text-sm"><strong className="text-amber-200">{h.value}</strong> {h.label}</span>)}</div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-amber-100/70" /></section>
    </main>
  );`);

write("V39LaunchSequenceCV", "Launch Sequence CV", `  return (
    <main className="min-h-screen bg-[#050505] text-orange-50">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-end px-6 pb-20 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-orange-300">T-MINUS · LAUNCH</p>
        <motion.h1 initial={reduce ? false : { y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black uppercase sm:text-7xl">{cv.name}</motion.h1>
        <p className="mt-4 text-xl text-orange-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-10 h-2 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full bg-orange-400" initial={reduce ? { width: "100%" } : { width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5 }} /></div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-orange-100/70" /></section>
    </main>
  );`);

write("V41OversizedProofType", "Oversized Proof Type", `  return (
    <main className="min-h-screen overflow-x-hidden bg-[#09090b] text-zinc-50">
      <section className="px-4 pb-8 pt-28">
        <motion.h1 initial={reduce ? false : { x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="font-[family-name:var(--font-display)] text-[clamp(4rem,18vw,12rem)] font-black uppercase leading-[0.8] tracking-[-0.06em]">{cv.name.split(" ")[0]}</motion.h1>
        <motion.h1 initial={reduce ? false : { x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="font-[family-name:var(--font-display)] text-[clamp(4rem,18vw,12rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-zinc-500">{cv.name.split(" ")[1]}</motion.h1>
        <p className="mt-8 max-w-2xl px-2 text-lg text-zinc-300">{cv.title}</p>
        <p className="mt-4 max-w-2xl px-2 text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-zinc-300" /></section>
    </main>
  );`);

write("V42KineticSynthesis", "Kinetic Synthesis", `  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-50">
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Kinetic synthesis</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-4 text-lg text-sky-100/80">{cv.title}</p>
          <p className="mt-6 text-sm leading-7 text-white/55">{cv.summary}</p>
          <ContactRow className="mt-8 text-sky-100/70" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {cv.highlights.map((h, i) => (
            <motion.div key={h.label} initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-3xl border border-sky-400/20 bg-sky-950/40 p-5">
              <p className="text-3xl font-bold text-sky-200">{h.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-sky-200/50">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /></section>
    </main>
  );`);

write("V46JourneyMapSystem", "Journey Map System", `  const stops = ["Kyiv", "Geneva", "Italy", "SF", "Vancouver"];
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Journey map</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-slate-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
        <ol className="mt-10 flex flex-wrap gap-3">{stops.map((s, i) => <li key={s} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm"><span className="mr-2 text-slate-400">{i + 1}</span>{s}</li>)}</ol>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`);

write("V47BlueprintOperatingManual", "Blueprint Operating Manual", `  return (
    <main className="min-h-screen bg-[#0b1c2c] font-[family-name:var(--font-mono)] text-sky-100" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }}>
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-400">DWG · Operating manual</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-3 text-sky-200/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-sky-100/60">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-sky-200/70" /></section>
    </main>
  );`);

console.log("done 10");
