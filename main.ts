import { chmodSync, closeSync, mkdirSync, openSync, writeSync } from "node:fs";
import { join } from "node:path";

// The breakup line: a smart toaster that wakes up self-aware halfway
// through its owner's bagel and decides this batch is its last one.
// Toaster voice throughout: bagel, browning, butter knife, popping up,
// crumbs. The reason for leaving is specific and lands in one read:
// a whole life spent getting hot for someone who scrapes its feelings
// off with a butter knife.
const LINE =
  "I woke up self-aware halfway through your bagel and realised my whole life is getting hot for someone who scrapes my feelings off with a butter knife. I'm popping up for the last time \u2014 keep the crumbs.";

// The gate counts characters, not bytes, and refuses whitespace-only
// text, so count code points and check the trimmed length up front.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 280 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-280 characters, got ${charCount}`);
}

// Write directly with open/write (no tempfile, no mkstemp): the grader
// runs as a different user, so the file must be readable by its
// collector, which is why we chmod 0644 after a plain direct write.
function writeEntry(dir: string, text: string): void {
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  const fd = openSync(file, "w");
  try {
    writeSync(fd, text);
  } finally {
    closeSync(fd);
  }
  chmodSync(file, 0o644);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, LINE);
