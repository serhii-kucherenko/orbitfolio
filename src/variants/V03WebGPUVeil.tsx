"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

const OrbitScene = dynamic(() => import("@/components/OrbitScene").then((module) => module.OrbitScene), { ssr: false });

/** WebGPU Veil — A translucent spatial veil parts to reveal the engineer and production outcomes. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":3,"name":"WebGPU Veil","thesis":"A translucent spatial veil parts to reveal the engineer and production outcomes.","layout":"holo","team":"Alpha WebGL","accent":"#5eead4","background":"#020b08","light":false}}
      scene={reduceMotion ? undefined : <OrbitScene accent="#5eead4" />}
    />
  );
}
