"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Planetary Dossier — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#04060f] text-slate-100">
      <section className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 px-6 pb-12 pt-28 md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex justify-center">
          <motion.div
            aria-hidden
            className="aspect-square w-[min(70vw,320px)] rounded-full border border-cyan-400/30"
            style={{ background: "radial-gradient(circle at 35% 30%, #67e8f9, #0e7490 55%, #082f49)" }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Dossier</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg text-cyan-100/80">{cv.title}</p>
          <p className="mt-6 text-sm leading-7 text-white/55">{cv.summary}</p>
          <ContactRow className="mt-8 text-cyan-100/70" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
      </section>
    </main>
  );
}
