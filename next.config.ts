import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "envirocleanuae.com",
      },
    ],
    qualities: [25, 50, 80],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
