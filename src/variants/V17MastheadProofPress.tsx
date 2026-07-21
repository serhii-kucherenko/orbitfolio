"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Masthead Proof Press — A daily-paper hierarchy puts production evidence above ornamental interface. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":17,"name":"Masthead Proof Press","thesis":"A daily-paper hierarchy puts production evidence above ornamental interface.","layout":"editorial","team":"Beta Editorial","accent":"#67e8f9","background":"#030712","light":true}}
     
    />
  );
}
