export type Product = {
  id: number
  nombre: string
  categoria: string
  sub_categoria: string
  clasificacion_atc: string
  activo: boolean
  forma_farmaceutica: string
  concentraciones: string
}

export type CMSList<T> = {
  docs: T[]
  totalDocs: number
  totalPages: number
  page: number
  hasNextPage: boolean
  hasPrevPage: boolean
  nextPage: number | null
  prevPage: number | null
}

export type Post = {
  id: string
  title: string
  slug: string
  publishedAt: string
  heroImage?: { url: string; alt?: string } | null
  categories?: Array<{ id: string; title: string }>
  meta?: { description?: string }
}

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL ?? ""

export async function getPosts(params?: {
  page?: number
  limit?: number
  categoryTitle?: string
}): Promise<CMSList<Post>> {
  const searchParams = new URLSearchParams()

  if (params?.page) searchParams.set("page", String(params.page))
  if (params?.limit) searchParams.set("limit", String(params.limit))
  if (params?.categoryTitle) {
    searchParams.set("where[categories.title][equals]", params.categoryTitle)
  }

  const qs = searchParams.toString()
  const url = `${CMS_URL}/api/posts${qs ? `?${qs}` : ""}`

  const res = await fetch(url, { next: { revalidate: 60 } })

  if (!res.ok) {
    const body = await res.text().catch(() => "")
    console.log("[v0] CMS posts error:", res.status, body)
    throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`)
  }

  return res.json()
}

export async function getProducts(params?: {
  page?: number
  limit?: number
  nombre?: string
  categoria?: string
  sub_categoria?: string
  clasificacion_atc?: string
}): Promise<CMSList<Product>> {
  const searchParams = new URLSearchParams()

  if (params?.page) searchParams.set("page", String(params.page))
  if (params?.limit) searchParams.set("limit", String(params.limit))

  // Always filter by active products only
  searchParams.set("where[activo][equals]", "true")

  // User-provided filters
  if (params?.nombre) {
    searchParams.set("where[nombre][contains]", params.nombre)
  }
  if (params?.categoria) {
    searchParams.set("where[categoria][contains]", params.categoria)
  }
  if (params?.sub_categoria) {
    searchParams.set("where[sub_categoria][contains]", params.sub_categoria)
  }
  if (params?.clasificacion_atc) {
    searchParams.set("where[clasificacion_atc][contains]", params.clasificacion_atc)
  }

  const qs = searchParams.toString()
  const url = `${CMS_URL}/api/products${qs ? `?${qs}` : ""}`

  console.log("[v0] Fetching products from:", url)

  const res = await fetch(url, { next: { revalidate: 60 } })

  if (!res.ok) {
    const body = await res.text().catch(() => "")
    console.log("[v0] CMS error response:", res.status, body)
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`)
  }

  return res.json()
}
