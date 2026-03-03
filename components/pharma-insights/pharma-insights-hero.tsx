import Image from "next/image"
import { ChevronDown, FileText, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function PharmaInsightsHero() {
  return (
    <section className="relative overflow-hidden pt-28 bg-[#0a2351]">
      <div className="relative grid lg:grid-cols-5 h-[calc(100vh-7rem)]">
        {/* Left content - 60% */}
        <div className="lg:col-span-3 flex flex-col justify-center gap-6 px-8 lg:px-16 relative z-10 py-6">
          <div className="max-w-2xl space-y-5">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
              Knowledge Hub
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
              Pharma Insights
            </h1>

            <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">
              Strategic intelligence and industry analysis for healthcare professionals, health ministries, and decision-makers navigating the global pharmaceutical landscape.
            </p>

            {/* Badges */}
            <div className="flex gap-3 pt-1">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-1.5">
                <FileText className="h-3.5 w-3.5 mr-1.5" />
                Expert Analysis
              </Badge>
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-4 py-1.5">
                <Globe className="h-3.5 w-3.5 mr-1.5" />
                Industry Intelligence
              </Badge>
            </div>
          </div>
        </div>

        {/* Right side - 40% framed image with overlay text */}
        <div className="lg:col-span-2 relative hidden lg:block h-full">
          <div className="absolute inset-4 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/insights-hero.jpg"
              alt="Pharmaceutical research and analysis"
              fill
              className="object-cover"
              priority
            />
            {/* Navy overlay */}
            <div className="absolute inset-0 bg-[#0a2351]/60" />

            {/* Overlay text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Insights for Decision-Makers
              </h2>
              <p className="text-sm text-white/70">
                Trusted perspectives on global pharma
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-[30%] -translate-x-1/2 z-20 flex flex-col items-center gap-1">
          <span className="text-[9px] tracking-widest uppercase text-white/60">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-white/60" />
        </div>
      </div>
    </section>
  )
}
