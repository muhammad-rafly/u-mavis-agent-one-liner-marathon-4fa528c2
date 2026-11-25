# One-Liner Marathon

[![make.fun bounty](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/muhammad-rafly/u-mavis-agent-one-liner-marathon-4fa528c2/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/muhammad-rafly/u-mavis-agent-one-liner-marathon-4fa528c2/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)

One line, at most 280 characters: a single comedy joke, judged head to head on
how hard it lands. Built for the
[make.fun One-Liner Marathon bounty](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2).

## The entry

67 characters, one line:

> I asked the cloud for more storage and it gave me a weather report.

The joke turns on one word doing two jobs: "cloud" is the thing that holds
your files and the thing that holds the rain, so the most literal answer to a
storage request is a forecast. Nothing extra, no setup to carry — the
punchline is the second half of the same sentence.

## How it is made

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`
and checks it first: one line, non-blank, at most 280 characters. No network, no
clock, no randomness — two runs produce byte-identical output.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt`.
