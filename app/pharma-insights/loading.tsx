import { Navigation } from "@/components/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import { PostCardSkeleton } from "@/components/ui/card-skeleton"

export default function PharmaInsightsLoading() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero skeleton - full width dark */}
      <section className="relative pt-28 bg-[#0a2351]">
        <div className="h-[calc(100vh-7rem)] flex items-start pt-16">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-3xl space-y-5">
              <Skeleton className="h-4 w-32 bg-white/10" />
              <Skeleton className="h-12 w-3/4 bg-white/10" />
              <Skeleton className="h-12 w-2/3 bg-white/10" />
              <Skeleton className="h-5 w-full bg-white/10" />
              <Skeleton className="h-5 w-4/5 bg-white/10" />
              <div className="flex gap-3">
                <Skeleton className="h-8 w-36 rounded-full bg-white/10" />
                <Skeleton className="h-8 w-44 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content skeleton - horizontal cards */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          {/* Search bar */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-10 flex items-center gap-4">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-5 w-32" />
          </div>

          {/* Post card skeletons */}
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <PostCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
