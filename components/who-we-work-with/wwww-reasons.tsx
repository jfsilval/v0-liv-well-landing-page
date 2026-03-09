import { Shield, Package, Zap, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"

const reasons = [
  {
    icon: Shield,
    title: "Quality that is built in — not promised after the fact",
    body: "In a sector where the consequences of a quality failure are measured in human lives, every product in our portfolio meets the highest quality standards. We approach quality with the seriousness it demands — applying strict controls throughout the manufacturing process and at the release of every batch we commercialise, so that our partners have full confidence in what they receive.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Package,
    title: "A portfolio broad enough to matter",
    body: "With 600+ products across more than 20 therapeutic categories, we can cover a meaningful share of your procurement needs from a single, trusted source. Less fragmentation in your supply chain means fewer variables — and fewer points where quality or reliability can break down.",
    color: "text-teal-700",
    bg: "bg-teal-100",
  },
  {
    icon: Zap,
    title: "Speed and flexibility when it counts most",
    body: "Pharmaceutical needs don't wait. When procurement timelines shift or an urgent need emerges, our partners need a partner who can adapt — not one who hides behind lead times and process. Responsiveness is something we take personally, because we understand what is at stake when supply falls short.",
    color: "text-lime-700",
    bg: "bg-lime-100",
  },
  {
    icon: Globe,
    title: "Experience in complex markets",
    body: "We have built our expertise serving markets where pharmaceutical supply chains can be unpredictable and where the difference between a reliable partner and an unreliable one is felt directly by patients. We know what it takes to deliver consistently in challenging environments — and we do it without compromising the standards our partners depend on.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
]

export function WwwwReasons() {
  return (
    <section className="py-12 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Why Liv Well <span className="text-primary">Pharmaceuticals</span>
            </h2>
            <div className="flex justify-center mb-4" aria-hidden="true">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              There is no shortage of pharmaceutical suppliers worldwide. What is harder to find is a partner that
              consistently delivers on what matters most — quality, reliability, and trust.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Card
                  key={index}
                  className="p-5 hover:shadow-xl transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-primary hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      aria-hidden="true"
                      className={`w-10 h-10 rounded-lg ${reason.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`h-5 w-5 ${reason.color}`} />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{reason.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.body}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
