/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "thumbs.dreamstime.com",
      "0.0.19.136",
      "fast-commerce-backend.onrender.com"
    ]
  }
}

module.exports = nextConfig
