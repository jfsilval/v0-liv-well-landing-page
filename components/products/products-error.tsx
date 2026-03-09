import { ErrorState } from '@/components/ui/error-state'

export function ProductsError({ message }: { message: string }) {
  return <ErrorState message={message} retryHref="/products" />
}
