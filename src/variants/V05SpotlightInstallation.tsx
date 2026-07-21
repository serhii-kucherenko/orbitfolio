"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

const OrbitScene = dynamic(() => import("@/components/OrbitScene").then((module) => module.OrbitScene), { ssr: false });

/** Spotlight Installation — A dark exhibition uses a single moving spotlight to stage one claim at a time. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":5,"name":"Spotlight Installation","thesis":"A dark exhibition uses a single moving spotlight to stage one claim at a time.","layout":"museum","team":"Alpha WebGL","accent":"#a7f3d0","background":"#071018","light":false}}
      scene={reduceMotion ? undefined : <OrbitScene accent="#a7f3d0" />}
    />
  );
}
