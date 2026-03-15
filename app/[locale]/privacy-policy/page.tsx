import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PrivacyPolicyContent } from "@/components/privacy-policy/privacy-policy-content"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  return {
    title: locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy',
    description: locale === 'es'
      ? 'Lea la Política de Privacidad de Liv Well Pharmaceuticals para entender cómo recopilamos, usamos y protegemos su información personal.'
      : 'Read the Liv Well Pharmaceuticals Privacy Policy to understand how we collect, use, and protect your personal information.',
    robots: { index: false },
  }
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <section className="bg-primary/10 mt-28 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4 font-sans">
            {locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {locale === 'es'
              ? 'Fecha de vigencia: 30 de septiembre de 2024 · Última actualización: 30 de septiembre de 2024'
              : 'Effective Date: September 30th, 2024 · Last Updated: September 30th, 2024'}
          </p>
        </div>
      </section>
      <PrivacyPolicyContent locale={locale} />
      <Footer showPharmacovigilance={false} />
    </main>
  )
}
