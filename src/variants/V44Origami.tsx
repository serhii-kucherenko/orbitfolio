"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";

const PANELS = [
  { id: "hero", label: "Cover", fold: "left" },
  { id: "exp", label: "Experience", fold: "right" },
  { id: "skills", label: "Skills", fold: "left" },
  { id: "work", label: "Work", fold: "right" },
] as const;

type PanelId = (typeof PANELS)[number]["id"];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [panel, setPanel] = useState<PanelId>("hero");
  const [prev, setPrev] = useState<PanelId>("hero");

  const go = (id: PanelId) => {
    setPrev(panel);
    setPanel(id);
  };

  const foldDir = PANELS.find((p) => p.id === panel)?.fold ?? "left";

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0c1220] text-[#dce6f5]">
      <Starfield density={90} color="#4a6fa5" speed={0.03} />

      <div className="relative z-10 w-full max-w-2xl px-6 py-20">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.4em] text-[#4a6fa5]">origami · v44</p>

        <div className="relative aspect-[4/3] perspective-[1200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={panel}
              initial={
                reduce
                  ? false
                  : {
                      rotateY: foldDir === "left" ? -90 : 90,
                      opacity: 0,
                      transformOrigin: foldDir === "left" ? "left center" : "right center",
                    }
              }
              animate={{ rotateY: 0, opacity: 1 }}
              exit={
                reduce
                  ? undefined
                  : {
                      rotateY: prev === panel ? 0 : foldDir === "left" ? 90 : -90,
                      opacity: 0,
                      transformOrigin: foldDir === "left" ? "right center" : "left center",
                    }
              }
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-2xl border border-[#4a6fa5]/30 bg-gradient-to-br from-[#152035] to-[#0a1018] p-8 shadow-2xl"
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            >
              {panel === "hero" && (
                <>
                  <h1 className="font-[family-name:var(--font-display)] text-4xl text-[#e8f2ff]">{cv.name}</h1>
                  <p className="mt-2 text-[#5a9fd4]">{cv.title}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#dce6f5]/75">{cv.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cv.highlights.map((h) => (
                      <span key={h.label} className="rounded border border-[#4a6fa5]/30 px-2 py-1 text-xs">
                        {h.value}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {panel === "exp" && (
                <>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl">Experience</h2>
                  <div className="mt-4 max-h-[calc(100%-3rem)] overflow-y-auto text-sm">
                    <ExperienceList tone="dark" />
                  </div>
                </>
              )}
              {panel === "skills" && (
                <>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl">Skills</h2>
                  <div className="mt-4 max-h-[calc(100%-3rem)] overflow-y-auto text-sm">
                    <SkillsCloud tone="dark" />
                  </div>
                </>
              )}
              {panel === "work" && (
                <>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl">Projects</h2>
                  <div className="mt-4 text-sm">
                    <ProjectLinks tone="dark" />
                    <ContactRow className="mt-6" />
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <nav className="mt-8 flex flex-wrap justify-center gap-2">
          {PANELS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => go(p.id)}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-wider transition ${
                panel === p.id
                  ? "bg-[#5a9fd4] text-[#0c1220]"
                  : "border border-[#4a6fa5]/40 text-[#4a6fa5] hover:bg-[#4a6fa5]/10"
              }`}
            >
              {p.label}
            </button>
          ))}
        </nav>
      </div>
    </main>
  );
}
