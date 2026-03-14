"use client"

import { useTranslations } from "next-intl"

export function InfoCardsSection() {
  const t = useTranslations('vision')

  return (
    <section className="relative py-24 bg-[#0a2351] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8" aria-hidden="true">
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            {t('sectionTitle')} <span className="text-secondary">{t('sectionTitleHighlight')}</span>
          </h2>

          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t('displayLine1')}<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(110deg, #06FAD4, #3AF398, #3180C3)" }}
              >
                {t('displayLine2')}<br />
                {t('displayLine3')}
              </span>
            </h2>

            <p className="text-base md:text-lg text-white/90 leading-relaxed mt-8">
              {t('description')}
            </p>
          </div>

          <div className="flex justify-center mt-10" aria-hidden="true">
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
