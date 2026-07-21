"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Footnote Career — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
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
  );
}
