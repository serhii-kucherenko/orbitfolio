"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { FallbackGlow, SceneSpotlight, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Spotlight Installation — dark gallery; one moving spotlight stages claims in turn. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const accent = "#f2c778";

  return (
    <main className="min-h-screen bg-[#060503] text-[#f4eee4]">
      <header className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 overflow-hidden px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-between">
          <div className="flex justify-between border-b border-[#f2c778]/25 pb-4 text-[10px] uppercase tracking-[0.4em] text-[#f2c778]">
            <span>Installation 05 · {cv.location}</span>
            <span>One claim at a time</span>
          </div>
          <div className="py-16">
            <p className="mb-5 text-sm text-[#f2c778]">{cv.title}</p>
            <h1 className="max-w-5xl font-[family-name:var(--font-serif)] text-6xl leading-[0.86] sm:text-8xl lg:text-[7.5rem]">
              {cv.name}
            </h1>
            <p className="mt-10 max-w-xl text-sm leading-7 text-white/55">{cv.summary}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <ContactRow className="text-white/55" />
            <div className="flex flex-wrap gap-3">
              <a
                href="/resume"
                className="border border-[#f2c778]/50 px-6 py-3 text-sm font-bold text-[#f2c778] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2c778]"
              >
                Program notes
              </a>
              <a
                href={`mailto:${cv.email}`}
                className="border border-[#f2c778] bg-[#f2c778] px-6 py-3 text-sm font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2c778]"
              >
                Put my work in focus
              </a>
            </div>
          </div>
        </div>
        <WebGLStage
          accent={accent}
          reduce={reduce}
          label="Moving Three.js spotlight over a sculptural form"
          className="relative h-[min(58vh,460px)] w-full overflow-hidden rounded-sm border border-[#f2c778]/20 bg-black"
          fallback={<FallbackGlow accent={accent} />}
        >
          <SceneSpotlight accent={accent} />
        </WebGLStage>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="mb-14 text-center text-[10px] uppercase tracking-[0.45em] text-[#f2c778]">
          Four illuminated claims
        </p>
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {cv.highlights.map((highlight, index) => (
            <motion.article
              key={highlight.label}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              className={`flex min-h-64 flex-col justify-center border-t border-[#f2c778]/25 ${index % 2 ? "md:translate-y-20" : ""}`}
              style={{
                background: "radial-gradient(circle at 50% 45%, rgba(242,199,120,.16), transparent 55%)",
              }}
            >
              <strong className="font-[family-name:var(--font-serif)] text-6xl text-[#f2c778] sm:text-8xl">
                {highlight.value}
              </strong>
              <span className="mt-4 text-xs uppercase tracking-[0.3em] opacity-55">{highlight.label}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.28fr_0.72fr] md:px-10">
        <h2 className="font-[family-name:var(--font-serif)] text-4xl text-[#f2c778]">The exhibited record</h2>
        <ExperienceList tone="dark" />
      </section>

      <section className="border-t border-[#f2c778]/20 bg-[#0c0a07] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-xs uppercase tracking-[0.35em] text-[#f2c778]">Materials</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-8 text-xs uppercase tracking-[0.35em] text-[#f2c778]">Editions</h2>
            <ProjectLinks />
            <p className="mt-10 text-xs text-white/35">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Spotlight installation frames the candidate — the beam never hides the CTA.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          WebGL atmosphere earns the glance — name, email, and proof close the hire.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Alpha · WebGL · craft depth
        </p>
      </footer>
        <p className="mx-auto mt-2 max-w-5xl text-sm leading-7 text-white/40">
          Lab depth floor · 118 — spotlight craft cannot thin the hire path.
        </p>
</main>
  );
}
