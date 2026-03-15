import { Shield, Package, Zap, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"
import { getTranslations } from 'next-intl/server'

const iconData = [
  { icon: Shield, color: "text-primary", bg: "bg-primary/10" },
  { icon: Package, color: "text-teal-700", bg: "bg-teal-100" },
  { icon: Zap, color: "text-lime-700", bg: "bg-lime-100" },
  { icon: Globe, color: "text-primary", bg: "bg-primary/10" },
]

export async function WwwwReasons() {
  const t = await getTranslations('whoWeWorkWith.reasons')
  const rawItems = t.raw('items') as Array<{ title: string; body: string }>
  const reasons = rawItems.map((item, i) => ({ ...iconData[i], ...item }))

  return (
    <section className="py-12 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {t('title')} <span className="text-primary">{t('titleHighlight')}</span>
            </h2>
            <div className="flex justify-center mb-4" aria-hidden="true">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Card
                  key={index}
                  className="p-5 hover:shadow-xl transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-primary hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      aria-hidden="true"
                      className={`w-10 h-10 rounded-lg ${reason.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`h-5 w-5 ${reason.color}`} />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{reason.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.body}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
