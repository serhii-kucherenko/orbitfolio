"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Warp Type Corridor — vanishing-point typography tunnel; name stretches into depth before evidence unfolds. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const parts = cv.name.split(" ");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050508] text-[#f0f0ff]">
      <header className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 80%, #14532d44 0%, transparent 55%), linear-gradient(180deg, #050508 0%, #0a120e 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 49%, #4ade8033 50%, transparent 51%), linear-gradient(0deg, #4ade8022 1px, transparent 1px)",
            backgroundSize: "12% 100%, 100% 28px",
            transform: reduce ? undefined : "perspective(600px) rotateX(58deg)",
            transformOrigin: "50% 100%",
          }}
        />
        <p className="relative z-10 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.5em] text-[#4ade80]">
          Corridor · warp in · {cv.location}
        </p>
        <div
          className="relative z-10 mt-8 w-full max-w-5xl text-center"
          style={{
            perspective: reduce ? undefined : "900px",
          }}
        >
          {parts.map((part, i) => (
            <motion.h1
              key={part}
              initial={
                reduce
                  ? false
                  : { opacity: 0, z: -200, scale: 2.4 - i * 0.3, filter: "blur(8px)" }
              }
              animate={{ opacity: 1, z: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: reduce ? 0 : i * 0.2, duration: 0.9 }}
              className="font-[family-name:var(--font-display)] text-[14vw] font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-[10vw]"
              style={{
                transformOrigin: "50% 100%",
                transform: reduce ? undefined : `rotateX(${8 - i * 2}deg)`,
                color: i === 0 ? "#bbf7d0" : "#4ade80",
              }}
            >
              {part}
            </motion.h1>
          ))}
        </div>
        <p className="relative z-10 mt-10 max-w-lg text-center text-sm leading-7 text-white/55">
          {cv.summary}
        </p>
        <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#4ade80] px-6 py-2.5 text-sm font-bold text-[#050508] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]"
          >
            Enter hiring lane
          </a>
          <a
            href="/resume"
            className="border border-[#4ade80]/50 px-5 py-2.5 text-sm text-[#bbf7d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4ade80]"
          >
            Exit to resume
          </a>
          <ContactRow className="justify-center text-white/50" />
        </div>
        <p className="relative z-10 mt-4 text-sm text-[#4ade80]">{cv.title}</p>
      </header>

      <section className="relative z-10 mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border-l border-[#4ade80]/40 pl-4">
            <p className="text-2xl font-black text-[#bbf7d0]">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider opacity-45">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="relative z-10 mx-auto max-w-3xl space-y-16 px-6 py-16">
        <div>
          <h2 className="mb-8 text-center text-xs font-bold uppercase tracking-[0.4em] text-[#4ade80]">
            Depth stations
          </h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Signal stack</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Exit links</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm opacity-45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
