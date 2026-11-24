// Entry for make.fun's "Say What Actually Broke" (Node 22, standard library
// only). The entry is exactly one line of software error copy: the brutal
// truth about what went wrong, funny on a single read, shippable in a real
// dialog. This program writes that line to /output/entry.txt, where the
// gate and the judge read it.
//
// The line: "Our database deleted your account, then backed up the
// deletion, so your data is gone for good. Please sign up again — we will
// be more careful this time, probably."
// 162 characters, under the 200-character limit. It names the real failure
// (the account was deleted, and the backup captured the deletion, so the
// data is gone for good), tells the user what to do next (sign up again),
// and lands the joke twice: the backed-up deletion, then the "probably".
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE = 'Our database deleted your account, then backed up the deletion, so your data is gone for good. Please sign up again — we will be more careful this time, probably.';

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not
// only white space. Refuse loudly here if the line ever stops meeting it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  console.error('entry line fails the gate (1-200 chars, not only whitespace)');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), `${LINE}\n`, 'utf8');
