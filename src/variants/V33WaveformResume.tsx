"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

/** Waveform Resume — career as an audio waveform; GSAP reveals the track sheet on scroll. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const bars = [28, 52, 40, 78, 35, 90, 48, 66, 42, 88, 55, 72, 38, 95, 60, 44, 80, 50, 70, 58];
  const sheetRef = useRef<HTMLElement>(null);
  useGsapReveal(sheetRef, reduce);

  return (
    <main className="min-h-screen bg-[#04060c] text-[#dbeafe]">
      <header className="mx-auto max-w-4xl px-6 pb-6 pt-24 md:px-8">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#34d399]">
          Waveform · master · GSAP · {cv.location}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">
          {cv.name}
        </h1>
        <p className="mt-3 text-[#34d399]">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#34d399] px-5 py-2.5 text-sm font-bold text-[#04060c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34d399]"
          >
            Drop a line
          </a>
          <a
            href="/resume"
            className="border border-[#34d399]/45 px-5 py-2.5 text-sm font-bold text-[#34d399] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34d399]"
          >
            Stem sheet
          </a>
          <ContactRow className="text-white/55" />
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-10 md:px-8">
        <div className="flex h-32 items-end justify-between gap-1 border border-[#34d399]/20 bg-[#080e1a] px-3 py-4 sm:gap-1.5">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-[#34d399] to-[#60a5fa]"
              style={{ height: `${h}%` }}
              animate={
                reduce
                  ? {}
                  : {
                      height: [`${h}%`, `${Math.min(100, h + 18)}%`, `${h}%`],
                      opacity: [0.55, 1, 0.55],
                    }
              }
              transition={{
                duration: 1.4 + (i % 5) * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.04,
              }}
            />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border-t border-[#34d399]/35 pt-3">
              <p className="text-2xl font-bold text-[#34d399]">{h.value}</p>
              <p className="text-[10px] uppercase tracking-wider opacity-45">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={sheetRef} className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        <div data-gsap className="mb-8 flex items-center gap-3">
          <span className={`h-2 w-2 bg-[#34d399] ${reduce ? "" : "animate-pulse"}`} />
          <h2 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[#34d399]">
            Playhead · experience
          </h2>
        </div>
        <div data-gsap>
          <ExperienceList tone="dark" />
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-14 border-t border-white/10 px-6 pb-24 pt-16 md:grid-cols-2 md:px-8">
        <div data-gsap>
          <h2 className="mb-6 text-xl font-bold">Mix / skills</h2>
          <SkillsCloud />
        </div>
        <div data-gsap>
          <h2 className="mb-6 text-xl font-bold">Tracks</h2>
          <ProjectLinks />
          <p className="mt-10 text-sm opacity-45">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    </main>
  );
}
