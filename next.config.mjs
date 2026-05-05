/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["sharp"],
  },
  outputFileTracingIncludes: {
    "/site/[slug]": ["./data/clients/**/*.json"],
  },
};

export default nextConfig;
