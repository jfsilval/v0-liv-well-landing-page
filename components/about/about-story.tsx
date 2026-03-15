import { Globe, Package, Handshake } from "lucide-react"
import { Card } from "@/components/ui/card"
import { getTranslations } from 'next-intl/server'

export async function AboutStory() {
  const t = await getTranslations('about.story')

  const infoCards = [
    {
      icon: Globe,
      label: t('cards.globalReach.label'),
      text: t('cards.globalReach.text'),
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Package,
      label: t('cards.provenPortfolio.label'),
      text: t('cards.provenPortfolio.text'),
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: Handshake,
      label: t('cards.trustedPartnerships.label'),
      text: t('cards.trustedPartnerships.text'),
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ]

  return (
    <section className="py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {t('title')} <span className="text-primary">{t('titleHighlight')}</span>
            </h2>
            <div className="flex justify-center mb-6" aria-hidden="true">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">{t('para1')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('para2')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('para3')}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t('para4')}</p>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {infoCards.map((card) => (
                <Card
                  key={card.label}
                  className="p-6 border-l-4 hover:shadow-lg transition-shadow"
                  style={{ borderLeftColor: "var(--color-primary)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      aria-hidden="true"
                      className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center flex-shrink-0`}
                    >
                      <card.icon className={`h-6 w-6 ${card.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{card.label}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
