import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   cpus: 1,
  // },
  // output: 'export',
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

  async redirects() {
    return [
      // --- existing ---
      {
        source: '/blog-1',
        destination: 'http://127.0.0.1/blog-1',
        permanent: true,
      },
      {
        source: '/blog-1/:path*',
        destination: 'http://127.0.0.1/blog-1/:path*',
        permanent: true,
      },

      // --- specific page-to-page redirects ---
      {
        source: '/blogs/5-signs-to-have-your-ducts-cleaned',
        destination: '/signs-you-need-ac-duct-cleaning-service',
        permanent: true,
      },
      {
        source: '/accleaning-serving',
        destination: '/accleaning-servicing',
        permanent: true,
      },

      // --- individual pages -> home ---
      {
        source: '/carpet-cleaning',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sofa-cleaning-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ovencleaning',
        destination: '/',
        permanent: true,
      },
      {
        source: '/mattress-cleaning',
        destination: '/',
        permanent: true,
      },
      {
        source: '/arabian-ranches',
        destination: '/',
        permanent: true,
      },
      {
        source: '/grout-cleaning',
        destination: '/',
        permanent: true,
      },
      {
        source: '/emirates-hills',
        destination: '/',
        permanent: true,
      },
      {
        source: '/locations',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dubai-marina',
        destination: '/',
        permanent: true,
      },
      {
        source: '/jumeirah-park',
        destination: '/',
        permanent: true,
      },
      {
        source: '/upholstery-cleaning',
        destination: '/',
        permanent: true,
      },

      // --- wildcard / section redirects -> home ---
      // covers /wp-content/*, /wp-content/uploads/*, /wp-content/plugins/*
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      // covers /author/gazzberry365, /author/chris-walters, /author/chris-walters/page/2
      {
        source: '/author/:path*',
        destination: '/',
        permanent: true,
      },
      // covers /category/category-3, /category/uncategorized,
      // /category/air-conditioner-service and their /page/N/?et_blog variants
      {
        source: '/category/:path*',
        destination: '/',
        permanent: true,
      },

      // --- query-string URLs -> home (Next.js needs `has` to match queries) ---
      // /?blogcategory=ac+cleaning&blog=y, carpet cleaning, duct cleaning, etc.
      {
        source: '/',
        has: [
          { type: 'query', key: 'blogcategory' },
          { type: 'query', key: 'blog', value: 'y' },
        ],
        destination: '/',
        permanent: true,
      },
      // /?et_core_page_resource and /?et_core_page_resource=
      {
        source: '/',
        has: [{ type: 'query', key: 'et_core_page_resource' }],
        destination: '/',
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;