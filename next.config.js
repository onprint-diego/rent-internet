/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['db.rent-internet.com'],
    unoptimized: true,
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/'},
  //     '/product-detail': { page: '/product-detail'},
  //     '/checkout': { page: '/checkout'},
  //     '/recharge-checkout': { page: '/recharge-checkout'}
  //   }
  // },
  async exportPathMap(defaultPathMap) {
    const pathMap = {
      '/': { page: '/' },
      '/product-detail': { page: '/product-detail' },
      '/checkout': { page: '/checkout' },
      '/recharge-checkout': { page: '/recharge-checkout' }
    }
    return pathMap
  }
}

module.exports = nextConfig
