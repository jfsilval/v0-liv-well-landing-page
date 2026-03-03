import { Navigation } from "@/components/navigation"
import { Skeleton } from "@/components/ui/skeleton"

export default function PharmaInsightsLoading() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero skeleton */}
      <section className="relative pt-28 bg-[#0a2351]">
        <div className="grid lg:grid-cols-5 h-[calc(100vh-7rem)]">
          <div className="lg:col-span-3 flex flex-col justify-center px-8 lg:px-16">
            <div className="max-w-2xl space-y-5">
              <Skeleton className="h-4 w-32 bg-white/10" />
              <Skeleton className="h-12 w-3/4 bg-white/10" />
              <Skeleton className="h-5 w-full bg-white/10" />
              <Skeleton className="h-5 w-4/5 bg-white/10" />
              <div className="flex gap-3">
                <Skeleton className="h-8 w-36 rounded-full bg-white/10" />
                <Skeleton className="h-8 w-44 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 hidden lg:block p-4">
            <Skeleton className="h-full w-full rounded-xl bg-white/10" />
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          {/* Search bar */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mb-10 flex items-center gap-4">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-5 w-32" />
          </div>

          {/* 3 column card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <Skeleton className="aspect-video w-full rounded-none" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-5 w-28 rounded-full" />
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <div className="border-t border-border pt-4 mt-4">
                    <Skeleton className="h-9 w-36" />
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
