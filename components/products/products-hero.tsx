import Image from "next/image"
import Link from "next/link"
import { Package, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden mt-28 bg-[#0a2351]">
      <div className="relative h-[calc(100vh-7rem)] grid lg:grid-cols-2">
        {/* Left content */}
        <div className="flex flex-col justify-between px-8 lg:px-16 relative z-10 py-8">
          {/* Top: heading + text */}
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
              Product Portfolio
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
              Our Product Portfolio
            </h1>

            <p className="text-base lg:text-lg text-white/80 leading-relaxed">
              Liv Well Pharmaceuticals has built a robust portfolio of over 600 pharmaceutical products designed
              to address a wide range of therapeutic needs. From essential generics to advanced specialty care
              formulations, our catalog serves healthcare systems and distribution partners across multiple
              continents.
            </p>

            <div className="border-l-[3px] border-secondary/50 pl-5">
              <p className="text-base text-white/70 leading-relaxed">
                Each product in our catalog meets strict international quality standards, ensuring safety,
                efficacy, and regulatory compliance. Use the filters below to explore our full range by
                therapeutic area, active ingredient, or dosage form.
              </p>
            </div>
          </div>

          {/* Bottom: badge + button */}
          <div className="max-w-2xl space-y-5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5">
                <Package className="h-5 w-5 text-secondary" />
                <span className="text-white font-semibold text-sm">600+ Products Available</span>
              </div>

              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/contact">{"Can't find what you need? Contact Us"}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right: product image */}
        <div className="hidden lg:flex items-center justify-center relative">
          <Image
            src="/products-hero.png"
            alt="Pharmaceutical products"
            width={700}
            height={700}
            className="object-contain w-full h-auto max-h-[80vh] drop-shadow-2xl"
            priority
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-[46%] -translate-x-1/2 z-20 flex flex-col items-center gap-1">
          <span className="text-[9px] tracking-widest uppercase text-white/60">Scroll</span>
          <ChevronDown className="h-3.5 w-3.5 animate-bounce text-white/60" />
        </div>
      </div>
    </section>
  )
}
