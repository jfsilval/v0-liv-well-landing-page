"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Globe, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      {/* Background - full width matching menu */}
      <div className="absolute inset-0 bg-primary/10" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="grid lg:grid-cols-2 h-[calc(100vh-7rem)] pb-4">
        {/* Left content */}
        <div className="flex items-center px-8 lg:px-16 relative z-10">
          <div className="space-y-8 max-w-xl pb-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Delivering <span className="text-primary">Trusted Pharmaceutical Products</span> to Every Corner of the World.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every person on Earth deserves access to high-quality medicines. Inspired by this vision, Liv Well
              Pharmaceuticals continues to innovate and grow, providing trusted healthcare solutions globally.
            </p>

            {/* Stats + Logo - moved up */}
            <div className="grid grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">10+</span>
                </div>
                <p className="text-xs text-muted-foreground">Countries Served</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-secondary" />
                  <span className="text-2xl font-bold text-secondary">600+</span>
                </div>
                <p className="text-xs text-muted-foreground">Products</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-accent">100%</span>
                </div>
                <p className="text-xs text-muted-foreground">Quality Assured</p>
              </div>
              {/* Company infinity symbol only - cropped to hide text */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="h-6 overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Liv Well Pharmaceuticals"
                    width={80}
                    height={80}
                    className="w-auto h-10 object-cover object-top"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Commitment to Patients</p>
              </div>
            </div>

            {/* Buttons - moved to bottom, centered */}
            <div className="flex flex-row justify-center gap-4 pt-2">
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

        {/* Right side - Framed image with uniform ~1cm border on all sides */}
        <div className="relative hidden lg:block h-full">
          <div className="absolute inset-4 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/modern-pharmaceutical-laboratory-with-scientist-ex.jpg"
              alt="Modern pharmaceutical laboratory innovation"
              className="w-full h-full object-cover object-center"
            />
            {/* Transparent gradient overlay with text */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-3xl font-bold text-white mb-3">Innovation in Healthcare</h3>
              <p className="text-white/90 text-base leading-relaxed max-w-md">
                Leading the way in pharmaceutical excellence with cutting-edge research and development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - aligned to right edge of left panel */}
      <div className="absolute bottom-4 z-10 flex flex-col items-center gap-1 left-[46%]">
        <span className="text-[9px] tracking-widest uppercase text-muted-foreground">Scroll</span>
        <ChevronDown className="h-3.5 w-3.5 animate-bounce text-muted-foreground" />
      </div>
    </section>
  )
}
