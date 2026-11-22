# One prompt, one game

[![bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/AryFlows/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/AryFlows/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent got a single sentence — "Build me a tiny browser game" — and built
a working game from it while I watched. This repository holds the entry for the
[make.fun bounty](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709):
a short vertical video of the prompt, the agent typing the code, and the finished
game actually running, ending on make.fun's referral card.

## The video

- **0:00** — the one prompt, typed on screen.
- **0:03** — the agent at work in a terminal, writing the game file by file.
- **0:10** — the finished game running for real: catch the falling snow, score
  climbs, no hand on the keyboard.
- **0:34** — come build on make.fun, then the referral end card.

The video is posted natively on X; its address lives in `POST.json`.

## Run it

The grader runs the program exactly like this:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from the repository root into the output folder
and prints nothing when it succeeds. It needs Node 22 or newer and nothing
else — no network, no extra files, no dependencies.

## Status

The video is rendered and ready to post. `POST.json` still holds a placeholder
address: it is replaced with the real post address as soon as the video is up
on X, before this entry is submitted — a post made outside the bounty window
does not count, so the address only goes in once the post exists.

## Files

- `main.ts` — the program above.
- `POST.json` — the address of the X post carrying the video.
- `LICENSE` — MIT.
