"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Swiss Kinetic — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-10 pt-28 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="text-[10px] uppercase tracking-[0.3em]">Steals scan speed + oversized motion type</p>
          <motion.h1 initial={reduce ? false : { y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-4 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-8xl">{cv.name}</motion.h1>
          <p className="mt-6 text-lg">{cv.title}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-black/70">{cv.summary}</p>
        </div>
        <aside className="space-y-3 md:col-span-4">{cv.highlights.map((h) => <div key={h.label} className="border border-black p-4"><p className="text-2xl font-bold">{h.value}</p><p className="text-[10px] uppercase">{h.label}</p></div>)}</aside>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );
}
