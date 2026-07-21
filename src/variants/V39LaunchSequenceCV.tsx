"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Launch Sequence CV — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#050505] text-orange-50">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col justify-end px-6 pb-20 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-orange-300">T-MINUS · LAUNCH</p>
        <motion.h1 initial={reduce ? false : { y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black uppercase sm:text-7xl">{cv.name}</motion.h1>
        <p className="mt-4 text-xl text-orange-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-10 h-2 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full bg-orange-400" initial={reduce ? { width: "100%" } : { width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.5 }} /></div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-orange-100/70" /></section>
    </main>
  );
}
