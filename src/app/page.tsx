"use client";

import dynamic from "next/dynamic";
import { LabChrome } from "@/components/LabChrome";

/** Champion route — loads winning hybrid until scores finalize, then stays on best-of. */
const Champion = dynamic(
  () => import("@/variants/V50ChampionHybrid").then((m) => m.Variant),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen items-center justify-center text-sm text-white/50">
        Engaging warp…
      </div>
    ),
  },
);

export default function HomePage() {
  return (
    <>
      <LabChrome />
      <Champion />
    </>
  );
}
