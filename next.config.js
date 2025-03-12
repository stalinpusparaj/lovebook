/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      os: false,
      path: false,
      stream: false,
      util: false,
      buffer: false,
      http: false,
      https: false,
      url: false,
      zlib: false,
    };
    return config;
  },
}

module.exports = nextConfig 