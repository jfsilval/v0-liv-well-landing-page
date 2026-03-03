"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  FileText,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/cms"

interface PharmaInsightsContentProps {
  posts: Post[]
  totalDocs: number
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
  error: string | null
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function PharmaInsightsContent({
  posts,
  totalDocs,
  totalPages,
  currentPage,
  hasNextPage,
  hasPrevPage,
  error,
}: PharmaInsightsContentProps) {
  const [query, setQuery] = useState("")
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL ?? ""

  const filteredPosts = query
    ? posts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
    : posts

  // Error state
  if (error) {
    return (
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button asChild>
            <Link href="/pharma-insights">Try again</Link>
          </Button>
        </div>
      </section>
    )
  }

  // Empty state
  if (posts.length === 0) {
    return (
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <div className="bg-card border border-border rounded-xl p-10 shadow-sm">
            <FileText className="h-14 w-14 text-muted-foreground/40 mx-auto mb-5" />
            <h2 className="text-2xl font-bold text-foreground mb-3">Pharma Insights Coming Soon</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our editorial team is preparing in-depth content for industry professionals. Check back soon.
            </p>
          </div>
        </div>
      </section>
    )
  }

  const from = (currentPage - 1) * 12 + 1
  const to = Math.min(currentPage * 12, totalDocs)

  // Pagination page numbers (max 5 visible)
  const getPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages: (number | "...")[] = []
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages)
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
    } else {
      pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages)
    }
    return pages
  }

  return (
    <section className="py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Search bar + counter */}
        <div className="bg-primary/5 border border-primary/10 rounded-xl shadow-sm p-5 mb-10 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles by title or topic..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 bg-white border-primary/15"
            />
          </div>
          <Button
            type="button"
            className="bg-[#0a2351] hover:bg-[#0a2351]/90 text-white shrink-0"
            onClick={() => {}}
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            <span className="font-semibold text-foreground">{totalDocs}</span> articles available
          </p>
        </div>

        {/* Articles - horizontal cards */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <Search className="h-10 w-10 text-muted-foreground/40 mx-auto mb-4" />
            <p className="text-muted-foreground">No articles match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col w-full"
              >
                {/* Image */}
                <div className="relative aspect-video shrink-0">
                  {post.heroImage?.url ? (
                    <Image
                      src={post.heroImage.url}
                      alt={post.heroImage.alt ?? post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a2351] to-[#0f3060] flex items-center justify-center">
                      <FileText className="h-12 w-12 text-white/30" />
                    </div>
                  )}
                </div>

                {/* Content - 2/3 */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                      Pharma Insights
                    </Badge>
                    <p className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</p>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {post.meta?.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
                      {post.meta.description}
                    </p>
                  )}

                  <div className="mt-auto">
                    <a
                      href={`${cmsUrl}/posts/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/btn"
                    >
                      {"Read full article"}
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && !query && (
          <div className="flex flex-col items-center gap-4 mt-12">
            <p className="text-sm text-muted-foreground">
              {"Showing "}
              <span className="font-semibold text-foreground">{from}–{to}</span>
              {" of "}
              <span className="font-semibold text-foreground">{totalDocs}</span>
              {" articles"}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={!hasPrevPage}
                asChild={hasPrevPage}
                className="border-primary/20"
              >
                {hasPrevPage ? (
                  <Link href={`/pharma-insights?page=${currentPage - 1}`}>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Link>
                ) : (
                  <span>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </span>
                )}
              </Button>

              {getPageNumbers().map((p, i) =>
                p === "..." ? (
                  <span key={`ellipsis-${i}`} className="px-2 text-muted-foreground">...</span>
                ) : (
                  <Button
                    key={p}
                    variant={p === currentPage ? "default" : "outline"}
                    size="sm"
                    className={p === currentPage ? "bg-[#0a2351] text-white hover:bg-[#0a2351]/90" : "border-primary/20"}
                    asChild
                  >
                    <Link href={`/pharma-insights?page=${p}`}>{p}</Link>
                  </Button>
                )
              )}

              <Button
                variant="outline"
                size="sm"
                disabled={!hasNextPage}
                asChild={hasNextPage}
                className="border-primary/20"
              >
                {hasNextPage ? (
                  <Link href={`/pharma-insights?page=${currentPage + 1}`}>
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                ) : (
                  <span>
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
