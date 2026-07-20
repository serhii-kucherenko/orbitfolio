"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000814] text-cyan-50">
      <div
        className="absolute inset-x-0 bottom-0 h-[55vh] opacity-90"
        style={{
          background:
            "linear-gradient(#00f0ff22,transparent), repeating-linear-gradient(90deg,#00f0ff33 0 1px,transparent 1px 48px), repeating-linear-gradient(#00f0ff33 0 1px,transparent 1px 48px)",
          transform: "perspective(600px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />
      {!reduce && (
        <div className="pointer-events-none absolute inset-x-0 top-1/3 h-px animate-pulse bg-cyan-400/50 shadow-[0_0_20px_#00f0ff]" />
      )}
      <Starfield density={80} color="#00f0ff" speed={0.14} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-28">
        <div className="mb-6 flex flex-wrap items-center gap-3 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.35em] text-cyan-500">
          <span className="rounded border border-cyan-400/40 px-2 py-1 text-cyan-300">GRID ONLINE</span>
          <span>SECTOR VAN</span>
          <span className="text-cyan-700">|</span>
          <span>LIGHTCYCLE IDLE</span>
        </div>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl"
          style={{ textShadow: "0 0 20px #00f0ff" }}
        >
          {cv.name}
        </motion.h1>
        <p className="mt-4 text-cyan-300">{cv.title}</p>
        <p className="mt-6 text-sm text-white/60">{cv.summary}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {cv.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded border border-cyan-400/40 bg-cyan-950/40 px-4 py-2 font-[family-name:var(--font-mono)] text-xs"
            >
              <span className="text-cyan-300">{h.value}</span>
              <span className="ml-2 text-white/40">{h.label}</span>
            </div>
          ))}
        </div>
        <section className="mt-14 rounded-xl border border-cyan-400/20 bg-black/50 p-6">
          <p className="mb-4 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-cyan-500">
            MISSION LOG
          </p>
          <ExperienceList tone="dark" />
        </section>
        <section className="mt-14">
          <SkillsCloud />
          <div className="mt-8">
            <ProjectLinks />
            <ContactRow className="mt-8" />
          </div>
        </section>
      </div>
    </main>
  );
}
