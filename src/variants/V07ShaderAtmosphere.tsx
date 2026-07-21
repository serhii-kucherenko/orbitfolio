"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Shader Atmosphere — CV floats inside a living volumetric fog field; soft plasma bands replace hard layout boxes. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#02040a] text-[#c8fff0]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-1/4 top-[-10%] h-[70vh] w-[70vw] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #0ea5a044, transparent 70%)" }}
          animate={reduce ? {} : { x: [0, 60, -20, 0], y: [0, 40, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-[-5%] h-[60vh] w-[60vw] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, #36d6ff33, transparent 70%)" }}
          animate={reduce ? {} : { x: [0, -50, 30, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 top-1/3 h-[40vh] w-[40vw] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, #5eead422, transparent 70%)" }}
          animate={reduce ? {} : { scale: [1, 1.15, 0.95, 1], opacity: [0.5, 0.8, 0.4, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #5eead418 3px)",
          }}
        />
      </div>

      <header className="relative z-10 mx-auto max-w-3xl px-6 pb-12 pt-32 text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.5em] text-[#5eead4]/70"
        >
          Atmosphere pass · density live
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1 }}
          className="mt-6 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-7xl"
        >
          {cv.name}
        </motion.h1>
        <p className="mt-4 text-lg text-[#5eead4]/90">{cv.title}</p>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#5eead4] px-6 py-2.5 text-sm font-bold text-[#021018] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
          >
            Open hiring channel
          </a>
          <a
            href="/resume"
            className="border border-[#5eead4]/40 px-5 py-2.5 text-sm text-[#5eead4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
          >
            Printable resume
          </a>
          <ContactRow className="justify-center text-white/60" />
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border-t border-[#5eead4]/35 pt-4">
            <p className="text-3xl font-bold text-[#5eead4]">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="relative z-10 mx-auto max-w-3xl space-y-20 px-6 py-20">
        <div>
          <h2 className="mb-8 text-center font-[family-name:var(--font-display)] text-3xl font-bold">
            Density through roles
          </h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Palette / skills</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold">Scattered light</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
