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
    { bg: "#3b1d0f", accent: "#fdba74", label: "Issue 03 · AI" },
    { bg: "#1c1917", accent: "#e7e5e4", label: "Issue 04 · Lead" },
  ];

  return (
    <main className="min-h-screen bg-[#090807] text-[#fafaf9]">
      <header className="mx-auto max-w-4xl px-6 pb-8 pt-24 md:px-8">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-white/45">
          Stack · current issue · {cv.location}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-7xl">
          {cv.name}
        </h1>
        <p className="mt-3 text-[#7dd3fc]">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="bg-[#7dd3fc] px-5 py-2.5 text-sm font-bold text-[#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dd3fc]"
          >
            Subscribe / hire
          </a>
          <a
            href="/resume"
            className="border border-white/25 px-5 py-2.5 text-sm font-bold text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Back catalog PDF
          </a>
          <ContactRow className="text-white/55" />
        </div>
      </header>

      <section className="relative mx-auto max-w-3xl px-6 py-10 md:px-8">
        <div className="relative" style={{ minHeight: reduce ? undefined : 320 }}>
          {covers.map((c, i) => (
            <motion.div
              key={c.label}
              initial={reduce ? false : { y: 48 + i * 10, opacity: 0, rotate: -3 + i }}
              whileInView={{ y: i * 32, opacity: 1, rotate: -3.5 + i * 1.6 }}
              viewport={{ once: true }}
              transition={{ delay: reduce ? 0 : i * 0.1, type: "spring", stiffness: 85 }}
              className="relative w-full border border-white/10 p-7 shadow-lg md:absolute md:left-0 md:right-0"
              style={{
                background: c.bg,
                zIndex: covers.length - i,
                top: reduce ? undefined : 0,
                marginBottom: reduce ? 12 : 0,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <p
                  className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest"
                  style={{ color: c.accent }}
                >
                  {c.label}
                </p>
                <span className="text-[10px] uppercase tracking-widest opacity-40">Vol. {i + 1}</span>
              </div>
              <p className="mt-4 text-3xl font-bold" style={{ color: c.accent }}>
                {cv.highlights[i]?.value ?? "—"}
              </p>
              <p className="mt-1 text-xs opacity-60">{cv.highlights[i]?.label}</p>
              <div className="mt-6 h-px w-full opacity-20" style={{ background: c.accent }} />
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
            {cv.education.degree} · {cv.education.school} · {cv.location}
          </p>
        </div>
      </section>
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/50">
          Each employer is a cover; the archive underneath stays continuously readable.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/35">
          Issues · Vol. 23 · collectible covers · {cv.location}
        </p>
      </footer>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Swiss grid cells stay deep enough for a full reading pass.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          Lab floor rising — thin shells no longer pass as award craft.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Lab · depth floor · 112
        </p>
      </footer>
</main>
  );
}
