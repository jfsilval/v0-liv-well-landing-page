"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Award, Globe, ChevronDown, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      {/* Background - primary at 10% opacity */}
      <div className="absolute inset-0 bg-primary/10" />

      <div className="relative grid lg:grid-cols-2 min-h-[calc(100vh-7rem)]">
        {/* Left content - 3-zone layout */}
        <div className="flex flex-col h-full px-8 lg:px-16 pt-10 pb-8 relative z-10">
          {/* Zone 1: TOP - title + paragraph */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {"Delivering "}
              <span className="text-primary">Trusted Pharmaceutical Products</span>
              {" to Every Corner of the World."}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Liv Well Pharmaceuticals, we are committed to making high-quality pharmaceutical
              products accessible worldwide. Driven by innovation and a patient-first approach, we
              deliver trusted healthcare solutions across borders, ensuring every community has the
              care it deserves.
            </p>
          </div>

          {/* Zone 2: MIDDLE - stats centered via my-auto */}
          <div className="my-auto flex flex-row flex-wrap justify-center gap-8 w-full">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold text-primary">10+</span>
              </div>
              <p className="text-xs text-muted-foreground">Countries Served</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-secondary" />
                <span className="text-3xl font-bold text-secondary">600+</span>
              </div>
              <p className="text-xs text-muted-foreground">Products</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-accent" />
                <span className="text-3xl font-bold text-accent">100%</span>
              </div>
              <p className="text-xs text-muted-foreground">Quality Assured</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 min-w-[80px]">
              <div className="flex items-center justify-center gap-2">
                <div className="h-10 w-20 overflow-hidden flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Liv Well infinity symbol"
                    width={120}
                    height={120}
                    className="w-auto h-20 object-top object-cover"
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Commitment to Patients</p>
            </div>
          </div>

          {/* Zone 3: BOTTOM - buttons */}
          <div className="flex flex-row justify-center gap-4 w-full max-w-xl">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Explore Our Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>

        {/* Right side - Framed image */}
        <div className="relative hidden lg:block h-full">
          <div className="absolute inset-4 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-scientist-lab.jpg"
              alt="Pharmaceutical scientist in modern laboratory"
              fill
              sizes="50vw"
              className="object-cover object-center"
              priority
            />
            {/* Gradient overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-3xl font-bold text-white mb-3">Innovation in Healthcare</h3>
              <p className="text-white/90 text-base leading-relaxed max-w-md">
                Leading the way in pharmaceutical excellence with cutting-edge research and development.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator - bottom of left panel area */}
        <div className="absolute bottom-4 left-[46%] -translate-x-1/2 z-20 flex flex-col items-center gap-1">
          <span className="text-[9px] tracking-widest uppercase text-muted-foreground">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
