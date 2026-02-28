"use client"

import { ChevronDown } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden mt-28 bg-primary/10">
      <div className="relative h-[calc(100vh-7rem)]">
        {/* Background image on white - mix-blend-multiply makes white areas transparent, showing bg-primary/10 */}
        <img
          src="/about-hero-uae-global-distribution.jpg"
          alt="Global pharmaceutical distribution from UAE"
          className="absolute inset-0 w-full h-full object-contain mix-blend-multiply"
        />

        {/* Left overlay for text readability */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0a2351]/75 via-[#0a2351]/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
                About Liv Well Pharmaceuticals
              </p>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white text-balance">
                Making quality medicine <span className="text-secondary">accessible.</span>
              </h1>

              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                We believe that safe, effective medicines should be within reach for every patient — regardless of
                geography or circumstance.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#0a2351]/60">
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
