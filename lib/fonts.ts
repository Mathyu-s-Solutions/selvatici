import localFont from "next/font/local";

/**
 * Brand display face. Bold only, per the brand book: titles and distinctive
 * communication — never body copy.
 */
export const seatren = localFont({
  src: [
    { path: "../assets/fonts/Seatren.woff2", weight: "700", style: "normal" },
    { path: "../assets/fonts/Seatren-Italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-seatren",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

/**
 * Text face, variable 100–900. Converted from the handoff's TTFs to woff2 and
 * subset to Latin plus the punctuation, arrows and symbols the site uses —
 * 1357KB → 247KB. See the fonts note in the README before editing the ranges.
 */
export const montserrat = localFont({
  src: [
    { path: "../assets/fonts/Montserrat.woff2", weight: "100 900", style: "normal" },
    { path: "../assets/fonts/Montserrat-Italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
