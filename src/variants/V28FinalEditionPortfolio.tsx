"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Final Edition Portfolio — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#fafafa] text-stone-900">
      <header className="border-b-2 border-stone-900 px-6 pb-8 pt-28">
        <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em]">Final edition</p>
            <h1 className="mt-2 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl">{cv.name}</h1>
          </div>
          <a href={`mailto:${cv.email}`} className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white">Hire</a>
        </div>
        <p className="mx-auto mt-6 max-w-5xl text-sm leading-7 text-stone-600">{cv.summary}</p>
      </header>
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr]">
        <ExperienceList tone="light" />
        <div className="space-y-10"><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></div>
      </section>
    </main>
  );
}
