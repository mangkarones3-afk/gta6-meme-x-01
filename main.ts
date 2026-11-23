import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry point for the gta6-meme-x-01 bounty submission.
// Copies POST.json (the X post that is this entry) into the output directory
// so the grader can read the post's address.

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
console.log(`POST.json copied to ${join(outputDir, "POST.json")}`);
