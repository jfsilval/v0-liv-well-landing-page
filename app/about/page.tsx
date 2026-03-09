import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutPurpose } from "@/components/about/about-purpose"
import { AboutValues } from "@/components/about/about-values"
import { AboutNumbers } from "@/components/about/about-numbers"

export const metadata = {
  title: 'About Us',
  description: 'Learn about Liv Well Pharmaceuticals — our mission, values, and commitment to delivering quality generic medicines to patients worldwide.',
  openGraph: {
    title: 'About Us',
    description: 'Our mission, values, and commitment to delivering quality generic medicines worldwide.',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
    siteName: 'Liv Well Pharmaceuticals',
  },
  twitter: { card: 'summary_large_image' },
}

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <AboutPurpose />
      <AboutValues />
      <AboutNumbers />
      <Footer showPharmacovigilance={false} />
    </main>
  )
}
