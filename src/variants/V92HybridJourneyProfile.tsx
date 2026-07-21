"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { cv } from "@/data/cv";

/** Hybrid Journey Profile — identity card docked beside a vertical route of career stops */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const initials = cv.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <SmoothScroll>
      <main
        className="min-h-screen"
        style={{
          background: "linear-gradient(180deg, #1e3a5f 0%, #0f2744 100%)",
          color: "#e8f1fa",
        }}
      >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[300px_1fr] lg:py-24">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <motion.div
            initial={reduce ? false : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="overflow-hidden border"
            style={{
              borderColor: "#5b9bd655",
              background: "linear-gradient(160deg, #2a5080 0%, #163556 100%)",
            }}
          >
            <div className="h-24" style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }} />
            <div className="px-6 pb-6 pt-0">
              <div
                className="-mt-10 mb-4 flex h-20 w-20 items-center justify-center border-4 font-[family-name:var(--font-display)] text-2xl font-bold"
                style={{ borderColor: "#1e3a5f", background: "#0f2744", color: "#67e8f9" }}
              >
                {initials}
              </div>
              <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold">{cv.name}</h1>
              <p className="mt-1 text-sm text-[#67e8f9]">{cv.title}</p>
              <p className="mt-4 text-xs leading-5 opacity-65">{cv.summary.slice(0, 140)}…</p>
              <a
                href={`mailto:${cv.email}`}
                className="mt-5 inline-flex w-full justify-center py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#67e8f9]"
                style={{ background: "#67e8f9", color: "#0f2744" }}
              >
                Message
              </a>
              <a
                href="/resume"
                className="mt-2 inline-flex w-full justify-center border border-cyan-300/40 py-2.5 text-sm text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#67e8f9]"
              >
                Journey resume
              </a>
              <ContactRow className="mt-4 text-xs text-white/60" />
              <p className="mt-4 text-[10px] uppercase tracking-wider opacity-40">{cv.location}</p>
            </div>
          </motion.div>

          <div className="mt-6 grid grid-cols-2 gap-2">
            {cv.highlights.map((h) => (
              <div
                key={h.label}
                className="border p-3 text-center"
                style={{ borderColor: "#5b9bd633", background: "#ffffff08" }}
              >
                <p className="text-lg font-bold text-[#67e8f9]">{h.value}</p>
                <p className="text-[9px] uppercase opacity-45">{h.label}</p>
              </div>
            ))}
          </div>
        </aside>

        <div>
          <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.35em] text-[#67e8f9]">
            Journey map
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold">
            Stops along the way
          </h2>

          <div className="relative mt-10 pl-6">
            <div
              aria-hidden
              className="absolute bottom-0 left-1 top-2 w-0.5"
              style={{ background: "linear-gradient(180deg, #67e8f9, transparent)" }}
            />
            {!reduce &&
              cv.experience.map((_, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  className="absolute left-0 h-2.5 w-2.5 rounded-full"
                  style={{
                    background: "#67e8f9",
                    top: `${8 + i * 22}%`,
                    boxShadow: "0 0 12px #67e8f9",
                  }}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                />
              ))}
            <ExperienceList tone="dark" />
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-xl font-bold">Kit</h2>
              <SkillsCloud />
            </div>
            <div>
              <h2 className="mb-6 text-xl font-bold">Waypoints</h2>
              <ProjectLinks />
              <p className="mt-8 text-sm opacity-45">
                {cv.education.degree} · {cv.education.school}
              </p>
            </div>
          </div>
        </div>
      </div>
      </main>
    </SmoothScroll>
  );
}
