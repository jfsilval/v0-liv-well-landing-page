import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { InfoCardsSection } from "@/components/info-cards-section"
import { AccordionSection } from "@/components/accordion-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

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
