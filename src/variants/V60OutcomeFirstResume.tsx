"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Outcome First Resume — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
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
  );
}
