"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ProjectLinks } from "@/components/CvBlocks";

type Msg = { role: "user" | "agent" | "system"; text: string };

const SCRIPT: Msg[] = [
  { role: "system", text: "Orbitfolio Agent v35 · context loaded" },
  { role: "user", text: "Who is Serhii Kucherenko?" },
  {
    role: "agent",
    text: `${cv.name} — ${cv.title}. ${cv.location}. 10+ years shipping production software across healthcare, fintech, and SaaS.`,
  },
  { role: "user", text: "What's his AI specialty?" },
  {
    role: "agent",
    text: "Applied AI: LLM integrations, tool-using agents, RAG, semantic search, and AI workflow automation — with end-to-end ownership from architecture through production scaling.",
  },
  { role: "user", text: "Latest role?" },
  {
    role: "agent",
    text: `Founding Engineer at Untether Labs (YC) — AI scheduling assistant across healthcare orgs, production RAG, LLM PR automation. Led 4 engineers.`,
  },
  { role: "user", text: "Notable wins?" },
  {
    role: "agent",
    text: "85% load time cut · $78K/yr infra saved · 5 engineers promoted to Senior · multi-tenant healthcare AI from pilot to scale.",
  },
  { role: "user", text: "How to reach him?" },
  { role: "agent", text: `${cv.email} · LinkedIn · GitHub · Open to founding eng + applied AI roles.` },
];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [visible, setVisible] = useState(reduce ? SCRIPT.length : 1);

  useEffect(() => {
    if (reduce) return;
    if (visible >= SCRIPT.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 900);
    return () => clearTimeout(t);
  }, [visible, reduce]);

  return (
    <main className="relative flex min-h-screen flex-col bg-[#0d1117] text-[#c9d1d9]">
      <Starfield density={60} color="#30363d" speed={0.02} className="opacity-40" />

      <header className="relative z-10 border-b border-[#30363d] px-4 py-3">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-4 font-[family-name:var(--font-mono)] text-xs text-[#8b949e]">
            agent-console — orbitfolio@v35
          </span>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 rounded-xl border border-[#238636]/40 bg-[#161b22] p-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#3fb950]">identity</p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl text-[#f0f6fc] sm:text-4xl">
            {cv.name}
          </h1>
          <p className="mt-1 text-[#58a6ff]">{cv.title}</p>
        </motion.div>

        <div className="flex-1 space-y-4 overflow-y-auto rounded-xl border border-[#30363d] bg-[#0d1117]/80 p-4 font-[family-name:var(--font-mono)] text-sm">
          {SCRIPT.slice(0, visible).map((m, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, x: m.role === "user" ? 8 : -8 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-4 py-2.5 ${
                  m.role === "user"
                    ? "bg-[#238636]/20 text-[#3fb950]"
                    : m.role === "system"
                      ? "bg-[#21262d] text-[#8b949e] text-xs"
                      : "bg-[#161b22] text-[#c9d1d9] border border-[#30363d]"
                }`}
              >
                {m.role !== "system" && (
                  <span className="mb-1 block text-[10px] uppercase opacity-50">
                    {m.role === "user" ? "you" : "agent"}
                  </span>
                )}
                {m.text}
              </div>
            </motion.div>
          ))}
          {!reduce && visible < SCRIPT.length && (
            <span className="inline-block animate-pulse text-[#8b949e]">▊</span>
          )}
        </div>

        <div className="mt-6 rounded-lg border border-[#30363d] bg-[#161b22] px-4 py-3 font-[family-name:var(--font-mono)] text-xs text-[#484f58]">
          Type a question… (demo — static script)
        </div>

        <section className="mt-10">
          <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8b949e]">repos</h2>
          <ProjectLinks tone="dark" />
          <ContactRow className="mt-6" />
        </section>
      </div>
    </main>
  );
}
