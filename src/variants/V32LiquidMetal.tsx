"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";

const HEADLINES = [cv.name, cv.title, "Applied AI · Production Scale"];

export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const [headIdx, setHeadIdx] = useState(0);
  const [morph, setMorph] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setMorph(true);
      setTimeout(() => {
        setHeadIdx((i) => (i + 1) % HEADLINES.length);
        setMorph(false);
      }, 600);
    }, 4200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0c10] text-[#d4dce8]">
      <Starfield density={120} color="#8899aa" speed={0.04} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(180,190,210,0.12), transparent 60%), radial-gradient(circle at 80% 80%, rgba(100,120,140,0.15), transparent 40%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-24">
        <p className="text-xs uppercase tracking-[0.4em] text-[#8899aa]">liquid metal · v32</p>

        <div className="relative mt-10 min-h-[120px] sm:min-h-[160px]">
          <motion.h1
            className="font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-6xl lg:text-7xl"
            animate={
              reduce
                ? {}
                : {
                    filter: morph
                      ? "blur(8px) contrast(1.8) brightness(1.4)"
                      : "blur(0px) contrast(1.1) brightness(1.05)",
                    scale: morph ? 1.02 : 1,
                  }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(135deg, #e8eef5 0%, #8a9aaa 35%, #f0f4f8 55%, #6b7d8f 75%, #dce4ec 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: morph ? "0 0 40px rgba(200,210,230,0.5)" : "none",
            }}
          >
            {HEADLINES[headIdx]}
          </motion.h1>
          {!reduce && (
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                backgroundSize: "200% 100%",
              }}
            />
          )}
        </div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-2xl text-sm leading-relaxed text-[#d4dce8]/75"
        >
          {cv.summary}
        </motion.p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div
            className="rounded-3xl border border-[#8899aa]/20 p-6 backdrop-blur-sm"
            style={{ background: "linear-gradient(145deg, rgba(40,48,58,0.6), rgba(20,24,30,0.8))" }}
          >
            <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8899aa]">Experience</h2>
            <ExperienceList tone="dark" />
          </div>
          <div className="space-y-8">
            <div
              className="rounded-3xl border border-[#8899aa]/20 p-6 backdrop-blur-sm"
              style={{ background: "linear-gradient(145deg, rgba(40,48,58,0.6), rgba(20,24,30,0.8))" }}
            >
              <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8899aa]">Skills</h2>
              <SkillsCloud tone="dark" />
            </div>
            <div
              className="rounded-3xl border border-[#8899aa]/20 p-6 backdrop-blur-sm"
              style={{ background: "linear-gradient(145deg, rgba(40,48,58,0.6), rgba(20,24,30,0.8))" }}
            >
              <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8899aa]">Projects</h2>
              <ProjectLinks tone="dark" />
              <ContactRow className="mt-6" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
