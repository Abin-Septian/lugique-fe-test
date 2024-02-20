/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*ssl.mzstatic.com",
      },
    ],
  },
};

export default nextConfig;
