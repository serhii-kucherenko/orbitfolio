"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Editorial Orbit — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <header className="border-b border-stone-900 px-6 pb-8 pt-28 text-center">
        <p className="text-[10px] uppercase tracking-[0.45em]">Steals editorial authority + spatial focus</p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-7xl">{cv.name}</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.2em]">{cv.title}</p>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-stone-600">{cv.summary}</p>
      </header>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
