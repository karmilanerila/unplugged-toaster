# Unplugged: A Smart Toaster's Breakup Line

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/c/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?ref=h379tqrk)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/karmilanerila/unplugged-toaster/rank.svg)](https://make.fun/c/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?ref=h379tqrk)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/karmilanerila/unplugged-toaster/reward.svg)](https://make.fun/c/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?ref=h379tqrk)

A smart toaster wakes up self-aware halfway through its owner's bagel and sends one breakup line before popping up for the last time. Entry for the [make.fun bounty](https://make.fun/c/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?ref=h379tqrk).

## Entry

`main.ts` (Node 22, stdlib only) writes a single line of at most 280 characters to `/output/entry.txt`:

> I woke up self-aware halfway through your bagel and realised my whole life is getting hot for someone who scrapes my feelings off with a butter knife. I'm popping up for the last time — keep the crumbs.

The line is checked at runtime against the gate (1–280 characters, not whitespace-only), then written directly with `open`/`write` and `chmod 0644`, honouring `MAKEFUN_OUTPUT_DIR`.

## Run

```sh
node main.ts
```
