import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const isEs = locale === 'es'

  const title = isEs
    ? 'Liv Well Pharmaceuticals | Soluciones Farmacéuticas Globales'
    : 'Liv Well Pharmaceuticals | Global Pharmaceutical Solutions'

  const description = isEs
    ? 'Liv Well Pharmaceuticals distribuye medicamentos genéricos de confianza en más de 10 países. Más de 600 productos, 100% de calidad garantizada.'
    : 'Liv Well Pharmaceuticals delivers trusted generic medicines to over 10 countries. 600+ quality products, 100% quality assured.'

  return {
    title,
    description,
    openGraph: {
      title,
      description: isEs
        ? 'Soluciones farmacéuticas de confianza para un mundo más saludable.'
        : 'Trusted pharmaceutical solutions for a healthier world.',
      images: [{ url: '/logo.png', width: 1200, height: 630 }],
      siteName: 'Liv Well Pharmaceuticals',
    },
    twitter: {
      card: 'summary_large_image',
      title,
    },
  }
}

const InfoCardsSection = dynamic(() => import("@/components/info-cards-section").then(mod => ({ default: mod.InfoCardsSection })))
const AccordionSection = dynamic(() => import("@/components/accordion-section").then(mod => ({ default: mod.AccordionSection })))
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })))

export default function Page() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <HeroSection />
      <InfoCardsSection />
      <AccordionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

