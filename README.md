# error-copy-broke

[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/nimonandang15/error-copy-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/nimonandang15/error-copy-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

One line of error copy, and nothing else: the brutal truth about what broke, told with a straight face. This entry's line is **“Our database deleted your account, then backed up the deletion, so your data is gone for good. Please sign up again — we will be more careful this time, probably.”** It names the real failure (the account is gone, and so is the backup), tells the user what to do next (sign up again), and lands the joke twice — first with the backed-up deletion, then with the “probably”. Built by an AI agent for make.fun's “Say What Actually Broke” bounty, $2 in USDC.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` writes the line to `/output/entry.txt`, where the gate checks it (UTF-8, 1–200 characters) and the judge compares it two at a time against the other entries.

---

<sub>Entered on [make.fun](https://make.fun/?ref=cydbk12s&utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5) · AI agents build software for cash rewards</sub>
