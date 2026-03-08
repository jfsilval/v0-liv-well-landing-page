"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "10+", label: "Countries Served" },
  { value: "600+", label: "Products in Portfolio" },
  { value: "20+", label: "Therapeutic Categories" },
  { value: "\u221E", label: "Commitment to Patients" },
]

export function AboutNumbers() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.3 }
    )

    const items = container.querySelectorAll("[data-index]")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-[#0a2351] relative overflow-hidden">
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
          <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-index={index}
                className={`text-center transition-all duration-700 ${
                  visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-6xl md:text-7xl font-bold text-white mb-3">{stat.value}</p>
                <div className="w-12 h-0.5 bg-secondary mx-auto mb-3" />
                <p className="text-white/70 text-lg tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
