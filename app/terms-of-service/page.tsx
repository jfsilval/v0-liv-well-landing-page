import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TermsOfServiceContent } from "@/components/terms-of-service/terms-of-service-content"

export const metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service governing the use of the Liv Well Pharmaceuticals website.',
  robots: { index: false },
}

export default function TermsOfServicePage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary/10 mt-28 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4 font-sans">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg">
            Effective Date: September 30th, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <TermsOfServiceContent />

      <Footer showPharmacovigilance={false} />
    </main>
  )
}
