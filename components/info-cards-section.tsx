"use client"
import { Target, Heart, Award, Globe, Users, Stethoscope, Pill, Mail } from "lucide-react"

const cards = [
  {
    title: "Our Purpose",
    description: "To expand global access to medicines and high-quality pharmaceutical solutions for all.",
    icon: Target,
    image: "/pharmaceutical-tablets-capsules-variety.jpg",
    href: "#about",
  },
  {
    title: "Our Values",
    description: "Our relationship with customers, suppliers and partners is based on trust, integrity and excellence.",
    icon: Heart,
    image: "/pharmaceutical-quality-control-testing.jpg",
    href: "#about",
  },
  {
    title: "Quality Culture",
    description:
      "Here at Liv Well Pharmaceuticals, quality is much more than just a standard: it is a culture we live.",
    icon: Award,
    image: "/pharmaceutical-manufacturing-quality-assurance.jpg",
    href: "#about",
  },
  {
    title: "Where We Are",
    description: "Liv Well Pharmaceuticals in the world. Discover our different places all over the world.",
    icon: Globe,
    image: "/pharmaceutical-global-distribution-network.jpg",
    href: "#about",
  },
  {
    title: "Our Clients",
    description:
      "Here at Liv Well Pharmaceuticals, we help them tackle the immense challenge of meeting healthcare needs.",
    icon: Users,
    image: "/pharmacist-customer-consultation-pharmacy.jpg",
    href: "#about",
  },
  {
    title: "Your Health",
    description:
      "Stay up to date with trends, key information, and health tips. Gain more knowledge and help us improve.",
    icon: Stethoscope,
    image: "/medicine-bottles-healthcare-treatment-options.jpg",
    href: "#about",
  },
  {
    title: "Our Products",
    description:
      "Liv Well Pharmaceuticals offers a wide variety of medicines: from the essentials to cutting-edge treatments.",
    icon: Pill,
    image: "/pharmaceutical-product-range-medications.jpg",
    href: "#products",
  },
  {
    title: "Contact",
    description: "Our global corporate office is strategically located, from where we serve patients worldwide.",
    icon: Mail,
    image: "/pharmaceutical-company-headquarters-building.jpg",
    href: "#contact",
  },
]

export function InfoCardsSection() {
  return (
    <section className="relative py-24 bg-[#0a2351] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative top line */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Our <span className="text-secondary">Vision</span>
          </h2>

          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white" style={{ letterSpacing: "-0.02em" }}>
              Making quality<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(110deg, #06FAD4, #3AF398, #3180C3)" }}
              >
                medicine<br />
                accessible.
              </span>
            </h3>

            <p className="text-base md:text-lg text-white/60 leading-relaxed mt-8">
              We believe that safe, effective medicines should be within reach for every patient — regardless of geography or circumstance.
            </p>
          </div>

          {/* Decorative bottom line */}
          <div className="flex justify-center mt-10">
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
