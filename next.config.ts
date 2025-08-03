import type { NextConfig } from "next";
//import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    // protcol = "https"
    // hostname = "next--ecommerce.oneentry.cloud"
    //domains: ['https://next--ecommerce.oneentry.cloud'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pratham-shop.oneentry.cloud',
        port: '',
      },{
        protocol: 'https',
        hostname: 'imgs.search.brave.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
