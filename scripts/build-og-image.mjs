/**
 * Regenerates public/og.jpg — the card that shows up when the
 * landing is shared on WhatsApp, Facebook, LinkedIn or X.
 *
 *     node scripts/build-og-image.mjs
 *
 * The hero photograph under the same veil the hero uses, with the white
 * wordmark centred. Text is left to og:title / og:description, which every
 * platform renders in its own type — baking it in would only fight them, and
 * the brand face cannot be embedded reliably in an SVG overlay.
 *
 * Uses the sharp that next already depends on.
 */
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const WIDTH = 1200;
const HEIGHT = 630;
const OUT = "public/og.jpg";

const veil = Buffer.from(
  `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <linearGradient id="v" x1="0" y1="0" x2="0" y2="1">
         <stop offset="0%" stop-color="#333333" stop-opacity="0.74"/>
         <stop offset="45%" stop-color="#333333" stop-opacity="0.7"/>
         <stop offset="100%" stop-color="#333333" stop-opacity="0.88"/>
       </linearGradient>
     </defs>
     <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#v)"/>
     <rect x="${(WIDTH - 120) / 2}" y="${HEIGHT / 2 + 88}" width="120" height="3" fill="#ffb067"/>
   </svg>`,
);

const wordmark = await sharp("assets/brand/logo-bianco-trim.png")
  .resize({ width: 560 })
  .toBuffer();
const { height: markHeight } = await sharp(wordmark).metadata();

const photo = await sharp("assets/img/8393.jpg")
  .resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
  .toBuffer();

await sharp(photo)
  .composite([
    { input: veil, top: 0, left: 0 },
    {
      input: wordmark,
      top: Math.round(HEIGHT / 2 - markHeight / 2 - 24),
      left: Math.round((WIDTH - 560) / 2),
    },
  ])
  .jpeg({ quality: 84, progressive: true, mozjpeg: true })
  .toFile(OUT);

const bytes = readFileSync(OUT).length;
writeFileSync(OUT, readFileSync(OUT));
console.log(`${OUT}  ${WIDTH}x${HEIGHT}  ${Math.round(bytes / 1024)}KB`);
