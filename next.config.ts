import type { NextConfig } from "next";

// Served at the apex custom domain https://computerart.llc, so the site sits
// at the domain root — no base path. (The `public/CNAME` file tells GitHub
// Pages which domain to serve.)
const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` that any static host can serve.
  output: "export",
  // GitHub Pages has no Next.js image optimization server.
  images: { unoptimized: true },
  // Emit `about/index.html` instead of `about.html` so clean URLs resolve.
  trailingSlash: true,
};

export default nextConfig;
