"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Velocity Case Chapters — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
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
  );
}
