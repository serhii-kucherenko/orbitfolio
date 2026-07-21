"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type PointerEvent } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { FallbackGlow, SceneMonolith, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Mouse Reveal Monolith — monumental name; pointer peels stone to reveal the career. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const accent = "#e2e8f0";
  const [spot, setSpot] = useState({ x: 50, y: 35 });

  function onMove(e: PointerEvent<HTMLElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    setSpot({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }

  return (
    <main className="min-h-screen bg-[#070709] text-zinc-100" onPointerMove={onMove}>
      <section className="relative grid min-h-[90vh] items-end gap-8 overflow-hidden px-6 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-95 lg:hidden"
          style={{
            background: `radial-gradient(circle at ${spot.x}% ${spot.y}%, transparent 0%, transparent 14%, #070709 46%)`,
          }}
        />
        <div className="relative z-10">
          <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500">
            Monolith · {cv.location} · {reduce ? "static reveal" : "move to peel"}
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-black leading-[0.95] sm:text-7xl md:text-8xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-4 text-lg text-zinc-400">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400/80">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="inline-flex border border-white/30 bg-white px-5 py-2.5 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Carve a role
            </a>
            <a
              href="/resume"
              className="inline-flex border border-white/25 px-5 py-2.5 text-sm text-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Stone rubbing
            </a>
            <ContactRow className="text-zinc-500" />
          </div>
        </div>
        <WebGLStage
          accent={accent}
          reduce={reduce}
          label="Three.js scanning monolith sculpture"
          className="relative mx-auto h-[min(52vh,420px)] w-full max-w-md overflow-hidden"
          fallback={<FallbackGlow accent={accent} />}
        >
          <SceneMonolith accent={accent} />
        </WebGLStage>
      </section>

      <section className="mx-auto max-w-4xl space-y-16 px-6 pb-28">
        <div className="grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.05 }}
              className="border border-white/10 bg-white/[0.03] px-4 py-5"
            >
              <p className="text-2xl font-bold">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">{h.label}</p>
            </motion.div>
          ))}
        </div>
        <div>
          <h2 className="mb-8 text-xs uppercase tracking-[0.35em] text-zinc-500">Beneath the stone</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-14 border-t border-white/10 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xs uppercase tracking-[0.35em] text-zinc-500">Grain</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xs uppercase tracking-[0.35em] text-zinc-500">Carvings</h2>
            <ProjectLinks />
            <p className="mt-10 text-xs text-zinc-600">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
