import { Shield, Heart, Eye, Handshake, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { getTranslations } from 'next-intl/server'

const iconData = [
  { icon: Heart, color: "text-primary", bg: "bg-primary/10" },
  { icon: Shield, color: "text-secondary", bg: "bg-secondary/10" },
  { icon: Eye, color: "text-accent", bg: "bg-accent/10" },
  { icon: Handshake, color: "text-primary", bg: "bg-primary/10" },
  { icon: Clock, color: "text-secondary", bg: "bg-secondary/10" },
]

export async function AboutValues() {
  const t = await getTranslations('about.values')
  const rawItems = t.raw('items') as Array<{ title: string; text: string }>
  const values = rawItems.map((item, i) => ({ ...iconData[i], ...item }))

  return (
    <section className="py-12 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              {t('title')} <span className="text-primary">{t('titleHighlight')}</span>
            </h2>
            <div className="flex justify-center mb-4" aria-hidden="true">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {values.slice(0, 3).map((value) => (
              <Card
                key={value.title}
                className="p-4 hover:shadow-xl transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-primary"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    aria-hidden="true"
                    className={`w-9 h-9 rounded-lg ${value.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <value.icon className={`h-4 w-4 ${value.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{value.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {values.slice(3).map((value) => (
              <Card
                key={value.title}
                className="p-4 hover:shadow-xl transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-primary"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    aria-hidden="true"
                    className={`w-9 h-9 rounded-lg ${value.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <value.icon className={`h-4 w-4 ${value.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{value.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
