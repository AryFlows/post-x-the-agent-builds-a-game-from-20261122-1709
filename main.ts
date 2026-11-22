// Hands the submitted X post address to the grader.
//
// The entry itself is a video post on X; this program only moves the file
// that names that post into the output folder the grader reads.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  const source = join(botDir, "POST.json");
  // Refuse a broken address file instead of handing the grader garbage.
  const parsed = JSON.parse(readFileSync(source, "utf8"));
  if (typeof parsed !== "object" || parsed === null || typeof parsed.url !== "string") {
    throw new Error("POST.json is not an object with a string url");
  }
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, join(outDir, "POST.json"));
} catch (err) {
  const detail = err instanceof Error ? err.message : String(err);
  console.error(`main.ts could not hand over POST.json: ${detail}`);
  process.exit(1);
}
