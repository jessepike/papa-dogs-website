import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export - no server required
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slashes for better static hosting
  trailingSlash: true,

  // Disable Next.js telemetry
  // (This is optional - telemetry is already disabled for static exports)
};

export default nextConfig;
