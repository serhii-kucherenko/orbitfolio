"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Elastic Career Rail — A sideways career rail uses elastic entrances and full-detail stops. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":31,"name":"Elastic Career Rail","thesis":"A sideways career rail uses elastic entrances and full-detail stops.","layout":"rail","team":"Gamma Kinetic","accent":"#7dd3fc","background":"#0b1220","light":false}}
     
    />
  );
}
