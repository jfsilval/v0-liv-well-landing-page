import Image from "next/image"
import Link from "next/link"
import { Package, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      {/* Background matching menu/home */}
      <div className="absolute inset-0 bg-primary/10" />

      <div className="relative grid lg:grid-cols-2 h-[calc(100vh-7rem)]">
        {/* Left content */}
        <div className="flex flex-col justify-between px-8 lg:px-16 relative z-10 py-4">
          {/* Top: heading + text */}
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
              Product Portfolio
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              {"Our "}
              <span className="text-primary">Product Portfolio</span>
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed">
              Liv Well Pharmaceuticals has built a robust portfolio of over 600 pharmaceutical products designed
              to address a wide range of therapeutic needs. From essential generics to advanced specialty care
              formulations, our catalog serves healthcare systems and distribution partners across multiple
              continents.
            </p>

            <div className="border-l-[3px] border-secondary/50 pl-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                Each product in our catalog meets strict international quality standards, ensuring safety,
                efficacy, and regulatory compliance. Use the filters below to explore our full range by
                therapeutic area, active ingredient, or dosage form.
              </p>
            </div>
          </div>

          {/* Bottom: badge + buttons */}
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5">
              <Package className="h-5 w-5 text-secondary" />
              <span className="text-primary font-semibold text-sm">600+ Products Available</span>
            </div>

            <div className="flex flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Explore Below
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <Link href="/contact">{"Can't find what you need? Contact Us"}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right: product image */}
        <div className="hidden lg:flex items-center justify-center relative p-8">
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
        <div className="absolute bottom-4 left-[46%] -translate-x-1/2 z-20 flex flex-col items-center gap-1">
          <span className="text-[9px] tracking-widest uppercase text-muted-foreground">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
