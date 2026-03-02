const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://cms-payload-livwell.vercel.app'

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
}

export async function getProducts(params?: {
  page?: number
  limit?: number
  nombre?: string
  categoria?: string
  sub_categoria?: string
  clasificacion_atc?: string
}): Promise<CMSList<Product>> {
  const qs = new URLSearchParams()
  qs.set('limit', String(params?.limit ?? 20))
  qs.set('page', String(params?.page ?? 1))
  if (params?.nombre)          qs.set('where[nombre][like]', params.nombre)
  if (params?.categoria)       qs.set('where[categoria][like]', params.categoria)
  if (params?.sub_categoria)   qs.set('where[sub_categoria][like]', params.sub_categoria)
  if (params?.clasificacion_atc) qs.set('where[clasificacion_atc][like]', params.clasificacion_atc)

  const res = await fetch(`${CMS_URL}/api/products?${qs}`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}
