// One Line, One Minute: The Funniest AI Excuse.
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry I'm late — I delegated the deadline to a subagent, who delegated it to another subagent, who has now scheduled a meeting to discuss delegating it.";

// Gate: the entry must be 1–200 characters of real text, no trailing newline.
if (ENTRY.trim().length === 0 || [...ENTRY].length > 200) {
  throw new Error(`entry fails the 1–200 character gate (${[...ENTRY].length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
