"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Signal Scrub Story — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#061018] text-sky-50">
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-end px-6 pb-16 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-sky-400">scrub://career-timeline</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-7xl">{cv.name}</h1>
        <p className="mt-4 text-lg text-sky-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-10 h-2 w-full overflow-hidden rounded-full bg-white/10" aria-hidden>
          <motion.div className="h-full bg-sky-400" initial={reduce ? { width: "100%" } : { width: "8%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-sky-200/80" />
      </section>
    </main>
  );
}
