"use client"

import { useTranslations } from "next-intl"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AccordionSection() {
  const t = useTranslations('faq')
  const items = t.raw('items') as Array<{ question: string; answer: string }>

  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-balance">
              {t('title')} <span className="text-primary">{t('titleHighlight')}</span>
            </h2>
            <div className="flex justify-center mb-6" aria-hidden="true">
              <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
