import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WwwwHero } from "@/components/who-we-work-with/wwww-hero"
import { WwwwOpening } from "@/components/who-we-work-with/wwww-opening"
import { WwwwAudiences } from "@/components/who-we-work-with/wwww-audiences"
import { WwwwReasons } from "@/components/who-we-work-with/wwww-reasons"
import { WwwwCta } from "@/components/who-we-work-with/wwww-cta"

export const metadata = {
  title: 'Who We Work With',
  description: 'Discover the partners, distributors, and healthcare professionals who trust Liv Well Pharmaceuticals for quality generic medicines across the globe.',
  openGraph: {
    title: 'Who We Work With',
    description: 'Partners, distributors, and healthcare professionals who trust Liv Well Pharmaceuticals.',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
    siteName: 'Liv Well Pharmaceuticals',
  },
  twitter: { card: 'summary_large_image' },
}

export default function WhoWeWorkWithPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <WwwwHero />
      <WwwwOpening />
      <WwwwAudiences />
      <WwwwReasons />
      <WwwwCta />
      <Footer showPharmacovigilance={false} />
    </main>
  )
}
