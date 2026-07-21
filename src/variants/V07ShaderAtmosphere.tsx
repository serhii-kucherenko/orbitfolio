"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Shader Atmosphere — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen overflow-hidden bg-[#041016] text-teal-50">
      {!reduce && <motion.div className="pointer-events-none fixed -left-1/4 top-0 h-[120vh] w-[80vw] rounded-full bg-teal-400/10 blur-3xl" animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 14, repeat: Infinity }} aria-hidden />}
      <section className="relative mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-24">
        <p className="font-[family-name:var(--font-mono)] text-xs text-teal-300/70">shader://atmosphere</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-7xl">{cv.name}</h1>
        <p className="mt-4 text-xl text-teal-100/80">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm leading-8 text-teal-50/60">{cv.summary}</p>
      </section>
      <section className="relative mx-auto max-w-4xl space-y-16 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-teal-100/70" />
      </section>
    </main>
  );
}
