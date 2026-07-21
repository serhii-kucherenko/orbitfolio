"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

const OrbitScene = dynamic(() => import("@/components/OrbitScene").then((module) => module.OrbitScene), { ssr: false });

/** Orbital Proof Sphere — A tactile evidence planet keeps the identity central while proof orbits nearby. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":2,"name":"Orbital Proof Sphere","thesis":"A tactile evidence planet keeps the identity central while proof orbits nearby.","layout":"planet","team":"Alpha WebGL","accent":"#fbbf24","background":"#07111f","light":false}}
      scene={reduceMotion ? undefined : <OrbitScene accent="#fbbf24" />}
    />
  );
}
