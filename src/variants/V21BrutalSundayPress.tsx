"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Brutal Sunday Press — raw black slabs, screaming headlines, ink-bleed red rules; Sunday tabloid energy. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b-8 border-[#ff2d2d] px-4 py-10 md:px-8">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.4em] text-[#ff2d2d]">
          Sunday press · brutal edition
        </p>
        <motion.h1
          initial={reduce ? false : { scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="mt-4 font-[family-name:var(--font-display)] text-[12vw] font-black uppercase leading-[0.8] tracking-[-0.07em]"
        >
          {cv.name.split(" ").map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </motion.h1>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xl font-black uppercase text-[#ff2d2d]">{cv.title}</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">{cv.summary}</p>
          </div>
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#ff2d2d] px-6 py-3 text-sm font-black uppercase tracking-wide text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2d2d]"
          >
            Hire now
          </a>
        </div>
        <ContactRow className="mt-6 text-white/50" />
      </header>

      <section className="grid grid-cols-2 border-b-4 border-white md:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border-r-4 border-white p-5 last:border-r-0">
            <p className="text-4xl font-black">{h.value}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#ff2d2d]">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="px-4 py-16 md:px-8">
        <h2 className="mb-10 inline-block bg-white px-3 py-1 font-[family-name:var(--font-display)] text-3xl font-black uppercase text-black">
          Impact pages
        </h2>
        <ExperienceList tone="dark" />
      </section>

      <section className="grid gap-0 border-t-8 border-[#ff2d2d] md:grid-cols-2">
        <div className="border-b-4 border-white bg-[#111] p-8 md:border-b-0 md:border-r-4">
          <h2 className="mb-8 text-2xl font-black uppercase">Toolkit</h2>
          <SkillsCloud />
        </div>
        <div className="bg-[#111] p-8">
          <h2 className="mb-8 text-2xl font-black uppercase">Extras</h2>
          <ProjectLinks />
          <p className="mt-12 text-xs uppercase tracking-wider text-white/40">
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
    </main>
  );
}
