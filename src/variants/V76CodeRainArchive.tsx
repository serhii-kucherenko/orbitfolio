"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Code Rain Archive — A restrained code-rain canvas sits behind an uncompromised complete CV. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":76,"name":"Code Rain Archive","thesis":"A restrained code-rain canvas sits behind an uncompromised complete CV.","layout":"canvas","team":"Zeta Experimental","accent":"#f87171","background":"#101014","light":false}}
     
    />
  );
}
