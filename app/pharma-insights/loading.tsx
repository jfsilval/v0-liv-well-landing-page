import { Navigation } from "@/components/navigation"
import { Skeleton } from "@/components/ui/skeleton"

export default function PharmaInsightsLoading() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero skeleton */}
      <section className="relative mt-28 bg-[#0a2351]">
        <div className="h-[calc(100vh-7rem)] flex items-start pt-16">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="max-w-3xl space-y-6">
              <Skeleton className="h-4 w-40 bg-white/10" />
              <Skeleton className="h-12 w-full bg-white/10" />
              <Skeleton className="h-12 w-3/4 bg-white/10" />
              <Skeleton className="h-6 w-full bg-white/10" />
              <Skeleton className="h-16 w-5/6 bg-white/10" />
              <div className="flex gap-3">
                <Skeleton className="h-8 w-32 rounded-full bg-white/10" />
                <Skeleton className="h-8 w-40 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          {/* Search bar */}
          <div className="bg-card border border-border rounded-xl p-5 mb-8 flex items-center gap-4">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-5 w-32" />
          </div>

          {/* Card skeletons */}
          <div className="grid gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-52 md:h-auto min-h-[200px]">
                    <Skeleton className="h-full w-full rounded-none" />
                  </div>
                  <div className="md:w-2/3 p-6 space-y-3">
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-24 mt-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
