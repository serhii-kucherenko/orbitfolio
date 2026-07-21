"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Issue Stack — overlapping magazine covers slide into a vertical zine pile; each layer is a career chapter. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const covers = [
    { bg: "#0f172a", accent: "#7dd3fc", label: "Issue 01 · Origin" },
    { bg: "#134e4a", accent: "#5eead4", label: "Issue 02 · Scale" },
    { bg: "#431407", accent: "#fdba74", label: "Issue 03 · AI" },
    { bg: "#1c1917", accent: "#e7e5e4", label: "Issue 04 · Lead" },
  ];

  return (
    <main className="min-h-screen bg-[#0c0a09] text-[#fafaf9]">
      <header className="mx-auto max-w-4xl px-6 pb-8 pt-24 md:px-8">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-white/45">
          Stack · current issue
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-7xl">
          {cv.name}
        </h1>
        <p className="mt-3 text-[#7dd3fc]">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="rounded-sm bg-[#7dd3fc] px-5 py-2.5 text-sm font-bold text-[#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dd3fc]"
          >
            Subscribe / hire
          </a>
          <ContactRow className="text-white/55" />
        </div>
      </header>

      <section className="relative mx-auto max-w-3xl px-6 py-10 md:px-8">
        <div className="relative" style={{ minHeight: reduce ? undefined : 280 }}>
          {covers.map((c, i) => (
            <motion.div
              key={c.label}
              initial={reduce ? false : { y: 40 + i * 8, opacity: 0, rotate: -2 + i }}
              whileInView={{ y: i * 28, opacity: 1, rotate: -3 + i * 1.5 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.1, type: "spring", stiffness: 80 }}
              className="relative w-full border border-white/10 p-6 shadow-2xl md:absolute md:left-0 md:right-0"
              style={{
                background: c.bg,
                zIndex: covers.length - i,
                top: reduce ? undefined : 0,
                marginBottom: reduce ? 12 : 0,
              }}
            >
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest" style={{ color: c.accent }}>
                {c.label}
              </p>
              <p className="mt-3 text-2xl font-bold" style={{ color: c.accent }}>
                {cv.highlights[i]?.value ?? "—"}
              </p>
              <p className="text-xs opacity-60">{cv.highlights[i]?.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 md:px-8">
        <h2 className="mb-10 text-3xl font-bold">Back issues · roles</h2>
        <ExperienceList tone="dark" />
      </section>

      <section className="mx-auto grid max-w-4xl gap-14 px-6 pb-24 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="mb-6 text-xl font-bold">Index of skills</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-6 text-xl font-bold">Contributor links</h2>
          <ProjectLinks />
          <p className="mt-10 text-sm opacity-45">
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
    </main>
  );
}
