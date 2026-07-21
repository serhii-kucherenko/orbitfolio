"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Pull Quote Stage — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">Pull quote stage</p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-stone-600">{cv.title}</p>
        <blockquote className="mt-12 border-l-4 border-stone-900 pl-6 font-[family-name:var(--font-serif)] text-3xl leading-snug">“{cv.highlights[0].value} {cv.highlights[0].label.toLowerCase()}.”</blockquote>
        <p className="mt-8 text-sm leading-8 text-stone-600">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
