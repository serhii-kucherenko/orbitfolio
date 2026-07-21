"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Command Cases — steals command palette density + case-file clarity */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="bg-[#111315] text-[#f5f0e8]">
      <header className="grid min-h-[75vh] border-b border-amber-300/30 md:grid-cols-[1fr_2fr]">
        <aside className="border-r border-amber-300/30 p-8 font-[family-name:var(--font-mono)] text-amber-300">
          <p>CASE INDEX / 90</p>
          <p className="mt-8">{reduce ? "AUTO: OFF" : "AUTO: READY"}</p>
          {cv.highlights.map((item) => (
            <p key={item.label} className="mt-5">
              {item.value} :: {item.label}
            </p>
          ))}
          <a
            href={`mailto:${cv.email}`}
            className="mt-10 inline-block rounded border border-amber-300 px-4 py-2 text-xs uppercase tracking-wider text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            Open hire channel
          </a>
        </aside>
        <div className="p-8 md:p-16">
          <p className="text-amber-300">{cv.title}</p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-7xl font-black"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-stone-300">{cv.summary}</p>
          <ContactRow className="mt-8" />
        </div>
      </header>
      <div className="grid md:grid-cols-[260px_1fr]">
        <nav className="sticky top-0 h-fit space-y-3 p-8 font-[family-name:var(--font-mono)] text-sm text-amber-300">
          <p>01 IDENTITY</p>
          <p>02 CASE HISTORY</p>
          <p>03 SYSTEMS</p>
          <p>04 OPEN SOURCE</p>
        </nav>
        <div className="border-l border-amber-300/30">
          <section className="p-8 md:p-14">
            <h2 className="mb-10 text-4xl font-black">Employer case history</h2>
            <ExperienceList tone="dark" />
          </section>
          <section className="grid gap-12 border-t border-amber-300/30 p-8 md:grid-cols-2 md:p-14">
            <div>
              <h2 className="mb-8 text-3xl font-black">System inventory</h2>
              <SkillsCloud />
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-black">Project files</h2>
              <ProjectLinks />
              <p className="mt-12 text-stone-400">
                {cv.education.degree} · {cv.education.school}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
