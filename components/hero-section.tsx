"use client"

import Image from "next/image"
import { Shield, Award, Globe, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background - light grayish-blue matching nav */}
      <div className="absolute inset-0 bg-[#e8edf5]" />

      <div className="grid lg:grid-cols-2 h-[calc(100vh-5rem)] pb-4">
        {/* Left content */}
        <div className="flex items-center px-8 lg:px-16 relative z-10">
          <div className="space-y-8 max-w-xl pb-8">
            <h1 className="text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight">
              {"Delivering "}
              <span className="text-primary">Trusted Pharmaceutical Products</span>
              {" to Every Corner of the World."}
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed">
              Every person on Earth deserves access to high-quality medicines. Inspired by this vision, Liv Well
              Pharmaceuticals continues to innovate and grow, providing trusted healthcare solutions globally.
            </p>

            {/* Stats row */}
            <div className="flex items-start gap-8 pt-2">
              <div className="flex flex-col items-center text-center gap-1">
                <div className="flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-xl font-bold text-primary">10+</span>
                </div>
                <p className="text-xs text-muted-foreground">Countries Served</p>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-secondary" />
                  <span className="text-xl font-bold text-secondary">600+</span>
                </div>
                <p className="text-xs text-muted-foreground">Products</p>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-accent" />
                  <span className="text-xl font-bold text-accent">100%</span>
                </div>
                <p className="text-xs text-muted-foreground">Quality Assured</p>
              </div>
              {/* Infinity logo for Commitment */}
              <div className="flex flex-col items-center text-center gap-1">
                <div className="h-5 w-10 relative overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Commitment to Patients"
                    width={60}
                    height={60}
                    className="w-auto h-8 object-cover object-top absolute top-0 left-1/2 -translate-x-1/2"
                  />
                </div>
                <p className="text-xs text-muted-foreground">{"Commitment to\nPatients"}</p>
              </div>

              {/* Scroll indicator */}
              <div className="flex flex-col items-center gap-1 ml-auto">
                <span className="text-[9px] tracking-widest uppercase text-muted-foreground">Scroll</span>
                <ChevronDown className="h-3.5 w-3.5 animate-bounce text-muted-foreground" />
              </div>
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
      </div>
    </section>
  )
}
