# Agent instructions - Art 'O' Gems Next.js port

This project is a **faithful port** of `art-o-gems-website.html` (in the project
root) into Next.js. It is not a redesign. These rules apply to every task in
this repo, not just the initial build.

## Non-negotiables

- **Pixel-for-pixel visual parity** with `art-o-gems-website.html`. Do not
  change layout, spacing, colors, typography, copy, or animation timing
  unless explicitly asked to.
- **No new images.** The source site has zero raster images: every painting,
  gemstone, and pearl is procedurally generated inline SVG from seeded random
  functions (`painting()`, `stone()`, `pearl()`, `portrait()` + a seeded
  `rng(seed)` in the original `<script>`). Port these functions faithfully;
  never substitute stock photos, placeholders, or `next/image` assets for
  them, and never change a seed (it changes the generated art).
- **Deterministic SSR.** The SVG generators must stay seeded/deterministic so
  server-rendered and client-rendered markup match exactly. Never introduce
  `Math.random()` or `Date.now()` into them.
- **Real routes only.** The original uses `#/route` hash navigation with a
  `PAGES` lookup table; always convert these to real Next.js App Router
  routes and `<Link>` navigation. Never reintroduce hash-based routing or
  manual `innerHTML` rendering.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS, **no `src/` directory**
  (`app/`, `components/`, `lib/` at project root)
- No UI component libraries: this is a fully custom design system
- Use the dependency versions already installed by `create-next-app`; only
  add packages when genuinely needed, at their latest stable version

## Data & content

- All copy (lot descriptions, provenance, condition reports, team bios,
  exhibition text, form confirmation messages, etc.) must match the source
  HTML verbatim: do not shorten, paraphrase, or "clean up" wording.
- Keep the data arrays (`LOTS`, `SALES`, `RESULTS`, `TEAM`, `EXHIBITIONS`,
  `NAV`) in typed files under `lib/`, not inline in components.

## Before finishing any task

- `npm run build` must pass with no type errors.
- No console hydration warnings.
- No leftover vanilla-JS artifacts (`location.hash` parsing, manual DOM
  `innerHTML` writes, `#/...` links).

If a requested change conflicts with parity to the source HTML, flag the
conflict instead of silently choosing a design direction.