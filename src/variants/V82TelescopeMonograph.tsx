"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Telescope Monograph — scholarly folio: wide margins, serif body, numbered plates of evidence */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main
      className="min-h-screen"
      style={{
        background: "#e8edf2",
        color: "#1c2838",
        backgroundImage:
          "linear-gradient(90deg, #dce3eb 0, #dce3eb 48px, transparent 48px), linear-gradient(#c5ced840 1px, transparent 1px)",
        backgroundSize: "100% 100%, 100% 2rem",
        backgroundPosition: "0 0, 0 7rem",
      }}
    >
      <article className="mx-auto max-w-3xl px-8 py-20 md:px-12 md:py-28">
        <header className="border-b-2 pb-10" style={{ borderColor: "#1c2838" }}>
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] opacity-50"
          >
            Monograph · Vol. I · Observational notes
          </motion.p>
          <h1 className="mt-6 font-[family-name:var(--font-serif)] text-5xl leading-[1.1] sm:text-6xl">
            {cv.name}
          </h1>
          <p className="mt-4 font-[family-name:var(--font-sans)] text-sm uppercase tracking-[0.15em] opacity-60">
            {cv.title}
          </p>
          <p className="mt-8 font-[family-name:var(--font-serif)] text-lg leading-8 opacity-80">
            {cv.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="border-b-2 pb-0.5 text-sm font-semibold"
              style={{ borderColor: "#1c2838" }}
            >
              Correspond with the author
            </a>
            <ContactRow className="text-sm opacity-70" />
          </div>
        </header>

        <section className="mt-12 grid grid-cols-2 gap-6 border-b pb-12 sm:grid-cols-4" style={{ borderColor: "#1c283822" }}>
          {cv.highlights.map((h, i) => (
            <figure key={h.label}>
              <figcaption className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest opacity-40">
                Plate {String(i + 1).padStart(2, "0")}
              </figcaption>
              <p className="mt-2 font-[family-name:var(--font-serif)] text-3xl">{h.value}</p>
              <p className="mt-1 text-xs opacity-55">{h.label}</p>
            </figure>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="mb-2 font-[family-name:var(--font-serif)] text-3xl italic">I. Field notes</h2>
          <p className="mb-8 text-xs uppercase tracking-[0.2em] opacity-40">Professional chronology</p>
          <ExperienceList tone="light" />
        </section>

        <section className="mt-16 grid gap-12 border-t pt-12 md:grid-cols-2" style={{ borderColor: "#1c283822" }}>
          <div>
            <h2 className="mb-2 font-[family-name:var(--font-serif)] text-2xl italic">II. Instruments</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-2 font-[family-name:var(--font-serif)] text-2xl italic">III. Specimens</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 font-[family-name:var(--font-serif)] text-sm italic opacity-55">
              {cv.education.degree}, {cv.education.school}
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
