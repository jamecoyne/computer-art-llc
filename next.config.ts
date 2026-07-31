import type { NextConfig } from "next";

// Served from https://<user>.github.io/computer-art-llc, so production
// builds need the repo name as a base path. `next build` always runs with
// NODE_ENV=production, while `next dev` does not — so local dev stays at "/".
const isProd = process.env.NODE_ENV === "production";
const repo = "computer-art-llc";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` that any static host can serve.
  output: "export",
  // GitHub Pages has no Next.js image optimization server.
  images: { unoptimized: true },
  // Emit `about/index.html` instead of `about.html` so clean URLs resolve.
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
};

export default nextConfig;
