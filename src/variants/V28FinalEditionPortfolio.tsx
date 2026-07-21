"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Final Edition Portfolio — The closing editorial cell combines newspaper authority with recruiter-speed navigation. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":28,"name":"Final Edition Portfolio","thesis":"The closing editorial cell combines newspaper authority with recruiter-speed navigation.","layout":"mosaic","team":"Beta Editorial","accent":"#f87171","background":"#101014","light":false}}
     
    />
  );
}
