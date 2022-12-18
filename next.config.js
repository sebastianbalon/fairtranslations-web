/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  trailingSlash: false,
  async rewrites() {
    return [{
      source: '/',
      destination: '/cs/o-firme',
    }];
  },
  async redirects() {
    return [{
      source: '/cs',
      destination: '/cs/o-firme',
      permanent: true,
    }, {
      source: '/pl',
      destination: '/pl/o-firme',
      permanent: true,
    }];
  }
}

module.exports = nextConfig
