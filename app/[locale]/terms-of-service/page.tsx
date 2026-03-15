import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TermsOfServiceContent } from "@/components/terms-of-service/terms-of-service-content"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  return {
    title: locale === 'es' ? 'Términos de Servicio' : 'Terms of Service',
    description: locale === 'es'
      ? 'Lea los Términos de Servicio que rigen el uso del sitio web de Liv Well Pharmaceuticals.'
      : 'Read the Terms of Service governing the use of the Liv Well Pharmaceuticals website.',
    robots: { index: false },
  }
}

export default async function TermsOfServicePage({ params }: PageProps) {
  const { locale } = await params
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Navigation />
      <section className="bg-primary/10 mt-28 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4 font-sans">
            {locale === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {locale === 'es' ? 'Fecha de vigencia: 30 de septiembre de 2024' : 'Effective Date: September 30th, 2024'}
          </p>
        </div>
      </section>
      <TermsOfServiceContent locale={locale} />
      <Footer showPharmacovigilance={false} />
    </main>
  )
}
