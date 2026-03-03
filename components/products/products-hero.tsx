import { Package } from "lucide-react"

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden mt-28 bg-primary/10">
      <div className="relative py-20 lg:py-28">
        <div className="relative z-10 container mx-auto px-8 lg:px-16">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
              Product Portfolio
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground text-balance">
              Our Product Portfolio
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {"Liv Well Pharmaceuticals offers a wide range of high-quality pharmaceutical products, from essential generics to innovative biosimilars and specialty care solutions. Explore our full portfolio below. If you cannot find what you need, reach out to us at "}
              <a href="mailto:info@livwell.com" className="text-secondary hover:underline font-medium">
                info@livwell.com
              </a>
            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5">
              <Package className="h-5 w-5 text-secondary" />
              <span className="text-foreground font-semibold text-sm">600+ Products Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
