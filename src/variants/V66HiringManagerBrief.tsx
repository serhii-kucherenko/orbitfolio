"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Hiring Manager Brief — A concise briefing opens into every bullet, skill group, project, and contact route. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":66,"name":"Hiring Manager Brief","thesis":"A concise briefing opens into every bullet, skill group, project, and contact route.","layout":"briefing","team":"Epsilon Hire","accent":"#fbbf24","background":"#07111f","light":false}}
     
    />
  );
}
