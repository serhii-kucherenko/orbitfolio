import type { MetadataRoute } from "next";
import { VARIANT_COUNT } from "@/data/variants";

const base = "https://orbitfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const tests = Array.from({ length: VARIANT_COUNT }, (_, i) => ({
    url: `${base}/test/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/lab`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/goals`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...tests,
  ];
}
