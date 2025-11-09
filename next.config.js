/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com"],
    // unoptimized: true,
  },
  // Add this to ensure static exports work correctly
  output: 'export',
  // This is important for static exports with Next.js Image
  images: {
    unoptimized: true, // Only needed if you're using `next export`
  },
};

module.exports = nextConfig;




