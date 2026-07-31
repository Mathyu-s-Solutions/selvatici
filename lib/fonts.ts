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

/** Text face, variable 100–900. */
export const montserrat = localFont({
  src: [
    { path: "../assets/fonts/Montserrat.ttf", weight: "100 900", style: "normal" },
    { path: "../assets/fonts/Montserrat-Italic.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
