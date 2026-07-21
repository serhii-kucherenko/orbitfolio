"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Journey Map System — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  const stops = ["Kyiv", "Geneva", "Italy", "SF", "Vancouver"];
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
  );
}
