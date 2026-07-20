import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orbitfolio — Serhii Kucherenko",
    short_name: "Orbitfolio",
    description: "Founding Full-Stack Engineer portfolio — applied AI, agents, RAG.",
    start_url: "/",
    display: "standalone",
    background_color: "#03050c",
    theme_color: "#03050c",
    lang: "en",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
