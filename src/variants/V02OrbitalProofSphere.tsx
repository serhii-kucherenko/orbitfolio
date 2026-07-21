"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Orbital Proof Sphere — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#020617] text-sky-50">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <motion.div aria-hidden className="pointer-events-none absolute h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full border border-sky-400/30" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 48, repeat: Infinity, ease: "linear" }} style={{ background: "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.35), transparent 60%)" }} />
        <p className="relative text-[10px] uppercase tracking-[0.4em] text-sky-300/80">Alpha · Orbital proof</p>
        <h1 className="relative mt-6 font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-7xl">{cv.name}</h1>
        <p className="relative mt-4 text-xl text-sky-100/80">{cv.title}</p>
        <p className="relative mt-8 max-w-2xl text-sm leading-7 text-sky-100/60">{cv.summary}</p>
        <div className="relative mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-sky-400/20 bg-sky-950/40 px-3 py-4">
              <p className="text-2xl font-bold text-sky-200">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-sky-200/50">{h.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-16 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-sky-200/80" />
      </section>
    </main>
  );
}
