"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Experimental Cover Lab — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#1c1917] text-orange-50">
      <section className="px-6 pb-8 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold">{cv.name}</h1>
        <p className="mt-3 text-orange-100/70">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
      </section>
      <div className="flex gap-4 overflow-x-auto px-6 pb-12">{cv.experience.map((job, i) => <article key={job.company} className="w-[240px] shrink-0 rounded-2xl border border-orange-200/20 p-5" style={{ background: i % 2 ? "#292524" : "#44403c" }}><p className="text-[10px] uppercase text-orange-200/50">Cover 0{i + 1}</p><h2 className="mt-2 text-xl font-semibold">{job.company}</h2><p className="mt-2 text-xs text-white/50">{job.period}</p></article>)}</div>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="opacity-80" /></section>
    </main>
  );
}
