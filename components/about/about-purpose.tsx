import { getTranslations } from 'next-intl/server'

export async function AboutPurpose() {
  const t = await getTranslations('about.purpose')

  return (
    <section className="py-24 bg-[#0a2351] relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              {t('title')} <span className="text-secondary">{t('titleHighlight')}</span>
            </h2>
            <div className="flex justify-center mb-6" aria-hidden="true">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-lg text-white/70">{t('subtitle')}</p>
          </div>

          <div className="mb-16 py-10 px-8 border-l-4 border-secondary bg-white/5 rounded-r-lg">
            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed text-balance italic">
              {'"'}{t('quote')}{'"'}
            </p>
          </div>

          <div className="space-y-6 max-w-4xl">
            <p className="text-lg text-white/80 leading-relaxed">{t('para1')}</p>
            <p className="text-lg text-white/80 leading-relaxed">{t('para2')}</p>
            <p className="text-lg text-white/80 leading-relaxed">{t('para3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

