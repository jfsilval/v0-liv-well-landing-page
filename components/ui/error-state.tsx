import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ErrorState({
  message = 'Unable to load content. Please try again later.',
  retryHref = '#',
}: {
  message?: string
  retryHref?: string
}) {
  return (
    <div className="flex items-center justify-center min-h-[400px] px-4">
      <div className="bg-primary/5 border border-primary/10 rounded-xl p-12 max-w-md text-center space-y-4">
        <AlertTriangle className="h-12 w-12 text-destructive/60 mx-auto" />
        <h2 className="text-xl font-semibold text-foreground">Content temporarily unavailable</h2>
        <p className="text-sm text-muted-foreground">{message}</p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={retryHref}>Try again</Link>
        </Button>
      </div>
    </div>
  )
}
