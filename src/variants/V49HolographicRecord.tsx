"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { FallbackGlow, SceneOrbitProof, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Holographic Record — vinyl hologram + WebGL orbit proof encoding career sides A/B. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const accent = "#22d3ee";

  return (
    <main className="min-h-screen bg-[#08080b] text-white overflow-x-hidden">
      <header className="relative mx-auto grid max-w-6xl items-center gap-12 overflow-hidden px-6 py-20 lg:grid-cols-[1fr_340px] lg:px-12">
        <WebGLStage
          accent={accent}
          reduce={reduce}
          label="Holodisc orbit proof"
          className="pointer-events-none absolute inset-0 opacity-40"
          fallback={<FallbackGlow accent={accent} />}
        >
          <SceneOrbitProof accent={accent} />
        </WebGLStage>
        <div className="relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-cyan-300/70">
            Holodisc · sides A / B · WebGL · {cv.location}
          </p>
          <h1 className="mt-4 bg-gradient-to-r from-cyan-300 via-sky-200 to-amber-200 bg-clip-text font-[family-name:var(--font-display)] text-5xl font-black text-transparent sm:text-7xl">
            {cv.name}
          </h1>
          <p className="mt-4 text-lg text-cyan-200/90">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-8 text-white/60">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="bg-gradient-to-r from-cyan-400 to-amber-300 px-6 py-3 text-xs font-black uppercase tracking-widest text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Press the hire
            </a>
            <a
              href="/resume"
              className="border border-cyan-300/40 px-6 py-3 text-xs font-black uppercase tracking-widest text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Sleeve notes
            </a>
            <ContactRow className="text-white/55" />
          </div>
        </div>

        <motion.div
          className="relative z-10 mx-auto aspect-square w-full max-w-[320px] rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #22d3ee, #fbbf24, #38bdf8, #22d3ee, #fde68a, #22d3ee)",
            padding: 6,
          }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          aria-hidden
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#08080b]">
            <div
              className="flex h-[70%] w-[70%] items-center justify-center rounded-full"
              style={{
                background:
                  "repeating-radial-gradient(circle, transparent 0 6px, rgba(255,255,255,0.06) 6px 7px)",
              }}
            >
              <div className="flex h-16 w-16 items-center justify-center bg-gradient-to-br from-cyan-300 to-amber-300 text-[10px] font-bold text-black">
                A/B
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      <section className="border-y border-white/10 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-amber-500/10 px-6 py-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-white/15 bg-black/50 p-5">
              <p className="bg-gradient-to-r from-cyan-200 to-amber-200 bg-clip-text text-3xl font-black text-transparent">
                {h.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-12">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Side A</h2>
        <h3 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-bold">Groove history</h3>
        <ExperienceList tone="dark" />
        <div className="mt-20 grid gap-14 border-t border-white/10 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Side B · frequencies
            </h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
              Bonus tracks
            </h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
        <p className="mt-14 max-w-2xl text-sm leading-7 text-white/40">
          Iridescence is atmosphere — sides A/B still read as hireable proof under the WebGL orbit.
        </p>
      </section>
    </main>
  );
}
