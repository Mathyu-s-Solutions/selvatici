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

  /**
   * Canonical origin for every canonical tag, OG URL, sitemap entry and
   * JSON-LD id. Resolved at build time — the pages are prerendered, so there is
   * no request to read a host from, and deriving it from the request host would
   * make each preview deployment declare itself canonical.
   */
  url: resolveSiteUrl(),
} as const;

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    const withScheme = /^https?:\/\//.test(explicit)
      ? explicit
      : `https://${explicit}`;
    return withScheme.replace(/\/+$/, "");
  }

  /**
   * Vercel: "We select the shortest production custom domain, or vercel.app
   * domain if no custom domain is available", and it is set even on previews.
   * So this is `selvatici.vercel.app` today and becomes the real domain by
   * itself the day one is attached — no code change, no redeploy trigger
   * beyond the next build. Not VERCEL_URL, which changes every deployment.
   */
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;

  // On Vercel without that variable, "Enable access to System Environment
  // Variables" is off in the project settings. Fall back to the deployment host
  // rather than publishing canonical tags that point at localhost — this URL is
  // per-deployment, so it is a stopgap, not a resting place.
  if (process.env.VERCEL && process.env.VERCEL_URL) {
    console.warn(
      "[site-config] VERCEL_PROJECT_PRODUCTION_URL is missing: enable access to " +
        "System Environment Variables in the Vercel project, or set " +
        "NEXT_PUBLIC_SITE_URL. Falling back to the per-deployment host.",
    );
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

/**
 * Preview and development deployments must never be indexed: they would compete
 * with production for the same content. Anything outside Vercel (local builds,
 * self-hosting) is treated as the real site.
 */
export const isIndexable =
  process.env.VERCEL_ENV !== "preview" &&
  process.env.VERCEL_ENV !== "development";
