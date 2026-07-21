/**
 * Rebuilds the Orbitfolio award lab from zero.
 * Run: node scripts/generate-award-100.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const variantsDir = path.join(root, "src", "variants");
const dataDir = path.join(root, "src", "data");
const componentsDir = path.join(root, "src", "components");

const layouts = [
  "museum", "planet", "rail", "snap", "terminal", "editorial", "swiss", "brutal",
  "liquid", "ascii", "canvas", "origami", "telescope", "chat", "split", "clinic",
  "bauhaus", "iso", "credits", "waveform", "journey", "covers", "ring", "warp",
  "holo", "blueprint", "chart", "chapters", "docs", "mosaic", "glass", "kinetic",
  "void", "horizon", "solar", "briefing", "swarm",
];

const rows = [
  ["Scroll Alcove Museum", "A scroll-led gallery where each career proof occupies its own architectural alcove.", "museum", "r3f,drei,framer"],
  ["Orbital Proof Sphere", "A tactile evidence planet keeps the identity central while proof orbits nearby.", "planet", "r3f,drei,framer"],
  ["WebGPU Veil", "A translucent spatial veil parts to reveal the engineer and production outcomes.", "holo", "r3f,drei,framer"],
  ["Cinematic Flythrough", "A continuous camera-like progression turns the CV into one restrained film take.", "chapters", "r3f,drei,framer"],
  ["Spotlight Installation", "A dark exhibition uses a single moving spotlight to stage one claim at a time.", "museum", "r3f,drei,framer"],
  ["Instanced Particle Fleet", "A compact 3D fleet frames applied-AI leadership without hiding the resume.", "swarm", "r3f,drei,framer"],
  ["Shader Atmosphere", "Atmospheric depth and disciplined typography make technical proof feel cinematic.", "horizon", "r3f,drei,framer"],
  ["Mouse Reveal Monolith", "A monumental name and spatial object reveal the complete career beneath.", "telescope", "r3f,drei,framer"],
  ["Spatial Case Observatory", "Career cases behave like observatory stations along a measured vertical route.", "chapters", "framer,css-3d"],
  ["Planetary Dossier", "A planet-stage hero gives way immediately to an evidence-first technical dossier.", "planet", "r3f,drei,framer"],
  ["Orbit Archive Rooms", "Isometric archive rooms separate experience, capabilities, work, and contact.", "iso", "css-3d,framer"],
  ["Event Lens Portfolio", "An event-horizon lens bends the opening frame but leaves every proof legible.", "horizon", "svg-filter,framer"],
  ["Solar Career Instrument", "Jobs become an orbital instrument before resolving into a complete readable CV.", "solar", "svg,framer"],
  ["Constellation Command", "A navigational star chart connects skills, companies, and shipped products.", "chart", "svg,framer"],
  ["Mission One-Take", "A mission-film composition closes Alpha with atmosphere plus immediate hire clarity.", "briefing", "framer,film"],
  ["Weighted Editorial", "Heavy editorial typography makes the name the masthead and outcomes the news.", "editorial", "framer,editorial"],
  ["Masthead Proof Press", "A daily-paper hierarchy puts production evidence above ornamental interface.", "editorial", "framer,columns"],
  ["Pull Quote Stage", "Oversized outcome quotes interrupt a calm long-form career narrative.", "chapters", "framer,serif"],
  ["Column Broadsheet", "A true broadsheet uses columns, rules, and folios to hold the complete CV.", "editorial", "columns,framer"],
  ["Swiss Evidence Grid", "A strict international grid makes ten years of evidence scan in seconds.", "swiss", "grid,framer"],
  ["Brutal Sunday Press", "Hard rules, stamps, and unapologetic type turn the portfolio into urgent newsprint.", "brutal", "print,framer"],
  ["Bilingual Signal", "A bilingual-inspired split treats language as rhythm while retaining complete English proof.", "split", "editorial,framer"],
  ["Issue Stack", "Each employer becomes a collectible cover while the archive remains continuously readable.", "covers", "covers,framer"],
  ["Footnote Career", "Academic footnotes and marginalia expose the engineering decisions behind each result.", "docs", "editorial,framer"],
  ["Redline Resume", "Editor marks, proofing lines, and decisive hierarchy present a CV still moving forward.", "blueprint", "editorial,framer"],
  ["Credit Roll Career", "A reduced-motion-safe end-credit composition gives every contributor-era its full billing.", "credits", "credits,framer"],
  ["Field Notes Vancouver", "A daylight field journal balances personal location with rigorous engineering proof.", "glass", "editorial,framer"],
  ["Final Edition Portfolio", "The closing editorial cell combines newspaper authority with recruiter-speed navigation.", "mosaic", "editorial,framer"],
  ["Kinetic Nameplate", "The name behaves like a moving title sequence before settling into the evidence.", "kinetic", "framer,type"],
  ["Warp Type Corridor", "Perspective type rushes toward the viewer and resolves into calm career chapters.", "warp", "css-3d,framer"],
  ["Elastic Career Rail", "A sideways career rail uses elastic entrances and full-detail stops.", "rail", "framer,horizontal"],
  ["Snap Impact Chapters", "Viewport chapters isolate identity, outcomes, roles, skills, work, and contact.", "snap", "framer,snap"],
  ["Waveform Resume", "Career milestones modulate a responsive waveform while content stays readable.", "waveform", "canvas,framer"],
  ["Particle Name Assembly", "Particles conceptually assemble the dominant name before dispersing into proof.", "canvas", "canvas,framer"],
  ["Aurora Motion Ledger", "Aurora bands create continuous atmosphere around a precise outcome ledger.", "canvas", "canvas,framer"],
  ["Velocity Case Chapters", "Alternating chapter velocity gives each employer a different narrative cadence.", "chapters", "framer,scroll"],
  ["Infinite Pan Evidence", "A spatial canvas metaphor is paired with a complete linear fallback archive.", "canvas", "canvas,framer"],
  ["Goals Orbit Kinetics", "An orbital goals ring frames the career as an active long-term practice.", "ring", "framer,svg"],
  ["Launch Sequence CV", "A launch countdown becomes a direct progression from identity to shipped outcomes.", "briefing", "framer,scroll"],
  ["Signal Scrub Story", "A signal line appears to scrub through the career while reduced motion stays static.", "journey", "svg,framer"],
  ["Oversized Proof Type", "Metrics and the engineer name trade scale across a disciplined vertical composition.", "kinetic", "framer,type"],
  ["Kinetic Synthesis", "Gamma closes by pairing its strongest motion grammar with an unhurried complete archive.", "mosaic", "framer,type"],
  ["Command Palette CV", "A command-palette metaphor makes every major resume destination feel instantly reachable.", "terminal", "framer,command"],
  ["Docs Sidebar Engineer", "A documentation workspace makes the career feel inspectable, versioned, and concrete.", "docs", "framer,docs"],
  ["Agent Chat Profile", "A static agent conversation answers recruiter questions before opening the full record.", "chat", "framer,chat"],
  ["Journey Map System", "A geographic SVG route connects Kyiv, Geneva, Italy, San Francisco, and Vancouver.", "journey", "svg,framer"],
  ["Blueprint Operating Manual", "Engineering schematics organize architecture, leadership, skills, and shipped work.", "blueprint", "grid,framer"],
  ["Telescope Focus Index", "A scope mask focuses attention on one high-signal claim without trapping navigation.", "telescope", "mask,framer"],
  ["Holographic Record", "Scanlines and projected planes turn a complete CV into a legible future archive.", "holo", "css,framer"],
  ["Iso Team Rooms", "Isometric rooms map leadership, delivery, AI systems, and product craft.", "iso", "css-3d,framer"],
  ["Case File Switchboard", "A switchboard-like index routes quickly into full employer case files.", "mosaic", "framer,systems"],
  ["Telemetry Tape", "A live-looking telemetry band carries skills and outcomes through a full technical record.", "terminal", "framer,telemetry"],
  ["Cover Stack Navigator", "Stacked covers turn sections into objects while preserving a complete flow below.", "covers", "framer,covers"],
  ["Constellation Index", "A systems-minded star index cross-references tools, roles, and open-source work.", "chart", "svg,framer"],
  ["Dual Narrative Console", "Recruiter clarity and engineering depth run as synchronized parallel narratives.", "split", "framer,split"],
  ["System Status Portfolio", "A calm status surface reports who, what, proof, availability, and complete history.", "docs", "framer,systems"],
  ["Recruiter Profile Light", "A professional daylight profile reaches role, metrics, and contact in one glance.", "clinic", "framer,hire"],
  ["Clinic SaaS Engineer", "Healthcare-product calm translates founding engineering into outcomes and trust.", "clinic", "framer,saas"],
  ["Ten Second Proof", "One composition answers identity, specialty, seniority, and measurable impact immediately.", "swiss", "framer,hire"],
  ["Outcome First Resume", "Four production outcomes lead; the complete evidence follows in recruiter order.", "mosaic", "framer,hire"],
  ["Founder Fit Profile", "A focused profile emphasizes 0-to-1 ownership, AI delivery, and team leadership.", "split", "framer,hire"],
  ["Healthcare Trust Sheet", "Clinical restraint and plain language make complex AI work credible and easy to scan.", "clinic", "framer,hire"],
  ["Applied AI Casebook", "A casebook pairs AI capabilities with the production situations where they mattered.", "chapters", "framer,hire"],
  ["Leadership Evidence", "Team outcomes and delivery ownership become the primary navigation spine.", "journey", "framer,hire"],
  ["Product Engineer Daylight", "A bright product page connects architecture choices to customer and business results.", "glass", "framer,hire"],
  ["Hiring Manager Brief", "A concise briefing opens into every bullet, skill group, project, and contact route.", "briefing", "framer,hire"],
  ["Metric Profile", "Measured impact receives editorial scale without reducing the career to numbers.", "editorial", "framer,hire"],
  ["Proof Mosaic Light", "An asymmetric daylight mosaic groups metrics, experience, capabilities, and projects.", "mosaic", "framer,hire"],
  ["Founding Engineer One Pager", "A one-page hierarchy compresses the pitch while retaining every CV detail.", "swiss", "framer,hire"],
  ["Recruiter Champion", "Epsilon closes with maximum clarity, solid motion, and zero hidden evidence.", "clinic", "framer,hire"],
  ["ASCII Career Signal", "Monospaced signal art frames a fully readable text-native portfolio.", "ascii", "framer,ascii"],
  ["Liquid Metal Type", "Mercury-like headline treatment contrasts with stable, accessible career content.", "liquid", "svg-filter,framer"],
  ["Origami Evidence Fold", "CSS perspective folds separate career chapters without concealing information.", "origami", "css-3d,framer"],
  ["Void Whisper", "Extreme black space makes the name, title, and proof feel unusually deliberate.", "void", "framer,minimal"],
  ["Bauhaus Proof Blocks", "Primary geometric blocks turn each evidence class into a distinct visual weight.", "bauhaus", "framer,geometry"],
  ["Code Rain Archive", "A restrained code-rain canvas sits behind an uncompromised complete CV.", "canvas", "canvas,framer"],
  ["Aurora Vancouver Canvas", "A northern-lights canvas anchors the portfolio in Vancouver without scenic cliché.", "canvas", "canvas,framer"],
  ["Event Horizon Filter", "An SVG distortion motif bends the edge of the layout while type stays sharp.", "horizon", "svg-filter,framer"],
  ["Brutal Proof Stamp", "Black-and-white blocks and a hire stamp make the resume feel physical and direct.", "brutal", "framer,print"],
  ["Paper Fold Terminal", "Terminal language appears on folded paper planes rather than a conventional console.", "origami", "css-3d,framer"],
  ["Agent Swarm Field", "A particle swarm represents coordinated AI tools around a human-led engineering record.", "swarm", "canvas,framer"],
  ["Telescope Monograph", "A circular reveal meets long-form monograph typography and complete proof.", "telescope", "mask,framer"],
  ["Chromed Journey", "A metallic journey line reflects career stages while preserving readable contrast.", "liquid", "svg-filter,framer"],
  ["Experimental Cover Lab", "A restless cover stack explores composition while a stable archive guarantees completeness.", "covers", "framer,experimental"],
  ["Signal Noise Finale", "Zeta ends by balancing visual noise against an exceptionally disciplined information hierarchy.", "terminal", "framer,experimental"],
  ["Hybrid Warp Recruiter", "Steals warp motion from #30 + ten-second hire clarity from #59.", "warp", "framer,hybrid"],
  ["Hybrid Museum Metrics", "Steals alcove storytelling from #1 + outcome hierarchy from #60.", "museum", "framer,hybrid"],
  ["Hybrid Editorial Orbit", "Steals editorial authority from #17 + spatial focus from #2.", "editorial", "framer,hybrid"],
  ["Hybrid Clinic Aurora", "Steals healthcare trust from #58 + atmospheric canvas restraint from #78.", "clinic", "framer,hybrid"],
  ["Hybrid Command Cases", "Steals instant navigation from #43 + employer depth from #36.", "terminal", "framer,hybrid"],
  ["Hybrid Swiss Kinetic", "Steals scan speed from #20 + oversized motion type from #41.", "swiss", "framer,hybrid"],
  ["Hybrid Journey Profile", "Steals geographic narrative from #46 + recruiter profile clarity from #57.", "journey", "framer,hybrid"],
  ["Hybrid Holo Proof", "Steals scanline atmosphere from #49 + outcome-first evidence from #60.", "holo", "framer,hybrid"],
  ["Hybrid Cover Chapters", "Steals object-like covers from #53 + viewport storytelling from #32.", "covers", "framer,hybrid"],
  ["Hybrid Bauhaus Systems", "Steals geometric confidence from #75 + inspectable docs structure from #44.", "bauhaus", "framer,hybrid"],
  ["Hybrid Telescope Cases", "Steals focus control from #48 + applied-AI case depth from #63.", "telescope", "framer,hybrid"],
  ["Hybrid Liquid Brief", "Steals liquid headline craft from #72 + hiring-manager brevity from #66.", "liquid", "framer,hybrid"],
  ["Hybrid Planet Press", "Steals spatial stagecraft from #10 + press hierarchy from #16.", "planet", "framer,hybrid"],
  ["Hybrid Swarm One Pager", "Steals agent energy from #81 + one-page clarity from #69.", "swarm", "framer,hybrid"],
  ["Orbitfolio Centurion", "Steals the strongest motion, editorial authority, spatial wonder, and hire clarity from the full 99-cell ladder.", "mosaic", "framer,hybrid,champion"],
];

if (rows.length !== 100) throw new Error(`Expected 100 definitions, received ${rows.length}`);
if (rows.some((row) => !layouts.includes(row[2]))) throw new Error("Unknown layout in catalog");

const slugify = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const pascal = (value) =>
  value.replace(/[^a-zA-Z0-9]+/g, " ").trim().split(/\s+/).map((word) => word[0].toUpperCase() + word.slice(1)).join("");
const pad = (id) => (id < 100 ? String(id).padStart(2, "0") : "100");
const teamFor = (id) => {
  if (id <= 15) return "Alpha WebGL";
  if (id <= 28) return "Beta Editorial";
  if (id <= 42) return "Gamma Kinetic";
  if (id <= 56) return "Delta Systems";
  if (id <= 70) return "Epsilon Hire";
  if (id <= 85) return "Zeta Experimental";
  return "Eta Hybrid";
};
const scoreFor = (id) => {
  if (id >= 86) {
    const step = id - 86;
    return {
      coolness: +(9 + step * 0.06).toFixed(2),
      comprehensiveness: +(9.2 + step * 0.04).toFixed(2),
      uniqueness: +(9.2 + step * 0.03).toFixed(2),
      motion: +(8.8 + step * 0.05).toFixed(2),
      hireability: +(9.1 + step * 0.04).toFixed(2),
    };
  }
  return {
    coolness: +(7.4 + (id % 8) * 0.2).toFixed(2),
    comprehensiveness: +(8.7 + (id % 4) * 0.15).toFixed(2),
    uniqueness: +(8.7 + (id % 5) * 0.18).toFixed(2),
    motion: +(7.1 + (id % 7) * 0.2).toFixed(2),
    hireability: +(7.6 + (id % 6) * 0.2).toFixed(2),
  };
};

const palette = [
  ["#030712", "#67e8f9"], ["#07111f", "#fbbf24"], ["#020b08", "#5eead4"],
  ["#101014", "#f87171"], ["#071018", "#a7f3d0"], ["#050505", "#e5e7eb"],
  ["#0b1220", "#7dd3fc"], ["#111827", "#fdba74"],
];

const variants = rows.map(([name, thesis, layout, stack], index) => {
  const id = index + 1;
  const [background, accent] = palette[index % palette.length];
  return {
    id,
    name,
    thesis,
    layout,
    stack: stack.split(","),
    team: teamFor(id),
    scores: scoreFor(id),
    slug: slugify(name),
    file: `V${pad(id)}${pascal(name)}`,
    background,
    accent,
    light: ["editorial", "swiss", "clinic", "bauhaus", "docs", "glass"].includes(layout) && index % 2 === 0,
    webgl: id <= 8,
  };
});

const awardVariantSource = `"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import type { CV } from "@/data/cv";

export type AwardLayout = ${layouts.map((layout) => `"${layout}"`).join(" | ")};

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
      <a href={\`mailto:\${cv.email}\`}>{cv.email}</a>
      <a href={cv.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={\`tel:\${cv.phone.replace(/\\s/g, "")}\`}>{cv.phone}</a>
      <span>{cv.location}</span>
    </address>
  );
}

function Experience({ cv }: { cv: CV }) {
  return (
    <div className="space-y-8">
      {cv.experience.map((job) => (
        <article key={\`\${job.company}-\${job.period}\`} className="break-inside-avoid border-t border-current/20 pt-4">
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
  if (config.layout === "telescope" || config.layout === "horizon" || config.layout === "ring") return <div className="relative mx-auto aspect-square w-[min(65vw,360px)] rounded-full border border-current/30" style={{ boxShadow: \`0 0 90px \${config.accent}44, inset 0 0 70px \${config.accent}22\` }} aria-hidden><div className="absolute inset-[18%] rounded-full border border-current/30" /><div className="absolute inset-[39%] rounded-full" style={{ background: config.accent }} /></div>;
  if (config.layout === "chat") return <div className="space-y-3" aria-hidden><p className="mr-12 rounded-3xl rounded-bl-sm border border-current/20 p-4">What does Serhii ship?</p><p className="ml-12 rounded-3xl rounded-br-sm p-4 text-black" style={{ background: config.accent }}>Production AI systems, end to end.</p><p className="mr-12 rounded-3xl rounded-bl-sm border border-current/20 p-4">Show me the evidence ↓</p></div>;
  if (config.layout === "bauhaus" || config.layout === "iso" || config.layout === "origami") return <div className="relative mx-auto h-72 max-w-md" aria-hidden><motion.div className="absolute left-4 top-6 h-40 w-40 rotate-12" style={{ background: config.accent }} animate={reduceMotion ? undefined : { rotate: [12, 18, 12] }} transition={{ duration: 6, repeat: Infinity }} /><div className="absolute bottom-2 right-10 h-36 w-36 rounded-full bg-blue-500" /><div className="absolute bottom-10 left-28 h-24 w-44 -rotate-6 bg-red-500 mix-blend-screen" /></div>;
  if (config.layout === "ascii" || config.layout === "terminal" || config.layout === "blueprint") return <pre className="overflow-hidden whitespace-pre text-xs leading-5 opacity-65" aria-hidden>{\`  ╭──────── ORBITFOLIO ────────╮
  │  SIGNAL: PRODUCTION READY  │
  │  AI  ●━━━━━━  PLATFORM    │
  │      \\  ◉  /              │
  │  SHIP ━━━━━━━ LEAD        │
  ╰────────────────────────────╯\`}</pre>;
  if (config.layout === "swarm" || config.layout === "canvas") return <div className="relative h-72" aria-hidden>{Array.from({ length: 24 }, (_, index) => <motion.i key={index} className="absolute h-2 w-2 rounded-full" style={{ background: config.accent, left: \`\${8 + index % 8 * 12}%\`, top: \`\${12 + Math.floor(index / 8) * 32 + index % 3 * 4}%\` }} animate={reduceMotion ? undefined : { x: [0, (index % 5 - 2) * 12, 0], y: [0, (index % 4 - 2) * 10, 0] }} transition={{ duration: 3 + index % 4, repeat: Infinity }} />)}</div>;
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
      <motion.section {...entry} className={\`\${sectionClass} \${mosaic ? "lg:col-span-7" : columns ? "lg:row-span-2" : ""}\`}>
        <p className="mb-7 text-xs uppercase tracking-[0.3em] opacity-50">01 / Experience</p>
        <Experience cv={cv} />
      </motion.section>
      <motion.section {...entry} className={\`\${sectionClass} \${mosaic ? "lg:col-span-5" : ""}\`}>
        <p className="mb-7 text-xs uppercase tracking-[0.3em] opacity-50">02 / Capabilities</p>
        <Skills cv={cv} />
      </motion.section>
      <motion.section {...entry} className={\`\${sectionClass} \${mosaic ? "lg:col-span-8" : ""}\`}>
        <p className="mb-7 text-xs uppercase tracking-[0.3em] opacity-50">03 / Selected work</p>
        <Projects cv={cv} />
      </motion.section>
      <motion.section {...entry} className={\`\${sectionClass} \${mosaic ? "lg:col-span-4" : ""}\`}>
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
    <main className={\`min-h-screen overflow-hidden \${config.layout === "ascii" || config.layout === "terminal" ? "font-[family-name:var(--font-mono)]" : ""}\`} style={style}>
      <div className="pointer-events-none fixed inset-0 opacity-[0.14]" style={{ backgroundImage: \`linear-gradient(\${config.accent}44 1px, transparent 1px), linear-gradient(90deg, \${config.accent}33 1px, transparent 1px)\`, backgroundSize: config.layout === "blueprint" ? "28px 28px" : "96px 96px" }} aria-hidden />
      <section className={\`relative grid min-h-[100svh] gap-10 px-[6vw] pb-14 pt-28 \${heroStructure[config.layout]} \${config.layout === "split" ? "md:px-0 md:pb-0" : ""}\`}>
        <motion.header {...heroMotion} className={\`relative z-10 \${config.layout === "split" ? "flex flex-col justify-end p-[6vw]" : ""}\`}>
          <p className="text-[10px] uppercase tracking-[0.34em] opacity-55">{config.team} · Cell {String(config.id).padStart(3, "0")}</p>
          <h1 className={\`mt-5 font-[family-name:var(--font-display)] font-bold uppercase leading-[0.82] tracking-[-0.07em] \${config.layout === "kinetic" || config.layout === "brutal" ? "text-[clamp(4.8rem,15vw,13rem)]" : "text-[clamp(4rem,11vw,10rem)]"}\`}>
            <span className="block">{cv.name.split(" ")[0]}</span>
            <span className="block" style={{ color: config.accent }}>{cv.name.split(" ")[1]}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-medium">{cv.title}</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 opacity-70">{cv.summary}</p>
          <div className="mt-8"><Contact cv={cv} /></div>
        </motion.header>
        <motion.aside {...heroMotion} className={\`relative z-10 \${specialSurface ? "border border-current/15 bg-white/5 p-5 backdrop-blur-xl" : ""} \${config.layout === "split" ? "flex flex-col justify-between p-[6vw]" : ""}\`}>
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
`;

const orbitSceneSource = `"use client";

import { Float, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb({ accent }: { accent: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.16;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.22} floatIntensity={0.45}>
      <mesh ref={ref}>
        <sphereGeometry args={[1.25, 40, 40]} />
        <meshStandardMaterial color={accent} metalness={0.3} roughness={0.42} />
      </mesh>
      {[0, 1, 2, 3].map((index) => {
        const angle = index * Math.PI * 0.5;
        return (
          <mesh key={index} position={[Math.cos(angle) * 2.05, (index - 1.5) * 0.22, Math.sin(angle) * 2.05]}>
            <sphereGeometry args={[0.1 + index * 0.025, 14, 14]} />
            <meshStandardMaterial color="#f8fafc" emissive={accent} emissiveIntensity={0.45} />
          </mesh>
        );
      })}
    </Float>
  );
}

export function OrbitScene({ accent }: { accent: string }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 46 }}>
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <Stars radius={45} depth={25} count={700} factor={2.4} fade speed={0.35} />
      <Orb accent={accent} />
    </Canvas>
  );
}
`;

fs.rmSync(variantsDir, { recursive: true, force: true });
fs.mkdirSync(variantsDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(componentsDir, { recursive: true });
fs.writeFileSync(path.join(componentsDir, "AwardVariant.tsx"), awardVariantSource);
fs.writeFileSync(path.join(componentsDir, "OrbitScene.tsx"), orbitSceneSource);

for (const variant of variants) {
  const dynamicImport = variant.webgl
    ? 'import dynamic from "next/dynamic";\n'
    : "";
  const sceneDefinition = variant.webgl
    ? '\nconst OrbitScene = dynamic(() => import("@/components/OrbitScene").then((module) => module.OrbitScene), { ssr: false });\n'
    : "";
  const sceneProp = variant.webgl
    ? ` scene={reduceMotion ? undefined : <OrbitScene accent="${variant.accent}" />}`
    : "";
  const source = `"use client";

${dynamicImport}import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";
${sceneDefinition}
/** ${variant.name} — ${variant.thesis} */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={${JSON.stringify({
        id: variant.id,
        name: variant.name,
        thesis: variant.thesis,
        layout: variant.layout,
        team: variant.team,
        accent: variant.accent,
        background: variant.background,
        light: variant.light,
      })}}
     ${sceneProp}
    />
  );
}
`;
  fs.writeFileSync(path.join(variantsDir, `${variant.file}.tsx`), source);
}

const metaRows = variants.map((variant) =>
  `  ${JSON.stringify({
    id: variant.id,
    slug: variant.slug,
    name: variant.name,
    thesis: variant.thesis,
    stack: variant.stack,
    team: variant.team,
    scores: variant.scores,
  })},`
).join("\n");

const variantsSource = `export type VariantMeta = {
  id: number;
  slug: string;
  name: string;
  thesis: string;
  stack: string[];
  team: string;
  scores?: {
    coolness: number;
    comprehensiveness: number;
    uniqueness: number;
    motion: number;
    hireability: number;
  };
};

export const VARIANT_COUNT = 100;

export const variants: VariantMeta[] = [
${metaRows}
];

export function composite(scores: NonNullable<VariantMeta["scores"]>): number {
  return (
    scores.coolness * 0.3 +
    scores.comprehensiveness * 0.2 +
    scores.uniqueness * 0.2 +
    scores.motion * 0.15 +
    scores.hireability * 0.15
  );
}

export function getVariant(id: number): VariantMeta | undefined {
  return variants.find((variant) => variant.id === id);
}

export function getChampion(): VariantMeta {
  const scored = variants.filter((variant): variant is VariantMeta & { scores: NonNullable<VariantMeta["scores"]> } => Boolean(variant.scores));
  const champion = scored.toSorted((left, right) => {
    const compositeDifference = composite(right.scores) - composite(left.scores);
    if (compositeDifference !== 0) return compositeDifference;
    const coolnessDifference = right.scores.coolness - left.scores.coolness;
    if (coolnessDifference !== 0) return coolnessDifference;
    return right.scores.hireability - left.scores.hireability;
  })[0];
  if (!champion) throw new Error("No scored portfolio variants");
  return champion;
}
`;
fs.writeFileSync(path.join(dataDir, "variants.ts"), variantsSource);

const cases = variants.map((variant) =>
  `    case ${variant.id}:\n      return import("@/variants/${variant.file}");`
).join("\n");
const loadVariantSource = `import type { ComponentType } from "react";

export type VariantModule = {
  Variant: ComponentType;
};

export async function loadVariant(id: number): Promise<VariantModule> {
  switch (id) {
${cases}
    default:
      throw new Error(\`Unknown variant \${id}\`);
  }
}
`;
fs.writeFileSync(path.join(variantsDir, "loadVariant.ts"), loadVariantSource);

console.log(`Generated ${variants.length} complete award variants.`);
