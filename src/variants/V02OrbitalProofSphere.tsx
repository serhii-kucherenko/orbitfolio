"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Orbital Proof Sphere — a tactile evidence planet keeps identity central while proof orbits nearby. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

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
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[650px]" aria-label="Career proof orbit">
          {[46, 64, 82].map((size, index) => (
            <motion.div
              key={size}
              aria-hidden
              className="absolute left-1/2 top-1/2 rounded-full border border-[#b8ff6a]/20"
              style={{ width: `${size}%`, height: `${size}%`, x: "-50%", y: "-50%" }}
              animate={reduce ? undefined : { rotate: index % 2 ? -360 : 360 }}
              transition={{ duration: 38 + index * 14, repeat: Infinity, ease: "linear" }}
            />
          ))}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 aspect-square w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 32% 28%, #e4ffb7 0, #7faf43 16%, #183429 56%, #07110e 72%)",
              boxShadow: "0 0 90px rgba(184,255,106,.18)",
            }}
          />
          {cv.highlights.map((highlight, index) => {
            const positions = [
              "left-[4%] top-[18%]",
              "right-[1%] top-[26%]",
              "bottom-[10%] left-[13%]",
              "bottom-[4%] right-[8%]",
            ];
            return (
              <motion.div
                key={highlight.label}
                initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: reduce ? 0 : 0.2 + index * 0.12 }}
                className={`absolute ${positions[index]} w-28 rounded-xl border border-[#b8ff6a]/35 bg-[#0a1814]/90 p-4 text-center backdrop-blur`}
              >
                <strong className="font-[family-name:var(--font-serif)] text-2xl text-[#b8ff6a]">
                  {highlight.value}
                </strong>
                <span className="mt-1 block text-[9px] uppercase tracking-wider opacity-55">
                  {highlight.label}
                </span>
              </motion.div>
            );
          })}
        </div>
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
    </main>
  );
}
