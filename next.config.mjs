import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cms-payload-livwell.vercel.app" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://cms-payload-livwell.vercel.app https://*.public.blob.vercel-storage.com",
              "connect-src 'self' https://cms-payload-livwell.vercel.app https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "frame-src 'none'",
              "object-src 'none'",
            ].join('; ')
          }
        ]
      }
    ]
  }
}

export default withNextIntl(nextConfig)
