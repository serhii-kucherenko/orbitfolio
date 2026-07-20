"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen bg-[#f5f5f0] text-[#0a0a0a]">
      <Starfield density={40} color="#0a0a0a" speed={0.01} className="opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16">
        <div className="grid grid-cols-12 gap-4 border-b-2 border-black pb-6">
          <p className="col-span-12 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.5em] sm:col-span-3">
            Swiss Space
          </p>
          <p className="col-span-12 text-[10px] uppercase tracking-[0.3em] opacity-40 sm:col-span-6 sm:text-center">
            Orbitfolio · Design Lab · V37
          </p>
          <p className="col-span-12 text-right text-[10px] uppercase tracking-[0.3em] opacity-40 sm:col-span-3">
            {cv.location}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-4">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 lg:col-span-8"
          >
            <h1 className="font-[family-name:var(--font-display)] text-6xl font-bold leading-[0.95] tracking-tight sm:text-8xl">
              {cv.name.split(" ").map((word, i) => (
                <span key={word} className={i === 0 ? "block" : "block text-black/30"}>
                  {word}
                </span>
              ))}
            </h1>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 flex items-end lg:col-span-4"
          >
            <p className="text-lg font-medium leading-snug">{cv.title}</p>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-4 border-t border-black/20 pt-8">
          <p className="col-span-12 text-sm leading-relaxed lg:col-span-6">{cv.summary}</p>
          <div className="col-span-12 grid grid-cols-2 gap-4 lg:col-span-6 lg:grid-cols-4">
            {cv.highlights.map((h) => (
              <div key={h.label} className="border-l-2 border-black pl-3">
                <p className="font-[family-name:var(--font-display)] text-2xl">{h.value}</p>
                <p className="text-[10px] uppercase tracking-wider opacity-50">{h.label}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="mb-8 text-[10px] uppercase tracking-[0.4em]">Experience</h2>
            <ExperienceList tone="light" />
          </div>
          <div className="col-span-12 space-y-12 lg:col-span-5">
            <div>
              <h2 className="mb-6 text-[10px] uppercase tracking-[0.4em]">Skills</h2>
              <SkillsCloud tone="light" />
            </div>
            <div>
              <h2 className="mb-6 text-[10px] uppercase tracking-[0.4em]">Work</h2>
              <ProjectLinks tone="light" />
              <ContactRow className="mt-8 text-black/70" />
            </div>
          </div>
        </section>

        <div
          className="pointer-events-none fixed right-8 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full border border-black/10 lg:block"
          style={{ background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)" }}
        />
      </div>
    </main>
  );
}
