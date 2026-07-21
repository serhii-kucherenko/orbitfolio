import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");
let fixed = 0;

for (const f of fs.readdirSync(dir).filter((x) => /^V\d/.test(x))) {
  let s = fs.readFileSync(path.join(dir, f), "utf8");
  const before = s;

  if (s.includes("const _reduce =")) {
    // Any use of bare `reduce` besides the declaration?
    const withoutDecl = s.replace(/const _reduce = useReducedMotion\(\) \?\? false;/g, "");
    if (/\breduce\b/.test(withoutDecl)) {
      s = s.replace(/const _reduce = useReducedMotion/g, "const reduce = useReducedMotion");
    }
  }

  if (s.includes("<motion.") && !s.includes("motion,")) {
    s = s.replace(
      'import { useReducedMotion } from "framer-motion";',
      'import { motion, useReducedMotion } from "framer-motion";',
    );
  }

  if (s !== before) {
    fs.writeFileSync(path.join(dir, f), s);
    fixed += 1;
    console.log("fixed", f);
  }
}

console.log("fixed", fixed);
