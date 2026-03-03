import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function PharmaInsightsHero() {
  return (
    <section className="relative overflow-hidden mt-28 bg-[#0a2351]">
      <div className="relative h-[calc(100vh-7rem)]">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2351] via-[#0f3060] to-[#0a2351]" />

        {/* Decorative subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-secondary/30 blur-3xl" />
          <div className="absolute bottom-32 left-16 w-56 h-56 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="absolute inset-0 z-10 flex items-start pt-16">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
                Pharma Insights
              </p>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
                Strategic intelligence for<br />
                {"today's pharmaceutical landscape — "}
                <span className="text-secondary">insights that drive decisions.</span>
              </h1>

              {/* Mid-statement with left border accent */}
              <div className="border-l-[3px] border-secondary/50 pl-5">
                <p className="text-lg lg:text-xl font-semibold text-white">
                  Regulatory perspectives, market analysis, and industry developments curated by the Liv Well team.
                </p>
              </div>

              <p className="text-base text-white/70 leading-relaxed max-w-xl">
                Strategic intelligence, regulatory perspectives, and industry analysis for healthcare professionals,
                health ministries, and decision-makers navigating the global pharmaceutical landscape.
              </p>

              {/* Badges */}
              <div className="flex gap-3 pt-2">
                <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-1.5">
                  Expert Analysis
                </Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-4 py-1.5">
                  Industry Intelligence
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
