"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

const CHAPTERS = [
  { id: "01", title: "Cover", href: "#cover" },
  { id: "02", title: "Metrics", href: "#metrics" },
  { id: "03", title: "Roles", href: "#roles" },
  { id: "04", title: "Craft", href: "#craft" },
];

/** Hybrid Cover Chapters — book jacket opening into numbered chapter spreads */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <SmoothScroll>
      <main className="min-h-screen" style={{ background: "#120e0a", color: "#f3ebe0" }}>
      <nav className="sticky top-0 z-20 flex flex-wrap items-center gap-4 border-b px-6 py-3 backdrop-blur-md md:px-10" style={{ borderColor: "#f3ebe018", background: "#120e0acc" }}>
        <span className="font-[family-name:var(--font-serif)] text-sm italic text-[#e8a87c]">Chapters</span>
        {CHAPTERS.map((c) => (
          <a
            key={c.id}
            href={c.href}
            className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] opacity-55 hover:opacity-100"
          >
            {c.id} {c.title}
          </a>
        ))}
      </nav>

      <section id="cover" className="mx-auto grid max-w-6xl gap-0 px-6 py-20 md:grid-cols-[1fr_280px] md:px-10">
        <div
          className="relative p-8 md:p-14"
          style={{
            background: "linear-gradient(145deg, #2a2118 0%, #1a140f 100%)",
            boxShadow: "8px 0 0 #e8a87c, 24px 24px 60px #00000088",
          }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] opacity-45">
            First edition
          </p>
          <motion.h1
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 font-[family-name:var(--font-serif)] text-5xl leading-[1.05] sm:text-6xl"
          >
            {cv.name}
          </motion.h1>
          <p className="mt-4 text-[#e8a87c]">{cv.title}</p>
          <p className="mt-6 max-w-md text-sm leading-7 opacity-70">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${cv.email}`}
              className="inline-block border border-[#e8a87c] px-5 py-2.5 text-sm font-semibold text-[#e8a87c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8a87c]"
            >
              Request a signed copy
            </a>
            <a
              href="/resume"
              className="inline-block border border-[#f3ebe040] px-5 py-2.5 text-sm text-[#f3ebe0]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3ebe0]"
            >
              Printable folio
            </a>
          </div>
          <ContactRow className="mt-5 text-white/55" />
        </div>
        <div className="flex flex-col justify-between border border-l-0 border-[#f3ebe015] p-6 md:p-8" style={{ background: "#1a140f" }}>
          <p className="font-[family-name:var(--font-serif)] text-sm italic opacity-50">
            “Applied AI, owned end-to-end.”
          </p>
          <p className="text-xs opacity-40">{cv.location}</p>
        </div>
      </section>

      <section id="metrics" className="border-y px-6 py-12 md:px-10" style={{ borderColor: "#f3ebe015", background: "#1a140f" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
          {cv.highlights.map((h, i) => (
            <div key={h.label}>
              <p className="font-[family-name:var(--font-mono)] text-[9px] text-[#e8a87c]">
                Ch. {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold">{h.value}</p>
              <p className="mt-1 text-xs opacity-45">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roles" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <h2 className="mb-2 font-[family-name:var(--font-serif)] text-3xl italic">Chapter III · Roles</h2>
        <p className="mb-10 text-xs uppercase tracking-[0.2em] opacity-40">The long form</p>
        <ExperienceList tone="dark" />
      </section>

      <section id="craft" className="mx-auto grid max-w-6xl gap-12 px-6 pb-28 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl italic">Craft</h2>
          <SkillsCloud />
        </div>
        <div>
          <h2 className="mb-6 font-[family-name:var(--font-serif)] text-2xl italic">Appendix</h2>
          <ProjectLinks />
          <p className="mt-10 font-[family-name:var(--font-serif)] text-sm italic opacity-50">
            {cv.education.degree} · {cv.education.school}
          </p>
        </div>
      </section>
      <footer className="border-t px-6 py-10 md:px-10" style={{ borderColor: "#f3ebe015" }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-7 opacity-55">
            Steals object-like covers from #53 and viewport storytelling from #32. Chapters stay jumpable;
            the jacket never hides the resume.
          </p>
          <a
            href={`mailto:${cv.email}`}
            className="inline-flex self-start border border-[#e8a87c] px-5 py-2.5 text-sm font-semibold text-[#e8a87c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8a87c]"
          >
            Commission the next chapter
          </a>
        </div>
      </footer>
      </main>
    </SmoothScroll>
  );
}
