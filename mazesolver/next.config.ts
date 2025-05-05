import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org','juaraga.id','blog.cove.id','cdn.medcom.id'],
  },
};

export default nextConfig;