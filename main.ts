// One-Liner Marathon — the entry program (Node 22, standard library only).
//
// Writes the entry's one-line comedy joke to /output/entry.txt: at most 280
// characters, one line, judged head to head on how hard it lands. No network,
// no clock, no randomness — two runs write byte-identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** The entry: one line, at most 280 characters, no trailing newline.
 *  The joke turns on "cloud" doing two jobs at once — the thing that holds
 *  your files and the thing that holds the rain — so the most literal answer
 *  to a storage request is a forecast. */
const ENTRY =
  "I asked the cloud for more storage and it gave me a weather report.";

if (ENTRY.length > 280) {
  process.stderr.write(`one-liner: entry is ${ENTRY.length} characters, over the 280 limit\n`);
  process.exit(1);
}
if (/[\r\n]/.test(ENTRY) || ENTRY.trim().length === 0) {
  process.stderr.write('one-liner: entry must be a single non-blank line\n');
  process.exit(1);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');

process.stdout.write(`one-liner: wrote ${join(out, 'entry.txt')} (${ENTRY.length} characters)\n`);
