"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Mouse Reveal Monolith — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#0b1020] text-slate-50">
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Monolith</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-8xl">{cv.name}</h1>
          <p className="mt-6 text-lg text-slate-300">{cv.title}</p>
          <p className="mt-6 text-sm leading-7 text-white/55">{cv.summary}</p>
          <ContactRow className="mt-8 text-slate-300" />
        </div>
        <aside className="relative min-h-[50vh] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-700/40 to-slate-950">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(148,163,184,0.35),transparent_55%)]"
            animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
            aria-hidden
          />
          <div className="relative z-10 grid h-full grid-cols-2 content-end gap-3 p-6">
            {cv.highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-white/15 bg-black/30 p-4 backdrop-blur">
                <p className="text-2xl font-bold">{h.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/50">{h.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
      </section>
    </main>
  );
}
