/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    appDir: true,
  },
  images: {
    domains: ["carallel.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/library",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
