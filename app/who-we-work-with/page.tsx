import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WwwwHero } from "@/components/who-we-work-with/wwww-hero"
import { WwwwOpening } from "@/components/who-we-work-with/wwww-opening"
import { WwwwAudiences } from "@/components/who-we-work-with/wwww-audiences"
import { WwwwReasons } from "@/components/who-we-work-with/wwww-reasons"
import { WwwwCta } from "@/components/who-we-work-with/wwww-cta"

export const metadata = {
  title: "Who We Work With | Liv Well Pharmaceuticals",
  description:
    "Discover how Liv Well Pharmaceuticals partners with governments, distributors, and international organisations to deliver quality generic medicines worldwide.",
}

export default function WhoWeWorkWithPage() {
  return (
    <main className="min-h-screen">
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
