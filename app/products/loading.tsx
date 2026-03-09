import { Navigation } from "@/components/navigation"
import { TableRowSkeleton, Skeleton } from "@/components/ui/skeleton"

export default function ProductsLoading() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero skeleton */}
      <section className="relative overflow-hidden mt-28 bg-[#0a2351]">
        <div className="relative py-20 lg:py-28">
          <div className="container mx-auto px-8 lg:px-16 space-y-6">
            <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
            <div className="h-12 w-96 max-w-full bg-white/10 rounded animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full max-w-2xl bg-white/10 rounded animate-pulse" />
              <div className="h-4 w-3/4 max-w-xl bg-white/10 rounded animate-pulse" />
            </div>
            <div className="h-10 w-52 bg-white/10 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Filters skeleton */}
          <div className="bg-card border border-border rounded-xl shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                  <div className="h-9 w-full bg-muted rounded-md animate-pulse" />
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <div className="h-9 w-24 bg-muted rounded-md animate-pulse" />
            </div>
          </div>

          {/* Info text skeleton */}
          <div className="h-4 w-48 bg-muted rounded animate-pulse mb-4" />

          {/* Table skeleton */}
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            {/* Header */}
            <div className="bg-[#0a2351] px-4 py-3 flex gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-4 flex-1 bg-white/10 rounded animate-pulse" />
              ))}
            </div>
            {/* Rows */}
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRowSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
