"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { FallbackGlow, SceneFlythrough, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Hybrid Warp Recruiter — warp corridor WebGL + ten-second hire clarity. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const accent = "#67e8f9";
  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

  return (
    <main className="overflow-hidden bg-[#010609] text-white">
      <header className="relative grid min-h-[92vh] place-items-center px-6 py-24 text-center">
        <WebGLStage
          accent={accent}
          reduce={reduce}
          label="Warp type corridor in Three.js"
          className="absolute inset-0 opacity-55"
          fallback={<FallbackGlow accent={accent} />}
        >
          <SceneFlythrough accent={accent} />
        </WebGLStage>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#010609]/4 via-transparent to-[#010609]" aria-hidden />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
          animate={reduce ? undefined : { scaleX: [0.4, 1, 0.4], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="relative z-10 max-w-5xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.5em] text-cyan-300">
            Hybrid 86 · warp + hire · {cv.location}
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-8 font-[family-name:var(--font-display)] text-6xl font-black sm:text-8xl md:text-9xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">{cv.summary}</p>
          <p className="mt-4 text-cyan-200/80">{cv.title}</p>
          <ContactRow className="mt-8 justify-center text-cyan-100/70" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${cv.email}`} className={`bg-cyan-300 px-6 py-3 font-bold text-black ${focus}`}>
              Recruit me
            </a>
            <a href={cv.github} target="_blank" rel="noreferrer" className={`border border-white/40 px-6 py-3 ${focus}`}>
              View code
            </a>
            <Link href="/resume" className={`border border-white/40 px-6 py-3 ${focus}`}>
              Printable resume
            </Link>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {cv.highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className="border-t border-cyan-300/40 bg-cyan-300/5 pt-4 backdrop-blur-sm"
            >
              <strong className="text-4xl text-cyan-300">{item.value}</strong>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
        <h2 className="mb-10 mt-16 text-4xl font-black">Experience trajectory</h2>
        <ExperienceList tone="dark" />
      </section>

      <section className="relative z-10 grid gap-12 border-t border-white/10 px-6 py-16 md:grid-cols-2 md:px-16">
        <div>
          <h2 className="mb-8 text-3xl font-black">Capability stack</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-8 text-3xl font-black">Shipped work</h2>
          <ProjectLinks />
          <p className="mt-12 text-slate-400">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
      <section className="relative z-10 border-t border-white/10 bg-black/40 px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p className="max-w-xl text-sm text-slate-300">
            Steals warp motion from #30 and ten-second hire clarity from #59 — now with a live corridor stage.
          </p>
          <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">
            <span>Who · Serhii</span>
            <span>What · Founding engineer</span>
            <span>Proof · metrics above</span>
            <span>Motion · WebGL corridor</span>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl gap-3 sm:grid-cols-3">
          {["Warp without trapping scroll", "Glass metrics in the first viewport", "Resume one click away"].map(
            (line) => (
              <p key={line} className="border border-cyan-300/20 px-4 py-3 text-xs text-cyan-100/70">
                {line}
              </p>
            ),
          )}
        </div>
      </section>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Warp + recruiter hybrid must keep the ten-second hire path after the corridor cools.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Hybrid ladder craft now means structure, not a motion wrapper around a thin resume.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Who, what, and proof stay reachable in under ten seconds after the effects settle.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Eta · hybrid · craft depth 130
        </p>
      </footer>
</main>
  );
}
