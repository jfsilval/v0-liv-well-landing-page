"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Award, Globe, ChevronDown, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-primary/10" />

      <div className="relative grid lg:grid-cols-2 min-h-[calc(100vh-7rem)]">
        {/* Left content */}
        <div className="flex flex-col h-full px-8 lg:px-16 pt-10 pb-8 relative z-10">
          {/* Zone 1: Title */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {t('delivering')}{" "}
              <span className="text-primary">{t('headline')}</span>
              {" "}{t('toEveryCorner')}
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Zone 2: Stats */}
          <div className="my-auto flex flex-row flex-nowrap justify-center gap-3 md:gap-8 w-full">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-9 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">{t('stats.countries.value')}</span>
                </div>
              </div>
              <p className="text-xs text-foreground">{t('stats.countries.label')}</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-9 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-secondary" />
                  <span className="text-2xl font-bold text-emerald-700">{t('stats.products.value')}</span>
                </div>
              </div>
              <p className="text-xs text-foreground">{t('stats.products.label')}</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-9 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-teal-700">{t('stats.quality.value')}</span>
                </div>
              </div>
              <p className="text-xs text-foreground">{t('stats.quality.label')}</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-9 overflow-hidden flex items-start justify-center">
                <Image
                  src="/logo.png"
                  alt="Liv Well Pharmaceuticals"
                  width={60}
                  height={60}
                  className="h-16 w-auto object-top"
                />
              </div>
              <p className="text-xs text-foreground">{t('stats.commitment.label')}</p>
            </div>
          </div>

          {/* Zone 3: Buttons */}
          <div className="flex flex-row justify-center gap-4 pt-2 w-full">
            <Button size="lg" className="text-white hover:opacity-90 group" style={{ backgroundColor: '#0a2351' }} asChild>
              <Link href="/products">
                {t('exploreButton')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-[oklch(0.30_0.18_260)] hover:bg-primary/10 bg-transparent"
              asChild
            >
              <a href="#contact">{t('contactButton')}</a>
            </Button>
          </div>
        </div>

        {/* Right side - Image */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-10">
              <h2 className="text-3xl font-bold text-white mb-3">{t('imageOverlay.title')}</h2>
              <p className="text-white/90 text-base leading-relaxed max-w-md">
                {t('imageOverlay.text')}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div aria-hidden="true" className="absolute bottom-4 left-[46%] -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1">
          <span className="text-[9px] tracking-widest uppercase text-foreground">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-foreground" />
        </div>
      </div>
    </section>
  )
}
