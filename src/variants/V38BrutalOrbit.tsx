"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="min-h-screen bg-[#111] text-white">
      <Starfield density={40} color="#f87171" speed={0.01} />
      <div className="relative z-10 px-4 pb-24 pt-28 sm:px-8">
        <motion.h1
          initial={reduce ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-[family-name:var(--font-display)] text-[14vw] font-extrabold uppercase leading-[0.85] tracking-tighter"
        >
          {cv.name.split(" ")[0]}
        </motion.h1>
        <motion.h1
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="font-[family-name:var(--font-display)] text-[14vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-red-500"
        >
          {cv.name.split(" ")[1]}
        </motion.h1>
        <p className="mt-8 max-w-xl border-4 border-white p-4 text-lg font-bold uppercase">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm text-white/70">{cv.summary}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border-4 border-white p-4">
              <p className="font-[family-name:var(--font-display)] text-3xl">{h.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/50">{h.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-8">
          {cv.experience.map((j) => (
            <div key={j.company} className="border-4 border-white p-5">
              <p className="text-xs uppercase">{j.period}</p>
              <h3 className="mt-1 text-2xl font-black uppercase">{j.company}</h3>
              <p className="mt-1 text-sm font-semibold uppercase text-red-400">{j.role}</p>
              <p className="mt-2 text-sm text-white/70">{j.bullets[0]}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <SkillsCloud />
          <div className="mt-8">
            <ProjectLinks />
            <ContactRow className="mt-8" />
          </div>
        </div>
      </div>
    </main>
  );
}
