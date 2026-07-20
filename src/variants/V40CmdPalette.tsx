"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";

type Cmd = { id: string; label: string; hint: string; section: string };

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("hero");

  const commands: Cmd[] = useMemo(
    () => [
      { id: "hero", label: "Go to Identity", hint: "Serhii Kucherenko", section: "hero" },
      { id: "summary", label: "Read Summary", hint: "Applied AI engineer", section: "hero" },
      { id: "exp", label: "Open Experience", hint: `${cv.experience.length} roles`, section: "experience" },
      { id: "untether", label: "Untether Labs", hint: "YC healthcare AI", section: "experience" },
      { id: "skills", label: "Show Skills", hint: "AI · backend · frontend", section: "skills" },
      { id: "rag", label: "RAG & Agents", hint: "Specialty", section: "skills" },
      { id: "projects", label: "View Projects", hint: `${cv.projects.length} repos`, section: "projects" },
      { id: "email", label: "Send Email", hint: cv.email, section: "contact" },
      { id: "linkedin", label: "Open LinkedIn", hint: "Profile", section: "contact" },
      { id: "goals", label: "100 Goals", hint: "/goals", section: "contact" },
    ],
    [],
  );

  const filtered = commands.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.hint.toLowerCase().includes(query.toLowerCase()),
  );

  const run = useCallback((cmd: Cmd) => {
    if (cmd.id === "email") {
      window.location.href = `mailto:${cv.email}`;
      return;
    }
    if (cmd.id === "linkedin") {
      window.open(cv.linkedin, "_blank");
      return;
    }
    if (cmd.id === "goals") {
      window.location.href = "/goals";
      return;
    }
    setActive(cmd.section);
    setOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0f0f12] text-[#e4e4e7]">
      <Starfield density={80} color="#52525b" speed={0.02} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
            <p className="mt-1 text-zinc-400">{cv.title}</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-400"
          >
            <span>Search</span>
            <kbd className="rounded bg-zinc-800 px-1.5 text-xs">⌘K</kbd>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-[15vh] backdrop-blur-sm"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.96, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg overflow-hidden rounded-xl border border-zinc-700 bg-[#18181b] shadow-2xl"
              >
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command…"
                  className="w-full border-b border-zinc-700 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-zinc-600"
                />
                <ul className="max-h-72 overflow-y-auto py-2">
                  {filtered.map((cmd, i) => (
                    <li key={cmd.id}>
                      <button
                        type="button"
                        onClick={() => run(cmd)}
                        className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm hover:bg-zinc-800 ${i === 0 ? "bg-zinc-800/50" : ""}`}
                      >
                        <span>{cmd.label}</span>
                        <span className="text-xs text-zinc-500">{cmd.hint}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div key={active} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          {active === "hero" && (
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">{cv.summary}</p>
          )}
          {active === "experience" && <ExperienceList tone="dark" />}
          {active === "skills" && <SkillsCloud tone="dark" />}
          {active === "projects" && <ProjectLinks tone="dark" />}
          {active === "contact" && <ContactRow />}
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {cv.highlights.map((h) => (
            <span key={h.label} className="rounded-md bg-zinc-800/80 px-3 py-1 text-xs">
              {h.value} {h.label}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
