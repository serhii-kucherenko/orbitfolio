/**
 * Handcrafts 10 more non-AwardVariant cells (batch 3) — gate 45.
 * node scripts/handcraft-batch-3.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");

function shell(title, body) {
  return `"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** ${title} — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
${body}
}
`;
}

const cells = {
  V04CinematicFlythrough: shell(
    "Cinematic Flythrough",
    `  return (
    <main className="min-h-screen bg-[#030712] text-slate-50">
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-20 pt-28">
        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{ background: "linear-gradient(180deg, transparent, #0ea5e9 120%)" }}
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        )}
        <p className="relative text-[10px] uppercase tracking-[0.4em] text-sky-300/70">One take · flythrough</p>
        <h1 className="relative mt-4 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-extrabold leading-[0.9] sm:text-7xl">{cv.name}</h1>
        <p className="relative mt-5 text-xl text-sky-100/80">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <ContactRow className="relative mt-8 text-sky-100/70" />
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
      </section>
    </main>
  );`,
  ),

  V05SpotlightInstallation: shell(
    "Spotlight Installation",
    `  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-24 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: reduce ? "rgba(250,204,21,0.15)" : "radial-gradient(circle, rgba(250,204,21,0.35), transparent 70%)" }}
        />
        <p className="relative text-[10px] uppercase tracking-[0.35em] text-amber-200/70">Installation · one claim</p>
        <h1 className="relative mt-5 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-7xl">{cv.name}</h1>
        <p className="relative mt-4 text-lg text-amber-50/80">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="relative mt-10 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="border border-amber-200/20 bg-amber-400/5 px-4 py-5">
              <p className="text-2xl font-bold text-amber-200">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-amber-100/50">{h.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-amber-100/70" />
      </section>
    </main>
  );`,
  ),

  V06InstancedParticleFleet: shell(
    "Instanced Particle Fleet",
    `  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-cyan-50">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: 36 }, (_, i) => (
          <motion.i
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-cyan-300"
            style={{ left: \`\${(i * 19) % 100}%\`, top: \`\${(i * 29) % 100}%\` }}
            animate={reduce ? undefined : { opacity: [0.2, 1, 0.2], scale: [1, 1.6, 1] }}
            transition={{ duration: 2 + (i % 4), repeat: Infinity }}
          />
        ))}
      </div>
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Fleet · applied AI</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-cyan-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-cyan-100/70" />
      </section>
    </main>
  );`,
  ),

  V08MouseRevealMonolith: shell(
    "Mouse Reveal Monolith",
    `  return (
    <main className="min-h-screen bg-[#0b1020] text-slate-50">
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Monolith</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-8xl">{cv.name}</h1>
          <p className="mt-6 text-lg text-slate-300">{cv.title}</p>
          <p className="mt-6 text-sm leading-7 text-white/55">{cv.summary}</p>
          <ContactRow className="mt-8 text-slate-300" />
        </div>
        <aside className="relative min-h-[50vh] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-700/40 to-slate-950">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(148,163,184,0.35),transparent_55%)]"
            animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
            aria-hidden
          />
          <div className="relative z-10 grid h-full grid-cols-2 content-end gap-3 p-6">
            {cv.highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-white/15 bg-black/30 p-4 backdrop-blur">
                <p className="text-2xl font-bold">{h.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/50">{h.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
      </section>
    </main>
  );`,
  ),

  V09SpatialCaseObservatory: shell(
    "Spatial Case Observatory",
    `  return (
    <main className="min-h-screen bg-[#07111c] text-sky-50">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Observatory stations</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-sky-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-12 md:grid-cols-2">
        {cv.experience.map((job, i) => (
          <motion.article
            key={job.company}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-sky-400/20 bg-sky-950/30 p-6"
          >
            <p className="text-xs text-sky-300/60">Station {i + 1} · {job.period}</p>
            <h2 className="mt-2 text-xl font-semibold">{job.company}</h2>
            <p className="mt-1 text-sm text-white/70">{job.role}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/55">
              {job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}
            </ul>
          </motion.article>
        ))}
      </section>
      <section className="mx-auto max-w-5xl space-y-12 px-6 pb-28">
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-sky-200/70" />
      </section>
    </main>
  );`,
  ),

  V10PlanetaryDossier: shell(
    "Planetary Dossier",
    `  return (
    <main className="min-h-screen bg-[#04060f] text-slate-100">
      <section className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 px-6 pb-12 pt-28 md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex justify-center">
          <motion.div
            aria-hidden
            className="aspect-square w-[min(70vw,320px)] rounded-full border border-cyan-400/30"
            style={{ background: "radial-gradient(circle at 35% 30%, #67e8f9, #0e7490 55%, #082f49)" }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Dossier</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
          <p className="mt-3 text-lg text-cyan-100/80">{cv.title}</p>
          <p className="mt-6 text-sm leading-7 text-white/55">{cv.summary}</p>
          <ContactRow className="mt-8 text-cyan-100/70" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
      </section>
    </main>
  );`,
  ),

  V11OrbitArchiveRooms: shell(
    "Orbit Archive Rooms",
    `  const rooms = [
    { id: "lobby", title: "Lobby", body: cv.summary },
    { id: "archive", title: "Archive", node: "exp" },
    { id: "workshop", title: "Workshop", node: "skills" },
    { id: "gallery", title: "Gallery", node: "projects" },
  ];
  return (
    <main className="min-h-screen bg-[#f1f5f9] text-slate-900">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Iso rooms</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-slate-600">{cv.title}</p>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-12 md:grid-cols-2">
        {rooms.map((room) => (
          <article key={room.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style={{ transform: reduce ? undefined : "perspective(800px) rotateX(2deg)" }}>
            <h2 className="text-xl font-semibold">{room.title}</h2>
            {room.body && <p className="mt-3 text-sm leading-7 text-slate-600">{room.body}</p>}
            {room.node === "exp" && <div className="mt-4"><ExperienceList tone="light" /></div>}
            {room.node === "skills" && <div className="mt-4"><SkillsCloud tone="light" /></div>}
            {room.node === "projects" && <div className="mt-4"><ProjectLinks tone="light" /><ContactRow className="mt-6" /></div>}
          </article>
        ))}
      </section>
    </main>
  );`,
  ),

  V12EventLensPortfolio: shell(
    "Event Lens Portfolio",
    `  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <section className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pt-24 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(circle at 50% 45%, transparent 20%, #000 65%)" }}
        />
        <motion.h1
          className="relative font-[family-name:var(--font-display)] text-5xl font-bold sm:text-7xl"
          style={{ filter: reduce ? undefined : "url(#)" }}
          initial={reduce ? false : { scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {cv.name}
        </motion.h1>
        <p className="relative mt-5 text-lg text-zinc-300">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-zinc-300" />
      </section>
    </main>
  );`,
  ),

  V13SolarCareerInstrument: shell(
    "Solar Career Instrument",
    `  return (
    <main className="min-h-screen bg-[#0a0612] text-violet-50">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-violet-300/70">Solar instrument</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-violet-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <svg viewBox="0 0 640 220" className="mt-10 w-full" aria-hidden>
          <circle cx="320" cy="110" r="28" fill="#fbbf24" />
          {cv.experience.map((_, i) => {
            const a = (i / cv.experience.length) * Math.PI * 2;
            const x = 320 + Math.cos(a) * (70 + i * 18);
            const y = 110 + Math.sin(a) * (40 + i * 10);
            return <g key={i}><line x1="320" y1="110" x2={x} y2={y} stroke="rgba(196,181,253,0.4)" /><circle cx={x} cy={y} r={8 + i} fill="#a78bfa" opacity={0.8} /></g>;
          })}
        </svg>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-violet-100/70" />
      </section>
    </main>
  );`,
  ),

  V14ConstellationCommand: shell(
    "Constellation Command",
    `  const stars = Object.entries(cv.skills).flatMap(([group, items], gi) =>
    items.slice(0, 3).map((skill, si) => ({ skill, group, x: 10 + ((gi * 3 + si) * 13) % 80, y: 15 + ((gi * 5 + si * 7) * 11) % 70 })),
  );
  return (
    <main className="min-h-screen bg-[#020617] text-sky-50">
      <section className="relative mx-auto min-h-[70vh] max-w-5xl px-6 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">Constellation command</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-sky-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="relative mt-10 h-64 rounded-3xl border border-sky-400/20 bg-sky-950/20">
          {stars.map((s) => (
            <span key={s.skill} className="absolute text-[10px] text-sky-100/80" style={{ left: \`\${s.x}%\`, top: \`\${s.y}%\` }}>
              <i className="mb-1 block h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden />
              {s.skill}
            </span>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-sky-200/70" />
      </section>
    </main>
  );`,
  ),
};

for (const [file, body] of Object.entries(cells)) {
  fs.writeFileSync(path.join(dir, `${file}.tsx`), body);
  console.log("wrote", file);
}
console.log("done", Object.keys(cells).length);
