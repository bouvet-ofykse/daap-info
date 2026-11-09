/** @type {import('next').NextConfig} */
import { ALBUM_URL } from './lib/dap-info.ts'

const nextConfig = {
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
