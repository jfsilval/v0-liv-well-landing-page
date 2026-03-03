export type Product = {
  id: number
  nombre: string
  categoria: string
  sub_categoria: string
  clasificacion_atc: string
  activo_en_catalogo: string
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

  // Always filter by active on catalog
  let whereIndex = 0
  searchParams.set(`where[and][${whereIndex}][activo_en_catalogo][equals]`, "Yes")
  whereIndex++

  // User-provided filters using Payload CMS "where" syntax
  if (params?.nombre) {
    searchParams.set(`where[and][${whereIndex}][nombre][contains]`, params.nombre)
    whereIndex++
  }
  if (params?.categoria) {
    searchParams.set(`where[and][${whereIndex}][categoria][contains]`, params.categoria)
    whereIndex++
  }
  if (params?.sub_categoria) {
    searchParams.set(`where[and][${whereIndex}][sub_categoria][contains]`, params.sub_categoria)
    whereIndex++
  }
  if (params?.clasificacion_atc) {
    searchParams.set(`where[and][${whereIndex}][clasificacion_atc][contains]`, params.clasificacion_atc)
    whereIndex++
  }

  const qs = searchParams.toString()
  const url = `${CMS_URL}/api/products${qs ? `?${qs}` : ""}`

  const res = await fetch(url, { next: { revalidate: 60 } })

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`)
  }

  return res.json()
}
