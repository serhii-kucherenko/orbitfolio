import Link from "next/link";
import { LabChrome } from "@/components/LabChrome";
import { LabBoard } from "@/components/LabBoard";
import { SurpriseButton } from "@/components/SurpriseButton";
import { composite, variants } from "@/data/variants";

export const metadata = {
  title: "Design Lab",
  description: "100 portfolio experiments scored on coolness, comprehensiveness, uniqueness, motion, and hireability.",
};

export default function LabPage() {
  const champion = [...variants]
    .filter((v) => v.scores)
    .sort((a, b) => composite(b.scores!) - composite(a.scores!))[0];

  return (
    <>
      <LabChrome />
      <main className="relative min-h-screen">
        <div className="nebula-glow absolute inset-0 opacity-70" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-28 pt-28">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">AI Method Lab · product experiment</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl">Design Lab</h1>
          <p className="mt-4 max-w-2xl text-sm text-white/60">
            One hundred structurally different portfolio designs at{" "}
            <code className="text-teal-200">/test/1…100</code>. Scored on coolness (30%), comprehensiveness (20%),
            uniqueness (20%), motion (15%), hireability (15%). Champion promoted to{" "}
            <code className="text-teal-200">/</code>.
          </p>
          {champion && (
            <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-teal-400/30 bg-teal-950/30 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-teal-300/70">Live on home</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-2xl text-teal-50">
                  #{champion.id} {champion.name}
                  <span className="ml-2 text-lg text-teal-300/80">
                    {composite(champion.scores!).toFixed(2)}
                  </span>
                </p>
                <p className="mt-1 text-xs text-white/50">{champion.thesis}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/"
                  className="rounded-full bg-teal-300 px-5 py-2.5 text-sm font-semibold text-[#042f2e]"
                >
                  View champion
                </Link>
                <Link
                  href={`/test/${champion.id}`}
                  className="rounded-full border border-white/25 px-5 py-2.5 text-sm text-white/80"
                >
                  Open /test/{champion.id}
                </Link>
                <Link
                  href="/resume"
                  className="rounded-full border border-white/25 px-5 py-2.5 text-sm text-white/80"
                >
                  Resume
                </Link>
                <SurpriseButton />
              </div>
            </div>
          )}

          <div className="mt-14">
            <LabBoard />
          </div>

          <p className="mt-10 text-xs text-white/40">
            Rubric:{" "}
            <a
              href="https://github.com/serhii-kucherenko/orbitfolio/blob/main/docs/RUBRIC.md"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              docs/RUBRIC.md
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
