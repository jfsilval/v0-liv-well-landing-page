import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { BackToTop } from "@/components/back-to-top"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  'https://www.livwellpharmaceuticals.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Liv Well Pharmaceuticals',
    template: '%s | Liv Well Pharmaceuticals',
  },
  description: 'Leading pharmaceutical company providing innovative healthcare solutions worldwide. Quality generic medicines and healthcare products you can trust.',
  keywords: ['pharmaceuticals', 'generic medicines', 'healthcare', 'Liv Well', 'quality generics'],
  authors: [{ name: 'Liv Well Pharmaceuticals' }],
  creator: 'Liv Well Pharmaceuticals',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Liv Well Pharmaceuticals',
    title: 'Liv Well Pharmaceuticals — Quality Generics. Global Reach.',
    description: 'Trusted pharmaceutical solutions for a healthier world. Innovation, quality, and care in every product.',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Liv Well Pharmaceuticals' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liv Well Pharmaceuticals — Quality Generics. Global Reach.',
    description: 'Trusted pharmaceutical solutions for a healthier world.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    shortcut: "/favicon.ico",
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}

