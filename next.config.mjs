/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    optimizeCss: true,
    amp: true,
  },
  optimizeFonts: true,
};

export default nextConfig;
