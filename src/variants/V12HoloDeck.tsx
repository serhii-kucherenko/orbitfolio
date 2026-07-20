"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030b12] text-cyan-50">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,211,238,0.06) 3px)",
        }}
      />
      {!reduce && (
        <div
          className="pointer-events-none absolute inset-x-0 h-24 animate-[scan_4s_linear_infinite] bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
          style={{ top: 0 }}
        />
      )}
      <style>{`@keyframes scan { from { transform: translateY(-20vh); } to { transform: translateY(120vh); } }`}</style>
      <Starfield density={100} color="#22d3ee" speed={0.1} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-28">
        <div className="mb-8 grid grid-cols-2 gap-3 font-[family-name:var(--font-mono)] text-[10px] sm:grid-cols-4">
          {cv.highlights.slice(0, 4).map((h) => (
            <div key={h.label} className="border border-cyan-400/25 bg-cyan-950/30 px-3 py-2">
              <p className="text-cyan-300/60">HUD/{h.label.slice(0, 12).toUpperCase()}</p>
              <p className="mt-1 text-lg text-cyan-100">{h.value}</p>
            </div>
          ))}
        </div>

        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.35em] text-cyan-400">HOLO // PROJECT</p>
        <motion.h1
          className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl"
          style={{ textShadow: "0 0 24px rgba(34,211,238,0.45)" }}
          animate={reduce ? undefined : { opacity: [1, 0.85, 1], x: [0, 0.5, -0.5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          {cv.name}
        </motion.h1>
        <p className="mt-3 text-cyan-200/70">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm text-cyan-50/60">{cv.summary}</p>

        <div className="mt-14 space-y-6">
          {cv.experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={reduce ? false : { opacity: 0, x: i % 2 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-cyan-400/30 bg-cyan-950/20 p-6 backdrop-blur-md"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
              }}
            >
              <p className="text-xs text-cyan-400/70">{job.period}</p>
              <h3 className="mt-1 text-xl">
                {job.role} · {job.company}
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-cyan-50/70">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 24)}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <SkillsCloud />
          <div className="mt-10">
            <ProjectLinks />
            <ContactRow className="mt-8 text-cyan-200" />
          </div>
        </div>
      </div>
    </main>
  );
}
