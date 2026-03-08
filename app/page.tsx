import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

const InfoCardsSection = dynamic(() => import("@/components/info-cards-section").then(mod => ({ default: mod.InfoCardsSection })))
const AccordionSection = dynamic(() => import("@/components/accordion-section").then(mod => ({ default: mod.AccordionSection })))
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })))

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <InfoCardsSection />
      <AccordionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
