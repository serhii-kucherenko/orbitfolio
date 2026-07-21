"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Cinematic Flythrough — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#030712] text-slate-50">
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-20 pt-28">
        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{ background: "linear-gradient(180deg, transparent, #0ea5e9 120%)" }}
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        )}
        <p className="relative text-[10px] uppercase tracking-[0.4em] text-sky-300/70">One take · flythrough</p>
        <h1 className="relative mt-4 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[0.9] sm:text-7xl">{cv.name}</h1>
        <p className="relative mt-5 text-xl text-sky-100/80">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <ContactRow className="relative mt-8 text-sky-100/70" />
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
      </section>
    
      <footer className="mx-auto max-w-6xl px-6 pb-16 text-sm opacity-55">
        {/* Education footer */}
        <p>
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </footer>
    </main>
  );
}
