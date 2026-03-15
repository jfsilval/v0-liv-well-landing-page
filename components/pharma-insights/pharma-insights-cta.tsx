"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useTranslations } from 'next-intl'

export function PharmaInsightsCTA() {
  const t = useTranslations('pharmaInsights.cta')
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-[#0a2351] rounded-2xl p-10 lg:p-14 text-center">
          <Mail className="h-10 w-10 text-secondary mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 text-balance">
            {t('title')}
          </h2>
          <p className="text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
            {t('description')}
          </p>
          {submitted ? (
            <div className="bg-secondary/20 border border-secondary/30 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-secondary font-semibold">{t('successTitle')}</p>
              <p className="text-white/80 text-sm mt-1">{t('successMessage')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t('placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 flex-1"
              />
              <Button
                type="submit"
                className="bg-white text-[#0a2351] hover:bg-white/90 font-semibold shrink-0"
              >
                {t('button')}
              </Button>
            </form>
          )}
          <p className="text-white/70 text-xs mt-4">{t('noSpam')}</p>
        </div>
      </div>
    </section>
  )
}

