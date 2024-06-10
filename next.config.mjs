/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    optimizeCss: true,
    forceSwcTransforms: true,
  },
  optimizeFonts: true,
};

export default nextConfig;
