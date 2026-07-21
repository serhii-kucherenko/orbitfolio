"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Planet Press — interplanetary news desk: masthead, dateline, stacked dispatches */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const today = "Vancouver desk";

  return (
    <main className="min-h-screen" style={{ background: "#f4f0e6", color: "#1a1a1a" }}>
      <header className="border-b-4 border-black px-4 py-6 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em]">
                The Planet Press
              </p>
              <h1 className="mt-1 font-[family-name:var(--font-display)] text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
                {cv.name}
              </h1>
            </div>
            <div className="text-right">
              <p className="font-[family-name:var(--font-serif)] text-sm italic opacity-60">{today}</p>
              <p className="text-xs uppercase tracking-wider opacity-50">{cv.location}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-y border-black py-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">{cv.title}</p>
            <a
              href={`mailto:${cv.email}`}
              className="bg-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#f4f0e6]"
            >
              Wire the desk
            </a>
          </div>
          <ContactRow className="mt-3 text-xs" />
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-8">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="columns-1 text-sm leading-7 opacity-80 md:columns-2 md:gap-10"
        >
          {cv.summary}
        </motion.p>

        <div className="mt-10 grid grid-cols-2 gap-px bg-black sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="bg-[#f4f0e6] p-4">
              <p className="font-[family-name:var(--font-display)] text-3xl font-black">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider opacity-50">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-black px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-black uppercase">
            Dispatches
          </h2>
          <p className="mb-10 font-[family-name:var(--font-serif)] text-sm italic opacity-50">
            Filed from every orbit
          </p>
          <ExperienceList tone="light" />
        </div>
      </section>

      <section className="border-t border-black/20 bg-[#ebe6da] px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-lg font-black uppercase">Wire services</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-lg font-black uppercase">Extras</h2>
            <ProjectLinks tone="light" />
            <p className="mt-8 text-sm opacity-50">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
