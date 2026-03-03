import Image from "next/image"
import Link from "next/link"
import { Shield, Award, Globe, ChevronDown, ArrowRight } from "lucide-react"
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

          {/* Bottom: stats + filter text + button */}
          <div className="max-w-2xl space-y-5">
            {/* Stats row - same as home page */}
            <div className="flex items-start gap-6 lg:gap-10">
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">10+</span>
                </div>
                <p className="text-xs text-muted-foreground">Countries Served</p>
              </div>
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
              {/* Infinity logo for Commitment */}
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="h-8 w-16 relative overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Commitment to Patients"
                    width={100}
                    height={100}
                    className="w-auto h-14 object-cover object-top absolute top-0 left-1/2 -translate-x-1/2"
                  />
                </div>
                <p className="text-xs text-muted-foreground whitespace-nowrap">Commitment to</p>
                <p className="text-xs text-muted-foreground -mt-1 whitespace-nowrap">Patients</p>
              </div>
            </div>

            {/* Filter text + contact button */}
            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {"Use the filters below to explore our full portfolio. Looking for something specific or can't find what you need?"}
              </p>
              <div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent group"
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
        </div>

        {/* Right: capsule image */}
        <div className="hidden lg:flex items-center justify-center relative p-8">
          <Image
            src="/products-hero.jpg"
            alt="Innovative pharmaceutical capsule with DNA technology"
            width={612}
            height={612}
            className="object-contain w-full h-auto max-h-[75vh] drop-shadow-2xl"
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
