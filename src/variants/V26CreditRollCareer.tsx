"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Credit Roll Career — end-credit billing for every contributor-era. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#040404] text-[#f5e6c8]">
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.08),transparent_55%)]"
          animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <p className="relative text-[10px] uppercase tracking-[0.55em] text-amber-200/50">
          Feature presentation · {cv.location}
        </p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mt-6 font-[family-name:var(--font-serif)] text-5xl sm:text-7xl"
        >
          {cv.name}
        </motion.h1>
        <p className="relative mt-4 text-sm uppercase tracking-[0.2em] text-amber-100/60">{cv.title}</p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="border border-amber-200/40 bg-amber-200/10 px-6 py-2.5 text-sm tracking-wide text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
          >
            Cast for next production
          </a>
          <a
            href="/resume"
            className="border border-amber-200/25 px-6 py-2.5 text-sm tracking-wide text-amber-100/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
          >
            Credit sheet
          </a>
        </div>
        <ContactRow className="relative mt-6 justify-center text-amber-100/55" />
      </section>

      <motion.section
        className="relative mx-auto max-w-lg px-6 pb-8 text-center"
        animate={reduce ? undefined : { y: [24, 0] }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-16 h-24 bg-gradient-to-b from-[#040404] to-transparent"
        />
        <p className="text-sm leading-7 text-white/55">{cv.summary}</p>

        <div className="mt-16 space-y-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-amber-200/40">Cast &amp; crew</p>
          {cv.experience.map((job) => (
            <article key={`${job.company}-${job.period}`}>
              <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/45">{job.period}</p>
              <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl">{job.role}</h2>
              <p className="mt-1 text-amber-100/55">
                {job.company} · {job.place}
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/50">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 24)}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-3 sm:grid-cols-2">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-amber-200/15 px-4 py-5">
              <p className="font-[family-name:var(--font-serif)] text-2xl text-amber-100">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-amber-200/40">{h.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="mx-auto max-w-3xl space-y-14 px-6 py-20 text-left">
        <div>
          <h2 className="mb-6 text-center text-[10px] uppercase tracking-[0.4em] text-amber-200/40">
            Technical departments
          </h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-6 text-center text-[10px] uppercase tracking-[0.4em] text-amber-200/40">
            Selected titles
          </h2>
          <ProjectLinks />
        </div>
        <p className="text-center text-xs text-white/35">
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </section>
    </main>
  );
}
