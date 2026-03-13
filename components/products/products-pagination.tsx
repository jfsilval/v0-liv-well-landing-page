"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

function buildHref(
  searchParams: { [key: string]: string | string[] | undefined },
  page: number
) {
  const sp = new URLSearchParams()
  for (const [key, value] of Object.entries(searchParams)) {
    if (key === "page") continue
    if (typeof value === "string" && value) sp.set(key, value)
  }
  sp.set("page", String(page))
  return `/products?${sp.toString()}`
}

function getVisiblePages(current: number, total: number): (number | "...")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)

  const pages: (number | "...")[] = []

  if (current <= 3) {
    pages.push(1, 2, 3, 4, "...", total)
  } else if (current >= total - 2) {
    pages.push(1, "...", total - 3, total - 2, total - 1, total)
  } else {
    pages.push(1, "...", current - 1, current, current + 1, "...", total)
  }

  return pages
}

export function ProductsPagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
  searchParams,
}: {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const router = useRouter()

  const navigateTo = useCallback(
    (page: number) => {
      router.push(buildHref(searchParams, page), { scroll: false })
      document.getElementById("products-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    },
    [router, searchParams]
  )

  if (totalPages <= 1) return null

  const pages = getVisiblePages(currentPage, totalPages)

  return (
    <nav aria-label="Products pagination" className="flex items-center justify-center gap-1.5 mt-8">
      <Button
        variant="outline"
        size="sm"
        disabled={!hasPrevPage}
        onClick={() => hasPrevPage && navigateTo(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </Button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} className="px-2 text-muted-foreground text-sm">...</span>
        ) : (
          <Button
            key={p}
            variant={p === currentPage ? "default" : "outline"}
            size="sm"
            className={p === currentPage ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
            disabled={p === currentPage}
            onClick={() => p !== currentPage && navigateTo(p as number)}
          >
            {p}
          </Button>
        )
      )}

      <Button
        variant="outline"
        size="sm"
        disabled={!hasNextPage}
        onClick={() => hasNextPage && navigateTo(currentPage + 1)}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </nav>
  )
}

