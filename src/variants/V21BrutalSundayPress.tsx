"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Brutal Sunday Press — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b-8 border-black px-4 pb-10 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase">Sunday · Proof stamp</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-8xl">{cv.name}</h1>
        <p className="mt-6 max-w-2xl text-lg font-semibold">{cv.title}</p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-black/70">{cv.summary}</p>
        <a href={`mailto:${cv.email}`} className="mt-8 inline-block border-4 border-black bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">Hire stamp</a>
      </section>
      <section className="mx-auto max-w-4xl space-y-12 px-4 py-16">
        <ExperienceList tone="light" />
        <SkillsCloud tone="light" />
        <ProjectLinks tone="light" />
        <ContactRow />
      </section>
    </main>
  );
}
