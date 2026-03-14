import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default async function NotFound() {
  const t = await getTranslations('notFound')

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-primary/10 mt-28">
        <div className="flex items-center justify-center py-20 px-4">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t('title')}</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/">{t('homeButton')}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link href="/products">{t('productsButton')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer showPharmacovigilance={false} />
    </>
  )
}
