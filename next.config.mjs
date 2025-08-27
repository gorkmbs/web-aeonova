/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sayfa arasında geçişlerde dil korunacak
  trailingSlash: false,
  // Image optimization için domains
  images: {
    domains: ["images.unsplash.com", "cdn.jsdelivr.net"],
  },
};

export default nextConfig;
