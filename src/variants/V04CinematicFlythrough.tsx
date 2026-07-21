"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

const OrbitScene = dynamic(() => import("@/components/OrbitScene").then((module) => module.OrbitScene), { ssr: false });

/** Cinematic Flythrough — A continuous camera-like progression turns the CV into one restrained film take. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":4,"name":"Cinematic Flythrough","thesis":"A continuous camera-like progression turns the CV into one restrained film take.","layout":"chapters","team":"Alpha WebGL","accent":"#f87171","background":"#101014","light":false}}
      scene={reduceMotion ? undefined : <OrbitScene accent="#f87171" />}
    />
  );
}
