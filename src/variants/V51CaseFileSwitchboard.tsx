"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Case File Switchboard — detective dossier + patchboard plugs that route to evidence drawers */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const channels = [
    { id: "untether", label: "CH-01 Untether", job: cv.experience[0] },
    { id: "spd", label: "CH-02 SPD", job: cv.experience[1] },
    { id: "windmill", label: "CH-03 Windmill", job: cv.experience[2] },
    { id: "indie", label: "CH-04 Indie", job: cv.experience[3] },
  ] as const;
  const [active, setActive] = useState<(typeof channels)[number]["id"]>("untether");
  const current = channels.find((c) => c.id === active)?.job ?? cv.experience[0];

  return (
    <main className="min-h-screen bg-[#2a261e] text-[#f2ead8]">
      <header className="border-b border-[#8b7355]/40 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#c4a574]">
            Case file · switchboard
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-[#d4b896]">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-white/65">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="border border-[#c4a574] bg-[#c4a574] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#2a261e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b896]"
            >
              Open the line
            </a>
            <a
              href="/resume"
              className="border border-[#c4a574]/50 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#d4b896] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4b896]"
            >
              Case file / resume
            </a>
            <ContactRow className="text-[#d4b896]/80" />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-12">
        <div className="mb-8 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-[#8b7355]/50 bg-[#1f1c16] p-4">
              <p className="text-2xl font-black text-[#e8c99a]">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">{h.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="space-y-2">
            <p className="mb-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#c4a574]/70">
              Patch plugs
            </p>
            {channels.map((ch) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => setActive(ch.id)}
                className={`flex w-full items-center gap-3 border px-3 py-3 text-left text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c4a574] ${
                  active === ch.id
                    ? "border-[#c4a574] bg-[#c4a574]/15 text-[#e8c99a]"
                    : "border-[#8b7355]/40 text-white/55"
                }`}
              >
                <span
                  className={`h-3 w-3 rounded-full ${active === ch.id ? "bg-[#e8c99a]" : "bg-[#8b7355]"}`}
                  aria-hidden
                />
                {ch.label}
              </button>
            ))}
          </aside>

          <motion.article
            key={active}
            className="border border-[#8b7355]/50 bg-[#1f1c16] p-6"
            initial={reduce ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#c4a574]">
              Drawer · {current.period}
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              {current.role} · {current.company}
            </h2>
            <p className="mt-1 text-sm text-white/45">{current.place}</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/80">
              {current.bullets.map((b) => (
                <li key={b.slice(0, 40)} className="border-l-2 border-[#c4a574]/50 pl-4">
                  {b}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 md:px-12">
        <h2 className="mb-8 text-xl font-semibold text-[#e8c99a]">Complete docket</h2>
        <ExperienceList tone="dark" />
        <div className="mt-20 grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-lg font-semibold">Field kit</h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold">Exhibits</h2>
            <ProjectLinks />
            <p className="mt-10 text-sm text-white/45">
              {cv.education.degree} · {cv.education.school}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
