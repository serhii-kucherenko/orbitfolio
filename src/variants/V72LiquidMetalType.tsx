"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Liquid Metal Type — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#111113] text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-24">
        <motion.h1 className="font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-8xl" style={{ backgroundImage: "linear-gradient(120deg,#e2e8f0,#94a3b8,#f8fafc,#64748b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: reduce ? undefined : "url(#liquid)" }} initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          {cv.name}
        </motion.h1>
        <p className="mt-8 text-xl text-zinc-300">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-zinc-300" />
      </section>
    </main>
  );
}
