"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, FileText, ArrowRight, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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
            <Link href="/pharma-insights">Retry</Link>
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
          <FileText className="h-16 w-16 text-muted-foreground/40 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-foreground mb-3">Pharma Insights content coming soon</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our editorial team is preparing in-depth analysis for industry professionals.
          </p>
        </div>
      </section>
    )
  }

  const from = (currentPage - 1) * 12 + 1
  const to = Math.min(currentPage * 12, totalDocs)

  return (
    <section className="py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Search bar + counter */}
        <div className="bg-card border border-border rounded-xl shadow-sm p-5 mb-8 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 bg-primary/5 border-primary/10"
            />
          </div>
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            <span className="font-semibold text-foreground">{totalDocs}</span> articles available
          </p>
        </div>

        {/* Articles grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <Search className="h-10 w-10 text-muted-foreground/40 mx-auto mb-4" />
            <p className="text-muted-foreground">No articles match your search.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-l-4 hover:border-l-secondary transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image / placeholder */}
                  <div className="md:w-1/3 relative h-52 md:h-auto min-h-[200px]">
                    {post.heroImage?.url ? (
                      <Image
                        src={post.heroImage.url}
                        alt={post.heroImage.alt ?? post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <FileText className="h-12 w-12 text-primary/30" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">{formatDate(post.publishedAt)}</p>
                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      {post.meta?.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {post.meta.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-4">
                      <a
                        href={`${cmsUrl}/posts/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                      >
                        Read full article
                        <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && !query && (
          <div className="flex flex-col items-center gap-4 mt-10">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{from}–{to}</span> of{" "}
              <span className="font-semibold text-foreground">{totalDocs}</span> articles
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={!hasPrevPage}
                asChild={hasPrevPage}
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

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Button
                  key={p}
                  variant={p === currentPage ? "default" : "outline"}
                  size="sm"
                  className={p === currentPage ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" : ""}
                  asChild
                >
                  <Link href={`/pharma-insights?page=${p}`}>{p}</Link>
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                disabled={!hasNextPage}
                asChild={hasNextPage}
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
