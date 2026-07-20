"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";

const LAYERS = [
  { id: "hero", depth: 0, label: "Surface" },
  { id: "exp", depth: 1, label: "Experience" },
  { id: "skills", depth: 2, label: "Skills" },
  { id: "projects", depth: 3, label: "Projects" },
  { id: "contact", depth: 4, label: "Contact" },
] as const;

type LayerId = (typeof LAYERS)[number]["id"];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [active, setActive] = useState<LayerId>("hero");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#042f2e] text-white">
      <Starfield density={100} color="#5eead4" speed={reduce ? 0 : 0.08} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.2),transparent)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-8">
        <p className="text-center text-[10px] uppercase tracking-[0.45em] text-teal-300/70">Glass Nebula · V06</p>

        <div className="relative mx-auto mt-16 h-[520px] max-w-lg">
          {LAYERS.map((layer, i) => {
            const isActive = active === layer.id;
            const offset = (LAYERS.length - 1 - i) * 12;
            return (
              <motion.button
                key={layer.id}
                type="button"
                onClick={() => setActive(layer.id)}
                initial={false}
                animate={{
                  y: isActive ? 0 : offset,
                  scale: isActive ? 1 : 0.94 - i * 0.02,
                  zIndex: isActive ? 50 : 10 - i,
                }}
                transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 28 }}
                className="absolute inset-x-0 top-0 min-h-[420px] rounded-3xl border border-white/20 bg-white/10 p-6 text-left shadow-2xl backdrop-blur-xl sm:p-8"
                style={{
                  boxShadow: isActive ? "0 25px 80px rgba(45,212,191,0.15)" : "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <span className="text-[10px] uppercase tracking-widest text-teal-300/80">{layer.label}</span>

                {layer.id === "hero" && (
                  <>
                    <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl">{cv.name}</h1>
                    <p className="mt-2 text-teal-100/80">{cv.title}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">{cv.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {cv.highlights.map((h) => (
                        <span key={h.label} className="rounded-full bg-teal-500/20 px-3 py-1 text-xs">
                          {h.value} {h.label}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {layer.id === "exp" && (
                  <ol className="mt-4 max-h-[320px] space-y-5 overflow-y-auto text-sm">
                    {cv.experience.map((job) => (
                      <li key={job.company}>
                        <p className="text-[10px] text-teal-300/60">{job.period}</p>
                        <p className="font-medium">{job.role} · {job.company}</p>
                        <ul className="mt-2 space-y-1 text-white/65">
                          {job.bullets.map((b) => (
                            <li key={b.slice(0, 24)}>· {b}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                )}

                {layer.id === "skills" && (
                  <div className="mt-4 max-h-[320px] space-y-4 overflow-y-auto text-sm">
                    {Object.entries(cv.skills).map(([k, items]) => (
                      <div key={k}>
                        <p className="text-[10px] uppercase text-teal-300/60">{k}</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {items.map((s) => (
                            <span key={s} className="rounded bg-white/10 px-2 py-0.5 text-[10px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {layer.id === "projects" && (
                  <ul className="mt-4 space-y-3 text-sm">
                    {cv.projects.map((p) => (
                      <li key={p.name}>
                        <a href={p.url} target="_blank" rel="noreferrer" className="text-teal-200 hover:underline">
                          {p.name}
                        </a>
                        <p className="text-xs text-white/55">{p.blurb}</p>
                      </li>
                    ))}
                    <li>
                      <Link href="/goals" className="text-teal-200 hover:underline">
                        100 Goals
                      </Link>
                    </li>
                  </ul>
                )}

                {layer.id === "contact" && (
                  <div className="mt-4 space-y-2 text-sm">
                    <p>{cv.education.degree}</p>
                    <p className="text-white/60">{cv.education.school}</p>
                    <p className="pt-4">{cv.email}</p>
                    <p>{cv.phone}</p>
                    <p>{cv.location}</p>
                    <div className="flex gap-4 pt-2">
                      <a href={cv.linkedin} target="_blank" rel="noreferrer" className="text-teal-200">
                        LinkedIn
                      </a>
                      <a href={cv.github} target="_blank" rel="noreferrer" className="text-teal-200">
                        GitHub
                      </a>
                    </div>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {LAYERS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setActive(l.id)}
              className={`h-2 w-2 rounded-full transition ${active === l.id ? "bg-teal-400" : "bg-white/20"}`}
              aria-label={l.label}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
