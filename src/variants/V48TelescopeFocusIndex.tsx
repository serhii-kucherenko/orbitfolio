"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Telescope Focus Index — observatory eyepiece: dial focus to sharpen sections of the career sky */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [focus, setFocus] = useState(2);
  const blurFor = (index: number) => {
    if (reduce) return 0;
    return Math.min(6, Math.abs(index - focus) * 2.5);
  };

  return (
    <main className="min-h-screen bg-[#04060f] text-[#dce6ff]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 70% 18%, #fff, transparent), radial-gradient(1.5px 1.5px at 40% 70%, #a5f3fc, transparent), radial-gradient(1px 1px at 85% 60%, #fff, transparent)",
          backgroundSize: "100% 100%",
        }}
        aria-hidden
      />

      <header className="relative mx-auto max-w-5xl px-6 pb-10 pt-24 md:px-10">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em] text-cyan-300/70">
          Observatory · focus index
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl leading-tight sm:text-7xl">{cv.name}</h1>
        <p className="mt-3 text-cyan-200">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-white/60">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="border border-cyan-300/50 bg-cyan-300/10 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Request observation time
          </a>
          <a
            href="/resume"
            className="border border-white/25 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Chart / resume
          </a>
          <ContactRow className="text-cyan-100/60" />
        </div>

        <label className="mt-12 block max-w-md">
          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-cyan-300/60">
            Focus ring · {["metrics", "career", "skills", "lab"][focus]}
          </span>
          <input
            type="range"
            min={0}
            max={3}
            step={1}
            value={focus}
            onChange={(e) => setFocus(Number(e.target.value))}
            className="mt-3 w-full accent-cyan-300"
          />
        </label>
      </header>

      <section className="relative mx-auto max-w-5xl space-y-10 px-6 pb-24 md:px-10">
        <motion.div style={{ filter: `blur(${blurFor(0)}px)` }} className="transition-[filter]">
          <h2 className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-cyan-300">
            Magnitudes
          </h2>
          <div className="grid gap-6 sm:grid-cols-4">
            {cv.highlights.map((h) => (
              <div key={h.label} className="border-t border-cyan-400/30 pt-4 text-center sm:text-left">
                <p className="text-2xl font-bold text-cyan-100">{h.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">{h.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ filter: `blur(${blurFor(1)}px)` }} className="transition-[filter]">
          <h2 className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-cyan-300">
            Catalog entries
          </h2>
          <ExperienceList tone="dark" />
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div style={{ filter: `blur(${blurFor(2)}px)` }} className="transition-[filter]">
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-cyan-300">
              Spectrum
            </h2>
            <SkillsCloud />
          </motion.div>
          <motion.div style={{ filter: `blur(${blurFor(3)}px)` }} className="transition-[filter]">
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-cyan-300">
              Deep field
            </h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
