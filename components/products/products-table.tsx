import type { Product } from "@/lib/cms"
import { PackageX } from "lucide-react"
import { getTranslations } from 'next-intl/server'

export async function ProductsTable({ products }: { products: Product[] }) {
  const t = await getTranslations('products.table')

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <PackageX className="h-12 w-12 text-muted-foreground/50 mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-1">{t('noProducts')}</h3>
        <p className="text-sm text-muted-foreground">{t('adjustFilters')}</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#0a2351] text-white">
            <th className="text-center font-semibold px-3 py-3 w-[8%]">{t('atc')}</th>
            <th className="text-center font-semibold px-4 py-3 w-[16%]">{t('category')}</th>
            <th className="text-center font-semibold px-4 py-3 w-[16%]">{t('subcategory')}</th>
            <th className="text-center font-semibold px-4 py-3 w-[22%]">{t('ingredient')}</th>
            <th className="text-center font-semibold px-4 py-3 w-[22%]">{t('dosageForm')}</th>
            <th className="text-center font-semibold px-4 py-3 w-[16%]">{t('strength')}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr
              key={product.id}
              className={`border-b border-border last:border-0 transition-colors hover:bg-accent/10 ${
                i % 2 === 0 ? "bg-background" : "bg-muted/30"
              }`}
            >
              <td className="px-3 py-3 text-sm text-muted-foreground">{product.clasificacion_atc}</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{product.categoria}</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{product.sub_categoria}</td>
              <td className="px-4 py-3 text-sm text-foreground font-medium">{product.nombre}</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{product.forma_farmaceutica}</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">{product.concentraciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

