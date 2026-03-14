import Image from "next/image"
import { Shield, Award, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTranslations } from "next-intl/server"

export async function ProductsHero() {
  const t = await getTranslations('products.hero')

  return (
    <section className="relative overflow-hidden mt-28 bg-primary/10">
      <div className="relative grid lg:grid-cols-2 min-h-[calc(100vh-7rem)]">
        <div className="flex flex-col h-full px-8 lg:px-16 pt-10 pb-8 relative z-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-800">
              {t('label')}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-primary">
              {t('headline1')}{" "}
              <span className="text-teal-700">{t('headline2')}</span>
            </h1>
            <div className="border-l-[3px] border-secondary/50 pl-5">
              <p className="text-lg lg:text-xl font-semibold text-foreground leading-snug">
                {t('description')}
              </p>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              {t('extended')}
            </p>
          </div>

          <div className="my-auto flex flex-row justify-center gap-10 w-full">
            <div className="flex flex-col items-center text-center gap-1">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-teal-700" />
                <span className="text-3xl font-bold text-teal-700">{t('stats.products.value')}</span>
              </div>
              <p className="text-xs text-foreground">{t('stats.products.label')}</p>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-700" />
                <span className="text-3xl font-bold text-green-700">{t('stats.quality.value')}</span>
              </div>
              <p className="text-xs text-foreground">{t('stats.quality.label')}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 pb-8 w-full">
            <p className="text-sm text-muted-foreground text-center max-w-lg">
              {t('ctaText')}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="/#contact">
                {t('contactButton')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block h-full">
          <div className="absolute inset-4 rounded-xl overflow-hidden shadow-2xl bg-[#0a2351]">
            <Image
              src="/products-hero.jpg"
              alt="Innovative pharmaceutical capsule with DNA technology"
              fill
              sizes="50vw"
              className="object-cover object-[57%_center]"
              priority
            />
          </div>
        </div>

        <div className="absolute bottom-4 left-[46%] -translate-x-1/2 z-20 flex flex-col items-center gap-1" aria-hidden="true">
          <span className="text-[9px] tracking-widest uppercase text-muted-foreground">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}

