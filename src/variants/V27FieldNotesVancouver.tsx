"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Field Notes Vancouver — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#eef6f3] text-emerald-950">
      <section className="mx-auto max-w-3xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-700/70">Field notes · {cv.location}</p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl">{cv.name}</h1>
        <p className="mt-3 text-emerald-900/75">{cv.title}</p>
        <p className="mt-8 rounded-2xl border border-emerald-900/10 bg-white/70 p-6 text-sm leading-8 shadow-sm">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
