import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ntvb.tmsimg.com",
      },
      {
        protocol: "https",
        hostname: "futuramaapi.com"
      }
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
