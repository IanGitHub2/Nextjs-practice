/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'wembleypark.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      }
    ],
    minimumCacheTTL: 1500000,
  }
}


module.exports = nextConfig
