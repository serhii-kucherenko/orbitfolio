"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Founder Fit Profile — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Founder fit</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-lg text-slate-600">{cv.title}</p>
        <p className="mt-6 text-sm leading-7 text-slate-600">{cv.summary}</p>
        <a href={`mailto:${cv.email}`} className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white">Talk founding work</a>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
