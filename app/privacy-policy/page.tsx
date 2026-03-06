import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PrivacyPolicyContent } from "@/components/privacy-policy/privacy-policy-content"

export const metadata = {
  title: "Privacy Policy | Liv Well Pharmaceuticals",
  description: "Liv Well Pharmaceuticals privacy policy — how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#0a2351] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-lg">
            Effective Date: September 30th, 2024 · Last Updated: September 30th, 2024
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />
      </section>

      {/* Content Section */}
      <PrivacyPolicyContent />

      <Footer showPharmacovigilance={false} />
    </main>
  )
}
