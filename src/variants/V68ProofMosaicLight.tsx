"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Proof Mosaic Light — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">Proof mosaic</p>
        <h1 className="mt-3 font-[family-name:var(--font-serif)] text-5xl">{cv.name}</h1>
        <p className="mt-2 text-stone-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-stone-600">{cv.summary}</p>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-12 md:grid-cols-12">
        {cv.experience.map((job, i) => (
          <article key={job.company} className={`rounded-3xl border border-stone-200 bg-white p-6 ${i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-6"}`}>
            <p className="text-xs uppercase tracking-wider text-stone-400">{job.period}</p>
            <h2 className="mt-2 text-xl font-semibold">{job.company}</h2>
            <p className="text-sm text-stone-500">{job.role}</p>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-5xl space-y-12 px-6 pb-28"><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
