"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Award, Globe, ChevronDown, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      {/* Background - primary at 10% opacity */}
      <div className="absolute inset-0 bg-primary/10" />

      <div className="relative grid lg:grid-cols-2 h-[calc(100vh-7rem)]">
        {/* Left content */}
        <div className="flex flex-col justify-between px-8 lg:px-16 relative z-10 py-4">
          {/* Top: heading + paragraph */}
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              {"Delivering "}
              <span className="text-primary">Trusted Pharmaceutical Products</span>
              {" to Every Corner of the World."}
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed">
              At Liv Well Pharmaceuticals, we are committed to making high-quality pharmaceutical products accessible
              worldwide. Driven by innovation and a patient-first approach, we deliver trusted healthcare solutions
              across borders, ensuring every community has the care it deserves.
            </p>
          </div>

          {/* Bottom: stats + buttons */}
          <div className="max-w-xl space-y-5">
            {/* Stats row */}
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

            {/* Action Buttons */}
            <div className="flex flex-row gap-4">
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
