"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

/** Aurora Motion Ledger — night-sky bookkeeping; GSAP reveals career entries on scroll. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const entriesRef = useRef<HTMLElement>(null);
  useGsapReveal(entriesRef, reduce);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061018] text-[#e8f7f4]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          { top: "8%", color: "rgba(34,211,238,0.35)", duration: 14 },
          { top: "28%", color: "rgba(52,211,153,0.28)", duration: 18 },
          { top: "52%", color: "rgba(125,211,252,0.22)", duration: 22 },
        ].map((band) => (
          <motion.div
            key={band.top}
            className="absolute left-[-20%] h-32 w-[140%] blur-3xl"
            style={{ top: band.top, background: `linear-gradient(90deg, transparent, ${band.color}, transparent)` }}
            animate={reduce ? undefined : { x: ["-8%", "8%", "-8%"] }}
            transition={{ duration: band.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <header className="relative mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-cyan-300/25 pb-8">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-cyan-200/70">
              Ledger · Vol. Aurora · GSAP · balanced
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black tracking-tight sm:text-7xl">
              {cv.name}
            </h1>
          </div>
          <div className="max-w-sm text-right">
            <p className="text-sm font-semibold text-emerald-200">{cv.title}</p>
            <p className="mt-2 text-xs text-white/50">{cv.location}</p>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-8 text-white/70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="bg-cyan-300 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#061018] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
          >
            Hire — open ledger
          </a>
          <a
            href="/resume"
            className="border border-cyan-300/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
          >
            Export resume
          </a>
          <ContactRow className="text-cyan-100/70" />
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="overflow-hidden border border-cyan-300/20 bg-black/40">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-cyan-300/20 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-cyan-200/50">
            <span className="px-4 py-3">Entry</span>
            <span className="px-4 py-3">Debit</span>
            <span className="px-4 py-3">Credit</span>
          </div>
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-cyan-300/10 font-[family-name:var(--font-mono)] text-sm"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="px-4 py-4 text-white/55">{h.label}</span>
              <span className="px-4 py-4 text-emerald-300">{h.value}</span>
              <span className="px-4 py-4 text-cyan-200/80">shipped</span>
            </motion.div>
          ))}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-cyan-200/40">
            <span className="px-4 py-3">Closing</span>
            <span className="px-4 py-3 text-emerald-300/70">proof held</span>
            <span className="px-4 py-3">ready to hire</span>
          </div>
        </div>
      </section>

      <section ref={entriesRef} className="relative mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 data-gsap className="mb-10 font-[family-name:var(--font-display)] text-3xl font-bold text-cyan-100">
          Career entries
        </h2>
        <div data-gsap>
          <ExperienceList tone="dark" />
        </div>
        <div data-gsap className="mt-20 grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-emerald-200">Skill accounts</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-emerald-200">Lab links</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Aurora wash is atmosphere — GSAP opens the ledger entries once the bands settle.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Gamma · kinetic · GSAP
        </p>
      </footer>
    </main>
  );
}
