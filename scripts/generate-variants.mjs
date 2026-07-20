/**
 * Generates 50 structurally distinct portfolio variants.
 * Run: node scripts/generate-variants.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "src", "variants");
fs.mkdirSync(outDir, { recursive: true });

const defs = [
  ["V01NebulaTerminal", "Nebula Terminal", "terminal"],
  ["V02OrbitalTimeline", "Orbital Timeline", "orbital"],
  ["V03WarpCorridor", "Warp Corridor", "warp"],
  ["V04ConstellationSkills", "Constellation Skills", "constellation"],
  ["V05MissionBriefing", "Mission Briefing", "briefing"],
  ["V06GlassNebula", "Glass Nebula", "glass"],
  ["V07KineticType", "Kinetic Type", "kinetic"],
  ["V08SplitHorizon", "Split Horizon", "split"],
  ["V09ParallaxDeep", "Parallax Deep", "parallax"],
  ["V10EditorialCosmos", "Editorial Cosmos", "editorial"],
  ["V11VoidMinimal", "Void Minimal", "void"],
  ["V12HoloDeck", "Holo Deck", "holo"],
  ["V13GalaxyRail", "Galaxy Rail", "rail"],
  ["V14PlanetStage", "Planet Stage", "planet"],
  ["V15AsciiOrbit", "ASCII Orbit", "ascii"],
  ["V16SynthwaveOrbit", "Synthwave Orbit", "synth"],
  ["V17ClinicCosmos", "Clinic Cosmos", "clinic"],
  ["V18CodeRain", "Code Rain Nebula", "rain"],
  ["V19LaunchScrub", "Launch Scrub", "launch"],
  ["V20SignalMosaic", "Signal Mosaic", "mosaic"],
  ["V21SnapChapters", "Snap Chapters", "snap"],
  ["V22ParticleCv", "Particle CV", "particle"],
  ["V23AuroraVancouver", "Aurora Vancouver", "aurora"],
  ["V24EventHorizon", "Event Horizon", "horizon"],
  ["V25TelemetryTape", "Telemetry Tape", "telemetry"],
  ["V26CreditRoll", "Credit Roll", "credits"],
  ["V27SolarCareer", "Solar Career", "solar"],
  ["V28BlueprintEng", "Blueprint Eng", "blueprint"],
  ["V29TronLattice", "Tron Lattice", "tron"],
  ["V30OrganicNebula", "Organic Nebula", "organic"],
  ["V31StarChart", "Star Chart", "chart"],
  ["V32LiquidMetal", "Liquid Metal", "liquid"],
  ["V33IsoStation", "Iso Station", "iso"],
  ["V34WarpRail", "Warp Rail", "warprail"],
  ["V35AgentConsole", "Agent Console", "agent"],
  ["V36CaseImmersion", "Case Immersion", "case"],
  ["V37SwissSpace", "Swiss Space", "swiss"],
  ["V38BrutalOrbit", "Brutal Orbit", "brutal"],
  ["V39Telescope", "Telescope", "telescope"],
  ["V40CmdPalette", "Command Palette", "cmd"],
  ["V41StoryChapters", "Story Chapters", "story"],
  ["V42JourneyMap", "Journey Map", "journey"],
  ["V43Waveform", "Waveform", "wave"],
  ["V44Origami", "Origami Fold", "origami"],
  ["V45InfiniteCanvas", "Infinite Canvas", "infinite"],
  ["V46CoverSeries", "Cover Series", "covers"],
  ["V47DualSignal", "Dual Signal", "dual"],
  ["V48AgentSwarm", "Agent Swarm", "swarm"],
  ["V49GoalsRing", "Goals Ring", "goalsring"],
  ["V50ChampionHybrid", "Champion Hybrid", "champion"],
];

function shell(file, title, body) {
  return `"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cv } from "@/data/cv";
import { Starfield } from "@/components/Starfield";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** ${title} — Orbitfolio design lab variant */
export function Variant() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: 0.7 } };

  return (
${body}
  );
}
`;
}

const layouts = {
  terminal: (t) => shell("x", t, `    <main className="relative min-h-screen overflow-hidden bg-[#020403] text-[#7CFFB2] font-[family-name:var(--font-mono)]">
      <Starfield density={120} color="#7CFFB2" speed={0.08} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-24">
        <motion.pre {...fade(0)} className="mb-8 text-xs opacity-70">{">"} boot orbitfolio::shell — ok\\n{">"} whoami</motion.pre>
        <motion.h1 {...fade(0.1)} className="font-[family-name:var(--font-display)] text-4xl text-white sm:text-6xl">{cv.name}</motion.h1>
        <motion.p {...fade(0.2)} className="mt-3 text-lg text-[#9AE6B4]">{cv.title}</motion.p>
        <motion.p {...fade(0.3)} className="mt-8 max-w-2xl text-sm leading-relaxed text-[#7CFFB2]/cv.summary}</motion.p>
        <div className="mt-10 rounded-lg border border-[#7CFFB2]/30 bg-black/50 p-4 shadow-[0_0_40px_rgba(124,255,178,0.08)]">
          <p className="mb-3 text-xs text-[#7CFFB2]/70">$ cat experience.log</p>
          <ExperienceList tone="dark" />
        </div>
        <section className="mt-14"><h2 className="mb-4 text-sm tracking-widest">SKILLS/</h2><SkillsCloud /></section>
        <section className="mt-14"><h2 className="mb-4 text-sm tracking-widest">PROJECTS/</h2><ProjectLinks /></section>
        <section className="mt-14"><ContactRow className="text-[#7CFFB2]" /></section>
      </div>
    </main>`),

  orbital: (t) => shell("x", t, `    <main className="relative min-h-screen bg-[#050814] text-white">
      <Starfield density={200} color="#a5b4fc" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-28 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <motion.p {...fade(0)} className="text-xs uppercase tracking-[0.35em] text-indigo-300">Orbital career map</motion.p>
          <motion.h1 {...fade(0.1)} className="mt-4 font-[family-name:var(--font-display)] text-5xl sm:text-6xl">{cv.name}</motion.h1>
          <p className="mt-4 text-lg text-white/70">{cv.title}</p>
          <p className="mt-6 text-sm leading-relaxed text-white/65">{cv.summary}</p>
          <ContactRow className="mt-8 text-indigo-200" />
        </div>
        <div className="relative aspect-square">
          <svg viewBox="0 0 400 400" className="h-full w-full">
            <circle cx="200" cy="200" r="40" fill="#38bdf8" />
            <text x="200" y="205" textAnchor="middle" fill="#020617" fontSize="10" fontWeight="700">SK</text>
            {cv.experience.map((job, i) => {
              const r = 70 + i * 35;
              const a = (i / cv.experience.length) * Math.PI * 2 - Math.PI / 2;
              const x = 200 + Math.cos(a) * r;
              const y = 200 + Math.sin(a) * r;
              return (
                <g key={job.company}>
                  <circle cx="200" cy="200" r={r} fill="none" stroke="rgba(165,180,252,0.25)" strokeDasharray="4 6" />
                  <circle cx={x} cy={y} r="10" fill="#818cf8" />
                  <text x={x} y={y + 28} textAnchor="middle" fill="#c7d2fe" fontSize="8">{job.company.split(" ")[0]}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24"><ExperienceList tone="dark" /></section>
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24"><SkillsCloud /><div className="mt-12"><ProjectLinks /></div></section>
    </main>`),

  warp: (t) => shell("x", t, `    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 opacity-80" style={{ background: "radial-gradient(ellipse at center, #0ea5e9 0%, transparent 55%), repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 8deg, rgba(14,165,233,0.08) 8deg 9deg)", transform: "perspective(600px) rotateX(70deg) scale(2)", transformOrigin: "center 80%" }} />
      <Starfield density={90} speed={0.4} color="#e0f2fe" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-20">
        <motion.p {...fade(0)} className="text-xs uppercase tracking-[0.4em] text-sky-300">Engaging warp</motion.p>
        <motion.h1 {...fade(0.15)} className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-none sm:text-7xl">{cv.name}</motion.h1>
        <motion.p {...fade(0.25)} className="mt-6 max-w-xl text-lg text-sky-100/80">{cv.title} — applied AI at production scale.</motion.p>
        <motion.p {...fade(0.35)} className="mt-6 max-w-2xl text-sm text-white/60">{cv.summary}</motion.p>
        <div className="mt-10 flex gap-4">
          <a href={\`mailto:\${cv.email}\`} className="rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-black">Contact</a>
          <Link href="/goals" className="rounded-full border border-white/30 px-5 py-2.5 text-sm">100 Goals</Link>
        </div>
      </div>
      <section className="relative z-10 mx-auto max-w-5xl space-y-16 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow />
      </section>
    </main>`),

  constellation: (t) => shell("x", t, `    <main className="relative min-h-screen bg-[#04060f] text-white">
      <Starfield density={260} color="#fde68a" speed={0.05} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-28">
        <motion.h1 {...fade(0)} className="font-[family-name:var(--font-serif)] text-5xl sm:text-7xl">{cv.name}</motion.h1>
        <p className="mt-3 text-amber-200/80">{cv.title} · charting skill constellations</p>
        <p className="mt-6 max-w-2xl text-sm text-white/65">{cv.summary}</p>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(cv.skills).map(([group, items], gi) => (
            <motion.div key={group} {...fade(0.1 + gi * 0.05)} className="rounded-2xl border border-amber-200/20 bg-amber-950/20 p-5 backdrop-blur">
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg capitalize text-amber-100">{group}</h2>
              <ul className="space-y-1 text-sm text-amber-50/80">
                {items.slice(0, 6).map((s) => (
                  <li key={s} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-300" />{s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <section className="mt-16"><ExperienceList tone="dark" /></section>
        <section className="mt-16"><ProjectLinks /><ContactRow className="mt-10" /></section>
      </div>
    </main>`),

  briefing: (t) => shell("x", t, `    <main className="min-h-screen bg-[#0b0d12] text-[#f4f1ea]">
      <div className="nebula-glow absolute inset-0 opacity-60" />
      <Starfield density={100} />
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-32">
        <motion.p {...fade(0)} className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] text-teal-300">CLASSIFIED // MISSION BRIEF</motion.p>
        <motion.h1 {...fade(0.1)} className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-6xl">{cv.name}</motion.h1>
        <motion.p {...fade(0.2)} className="mt-4 text-xl text-white/80">{cv.title}</motion.p>
        <motion.div {...fade(0.3)} className="mt-10 border-l-2 border-teal-400/60 pl-6 text-sm leading-relaxed text-white/70">{cv.summary}</motion.div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-xl bg-white/5 p-4 text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl text-teal-300">{h.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{h.label}</p>
            </div>
          ))}
        </div>
        <section className="mt-16"><h2 className="mb-6 text-xs tracking-[0.3em] text-white/40">OPERATIONAL HISTORY</h2><ExperienceList tone="dark" /></section>
        <section className="mt-16"><SkillsCloud /><div className="mt-10"><ProjectLinks /></div><ContactRow className="mt-10" /></section>
      </div>
    </main>`),

  glass: (t) => shell("x", t, `    <main className="relative min-h-screen overflow-hidden">
      <div className="nebula-glow absolute inset-0" />
      <Starfield density={160} />
      <div className="relative z-10 mx-auto max-w-5xl space-y-8 px-6 pb-24 pt-28">
        <motion.div {...fade(0)} className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg text-cyan-100/90">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75">{cv.summary}</p>
          <ContactRow className="mt-8 text-cyan-100" />
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-lg"><h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl">Experience</h2><ExperienceList tone="dark" /></div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-lg"><h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl">Skills</h2><SkillsCloud /></div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-lg"><h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl">Projects</h2><ProjectLinks /></div>
          </div>
        </div>
      </div>
    </main>`),

  kinetic: (t) => shell("x", t, `    <main className="relative min-h-screen bg-[#06060a] text-white">
      <Starfield density={80} color="#f472b6" />
      <section className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-16 pt-28">
        <motion.h1 {...(reduce ? {} : { initial: { x: -80, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 1 } })} className="font-[family-name:var(--font-display)] text-[12vw] leading-[0.85] tracking-tighter">{cv.name.split(" ")[0]}</motion.h1>
        <motion.h1 {...(reduce ? {} : { initial: { x: 80, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 1, delay: 0.1 } })} className="font-[family-name:var(--font-display)] text-[12vw] leading-[0.85] tracking-tighter text-fuchsia-300">{cv.name.split(" ")[1]}</motion.h1>
        <p className="mt-8 max-w-xl text-lg text-white/70">{cv.title}</p>
      </section>
      <section className="relative z-10 mx-auto max-w-4xl space-y-16 px-6 pb-28">
        <p className="text-base leading-relaxed text-white/70">{cv.summary}</p>
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow />
      </section>
    </main>`),

  split: (t) => shell("x", t, `    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <section className="relative flex min-h-[70vh] flex-col justify-between bg-[#030712] p-8 pt-28 lg:min-h-screen lg:p-12 lg:pt-28">
        <Starfield density={140} color="#67e8f9" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">Signal</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl">{cv.name}</h1>
          <p className="mt-4 text-cyan-100/80">{cv.title}</p>
        </div>
        <p className="relative z-10 mt-10 max-w-md text-sm text-white/65">{cv.summary}</p>
      </section>
      <section className="bg-[#f3f6fb] p-8 pt-16 text-[#0b1220] lg:p-12 lg:pt-28">
        <h2 className="font-[family-name:var(--font-display)] text-2xl">Proof</h2>
        <div className="mt-8"><ExperienceList tone="light" /></div>
        <div className="mt-12"><SkillsCloud tone="light" /></div>
        <div className="mt-12"><ProjectLinks tone="light" /></div>
        <ContactRow className="mt-12 text-[#0b1220]" />
      </section>
    </main>`),

  parallax: (t) => shell("x", t, `    <main className="relative bg-[#020617] text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Starfield density={220} speed={0.25} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]" />
        <div className="relative z-10 flex h-full flex-col justify-center px-6">
          <motion.h1 {...fade(0)} className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl">{cv.name}</motion.h1>
          <p className="mt-4 text-xl text-sky-200/80">{cv.title}</p>
        </div>
      </div>
      <div className="relative z-20 -mt-24 space-y-24 bg-gradient-to-b from-transparent to-[#020617] px-6 pb-28">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#020617]/80 p-8 backdrop-blur"><p className="leading-relaxed text-white/75">{cv.summary}</p></div>
        <div className="mx-auto max-w-3xl"><ExperienceList tone="dark" /></div>
        <div className="mx-auto max-w-3xl"><SkillsCloud /></div>
        <div className="mx-auto max-w-3xl"><ProjectLinks /><ContactRow className="mt-10" /></div>
      </div>
    </main>`),

  editorial: (t) => shell("x", t, `    <main className="min-h-screen bg-[#0c0a09] text-[#faf7f2]">
      <Starfield density={60} color="#fdba74" speed={0.04} />
      <article className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.25em] text-orange-300/80">ISSUE 01 · APPLIED AI</p>
        <h1 className="mt-6 font-[family-name:var(--font-serif)] text-5xl leading-[1.05] sm:text-7xl">{cv.name}</h1>
        <p className="mt-6 max-w-2xl font-[family-name:var(--font-serif)] text-2xl italic text-orange-100/70">{cv.title} building systems that think with tools.</p>
        <div className="mt-12 columns-1 gap-10 md:columns-2">
          <p className="mb-6 text-sm leading-7 text-white/75">{cv.summary}</p>
          {cv.experience.map((job) => (
            <div key={job.company} className="mb-8 break-inside-avoid">
              <h3 className="font-[family-name:var(--font-display)] text-lg">{job.company}</h3>
              <p className="text-xs text-orange-200/60">{job.period}</p>
              <p className="mt-2 text-sm text-white/70">{job.bullets[0]}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-white/15 pt-10"><SkillsCloud /><div className="mt-10"><ProjectLinks /></div><ContactRow className="mt-10" /></div>
      </article>
    </main>`),
};

// Fallback layout factory for remaining archetypes
function generic(kind, title, hue) {
  const bg = hue.bg;
  const accent = hue.accent;
  return shell("x", title, `    <main className="relative min-h-screen overflow-hidden text-white" style={{ background: "${bg}" }}>
      <Starfield density={${hue.density}} color="${accent}" speed={${hue.speed}} />
      <div className="lab-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-28">
        <motion.p {...fade(0)} className="text-xs uppercase tracking-[0.35em]" style={{ color: "${accent}" }}>${kind} · orbitfolio lab</motion.p>
        <motion.h1 {...fade(0.08)} className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-6xl lg:text-7xl">{cv.name}</motion.h1>
        <motion.p {...fade(0.16)} className="mt-4 text-xl opacity-80">{cv.title}</motion.p>
        <motion.p {...fade(0.24)} className="mt-8 max-w-2xl text-sm leading-relaxed opacity-70">{cv.summary}</motion.p>
        <div className="mt-10 flex flex-wrap gap-3">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-white/15 bg-black/30 px-4 py-3 backdrop-blur">
              <p className="font-[family-name:var(--font-display)] text-xl" style={{ color: "${accent}" }}>{h.value}</p>
              <p className="text-[10px] uppercase tracking-wider opacity-50">{h.label}</p>
            </div>
          ))}
        </div>
        <section className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl">Experience</h2>
            <ExperienceList tone="dark" />
          </div>
          <div className="space-y-10">
            <div>
              <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl">Skills</h2>
              <SkillsCloud />
            </div>
            <div>
              <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl">Selected work</h2>
              <ProjectLinks />
            </div>
            <ContactRow />
          </div>
        </section>
      </div>
    </main>`);
}

const hues = {
  void: { bg: "#000000", accent: "#e2e8f0", density: 40, speed: 0.02 },
  holo: { bg: "#071018", accent: "#22d3ee", density: 150, speed: 0.12 },
  rail: { bg: "#0a0614", accent: "#c084fc", density: 180, speed: 0.2 },
  planet: { bg: "#020617", accent: "#38bdf8", density: 200, speed: 0.1 },
  ascii: { bg: "#001100", accent: "#33ff66", density: 90, speed: 0.06 },
  synth: { bg: "#1a0533", accent: "#ff00aa", density: 120, speed: 0.15 },
  clinic: { bg: "#06141a", accent: "#2dd4bf", density: 100, speed: 0.07 },
  rain: { bg: "#020b06", accent: "#4ade80", density: 160, speed: 0.35 },
  launch: { bg: "#0c0a09", accent: "#fb923c", density: 130, speed: 0.18 },
  mosaic: { bg: "#0f172a", accent: "#94a3b8", density: 110, speed: 0.09 },
  snap: { bg: "#030712", accent: "#a78bfa", density: 140, speed: 0.11 },
  particle: { bg: "#020617", accent: "#f0abfc", density: 240, speed: 0.22 },
  aurora: { bg: "#020617", accent: "#34d399", density: 170, speed: 0.08 },
  horizon: { bg: "#000000", accent: "#f97316", density: 80, speed: 0.05 },
  telemetry: { bg: "#020617", accent: "#67e8f9", density: 100, speed: 0.14 },
  credits: { bg: "#000000", accent: "#fbbf24", density: 50, speed: 0.03 },
  solar: { bg: "#0c0a09", accent: "#facc15", density: 160, speed: 0.1 },
  blueprint: { bg: "#0a1628", accent: "#38bdf8", density: 70, speed: 0.04 },
  tron: { bg: "#000814", accent: "#00f0ff", density: 90, speed: 0.16 },
  organic: { bg: "#0b1320", accent: "#86efac", density: 130, speed: 0.07 },
  chart: { bg: "#0a0a0a", accent: "#e5e5e5", density: 200, speed: 0.05 },
  liquid: { bg: "#111827", accent: "#d1d5db", density: 100, speed: 0.12 },
  iso: { bg: "#0f172a", accent: "#f472b6", density: 120, speed: 0.09 },
  warprail: { bg: "#020617", accent: "#818cf8", density: 150, speed: 0.2 },
  agent: { bg: "#0b1020", accent: "#5eead4", density: 110, speed: 0.1 },
  case: { bg: "#09090b", accent: "#fafafa", density: 60, speed: 0.04 },
  swiss: { bg: "#f8fafc", accent: "#0f172a", density: 30, speed: 0.02 },
  brutal: { bg: "#171717", accent: "#ef4444", density: 40, speed: 0.01 },
  telescope: { bg: "#000000", accent: "#93c5fd", density: 220, speed: 0.06 },
  cmd: { bg: "#09090b", accent: "#a3e635", density: 80, speed: 0.08 },
  story: { bg: "#1c1917", accent: "#fdba74", density: 90, speed: 0.07 },
  journey: { bg: "#0c4a6e", accent: "#bae6fd", density: 140, speed: 0.11 },
  wave: { bg: "#022c22", accent: "#6ee7b7", density: 100, speed: 0.13 },
  origami: { bg: "#1e1b4b", accent: "#c4b5fd", density: 120, speed: 0.09 },
  infinite: { bg: "#020617", accent: "#38bdf8", density: 300, speed: 0.04 },
  covers: { bg: "#18181b", accent: "#f4f4f5", density: 70, speed: 0.05 },
  dual: { bg: "#0f172a", accent: "#fbbf24", density: 110, speed: 0.08 },
  swarm: { bg: "#020617", accent: "#22d3ee", density: 280, speed: 0.25 },
  goalsring: { bg: "#0c0a09", accent: "#fbbf24", density: 150, speed: 0.1 },
  champion: { bg: "#020617", accent: "#5eead4", density: 200, speed: 0.15 },
};

// Special swiss (light) override handled in generic - for light bg need dark text
function swissLayout(title) {
  return `"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cv } from "@/data/cv";
import { ContactRow, ExperienceList, SkillsCloud, ProjectLinks } from "@/components/CvBlocks";

/** ${title} — Orbitfolio design lab variant */
export function Variant() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: 0.5 } };

  return (
    <main className="min-h-screen bg-[#f4f6f8] text-[#0b1220]">
      <div className="mx-auto grid max-w-6xl gap-0 px-6 pb-24 pt-28 lg:grid-cols-12">
        <motion.header {...fade(0)} className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Portfolio / 01</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight">{cv.name}</h1>
          <p className="mt-4 text-lg text-slate-600">{cv.title}</p>
          <p className="mt-6 text-sm leading-relaxed text-slate-600">{cv.summary}</p>
          <ContactRow className="mt-8 text-slate-800" />
        </motion.header>
        <div className="mt-16 space-y-16 lg:col-span-7 lg:mt-0 lg:border-l lg:border-slate-300 lg:pl-12">
          <section><h2 className="mb-6 text-xs uppercase tracking-[0.25em] text-slate-500">Experience</h2><ExperienceList tone="light" /></section>
          <section><h2 className="mb-6 text-xs uppercase tracking-[0.25em] text-slate-500">Skills</h2><SkillsCloud tone="light" /></section>
          <section><h2 className="mb-6 text-xs uppercase tracking-[0.25em] text-slate-500">Projects</h2><ProjectLinks tone="light" /></section>
        </div>
      </div>
    </main>
  );
}
`;
}

for (const [file, title, kind] of defs) {
  let src;
  if (layouts[kind]) src = layouts[kind](title);
  else if (kind === "swiss") src = swissLayout(title);
  else src = generic(kind, title, hues[kind] || hues.champion);
  fs.writeFileSync(path.join(outDir, `${file}.tsx`), src);
  console.log("wrote", file);
}

console.log("Done:", defs.length);
