/**
 * Handcrafts 10 more non-AwardVariant cells (batch 7) — gate 85.
 * node scripts/handcraft-batch-7.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");

function write(file, title, body, motion = false) {
  const reduceLine = motion
    ? "  const reduce = useReducedMotion() ?? false;"
    : "  const _reduce = useReducedMotion() ?? false;";
  const imports = motion
    ? `import { motion, useReducedMotion } from "framer-motion";`
    : `import { useReducedMotion } from "framer-motion";`;
  fs.writeFileSync(
    path.join(dir, `${file}.tsx`),
    `"use client";

${imports}
import { ContactRow, ExperienceList, ProjectLinks, SkillsCloud } from "@/components/CvBlocks";
import { cv } from "@/data/cv";

/** ${title} — handcrafted award cell */
export function Variant() {
${reduceLine}
${body}
}
`,
  );
  console.log("wrote", file);
}

write("V65ProductEngineerDaylight", "Product Engineer Daylight", `  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-sky-700">Daylight product</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-lg text-slate-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"><p className="text-2xl font-bold text-sky-700">{h.value}</p><p className="text-xs text-slate-500">{h.label}</p></div>)}</div>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`);

write("V66HiringManagerBrief", "Hiring Manager Brief", `  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">Brief for hiring managers</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-neutral-600">{cv.title}</p>
        <p className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-7 text-neutral-700">{cv.summary}</p>
        <a href={\`mailto:\${cv.email}\`} className="mt-8 inline-flex rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white">Schedule a chat</a>
      </section>
      <section className="mx-auto max-w-3xl space-y-14 px-6 pb-28"><ExperienceList tone="light" /><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`);

write("V67MetricProfile", "Metric Profile", `  return (
    <main className="min-h-screen bg-[#0b1220] text-slate-50">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">Metric profile</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-slate-300">{cv.title}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-4">{cv.highlights.map((h) => <div key={h.label} className="rounded-2xl border border-cyan-400/20 bg-cyan-950/40 p-5"><p className="text-3xl font-bold text-cyan-200">{h.value}</p><p className="mt-2 text-[10px] uppercase tracking-wider text-cyan-200/50">{h.label}</p></div>)}</div>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-cyan-100/70" /></section>
    </main>
  );`);

write("V68ProofMosaicLight", "Proof Mosaic Light", `  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">Proof mosaic</p>
        <h1 className="mt-3 font-[family-name:var(--font-serif)] text-5xl">{cv.name}</h1>
        <p className="mt-2 text-stone-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-stone-600">{cv.summary}</p>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-12 md:grid-cols-12">
        {cv.experience.map((job, i) => (
          <article key={job.company} className={\`rounded-3xl border border-stone-200 bg-white p-6 \${i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-6"}\`}>
            <p className="text-xs uppercase tracking-wider text-stone-400">{job.period}</p>
            <h2 className="mt-2 text-xl font-semibold">{job.company}</h2>
            <p className="text-sm text-stone-500">{job.role}</p>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-5xl space-y-12 px-6 pb-28"><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`);

write("V69FoundingEngineerOnePager", "Founding Engineer One Pager", `  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-3xl px-6 py-28">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-lg text-slate-600">{cv.title} · {cv.location}</p>
        <p className="mt-6 text-sm leading-7 text-slate-600">{cv.summary}</p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm"><a className="underline" href={\`mailto:\${cv.email}\`}>{cv.email}</a><a className="underline" href={cv.linkedin}>LinkedIn</a><a className="underline" href={cv.github}>GitHub</a><span>{cv.phone}</span></div>
        <hr className="my-10 border-slate-200" />
        <ExperienceList tone="light" />
        <hr className="my-10 border-slate-200" />
        <SkillsCloud tone="light" />
        <hr className="my-10 border-slate-200" />
        <ProjectLinks tone="light" />
      </section>
    </main>
  );`);

write(
  "V73OrigamiEvidenceFold",
  "Origami Evidence Fold",
  `  return (
    <main className="min-h-screen bg-[#f1f5f9] text-slate-900">
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Origami folds</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">{cv.name}</h1>
        <p className="mt-2 text-slate-600">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">{cv.summary}</p>
      </section>
      <section className="mx-auto grid max-w-4xl gap-6 px-6 pb-12 md:grid-cols-2">
        {cv.experience.map((job, i) => (
          <motion.article key={job.company} initial={reduce ? false : { rotateY: -18, opacity: 0 }} whileInView={{ rotateY: 0, opacity: 1 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style={{ transformOrigin: i % 2 ? "right center" : "left center" }}>
            <p className="text-xs text-slate-400">{job.period}</p>
            <h2 className="mt-2 text-xl font-semibold">{job.company}</h2>
            <p className="text-sm text-slate-500">{job.role}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">{job.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}</ul>
          </motion.article>
        ))}
      </section>
      <section className="mx-auto max-w-4xl space-y-12 px-6 pb-28"><SkillsCloud tone="light" /><ProjectLinks tone="light" /><ContactRow /></section>
    </main>
  );`,
  true,
);

write("V74VoidWhisper", "Void Whisper", `  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-8 pt-24">
        <h1 className="font-[family-name:var(--font-serif)] text-5xl font-normal tracking-tight sm:text-7xl">{cv.name}</h1>
        <p className="mt-8 text-sm text-white/40">{cv.title}</p>
        <p className="mt-12 max-w-md text-sm leading-8 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-3xl space-y-20 px-8 pb-32"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-white/50" /></section>
    </main>
  );`);

write(
  "V76CodeRainArchive",
  "Code Rain Archive",
  `  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020403] font-[family-name:var(--font-mono)] text-[#7CFFB2]">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        {Array.from({ length: 20 }, (_, i) => (
          <motion.span key={i} className="absolute text-[10px] leading-3" style={{ left: \`\${i * 5}%\`, top: "-10%" }} animate={reduce ? undefined : { y: ["0vh", "110vh"] }} transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: "linear", delay: i * 0.2 }}>
            {["01", "AI", "RAG", "<>", "fn"][i % 5]}
          </motion.span>
        ))}
      </div>
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-xs opacity-70">$ archive --resume</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-white sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-lg text-[#9AE6B4]">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7">{cv.summary}</p>
      </section>
      <section className="relative z-10 mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-[#9AE6B4]" /></section>
    </main>
  );`,
  true,
);

write(
  "V77AuroraVancouverCanvas",
  "Aurora Vancouver Canvas",
  `  return (
    <main className="min-h-screen bg-[#041018] text-emerald-50">
      {!reduce && <motion.div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 h-[45vh] opacity-45" style={{ background: "linear-gradient(115deg, transparent, rgba(52,211,153,0.35), rgba(56,189,248,0.2), transparent)" }} animate={{ x: ["-8%", "8%", "-8%"] }} transition={{ duration: 14, repeat: Infinity }} />}
      <section className="relative mx-auto max-w-4xl px-6 pb-8 pt-28">
        <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-300/70">Aurora · Vancouver</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-bold sm:text-6xl">{cv.name}</h1>
        <p className="mt-3 text-emerald-100/75">{cv.title}</p>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="relative mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-emerald-100/70" /></section>
    </main>
  );`,
  true,
);

write("V78EventHorizonFilter", "Event Horizon Filter", `  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 pt-24 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 50% 45%, transparent 18%, #000 62%)" }} />
        <h1 className="relative font-[family-name:var(--font-display)] text-5xl font-bold sm:text-7xl">{cv.name}</h1>
        <p className="relative mt-5 text-lg text-zinc-300">{cv.title}</p>
        <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/55">{cv.summary}</p>
      </section>
      <section className="mx-auto max-w-4xl space-y-14 px-6 pb-28"><ExperienceList tone="dark" /><SkillsCloud /><ProjectLinks /><ContactRow className="text-zinc-300" /></section>
    </main>
  );`);

console.log("done 10");
