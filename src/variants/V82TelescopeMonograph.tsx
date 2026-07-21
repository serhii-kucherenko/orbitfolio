"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Telescope Monograph — circular reveal + long-form monograph typography and complete proof. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#d8dee8] text-[#1c2838]">
      <div className="relative overflow-hidden border-b border-[#1c283822]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 22%, #1c283814 0 1px, transparent 1.5px), radial-gradient(circle at 72% 48%, #1c283810 0 1px, transparent 1.5px), radial-gradient(circle at 40% 78%, #1c28380c 0 1.5px, transparent 2px)",
            backgroundSize: "100% 100%",
          }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 42%, transparent 0 14%, rgba(28,40,56,0.14) 14% 16%, transparent 16% 28%, rgba(28,40,56,0.06) 28% 30%, transparent 30%)",
          }}
          animate={reduce ? undefined : { scale: [1, 1.04, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-3xl px-8 py-20 md:px-12 md:py-24">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#1c2838]/50"
          >
            Monograph · Vol. I · Telescope plates · {cv.location}
          </motion.p>
          <h1 className="mt-6 font-[family-name:var(--font-serif)] text-5xl leading-[1.1] sm:text-6xl">{cv.name}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.15em] text-[#1c2838]/55">{cv.title}</p>
          <p className="mt-8 font-[family-name:var(--font-serif)] text-lg leading-8 text-[#1c2838]/80">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="border-b-2 border-[#1c2838] pb-0.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c2838]"
            >
              Correspond with the author
            </a>
            <a
              href="/resume"
              className="text-sm text-[#1c2838]/55 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1c2838]"
            >
              Plate index PDF
            </a>
            <ContactRow className="text-sm text-[#1c2838]/65" />
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-8 py-14 md:px-12">
        <section className="grid grid-cols-2 gap-8 border-b border-[#1c283822] pb-12 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <figure key={h.label}>
              <figcaption className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest text-[#1c2838]/40">
                Plate {String(i + 1).padStart(2, "0")}
              </figcaption>
              <p className="mt-2 font-[family-name:var(--font-serif)] text-3xl">{h.value}</p>
              <p className="mt-1 text-xs text-[#1c2838]/55">{h.label}</p>
            </figure>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="mb-2 font-[family-name:var(--font-serif)] text-3xl italic">I. Field notes</h2>
          <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#1c2838]/40">Professional chronology</p>
          <ExperienceList tone="light" />
        </section>

        <section className="mt-16 grid gap-12 border-t border-[#1c283822] pt-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl italic">II. Instruments</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl italic">III. Specimens</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 font-[family-name:var(--font-serif)] text-sm italic text-[#1c2838]/55">
              {cv.education.degree}, {cv.education.school} · {cv.location}
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
