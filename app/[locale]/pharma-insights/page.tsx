import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getPosts } from "@/lib/cms"
import { PharmaInsightsHero } from "@/components/pharma-insights/pharma-insights-hero"
import { PharmaInsightsContent } from "@/components/pharma-insights/pharma-insights-content"

export const metadata = {
  title: 'Pharma Insights',
  description: 'Explore the latest pharmaceutical insights, health articles, and industry news from Liv Well Pharmaceuticals.',
  openGraph: {
    title: 'Pharma Insights',
    description: 'Latest news, research, and pharmaceutical industry insights from Liv Well Pharmaceuticals.',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
    siteName: 'Liv Well Pharmaceuticals',
  },
  twitter: { card: 'summary_large_image' },
}

export default async function PharmaInsightsPage({
  searchParams,
  params,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  params: Promise<{ locale: string }>
}) {
  const [{ locale }, resolvedSearchParams] = await Promise.all([params, searchParams])
  const page = Number(resolvedSearchParams.page) || 1

  let data = null
  let error = null

  try {
    data = await getPosts({ categoryTitle: "Pharma Insights", limit: 12, page, locale })
  } catch (e) {
    error = e instanceof Error ? e.message : "An unexpected error occurred while fetching articles."
  }

  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <PharmaInsightsHero />
      <PharmaInsightsContent
        posts={data?.docs ?? []}
        totalDocs={data?.totalDocs ?? 0}
        totalPages={data?.totalPages ?? 0}
        currentPage={data?.page ?? 1}
        hasNextPage={data?.hasNextPage ?? false}
        hasPrevPage={data?.hasPrevPage ?? false}
        error={error}
      />
      <Footer showPharmacovigilance={false} />
    </main>
  )
}
