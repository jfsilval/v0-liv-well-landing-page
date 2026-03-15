"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useTranslations } from 'next-intl'

export function AboutHero() {
  const t = useTranslations('about.hero')

  return (
    <section className="relative overflow-hidden mt-28 bg-[#0a2351]">
      <div className="relative h-[calc(100vh-7rem)]">
        <Image
          src="/about-hero.jpg"
          alt="Global pharmaceutical distribution from Dubai to the world"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2351]/80 via-[#0a2351]/40 to-transparent" />
        <div className="absolute inset-0 z-10 flex items-start pt-16">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
                {t('label')}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white text-balance">
                {t('headline1')} <span className="text-secondary">{t('headline2')}</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">{t('scrollText')}</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
