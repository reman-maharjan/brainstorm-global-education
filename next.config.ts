import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "brainstorm-global-education.nepdora.baliyoventures.com",
      },
      {
        protocol: "http",
        hostname: "brainstorm-global-education.nepdora.baliyoventures.com",
      },
    ],
  },
};

export default nextConfig;
