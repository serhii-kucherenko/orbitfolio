"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

/** Velocity Case Chapters — speedway chapters; GSAP reveals the case lap. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const lapRef = useRef<HTMLElement>(null);
  useGsapReveal(lapRef, reduce);
  const snap = reduce ? "" : "snap-y snap-mandatory";

  return (
    <main className={`h-screen overflow-x-hidden overflow-y-auto bg-[#090b0f] text-white ${snap}`}>
      <section className="relative flex min-h-screen snap-start flex-col justify-end overflow-hidden px-6 pb-16 pt-24 md:px-14">
        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 flex w-full gap-3 opacity-30"
            animate={{ x: ["-20%", "0%"] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="h-full w-2 bg-lime-400"
                style={{ opacity: 0.15 + (i % 5) * 0.1, transform: `skewX(-18deg)` }}
              />
            ))}
          </motion.div>
        )}
        <p className="relative font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.5em] text-lime-400">
          Lap 00 · Start · {cv.location}
        </p>
        <h1 className="relative mt-4 max-w-5xl font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-8xl md:text-9xl">
          {cv.name}
        </h1>
        <p className="relative mt-6 text-lg text-lime-300/90">{cv.title}</p>
        <p className="relative mt-4 max-w-2xl text-sm leading-7 text-white/60">{cv.summary}</p>
        <div className="relative mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="bg-lime-400 px-6 py-3 text-xs font-black uppercase tracking-widest text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
          >
            Hire at speed
          </a>
          <a
            href="/resume"
            className="border border-lime-400/50 px-6 py-3 text-xs font-black uppercase tracking-widest text-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
          >
            Timing sheet
          </a>
          <ContactRow className="text-white/70" />
        </div>
      </section>

      <section className="min-h-screen snap-start border-t-8 border-lime-400 bg-[#12161e] px-6 py-20 md:px-14">
        <h2 className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.4em] text-lime-400">
          Lap 01 · Telemetry
        </h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="border border-white/10 bg-black/40 p-6"
              initial={reduce ? false : { x: -40, opacity: 0 }}
              whileInView={reduce ? undefined : { x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 120 }}
            >
              <p className="text-4xl font-black text-lime-400">{h.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-white/45">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={lapRef} className="min-h-screen snap-start bg-[#090b0f] px-6 py-20 md:px-14">
        <h2 data-gsap className="mb-12 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.4em] text-lime-400">
          Lap 02 · Case chapters
        </h2>
        <div data-gsap className="mx-auto max-w-4xl">
          <ExperienceList tone="dark" />
        </div>
      </section>

      <section className="min-h-screen snap-start bg-lime-400 px-6 py-20 text-black md:px-14">
        <h2 className="mb-10 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.4em]">
          Lap 03 · Pit / Lab
        </h2>
        <div className="grid gap-14 lg:grid-cols-2">
          <SkillsCloud tone="light" />
          <div>
            <ProjectLinks tone="light" />
            <p className="mt-12 text-sm opacity-70">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Velocity chapters move fast — each beat still lands on a complete case.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Velocity chapters move fast — each beat still lands complete.
        </p>
        <p className="mx-auto mt-2 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Lab · depth floor · 115
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Gamma · kinetic · craft depth
        </p>
      </footer>
</main>
  );
}
