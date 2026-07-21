"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Hybrid Liquid Brief — molten ink blobs frame a terse executive brief */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
      <main
        className="relative min-h-screen overflow-hidden"
        style={{
          background: "#07141a",
          color: "#e6f7f4",
        }}
      >
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-[60%_40%_55%_45%] opacity-50 blur-2xl"
            style={{ background: "#0d9488" }}
            animate={{ borderRadius: ["60% 40% 55% 45%", "45% 55% 40% 60%", "60% 40% 55% 45%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-40 h-80 w-80 rounded-[40%_60%_45%_55%] opacity-40 blur-2xl"
            style={{ background: "#0369a1" }}
            animate={{ borderRadius: ["40% 60% 45% 55%", "55% 45% 60% 40%", "40% 60% 45% 55%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-3xl px-6 py-24">
        <div
          className="border px-8 py-12 backdrop-blur-md md:px-12 md:py-16"
          style={{
            borderColor: "#2dd4bf33",
            background: "linear-gradient(160deg, #0c222aee 0%, #07141add 100%)",
          }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#5eead4]">
            Liquid brief · {cv.location}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl">
            {cv.name}
          </h1>
          <p className="mt-3 text-[#5eead4]">{cv.title}</p>
          <p className="mt-6 text-sm leading-7 opacity-75">{cv.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="px-6 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14b8a6]"
              style={{ background: "#14b8a6", color: "#042f2e" }}
            >
              Pour a hire thread
            </a>
            <a
              href="/resume"
              className="border border-teal-300/40 px-5 py-2.5 text-sm text-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14b8a6]"
            >
              Molten brief / resume
            </a>
            <ContactRow className="text-white/60" />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cv.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={reduce ? false : { y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: reduce ? 0 : 0.08 * i }}
                className="p-4 text-center"
                style={{
                  background: "rgba(45, 212, 191, 0.08)",
                  borderRadius: `${40 + i * 5}% ${60 - i * 5}% ${45 + i * 3}% ${55 - i * 3}%`,
                }}
              >
                <p className="text-2xl font-bold text-[#5eead4]">{h.value}</p>
                <p className="mt-1 text-[10px] uppercase opacity-45">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold">Flow of work</h2>
          <ExperienceList tone="dark" />
        </section>

        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Viscosity</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Puddles shipped</h2>
            <ProjectLinks />
            <p className="mt-8 text-sm opacity-45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </section>
      </div>
      </main>
    </SmoothScroll>
  );
}
