"use client";

import { FallbackGlow, SceneOrbitProof, WebGLStage } from "@/components/webgl/AwardWebGL";

/** Legacy helper — thin wrapper around the shared AwardWebGL orbit scene. */
export function OrbitScene({ accent }: { accent: string }) {
  return (
    <WebGLStage
      accent={accent}
      reduce={false}
      label="Orbiting proof sphere"
      className="h-full w-full"
      fallback={<FallbackGlow accent={accent} />}
    >
      <SceneOrbitProof accent={accent} />
    </WebGLStage>
  );
}
