/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  images: {
    // domains: ["picsum.photos"],
    domains: ["phopautomation.vercel.app"],
  },
};


module.exports = nextConfig;
