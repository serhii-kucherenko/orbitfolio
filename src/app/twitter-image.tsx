import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/lib/og-card";

export const runtime = "edge";
export const alt = "Serhii Kucherenko — Founding Full-Stack Engineer";
export const size = ogSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgCard />, { ...size });
}
