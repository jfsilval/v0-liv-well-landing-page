import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'Liv Well Pharmaceuticals | Global Pharmaceutical Solutions',
  description: 'Liv Well Pharmaceuticals delivers trusted generic medicines to over 10 countries. 600+ quality products, 100% quality assured.',
  openGraph: {
    title: 'Liv Well Pharmaceuticals | Global Pharmaceutical Solutions',
    description: 'Trusted pharmaceutical solutions for a healthier world.',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
    siteName: 'Liv Well Pharmaceuticals',
  },
  twitter: { 
    card: 'summary_large_image',
    title: 'Liv Well Pharmaceuticals | Global Pharmaceutical Solutions',
  },
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
