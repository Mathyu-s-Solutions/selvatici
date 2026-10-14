/**
 * Regenerates the share cards — what shows up when a page is sent on WhatsApp,
 * Facebook, LinkedIn or X:
 *
 *     public/og.jpg                  the landing
 *     public/og/<lang>/<slug>.jpg    one per workshop page and language
 *
 *     node scripts/build-og-image.mjs
 *
 * Rerun it, and commit the result, after changing a workshop's `name` or card
 * title in content/ — the copy on the cards is read from those dictionaries.
 *
 * The landing card is the hero photograph under the hero's veil with the white
 * wordmark centred, and no copy: og:title and og:description sit right next to
 * it. A workshop card does carry its name and title, because that is what tells
 * it apart from the landing's. They are drawn as outlines taken from the font
 * files, not as SVG text: an SVG overlay renders in whatever face the machine
 * running this happens to have, never in the brand's.
 *
 * JPEG rather than the PNG `next/og` would produce: WhatsApp drops previews
 * that weigh too much, and a photograph as PNG is over a megabyte.
 */
import { mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname } from "node:path";
import * as fontkit from "fontkit";
import sharp from "sharp";
import ts from "typescript";

const WIDTH = 1200;
const HEIGHT = 630;
/** Keeps the copy clear of the edges some apps crop to a squarer preview. */
const PAD = 72;

const INK = "#333333";
const PAPER = "#fbf6ec";
const ACCENT = "#ffb067";
const YELLOW = "#f8ce79";

const seatren = fontkit.openSync("assets/fonts/Seatren.woff2");
// From the handoff TTF: fontkit cannot instantiate a weight out of a woff2.
const montserratBold = fontkit
  .openSync("design/assets/Montserrat.ttf")
  .getVariation({ wght: 700 });

/**
 * The same photographs as the cards and pages (lib/photos.ts). `top` is where
 * the 630px band starts on the photo scaled to 1200 wide, chosen per picture so
 * the crop keeps what matters — the faces, the trowel, the group in chef hats.
 * `name` is the colour of the kicker, as on the workshop's card. `shade` darkens
 * a bright photograph evenly before the veil, so the white wordmark holds.
 */
const themes = {
  cucina: { photo: "assets/img/8358.jpg", top: 40, name: ACCENT, shade: 0 },
  orticoltura: { photo: "assets/img/orticoltura-web.webp", top: 70, name: YELLOW, shade: 0 },
  aziende: { photo: "assets/img/aziende-web.webp", top: 90, name: ACCENT, shade: 0.3 },
};

/** The dictionaries are TypeScript: transpile them in memory and import that. */
async function loadDictionary(locale) {
  const source = readFileSync(`content/${locale}.ts`, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  const encoded = Buffer.from(outputText).toString("base64");
  const dictionary = await import(`data:text/javascript;base64,${encoded}`);
  return dictionary[locale];
}

/** A line of text as one SVG path, its baseline on y = 0. */
function outline(font, text, size, tracking = 0) {
  const scale = size / font.unitsPerEm;
  const run = font.layout(text);
  let x = 0;
  const paths = run.glyphs.map((glyph, index) => {
    const position = run.positions[index];
    const path = glyph.path
      .scale(scale, -scale)
      .translate(x + position.xOffset * scale, -position.yOffset * scale)
      .toSVG();
    x += position.xAdvance * scale + tracking;
    return path;
  });
  return { d: paths.join(" "), width: x - tracking };
}

/** The largest size, up to `max`, at which the line fits `maxWidth`. */
function fitted(font, text, max, maxWidth) {
  const { width } = outline(font, text, max);
  const size = Math.min(max, Math.floor((max * maxWidth) / width));
  return { size, ...outline(font, text, size) };
}

function wordmark(width) {
  return sharp("assets/brand/logo-bianco-trim.png").resize({ width }).toBuffer();
}

async function write(image, out) {
  mkdirSync(dirname(out), { recursive: true });
  await image.jpeg({ quality: 84, progressive: true, mozjpeg: true }).toFile(out);
  console.log(`${out}  ${WIDTH}x${HEIGHT}  ${Math.round(statSync(out).size / 1024)}KB`);
}

async function buildLanding() {
  const veil = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <linearGradient id="v" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stop-color="${INK}" stop-opacity="0.74"/>
           <stop offset="45%" stop-color="${INK}" stop-opacity="0.7"/>
           <stop offset="100%" stop-color="${INK}" stop-opacity="0.88"/>
         </linearGradient>
       </defs>
       <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#v)"/>
       <rect x="${(WIDTH - 120) / 2}" y="${HEIGHT / 2 + 88}" width="120" height="3" fill="${ACCENT}"/>
     </svg>`,
  );

  const mark = await wordmark(560);
  const { height: markHeight } = await sharp(mark).metadata();

  const photo = await sharp("assets/img/8393.jpg")
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
    .toBuffer();

  await write(
    sharp(photo).composite([
      { input: veil, top: 0, left: 0 },
      {
        input: mark,
        top: Math.round(HEIGHT / 2 - markHeight / 2 - 24),
        left: Math.round((WIDTH - 560) / 2),
      },
    ]),
    "public/og.jpg",
  );
}

async function buildWorkshop(locale, slug, { name, title }) {
  const theme = themes[slug];

  const photo = await sharp(theme.photo)
    .resize({ width: WIDTH })
    .extract({ left: 0, top: theme.top, width: WIDTH, height: HEIGHT })
    .toBuffer();

  // Heavier towards the bottom left, where the copy sits.
  const veil = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <linearGradient id="down" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stop-color="${INK}" stop-opacity="0.62"/>
           <stop offset="40%" stop-color="${INK}" stop-opacity="0.38"/>
           <stop offset="100%" stop-color="${INK}" stop-opacity="0.9"/>
         </linearGradient>
         <linearGradient id="across" x1="0" y1="0" x2="1" y2="0">
           <stop offset="0%" stop-color="${INK}" stop-opacity="0.5"/>
           <stop offset="70%" stop-color="${INK}" stop-opacity="0"/>
         </linearGradient>
       </defs>
       <rect width="${WIDTH}" height="${HEIGHT}" fill="${INK}" fill-opacity="${theme.shade}"/>
       <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#down)"/>
       <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#across)"/>
     </svg>`,
  );

  const heading = fitted(seatren, title, 100, WIDTH - PAD * 2);
  const titleBaseline = HEIGHT - PAD - 6;
  const label = outline(montserratBold, name.toUpperCase(), 23, 23 * 0.2);
  const labelBaseline = titleBaseline - heading.size * 0.78 - 34;
  const copy = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
       <path transform="translate(${PAD} ${labelBaseline})" d="${label.d}" fill="${theme.name}"/>
       <path transform="translate(${PAD} ${titleBaseline})" d="${heading.d}" fill="${PAPER}"/>
     </svg>`,
  );

  await write(
    sharp(photo).composite([
      { input: veil, top: 0, left: 0 },
      { input: await wordmark(230), top: PAD - 14, left: PAD },
      { input: copy, top: 0, left: 0 },
    ]),
    `public/og/${locale}/${slug}.jpg`,
  );
}

await buildLanding();
for (const locale of ["it", "en"]) {
  const { laboratori } = await loadDictionary(locale);
  for (const slug of Object.keys(themes)) {
    await buildWorkshop(locale, slug, {
      name: laboratori.details[slug].name,
      title: laboratori.cards[slug].title,
    });
  }
}
