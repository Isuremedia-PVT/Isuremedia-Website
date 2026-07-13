import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.ngrok-free.app", "*.ngrok-free.dev", "*.ngrok.io"],
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://blog.isuremedia.com",
        permanent: false,
      },
      {
        source: "/blog/:path*",
        destination: "https://blog.isuremedia.com/:path*",
        permanent: false,
      },
      {
        source: "/freetools",
        destination: "https://templates.isuremedia.com/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
