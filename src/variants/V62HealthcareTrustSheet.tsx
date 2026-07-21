"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Healthcare Trust Sheet — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#f0fdfa] text-teal-950">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-teal-700">Healthcare trust</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-teal-800/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-teal-900/70">{cv.summary}</p>
        <div className="mt-8 rounded-2xl border border-teal-100 bg-white p-6 text-sm text-teal-900/80">Built production AI for multi-org healthcare scheduling and RAG — privacy-aware, constraint-heavy, clinic-ready.</div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
