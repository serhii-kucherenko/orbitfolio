"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

const STEPS = ["T-3 Systems", "T-2 Crew", "T-1 Proof", "LIFTOFF"] as const;

/** Launch Sequence CV — countdown console; GSAP reveals the pad after liftoff controls. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [step, setStep] = useState(0);
  const label = STEPS[Math.min(step, STEPS.length - 1)] ?? STEPS[0];
  const padRef = useRef<HTMLElement>(null);
  useGsapReveal(padRef, reduce);

  return (
    <main className="min-h-screen bg-[#120a06] text-[#ffe8d6]">
      <header className="border-b border-orange-500/30 bg-gradient-to-b from-[#2a1408] to-[#120a06] px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.5em] text-orange-400">
              Launch sequence · GSAP · {cv.location} · {label}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-none sm:text-7xl">
              {cv.name}
            </h1>
            <p className="mt-4 text-orange-200">{cv.title}</p>
          </div>
          <div className="flex gap-2">
            {STEPS.map((s, i) => (
              <button
                key={s}
                type="button"
                onClick={() => setStep(i)}
                className={`h-12 w-12 rounded-full border text-xs font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 ${
                  step >= i
                    ? "border-orange-400 bg-orange-500 text-black"
                    : "border-orange-500/30 text-orange-200/50"
                }`}
                aria-pressed={step === i}
              >
                {i === STEPS.length - 1 ? "GO" : `T-${STEPS.length - 1 - i}`}
              </button>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-sm leading-8 text-white/65">{cv.summary}</p>
        <div className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="bg-orange-500 px-6 py-3 text-xs font-black uppercase tracking-widest text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
          >
            Request clearance
          </a>
          <a
            href="/resume"
            className="border border-orange-400/50 px-5 py-3 text-xs font-black uppercase tracking-widest text-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
          >
            Flight plan / resume
          </a>
          <ContactRow className="text-orange-100/70" />
        </div>
      </header>

      <section ref={padRef} className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            data-gsap
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {step === 0 && (
              <div className="grid gap-4 sm:grid-cols-4">
                {cv.highlights.map((h) => (
                  <div key={h.label} className="border border-orange-500/30 bg-orange-500/5 p-5">
                    <p className="text-3xl font-black text-orange-300">{h.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">{h.label}</p>
                  </div>
                ))}
              </div>
            )}
            {step === 1 && <ExperienceList tone="dark" />}
            {step === 2 && (
              <div className="grid gap-12 md:grid-cols-2">
                <SkillsCloud />
                <ProjectLinks />
              </div>
            )}
            {step >= 3 && (
              <div className="space-y-12">
                <div className="grid gap-4 sm:grid-cols-4">
                  {cv.highlights.map((h) => (
                    <div key={h.label} className="border border-orange-400 bg-orange-500/10 p-5">
                      <p className="text-3xl font-black text-orange-200">{h.value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">{h.label}</p>
                    </div>
                  ))}
                </div>
                <ExperienceList tone="dark" />
                <div className="grid gap-12 md:grid-cols-2">
                  <SkillsCloud />
                  <div>
                    <ProjectLinks />
                    <p className="mt-10 text-sm text-white/45">
                      {cv.education.degree} · {cv.education.school}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {step < 3 && (
          <p className="mt-10 font-[family-name:var(--font-mono)] text-xs text-orange-300/60">
            Advance the sequence (GO) for the full flight package
          </p>
        )}
        <p className="mt-12 border-t border-orange-500/20 pt-6 text-sm text-white/45">
          {cv.education.degree} · {cv.education.school}
        </p>
      </section>
    </main>
  );
}
