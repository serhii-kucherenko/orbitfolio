"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

const OrbitScene = dynamic(() => import("@/components/OrbitScene").then((module) => module.OrbitScene), { ssr: false });

/** Shader Atmosphere — Atmospheric depth and disciplined typography make technical proof feel cinematic. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":7,"name":"Shader Atmosphere","thesis":"Atmospheric depth and disciplined typography make technical proof feel cinematic.","layout":"horizon","team":"Alpha WebGL","accent":"#7dd3fc","background":"#0b1220","light":false}}
      scene={reduceMotion ? undefined : <OrbitScene accent="#7dd3fc" />}
    />
  );
}
