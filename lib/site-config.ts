/**
 * Brand-level configuration. Mirrors the props the design prototype exposed:
 * `accentColor`, `language` (see `defaultLocale` in lib/i18n.ts) and `reduceMotion`.
 */
export const siteConfig = {
  /**
   * Written to the `--selv-accent` custom property on <html>.
   * Brand options: #ffb067 (Pesca) · #f8ce79 (Giallino) · #83883e (Verde oliva) · #a56900 (Marrone).
   */
  accentColor: "#ffb067",

  /** Force-disables reveals, parallax and marquees for every visitor. */
  reduceMotion: false,

  contact: {
    whatsapp: {
      display: "+39 347 793 0530",
      href: "https://wa.me/393477930530",
    },
    phone: {
      display: "+39 347 155 1887",
      href: "tel:+393471551887",
    },
  },

  /** Used as `metadataBase`; override per environment. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://iselvatici.it",
} as const;
