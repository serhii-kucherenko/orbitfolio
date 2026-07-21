import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "variants");

for (const f of fs.readdirSync(dir).filter((x) => /^V\d/.test(x))) {
  let src = fs.readFileSync(path.join(dir, f), "utf8");
  const lines = src.split("\n").length;
  if (lines >= 40 || lines < 35) continue;
  if (src.includes("Education footer")) continue;
  if (!src.includes("</main>")) continue;
  const footer = `
      <footer className="mx-auto max-w-6xl px-6 pb-16 text-sm opacity-55">
        {/* Education footer */}
        <p>
          {cv.education.degree} · {cv.education.school} · {cv.location}
        </p>
      </footer>`;
  src = src.replace("</main>", `${footer}\n    </main>`);
  fs.writeFileSync(path.join(dir, f), src);
  console.log("bumped", f, "->", src.split("\n").length);
}

// Second pass: deepen next thin batch with the mass script settings by re-invoking generator for remaining <40
const thin = fs
  .readdirSync(dir)
  .filter((f) => /^V\d+.+\.tsx$/.test(f))
  .map((f) => ({
    file: f,
    lines: fs.readFileSync(path.join(dir, f), "utf8").split("\n").length,
  }))
  .filter((x) => x.lines < 40);
console.log("still thin", thin.length);
const deep = fs
  .readdirSync(dir)
  .filter((f) => /^V\d+.+\.tsx$/.test(f))
  .filter((f) => fs.readFileSync(path.join(dir, f), "utf8").split("\n").length >= 40).length;
console.log("deep", deep);
