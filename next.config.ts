import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '../',
  trailingSlash: true,
  images: {
    unoptimized: true, // static export mein next/image optimization API kaam nahi karta
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "api.envirocleanuae.com",
      },
    ],
    qualities: [25, 50, 80],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
