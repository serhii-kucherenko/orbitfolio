"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Telescope Cases — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
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
  );
}
