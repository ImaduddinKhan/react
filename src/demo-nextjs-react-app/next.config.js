/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  options: {
    distDir: "build",
  },
};

module.exports = nextConfig;
