"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Goals Orbit Kinetics — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#0c0a09] text-amber-50">
      <section className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 pt-28 text-center">
        <motion.div aria-hidden className="absolute h-64 w-64 rounded-full border border-amber-300/20" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
        <h1 className="relative font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="relative mt-4 text-amber-100/75">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-3">{cv.highlights.map((h) => <span key={h.label} className="rounded-full border border-amber-200/25 px-4 py-2 text-sm"><strong className="text-amber-200">{h.value}</strong> {h.label}</span>)}</div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-amber-100/70" /></section>
    </main>
  );
}
