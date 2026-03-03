import { Package } from "lucide-react"

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden mt-28 bg-[#0a2351]">
      <div className="relative py-20 lg:py-28">
        {/* Subtle gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2351] via-[#0a2351] to-primary/30" />

        <div className="relative z-10 container mx-auto px-8 lg:px-16">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
              Product Portfolio
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
              Our Product Portfolio
            </h1>

            <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl">
              {"Liv Well Pharmaceuticals offers a comprehensive range of high-quality medicines — from essential generics to cutting-edge biosimilars and specialty care solutions. Browse our full portfolio below. Can't find what you need? Contact us at "}
              <a href="mailto:info@livwell.com" className="text-secondary hover:underline font-medium">
                info@livwell.com
              </a>
            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5">
              <Package className="h-5 w-5 text-secondary" />
              <span className="text-white font-semibold text-sm">1,000+ Products Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
