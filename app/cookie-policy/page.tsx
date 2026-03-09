import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookiePolicyContent } from "@/components/cookie-policy/cookie-policy-content"

export const metadata = {
  title: 'Cookie Policy',
  description: 'Learn how Liv Well Pharmaceuticals uses cookies and similar technologies on our website.',
  robots: { index: false },
}

export default function CookiePolicyPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary/10 mt-28 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4 font-sans">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Effective Date: September 30th, 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <CookiePolicyContent />

      <Footer showPharmacovigilance={false} />
    </main>
  )
}
