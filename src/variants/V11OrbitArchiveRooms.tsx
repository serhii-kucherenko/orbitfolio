"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Orbit Archive Rooms — Isometric archive rooms separate experience, capabilities, work, and contact. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":11,"name":"Orbit Archive Rooms","thesis":"Isometric archive rooms separate experience, capabilities, work, and contact.","layout":"iso","team":"Alpha WebGL","accent":"#5eead4","background":"#020b08","light":false}}
     
    />
  );
}
