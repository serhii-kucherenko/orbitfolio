"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Holo Proof — iridescent proof cards stacked like a holographic ID deck */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const holo =
    "linear-gradient(125deg, #67e8f855, #a78bfa44, #f472b655, #34d39955, #67e8f855)";

  return (
    <main
      className="min-h-screen"
      style={{
        background: "#06070c",
        color: "#f0f4ff",
        backgroundImage:
          "radial-gradient(ellipse at 20% 0%, #1a1040 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #0a2030 0%, transparent 40%)",
      }}
    >
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-24">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#c4b5fd]"
        >
          Holo proof · authenticated
        </motion.p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">
          {cv.name}
        </h1>
        <p className="mt-3 text-[#67e8f9]">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm leading-7 opacity-70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="relative overflow-hidden px-5 py-2.5 text-sm font-semibold"
            style={{ background: holo, color: "#06070c" }}
          >
            Verify & hire
          </a>
          <ContactRow className="text-white/60" />
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-6 pb-16 perspective-[800px]">
        {cv.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={reduce ? false : { rotateY: -18, opacity: 0, x: -20 }}
            animate={{ rotateY: reduce ? 0 : i * 4 - 6, opacity: 1, x: 0 }}
            transition={{ delay: reduce ? 0 : 0.1 * i, type: "spring", stiffness: 80 }}
            className="relative w-[140px] overflow-hidden rounded-xl border p-5 sm:w-[160px]"
            style={{
              borderColor: "#ffffff22",
              background: "linear-gradient(160deg, #1a1f35 0%, #0d111f 100%)",
              boxShadow: "0 20px 40px #00000088, inset 0 1px 0 #ffffff22",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: holo }}
            />
            <p className="relative font-[family-name:var(--font-display)] text-3xl font-bold">
              {h.value}
            </p>
            <p className="relative mt-2 text-[10px] uppercase tracking-wider opacity-55">{h.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 pb-28">
        <div>
          <h2 className="mb-8 text-2xl font-bold">Chain of custody</h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Spectrum</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Exhibits</h2>
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
