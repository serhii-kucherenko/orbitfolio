"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Brutal Sunday Press — hard rules, stamps, unapologetic type; urgent newsprint. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="flex items-center justify-between border-b-4 border-[#ff2a2a] px-4 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#ff2a2a] md:px-8">
        <span>Sunday press</span>
        <span>Brutal edition · late city</span>
        <span>{cv.location}</span>
      </div>

      <header className="border-b-8 border-[#ff2a2a] px-4 py-10 md:px-8">
        <motion.h1
          initial={reduce ? false : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="font-[family-name:var(--font-display)] text-[11vw] font-black uppercase leading-[0.78] tracking-[-0.07em]"
        >
          {cv.name.split(" ").map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </motion.h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xl font-black uppercase text-[#ff2a2a]">{cv.title}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">{cv.summary}</p>
            <ContactRow className="mt-6 text-white/45" />
          </div>
          <div className="flex flex-col items-start justify-end gap-4 md:items-end">
            <motion.div
              aria-hidden
              animate={reduce ? undefined : { rotate: [-8, -4, -8] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="border-4 border-[#ff2a2a] px-4 py-2 text-lg font-black uppercase tracking-wide text-[#ff2a2a]"
            >
              Extra · hire
            </motion.div>
            <a
              href={`mailto:${cv.email}`}
              className="bg-[#ff2a2a] px-6 py-3 text-sm font-black uppercase tracking-wide text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff2a2a]"
            >
              Hire now
            </a>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-2 border-b-4 border-white md:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border-r-4 border-white p-5 last:border-r-0">
            <p className="text-4xl font-black">{h.value}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#ff2a2a]">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="px-4 py-14 md:px-8">
        <h2 className="mb-3 inline-block bg-white px-3 py-1 font-[family-name:var(--font-display)] text-3xl font-black uppercase text-black">
          Impact pages
        </h2>
        <p className="mb-10 max-w-xl text-xs uppercase tracking-[0.25em] text-white/40">
          No soft focus · every employer gets ink
        </p>
        <ExperienceList tone="dark" />
      </section>

      <section className="grid border-t-8 border-[#ff2a2a] md:grid-cols-2">
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
