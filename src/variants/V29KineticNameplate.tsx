"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

/** Kinetic Nameplate — name as a title sequence; GSAP reveals impact after the settle. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const parts = cv.name.split(" ");
  const impactRef = useRef<HTMLElement>(null);
  useGsapReveal(impactRef, reduce);

  return (
    <main className="overflow-x-hidden bg-[#04110d] text-[#b8ffd0]">
      <header className="relative min-h-[92vh] px-6 pb-16 pt-28 md:px-12">
        <motion.p
          animate={reduce ? undefined : { x: [0, 48, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.55em] text-[#7dffb0]/70"
        >
          {cv.title} · title sequence · GSAP · {cv.location}
        </motion.p>

        <h1 className="mt-16 font-[family-name:var(--font-display)] text-[clamp(3.5rem,16vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.06em]">
          {parts.map((part, i) => (
            <motion.span
              key={part}
              initial={reduce ? false : { x: i % 2 === 0 ? "-18vw" : "18vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: reduce ? 0 : 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {part}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.55 }}
          className="mt-14 ml-auto max-w-xl"
        >
          <p className="text-base leading-8 text-[#b8ffd0]/75">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap justify-end gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="bg-[#b8ffd0] px-5 py-2.5 text-sm font-bold text-[#04110d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8ffd0]"
            >
              Start a conversation
            </a>
            <a
              href="/resume"
              className="border border-[#b8ffd0]/40 px-5 py-2.5 text-sm font-bold text-[#b8ffd0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8ffd0]"
            >
              Title card PDF
            </a>
            <ContactRow className="justify-end text-[#7dffb0]/80" />
          </div>
        </motion.div>

        <div className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:ml-auto sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.7 + i * 0.06 }}
              className="border-t border-[#b8ffd0]/40 pt-3"
            >
              <p className="text-2xl font-black">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider opacity-55">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </header>

      <section ref={impactRef} className="-rotate-1 bg-[#b8ffd0] px-6 py-16 text-[#04110d] md:px-12">
        <h2 data-gsap className="mb-10 text-4xl font-black uppercase tracking-tight sm:text-5xl">Motion / impact</h2>
        <div data-gsap>
          <ExperienceList tone="light" />
        </div>
      </section>

      <section className="grid gap-16 px-6 py-20 md:grid-cols-2 md:px-12">
        <div>
          <h2 className="mb-8 text-3xl font-black uppercase">Stack</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-8 text-3xl font-black uppercase">Output</h2>
          <ProjectLinks />
          <p className="mt-14 text-sm text-[#7dffb0]/55">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Nameplate kinetics sell the first frame — GSAP opens the impact ledger after the title settles.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/40">
          Motion earns the glance; the contact row and experience still close the hire.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Gamma · kinetic · GSAP
        </p>
      </footer>
    </main>
  );
}
