'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { useTransition } from 'react'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  light?: boolean
  className?: string
}

export function LanguageSwitcher({ light = false, className }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending || locale === 'en'}
        className={cn(
          'text-xs font-semibold tracking-wide px-1.5 py-0.5 rounded transition-all duration-200',
          light
            ? locale === 'en'
              ? 'text-white border border-white'
              : 'text-white/60 border border-transparent hover:text-white'
            : locale === 'en'
              ? 'text-primary border border-primary'
              : 'text-foreground/60 border border-transparent hover:text-primary'
        )}
        aria-label="Switch to English"
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
      <span className={cn('text-xs', light ? 'text-white/30' : 'text-foreground/30')}>|</span>
      <button
        onClick={() => switchLocale('es')}
        disabled={isPending || locale === 'es'}
        className={cn(
          'text-xs font-semibold tracking-wide px-1.5 py-0.5 rounded transition-all duration-200',
          light
            ? locale === 'es'
              ? 'text-white border border-white'
              : 'text-white/60 border border-transparent hover:text-white'
            : locale === 'es'
              ? 'text-primary border border-primary'
              : 'text-foreground/60 border border-transparent hover:text-primary'
        )}
        aria-label="Switch to Spanish"
        aria-pressed={locale === 'es'}
      >
        ES
      </button>
    </div>
  )
}
