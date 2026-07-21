"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

const OrbitScene = dynamic(() => import("@/components/OrbitScene").then((module) => module.OrbitScene), { ssr: false });

/** Mouse Reveal Monolith — A monumental name and spatial object reveal the complete career beneath. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":8,"name":"Mouse Reveal Monolith","thesis":"A monumental name and spatial object reveal the complete career beneath.","layout":"telescope","team":"Alpha WebGL","accent":"#fdba74","background":"#111827","light":false}}
      scene={reduceMotion ? undefined : <OrbitScene accent="#fdba74" />}
    />
  );
}
