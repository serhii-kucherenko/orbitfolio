"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

const turns = [
  {
    role: "recruiter" as const,
    text: "Who is the engineer behind this profile, and what should I put in the first email?",
  },
  {
    role: "agent" as const,
    text: null,
  },
  {
    role: "recruiter" as const,
    text: "What outcomes can I cite in the first ten seconds?",
  },
  {
    role: "metrics" as const,
  },
  {
    role: "recruiter" as const,
    text: "Show the complete work history.",
  },
  {
    role: "history" as const,
  },
] as const;

/** Agent Chat Profile — static agent conversation answers recruiter questions, then opens the record. */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const initials = cv.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <main className="min-h-screen bg-[#e7eef2] text-[#15202b]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#c5d3dc] bg-[#f7fafc] shadow-[0_24px_60px_rgba(21,32,43,0.12)]">
          <header className="flex items-center gap-3 border-b border-[#c5d3dc] bg-white px-5 py-4">
            <div className="grid size-11 place-items-center rounded-full bg-[#0f6b5c] text-sm font-bold text-white">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="truncate text-base font-bold">{cv.name}</h1>
              <p className="text-xs text-[#0f6b5c]">
                {reduce ? "profile ready · offline" : "agent composing career answers…"}
              </p>
            </div>
            <a
              href={`mailto:${cv.email}`}
              className="rounded-full bg-[#0f6b5c] px-4 py-2 text-xs font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f6b5c]"
            >
              Message
            </a>
          </header>

          <div className="space-y-5 px-4 py-6 sm:px-6">
            {turns.map((turn, i) => {
              if (turn.role === "recruiter") {
                return (
                  <motion.div
                    key={`q-${i}`}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-[85%] rounded-2xl rounded-tl-md bg-[#d9e4ea] px-4 py-3 text-sm leading-6"
                  >
                    {turn.text}
                  </motion.div>
                );
              }
              if (turn.role === "agent") {
                return (
                  <motion.div
                    key="intro"
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="ml-auto max-w-[92%] rounded-2xl rounded-tr-md bg-[#d5f0e6] px-5 py-5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0f6b5c]">
                      Agent reply
                    </p>
                    <h2 className="mt-2 text-2xl font-black sm:text-3xl">{cv.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#15202b]/80">{cv.summary}</p>
                    <ContactRow className="mt-5 text-[#0f6b5c]" />
                  </motion.div>
                );
              }
              if (turn.role === "metrics") {
                return (
                  <div key="metrics" className="ml-auto grid max-w-[92%] grid-cols-2 gap-2">
                    {cv.highlights.map((h) => (
                      <div key={h.label} className="rounded-2xl border border-[#c5d3dc] bg-white p-4">
                        <p className="text-2xl font-black text-[#0f6b5c]">{h.value}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-500">{h.label}</p>
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <div key="history" className="ml-auto max-w-[96%] rounded-2xl rounded-tr-md border border-[#c5d3dc] bg-white p-5">
                  <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0f6b5c]">
                    Full record attached
                  </p>
                  <ExperienceList tone="light" />
                </div>
              );
            })}

            <div className="grid gap-4 pt-2 md:grid-cols-2">
              <div className="rounded-2xl bg-[#15202b] p-5 text-white">
                <p className="mb-5 text-xs text-emerald-300">Capabilities response</p>
                <SkillsCloud />
              </div>
              <div className="rounded-2xl border border-[#c5d3dc] bg-white p-5">
                <p className="mb-5 text-xs text-[#0f6b5c]">Project response</p>
                <ProjectLinks tone="light" />
              </div>
            </div>

            <footer className="pt-2 text-center text-xs text-slate-500">
              {cv.education.degree} · {cv.education.school} · {cv.location}
            </footer>
          </div>

          <div className="border-t border-[#c5d3dc] bg-white px-5 py-3 font-[family-name:var(--font-mono)] text-[10px] text-slate-400">
            composer · hire channel open · /resume linked above
          </div>
        </div>
      </div>
    </main>
  );
}
