"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** Iso Team Rooms — isometric blueprint floorplan of leadership rooms and delivery corridors */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const rooms = [
    { label: "War room", job: cv.experience[0] },
    { label: "Delivery bay", job: cv.experience[1] },
    { label: "Forum loft", job: cv.experience[2] },
    { label: "Foundry", job: cv.experience[3] },
  ];

  return (
    <main className="min-h-screen bg-[#e8f0f2] text-[#0d2a32]">
      <header className="border-b border-[#0d2a32]/15 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-[#1a6b7a]">
            Blueprint · iso team rooms · {cv.location}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg text-[#1a6b7a]">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#0d2a32]/70">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="bg-[#0d2a32] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#e8f0f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a6b7a]"
            >
              Book a room
            </a>
            <a
              href="/resume"
              className="border border-[#0d2a32]/40 px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#0d2a32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a6b7a]"
            >
              Floor plan / resume
            </a>
            <ContactRow className="text-[#0d2a32]/70" />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        <div className="mb-8 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-dashed border-[#1a6b7a]/40 bg-white/60 p-4">
              <p className="text-3xl font-black text-[#1a6b7a]">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-[#0d2a32]/50">{h.label}</p>
            </div>
          ))}
        </div>

        <div
          className="grid gap-4 sm:grid-cols-2"
          style={{ perspective: reduce ? undefined : "900px" }}
        >
          {rooms.map((room, i) =>
            room.job ? (
              <motion.article
                key={room.label}
                className="border-2 border-[#0d2a32]/20 bg-[#f4fafb] p-5 shadow-[6px_6px_0_#0d2a3222]"
                style={{
                  transform: reduce ? undefined : `rotateX(8deg) rotateZ(${i % 2 === 0 ? -1 : 1}deg)`,
                }}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[#1a6b7a]">
                  Room {String(i + 1).padStart(2, "0")} · {room.label}
                </p>
                <h2 className="mt-3 text-xl font-bold">
                  {room.job.role} · {room.job.company}
                </h2>
                <p className="mt-1 text-xs text-[#0d2a32]/50">
                  {room.job.period} · {room.job.place}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#0d2a32]/80">
                  {room.job.bullets.slice(0, 2).map((b) => (
                    <li key={b.slice(0, 40)}>{b}</li>
                  ))}
                </ul>
              </motion.article>
            ) : null,
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 md:px-12">
        <h2 className="mb-8 text-2xl font-black">Full corridor log</h2>
        <ExperienceList tone="light" />
        <div className="mt-20 grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-bold">Tool crib</h2>
            <SkillsCloud tone="light" />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold">Annex links</h2>
            <ProjectLinks tone="light" />
            <p className="mt-10 text-sm text-[#0d2a32]/50">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
