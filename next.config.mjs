/** @type {import('next').NextConfig} */
import { ALBUM_URL } from './lib/dap-info.ts'

const nextConfig = {
  experimental: {
    agentUpgrade: 'security',
  },
  env: {
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/bilder",
        destination: ALBUM_URL,
        permanent: false,
      },
    ];
  }
}

export default nextConfig
