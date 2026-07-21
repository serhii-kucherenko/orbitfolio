"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Warp Type Corridor — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-24">
        <motion.h1 className="text-center font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-none sm:text-8xl" style={{ perspective: 800 }} initial={reduce ? false : { scale: 2.2, opacity: 0, rotateX: 40 }} animate={{ scale: 1, opacity: 1, rotateX: 0 }} transition={{ duration: 1.1 }}>
          {cv.name}
        </motion.h1>
      </section>
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-10 text-center">
        <p className="text-cyan-300">{cv.title}</p>
        <p className="text-sm leading-7 text-white/60">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-white/70" />
      </section>
    </main>
  );
}
