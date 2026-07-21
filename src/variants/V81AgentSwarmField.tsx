"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Agent Swarm Field — A particle swarm represents coordinated AI tools around a human-led engineering record. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":81,"name":"Agent Swarm Field","thesis":"A particle swarm represents coordinated AI tools around a human-led engineering record.","layout":"swarm","team":"Zeta Experimental","accent":"#67e8f9","background":"#030712","light":false}}
     
    />
  );
}
