"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { FallbackGlow, SceneParticleFleet, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Hybrid Swarm One Pager — agent particle WebGL + one-page hire clarity. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const accent = "#34d399";
  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300";

  return (
    <main className="relative overflow-hidden bg-[#06100d] text-white overflow-x-hidden">
      <WebGLStage
        accent={accent}
        reduce={reduce}
        label="Agent swarm particle field"
        className="absolute inset-0 opacity-50"
        fallback={<FallbackGlow accent={accent} />}
      >
        <SceneParticleFleet accent={accent} />
      </WebGLStage>
      <div
        aria-hidden
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(#10b98122 1px, transparent 1px), linear-gradient(90deg, #10b98122 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl p-6 md:p-12">
        <header className="grid gap-10 border-b border-emerald-300/20 py-16 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-emerald-300">
              Swarm · one page · {cv.location}
            </p>
            <p className="mt-3 text-emerald-200/80">{cv.title}</p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 font-[family-name:var(--font-display)] text-6xl font-black tracking-tight sm:text-7xl"
            >
              {cv.name}
            </motion.h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{cv.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${cv.email}`}
                className={`bg-emerald-300 px-5 py-2.5 text-sm font-bold text-black ${focus}`}
              >
                Start hiring thread
              </a>
              <Link href="/resume" className={`border border-emerald-300/40 px-5 py-2.5 text-sm ${focus}`}>
                Printable resume
              </Link>
            </div>
            <ContactRow className="mt-7" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {cv.highlights.map((item) => (
              <div key={item.label} className="border-l border-emerald-300/40 bg-emerald-300/5 pl-4 backdrop-blur-sm">
                <strong className="block text-4xl text-emerald-300">{item.value}</strong>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-emerald-100/50">{item.label}</p>
              </div>
            ))}
          </div>
        </header>
        <section className="py-16">
          <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl font-black">
            One-page evidence stream
          </h2>
          <ExperienceList tone="dark" />
        </section>
        <section className="grid gap-12 border-t border-emerald-300/20 py-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl font-black">Agent toolset</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-8 text-3xl font-black">Deployed experiments</h2>
            <ProjectLinks />
            <p className="mt-12 text-slate-400">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </section>
        <section className="border-t border-emerald-300/20 py-12">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              Steals agent energy from #81 and one-page clarity from #69. The swarm is a live particle field;
              the page still answers who, what, and proof before the fold ends.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={`mailto:${cv.email}`}
                className={`bg-emerald-300 px-5 py-2.5 text-sm font-bold text-black ${focus}`}
              >
                Ping the swarm lead
              </a>
              <Link href="/lab" className={`border border-emerald-300/40 px-5 py-2.5 text-sm ${focus}`}>
                Open the lab
              </Link>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Human command stays central", "Agents as atmosphere only", "One-page evidence stream"].map(
              (line) => (
                <p key={line} className="border border-emerald-300/20 px-4 py-3 text-xs text-emerald-100/60">
                  {line}
                </p>
              ),
            )}
          </div>
        </section>
      </div>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Swarm one-pager hybrid — agent field spectacle never replaces the hire strip.
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
