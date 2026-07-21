/**
 * Handcrafts 10 more non-AwardVariant cells (batch 4) — gate 55.
 * node scripts/handcraft-batch-4.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");

function write(file, title, body) {
  const src = `"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** ${title} — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
${body}
}
`;
  fs.writeFileSync(path.join(dir, `${file}.tsx`), src);
  console.log("wrote", file);
}

write("V15MissionOneTake", "Mission One-Take", `  return (
    <main className="min-h-screen bg-[#05080f] text-slate-50">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-24">
        <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} className="font-[family-name:var(--font-mono)] text-xs tracking-[0.4em] text-teal-300">MISSION // ONE-TAKE</motion.p>
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-7xl">{cv.name}</motion.h1>
        <p className="mt-4 text-xl text-teal-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="rounded-xl border border-teal-400/20 bg-teal-950/40 p-4"><p className="text-2xl font-bold text-teal-200">{h.value}</p><p className="text-[10px] uppercase tracking-wider text-teal-200/50">{h.label}</p></div>)}</div>
        <ContactRow className="mt-10 text-teal-100/70" />
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /></section>
    </main>
  );`);

write("V18PullQuoteStage", "Pull Quote Stage", `  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">Pull quote stage</p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-stone-600">{cv.title}</p>
        <blockquote className="mt-12 border-l-4 border-stone-900 pl-6 font-[family-name:var(--font-serif)] text-3xl leading-snug">“{cv.highlights[0].value} {cv.highlights[0].label.toLowerCase()}.”</blockquote>
        <p className="mt-8 text-sm leading-8 text-stone-600">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`);

write("V19ColumnBroadsheet", "Column Broadsheet", `  return (
    <main className="min-h-screen bg-[#f5f0e8] text-stone-900">
      <header className="border-b border-stone-900 px-6 pb-8 pt-28 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em]">Broadsheet · Columns</p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-7xl">{cv.name}</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.2em]">{cv.title}</p>
      </header>
      <section className="mx-auto max-w-5xl columns-1 gap-10 px-6 py-12 md:columns-2">
        <p className="mb-8 text-sm leading-8">{cv.summary}</p>
        <div className="mb-8 break-inside-avoid"><ExperienceList tone="light" /></div>
        <div className="mb-8 break-inside-avoid"><SkillsCloud tone="light" /></div>
        <div className="break-inside-avoid"><ProjectLinks tone="light" /><ContactRow className="mt-8" /></div>
      </section>
    </main>
  );`);

write("V22BilingualSignal", "Bilingual Signal", `  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 md:grid md:grid-cols-2">
      <section className="border-b border-slate-200 px-6 py-28 md:border-b-0 md:border-r">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">EN · Signal A</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-3 text-slate-600">{cv.title}</p>
        <p className="mt-6 text-sm leading-7 text-slate-600">{cv.summary}</p>
        <ContactRow className="mt-8" />
      </section>
      <section className="bg-slate-900 px-6 py-28 text-slate-100">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">UA rhythm · Signal B</p>
        <p className="mt-4 font-[family-name:var(--font-serif)] text-3xl leading-snug">Інженер, який будує AI-системи під продакшн.</p>
        <div className="mt-10 space-y-4">{cv.highlights.map((h) => <div key={h.label} className="flex justify-between border-b border-white/10 pb-3"><span className="text-sm text-white/50">{h.label}</span><strong className="text-xl">{h.value}</strong></div>)}</div>
      </section>
      <section className="col-span-full mx-auto max-w-5xl space-y-14 px-6 py-16"><ExperienceList tone="light" /><div className="grid gap-10 md:grid-cols-2"><SkillsCloud tone="light" /><ProjectLinks tone="light" /></div></section>
    </main>
  );`);

write("V23IssueStack", "Issue Stack", `  return (
    <main className="min-h-screen bg-[#1c1917] text-orange-50">
      <section className="px-6 pb-8 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold">{cv.name}</h1>
        <p className="mt-3 text-orange-100/70">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
      </section>
      <div className="relative mx-auto max-w-3xl px-6 pb-12">
        {cv.experience.map((job, i) => (
          <motion.article key={job.company} initial={reduce ? false : { y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="relative mb-[-2rem] rounded-2xl border border-orange-200/20 p-6 shadow-2xl" style={{ background: i % 2 ? "#292524" : "#44403c", zIndex: cv.experience.length - i, transform: reduce ? undefined : \`rotate(\${(i - 1.5) * 1.5}deg)\` }}>
            <p className="text-[10px] uppercase tracking-wider text-orange-200/50">Issue 0{i + 1}</p>
            <h2 className="mt-2 text-2xl font-semibold">{job.company}</h2>
            <p className="mt-1 text-sm text-white/60">{job.role} · {job.period}</p>
          </motion.article>
        ))}
      </div>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28 pt-16"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-orange-100/70" /></section>
    </main>
  );`);

write("V24FootnoteCareer", "Footnote Career", `  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900">
      <section className="mx-auto max-w-3xl px-6 pb-10 pt-28">
        <h1 className="font-[family-name:var(--font-serif)] text-5xl">{cv.name}<sup className="text-lg text-stone-400">1</sup></h1>
        <p className="mt-3 text-stone-600">{cv.title}</p>
        <p className="mt-8 text-sm leading-8 text-stone-700">{cv.summary}<sup className="text-stone-400">2</sup></p>
      </section>
      <section className="mx-auto max-w-3xl space-y-10 px-6 pb-16">
        {cv.experience.map((job, i) => (
          <article key={job.company}>
            <h2 className="text-xl font-semibold">{job.role} · {job.company}<sup className="text-sm text-stone-400">{i + 3}</sup></h2>
            <p className="text-xs uppercase tracking-wider text-stone-500">{job.period}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-700">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </article>
        ))}
      </section>
      <footer className="mx-auto max-w-3xl border-t border-stone-300 px-6 py-10 text-xs leading-6 text-stone-500">
        <p>1. Primary identity for hiring managers.</p>
        <p>2. Applied AI focus: agents, RAG, production systems.</p>
        <div className="mt-8 space-y-10 text-stone-900"><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></div>
      </footer>
    </main>
  );`);

write("V25RedlineResume", "Redline Resume", `  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-3xl px-6 pb-10 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-red-600">REDLINE · EDIT PASS</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-bold decoration-red-500 decoration-4 underline-offset-8">{cv.name}</h1>
        <p className="mt-4 text-lg"><span className="bg-red-100 px-1">{cv.title}</span></p>
        <p className="mt-6 border-l-4 border-red-500 pl-4 text-sm leading-7 text-black/70">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`);

write("V26CreditRollCareer", "Credit Roll Career", `  return (
    <main className="min-h-screen overflow-hidden bg-black text-amber-50">
      <section className="flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-amber-200/60">End credits</p>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-4 text-amber-100/70">{cv.title}</p>
        </div>
      </section>
      <motion.section className="mx-auto max-w-xl space-y-12 px-6 pb-40 text-center" animate={reduce ? undefined : { y: [40, 0] }} transition={{ duration: 1.2 }}>
        <p className="text-sm leading-7 text-white/60">{cv.summary}</p>
        {cv.experience.map((job) => (
          <div key={job.company}>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200/50">{job.period}</p>
            <h2 className="mt-2 text-2xl font-semibold">{job.role}</h2>
            <p className="text-amber-100/60">{job.company}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/55">{job.bullets.map((b) => <li key={b.slice(0, 20)}>{b}</li>)}</ul>
          </div>
        ))}
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="justify-center text-amber-100/70" />
      </motion.section>
    </main>
  );`);

write("V27FieldNotesVancouver", "Field Notes Vancouver", `  return (
    <main className="min-h-screen bg-[#eef6f3] text-emerald-950">
      <section className="mx-auto max-w-3xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-700/70">Field notes · {cv.location}</p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl">{cv.name}</h1>
        <p className="mt-3 text-emerald-900/75">{cv.title}</p>
        <p className="mt-8 rounded-2xl border border-emerald-900/10 bg-white/70 p-6 text-sm leading-8 shadow-sm">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`);

write("V28FinalEditionPortfolio", "Final Edition Portfolio", `  return (
    <main className="min-h-screen bg-[#fafafa] text-stone-900">
      <header className="border-b-2 border-stone-900 px-6 pb-8 pt-28">
        <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em]">Final edition</p>
            <h1 className="mt-2 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl">{cv.name}</h1>
          </div>
          <a href={\`mailto:\${cv.email}\`} className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white">Hire</a>
        </div>
        <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-stone-600">{cv.summary}</p>
      </header>
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr]">
        <ExperienceList tone="light" />
        <div className="space-y-10"><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></div>
      </section>
    </main>
  );`);

console.log("done 10");
