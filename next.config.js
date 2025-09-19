/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // If you want static export for Vercel
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig