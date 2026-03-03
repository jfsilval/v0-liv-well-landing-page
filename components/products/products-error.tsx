import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProductsError({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <AlertTriangle className="h-12 w-12 text-destructive/60 mb-4" />
      <h3 className="text-lg font-semibold text-foreground mb-1">Something went wrong</h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-md">{message}</p>
      <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
        <Link href="/products">Try Again</Link>
      </Button>
    </div>
  )
}
