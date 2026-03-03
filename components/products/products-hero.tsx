import Image from "next/image"
import Link from "next/link"
import { Shield, Award, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 bg-primary/10">
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
              <span className="text-primary">Pharmaceutical</span>
              {" Products"}
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed">
              {"Quality, proven, and globally accessible, that's the standard behind every product Liv Well Pharmaceuticals brings to market. Our catalog spans essential generics, specialty care, therapeutic treatments, and consumer wellness solutions, thoughtfully assembled to support health ministries, distributors, importers, and care providers in delivering effective treatments where they're needed most."}
            </p>
          </div>

          {/* Bottom: stats centered + filter text + centered button */}
          <div className="max-w-2xl space-y-5">
            {/* Stats row - centered */}
            <div className="flex items-center justify-center gap-12 lg:gap-16">
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-secondary" />
                  <span className="text-2xl font-bold text-secondary">600+</span>
                </div>
                <p className="text-xs text-muted-foreground">Products</p>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-accent">100%</span>
                </div>
                <p className="text-xs text-muted-foreground">Quality Assured</p>
              </div>
            </div>

            {/* Filter text */}
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              {"Use the filters below to explore our full portfolio. Looking for something specific or can't find what you need?"}
            </p>

            {/* Contact button - centered */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-[#0a2351] hover:bg-[#0a2351]/90 text-white group"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right side - Framed image matching home page pattern */}
        <div className="relative hidden lg:block h-full">
          <div className="absolute inset-4 rounded-xl overflow-hidden shadow-2xl bg-[#0a2351]">
            <Image
              src="/products-hero.jpg"
              alt="Innovative pharmaceutical capsule with DNA technology"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
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
