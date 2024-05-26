import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cloudflare-ipfs.com" }],
  },
};

export default nextConfig;
