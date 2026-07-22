"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

/** Signal Scrub Story — edit-bay scrubber; GSAP reveals the experience track on scroll. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [scrub, setScrub] = useState(35);
  const bars = Array.from({ length: 64 }, (_, i) => 20 + ((i * 17) % 70));
  const trackRef = useRef<HTMLElement>(null);
  useGsapReveal(trackRef, reduce);

  return (
    <main className="min-h-screen bg-[#050806] font-[family-name:var(--font-mono)] text-[#9dffb0]">
      <header className="mx-auto max-w-6xl px-6 pb-10 pt-20 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#9dffb0]/55">
          Edit bay · scrub story · GSAP · {cv.location}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black text-white sm:text-7xl">
          {cv.name}
        </h1>
        <p className="mt-3 text-sm text-[#9dffb0]/80">{cv.title}</p>
        <p className="mt-6 max-w-3xl font-[family-name:var(--font-sans)] text-sm leading-8 text-white/60">
          {cv.summary}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="border border-[#9dffb0] px-5 py-2 text-xs uppercase tracking-widest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9dffb0]"
          >
            Send hire cue
          </a>
          <a
            href="/resume"
            className="border border-[#9dffb0]/40 px-5 py-2 text-xs uppercase tracking-widest text-[#9dffb0]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9dffb0]"
          >
            Mixdown / resume
          </a>
          <ContactRow className="text-[#9dffb0]/70" />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="relative border border-[#9dffb0]/25 bg-black/50 p-4">
          <div className="flex h-28 items-end gap-0.5">
            {bars.map((h, i) => {
              const active = (i / bars.length) * 100 <= scrub;
              return (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: active ? "#9dffb0" : "#9dffb033",
                  }}
                  animate={reduce || !active ? undefined : { opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.02 }}
                />
              );
            })}
          </div>
          <div
            className="pointer-events-none absolute bottom-4 top-4 w-px bg-white"
            style={{ left: `calc(${scrub}% + 1rem)` }}
            aria-hidden
          />
          <label className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-wider">
            <span>Playhead {scrub}%</span>
            <input
              type="range"
              min={0}
              max={100}
              value={scrub}
              onChange={(e) => setScrub(Number(e.target.value))}
              className="w-full accent-[#9dffb0]"
            />
          </label>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <div
              key={h.label}
              className="border border-[#9dffb0]/20 p-4 transition-opacity"
              style={{ opacity: scrub > i * 20 ? 1 : 0.25 }}
            >
              <p className="text-2xl font-bold text-white">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider opacity-55">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={trackRef} className="mx-auto max-w-6xl px-6 py-20 font-[family-name:var(--font-sans)] md:px-10">
        <h2 data-gsap className="mb-10 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.35em] text-[#9dffb0]">
          Track · experience
        </h2>
        <div data-gsap>
          <ExperienceList tone="dark" />
        </div>
        <div data-gsap className="mt-20 grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.35em]">
              Mix bus
            </h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.35em]">
              Stems
            </h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
        <p data-gsap className="mt-12 max-w-2xl text-sm leading-7 text-[#9dffb0]/45">
          Scrubbing is the entrance — GSAP opens the full track once the playhead settles.
        </p>
      </section>
    </main>
  );
}
