const CMS_URL =
  process.env.NEXT_PUBLIC_CMS_URL || 'https://cms-payload-livwell.vercel.app'

// ─── Helper: convierte URLs relativas del CMS a absolutas ───────────────────
export function resolveMediaUrl(url: string | null | undefined): string | null {
  if (!url) return null
  if (url.startsWith('http')) return url
  return `${CMS_URL}${url}`
}

// ─── Tipos ──────────────────────────────────────────────────────────────────
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

export type Post = {
  id: number
  title: string
  slug: string
  publishedAt: string
  heroImage?: {
    url: string
    alt?: string
    thumbnailURL?: string
    width?: number
    height?: number
  } | null
  categories?: Array<{ id: number; title: string; slug: string }>
  meta?: {
    title?: string
    description?: string
  }
  content?: any
  populatedAuthors?: Array<{ id: number; name: string }>
  _status?: string
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

// ─── Products ────────────────────────────────────────────────────────────────
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
  if (params?.nombre)
    qs.set('where[nombre][like]', params.nombre)
  if (params?.categoria)
    qs.set('where[categoria][like]', params.categoria)
  if (params?.sub_categoria)
    qs.set('where[sub_categoria][like]', params.sub_categoria)
  if (params?.clasificacion_atc)
    qs.set('where[clasificacion_atc][like]', params.clasificacion_atc)

  const res = await fetch(`${CMS_URL}/api/products?${qs}`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

// ─── Product Categories (distinct values) ────────────────────────────────────
export async function getProductCategories(): Promise<{
  categories: string[]
  subCategories: string[]
}> {
  // Fetch all products to extract unique categories and subcategories
  const res = await fetch(`${CMS_URL}/api/products?limit=1000`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) throw new Error('Failed to fetch product categories')
  
  const data: CMSList<Product> = await res.json()
  
  const categoriesSet = new Set<string>()
  const subCategoriesSet = new Set<string>()
  
  data.docs.forEach((product) => {
    if (product.categoria) categoriesSet.add(product.categoria)
    if (product.sub_categoria) subCategoriesSet.add(product.sub_categoria)
  })
  
  return {
    categories: Array.from(categoriesSet).sort(),
    subCategories: Array.from(subCategoriesSet).sort(),
  }
}

// ─── Posts (lista) ───────────────────────────────────────────────────────────
export async function getPosts(params?: {
  page?: number
  limit?: number
  categoryTitle?: string
}): Promise<CMSList<Post>> {
  const qs = new URLSearchParams()
  qs.set('limit', String(params?.limit ?? 12))
  qs.set('page', String(params?.page ?? 1))
  qs.set('depth', '2')
  qs.set('sort', '-publishedAt')
  if (params?.categoryTitle)
    qs.set('where[categories.title][equals]', params.categoryTitle)

  const res = await fetch(`${CMS_URL}/api/posts?${qs}`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) throw new Error('Failed to fetch posts')

  const data: CMSList<Post> = await res.json()

  // Resolver URLs relativas de imágenes
  data.docs = data.docs.map((post) => ({
    ...post,
    heroImage: post.heroImage
      ? { ...post.heroImage, url: resolveMediaUrl(post.heroImage.url) ?? '' }
      : null,
  }))

  return data
}

// ─── Post individual por slug ────────────────────────────────────────────────
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const qs = new URLSearchParams()
  qs.set('where[slug][equals]', slug)
  qs.set('depth', '2')
  qs.set('limit', '1')

  const res = await fetch(`${CMS_URL}/api/posts?${qs}`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return null

  const data: CMSList<Post> = await res.json()
  const post = data.docs?.[0] ?? null

  if (post?.heroImage?.url) {
    post.heroImage.url = resolveMediaUrl(post.heroImage.url) ?? ''
  }

  return post
}


