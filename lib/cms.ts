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

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL ?? ""

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
  if (params?.nombre) searchParams.set("nombre", params.nombre)
  if (params?.categoria) searchParams.set("categoria", params.categoria)
  if (params?.sub_categoria) searchParams.set("sub_categoria", params.sub_categoria)
  if (params?.clasificacion_atc) searchParams.set("clasificacion_atc", params.clasificacion_atc)

  const qs = searchParams.toString()
  const url = `${CMS_URL}/api/products${qs ? `?${qs}` : ""}`

  const res = await fetch(url, { next: { revalidate: 60 } })

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`)
  }

  return res.json()
}
