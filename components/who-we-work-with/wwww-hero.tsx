"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useTranslations } from 'next-intl'

export function WwwwHero() {
  const t = useTranslations('whoWeWorkWith.hero')

  return (
    <section className="relative overflow-hidden mt-28 bg-primary/10">
      <div className="relative h-[calc(100vh-7rem)]">
        <Image
          src="/who-we-work-with-hero.jpg"
          alt="Global pharmaceutical partnerships"
          fill
          sizes="100vw"
          className="object-cover mix-blend-multiply opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2351]/80 via-[#0a2351]/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex items-start pt-16">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary">
                {t('label')}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                {t('headline1')}<br />
                <span className="text-secondary">{t('headline2')}</span>
              </h1>
              <div className="border-l-[3px] border-secondary/50 pl-5">
                <p className="text-lg lg:text-xl font-semibold text-white">
                  {t('description')}
                </p>
              </div>
              <p className="text-base text-white/70 leading-relaxed max-w-xl">
                {t('extended')}
              </p>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80">
          <span className="text-xs tracking-widest uppercase">{t('scrollText')}</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
