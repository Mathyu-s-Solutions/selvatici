# Handoff: Landing page I Selvatici → Next.js 16 + pnpm

---

## Delivery (implemented)

The site in this repo is the build of the spec below — Next.js 16.2 (App Router,
Turbopack), React 19, TypeScript, Tailwind CSS v4, GSAP, Vercel Analytics, pnpm.
Both locales prerender
as static HTML.

```bash
pnpm install
pnpm dev            # http://localhost:3000 → redirects to /it
pnpm build && pnpm start
pnpm lint
pnpm typecheck
```

### Where things live
| Path | What |
|---|---|
| `app/[lang]/layout.tsx` | root layout: `<html lang>`, fonts, metadata, `generateStaticParams` for `it`/`en` |
| `app/[lang]/page.tsx` | the landing page, composing the sections in order |
| `app/globals.css` | Tailwind v4 `@theme` tokens (palette, fonts, radii) + component classes (`.eyebrow`, `.pill*`, `.agenda-row`, marquee, reveal) |
| `components/*.tsx` | one file per section; only `site-header.tsx`, `page-loader.tsx` and `motion-runtime.tsx` are client components |
| `content/{it,en}.ts` | typed content dictionaries (`content/types.ts`), including agenda events |
| `lib/site-config.ts` | the prototype's props: `accentColor` (writes `--selv-accent`), `reduceMotion`, phone numbers, site URL |
| `lib/{fonts,photos}.ts` | `next/font/local` faces and the static `next/image` imports |
| `lib/use-{reveal,parallax,media-query,prefers-reduced-motion}.ts` | the motion behaviours |
| `components/page-loader.tsx` | the opening veil (GSAP timeline) |
| `assets/` | fonts, logos, monogram, merch mockups and the 24 referenced photographs, copied from `design/` |
| `scripts/build-fonts.py` | regenerates the woff2 subsets from the handoff TTFs |
| `scripts/build-og-image.mjs` | regenerates `public/og.jpg`, the social share card |
| `components/structured-data.tsx` | JSON-LD: LocalBusiness, WebSite, confirmed Events |
| `app/{sitemap,robots}.ts` | sitemap with hreflang alternates, robots.txt |

`design/` is kept untouched as the reference. The `it → en` toggle is a link to
the same page in the other locale — the prototype's text-node swapping is gone.

### Responsive behaviour
Verified with no horizontal overflow and no clipped text at 320 · 360 · 390 · 414
· 480 · 560 · 640 · 768 · 834 · 900 · 1024 · 1099 · 1100 · 1280 · 1440 · 1920 ·
2560 px plus landscape phone (844×390).

| Breakpoint | What changes |
|---|---|
| `< 560px` | the `Prenota` pill moves into the drawer |
| `< 640px` | agenda rows stack; the *Il Progetto* image/pull-quote pair stacks |
| `< 700px` | parallax is off (see below) |
| `< 1100px` | centre nav links + IT/EN collapse into the hamburger drawer |
| `≥ 1100px` | full nav; card grids reflow 1 → 2 → 3 columns via `auto-fit` |

Everything else is fluid by construction: `clamp()` type, `auto-fit` grids and
`clamp()` section rhythm, so there are no other hard breakpoints to maintain.

### SEO
| What | Where |
|---|---|
| Search titles and descriptions, service and place first | `content/{it,en}.ts` → `meta` |
| Canonical + `hreflang` it / en / x-default | `generateMetadata` |
| Open Graph and Twitter large card, 1200×630 | `public/og.jpg` |
| `max-image-preview:large`, `max-snippet:-1` (robots and googlebot) | `generateMetadata` |
| `LocalBusiness` with address, phone, VAT, founders, hours, 4 services | `components/structured-data.tsx` |
| `Event` for the confirmed date only | same |
| `sitemap.xml` with per-URL alternates, `robots.txt` | `app/sitemap.ts`, `app/robots.ts` |
| `theme-color`, icons, `apple-icon` | `viewport`, `app/icon.png` |

#### The canonical origin follows the domain by itself
`siteConfig.url` decides every canonical tag, OG URL, sitemap entry and JSON-LD
id. It resolves at **build** time, in this order:

1. `NEXT_PUBLIC_SITE_URL`, if set — the manual override.
2. `VERCEL_PROJECT_PRODUCTION_URL`. Vercel sets this to "the shortest production
   custom domain, or vercel.app domain if no custom domain is available", even on
   previews. So it is `selvatici.vercel.app` today and **becomes the real domain
   on the first build after one is attached — no code change.**
3. `VERCEL_URL` if system env vars are switched off in the project (logs a
   warning: that URL is per-deployment, so fix the setting).
4. `http://localhost:3000` for local builds.

Not the request host, for two reasons: the pages are prerendered, so there is no
request to read; and every preview deployment would declare itself canonical and
compete with production. Instead previews are shut out — `VERCEL_ENV=preview`
emits `noindex, nofollow` and a `Disallow: /` robots.txt, while their canonical
still points at production.

Verified by building each case: local, production today, preview, a future custom
domain, and the manual override.

Two more things worth knowing:

- **The search titles are not the design's `<title>`.** The prototype used the
  brand line, but nobody searches for a brand that launched this year, so the
  service and the place come first and the name goes last. Both brand lines are
  kept as `meta.brand`. Revert by swapping them if the client prefers.
- Placeholder agenda dates and testimonials stay out of the structured data:
  Google expects Event markup to be true, and inventing a date to win a rich
  result is how structured data gets ignored sitewide. Fill in `startDate` in the
  dictionaries as dates get confirmed and the markup follows.
- LCP: the opening veil delays it by design, which is a ranking signal. If
  Core Web Vitals matter more than the brand beat, cut `MIN_MS` in
  `components/page-loader.tsx` or drop the veil.

### Deliberate deviations from the prototype
- **Grid minimums** are `minmax(min(<n>px,100%),1fr)`: identical layout at every
  real width, but no horizontal clipping below ~340px (the prototype overflowed).
- **Agenda rows** stack into one column below 640px instead of forcing three.
- **Horizontal section padding** is `clamp(18px,4vw,32px)` (`.page-px`) instead of
  a flat 32px: pixel-identical from 800px up, roomier on phones.
- **Parallax is disabled below 700px.** The per-element coefficients (.06–.18)
  are tuned for the two-column composition; once the columns stack, images with
  different coefficients slide into each other. Also cheaper on phones.
- **The drawer animates in and out** (opacity + 14px slide, .38s on the reveal
  easing) with its three rows staggered 70ms apart, and the hamburger's two bars
  rotate into an ×. The prototype toggled `display` with no transition. It stays
  mounted and is hidden with `visibility`, which animates both directions and
  keeps the links out of the tab order and the a11y tree while closed.
- **Drawer links respond to hover**: olive (`#83883e`, the site's link-hover
  colour) plus the 6px slide the contact cards already use. The top nav links
  keep the prototype's `color: inherit` with no hover, because that bar changes
  between paper and ink as you scroll — say the word and they can match.
  Both drawer transitions and the × morph respect `prefers-reduced-motion`;
  hover feedback stays on, as it does for the agenda rows and contact cards.
- **Nav logo** crossfades between the white and full-colour wordmarks instead of
  swapping `src`, so there is no mid-scroll fetch or reflow.
- **Reveals** start hidden from CSS gated on `@media (scripting: enabled)`, so
  nothing flashes in and the page stays readable without JS. This replaced a
  class added by an inline script: React owns the class list on <html> and
  rewrote it when the IT/EN toggle remounted the layout, which left every reveal
  stuck visible for the rest of the session.
- **The nav collapses at 1100px, not the specified 1000px.** Between 1000 and
  1079px the five Italian labels need ~40px more than the bar has, so
  "Personal Chef" broke onto a second line. Below 1100px you get the drawer,
  which is a designed state; the labels also carry `white-space: nowrap`.
- **An opening loader** covers the first paint: the wordmark, a hairline with a
  peach fill, and the localised eyebrow, on paper so it dissolves into the page.
  Not in the handoff — requested separately. Its markup is server-rendered and
  shown by CSS, so it appears without waiting for any bundle; GSAP only drives
  the fill and the exit. It holds for at least 450ms, waits for
  `document.fonts.ready` and the hero image, and gives up after 2s. A CSS
  keyframe lifts it at 2.5s even if the JS never arrives — that is the real
  ceiling, since the veil cannot lift before its own bundle lands.
  `prefers-reduced-motion` skips it entirely. Measured, cache cold: gone at
  ~1.5s unthrottled, ~3.7s on 1.6Mbps, ~4.0s on 700kbps (the extra is
  time-to-first-paint, which no loader controls). It does delay LCP by design.
- **Montserrat ships as subset woff2, not the handoff's TTFs.** 1357KB → 247KB
  (a 5.5× cut) by converting to woff2 and dropping Cyrillic, Vietnamese and IPA,
  which an Italian/English site never renders. The `wght` 100–900 axis is intact
  — verified in the browser: weights 100/400/700/900 still measure four distinct
  widths. Ranges are whole Unicode blocks, not just today's glyphs, so the copy
  can be edited freely; all 90 characters the built pages paint were checked
  against the result, including → × — ’ … © €. Rerun `scripts/build-fonts.py`
  after changing the ranges. This is what makes the loader viable on slow
  connections: 1.4MB of fonts alone is ~16s of a 700kbps link.
- `app/icon.png` / `app/apple-icon.png` are generated from the monogram.

---

## Overview
Single-page marketing landing for **I Selvatici** (Castelgrande, Basilicata, Italy, founded 2026):
playful/recreational workshops (cooking, garden therapy, sewing) + a personal chef service +
a community network project called *Il Cammino dei Selvatici*.
Primary conversions: sign up to a workshop, request a personal-chef quote, WhatsApp, phone call.
Site is **Italian first** with an **IT / EN** language toggle.

## About the design files
`design/Landing I Selvatici.dc.html` is a **design reference**, not production code.
It is a streaming-HTML prototype (custom `<x-dc>` runtime, all styling inline) that shows the
intended look, copy and behavior. **Do not port it verbatim.** Recreate it in Next.js 16 with the
project's own conventions. Open it in a browser (it needs `support.js`, `assets/` and `img/`
next to it — all included) to see the real thing.

## Fidelity
**High-fidelity.** Colors, type, spacing, copy and motion are final. Recreate pixel-faithfully.

## Target stack (requested)
- Next.js 16, App Router, TypeScript, **pnpm**
- Tailwind CSS v4 recommended (map the tokens below into `@theme`), or CSS Modules
- `next/font/local` for both fonts, `next/image` for all photography
- No CMS required; content can live in a typed `content/{it,en}.ts` dictionary (see i18n)

Suggested route/file shape:
```
app/[lang]/page.tsx            # lang = 'it' | 'en', default 'it'
app/[lang]/layout.tsx          # fonts, <html lang>, metadata
components/site-header.tsx     # fixed nav + mobile drawer
components/hero.tsx
components/manifesto.tsx
components/progetto.tsx
components/chi-siamo.tsx
components/laboratori.tsx
components/personal-chef.tsx
components/cammino.tsx
components/agenda.tsx
components/gallery-marquee.tsx
components/testimonianze.tsx
components/merch.tsx
components/contatti.tsx
lib/use-reveal.ts  lib/use-parallax.ts
content/it.ts  content/en.ts
```

---

## Design tokens

### Colors (from the official brand book, `Brand_Selvatici_2026.pdf`)
| Token | Hex | Brand name | Use |
|---|---|---|---|
| `accent` / peach | `#ffb067` | Pesca (primary) | CTAs, accents, hero eyebrow dot, WhatsApp card |
| `sage` | `#8e9f93` | Petrolio (primary) | tinted section backgrounds (used at 16–20% alpha) |
| `olive` | `#83883e` | Verde oliva (primary) | footer/contact background, emphasis text |
| `yellow` | `#f8ce79` | Giallino (secondary) | gallery band bg (28% alpha), labels on dark |
| `brown` | `#a56900` | Marrone (secondary) | eyebrow/kicker text, default link color |
| `ink` | `#333333` | Scala di grigi | body text, dark sections |
| `paper` | `#FBF6EC` | — (derived warm off-white) | page background, text on dark |

Alpha values actually used: `rgba(51,51,51,.82/.85/.78/.7/.66/.6/.16/.14/.12)`,
`rgba(251,246,236,.94/.92/.9/.86/.84/.82/.78/.72/.7/.66/.55/.5/.45/.4/.3/.28/.14/.08)`,
`rgba(142,159,147,.16/.18/.2)`, `rgba(248,206,121,.22/.28)`.

Accent is injected as a CSS custom property `--selv-accent` (default `#ffb067`) and consumed as
`var(--selv-accent, #ffb067)`. Keep that indirection — it is a brand-level theming hook.

### Typography
- **Display — "Seatren"**, weight 700 only (regular + italic). Brand rule: *titles and distinctive
  communication only*. Files: `assets/Seatren.woff2`, `assets/Seatren-Italic.woff2`.
- **Text — "Montserrat"** variable (100–900) + italic variable. Files: `assets/Montserrat.ttf`,
  `assets/Montserrat-Italic.ttf` (convert to woff2 for production).
- Fallback stack: `system-ui, sans-serif`. `-webkit-font-smoothing: antialiased`.

Scale as used (all fluid, `clamp()`):
| Role | Value | Family |
|---|---|---|
| Hero h1 | `clamp(46px,10.5vw,158px)` / lh .94 / ls -.01em | Seatren 700 |
| Section h2 (large) | `clamp(38px,6vw,104px)` / lh 1.02 | Seatren 700 |
| Section h2 (default) | `clamp(34px,4.6vw,76px)` / lh 1.03 | Seatren 700 |
| Card h3 | `32px` / lh 1.1 | Seatren 700 |
| Big numbers / stats | `34px`–`44px` | Seatren 700 |
| Contact phone numbers | `clamp(22px,2.4vw,30px)` | Seatren 700 |
| Lead paragraph | `clamp(17px,1.7vw,24px)` / lh 1.5 | Montserrat 400 |
| Body | `18px` / lh 1.75 | Montserrat 400 |
| Small body | `15–16px` / lh 1.7 | Montserrat 400 |
| Eyebrow / kicker | `12px` / 700 / ls .2em / uppercase | Montserrat |
| Button label | `13px` / 700 / ls .1em / uppercase | Montserrat |
| Nav link | `12px` / 600 / ls .1em / uppercase | Montserrat |
| Hero meta row | `clamp(10px,1vw,12px)` / 600 / ls .16em / uppercase | Montserrat |
| Hero eyebrow | `clamp(10px,1.1vw,12px)` / 700 / ls .24em / uppercase | Montserrat |

Long-form paragraphs and balanced headings use `text-wrap: pretty` / `text-wrap: balance`.

### Spacing, radii, motion
- Section vertical rhythm: `clamp(70px,9vw,130px)` … `clamp(100px,13vw,190px)` top/bottom.
- Horizontal page padding: `clamp(18px,4vw,40px)`; content max-widths `1180px` / `1280px`, centered.
- Grid gutters: `18–28px` for card grids, `clamp(40px,6vw,90px)` for two-column splits.
- Radii: `4px` on cards/images, `999px` on buttons/pills/inputs. **No shadows anywhere** except the
  hero logo drop-shadow that was removed — the design is flat by intent.
- Reveal animation: `opacity 0→1`, `translateY(26px)→0`, `.9s cubic-bezier(.22,.61,.36,1)`,
  stagger `(index % 4) * 70ms`, triggered by IntersectionObserver
  (`rootMargin: "0px 0px -12% 0px"`, `threshold: .08`), unobserved after firing.
- Parallax: `translate3d(0, -mid * k, 0)` where `mid = rect.top + rect.height/2 - vh/2`,
  rAF-throttled on scroll. `k` per element: hero `.18`, cammino bg `.16`, chef images `.10`/`.17`,
  progetto images `.07`/`.13`, chi-siamo `.06`. Parallax wrappers are inset `-12%`/`-14%` vertically
  so the image never reveals an edge.
- Gallery marquee: two rows, `translate3d(0,0,0) → translate3d(-50%,0,0)` linear infinite,
  **70s** row 1 and reversed **85s** row 2; each row's images are duplicated once so `-50%` loops
  seamlessly.
- Nav scroll state transition: `.4s ease` on background/border/padding.
- `prefers-reduced-motion: reduce` (or the `reduceMotion` prop) disables reveals, parallax and
  marquees entirely — implement this.

---

## Screens / sections (top to bottom)

### 1. Fixed header
- `position: fixed`, full width, `z-index 60`, `padding: 16px clamp(18px,3vw,40px)`.
- Transparent over the hero: `background rgba(251,246,236,0)`, transparent bottom border,
  white (`#FBF6EC`) content, white logo (`assets/logo-bianco-trim.png`).
- After `scrollY > 80`: `background rgba(251,246,236,.94)`, `backdrop-filter: blur(14px)`,
  `border-bottom: 1px solid rgba(51,51,51,.12)`, vertical padding `16px → 10px`, content turns
  `#333333`, logo swaps to `assets/logo-completo-trim.png`.
- Left: logo `width: clamp(118px,13vw,158px)` linking to `#top`.
- Center: 5 uppercase links → `#progetto #laboratori #chef #cammino #agenda`
  (Il Progetto · Laboratori · Personal Chef · Il Cammino · Appuntamenti).
- Right: `IT / EN` toggle (active 100% opacity, inactive 45%), peach pill CTA **Prenota** → `#contatti`.
- Responsive (JS-driven in the prototype — use media queries in Next):
  - `< 1000px`: center links + IT/EN hidden, hamburger button shown (46×46 pill,
    two 20×2px bars, bg `rgba(251,246,236,.14)` → `rgba(51,51,51,.08)` when solid).
  - `< 560px`: the Prenota pill hides (it lives in the drawer instead).
- **Mobile drawer**: full-screen `#FBF6EC` panel, `z-index 80`, `max-height:100dvh`,
  `overflow-y:auto`, `padding 20px clamp(18px,5vw,40px) 28px`, three stacked rows
  (logo + × close · Seatren link list `clamp(26px,5.4vh,46px)` · peach Prenota + IT/EN row).
  Opening locks `body` scroll; any link click closes it; resizing above 1000px closes it.
  Nav height when solid ≈ 62px — keep the hero's top padding clear of it.

### 2. Hero (`#top`)
- `min-height: 100svh`, dark `#333333` base, `overflow: hidden`, flex column.
- Background: `img/8393.jpg` (kids kneading), `object-fit: cover`, `object-position: 60% 42%`,
  inside a parallax wrapper inset `-12%` top/bottom, `k = .18`.
- Two overlays: vertical gradient
  `rgba(51,51,51,.74) 0% → .34 34% → .52 62% → .9 100%`, plus a radial
  `120% 70% at 8% 88%`, `rgba(51,51,51,.6) → transparent 62%`.
- Content block, bottom-aligned, `max-width 1280px`, padding
  `clamp(110px,16vh,190px) clamp(18px,4vw,40px) clamp(26px,4vh,44px)`:
  1. Eyebrow row: 8px peach dot + `CASTELGRANDE — BASILICATA — DAL 2026`.
  2. `<h1>` Seatren, two lines via `<br>`: **"Esperienze / di comunità"**.
  3. Lead paragraph (max 640px): *"Laboratori di cucina, orto terapia e cucito, e un servizio di
     personal chef."* + italic peach *"Un invito a rallentare."*
  4. Two pills: peach **Scopri i laboratori** → `#laboratori`; outlined
     (`1px rgba(251,246,236,.55)`) **Personal chef** → `#chef`.
- Bottom bar: `border-top: 1px solid rgba(251,246,236,.28)`, three uppercase claims left
  (Laboratori per tutte le età · Personal chef in tutta Italia · Il Cammino dei Selvatici) and a
  **Scorri** link right with a 1×26px peach rule bobbing `selvBob 2.4s ease-in-out infinite`
  (`translateY(0 → -10px → 0)`).

### 3. Manifesto (paper bg)
Eyebrow *Il nostro perché*; `<h2>` "Ricostruire il legame tra **persone, terra e cibo.**"
(second half in olive `#83883e`), `clamp(38px,5.6vw,96px)`; then a
`repeat(auto-fit,minmax(260px,1fr))` grid of three 18px paragraphs, gap 40px, margin-top 56px.

### 4. Il Progetto (`#progetto`, bg `rgba(142,159,147,.16)`)
Two-column `auto-fit minmax(320px,1fr)`. Left: eyebrow, h2 "Saperi manuali, stagionalità,
comunità", two body paragraphs, then a stat row (`auto-fit minmax(140px,1fr)`, top border
`rgba(51,51,51,.14)`, 36px padding-top): **2026** / **3** / **Tutta Italia** in Seatren 34px olive
with 13px captions. Right: `img/8501.jpg` (parallax .07) then a 1:1 grid of
`img/8420.jpg` (parallax .13) and a 15px italic pull-quote.

### 5. Chi siamo (`#chisiamo`, paper)
Two columns: `img/8289.jpg` (the two founders in the kitchen, parallax .06) and text —
eyebrow *Chi siamo*, h2 "Due radici, una cucina", one paragraph, then a founders row above a
`rgba(51,51,51,.14)` top border: **Valentina Di Carlo** — Fondatrice · **Lorenzo Staderini** —
Fondatore & chef (names in Seatren 26px, roles 13px uppercase 60% ink).

### 6. Laboratori (`#laboratori`, bg `#333333`, text paper)
Header row: eyebrow in peach, h2 "Ludico-ricreativi, per tutte le età"
`clamp(36px,5vw,84px)`, plus a 360px 16px paragraph on the right.
Three cards, `auto-fit minmax(290px,1fr)`, gap 28px, radius 4px:
1. **01 — Cucina / "Impastare insieme"** — paper card, photo `img/8358.jpg` on top
   (`height:230px; object-fit:cover`), 30/28/34px padding, body 16px, link *Iscriviti →*.
2. **02 — Orto terapia / "Le mani nella terra"** — olive `#83883e` panel, `min-height:420px`,
   content bottom-aligned, label + link in yellow `#f8ce79`; decorative
   `assets/icona-bianca.png` 300px at `top:-40px; right:-70px; opacity:.13`.
3. **03 — Cucito / "Filo e pazienza"** — peach panel, ink text, decorative `assets/icona.png`
   same placement at `opacity:.28`.
*(Cards 2 and 3 are colour panels because no garden/sewing photography exists yet — swap in
photos when the client supplies them.)*

### 7. Personal Chef (`#chef`, paper)
Two columns. Left: eyebrow, h2 "La vostra tavola, *il nostro racconto*" (italic half in olive),
two 18px paragraphs, then ink pill **Richiedi un preventivo** → `#contatti` and outlined pill
**Scrivici su WhatsApp** → `https://wa.me/393477930530`.
Right: 1:1 grid, `align-items:end`, `img/8614.jpg` (parallax .10) and `img/8487.jpg` (parallax .17).

### 8. Il Cammino (`#cammino`, full-bleed dark)
Background `img/8670.jpg` (whole group) with parallax .16 and a gradient overlay
`rgba(51,51,51,.86) → .72 50% → .9 100%`. Padding `clamp(100px,13vw,190px)`.
Eyebrow peach *Il Cammino dei Selvatici*; h2 "Una rete di orti, cucine e comunità"
`clamp(38px,6vw,104px)`, max-width 900px; 19px paragraph max-width 640px;
then three columns (`auto-fit minmax(230px,1fr)`, gap 36px) above a
`rgba(251,246,236,.28)` top border: **Orti / Cucine / Comunità** in Seatren 44px peach + 16px copy.

### 9. Prossimi appuntamenti (`#agenda`, paper)
Header: h2 "Prossimi appuntamenti" + a 14px note right.
Three rows, each `grid-template-columns: minmax(150px,220px) 1fr auto`, gap 24px,
padding `26px 4px`, `border-bottom: 1px solid rgba(51,51,51,.16)`.
Row = date (13px uppercase brown) · title (Seatren `clamp(22px,2.4vw,34px)`) + 15px subtitle · CTA.
Hover: `padding-left 4px → 16px` (`.3s ease`) and `background: rgba(248,206,121,.22)`.
Content: *Dom 22 febbraio 2026 — Corso di cucina* (Iscriviti) · *Data da definire — Orto terapia,
primavera* (Lista d'attesa) · *Su richiesta — Cena a domicilio, personal chef* (Preventivo).
**These dates are placeholders except the first — wire this section to real data.**

### 10. Galleria (bg `rgba(248,206,121,.28)`)
Eyebrow *Galleria*, then two marquee rows.
Row 1 (height `clamp(180px,22vw,300px)`, 70s): 8562, 8572, 8592, 8544, 8506, 8663, 8485, 8641 — duplicated.
Row 2 (height `clamp(140px,17vw,230px)`, 85s, reversed): 8347, 8368, 8435, 8439, 8516, 8580, 8603, 8321 — duplicated.
Gap 18px, radius 3px, `width:max-content`.

### 11. Testimonianze (paper)
Eyebrow *Dicono di noi* + three `<blockquote>` cards (`auto-fit minmax(270px,1fr)`, gap 28px,
padding `34px 30px`, bg `rgba(142,159,147,.18)`, radius 4px): 23px Seatren quote + 13px uppercase
attribution at 60% ink. **All three quotes are placeholder copy — replace with real ones.**

### 12. Merch / identità (bg `rgba(142,159,147,.2)`)
h2 "Porta a casa i Selvatici" + 380px note. Three paper cards (`auto-fit minmax(260px,1fr)`,
gap 24px): `assets/mock-tote.jpg`, `assets/mock-jacket.png`, `assets/mock-bag.jpg`, each
`height:300px; object-fit:cover` with a 14px uppercase caption in `22px 24px` padding.

### 13. Contatti (`#contatti`, bg olive `#83883e`, text paper)
Two columns `auto-fit minmax(300px,1fr)`, gap `clamp(40px,6vw,90px)`.
Left: h2 "Scriviamoci" `clamp(38px,5.4vw,92px)`, 18px paragraph (max 480px), then **two action
cards** (max-width 520px, gap 14px, radius 4px, `padding 24px 26px`,
`display:flex; justify-content:space-between; align-items:center`):
- **WhatsApp** — peach background, ink text, 11px uppercase label at 62% ink,
  `+39 347 793 0530` in Seatren `clamp(22px,2.4vw,30px)`, 26px `→` glyph,
  href `https://wa.me/393477930530`.
- **Chiamaci** — transparent with `1px rgba(251,246,236,.45)` border, label in yellow `#f8ce79`,
  `+39 347 155 1887`, href `tel:+393471551887`; hover background `rgba(251,246,236,.1)`.
Both hover `transform: translateX(6px)` (`.3s ease`). Below: 14px note
"Lun—Sab, 9:00—19:00. Per gruppi e scuole meglio il telefono." *(placeholder hours)*.
There is deliberately **no email form / newsletter** — WhatsApp and phone only.
Right: info grid (`auto-fit minmax(180px,1fr)`, gap 36px), yellow 12px uppercase labels + 16px
values: **Sede operativa** Via Marconi, 21 · 85050 Castelgrande (PZ) · Basilicata, Italia ·
**Dove operiamo** Basilicata e tutto il territorio nazionale, su richiesta ·
**Amministrazione** P.IVA 02208410767.
Footer strip: `border-top: 1px solid rgba(251,246,236,.3)`, `padding: 34px 0`, white logo 210px
left, "esperienze di comunità — © 2026 I Selvatici" right (13px uppercase, 70% paper).

---

## Interactions & behavior
1. **Anchor navigation** — `html { scroll-behavior: smooth }` + `#id` targets. In Next, keep
   `scroll-behavior` and add `scroll-margin-top` ≈ 80px to each section so the fixed nav
   doesn't cover headings.
2. **Nav scroll state** — boolean at `scrollY > 80`; see §1 for both states. Throttle with rAF.
3. **Mobile drawer** — open/close, body scroll lock, auto-close on link click and on resize ≥1000px.
4. **Reveal on scroll** — see tokens. Elements marked `data-reveal` in the prototype.
5. **Parallax** — see tokens; per-element `k` values listed per section.
6. **Agenda row hover** and **contact card hover** — see the relevant sections.
7. **Language toggle** — the prototype swaps text nodes in place through an it→en dictionary.
   **Do not port that hack.** In Next.js use `app/[lang]` with typed dictionaries; the toggle is a
   link to the same page in the other locale. Every Italian string in the prototype has an English
   counterpart in the `dict` object inside the design file's logic class — lift them from there
   (~90 entries; `phDict` is dead code, ignore it).
8. **Reduced motion** — honor `prefers-reduced-motion` and the `reduceMotion` flag.

## State management
Trivial: `navSolid: boolean`, `drawerOpen: boolean`, locale from the route. No data fetching in
the design. If the agenda becomes dynamic, model an event as
`{ id, dateLabel, title, subtitle, ctaLabel, href, status: 'open' | 'waitlist' | 'onRequest' }`.

## Props exposed by the prototype (worth keeping as config)
| Prop | Type | Default | Meaning |
|---|---|---|---|
| `accentColor` | string (hex) | `#ffb067` | writes `--selv-accent`; options `#ffb067 #f8ce79 #83883e #a56900` |
| `language` | `'it' | 'en'` | `it` | initial locale |
| `reduceMotion` | boolean | `false` | force-disable all motion |

## Assets (all included in this bundle)
- `assets/Seatren.woff2`, `assets/Seatren-Italic.woff2` — brand display font (licensed; bold only).
- `assets/Montserrat.ttf`, `assets/Montserrat-Italic.ttf` — variable text font (OFL).
  Original licence files are in `uploads/FONT/Montserrat/` in the source project.
- `assets/logo-bianco-trim.png` (white outline wordmark, for dark backgrounds),
  `assets/logo-completo-trim.png` (full colour wordmark). **Trimmed versions** — the original
  exports had ~50% empty canvas; use these, or better, ask the client for SVG/EPS.
- `assets/icona.png`, `assets/icona-bianca.png` — the "S" monogram, used as decorative watermarks.
- `assets/mock-tote.jpg`, `assets/mock-jacket.png`, `assets/mock-bag.jpg` — merch mockups.
- `img/*.jpg` — 52 photographs from the client's shoot (kids' cooking workshop in Castelgrande),
  resized to 1600px wide, JPEG q82. Originals (6000×4000, ~9MB each) live in the client's
  "FOTO EDITATE" folder. Only these are referenced: 8393 (hero), 8501, 8420, 8289, 8358, 8614,
  8487, 8670, and the 16 gallery images listed in §10 — the rest are spares.
  In Next.js run them through `next/image` with `sizes` and let it emit AVIF/WebP.

## Content gaps to close with the client
- Real testimonials (§11) — current three are placeholders.
- Real agenda dates (§9) beyond 22 Feb 2026.
- Real opening hours (§13).
- Photography for **orto terapia** and **cucito** (§6) — none exists in the shoot.
- Email address and Instagram handle — not supplied, so not in the design.

## Files in this bundle
- `design/Landing I Selvatici.dc.html` — the design reference (open in a browser).
- `design/support.js` — runtime needed by that HTML file. Not part of the deliverable.
- `design/assets/`, `design/img/` — fonts, logos, mockups, photography.
- `design/Brand_Selvatici_2026.pdf` — the official brand book (palette, typography rules, logo use).
