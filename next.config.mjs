/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  // Lighter dev when using `npm run dev:next`
  reactStrictMode: false,
  devIndicators: false,
  experimental: {
    // Cap Turbopack RAM (~512 MB)
    turbopackMemoryLimit: 512 * 1024 * 1024,
    // Fewer git.exe-style child processes than 'childProcesses'
    turbopackPluginRuntimeStrategy: 'workerThreads',
    turbopackFileSystemCacheForDev: false,
    turbopackSourceMaps: false,
    turbopackInputSourceMaps: false,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          '**/.git/**',
          '**/node_modules/**',
          '**/.next/**',
          '**/out/**',
          '**/public/public/**',
          '**/assets/**',
          '**/public/webapp/**',
          '**/scratch/**',
        ],
      };
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/static/:path*',
        destination: '/webapp/static/:path*',
      },
      {
        source: '/dist/:path*',
        destination: '/webapp/dist/:path*',
      },
      {
        source: '/lib/:path*',
        destination: '/webapp/lib/:path*',
      },
      {
        source: '/resources/:path*',
        destination: '/webapp/resources/:path*',
      },
      {
        source: '/style/:path*',
        destination: '/webapp/style/:path*',
      },
      {
        source: '/fonts/:path*',
        destination: '/webapp/fonts/:path*',
      },
      // Bundle hardcodes node_modules/@vexcode/blockly/media/ — assets live under lib/
      {
        source: '/node_modules/@vexcode/:path*',
        destination: '/webapp/lib/@vexcode/:path*',
      },
      {
        source: '/webapp/node_modules/@vexcode/:path*',
        destination: '/webapp/lib/@vexcode/:path*',
      },
    ];
  },
};

export default nextConfig;
