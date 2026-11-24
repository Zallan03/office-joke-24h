// One-Line Office Joke: 24-Hour Sprint
// Writes a single one-line joke about office life to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "I signed a leaving card for a man I've never met, which is the most teamwork I've done all year.";

// Gate guard: the entry must be 1-200 characters, a single line, non-blank.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read-back verification: the file must match the joke byte-for-byte,
// with no trailing newline added.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke exactly");
}
