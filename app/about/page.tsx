import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutPurpose } from "@/components/about/about-purpose"
import { AboutValues } from "@/components/about/about-values"
import { AboutNumbers } from "@/components/about/about-numbers"

export const metadata = {
  title: "About Us | Liv Well Pharmaceuticals",
  description:
    "Learn about Liv Well Pharmaceuticals — our mission to make quality medicine accessible, our values, and our global reach across 10+ countries.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
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
