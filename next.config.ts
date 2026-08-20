import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: no Node server in production, served as plain files via
  // Nginx. Verified nothing in this codebase needs a server runtime (no API
  // routes, middleware, dynamic segments, server actions, or ISR). The 3
  // redirects that used to live in redirects() below now live in nginx.conf
  // instead, since output:"export" does not support redirects()/rewrites()/
  // headers()/middleware/API routes at all (Next.js silently drops them
  // rather than failing the build if left here - confirmed by testing).
  output: "export",
  // next/image isn't used anywhere today (plain <img> everywhere), but if
  // that ever changes under static export it needs a loader or this flag -
  // left here as a guardrail so it doesn't silently fail to optimize later.
  images: { unoptimized: true },
  allowedDevOrigins: ["*.ngrok-free.app", "*.ngrok-free.dev", "*.ngrok.io"],
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
