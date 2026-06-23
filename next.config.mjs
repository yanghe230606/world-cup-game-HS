// 自动删除根目录 /app/，防止覆盖 src/app/ 路由
import { existsSync, rmSync } from 'fs';
if (existsSync('./app')) rmSync('./app', { recursive: true, force: true });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  allowedDevOrigins: ['**.*.*'],
  env: {
    PROJECT_ID: process.env.HAPPYSEEDS_PROJECT_ID ?? '',
    REACTUS_BASE_URL: process.env.REACTUS_BASE_URL ?? '',
  },
  async headers() {
    const wasmHeaders = [
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self' blob: data:",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob:",
          "worker-src 'self' blob:",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https:",
          "media-src 'self' blob: mediastream:",
          "connect-src 'self' blob: data: https:",
          "frame-src 'self'",
        ].join('; '),
      },

    ];
    return [
      { source: '/(.*)', headers: wasmHeaders },
    ];
  },
};

export default nextConfig;
