"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Masthead Proof Press — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1a1a1a]">
      <header className="border-b-4 border-black px-6 pb-8 pt-28">
        <p className="text-center text-[10px] uppercase tracking-[0.5em]">The Proof Press · Vancouver Edition</p>
        <h1 className="mt-4 text-center font-[family-name:var(--font-serif)] text-5xl leading-none sm:text-7xl">{cv.name}</h1>
        <p className="mt-4 text-center text-sm uppercase tracking-[0.2em]">{cv.title}</p>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-black/70">{cv.summary}</p>
      </header>
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border border-black/20 p-4 text-center">
            <p className="text-3xl font-bold">{h.value}</p>
            <p className="mt-2 text-[10px] uppercase tracking-wider">{h.label}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28">
        <ExperienceList tone="light" />
        <SkillsCloud tone="light" />
        <ProjectLinks tone="light" />
        <ContactRow className="text-black/70" />
      </section>
    </main>
  );
}
