/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  options: {
    dist: "build",
  },
};

module.exports = nextConfig;
