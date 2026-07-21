"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

type Cmd = { id: string; label: string; hint: string };

const COMMANDS: Cmd[] = [
  { id: "who", label: "> whoami", hint: "Identity + summary" },
  { id: "metrics", label: "> show metrics", hint: "Impact numbers" },
  { id: "work", label: "> open experience", hint: "Career timeline" },
  { id: "skills", label: "> list skills", hint: "Grouped toolkit" },
  { id: "lab", label: "> open projects", hint: "Links + education" },
  { id: "hire", label: "> mailto hire", hint: "Compose email" },
  { id: "resume", label: "> open resume", hint: "Printable CV" },
];

/** Command Palette CV — IDE-style ⌘K palette as the navigation surface for the resume */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("who");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter((c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q));
  }, [query]);

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <div className="mx-auto max-w-3xl px-4 pb-8 pt-24">
        <motion.div
          className="overflow-hidden border border-white/10 bg-[#161b22]"
          initial={reduce ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <span className="rounded bg-white/10 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-white/50">
              ⌘K · {cv.location}
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-white/30"
              aria-label="Command palette search"
            />
          </div>
          <ul className="max-h-64 overflow-auto py-2">
            {filtered.map((cmd) => (
              <li key={cmd.id}>
                <button
                  type="button"
                  onClick={() => {
                    if (cmd.id === "hire") {
                      window.location.href = `mailto:${cv.email}`;
                      return;
                    }
                    if (cmd.id === "resume") {
                      window.location.href = "/resume";
                      return;
                    }
                    setActive(cmd.id);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sky-400 ${
                    active === cmd.id ? "bg-sky-500/15 text-sky-200" : "hover:bg-white/5"
                  }`}
                >
                  <span className="font-[family-name:var(--font-mono)]">{cmd.label}</span>
                  <span className="text-xs text-white/35">{cmd.hint}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-10">
          {active === "who" && (
            <div>
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
              <p className="mt-2 text-sky-300">{cv.title}</p>
              <p className="mt-5 text-sm leading-8 text-white/65">{cv.summary}</p>
              <ContactRow className="mt-6 text-white/55" />
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${cv.email}`}
                  className="inline-block bg-sky-500 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#0d1117] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  mailto://hire
                </a>
                <a
                  href="/resume"
                  className="inline-block border border-sky-400/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  open://resume
                </a>
              </div>
            </div>
          )}
          {active === "metrics" && (
            <div className="grid gap-3 sm:grid-cols-2">
              {cv.highlights.map((h) => (
                <div key={h.label} className="border border-white/10 bg-[#161b22] p-5">
                  <p className="text-3xl font-bold text-sky-300">{h.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/45">{h.label}</p>
                </div>
              ))}
            </div>
          )}
          {active === "work" && <ExperienceList tone="dark" />}
          {active === "skills" && <SkillsCloud />}
          {active === "lab" && (
            <div>
              <ProjectLinks />
              <p className="mt-10 text-sm text-white/45">
                {cv.education.degree} · {cv.education.school}
              </p>
            </div>
          )}
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-xs text-white/35">
          Full dump always available below for scanners · {cv.location}
        </footer>
      </div>

      <section className="mx-auto max-w-5xl space-y-16 px-6 pb-24 pt-8 md:px-10">
        <div className="grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-white/10 p-4">
              <p className="text-2xl font-bold text-sky-300">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">{h.label}</p>
            </div>
          ))}
        </div>
        <ExperienceList tone="dark" />
        <div className="grid gap-14 md:grid-cols-2">
          <SkillsCloud />
          <div>
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
