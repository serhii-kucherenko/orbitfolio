"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Case File Switchboard — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#111827] text-slate-100">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Switchboard</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-slate-300">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-2">{cv.experience.map((job) => <a key={job.company} href={`#${job.company.replace(/\s+/g, "-")}`} className="rounded-full border border-white/15 px-4 py-2 text-xs hover:border-sky-300/50">{job.company}</a>)}</div>
      </section>
      <section className="mx-auto max-w-5xl space-y-10 px-6 pb-16">
        {cv.experience.map((job) => (
          <article key={job.company} id={job.company.replace(/\s+/g, "-")} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs text-slate-400">{job.period}</p>
            <h2 className="mt-2 text-2xl font-semibold">{job.role}</h2>
            <p className="text-sm text-slate-400">{job.company} · {job.place}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-5xl space-y-12 px-6 pb-28"><SkillsCloud /><ProjectLinks /><ContactRow className="text-slate-300" /></section>
    </main>
  );
}
