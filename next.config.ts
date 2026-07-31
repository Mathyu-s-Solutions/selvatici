import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `/` has no page of its own: the site lives under /it and /en.
  async redirects() {
    return [{ source: "/", destination: "/it", permanent: false }];
  },
  images: {
    // Photography is imported statically, so only the output formats matter here.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
