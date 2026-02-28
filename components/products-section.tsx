"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pill, Activity, Stethoscope, Dna } from "lucide-react"

const products = [
  {
    icon: Pill,
    title: "Generic Medicines",
    description:
      "High-quality, affordable generic medications providing effective treatment options for common conditions.",
    image: "/pharmaceutical-pills-and-medicine-bottles.jpg",
    features: ["Cost-effective solutions", "WHO-approved standards", "Wide range of therapies"],
  },
  {
    icon: Dna,
    title: "Biosimilars",
    description: "Advanced biologic alternatives offering innovative treatment for complex medical conditions.",
    image: "/biotechnology-research-and-molecular-medicine.jpg",
    features: ["Cutting-edge biologics", "Proven efficacy", "Accessible pricing"],
  },
  {
    icon: Activity,
    title: "Specialty Care",
    description: "Specialized pharmaceutical products for critical care and rare disease management.",
    image: "/intensive-care-medical-equipment-and-monitoring.jpg",
    features: ["Expert formulations", "Clinical excellence", "Patient-focused"],
  },
  {
    icon: Stethoscope,
    title: "Wellness Products",
    description: "Comprehensive healthcare products supporting overall wellness and preventive care.",
    image: "/wellness-and-preventive-healthcare-products.jpg",
    features: ["Preventive care", "Quality ingredients", "Evidence-based"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From essential medicines to cutting-edge pharmaceutical solutions, we offer a comprehensive portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/90 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
