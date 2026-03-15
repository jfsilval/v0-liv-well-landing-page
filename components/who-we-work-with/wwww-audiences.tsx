"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { useTranslations } from 'next-intl'

export function WwwwAudiences() {
  const t = useTranslations('whoWeWorkWith.audiences')
  const audiences = t.raw('items') as Array<{
    headline: string
    body: string[]
    signals: string[]
  }>

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 bg-[#0a2351] relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              {t('title')} <span className="text-secondary">{t('titleHighlight')}</span>
            </h2>
            <div className="flex justify-center mb-4" aria-hidden="true">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-sm text-white/70 max-w-2xl mx-auto">
              {t('intro')}
            </p>
          </div>

          <div className="space-y-3">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 border-l-4 border-l-secondary rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/[0.07]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <h3 className="text-sm md:text-base font-bold text-white pr-4">
                    {audience.headline}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="space-y-3 mb-5">
                      {audience.body.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-sm text-white/70 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-white/10">
                      {audience.signals.map((signal, sIndex) => (
                        <div key={sIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                          <span className="text-sm text-white/70">{signal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

