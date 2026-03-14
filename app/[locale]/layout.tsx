import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { BackToTop } from "@/components/back-to-top"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Liv Well Pharmaceuticals",
    template: "%s | Liv Well Pharmaceuticals",
  },
  description:
    "Liv Well Pharmaceuticals is a global healthcare company dedicated to improving lives through innovative pharmaceutical solutions.",
  keywords: ["pharmaceuticals", "healthcare", "medicine", "global health", "pharmaceutical company"],
  authors: [{ name: "Liv Well Pharmaceuticals" }],
  creator: "Liv Well Pharmaceuticals",
  publisher: "Liv Well Pharmaceuticals",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.livwellpharmaceuticals.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Liv Well Pharmaceuticals",
    title: "Liv Well Pharmaceuticals",
    description:
      "Liv Well Pharmaceuticals is a global healthcare company dedicated to improving lives through innovative pharmaceutical solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Liv Well Pharmaceuticals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liv Well Pharmaceuticals",
    description:
      "Liv Well Pharmaceuticals is a global healthcare company dedicated to improving lives through innovative pharmaceutical solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <BackToTop />
      </body>
    </html>
  )
}
