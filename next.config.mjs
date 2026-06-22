/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  allowedDevOrigins: ['**.*.*'],
  env: {
    PROJECT_ID: process.env.HAPPYSEEDS_PROJECT_ID ?? '',
    REACTUS_BASE_URL: process.env.REACTUS_BASE_URL ?? '',
  },
  // 禁用 Next.js 16 自动生成 favicon.ico/icon.png App Router 路由
  // 避免覆盖 page.tsx 和 api/ 路由
  experimental: {
    disableOptimizedLoading: false,
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/favicon.ico', destination: '/game-favicon.ico' },
      ],
    };
  },
};

export default nextConfig;
