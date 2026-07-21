"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Bilingual Signal — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
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
  );
}
