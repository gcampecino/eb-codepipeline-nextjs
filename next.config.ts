import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  env: {
    customKey: 'my-value',
  },
};

export default nextConfig;
