/**
 * Handcrafts 15 additional non-AwardVariant cells (batch 2).
 * node scripts/handcraft-batch-2.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");

const header = (title) => `"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** ${title} — handcrafted award cell */
export function Variant() {
  const reduce = useReducedMotion() ?? false;
`;

const cells = {
  V02OrbitalProofSphere: `${header("Orbital Proof Sphere")}
  return (
    <main className="min-h-screen bg-[#020617] text-sky-50">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <motion.div aria-hidden className="pointer-events-none absolute h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full border border-sky-400/30" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 48, repeat: Infinity, ease: "linear" }} style={{ background: "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.35), transparent 60%)" }} />
        <p className="relative text-[10px] uppercase tracking-[0.4em] text-sky-300/80">Alpha · Orbital proof</p>
        <h1 className="relative mt-6 font-[family-name:var(--font-display)] text-5xl font-extrabold sm:text-7xl">{cv.name}</h1>
        <p className="relative mt-4 text-xl text-sky-100/80">{cv.title}</p>
        <p className="relative mt-8 max-w-2xl text-sm leading-7 text-sky-100/60">{cv.summary}</p>
        <div className="relative mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-sky-400/20 bg-sky-950/40 px-3 py-4">
              <p className="text-2xl font-bold text-sky-200">{h.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-sky-200/50">{h.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-16 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-sky-200/80" />
      </section>
    </main>
  );
}
`,

  V03WebGPUVeil: `${header("WebGPU Veil")}
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-40" style={{ background: "linear-gradient(120deg, rgba(34,211,238,0.15), transparent 40%, rgba(125,211,252,0.12))" }} aria-hidden />
      <section className="relative mx-auto grid min-h-screen max-w-6xl items-end gap-10 px-6 pb-16 pt-28 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Veil · spatial atmosphere</p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-6xl font-bold leading-[0.9] sm:text-8xl">{cv.name}</h1>
          <p className="mt-6 text-lg text-cyan-100/80">{cv.title}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">{cv.summary}</p>
          <ContactRow className="mt-8 text-cyan-100/70" />
        </div>
        <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/60">Outcomes</p>
          <ul className="mt-6 space-y-4">
            {cv.highlights.map((h) => (
              <li key={h.label} className="flex items-baseline justify-between border-b border-white/10 pb-3">
                <span className="text-sm text-white/50">{h.label}</span>
                <strong className="text-2xl text-cyan-200">{h.value}</strong>
              </li>
            ))}
          </ul>
        </aside>
      </section>
      <section className="relative mx-auto max-w-5xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <div className="grid gap-10 md:grid-cols-2"><SkillsCloud /><ProjectLinks /></div>
      </section>
    </main>
  );
}
`,

  V07ShaderAtmosphere: `${header("Shader Atmosphere")}
  return (
    <main className="min-h-screen overflow-hidden bg-[#041016] text-teal-50">
      {!reduce && <motion.div className="pointer-events-none fixed -left-1/4 top-0 h-[120vh] w-[80vw] rounded-full bg-teal-400/10 blur-3xl" animate={{ x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 14, repeat: Infinity }} aria-hidden />}
      <section className="relative mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-24">
        <p className="font-[family-name:var(--font-mono)] text-xs text-teal-300/70">shader://atmosphere</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-tight sm:text-7xl">{cv.name}</h1>
        <p className="mt-4 text-xl text-teal-100/80">{cv.title}</p>
        <p className="mt-8 max-w-2xl text-sm leading-8 text-teal-50/60">{cv.summary}</p>
      </section>
      <section className="relative mx-auto max-w-4xl space-y-16 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-teal-100/70" />
      </section>
    </main>
  );
}
`,

  V17MastheadProofPress: `${header("Masthead Proof Press")}
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1a1a1a]">
      <header className="border-b-4 border-black px-6 pb-8 pt-28">
        <p className="text-center text-[10px] uppercase tracking-[0.5em]">The Proof Press · Vancouver Edition</p>
        <h1 className="mt-4 text-center font-[family-name:var(--font-serif)] text-5xl leading-none sm:text-7xl">{cv.name}</h1>
        <p className="mt-4 text-center text-sm uppercase tracking-[0.2em]">{cv.title}</p>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-black/70">{cv.summary}</p>
      </header>
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="border border-black/20 p-4 text-center">
            <p className="text-3xl font-bold">{h.value}</p>
            <p className="mt-2 text-[10px] uppercase tracking-wider">{h.label}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28">
        <ExperienceList tone="light" />
        <SkillsCloud tone="light" />
        <ProjectLinks tone="light" />
        <ContactRow className="text-black/70" />
      </section>
    </main>
  );
}
`,

  V21BrutalSundayPress: `${header("Brutal Sunday Press")}
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b-8 border-black px-4 pb-10 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase">Sunday · Proof stamp</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-8xl">{cv.name}</h1>
        <p className="mt-6 max-w-2xl text-lg font-semibold">{cv.title}</p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-black/70">{cv.summary}</p>
        <a href={\`mailto:\${cv.email}\`} className="mt-8 inline-block border-4 border-black bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">Hire stamp</a>
      </section>
      <section className="mx-auto max-w-4xl space-y-12 px-4 py-16">
        <ExperienceList tone="light" />
        <SkillsCloud tone="light" />
        <ProjectLinks tone="light" />
        <ContactRow />
      </section>
    </main>
  );
}
`,

  V30WarpTypeCorridor: `${header("Warp Type Corridor")}
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-24">
        <motion.h1 className="text-center font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-none sm:text-8xl" style={{ perspective: 800 }} initial={reduce ? false : { scale: 2.2, opacity: 0, rotateX: 40 }} animate={{ scale: 1, opacity: 1, rotateX: 0 }} transition={{ duration: 1.1 }}>
          {cv.name}
        </motion.h1>
      </section>
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-10 text-center">
        <p className="text-cyan-300">{cv.title}</p>
        <p className="text-sm leading-7 text-white/60">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-white/70" />
      </section>
    </main>
  );
}
`,

  V31ElasticCareerRail: `${header("Elastic Career Rail")}
  return (
    <main className="min-h-screen bg-[#12081f] text-fuchsia-50">
      <section className="px-6 pb-8 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-fuchsia-200/70">{cv.title} — scroll the career rail</p>
        <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
      </section>
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-10">
        {cv.experience.map((job, i) => (
          <motion.article key={job.company} initial={reduce ? false : { opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="w-[min(85vw,400px)] shrink-0 snap-center rounded-3xl border border-fuchsia-300/25 bg-fuchsia-950/30 p-6">
            <p className="text-xs text-fuchsia-200/60">{job.period}</p>
            <h2 className="mt-2 text-2xl font-semibold">{job.company}</h2>
            <p className="mt-1 text-sm text-white/70">{job.role}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </motion.article>
        ))}
        <article className="w-[min(85vw,400px)] shrink-0 snap-center rounded-3xl border border-white/15 bg-white/5 p-6"><h2 className="text-2xl">Skills</h2><div className="mt-4"><SkillsCloud /></div></article>
        <article className="w-[min(85vw,400px)] shrink-0 snap-center rounded-3xl border border-white/15 bg-white/5 p-6"><h2 className="text-2xl">Projects</h2><div className="mt-4"><ProjectLinks /><ContactRow className="mt-8" /></div></article>
      </div>
    </main>
  );
}
`,

  V40SignalScrubStory: `${header("Signal Scrub Story")}
  return (
    <main className="min-h-screen bg-[#061018] text-sky-50">
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-end px-6 pb-16 pt-28">
        <p className="font-[family-name:var(--font-mono)] text-xs text-sky-400">scrub://career-timeline</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-7xl">{cv.name}</h1>
        <p className="mt-4 text-lg text-sky-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
        <div className="mt-10 h-2 w-full overflow-hidden rounded-full bg-white/10" aria-hidden>
          <motion.div className="h-full bg-sky-400" initial={reduce ? { width: "100%" } : { width: "8%" }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-sky-200/80" />
      </section>
    </main>
  );
}
`,

  V44DocsSidebarEngineer: `${header("Docs Sidebar Engineer")}
  const pages = ["Home", "Experience", "Skills", "Projects", "Contact"];
  return (
    <main className="min-h-screen bg-[#fbfbfa] text-slate-900 md:flex">
      <aside className="border-b border-slate-200 bg-white px-4 py-24 md:w-56 md:border-b-0 md:border-r md:py-28">
        <p className="px-2 text-[10px] uppercase tracking-[0.3em] text-slate-400">Workspace</p>
        <nav className="mt-4 space-y-1">
          {pages.map((p, i) => (
            <a key={p} href={\`#\${p.toLowerCase()}\`} className={\`block rounded-md px-3 py-2 text-sm \${i === 0 ? "bg-slate-100 font-semibold" : "text-slate-600 hover:bg-slate-50"}\`}>{p}</a>
          ))}
        </nav>
      </aside>
      <div className="flex-1 px-6 py-24 md:px-12">
        <section id="home">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
          <p className="mt-2 text-slate-600">{cv.title}</p>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
        </section>
        <section id="experience" className="mt-16"><h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-slate-400">Experience</h2><ExperienceList tone="light" /></section>
        <section id="skills" className="mt-16"><h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-slate-400">Skills</h2><SkillsCloud tone="light" /></section>
        <section id="projects" className="mt-16"><h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-slate-400">Projects</h2><ProjectLinks tone="light" /></section>
        <section id="contact" className="mt-16 pb-20"><h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-slate-400">Contact</h2><ContactRow /></section>
      </div>
    </main>
  );
}
`,

  V48TelescopeFocusIndex: `${header("Telescope Focus Index")}
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100">
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="relative aspect-square w-[min(88vw,440px)] overflow-hidden rounded-full border border-white/20 shadow-[0_0_80px_rgba(125,211,252,0.25)]">
          <div className="absolute inset-[12%] rounded-full border border-white/15" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">{cv.name}</h1>
            <p className="mt-3 text-sm text-sky-200/80">{cv.title}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl space-y-6 px-6 pb-10 text-center">
        <p className="text-sm leading-7 text-white/60">{cv.summary}</p>
        <ContactRow className="justify-center text-sky-200/70" />
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
      </section>
    </main>
  );
}
`,

  V53CoverStackNavigator: `${header("Cover Stack Navigator")}
  return (
    <main className="min-h-screen bg-[#0c0a09] text-amber-50">
      <section className="px-6 pb-8 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold">{cv.name}</h1>
        <p className="mt-3 text-amber-100/70">{cv.title}</p>
        <p className="mt-6 max-w-xl text-sm text-white/55">{cv.summary}</p>
      </section>
      <div className="flex gap-4 overflow-x-auto px-6 pb-12">
        {cv.experience.map((job, i) => (
          <article key={job.company} className="w-[260px] shrink-0 rounded-2xl border border-amber-200/20 p-5" style={{ background: i % 2 ? "#1c1917" : "#292524", transform: reduce ? undefined : \`rotate(\${(i - 1) * 2}deg)\` }}>
            <p className="text-[10px] uppercase tracking-wider text-amber-200/50">Issue 0{i + 1}</p>
            <h2 className="mt-3 text-xl font-semibold">{job.company}</h2>
            <p className="mt-2 text-xs text-white/50">{job.period}</p>
            <p className="mt-4 text-sm text-white/70">{job.role}</p>
          </article>
        ))}
      </div>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-amber-100/70" />
      </section>
    </main>
  );
}
`,

  V58ClinicSaaSEngineer: `${header("Clinic SaaS Engineer")}
  return (
    <main className="min-h-screen bg-[#f0fdfa] text-teal-950">
      <section className="mx-auto max-w-5xl px-6 pb-12 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-teal-600">Clinical product · outcomes</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-teal-800/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-teal-900/70">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={\`mailto:\${cv.email}\`} className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-medium text-white">Book a conversation</a>
          <a href={cv.linkedin} className="rounded-full border border-teal-300 px-5 py-2.5 text-sm text-teal-800">LinkedIn</a>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-4">
          {cv.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-teal-100 bg-white p-4">
              <p className="text-2xl font-semibold text-teal-700">{h.value}</p>
              <p className="mt-1 text-xs text-teal-700/60">{h.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl space-y-14 px-6 pb-28">
        <ExperienceList tone="light" />
        <SkillsCloud tone="light" />
        <ProjectLinks tone="light" />
        <ContactRow />
      </section>
    </main>
  );
}
`,

  V63AppliedAICasebook: `${header("Applied AI Casebook")}
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Casebook</p>
        <h1 className="mt-3 font-[family-name:var(--font-serif)] text-5xl">{cv.name}</h1>
        <p className="mt-3 text-slate-600">{cv.title}</p>
        <p className="mt-6 text-sm leading-8 text-slate-600">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-10 px-6 pb-16">
        {cv.experience.map((job, i) => (
          <article key={job.company} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-wider text-slate-400">Case {String(i + 1).padStart(2, "0")} · {job.period}</p>
            <h2 className="mt-2 text-2xl font-semibold">{job.role}</h2>
            <p className="text-sm text-slate-500">{job.company} · {job.place}</p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-700">
              {job.bullets.map((b) => <li key={b.slice(0, 28)} className="pl-4 before:-ml-4 before:mr-2 before:content-['→']">{b}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-4xl space-y-12 px-6 pb-28">
        <SkillsCloud tone="light" />
        <ProjectLinks tone="light" />
        <ContactRow />
      </section>
    </main>
  );
}
`,

  V72LiquidMetalType: `${header("Liquid Metal Type")}
  return (
    <main className="min-h-screen bg-[#111113] text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-24">
        <motion.h1 className="font-[family-name:var(--font-display)] text-6xl font-black uppercase leading-[0.85] sm:text-8xl" style={{ backgroundImage: "linear-gradient(120deg,#e2e8f0,#94a3b8,#f8fafc,#64748b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: reduce ? undefined : "url(#liquid)" }} initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          {cv.name}
        </motion.h1>
        <p className="mt-8 text-xl text-zinc-300">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-zinc-300" />
      </section>
    </main>
  );
}
`,

  V81AgentSwarmField: `${header("Agent Swarm Field")}
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-indigo-50">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: 28 }, (_, i) => (
          <motion.span key={i} className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/70" style={{ left: \`\${(i * 17) % 100}%\`, top: \`\${(i * 23) % 100}%\` }} animate={reduce ? undefined : { x: [0, (i % 5) * 8 - 16, 0], y: [0, (i % 4) * 6 - 12, 0] }} transition={{ duration: 3 + (i % 5), repeat: Infinity }} />
        ))}
      </div>
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-10 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Agent swarm · human lead</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-indigo-100/80">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28">
        <ExperienceList tone="dark" />
        <SkillsCloud />
        <ProjectLinks />
        <ContactRow className="text-cyan-100/70" />
      </section>
    </main>
  );
}
`,
};

for (const [file, body] of Object.entries(cells)) {
  fs.writeFileSync(path.join(dir, `${file}.tsx`), body);
  console.log("wrote", file);
}
console.log("done", Object.keys(cells).length);
