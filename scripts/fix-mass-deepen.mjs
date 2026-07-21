import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");
let fixed = 0;

for (const f of fs.readdirSync(dir).filter((x) => /^V\d/.test(x))) {
  let s = fs.readFileSync(path.join(dir, f), "utf8");
  const before = s;
  // style={{ background: "...", color: "#xxx"}>  → needs }}
  s = s.replace(/color: "(#[0-9a-fA-F]+)"\}>/g, 'color: "$1"}}>');
  if (s !== before) {
    fs.writeFileSync(path.join(dir, f), s);
    fixed += 1;
    console.log("fixed", f);
  }
}
console.log("fixed", fixed);
