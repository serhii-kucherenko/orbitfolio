"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import type { CV } from "@/data/cv";

export type AwardLayout = "museum" | "planet" | "rail" | "snap" | "terminal" | "editorial" | "swiss" | "brutal" | "liquid" | "ascii" | "canvas" | "origami" | "telescope" | "chat" | "split" | "clinic" | "bauhaus" | "iso" | "credits" | "waveform" | "journey" | "covers" | "ring" | "warp" | "holo" | "blueprint" | "chart" | "chapters" | "docs" | "mosaic" | "glass" | "kinetic" | "void" | "horizon" | "solar" | "briefing" | "swarm";

export type AwardVariantConfig = {
  id: number;
  name: string;
  thesis: string;
  layout: AwardLayout;
  team: string;
  accent: string;
  background: string;
  light: boolean;
};

type Props = {
  cv: CV;
  config: AwardVariantConfig;
  reduceMotion: boolean;
  scene?: ReactNode;
};

const heroStructure: Record<AwardLayout, string> = {
  museum: "items-end md:grid-cols-[1.25fr_0.75fr]",
  planet: "items-center md:grid-cols-2",
  rail: "items-end md:grid-cols-[0.8fr_1.2fr]",
  snap: "items-center md:grid-cols-[1.2fr_0.8fr]",
  terminal: "items-end md:grid-cols-[1fr_0.8fr]",
  editorial: "items-end md:grid-cols-[1.35fr_0.65fr]",
  swiss: "items-start md:grid-cols-[1.5fr_0.5fr]",
  brutal: "items-end md:grid-cols-[1.4fr_0.6fr]",
  liquid: "items-center md:grid-cols-2",
  ascii: "items-end md:grid-cols-[1fr_0.9fr]",
  canvas: "items-center md:grid-cols-[1.15fr_0.85fr]",
  origami: "items-end md:grid-cols-[0.9fr_1.1fr]",
  telescope: "items-center md:grid-cols-2",
  chat: "items-center md:grid-cols-[0.85fr_1.15fr]",
  split: "items-stretch md:grid-cols-2",
  clinic: "items-center md:grid-cols-[1.1fr_0.9fr]",
  bauhaus: "items-end md:grid-cols-[1.3fr_0.7fr]",
  iso: "items-center md:grid-cols-[0.9fr_1.1fr]",
  credits: "items-center md:grid-cols-1",
  waveform: "items-end md:grid-cols-[1fr_1fr]",
  journey: "items-center md:grid-cols-[0.85fr_1.15fr]",
  covers: "items-end md:grid-cols-[1.2fr_0.8fr]",
  ring: "items-center md:grid-cols-2",
  warp: "items-end md:grid-cols-[1.35fr_0.65fr]",
  holo: "items-center md:grid-cols-[1.1fr_0.9fr]",
  blueprint: "items-start md:grid-cols-[1.25fr_0.75fr]",
  chart: "items-center md:grid-cols-[0.9fr_1.1fr]",
  chapters: "items-end md:grid-cols-[1.15fr_0.85fr]",
  docs: "items-start md:grid-cols-[0.7fr_1.3fr]",
  mosaic: "items-end md:grid-cols-[1.25fr_0.75fr]",
  glass: "items-center md:grid-cols-[1.1fr_0.9fr]",
  kinetic: "items-end md:grid-cols-[1.45fr_0.55fr]",
  void: "items-center md:grid-cols-[1.3fr_0.7fr]",
  horizon: "items-center md:grid-cols-2",
  solar: "items-center md:grid-cols-[0.9fr_1.1fr]",
  briefing: "items-end md:grid-cols-[1.2fr_0.8fr]",
  swarm: "items-center md:grid-cols-[1.1fr_0.9fr]",
};

function Contact({ cv }: { cv: CV }) {
  return (
    <address className="flex flex-wrap gap-x-5 gap-y-2 text-sm not-italic">
      <a href={`mailto:${cv.email}`}>{cv.email}</a>
      <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
      <span>{cv.location}</span>
    </address>
  );
}

function Experience({ cv }: { cv: CV }) {
  return (
    <div className="space-y-8">
      {cv.experience.map((job) => (
        <article key={`${job.company}-${job.period}`} className="break-inside-avoid border-t border-current/20 pt-4">
          <p className="text-[10px] uppercase tracking-[0.24em] opacity-55">{job.period}</p>
          <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
          <p className="text-sm opacity-70">{job.company} · {job.place}</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed opacity-80">
            {job.bullets.map((bullet) => <li key={bullet} className="pl-4 before:-ml-4 before:mr-2 before:content-['↳']">{bullet}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

function Skills({ cv }: { cv: CV }) {
  return (
    <div className="space-y-6">
      {Object.entries(cv.skills).map(([group, skills]) => (
        <section key={group}>
          <h3 className="text-[10px] uppercase tracking-[0.28em] opacity-55">{group}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => <span key={skill} className="border border-current/20 px-3 py-1 text-xs">{skill}</span>)}
          </div>
        </section>
      ))}
    </div>
  );
}

function Projects({ cv }: { cv: CV }) {
  return (
    <div className="space-y-5">
      {cv.projects.map((project) => (
        <article key={project.name} className="border-t border-current/20 pt-4">
          <a href={project.url} target="_blank" rel="noreferrer" className="text-lg font-semibold underline decoration-current/30 underline-offset-4">
            {project.name} ↗
          </a>
          <p className="mt-2 text-sm leading-relaxed opacity-70">{project.blurb}</p>
        </article>
      ))}
    </div>
  );
}

function Artwork({ config, scene, reduceMotion }: Pick<Props, "config" | "scene" | "reduceMotion">) {
  if (scene) return <div className="h-[42vh] min-h-72 w-full" aria-hidden>{scene}</div>;
  if (config.layout === "waveform") return <div className="flex h-52 items-center gap-1" aria-hidden>{Array.from({ length: 32 }, (_, index) => <motion.i key={index} className="w-full" style={{ background: config.accent }} animate={reduceMotion ? { height: "24%" } : { height: [20 + index % 5 * 8 + "%", 75 - index % 4 * 7 + "%", 20 + index % 5 * 8 + "%"] }} transition={{ duration: 1.5 + index % 4 * 0.25, repeat: Infinity }} />)}</div>;
  if (config.layout === "journey" || config.layout === "chart" || config.layout === "solar") return <svg viewBox="0 0 600 280" className="w-full" aria-hidden><path d="M30 220 C120 40 210 250 300 95 S470 30 570 170" fill="none" stroke={config.accent} strokeWidth="3" strokeDasharray="8 10" />{[70,190,310,440,550].map((x, index) => <circle key={x} cx={x} cy={[160,128,92,70,160][index]} r={9 + index * 2} fill={config.accent} opacity={0.45 + index * 0.1} />)}</svg>;
  if (config.layout === "telescope" || config.layout === "horizon" || config.layout === "ring") return <div className="relative mx-auto aspect-square w-[min(65vw,360px)] rounded-full border border-current/30" style={{ boxShadow: `0 0 90px ${config.accent}44, inset 0 0 70px ${config.accent}22` }} aria-hidden><div className="absolute inset-[18%] rounded-full border border-current/30" /><div className="absolute inset-[39%] rounded-full" style={{ background: config.accent }} /></div>;
  if (config.layout === "chat") return <div className="space-y-3" aria-hidden><p className="mr-12 rounded-3xl rounded-bl-sm border border-current/20 p-4">What does Serhii ship?</p><p className="ml-12 rounded-3xl rounded-br-sm p-4 text-black" style={{ background: config.accent }}>Production AI systems, end to end.</p><p className="mr-12 rounded-3xl rounded-bl-sm border border-current/20 p-4">Show me the evidence ↓</p></div>;
  if (config.layout === "bauhaus" || config.layout === "iso" || config.layout === "origami") return <div className="relative mx-auto h-72 max-w-md" aria-hidden><motion.div className="absolute left-4 top-6 h-40 w-40 rotate-12" style={{ background: config.accent }} animate={reduceMotion ? undefined : { rotate: [12, 18, 12] }} transition={{ duration: 6, repeat: Infinity }} /><div className="absolute bottom-2 right-10 h-36 w-36 rounded-full bg-blue-500" /><div className="absolute bottom-10 left-28 h-24 w-44 -rotate-6 bg-red-500 mix-blend-screen" /></div>;
  if (config.layout === "ascii" || config.layout === "terminal" || config.layout === "blueprint") return <pre className="overflow-hidden whitespace-pre text-xs leading-5 opacity-65" aria-hidden>{`  ╭──────── ORBITFOLIO ────────╮
  │  SIGNAL: PRODUCTION READY  │
  │  AI  ●━━━━━━  PLATFORM    │
  │      \  ◉  /              │
  │  SHIP ━━━━━━━ LEAD        │
  ╰────────────────────────────╯`}</pre>;
  if (config.layout === "swarm" || config.layout === "canvas") return <div className="relative h-72" aria-hidden>{Array.from({ length: 24 }, (_, index) => <motion.i key={index} className="absolute h-2 w-2 rounded-full" style={{ background: config.accent, left: `${8 + index % 8 * 12}%`, top: `${12 + Math.floor(index / 8) * 32 + index % 3 * 4}%` }} animate={reduceMotion ? undefined : { x: [0, (index % 5 - 2) * 12, 0], y: [0, (index % 4 - 2) * 10, 0] }} transition={{ duration: 3 + index % 4, repeat: Infinity }} />)}</div>;
  return <div className="relative h-64 overflow-hidden" aria-hidden><div className="absolute inset-6 border border-current/20" /><div className="absolute inset-x-0 top-1/2 h-px bg-current/25" /><motion.div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: config.accent, filter: "blur(2px)" }} animate={reduceMotion ? undefined : { scale: [0.92, 1.08, 0.92], rotate: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity }} /></div>;
}

function Archive({ cv, config, reduceMotion }: Omit<Props, "scene">) {
  const rail = config.layout === "rail" || config.layout === "covers";
  const snap = config.layout === "snap" || config.layout === "chapters" || config.layout === "credits";
  const columns = config.layout === "editorial" || config.layout === "brutal";
  const mosaic = config.layout === "mosaic" || config.layout === "bauhaus" || config.layout === "iso";
  const entry = reduceMotion ? {} : { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.08 }, transition: { duration: 0.65 } };
  const sectionClass = rail
    ? "w-[min(88vw,680px)] shrink-0 snap-center border border-current/20 p-6 sm:p-10"
    : snap
      ? "flex min-h-[75svh] snap-start flex-col justify-center border-t border-current/20 py-16"
      : "border border-current/15 p-6 sm:p-10";
  return (
    <div className={rail ? "flex snap-x snap-mandatory gap-5 overflow-x-auto px-[6vw] pb-20" : snap ? "snap-y snap-mandatory" : mosaic ? "grid gap-5 lg:grid-cols-12" : columns ? "grid gap-5 lg:grid-cols-2" : "grid gap-5 lg:grid-cols-[1.2fr_0.8fr]"}>
      <motion.section {...entry} className={`${sectionClass} ${mosaic ? "lg:col-span-7" : columns ? "lg:row-span-2" : ""}`}>
        <p className="mb-7 text-xs uppercase tracking-[0.3em] opacity-50">01 / Experience</p>
        <Experience cv={cv} />
      </motion.section>
      <motion.section {...entry} className={`${sectionClass} ${mosaic ? "lg:col-span-5" : ""}`}>
        <p className="mb-7 text-xs uppercase tracking-[0.3em] opacity-50">02 / Capabilities</p>
        <Skills cv={cv} />
      </motion.section>
      <motion.section {...entry} className={`${sectionClass} ${mosaic ? "lg:col-span-8" : ""}`}>
        <p className="mb-7 text-xs uppercase tracking-[0.3em] opacity-50">03 / Selected work</p>
        <Projects cv={cv} />
      </motion.section>
      <motion.section {...entry} className={`${sectionClass} ${mosaic ? "lg:col-span-4" : ""}`}>
        <p className="mb-5 text-xs uppercase tracking-[0.3em] opacity-50">04 / Contact</p>
        <Contact cv={cv} />
        <p className="mt-8 text-sm leading-relaxed opacity-65">{cv.education.degree} · {cv.education.school}</p>
      </motion.section>
    </div>
  );
}

export function AwardVariant({ cv, config, reduceMotion, scene }: Props) {
  const ink = config.light ? "#101820" : "#f8fafc";
  const paper = config.light ? "#f4f8f7" : config.background;
  const style = { "--accent": config.accent, color: ink, background: paper } as CSSProperties;
  const heroMotion = reduceMotion ? {} : { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.85, ease: "easeOut" as const } };
  const specialSurface = config.layout === "glass" || config.layout === "holo" || config.layout === "liquid";
  return (
    <main className={`min-h-screen overflow-hidden ${config.layout === "ascii" || config.layout === "terminal" ? "font-[family-name:var(--font-mono)]" : ""}`} style={style}>
      <div className="pointer-events-none fixed inset-0 opacity-[0.14]" style={{ backgroundImage: `linear-gradient(${config.accent}44 1px, transparent 1px), linear-gradient(90deg, ${config.accent}33 1px, transparent 1px)`, backgroundSize: config.layout === "blueprint" ? "28px 28px" : "96px 96px" }} aria-hidden />
      <section className={`relative grid min-h-[100svh] gap-10 px-[6vw] pb-14 pt-28 ${heroStructure[config.layout]} ${config.layout === "split" ? "md:px-0 md:pb-0" : ""}`}>
        <motion.header {...heroMotion} className={`relative z-10 ${config.layout === "split" ? "flex flex-col justify-end p-[6vw]" : ""}`}>
          <p className="text-[10px] uppercase tracking-[0.34em] opacity-55">{config.team} · Cell {String(config.id).padStart(3, "0")}</p>
          <h1 className={`mt-5 font-[family-name:var(--font-display)] font-bold uppercase leading-[0.82] tracking-[-0.07em] ${config.layout === "kinetic" || config.layout === "brutal" ? "text-[clamp(4.8rem,15vw,13rem)]" : "text-[clamp(4rem,11vw,10rem)]"}`}>
            <span className="block">{cv.name.split(" ")[0]}</span>
            <span className="block" style={{ color: config.accent }}>{cv.name.split(" ")[1]}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-medium">{cv.title}</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 opacity-70">{cv.summary}</p>
          <div className="mt-8"><Contact cv={cv} /></div>
        </motion.header>
        <motion.aside {...heroMotion} className={`relative z-10 ${specialSurface ? "border border-current/15 bg-white/5 p-5 backdrop-blur-xl" : ""} ${config.layout === "split" ? "flex flex-col justify-between p-[6vw]" : ""}`}>
          <Artwork config={config} scene={scene} reduceMotion={reduceMotion} />
          <div className="mt-6 border-t border-current/20 pt-5">
            <p className="text-xs uppercase tracking-[0.26em]" style={{ color: config.accent }}>{config.name}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-65">{config.thesis}</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {cv.highlights.map((highlight) => <div key={highlight.label}><strong className="text-xl" style={{ color: config.accent }}>{highlight.value}</strong><p className="text-[9px] uppercase tracking-wider opacity-55">{highlight.label}</p></div>)}
            </div>
          </div>
        </motion.aside>
      </section>
      <section className="relative z-10 px-[6vw] pb-24">
        <Archive cv={cv} config={config} reduceMotion={reduceMotion} />
      </section>
    </main>
  );
}
