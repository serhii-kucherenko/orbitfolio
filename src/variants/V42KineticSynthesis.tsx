"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Kinetic Synthesis — modular synth rack: knobs, patch cables, and career modules */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#16141c] text-[#f0eef5] overflow-x-hidden">
      <header className="mx-auto max-w-6xl px-6 pb-8 pt-20 md:px-10">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#ff7a59]">
          Eurorack CV · kinetic synthesis · {cv.location}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-[#ffb39a]">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-white/60">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#ff7a59] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#16141c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb39a]"
          >
            Patch hire
          </a>
          <a
            href="/resume"
            className="border border-[#ff7a59]/50 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#ffb39a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb39a]"
          >
            Patch sheet
          </a>
          <ContactRow className="text-white/60" />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-3 border border-white/10 bg-[#0e0c14] p-4 sm:grid-cols-2 lg:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <div key={h.label} className="border border-white/10 bg-[#1f1c28] p-4">
              <div className="flex items-center justify-between">
                <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-wider text-white/40">
                  Mod {i + 1}
                </p>
                <motion.div
                  className="h-10 w-10 rounded-full border-2 border-[#ff7a59] bg-[#16141c]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 35% 30%, #ffb39a 0%, transparent 45%), radial-gradient(circle at 50% 50%, #1f1c28 40%, #0e0c14 70%)",
                  }}
                  animate={reduce ? undefined : { rotate: [0, 25, -10, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                />
              </div>
              <p className="mt-4 text-3xl font-black text-[#ffb39a]">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">{h.label}</p>
            </div>
          ))}
        </div>
        {!reduce && (
          <svg className="mt-2 h-8 w-full opacity-40" aria-hidden>
            <path
              d="M40 4 C120 4, 160 28, 280 12 S480 4, 620 20"
              fill="none"
              stroke="#ff7a59"
              strokeWidth="2"
            />
            <path
              d="M80 20 C200 8, 300 28, 440 10 S700 24, 800 8"
              fill="none"
              stroke="#7dd3c7"
              strokeWidth="1.5"
            />
          </svg>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="mb-10 text-2xl font-bold text-[#ffb39a]">Sequenced roles</h2>
        <ExperienceList tone="dark" />
        <div className="mt-20 grid gap-14 border-t border-white/10 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-semibold">Oscillator bank</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold">Output bus</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Synthesis closes Gamma — motion vocabulary without losing the hire CTA.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/35">
          Pull the best kinetic ideas into one readable close — email still wins.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Kinetic synthesis closes Gamma with a readable hire close.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Kinetic synthesis closes Gamma with a readable hire close.
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
