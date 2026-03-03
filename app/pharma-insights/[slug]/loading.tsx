import { Skeleton } from "@/components/ui/skeleton"
import { Navigation } from "@/components/navigation"

export default function ArticleLoading() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header skeleton */}
        <section className="bg-[#0a2351] pt-28 pb-12">
          <div className="container mx-auto px-4 max-w-[900px]">
            <Skeleton className="h-4 w-60 bg-white/10 mb-8" />
            <Skeleton className="h-6 w-32 bg-white/10 rounded-full mb-5" />
            <Skeleton className="h-10 w-full bg-white/10 mb-3" />
            <Skeleton className="h-10 w-3/4 bg-white/10 mb-6" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-32 bg-white/10" />
              <Skeleton className="h-4 w-24 bg-white/10" />
              <Skeleton className="h-4 w-20 bg-white/10" />
            </div>
          </div>
        </section>

        {/* Image skeleton */}
        <div className="container mx-auto px-4 max-w-[900px]">
          <Skeleton className="w-full h-[400px] rounded-b-xl" />
        </div>

        {/* Content skeleton */}
        <div className="container mx-auto px-4 max-w-[800px] py-12 space-y-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-[90%]" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-[75%]" />
          <Skeleton className="h-5 w-[60%]" />
        </div>
      </main>
    </>
  )
}
