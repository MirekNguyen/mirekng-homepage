/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
