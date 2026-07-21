"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Hybrid Telescope Cases — observatory case-study drawer: each role framed in a circular aperture */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen" style={{ background: "#0a1628", color: "#d6e4f5" }}>
      <header className="relative overflow-hidden px-6 pb-16 pt-24 md:px-12">
        <div
          aria-hidden
          className="absolute right-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #60a5fa44 0%, transparent 70%)",
            boxShadow: "inset 0 0 0 2px #60a5fa33, inset 0 0 80px #000",
          }}
        />
        <motion.div
          initial={reduce ? false : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative mx-auto flex max-w-lg flex-col items-center text-center"
        >
          <div
            className="mb-8 flex h-40 w-40 items-center justify-center rounded-full border-2 sm:h-52 sm:w-52"
            style={{
              borderColor: "#60a5fa55",
              background: "radial-gradient(circle at 40% 35%, #1e3a5f, #0a1628)",
              boxShadow: "0 0 60px #3b82f633",
            }}
          >
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#93c5fd]">
              aperture
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
            {cv.name}
          </h1>
          <p className="mt-3 text-[#93c5fd]">{cv.title}</p>
          <p className="mt-5 text-sm leading-7 opacity-70">{cv.summary}</p>
          <a
            href={`mailto:${cv.email}`}
            className="mt-8 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold"
            style={{ background: "#3b82f6", color: "#0a1628" }}
          >
            Focus hire lens
          </a>
          <ContactRow className="mt-5 justify-center text-white/55" />
        </motion.div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="flex flex-wrap justify-center gap-6">
          {cv.highlights.map((h) => (
            <div
              key={h.label}
              className="flex h-28 w-28 flex-col items-center justify-center rounded-full border text-center"
              style={{ borderColor: "#60a5fa44", background: "#ffffff06" }}
            >
              <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[#93c5fd]">
                {h.value}
              </p>
              <p className="mt-1 px-2 text-[9px] uppercase leading-tight opacity-45">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-2 text-center font-[family-name:var(--font-display)] text-2xl font-bold">
          Case drawer
        </h2>
        <p className="mb-12 text-center font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] opacity-40">
          Observed careers
        </p>
        <div className="space-y-8">
          {cv.experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: reduce ? 0 : 0.05 }}
              className="grid gap-4 rounded-2xl border p-6 md:grid-cols-[88px_1fr]"
              style={{ borderColor: "#60a5fa22", background: "#ffffff05" }}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full font-[family-name:var(--font-mono)] text-xs text-[#93c5fd]"
                style={{ border: "1px solid #60a5fa44" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-45">{job.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {job.role} · {job.company}
                </h3>
                <p className="mt-1 text-sm opacity-50">{job.place}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed opacity-80">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 40)}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-12 px-6 pb-28 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-xl font-bold">Optics</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-6 text-xl font-bold">Sky survey</h2>
          <ProjectLinks />
          <p className="mt-8 text-sm opacity-45">
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
    </main>
  );
}
