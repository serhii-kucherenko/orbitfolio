"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

/** Snap Impact Chapters — viewport chapters; GSAP stages career after the identity snap. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const snap = reduce ? "" : "snap-y snap-mandatory scroll-smooth";
  const rolesRef = useRef<HTMLElement>(null);
  useGsapReveal(rolesRef, reduce);

  return (
    <main className={`h-screen overflow-x-hidden overflow-y-auto bg-[#10141a] text-[#f4f0e8] ${snap}`}>
      <section className="relative grid min-h-screen snap-start place-items-center overflow-hidden bg-[#e8a54b] px-8 py-24 text-[#10141a]">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[#10141a]/10"
          initial={reduce ? false : { x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="relative max-w-4xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em]">
            Chapter 00 · Identity · GSAP · {cv.location}
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 font-[family-name:var(--font-display)] text-6xl font-black leading-[0.9] sm:text-8xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-6 text-xl font-medium">{cv.title}</p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#10141a]/75">{cv.summary}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="inline-block bg-[#10141a] px-6 py-3 text-sm font-bold text-[#e8a54b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10141a]"
            >
              Email to hire
            </a>
            <a
              href="/resume"
              className="inline-block border-2 border-[#10141a] px-6 py-3 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10141a]"
            >
              Resume
            </a>
          </div>
          <ContactRow className="mt-8 text-[#10141a]/70" />
          {!reduce && (
            <p className="mt-14 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#10141a]/50">
              Scroll for chapters ↓
            </p>
          )}
        </div>
      </section>

      <section className="min-h-screen snap-start px-8 py-24">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#e8a54b]/70">
          Chapter 01 · Impact
        </p>
        <h2 className="mt-4 text-5xl font-black">Measured outcomes</h2>
        <div className="mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.06 }}
              className="border border-white/12 bg-white/[0.03] p-6"
            >
              <p className="text-4xl font-black text-[#e8a54b]">{h.value}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/45">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={rolesRef} className="min-h-screen snap-start px-8 py-24">
        <p data-gsap className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#e8a54b]/70">
          Chapter 02 · Career
        </p>
        <h2 data-gsap className="mt-4 mb-12 text-5xl font-black">Roles</h2>
        <div data-gsap className="mx-auto max-w-4xl">
          <ExperienceList tone="dark" />
        </div>
      </section>

      <section className="min-h-screen snap-start bg-[#e8edf2] px-8 py-24 text-[#10141a]">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#10141a]/45">
          Chapter 03 · Systems
        </p>
        <h2 className="mt-4 mb-12 text-5xl font-black">Skills</h2>
        <SkillsCloud tone="light" />
      </section>

      <section className="min-h-screen snap-start px-8 py-24">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#e8a54b]/70">
          Chapter 04 · Lab
        </p>
        <h2 className="mt-4 mb-12 text-5xl font-black">Projects</h2>
        <ProjectLinks />
        <footer className="mt-20 border-t border-white/15 pt-6 text-sm text-white/45">
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </footer>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Snap chapters need full case weight between impact beats.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          GSAP stages the career chapter after the identity snap — hire path stays intact.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Gamma · kinetic · GSAP
        </p>
      </footer>
    </main>
  );
}
