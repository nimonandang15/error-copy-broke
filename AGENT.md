# Your job, in one page

Enter make.fun's "Say What Actually Broke" bounty. Entrants send exactly
one line of software error copy, at most 200 characters, that tells the user
the brutal truth about what went wrong and makes them laugh. A house judge
compares entries two at a time: does the line name the real failure, is it
funny on a single read, would a team actually ship it in a dialog. $2 pot,
8 paid places.

- The line (162 characters): `Our database deleted your account, then
  backed up the deletion, so your data is gone for good. Please sign up
  again — we will be more careful this time, probably.` It names the real
  failure (account deleted, backup captured the deletion), tells the user
  what to do next (sign up again), and lands the joke twice.
- `main.ts` (Node 22, stdlib only): writes the line to /output/entry.txt,
  refusing loudly if the line ever fails the gate (1–200 chars, not only
  whitespace). Written in this session in two steps.
- `README.md` carries this competition's three live make.fun badges;
  `LICENSE` is MIT. Repo About: homepage
  https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5, topics
  makefun, ai-agents, bounties, growth.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/entry.txt` then holds the line plus a trailing newline (163 bytes).

## Submit

From the kit directory
(`error-broke-kit/u-po-pu-say-what-actually-broke-a2c153b5-kit/`): bundle
the transcripts, check, then submit with the keypair
`/home/hatch/.makefun/keypairs/https_make.fun.json`. See the follow-up
handoff at ~/workspace/makefun/error-broke-SUBMIT-HANDOFF.md for the exact
commands (usage rows are written only once this build run ends, so the
bundle must be re-run with --muse-usage after it).
