"use client";

import { useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { FallbackGlow, SceneParticleFleet, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Instanced Particle Fleet — compact fleet framing applied-AI leadership + full resume. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const accent = "#69dcff";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061018] text-[#dff8ff]">
      <header className="relative mx-auto min-h-screen max-w-7xl px-6 pb-16 pt-28 md:px-10">
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(#69dcff18 1px, transparent 1px), linear-gradient(90deg, #69dcff18 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative flex justify-between text-[10px] uppercase tracking-[0.35em] text-[#69dcff]/65">
          <span>Fleet control / 06 · {cv.location}</span>
          <span>Applied AI systems online</span>
        </div>
        <div className="relative grid min-h-[72vh] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[#69dcff]">{cv.title}</p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.82] sm:text-8xl">
              {cv.name}
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-7 text-white/60">{cv.summary}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${cv.email}`}
                className="bg-[#69dcff] px-6 py-3 text-sm font-bold text-[#061018] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69dcff]"
              >
                Join your mission
              </a>
              <a
                href="/resume"
                className="border border-[#69dcff]/50 px-5 py-3 text-sm text-[#69dcff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69dcff]"
              >
                Fleet brief / resume
              </a>
              <ContactRow className="items-center text-white/55" />
            </div>
          </div>
          <WebGLStage
            accent={accent}
            reduce={reduce}
            label="Three.js particle fleet around a command core"
            className="relative mx-auto h-[400px] w-full max-w-xl sm:h-[440px]"
            fallback={<FallbackGlow accent={accent} />}
          >
            <SceneParticleFleet accent={accent} />
          </WebGLStage>
        </div>
      </header>

      <section className="relative z-10 border-y border-[#69dcff]/20 bg-[#0a1822]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {cv.highlights.map((highlight) => (
            <div key={highlight.label} className="border-r border-[#69dcff]/15 p-7 last:border-r-0">
              <strong className="text-4xl text-[#69dcff]">{highlight.value}</strong>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] opacity-45">{highlight.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[0.28fr_0.72fr] lg:px-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#69dcff]">Mission history</p>
          <h2 className="mt-4 text-4xl font-bold">Built, led, shipped.</h2>
        </div>
        <ExperienceList tone="dark" />
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pb-28 md:grid-cols-2 lg:px-10">
        <div className="border border-[#69dcff]/20 p-8">
          <h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-[#69dcff]">Fleet capabilities</h2>
          <SkillsCloud />
        </div>
        <div className="border border-[#69dcff]/20 p-8">
          <h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-[#69dcff]">Field prototypes</h2>
          <ProjectLinks />
          <p className="mt-10 text-xs text-white/35">
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
    </main>
  );
}
