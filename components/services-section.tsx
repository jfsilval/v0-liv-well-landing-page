"use client"

import { Card } from "@/components/ui/card"
import { Microscope, Heart, Shield, Truck, Users, FlaskConical } from "lucide-react"

const colorMap = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary" },
  accent: { bg: "bg-accent/10", text: "text-accent" },
} as const

const services = [
  {
    icon: Microscope,
    title: "Research & Development",
    description: "Cutting-edge pharmaceutical research to develop innovative medicines for global health challenges.",
    color: "primary",
  },
  {
    icon: FlaskConical,
    title: "Quality Assurance",
    description: "Rigorous testing protocols ensuring every product meets international pharmaceutical standards.",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Patient Care",
    description: "Comprehensive healthcare solutions focused on improving patient outcomes and quality of life.",
    color: "accent",
  },
  {
    icon: Truck,
    title: "Global Distribution",
    description: "Reliable worldwide distribution network ensuring medicines reach those who need them most.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Full compliance with international regulations and pharmaceutical safety standards.",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Healthcare Partnerships",
    description: "Collaborative partnerships with healthcare providers to enhance patient care delivery.",
    color: "accent",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive pharmaceutical solutions designed to meet the highest standards of quality and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group cursor-pointer border-2 hover:border-primary/20"
              >
                <div
                  aria-hidden="true"
                  className={`w-14 h-14 rounded-xl ${colorMap[service.color as keyof typeof colorMap].bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`h-7 w-7 ${colorMap[service.color as keyof typeof colorMap].text}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
