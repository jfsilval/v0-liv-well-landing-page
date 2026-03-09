import { Skeleton } from '@/components/ui/skeleton'

export function PostCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex">
      <Skeleton className="w-1/3 min-h-[220px] rounded-none" />
      <div className="p-6 flex-1 space-y-3">
        <div className="flex gap-3">
          <Skeleton className="h-5 w-28 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-32 mt-4" />
      </div>
    </div>
  )
}

export function TableRowSkeleton() {
  return (
    <div className="px-4 py-3 flex gap-4 border-b border-border bg-muted/30">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-4 flex-1 bg-muted rounded animate-pulse" />
      ))}
    </div>
  )
}

export function CardSkeletonGrid({ count = 6, variant = 'post' }: { count?: number; variant?: 'post' | 'table' }) {
  if (variant === 'table') {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <TableRowSkeleton key={i} />
        ))}
      </>
    )
  }

  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </div>
  )
}
