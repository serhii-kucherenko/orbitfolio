"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

const rooms = [
  { id: "experience", label: "Experience vault", x: "8%", y: "16%", rot: -6 },
  { id: "skills", label: "Capability bay", x: "55%", y: "10%", rot: 4 },
  { id: "projects", label: "Work archive", x: "18%", y: "46%", rot: 3 },
  { id: "contact", label: "Contact desk", x: "58%", y: "50%", rot: -3 },
] as const;

/** Orbit Archive Rooms — isometric rooms for experience, capabilities, work, contact. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-[#0e1218] text-[#eef3f0]">
      <header className="mx-auto max-w-5xl px-6 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.4em] text-teal-300/60">
          Isometric archive · four rooms
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-teal-100/70">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${cv.email}`}
            className="inline-block bg-[#eef3f0] px-5 py-2.5 text-sm font-semibold text-[#0e1218] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Request room access
          </a>
          <a
            href="/resume"
            className="inline-block border border-teal-300/40 px-5 py-2.5 text-sm font-semibold text-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
          >
            Floor plan PDF
          </a>
          <ContactRow className="text-teal-100/60" />
        </div>
      </header>

      <section className="relative mx-auto mt-12 h-[340px] max-w-5xl px-6 sm:h-[380px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 bottom-4 top-8 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 49%, #5eead433 50%, transparent 51%), linear-gradient(0deg, #5eead422 1px, transparent 1px)",
            backgroundSize: "14% 100%, 100% 24px",
            transform: reduce ? undefined : "perspective(700px) rotateX(55deg)",
            transformOrigin: "50% 100%",
          }}
        />
        {rooms.map((room, i) => (
          <motion.a
            key={room.id}
            href={`#${room.id}`}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : i * 0.08 }}
            className="absolute w-[42%] max-w-[240px] border border-teal-300/30 bg-[#152028]/95 p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            style={{
              left: room.x,
              top: room.y,
              transform: reduce ? undefined : `perspective(600px) rotateX(12deg) rotateZ(${room.rot}deg)`,
            }}
          >
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-teal-200/60">
              Room {i + 1}
            </p>
            <p className="mt-2 text-lg font-semibold">{room.label}</p>
          </motion.a>
        ))}
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-8 sm:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border-l border-teal-300/35 pl-4">
            <p className="text-2xl font-bold">{h.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">{h.label}</p>
          </div>
        ))}
      </section>

      <section id="experience" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Experience vault</h2>
        <ExperienceList tone="dark" />
      </section>
      <section id="skills" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Capability bay</h2>
        <SkillsCloud />
      </section>
      <section id="projects" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold">Work archive</h2>
        <ProjectLinks />
      </section>
      <section id="contact" className="mx-auto max-w-4xl scroll-mt-24 space-y-6 px-6 pb-28">
        <h2 className="text-2xl font-semibold">Contact desk</h2>
        <ContactRow className="text-teal-100/70" />
        <p className="text-xs text-white/35">
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </section>
    
      <footer className="border-t border-white/10 px-6 py-8">
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/45">
          Archive rooms organize attention; every room exits to email or experience.
        </p>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-7 text-white/45">
          WebGL atmosphere earns the glance — name, email, and proof close the hire.
        </p>
        <p className="mx-auto mt-3 max-w-5xl font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-white/30">
          Alpha · WebGL · craft depth
        </p>
      </footer>
</main>
  );
}
