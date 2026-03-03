import Image from "next/image"
import Link from "next/link"
import { Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden mt-28 bg-primary/10">
      <div className="relative h-[calc(100vh-7rem)]">
        {/* Background image */}
        <Image
          src="/products-hero.jpg"
          alt="Pharmaceutical products portfolio"
          fill
          className="object-cover opacity-30"
          priority
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2351]/85 via-[#0a2351]/60 to-[#0a2351]/40" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-start pt-16">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
                Product Portfolio
              </p>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
                Our Product Portfolio
              </h1>

              <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl">
                Liv Well Pharmaceuticals offers a comprehensive range of high-quality pharmaceutical products,
                from essential generics to innovative biosimilars and specialty care solutions. Browse our full
                portfolio below.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5">
                  <Package className="h-5 w-5 text-secondary" />
                  <span className="text-white font-semibold text-sm">600+ Products Available</span>
                </div>

                {/* Contact button */}
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
        </div>
      </div>
    </section>
  )
}
