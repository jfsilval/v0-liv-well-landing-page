import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookiePolicyContent } from "@/components/cookie-policy/cookie-policy-content"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  return {
    title: locale === 'es' ? 'Política de Cookies' : 'Cookie Policy',
    description: locale === 'es'
      ? 'Conozca cómo Liv Well Pharmaceuticals utiliza cookies y tecnologías similares en nuestro sitio web.'
      : 'Learn how Liv Well Pharmaceuticals uses cookies and similar technologies on our website.',
    robots: { index: false },
  }
}

export default async function CookiePolicyPage({ params }: PageProps) {
  const { locale } = await params
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <section className="bg-primary/10 mt-28 py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4 font-sans">
            {locale === 'es' ? 'Política de Cookies' : 'Cookie Policy'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {locale === 'es' ? 'Fecha de vigencia: 30 de septiembre de 2024' : 'Effective Date: September 30th, 2024'}
          </p>
        </div>
      </section>
      <CookiePolicyContent locale={locale} />
      <Footer showPharmacovigilance={false} />
    </main>
  )
}

