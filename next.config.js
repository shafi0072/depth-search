/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig

