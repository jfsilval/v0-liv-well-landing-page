"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ProductsFilters({
  nombre,
  categoria,
  subCategoria,
  clasificacionAtc,
  limit,
  hasFilters,
}: {
  nombre?: string
  categoria?: string
  subCategoria?: string
  clasificacionAtc?: string
  limit: number
  hasFilters: boolean
}) {
  const router = useRouter()

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const params = new URLSearchParams()

      const nombre = formData.get("nombre") as string
      const categoria = formData.get("categoria") as string
      const sub_categoria = formData.get("sub_categoria") as string
      const clasificacion_atc = formData.get("clasificacion_atc") as string
      const limit = formData.get("limit") as string

      if (nombre) params.set("nombre", nombre)
      if (categoria) params.set("categoria", categoria)
      if (sub_categoria) params.set("sub_categoria", sub_categoria)
      if (clasificacion_atc) params.set("clasificacion_atc", clasificacion_atc)
      if (limit) params.set("limit", limit)
      params.set("page", "1")

      router.push(`/products?${params.toString()}`)
    },
    [router]
  )

  const handleLimitChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const form = e.currentTarget.closest("form")
      if (form) form.requestSubmit()
    },
    []
  )

  const handleClear = useCallback(() => {
    router.push("/products")
  }, [router])

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="bg-primary/5 border border-primary/10 rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="space-y-1.5">
            <Label htmlFor="nombre" className="text-sm font-medium">Active Ingredient</Label>
            <Input
              id="nombre"
              name="nombre"
              placeholder="e.g. Paracetamol"
              defaultValue={nombre ?? ""}
              className="bg-white border-primary/15"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="categoria" className="text-sm font-medium">Category</Label>
            <Input
              id="categoria"
              name="categoria"
              placeholder="e.g. Analgesics"
              defaultValue={categoria ?? ""}
              className="bg-white border-primary/15"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="sub_categoria" className="text-sm font-medium">Subcategory</Label>
            <Input
              id="sub_categoria"
              name="sub_categoria"
              placeholder="e.g. Non-opioid"
              defaultValue={subCategoria ?? ""}
              className="bg-white border-primary/15"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="clasificacion_atc" className="text-sm font-medium">ATC Classification</Label>
            <Input
              id="clasificacion_atc"
              name="clasificacion_atc"
              placeholder="e.g. N02BE01"
              defaultValue={clasificacionAtc ?? ""}
              className="bg-white border-primary/15"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>

          {hasFilters && (
            <Button type="button" variant="outline" onClick={handleClear}>
              <X className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          )}

          <div className="ml-auto flex items-center gap-2">
            <Label htmlFor="limit" className="text-sm text-muted-foreground whitespace-nowrap">Records per page:</Label>
            <select
              id="limit"
              name="limit"
              defaultValue={limit}
              onChange={handleLimitChange}
              className="h-9 rounded-md border border-primary/15 bg-white px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  )
}
