import { getTranslations } from 'next-intl/server'

export async function WwwwOpening() {
  const t = await getTranslations('whoWeWorkWith.opening')

  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {t('title')} <span className="text-primary">{t('titleHighlight')}</span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-base text-muted-foreground">{t('subtitle')}</p>
          </div>

          <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
            <p>{t('para1')}</p>
            <p>{t('para2')}</p>
            <p>{t('para3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
