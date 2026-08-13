import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   cpus: 1,
  // },
  output: 'export',
  // assetPrefix: './',
  trailingSlash: true,
  // output: 'export',
  // assetPrefix: '../',
  images: {
    unoptimized: true,
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
