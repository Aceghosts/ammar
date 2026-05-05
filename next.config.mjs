/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Prevent Next.js from bundling these through webpack — keeps them as
    // native Node.js requires, which avoids pdf-parse's pdfjs-dist
    // "Object.defineProperty called on non-object" build error.
    serverComponentsExternalPackages: ["sharp"],
  },
};

export default nextConfig;
