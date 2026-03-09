import Image from "next/image"
import Link from "next/link"
import { Shield, Award, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden mt-28 bg-primary/10">
      <div className="relative grid lg:grid-cols-2 min-h-[calc(100vh-7rem)]">
        {/* Left content - flex col h-full for 3-zone layout */}
        <div className="flex flex-col h-full px-8 lg:px-16 pt-10 pb-8 relative z-10">
          {/* Top: label + heading + blockquote + paragraph */}
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-800">
              Product Portfolio
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-primary">
              {"Quality, proven, and globally accessible — "}
              <span className="text-teal-700">{"that's our standard."}</span>
            </h1>

            {/* Mid-statement with left border accent */}
            <div className="border-l-[3px] border-secondary/50 pl-5">
              <p className="text-lg lg:text-xl font-semibold text-foreground leading-snug">
                {"Our catalog spans essential generics, specialty care, therapeutic treatments, and consumer wellness solutions."}
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              {"Thoughtfully assembled to support health ministries, distributors, importers, and care providers in delivering effective treatments where they're needed most."}
            </p>
          </div>

          {/* Stats - bigger and centered */}
          <div className="my-auto flex flex-row justify-center gap-10 w-full">
            <div className="flex flex-col items-center text-center gap-1">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-teal-700" />
                <span className="text-3xl font-bold text-teal-700">600+</span>
              </div>
              <p className="text-xs text-foreground">Products</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-700" />
                <span className="text-3xl font-bold text-green-700">100%</span>
              </div>
              <p className="text-xs text-foreground">Quality Assured</p>
            </div>
          </div>

          {/* Filter text + button grouped at bottom */}
          <div className="flex flex-col items-center gap-3 pb-8 w-full">
            <p className="text-sm text-muted-foreground text-center max-w-lg">
              Use the filters below to explore our full portfolio. Looking for something specific or can't find what you need?
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="/#contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Framed image matching home page pattern */}
        <div className="relative hidden lg:block h-full">
          <div className="absolute inset-4 rounded-xl overflow-hidden shadow-2xl bg-[#0a2351]">
            <Image
              src="/products-hero.jpg"
              alt="Innovative pharmaceutical capsule with DNA technology"
              fill
              sizes="50vw"
              className="object-cover object-[57%_center]"
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
