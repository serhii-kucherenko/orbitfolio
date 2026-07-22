"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Hybrid Planet Press — interplanetary news desk: masthead, dateline, stacked dispatches */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const today = "Vancouver desk";

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#ebe8e0] text-[#1a1a1a]">
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
            <div className="flex flex-wrap gap-2">
              <a
                href={`mailto:${cv.email}`}
                className="bg-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ebe8e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Wire the desk
              </a>
              <a
                href="/resume"
                className="border border-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Morning PDF
              </a>
            </div>
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
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : i * 0.04 }}
              className="bg-[#ebe8e0] p-4"
            >
              <p className="font-[family-name:var(--font-display)] text-3xl font-black">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider opacity-50">{h.label}</p>
            </motion.div>
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

      <section className="border-t border-black/20 bg-[#e0ddd4] px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-lg font-black uppercase">Wire services</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-lg font-black uppercase">Extras</h2>
            <ProjectLinks tone="light" />
            <p className="mt-8 text-sm opacity-50">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
      <footer className="border-t-4 border-black px-4 py-8 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-7 opacity-65">
            Steals spatial stagecraft from #10 and press hierarchy from #16. Masthead first, dispatches
            second, extras last — a newspaper that still hires in ten seconds.
          </p>
          <div className="space-y-2">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] opacity-45">
              Final edition · Orbitfolio 98
            </p>
            <a
              href={`mailto:${cv.email}`}
              className="inline-flex bg-black px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#ebe8e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Tip the desk
            </a>
          </div>
        </div>
      </footer>
      
      <footer className="border-t border-black/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-black/55">
          Planet press hybrid — newsprint urgency plus orbital craft, both fully stocked.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-black/55">
          Hybrid ladder craft now means structure, not a motion wrapper around a thin resume.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-black/35">
          Eta · hybrid · craft depth 130
        </p>
      </footer>
</main>
    </SmoothScroll>
  );
}
