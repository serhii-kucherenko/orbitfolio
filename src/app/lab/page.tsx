import Link from "next/link";
import { LabChrome } from "@/components/LabChrome";
import { composite, variants, type VariantMeta } from "@/data/variants";

export const metadata = {
  title: "Design Lab",
  description: "50 portfolio experiments scored on coolness, comprehensiveness, uniqueness, motion, and hireability.",
};

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 text-[10px]">
      <span className="w-16 shrink-0 text-white/40">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-teal-400" style={{ width: `${value * 10}%` }} />
      </div>
      <span className="w-6 text-right text-white/60">{value}</span>
    </div>
  );
}

function Card({ v, rank }: { v: VariantMeta; rank?: number }) {
  const scores = v.scores;
  const comp = scores ? composite(scores) : null;
  return (
    <Link
      href={`/test/${v.id}`}
      className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-teal-400/40 hover:bg-white/[0.06]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[11px] text-teal-300/80">
            {rank != null ? `#${rank}` : ""} /test/{v.id}
          </p>
          <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl group-hover:text-teal-100">{v.name}</h2>
        </div>
        {comp != null && (
          <p className="font-[family-name:var(--font-display)] text-2xl text-teal-300">{comp.toFixed(2)}</p>
        )}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-white/55">{v.thesis}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {v.stack.map((s) => (
          <span key={s} className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/45">
            {s}
          </span>
        ))}
      </div>
      {scores && (
        <div className="mt-4 space-y-1.5">
          <ScoreBar label="Cool" value={scores.coolness} />
          <ScoreBar label="Complete" value={scores.comprehensiveness} />
          <ScoreBar label="Unique" value={scores.uniqueness} />
          <ScoreBar label="Motion" value={scores.motion} />
          <ScoreBar label="Hire" value={scores.hireability} />
        </div>
      )}
    </Link>
  );
}

export default function LabPage() {
  const scored = variants.filter((v) => v.scores);
  const ranked = [...scored].sort((a, b) => composite(b.scores!) - composite(a.scores!));
  const champion = ranked[0];

  return (
    <>
      <LabChrome />
      <main className="relative min-h-screen">
        <div className="nebula-glow absolute inset-0 opacity-70" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-28">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">AI Method Lab · product experiment</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl">Design Lab</h1>
          <p className="mt-4 max-w-2xl text-sm text-white/60">
            Fifty structurally different portfolio UIs at <code className="text-teal-200">/test/1…50</code>. Scored on
            coolness (30%), comprehensiveness (20%), uniqueness (20%), motion (15%), hireability (15%). Champion
            promoted to <code className="text-teal-200">/</code>.
          </p>
          {champion && (
            <p className="mt-4 text-sm text-teal-200/90">
              Current champion:{" "}
              <Link href={`/test/${champion.id}`} className="underline underline-offset-4">
                #{champion.id} {champion.name}
              </Link>{" "}
              ({composite(champion.scores!).toFixed(2)})
            </p>
          )}

          <h2 className="mb-4 mt-14 font-[family-name:var(--font-display)] text-2xl">
            {scored.length ? "Leaderboard" : "All experiments"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(scored.length ? ranked : variants).map((v, i) => (
              <Card key={v.id} v={v} rank={scored.length ? i + 1 : undefined} />
            ))}
          </div>

          <p className="mt-10 text-xs text-white/40">
            Rubric: <Link href="https://github.com/serhii-kucherenko/orbitfolio" className="underline">docs/RUBRIC.md</Link>
          </p>
        </div>
      </main>
    </>
  );
}
