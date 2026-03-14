import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Image from "next/image"
import { Mail } from "lucide-react"

export async function Footer({ showPharmacovigilance = true }: { showPharmacovigilance?: boolean }) {
  const t = await getTranslations('footer')
  const pharmText = t('pharmacovigilance.text')
  const email = 'pharmacovigilance@livwellpharmaceuticals.com'
  const [textBefore, textAfter] = pharmText.split(email)

  return (
    <footer>
      {showPharmacovigilance && (
        <div className="bg-gradient-to-r from-primary via-secondary to-accent py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-white">{t('pharmacovigilance.title')}</h2>
              <p className="text-white/90 mb-4 leading-relaxed">
                {textBefore}
                <a
                  href={`mailto:${email}`}
                  className="text-white hover:underline font-semibold break-words inline-block"
                >
                  {email}
                </a>
                {textAfter}
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Mail className="h-4 w-4" />
                {t('pharmacovigilance.contactLink')}
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#0a2351] text-white">
        <div className="container mx-auto px-4 pb-12">
          <div className="text-center pt-8 pb-8 border-t border-b border-white/20">
            <p className="text-2xl font-semibold text-balance">{t('tagline')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-8 py-6 lg:justify-items-center lg:items-center">
            {/* Company Info */}
            <div className="min-w-0 lg:justify-self-start flex flex-col items-center text-center">
              <Image
                src="/logo.png"
                alt="Liv Well Pharmaceuticals"
                width={280}
                height={160}
                sizes="(max-width: 768px) 200px, 252px"
                className="h-36 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-white/80 leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="font-semibold mb-4">{t('quickLinks.title')}</h2>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-white/80 hover:text-white transition-colors">{t('quickLinks.aboutUs')}</Link></li>
                <li><Link href="/who-we-work-with" className="text-sm text-white/80 hover:text-white transition-colors">{t('quickLinks.whoWeWorkWith')}</Link></li>
                <li><Link href="/#contact" className="text-sm text-white/80 hover:text-white transition-colors">{t('quickLinks.contact')}</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="font-semibold mb-4">{t('resources.title')}</h2>
              <ul className="space-y-2">
                <li><Link href="/pharma-insights" className="text-sm text-white/80 hover:text-white transition-colors">{t('resources.pharmaInsights')}</Link></li>
                <li><Link href="/products" className="text-sm text-white/80 hover:text-white transition-colors">{t('resources.productsCatalog')}</Link></li>
                <li><Link href="/#contact" className="text-sm text-white/80 hover:text-white transition-colors">{t('resources.pharmacovigilance')}</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="font-semibold mb-4">{t('legal.title')}</h2>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-sm text-white/80 hover:text-white transition-colors">{t('legal.privacyPolicy')}</Link></li>
                <li><Link href="/terms-of-service" className="text-sm text-white/80 hover:text-white transition-colors">{t('legal.termsOfService')}</Link></li>
                <li><Link href="/cookie-policy" className="text-sm text-white/80 hover:text-white transition-colors">{t('legal.cookiePolicy')}</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex justify-center items-center">
            <p className="text-sm text-white/80">
              {t('copyright', { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

