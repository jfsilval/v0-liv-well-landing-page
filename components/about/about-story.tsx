import { Globe, Package, Handshake } from "lucide-react"
import { Card } from "@/components/ui/card"

const infoCards = [
  {
    icon: Globe,
    label: "Global Reach",
    text: "Serving healthcare systems and institutional partners across 10+ countries worldwide.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Package,
    label: "Proven Portfolio",
    text: "600+ products spanning more than 20 therapeutic categories, all meeting rigorous international standards.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Handshake,
    label: "Trusted Partnerships",
    text: "Long-term relationships with governments, institutions, and private sector partners built on reliability and integrity.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
]

export function AboutStory() {
  return (
    <section className="py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="flex justify-center mb-6" aria-hidden="true">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-lg text-muted-foreground">Built on a simple belief</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Text content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Good health should never be a privilege. It is this belief that gave birth to Liv Well Pharmaceuticals
                — and it is the same belief that continues to drive everything we do.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our earliest days, we set out to challenge the idea that quality and affordability are mutually
                exclusive in healthcare. We believed then, as we do now, that patients everywhere deserve access to
                medicines that are both effective and within reach — and we built Liv Well Pharmaceuticals around that
                conviction.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, that commitment has taken us further than we ever imagined. Today, Liv Well
                Pharmaceuticals is a trusted name across more than 10 countries, recognised by healthcare providers,
                institutions, and governments alike as a dependable partner that delivers on its promises.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are still growing. And with every step forward, we remain anchored to the same purpose that started
                it all: making quality medicines accessible to more people, in more places, around the world.
              </p>
            </div>

            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              {infoCards.map((card) => (
                <Card
                  key={card.label}
                  className="p-6 border-l-4 hover:shadow-lg transition-shadow"
                  style={{ borderLeftColor: "var(--color-primary)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      aria-hidden="true"
                      className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center flex-shrink-0`}
                    >
                      <card.icon className={`h-6 w-6 ${card.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{card.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
