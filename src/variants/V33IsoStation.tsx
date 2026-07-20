"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";

const ROOMS = [
  { id: "bridge", label: "Bridge", icon: "◈", desc: "Command center" },
  { id: "lab", label: "AI Lab", icon: "⬡", desc: "Skills & systems" },
  { id: "bay", label: "Dock Bay", icon: "▣", desc: "Experience log" },
  { id: "comm", label: "Comms", icon: "◎", desc: "Projects & contact" },
] as const;

type RoomId = (typeof ROOMS)[number]["id"];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [room, setRoom] = useState<RoomId>("bridge");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080c14] text-[#c5d4e8]">
      <Starfield density={100} color="#4a6a8a" speed={0.03} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20">
        <p className="text-xs uppercase tracking-[0.35em] text-[#4a6a8a]">iso station · v33</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {ROOMS.map((r, i) => {
            const row = Math.floor(i / 2);
            const col = i % 2;
            return (
              <motion.button
                key={r.id}
                type="button"
                onClick={() => setRoom(r.id)}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group relative h-36 w-44 sm:h-44 sm:w-52"
                style={{
                  transform: `translate(${col * 8}px, ${row * -12}px)`,
                }}
              >
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    room === r.id ? "opacity-100" : "opacity-60 group-hover:opacity-90"
                  }`}
                  style={{
                    transform: "rotateX(55deg) rotateZ(-45deg)",
                    transformStyle: "preserve-3d",
                    background: room === r.id
                      ? "linear-gradient(135deg, #1a3050, #0d1828)"
                      : "linear-gradient(135deg, #142030, #0a1018)",
                    border: room === r.id ? "2px solid #5a9fd4" : "1px solid #2a4060",
                    boxShadow: room === r.id ? "0 0 30px rgba(90,159,212,0.3)" : "4px 4px 0 #050810",
                  }}
                >
                  <div className="flex h-full flex-col items-center justify-center p-4">
                    <span className="text-2xl text-[#5a9fd4]">{r.icon}</span>
                    <span className="mt-2 font-[family-name:var(--font-display)] text-sm">{r.label}</span>
                    <span className="text-[10px] text-[#4a6a8a]">{r.desc}</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={room}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-[#2a4060] bg-[#0d1520]/90 p-8 backdrop-blur"
        >
          {room === "bridge" && (
            <>
              <h1 className="font-[family-name:var(--font-display)] text-4xl text-[#e8f2ff] sm:text-5xl">{cv.name}</h1>
              <p className="mt-2 text-lg text-[#5a9fd4]">{cv.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#c5d4e8]/80">{cv.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {cv.highlights.map((h) => (
                  <span key={h.label} className="rounded border border-[#2a4060] px-3 py-1.5 text-xs">
                    <strong className="text-[#5a9fd4]">{h.value}</strong> {h.label}
                  </span>
                ))}
              </div>
            </>
          )}
          {room === "lab" && (
            <>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#e8f2ff]">Research Lab</h2>
              <div className="mt-6"><SkillsCloud tone="dark" /></div>
            </>
          )}
          {room === "bay" && (
            <>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#e8f2ff]">Mission Bay</h2>
              <div className="mt-6"><ExperienceList tone="dark" /></div>
            </>
          )}
          {room === "comm" && (
            <>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-[#e8f2ff]">Comms Array</h2>
              <div className="mt-6"><ProjectLinks tone="dark" /></div>
              <ContactRow className="mt-8" />
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}
