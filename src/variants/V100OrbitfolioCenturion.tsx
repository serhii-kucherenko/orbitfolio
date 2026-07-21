"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FallbackGlow, SceneCenturion, WebGLStage } from "@/components/webgl/AwardWebGL";
import { cv } from "@/data/cv";

/** Orbitfolio Centurion — champion hybrid: warp atmosphere + glass metrics + hire clarity + WebGL + Lenis */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
  const accent = "#67e8f9";
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.15]);
  const warpScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);

  return (
    <SmoothScroll>
    <main className="relative min-h-screen overflow-hidden bg-[#05080d] text-white">
      <WebGLStage
        accent={accent}
        reduce={reduce}
        label="Three.js champion warp core with orbital rings"
        className="pointer-events-none absolute inset-0 opacity-45"
        fallback={<FallbackGlow accent={accent} />}
      >
        <SceneCenturion accent={accent} />
      </WebGLStage>
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -10%, rgba(34,211,238,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 85% 55%, rgba(45,212,191,0.12), transparent 50%)",
        }}
        aria-hidden
      />
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            scale: warpScale,
            background:
              "repeating-conic-gradient(from 0deg at 50% 35%, transparent 0deg 7deg, rgba(56,189,248,0.07) 7deg 8deg)",
            transformOrigin: "center 28%",
          }}
          aria-hidden
        />
      )}

      <motion.section
        ref={heroRef}
        style={{ y: reduce ? 0 : heroY, opacity: reduce ? 1 : heroOpacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-28"
      >
        <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.45em] text-cyan-300/80">
          Champion · Orbitfolio Centurion · {cv.location}
        </p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="mt-6 font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="block">{cv.name.split(" ")[0]}</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #ecfeff 0%, #67e8f9 45%, #2dd4bf 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {cv.name.split(" ")[1]}
          </span>
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-5 text-xl text-sky-100/90 sm:text-2xl"
        >
          {cv.title}
        </motion.p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60">{cv.summary}</p>

        <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((item) => (
            <div
              key={item.label}
              className="border border-cyan-300/20 bg-cyan-300/10 px-3 py-4 backdrop-blur-xl"
            >
              <p className="text-2xl font-bold text-cyan-200 sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-cyan-100/55">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${cv.email}`}
            className="bg-cyan-300 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Start a conversation
          </a>
          <a
            href={cv.github}
            target="_blank"
            rel="noreferrer"
            className="border border-white/25 bg-white/5 px-6 py-3 text-sm backdrop-blur transition hover:border-white/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Explore GitHub
          </a>
          <Link
            href="/resume"
            className="border border-white/25 bg-white/5 px-6 py-3 text-sm backdrop-blur transition hover:border-white/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Printable resume
          </Link>
        </div>
        <ContactRow className="mt-8 text-cyan-100/70" />
      </motion.section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-cyan-300">01 / Impact</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-black sm:text-5xl">
            Career evidence
          </h2>
          <div className="mt-12">
            <ExperienceList tone="dark" />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-2 md:px-12">
        <div className="border border-white/10 bg-gradient-to-br from-cyan-300/10 to-transparent p-8 backdrop-blur">
          <p className="text-cyan-300">02 / Systems</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-black">
            Capability matrix
          </h2>
          <div className="mt-8">
            <SkillsCloud />
          </div>
        </div>
        <div className="border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-cyan-300">03 / Shipped</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-black">
            Selected work
          </h2>
          <div className="mt-8">
            <ProjectLinks />
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-16 text-center">
        <p className="text-xl font-semibold">{cv.education.degree}</p>
        <p className="mt-2 text-sm text-slate-400">
          {cv.education.school} · {cv.location}
        </p>
        <ContactRow className="mt-8 justify-center text-cyan-100/70" />
        <p className="mt-10 text-xs text-white/35">
          Steals the strongest motion, editorial authority, spatial wonder, and hire clarity from the full
          99-cell ladder — now with a real WebGL warp core.
        </p>
      </footer>
    </main>
    </SmoothScroll>
  );
}
