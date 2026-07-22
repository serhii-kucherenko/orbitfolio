"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { FallbackGlow, SceneOrbitProof, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Orbital Proof Sphere — a tactile evidence planet keeps identity central while proof orbits nearby. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const accent = "#b8ff6a";

  return (
    <main className="min-h-screen overflow-hidden bg-[#040e0c] text-[#e5f4dc]">
      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.5em] text-[#b8ff6a]">
            Evidence in orbit · 02 · {cv.location}
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-7 font-[family-name:var(--font-serif)] text-6xl leading-[0.84] sm:text-8xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-8 max-w-md text-base leading-7 text-[#e5f4dc]/65">{cv.summary}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="bg-[#b8ff6a] px-6 py-3 text-sm font-bold text-[#040e0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8ff6a]"
            >
              Bring me into orbit
            </a>
            <a
              href="/resume"
              className="border border-[#b8ff6a]/40 px-6 py-3 text-sm font-bold text-[#b8ff6a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8ff6a]"
            >
              Flight sheet
            </a>
            <span className="text-sm text-[#b8ff6a]/70">{cv.title}</span>
          </div>
          <ContactRow className="mt-7 text-[#e5f4dc]/55" />
          <div className="mt-10 grid max-w-md grid-cols-2 gap-3">
            {cv.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-xl border border-[#b8ff6a]/35 bg-[#0a1814]/90 p-4 backdrop-blur"
              >
                <strong className="font-[family-name:var(--font-serif)] text-2xl text-[#b8ff6a]">
                  {highlight.value}
                </strong>
                <span className="mt-1 block text-[9px] uppercase tracking-wider opacity-55">
                  {highlight.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <WebGLStage
          accent={accent}
          reduce={reduce}
          label="Three.js evidence planet with orbiting proof moons"
          className="relative mx-auto aspect-square w-full max-w-[650px] overflow-hidden"
          fallback={<FallbackGlow accent={accent} />}
        >
          <SceneOrbitProof accent={accent} />
        </WebGLStage>
      </section>

      <section className="mx-auto max-w-7xl border-t border-[#b8ff6a]/20 px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.35fr_0.65fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#b8ff6a]">Flight record</p>
            <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl">Proof has gravity.</h2>
          </div>
          <ExperienceList tone="dark" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-28 lg:grid-cols-2 lg:px-10">
        <div className="rounded-[3rem] border border-[#b8ff6a]/15 bg-[#0a1814] p-8">
          <h2 className="mb-8 font-[family-name:var(--font-serif)] text-3xl">Atmosphere</h2>
          <SkillsCloud />
        </div>
        <div className="p-8">
          <h2 className="mb-8 font-[family-name:var(--font-serif)] text-3xl">Objects in motion</h2>
          <ProjectLinks />
          <p className="mt-12 border-t border-[#b8ff6a]/20 pt-6 text-sm opacity-55">
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Orbital proof is WebGL atmosphere — metrics and hire path stay readable under the sphere.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          WebGL atmosphere earns the glance — name, email, and proof close the hire.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Orbital sphere needs a full dossier ring, not a single canvas beat.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Orbital proof needs a full dossier ring under the sphere — not a thin canvas shell.
        </p>
        <p className="mx-auto mt-2 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Lab · depth floor · 115
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Alpha · WebGL · craft depth
        </p>
      </footer>
</main>
  );
}
