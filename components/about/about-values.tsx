import { Shield, Heart, Eye, Handshake, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

const values = [
  {
    icon: Heart,
    title: "Accessibility",
    text: "Effective, safe medicines should be available to everyone. Affordability is not a concession we make — it is a cornerstone of who we are.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Quality Without Compromise",
    text: "Every product carrying the Liv Well Pharmaceuticals name meets stringent international standards. Our quality processes are thorough, consistent, and non-negotiable.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Eye,
    title: "Integrity",
    text: "We operate with complete transparency in all our relationships — with customers, partners, regulators, and suppliers. Our reputation is built on honesty.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "We see our clients not as transactions, but as long-term partners. We invest in understanding their needs and work alongside them to deliver solutions that truly fit.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Clock,
    title: "Reliability",
    text: "In healthcare, there is no room for uncertainty. Our partners trust us to deliver the right product, to the right standard, at the right time — and we take that responsibility seriously.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
]

export function AboutValues() {
  return (
    <section className="py-12 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Our <span className="text-primary">Values</span>
            </h2>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every decision at Liv Well Pharmaceuticals is shaped by five core values that define not just how we work,
              but who we are.
            </p>
          </div>

          {/* Values grid - 3 on top, 2 centered below */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {values.slice(0, 3).map((value) => (
              <Card
                key={value.title}
                className="p-5 hover:shadow-xl transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-primary"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${value.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className={`h-5 w-5 ${value.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {values.slice(3).map((value) => (
              <Card
                key={value.title}
                className="p-5 hover:shadow-xl transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-primary"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${value.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className={`h-5 w-5 ${value.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
