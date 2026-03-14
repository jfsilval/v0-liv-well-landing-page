import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PrivacyPolicyContent } from "@/components/privacy-policy/privacy-policy-content"

export const metadata = {
  title: 'Privacy Policy',
  description: 'Read the Liv Well Pharmaceuticals Privacy Policy to understand how we collect, use, and protect your personal information.',
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary/10 mt-28 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4 font-sans">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Effective Date: September 30th, 2024 · Last Updated: September 30th, 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <PrivacyPolicyContent />

      <Footer showPharmacovigilance={false} />
    </main>
  )
}
