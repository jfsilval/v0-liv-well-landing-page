"use client"

import { useRouter } from "next/navigation"
import { useCallback, useState, useRef, useEffect } from "react"
import { Search, X, ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function ProductsFilters({
  nombre,
  categoria,
  subCategoria,
  clasificacionAtc,
  limit,
  hasFilters,
  categories = [],
  subCategories = [],
  categoryToSubcategories = {},
}: {
  nombre?: string
  categoria?: string
  subCategoria?: string
  clasificacionAtc?: string
  limit: number
  hasFilters: boolean
  categories?: string[]
  subCategories?: string[]
  categoryToSubcategories?: Record<string, string[]>
}) {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState(categoria ?? "")
  const [selectedSubCategory, setSelectedSubCategory] = useState(subCategoria ?? "")
  const [comboboxOpen, setComboboxOpen] = useState(false)
  const [comboboxSearch, setComboboxSearch] = useState("")
  const comboboxRef = useRef<HTMLDivElement>(null)

  const availableSubcategories = selectedCategory
    ? categoryToSubcategories[selectedCategory] || []
    : subCategories

  const filteredSubcategories = comboboxSearch
    ? availableSubcategories.filter((sub) =>
        sub.toLowerCase().includes(comboboxSearch.toLowerCase())
      )
    : availableSubcategories

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target as Node)) {
        setComboboxOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (selectedCategory && selectedSubCategory) {
      const validSubs = categoryToSubcategories[selectedCategory] || []
      if (!validSubs.includes(selectedSubCategory)) {
        setSelectedSubCategory("")
      }
    }
  }, [selectedCategory, selectedSubCategory, categoryToSubcategories])

  // ─── Helper: build URL from current form + overrides ─────────────────────
  const buildParams = useCallback(
    (
      form: HTMLFormElement,
      overrides: { categoria?: string; sub_categoria?: string }
    ) => {
      const formData = new FormData(form)
      const params = new URLSearchParams()
      const nombreVal = formData.get("nombre") as string
      const atcVal = formData.get("clasificacion_atc") as string
      const limitVal = formData.get("limit") as string
      const catVal = "categoria" in overrides ? overrides.categoria : selectedCategory
      const subVal = "sub_categoria" in overrides ? overrides.sub_categoria : selectedSubCategory

      if (nombreVal) params.set("nombre", nombreVal)
      if (catVal) params.set("categoria", catVal)
      if (subVal) params.set("sub_categoria", subVal)
      if (atcVal) params.set("clasificacion_atc", atcVal)
      if (limitVal) params.set("limit", limitVal)
      params.set("page", "1")
      return params
    },
    [selectedCategory, selectedSubCategory]
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const params = buildParams(e.currentTarget, {})
      router.push(`/products?${params.toString()}`, { scroll: false })
    },
    [router, buildParams]
  )

  const handleLimitChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const form = e.currentTarget.closest("form")
      if (form) form.requestSubmit()
    },
    []
  )

  // Fix: build URL directly with newCategory — no setTimeout, no stale closure
  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newCategory = e.target.value
      const newSubCategory = newCategory !== selectedCategory ? "" : selectedSubCategory
      setSelectedCategory(newCategory)
      setSelectedSubCategory(newSubCategory)

      const form = e.currentTarget.closest("form")
      if (!form) return
      const params = buildParams(form, {
        categoria: newCategory,
        sub_categoria: newSubCategory,
      })
      router.push(`/products?${params.toString()}`, { scroll: false })
    },
    [router, selectedCategory, selectedSubCategory, buildParams]
  )

  // Fix: build URL directly with new value — no setTimeout, no stale closure
  const handleSubcategorySelect = useCallback(
    (value: string) => {
      setSelectedSubCategory(value)
      setComboboxOpen(false)
      setComboboxSearch("")

      const form = document.querySelector("form")
      if (!form) return
      const params = buildParams(form, { sub_categoria: value })
      router.push(`/products?${params.toString()}`, { scroll: false })
    },
    [router, buildParams]
  )

  const handleClear = useCallback(() => {
    setSelectedCategory("")
    setSelectedSubCategory("")
    setComboboxSearch("")
    router.push("/products", { scroll: false })
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
            <select
              id="categoria"
              name="categoria"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="flex h-9 w-full rounded-md border border-primary/15 bg-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="sub_categoria" className="text-sm font-medium">
              Subcategory {selectedCategory && (
                <span className="text-muted-foreground font-normal">({availableSubcategories.length})</span>
              )}
            </Label>
            <div ref={comboboxRef} className="relative">
              <button
                type="button"
                onClick={() => setComboboxOpen(!comboboxOpen)}
                className="flex h-9 w-full items-center justify-between rounded-md border border-primary/15 bg-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <span className={selectedSubCategory ? "text-foreground" : "text-muted-foreground"}>
                  {selectedSubCategory || "All Subcategories"}
                </span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>

              {comboboxOpen && (
                <div className="absolute z-50 mt-1 w-full rounded-md border border-border bg-white shadow-lg">
                  <div className="p-2 border-b border-border">
                    <Input
                      placeholder="Search subcategories..."
                      value={comboboxSearch}
                      onChange={(e) => setComboboxSearch(e.target.value)}
                      className="h-8 text-sm"
                      autoFocus
                    />
                  </div>
                  <div className="max-h-60 overflow-y-auto p-1">
                    <button
                      type="button"
                      onClick={() => handleSubcategorySelect("")}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-muted",
                        !selectedSubCategory && "bg-muted"
                      )}
                    >
                      {!selectedSubCategory && <Check className="h-4 w-4" />}
                      <span className={!selectedSubCategory ? "font-medium" : ""}>All Subcategories</span>
                    </button>
                    {filteredSubcategories.length > 0 ? (
                      filteredSubcategories.map((sub) => (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => handleSubcategorySelect(sub)}
                          className={cn(
                            "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-muted text-left",
                            selectedSubCategory === sub && "bg-muted"
                          )}
                        >
                          {selectedSubCategory === sub && <Check className="h-4 w-4" />}
                          <span className={selectedSubCategory === sub ? "font-medium" : ""}>{sub}</span>
                        </button>
                      ))
                    ) : (
                      <p className="px-2 py-4 text-sm text-muted-foreground text-center">No subcategories found</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <input type="hidden" name="sub_categoria" value={selectedSubCategory} />
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


