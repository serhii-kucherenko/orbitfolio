"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Blueprint Operating Manual — handcrafted award cell */
export function Variant() {
  const _reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#0b1c2c] font-[family-name:var(--font-mono)] text-sky-100" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }}>
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-400">DWG · Operating manual</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-3 text-sky-200/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-sky-100/60">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-sky-200/70" /></section>
    </main>
  );
}
