"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { FallbackGlow, SceneVeil, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Liquid Metal Type — chrome-sheen display type on industrial charcoal + distorting metal veil. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const accent = "#c0c4cc";

  return (
    <main className="min-h-screen bg-[#0e0e0e] text-[#ececec] overflow-x-hidden">
      <section className="relative overflow-hidden px-6 pb-16 pt-24">
        <WebGLStage
          accent={accent}
          reduce={reduce}
          label="Liquid metal distorting veil"
          className="pointer-events-none absolute inset-0 opacity-50"
          fallback={<FallbackGlow accent={accent} />}
        >
          <SceneVeil accent={accent} />
        </WebGLStage>
        <div className="relative mx-auto max-w-5xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-zinc-500">
            Liquid metal type · WebGL · {cv.location}
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, letterSpacing: "0.12em" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em" }}
            transition={{ duration: reduce ? 0 : 0.9 }}
            className="mt-6 font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[0.9] sm:text-7xl md:text-8xl"
            style={{
              backgroundImage:
                "linear-gradient(115deg, #71717a 0%, #f4f4f5 28%, #a1a1aa 48%, #fafafa 62%, #52525b 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {cv.name}
          </motion.h1>
          <p className="mt-6 text-xl text-zinc-400">{cv.title}</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">{cv.summary}</p>
          <p className="mt-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            Chrome sheen · distorting veil · hire path intact
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="border border-zinc-400/50 bg-gradient-to-b from-zinc-200 to-zinc-400 px-6 py-2.5 text-sm font-bold text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
            >
              Cast a hire note
            </a>
            <a
              href="/resume"
              className="border border-zinc-500 px-6 py-2.5 text-sm font-bold text-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
            >
              Ingot PDF
            </a>
            <ContactRow className="text-zinc-400" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-zinc-800 px-6 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="bg-[#0e0e0e] p-5">
            <p
              className="text-3xl font-bold"
              style={{
                backgroundImage: "linear-gradient(180deg, #fafafa, #71717a)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {h.value}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-600">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 py-16">
        <div>
          <h2 className="mb-8 text-2xl font-bold text-zinc-200">Forged roles</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 border-t border-zinc-800 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold text-zinc-200">Alloy skills</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-zinc-200">Castings</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-zinc-600">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
      <footer className="relative z-10 border-t border-zinc-800 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-zinc-500">
          Mercury headlines, stable body copy — WebGL atmosphere never buries the hire path.
        </p>
      </footer>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Liquid metal type keeps chrome sheen secondary to hire path.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Lab · depth floor · 115
        </p>
      </footer>
</main>
  );
}
