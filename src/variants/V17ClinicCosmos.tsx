"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#071416] text-[#e7fbf7]">
      <Starfield density={90} color="#5eead4" speed={0.05} />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 pb-28 pt-28 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] text-teal-400/80"
          >
            Healthcare AI · calm systems
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-3 text-teal-100/70">{cv.title}</p>
          <p className="mt-6 text-sm leading-relaxed text-white/60">{cv.summary}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {cv.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-teal-500/20 bg-teal-950/30 p-3">
                <p className="font-[family-name:var(--font-display)] text-xl text-teal-300">{h.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/40">{h.label}</p>
              </div>
            ))}
          </div>
          <ContactRow className="mt-8 text-teal-200" />
        </aside>
        <div className="space-y-10 rounded-[2rem] border border-teal-500/20 bg-teal-950/20 p-8 backdrop-blur">
          <section>
            <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-teal-300/60">Clinical impact</h2>
            <ExperienceList tone="dark" />
          </section>
          <SkillsCloud />
          <ProjectLinks />
        </div>
      </div>
    </main>
  );
}
