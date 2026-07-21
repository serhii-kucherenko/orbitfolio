"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Column Broadsheet — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#f5f0e8] text-stone-900">
      <header className="border-b border-stone-900 px-6 pb-8 pt-28 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em]">Broadsheet · Columns</p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-7xl">{cv.name}</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.2em]">{cv.title}</p>
      </header>
      <section className="mx-auto max-w-5xl columns-1 gap-10 px-6 py-12 md:columns-2">
        <p className="mb-8 text-sm leading-8">{cv.summary}</p>
        <div className="mb-8 break-inside-avoid"><ExperienceList tone="light" /></div>
        <div className="mb-8 break-inside-avoid"><SkillsCloud tone="light" /></div>
        <div className="break-inside-avoid"><ProjectLinks tone="light" /><ContactRow className="mt-8" /></div>
      </section>
    </main>
  );
}
