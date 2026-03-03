import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getProducts } from "@/lib/cms"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductsFilters } from "@/components/products/products-filters"
import { ProductsTable } from "@/components/products/products-table"
import { ProductsPagination } from "@/components/products/products-pagination"
import { ProductsError } from "@/components/products/products-error"

export const metadata = {
  title: "Products | Liv Well Pharmaceuticals",
  description:
    "Browse our comprehensive range of high-quality pharmaceutical products. Over 600 products including essential generics, biosimilars, and specialty care solutions.",
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams

  const page = Number(params.page) || 1
  const limit = Number(params.limit) || 20
  const nombre = typeof params.nombre === "string" ? params.nombre : undefined
  const categoria = typeof params.categoria === "string" ? params.categoria : undefined
  const sub_categoria = typeof params.sub_categoria === "string" ? params.sub_categoria : undefined
  const clasificacion_atc = typeof params.clasificacion_atc === "string" ? params.clasificacion_atc : undefined

  const hasFilters = !!(nombre || categoria || sub_categoria || clasificacion_atc)

  let data = null
  let error = null

  try {
    data = await getProducts({ page, limit, nombre, categoria, sub_categoria, clasificacion_atc })
  } catch (e) {
    error = e instanceof Error ? e.message : "An unexpected error occurred while fetching products."
  }

  const from = data ? (data.page - 1) * limit + 1 : 0
  const to = data ? Math.min(data.page * limit, data.totalDocs) : 0

  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductsHero />

      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <ProductsFilters
            nombre={nombre}
            categoria={categoria}
            subCategoria={sub_categoria}
            clasificacionAtc={clasificacion_atc}
            limit={limit}
            hasFilters={hasFilters}
          />

          {/* Results */}
          {error ? (
            <ProductsError message={error} />
          ) : data ? (
            <>
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{from}–{to}</span> of{" "}
                  <span className="font-semibold text-foreground">{data.totalDocs}</span> products
                </p>
              </div>

              <ProductsTable products={data.docs} />

              <ProductsPagination
                currentPage={data.page}
                totalPages={data.totalPages}
                hasNextPage={data.hasNextPage}
                hasPrevPage={data.hasPrevPage}
                searchParams={params}
              />
            </>
          ) : null}
        </div>
      </section>

      <Footer showPharmacovigilance={false} />
    </main>
  )
}
