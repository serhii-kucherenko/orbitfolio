"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Hybrid Clinic Aurora — calm clinical rails under soft northern-light bands */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden bg-[#eaf7f4] text-[#0f2f2a] overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[50vh]"
        style={{
          background:
            "linear-gradient(120deg, transparent 20%, #5eead455 35%, #38bdf855 50%, #a7f3d055 65%, transparent 80%)",
          filter: "blur(40px)",
          opacity: 0.7,
        }}
      />
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-20 h-32"
          style={{
            background: "linear-gradient(90deg, transparent, #2dd4bf44, #38bdf844, transparent)",
          }}
          animate={{ x: ["-20%", "20%", "-20%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div
          className="rounded-sm border bg-white/85 px-6 py-10 backdrop-blur-sm md:px-12 md:py-14"
          style={{ borderColor: "#0f766e33" }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-3 border-b pb-4"
            style={{ borderColor: "#0f766e22" }}
          >
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#0f766e]">
              Clinic · Aurora bay
            </p>
            <p className="text-xs opacity-45">{cv.location}</p>
          </div>

          <h1 className="mt-8 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-6xl">
            {cv.name}
          </h1>
          <p className="mt-3 text-[#0f766e]">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 opacity-70">{cv.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="rounded-sm bg-[#0f766e] px-5 py-2.5 text-sm font-semibold text-[#ecfdf5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f766e]"
            >
              Book a consult
            </a>
            <a
              href="/resume"
              className="rounded-sm border border-[#0f766e]/40 px-5 py-2.5 text-sm font-semibold text-[#0f766e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f766e]"
            >
              Chart PDF
            </a>
            <ContactRow />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {cv.highlights.map((h) => (
              <div key={h.label} className="border-t-2 border-[#14b8a6] pt-3">
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#0f766e]">
                  {h.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider opacity-45">{h.label}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-16">
          <h2 className="mb-8 text-2xl font-bold">Care history</h2>
          <ExperienceList tone="light" />
        </section>

        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Protocols</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Case files</h2>
            <ProjectLinks tone="light" />
            <p className="mt-8 text-sm opacity-50">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </section>
        <section className="mt-16 rounded-sm border border-[#0f766e]/20 bg-white/70 p-6 backdrop-blur-sm md:p-8">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#0f766e]">
            Intake · who / what / proof
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-45">Patient</p>
              <p className="mt-1 font-semibold">{cv.name}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-45">Specialty</p>
              <p className="mt-1 font-semibold">{cv.title}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-45">Site</p>
              <p className="mt-1 font-semibold">{cv.location}</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 opacity-65">
            Steals healthcare trust from #58 and atmospheric restraint from #78 — calm rails, aurora only as
            atmosphere.
          </p>
        </section>
      </div>
      </main>
    </SmoothScroll>
  );
}
