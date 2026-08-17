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
  // async redirects() {
  //   return [
  //     {
  //       source: '/blog-1',
  //       destination: 'http://127.0.0.1/blog-1',
  //       permanent: true,
  //     },
  //     {
  //       source: '/blog-1/:path*',
  //       destination: 'http://127.0.0.1/blog-1/:path*',
  //       permanent: true,
  //     }
  //   ];
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;