"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

const NODES = [
  { x: "8%", y: "18%", label: "plan" },
  { x: "72%", y: "12%", label: "retrieve" },
  { x: "88%", y: "48%", label: "tool" },
  { x: "55%", y: "70%", label: "eval" },
  { x: "18%", y: "62%", label: "ship" },
  { x: "40%", y: "28%", label: "rag" },
];

/** Agent Swarm Field — coordinator node amid a living mesh of specialist agents */
export function Variant() {
  const reduce = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen" style={{ background: "#0a1210", color: "#c8e6d8" }}>
      <section className="relative mx-auto min-h-[70vh] max-w-6xl overflow-hidden px-6 pb-8 pt-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #3d8f6a44 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {NODES.map((n, i) => (
          <motion.div
            key={n.label}
            className="absolute hidden h-2 w-2 rounded-full md:block"
            style={{ left: n.x, top: n.y, background: "#5eead4" }}
            initial={reduce ? false : { opacity: 0.3, scale: 0.5 }}
            animate={
              reduce
                ? { opacity: 0.7 }
                : { opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }
            }
            transition={
              reduce
                ? undefined
                : { duration: 2.4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <span className="absolute left-4 top-[-2px] whitespace-nowrap font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-widest text-[#5eead4]/70">
              {n.label}
            </span>
          </motion.div>
        ))}

        <div className="relative z-10 max-w-xl">
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#5eead4]">
            swarm · coordinator online · {cv.location}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] sm:text-6xl">
            {cv.name}
          </h1>
          <p className="mt-3 text-base text-[#5eead4]">{cv.title}</p>
          <p className="mt-5 text-sm leading-7 text-[#c8e6d8]/75">{cv.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${cv.email}`}
              className="border px-5 py-2.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
              style={{ borderColor: "#5eead4", color: "#5eead4" }}
            >
              dispatch hire agent
            </a>
            <a
              href="/resume"
              className="border border-[#5eead4]/40 px-5 py-2.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[#5eead4]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eead4]"
            >
              export swarm brief
            </a>
            <ContactRow className="text-[#c8e6d8]/65" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {cv.highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-baseline gap-3 border px-4 py-3 font-[family-name:var(--font-mono)]"
              style={{ borderColor: "#3d8f6a55", background: "#0f1c18" }}
            >
              <span className="text-2xl font-bold text-[#5eead4]">{h.value}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-45">{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-6 pb-28">
        <div>
          <h2 className="mb-8 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.25em] text-[#5eead4]">
            mission log
          </h2>
          <ExperienceList tone="dark" />
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.25em]">
              capabilities
            </h2>
            <SkillsCloud />
          </div>
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.25em]">
              artifacts
            </h2>
            <ProjectLinks />
            <p className="mt-10 font-[family-name:var(--font-mono)] text-xs opacity-45">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
