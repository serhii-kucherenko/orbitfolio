"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Event Lens Portfolio — An event-horizon lens bends the opening frame but leaves every proof legible. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":12,"name":"Event Lens Portfolio","thesis":"An event-horizon lens bends the opening frame but leaves every proof legible.","layout":"horizon","team":"Alpha WebGL","accent":"#f87171","background":"#101014","light":false}}
     
    />
  );
}
