import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function PharmaInsightsHero() {
  return (
    <section className="relative overflow-hidden mt-28 bg-primary/10">
      <div className="relative h-[calc(100vh-7rem)]">
        <Image
          src="/insights-hero.jpg"
          alt="Pharmaceutical research and analysis"
          fill
          className="object-cover mix-blend-multiply opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2351]/80 via-[#0a2351]/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex items-start pt-16">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
                Pharma Insights
              </p>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
                Strategic intelligence for{" "}
                <span className="text-secondary">healthcare decision-makers.</span>
              </h1>

              {/* Mid-statement with left border accent */}
              <div className="border-l-[3px] border-secondary/50 pl-5">
                <p className="text-lg lg:text-xl font-semibold text-white">
                  Industry analysis, regulatory perspectives, and market insights from the Liv Well team.
                </p>
              </div>

              <p className="text-base text-white/70 leading-relaxed max-w-xl">
                Explore curated content designed for health ministries, distributors, importers, and care providers
                navigating the global pharmaceutical landscape.
              </p>


            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
