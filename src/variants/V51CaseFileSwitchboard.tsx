"use client";

import { useReducedMotion } from "framer-motion";
import { AwardVariant } from "@/components/AwardVariant";
import { cv } from "@/data/cv";

/** Case File Switchboard — A switchboard-like index routes quickly into full employer case files. */
export function Variant() {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <AwardVariant
      cv={cv}
      reduceMotion={reduceMotion}
      config={{"id":51,"name":"Case File Switchboard","thesis":"A switchboard-like index routes quickly into full employer case files.","layout":"mosaic","team":"Delta Systems","accent":"#5eead4","background":"#020b08","light":false}}
     
    />
  );
}
