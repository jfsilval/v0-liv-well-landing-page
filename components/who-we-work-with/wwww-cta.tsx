import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export async function WwwwCta() {
  const t = await getTranslations('whoWeWorkWith.cta')

  return (
    <section className="py-16 bg-[#0a2351] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {t('title')} <span className="text-secondary">{t('titleHighlight')}</span>
          </h2>
          <div className="flex justify-center mb-10">
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>

          <div className="space-y-5 mb-10">
            <p className="text-base text-white/70 leading-relaxed">{t('para1')}</p>
            <p className="text-base text-white/70 leading-relaxed">{t('para2')}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white hover:bg-white/90 text-[#0a2351]" asChild>
              <Link href="/#contact">
                {t('submitButton')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="bg-transparent border-white/60 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/#products">
                {t('portfolioButton')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
