import { Metadata } from "next"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from "lucide-react"
import { getPostBySlug, getPosts, resolveMediaUrl } from "@/lib/cms"
import { RichText } from "@/components/pharma-insights/rich-text"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const t = await getTranslations({ locale, namespace: 'pharmaInsights.article' })
  const post = await getPostBySlug(slug, locale)
  if (!post) return { title: t('notFoundMeta') }
  return {
    title: `${post.meta?.title || post.title} | Liv Well Pharmaceuticals`,
    description: post.meta?.description,
    openGraph: {
      title: post.meta?.title || post.title,
      description: post.meta?.description,
      images: post.heroImage?.url ? [resolveMediaUrl(post.heroImage.url)] : undefined,
    },
  }
}

function formatDate(dateString: string, locale: string) {
  const lcLocale = locale === 'es' ? 'es-ES' : 'en-US'
  return new Date(dateString).toLocaleDateString(lcLocale, {
    timeZone: "UTC", year: "numeric", month: "long", day: "numeric",
  })
}

function extractPlainText(node: any): string {
  if (!node) return ''
  if (node.type === 'text') return node.text || ''
  if (Array.isArray(node.children)) return node.children.map((c: any) => extractPlainText(c)).join(' ')
  return ''
}

function calculateReadTime(content: any): number {
  if (!content?.root) return 1
  const text = extractPlainText(content.root)
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / 200))
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug, locale } = await params
  const t = await getTranslations('pharmaInsights.article')
  const post = await getPostBySlug(slug, locale)

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-primary/10 pt-28">
          <div className="container mx-auto px-4 py-24 text-center">
            <div className="bg-card border border-border rounded-xl p-12 max-w-lg mx-auto shadow-sm">
              <h1 className="text-2xl font-bold text-foreground mb-3">{t('notFoundTitle')}</h1>
              <p className="text-muted-foreground mb-6">{t('notFoundDesc')}</p>
              <Button asChild className="bg-[#0a2351] hover:bg-[#0a2351]/90 text-white">
                <Link href="/pharma-insights">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('backButton')}
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer showPharmacovigilance={false} />
      </>
    )
  }

  const readTime = calculateReadTime(post.content)
  const authorName = post.populatedAuthors?.[0]?.name
  const heroImageUrl = post.heroImage?.url ? resolveMediaUrl(post.heroImage.url) : null

  let relatedPosts: typeof post[] = []
  try {
    const res = await getPosts({ categoryTitle: "Pharma Insights", limit: 3, locale })
    relatedPosts = res.docs.filter((p) => p.slug !== slug).slice(0, 2)
  } catch { }

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-primary/10">
        <section className="bg-[#0a2351] pt-28 pb-4 relative z-0">
          <div className="container mx-auto px-4 max-w-[900px]">
            <nav className="flex items-center gap-1.5 text-sm text-white/70 mb-8">
              <Link href="/" className="hover:text-white/80 transition-colors">{t('breadcrumbHome')}</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/pharma-insights" className="hover:text-white/80 transition-colors">{t('breadcrumbInsights')}</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/70">{post.title}</span>
            </nav>
            <Badge className="bg-transparent text-secondary border-secondary/50 px-3 py-1 mb-5">
              {t('badge')}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-balance">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt, locale)}
              </div>
              {authorName && (
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {t('byAuthor')} {authorName}
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {t('readTime', { minutes: readTime })}
              </div>
            </div>
          </div>
        </section>

        {heroImageUrl && (
          <div className="px-4 md:px-6 z-10">
    <div className="relative max-w-[900px] mx-auto h-[280px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
      <Image
        src={heroImageUrl}
        alt={post.heroImage?.alt || post.title}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 900px) 100vw, 900px"
      />
    </div>
  </div>
        )}

        <section className="py-12 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-[780px] mx-auto text-[17px] leading-[1.8] text-[#374151]">
              <RichText content={post.content} />
            </div>
          </div>
        </section>

        <section className="pb-16 bg-primary/10">
          <div className="container mx-auto px-4 max-w-[780px]">
            <hr className="border-border mb-8" />
            <Button variant="outline" asChild className="border-[#0a2351] text-[#0a2351] hover:bg-[#0a2351]/5">
              <Link href="/pharma-insights">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('backButton')}
              </Link>
            </Button>
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-foreground mb-6">{t('youMayAlsoLike')}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/pharma-insights/${related.slug}`}
                      className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all group"
                    >
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{formatDate(related.publishedAt, locale)}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer showPharmacovigilance={false} />
    </>
  )
}

