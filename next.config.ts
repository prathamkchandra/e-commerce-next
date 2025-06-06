import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['https://next--ecommerce.oneentry.cloud'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://next--ecommerce.oneentry.cloud',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
