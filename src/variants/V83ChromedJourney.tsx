"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Chromed Journey — liquid-metal timeline: roles as chrome milestones on a road */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #1a1d24 0%, #0c0e12 40%, #151820 100%)",
        color: "#e8eaef",
      }}
    >
      <header className="relative overflow-hidden px-6 pb-16 pt-24 md:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full opacity-50 blur-3xl"
          style={{
            background: "linear-gradient(135deg, #c0c8d4 0%, #6b7280 50%, #9ca3af 100%)",
          }}
        />
        <motion.h1
          initial={reduce ? false : { x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative font-[family-name:var(--font-display)] text-6xl font-extrabold tracking-tight sm:text-8xl"
          style={{
            backgroundImage: "linear-gradient(105deg, #f8fafc 0%, #94a3b8 35%, #e2e8f0 55%, #64748b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {cv.name}
        </motion.h1>
        <p className="relative mt-4 text-xl text-slate-400">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-7 text-slate-400">{cv.summary}</p>
        <div className="relative mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="px-6 py-3 text-sm font-bold tracking-wide"
            style={{
              background: "linear-gradient(135deg, #e2e8f0, #94a3b8)",
              color: "#0c0e12",
            }}
          >
            Start the journey
          </a>
          <ContactRow className="text-slate-400" />
        </div>
      </header>

      <section className="border-y px-6 py-8 md:px-12" style={{ borderColor: "#ffffff12", background: "#ffffff06" }}>
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-6">
          {cv.highlights.map((h) => (
            <div key={h.label} className="min-w-[120px]">
              <p
                className="font-[family-name:var(--font-display)] text-4xl font-bold"
                style={{
                  backgroundImage: "linear-gradient(180deg, #f1f5f9, #64748b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {h.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-12">
        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-0 w-px md:left-1/2"
            style={{ background: "linear-gradient(180deg, #94a3b8, transparent)" }}
          />
          <h2 className="mb-12 font-[family-name:var(--font-display)] text-3xl font-bold">
            Chrome milestones
          </h2>
          <ExperienceList tone="dark" />
        </div>

        <div className="mt-20 grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Alloy</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold">Garage</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-slate-500">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
