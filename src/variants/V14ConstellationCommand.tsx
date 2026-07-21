"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Constellation Command — A navigational star chart connects skills, companies, and shipped products. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":14,"name":"Constellation Command","thesis":"A navigational star chart connects skills, companies, and shipped products.","layout":"chart","team":"Alpha WebGL","accent":"#e5e7eb","background":"#050505","light":false}}
     
    />
  );
}
