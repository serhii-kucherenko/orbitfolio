"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { useGsapReveal } from "@/components/useGsapReveal";
import { cv } from "@/data/cv";

/** Paper Fold Terminal — origami sheet unfolds; GSAP reveals the phosphor console body. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const consoleRef = useRef<HTMLElement>(null);
  useGsapReveal(consoleRef, reduce);

  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "linear-gradient(160deg, #d4dde8 0%, #b8c5d4 40%, #9aabbc 100%)",
        color: "#1a2332",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-16">
        <motion.div
          initial={reduce ? false : { rotateX: 12, opacity: 0.6 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="origin-top overflow-hidden shadow-lg"
          style={{
            background: "#eef2f6",
            clipPath: "polygon(0 0, 100% 0, 100% 92%, 96% 100%, 0 100%)",
            boxShadow: "8px 14px 28px #1a233233, inset -40px 0 0 #d8e0e8",
          }}
        >
          <div
            className="flex items-center gap-2 border-b px-4 py-2 font-[family-name:var(--font-mono)] text-[10px]"
            style={{ borderColor: "#1a233222", background: "#1a2332", color: "#7dffa3" }}
          >
            <span className="opacity-60">fold://portfolio · GSAP</span>
            <span className="ml-auto opacity-40">{cv.location}</span>
          </div>

          <div className="grid md:grid-cols-[220px_1fr]">
            <aside
              className="border-b p-6 md:border-b-0 md:border-r"
              style={{
                borderColor: "#1a233218",
                background:
                  "linear-gradient(135deg, transparent 48%, #1a233208 48%, #1a233208 52%, transparent 52%)",
              }}
            >
              <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.3em] opacity-45">
                Crease #01
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold leading-tight">
                {cv.name}
              </h1>
              <p className="mt-2 text-xs leading-5 opacity-65">{cv.title}</p>
              <a
                href={`mailto:${cv.email}`}
                className="mt-6 inline-block px-3 py-2 font-[family-name:var(--font-mono)] text-[11px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dffa3]"
                style={{ background: "#1a2332", color: "#7dffa3" }}
              >
                $ mail hire
              </a>
              <a
                href="/resume"
                className="mt-2 inline-block border border-[#1a2332]/30 px-3 py-2 font-[family-name:var(--font-mono)] text-[11px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dffa3]"
              >
                $ cat resume
              </a>
              <ContactRow className="mt-5 text-xs" />
              <p className="mt-8 text-[10px] opacity-40">{cv.location}</p>
            </aside>

            <div className="p-6 md:p-10">
              <pre
                className="overflow-x-auto rounded p-4 font-[family-name:var(--font-mono)] text-[11px] leading-6"
                style={{ background: "#0d141c", color: "#7dffa3" }}
              >
                {`> whoami\n${cv.name}\n> cat summary.txt\n${cv.summary.slice(0, 160)}…`}
              </pre>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {cv.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="border border-dashed p-3"
                    style={{ borderColor: "#1a233233", background: "#fff" }}
                  >
                    <p className="font-[family-name:var(--font-mono)] text-xl font-bold text-[#0d7a45]">
                      {h.value}
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-wider opacity-45">{h.label}</p>
                  </div>
                ))}
              </div>

              <section ref={consoleRef} className="mt-14">
                <h2 data-gsap className="mb-6 flex items-center gap-3 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.2em]">
                  <span style={{ color: "#0d7a45" }}>▸</span> Career stack
                </h2>
                <div data-gsap>
                  <ExperienceList tone="light" />
                </div>
              </section>

              <section data-gsap className="mt-14 grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="mb-5 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.2em]">
                    Toolkit
                  </h2>
                  <SkillsCloud tone="light" />
                </div>
                <div>
                  <h2 className="mb-5 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.2em]">
                    Shipped
                  </h2>
                  <ProjectLinks tone="light" />
                  <p className="mt-8 text-xs opacity-50">
                    {cv.education.degree} · {cv.education.school}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
