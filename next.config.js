/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/matt-website',
  assetPrefix: '/matt-website/',
}

module.exports = nextConfig 