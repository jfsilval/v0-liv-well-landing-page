"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "10+", label: "Countries Served" },
  { value: "600+", label: "Products in Portfolio" },
  { value: "20+", label: "Therapeutic Categories" },
  { value: "\u221E", label: "Commitment to Patients" },
]

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <p className="text-6xl md:text-7xl font-bold text-white mb-3">{value}</p>
      <div className="w-12 h-0.5 bg-secondary mx-auto mb-3" />
      <p className="text-white/70 text-lg tracking-wide">{label}</p>
    </div>
  )
}

export function AboutNumbers() {
  return (
    <section className="py-24 bg-[#0a2351] relative overflow-hidden border-b border-white/20">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              By the <span className="text-secondary">Numbers</span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-lg text-white/70">Liv Well Pharmaceuticals in figures</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
