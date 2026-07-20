import type { ReactElement } from "react";

export const ogSize = { width: 1200, height: 630 } as const;

export function OgCard(): ReactElement {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 72,
        background: "linear-gradient(145deg, #020617 0%, #0c4a6e 45%, #134e4a 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", opacity: 0.7 }}>
        Orbitfolio
      </div>
      <div style={{ fontSize: 72, fontWeight: 800, marginTop: 16, lineHeight: 1.05 }}>
        Serhii Kucherenko
      </div>
      <div style={{ fontSize: 32, marginTop: 20, opacity: 0.85 }}>
        Founding Full-Stack Engineer · Applied AI
      </div>
      <div style={{ fontSize: 22, marginTop: 28, opacity: 0.55 }}>
        Vancouver · Agents · RAG · Production systems
      </div>
    </div>
  );
}
