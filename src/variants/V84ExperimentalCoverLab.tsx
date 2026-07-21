"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Experimental Cover Lab — oversized magazine cover with crop marks and proof overlays */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen" style={{ background: "#2a2420", color: "#faf6f1" }}>
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-8">
        <div
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(165deg, #3d342c 0%, #1f1a16 100%)",
            boxShadow: "0 0 0 1px #f9731633, 0 40px 80px #00000066",
          }}
        >
          <span aria-hidden className="absolute left-3 top-3 h-4 w-4 border-l border-t border-[#f97316]/50" />
          <span aria-hidden className="absolute right-3 top-3 h-4 w-4 border-r border-t border-[#f97316]/50" />
          <span aria-hidden className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-[#f97316]/50" />
          <span aria-hidden className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#f97316]/50" />
          <motion.p
            aria-hidden
            className="pointer-events-none absolute right-10 top-24 rotate-12 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#fb923c]/50"
            animate={reduce ? undefined : { opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Press proof
          </motion.p>

          <div className="px-8 pb-10 pt-14 md:px-14 md:pt-20">
            <div className="flex items-start justify-between gap-4">
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#fb923c]">
                Cover lab · proof A3 · {cv.location}
              </p>
              <p className="font-[family-name:var(--font-mono)] text-[10px] opacity-40">ISSUE 84</p>
            </div>

            <motion.h1
              initial={reduce ? false : { y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.8rem,10vw,7rem)] font-black leading-[0.85] tracking-tight"
            >
              {cv.name.split(" ").map((part, i) => (
                <span key={part} className="block" style={{ color: i === 0 ? "#faf6f1" : "#fb923c" }}>
                  {part}
                </span>
              ))}
            </motion.h1>

            <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="text-lg font-semibold text-[#fb923c]">{cv.title}</p>
                <p className="mt-4 text-sm leading-7 opacity-75">{cv.summary}</p>
              </div>
              <div className="flex flex-col justify-end gap-3">
                <a
                  href={`mailto:${cv.email}`}
                  className="inline-flex w-fit px-5 py-3 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb923c]"
                  style={{ background: "#fb923c", color: "#1f1a16" }}
                >
                  Commission a cover
                </a>
                <a
                  href="/resume"
                  className="inline-flex w-fit border border-[#fb923c]/50 px-5 py-2.5 text-sm text-[#fb923c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb923c]"
                >
                  Tear sheet / resume
                </a>
                <ContactRow className="text-[#faf6f1]/65" />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#fb923c]/25 pt-8 sm:grid-cols-4">
              {cv.highlights.map((h) => (
                <div key={h.label}>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-black text-[#fb923c]">
                    {h.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider opacity-45">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-16 px-2 pb-8 md:px-4">
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold">
            Inside the issue
          </h2>
          <ExperienceList tone="dark" />
        </section>

        <section className="grid gap-12 px-2 pb-24 md:grid-cols-2 md:px-4">
          <div>
            <h2 className="mb-6 text-xl font-bold">Press toolkit</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Back catalog</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm opacity-50">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
