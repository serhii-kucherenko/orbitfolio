"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { FallbackGlow, SceneParticleFleet, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Telemetry Tape — aviation FDR ticker with WebGL particle fleet under the CRT. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const ticker = cv.highlights.map((h) => `${h.label.toUpperCase()}:${h.value}`).join("   ···   ");
  const tape = `${ticker}   ···   ${ticker}   ···   `;
  const accent = "#c8e06a";

  return (
    <main className="relative min-h-screen bg-[#0c110b] font-[family-name:var(--font-mono)] text-[#f4e8a8]">
      <WebGLStage
        accent={accent}
        reduce={reduce}
        label="Telemetry particle fleet"
        className="pointer-events-none absolute inset-0 opacity-35"
        fallback={<FallbackGlow accent={accent} />}
      >
        <SceneParticleFleet accent={accent} />
      </WebGLStage>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #c8e06a22 3px)",
        }}
      />
      <div className="relative z-10 border-b border-[#6b8f3c]/40 bg-[#10180e]">
        <motion.p
          className="whitespace-nowrap py-2 text-xs tracking-widest text-[#c8e06a]"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {tape}
          {tape}
        </motion.p>
      </div>

      <header className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-10">
        <p className="text-[10px] uppercase tracking-[0.45em] text-[#9bbf5a]/70">
          FDR · telemetry tape · WebGL · {cv.location}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black text-[#f4e8a8] sm:text-7xl">
          {cv.name}
        </h1>
        <p className="mt-3 text-[#c8e06a]">{cv.title}</p>
        <p className="mt-6 max-w-3xl font-[family-name:var(--font-sans)] text-sm leading-8 text-[#d5e8b8]/70">
          {cv.summary}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="border border-[#c8e06a] bg-[#c8e06a] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#0c110b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8e06a]"
          >
            Ground-to-hire
          </a>
          <a
            href="/resume"
            className="border border-[#c8e06a]/50 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#c8e06a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8e06a]"
          >
            Dump frame PDF
          </a>
          <ContactRow className="text-[#c8e06a]/75" />
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-2 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="border border-[#6b8f3c]/35 bg-[#121a10] p-4"
              initial={reduce ? false : { opacity: 0.3 }}
              whileInView={reduce ? undefined : { opacity: [0.4, 1, 0.85] }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <p className="text-[10px] text-[#9bbf5a]/60">FRAME {String(i + 1).padStart(3, "0")}</p>
              <p className="mt-2 text-3xl font-bold text-[#f4e8a8]">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-[#9bbf5a]/70">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 font-[family-name:var(--font-sans)] md:px-10">
        <h2 className="mb-10 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.35em] text-[#c8e06a]">
          Black-box transcript
        </h2>
        <ExperienceList tone="dark" />
        <div className="mt-20 grid gap-14 border-t border-[#6b8f3c]/25 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.35em] text-[#c8e06a]">
              Sensor suite
            </h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.35em] text-[#c8e06a]">
              External beacons
            </h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
        <p className="mt-12 max-w-2xl text-sm leading-7 text-white/40">
          Tape scroll is telemetry theater — metrics and roles stay readable when the scroll stops.
        </p>
        <p className="mt-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-emerald-500/45">
          Delta · telemetry · signal over noise
        </p>
      </section>
    </main>
  );
}
