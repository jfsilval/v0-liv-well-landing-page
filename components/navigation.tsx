"use client"

import { useState, useEffect } from "react"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Search, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "HOME", href: "/" },
    { id: "about", label: "ABOUT US", href: "/about" },
    { id: "clients", label: "WHO WE WORK WITH", href: "/who-we-work-with" },
    { id: "health", label: "PHARMA INSIGHTS", href: "/pharma-insights" },
    { id: "products", label: "PRODUCTS", href: "/products" },
    { id: "contact", label: "CONTACT", href: "/#contact" },
  ]

  const getIsActive = (item: { id: string; href: string }) => {
    if (item.id === "home") return pathname === "/"
    if (item.href.startsWith("/") && !item.href.includes("#")) return pathname.startsWith(item.href)
    return false
  }

  const isArticlePage = pathname.startsWith("/pharma-insights/") && pathname !== "/pharma-insights"
  const hasHeroBg = pathname === "/" || pathname === "/products" || pathname.startsWith("/pharma-insights")
  const showWhiteText = isArticlePage && !isScrolled

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/10 backdrop-blur-md shadow-md"
          : hasHeroBg
            ? "bg-transparent"
            : "bg-primary/10",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Liv Well Pharmaceuticals"
              width={364}
              height={145}
              className={cn("h-32 w-auto transition-all duration-300", showWhiteText && "brightness-0 invert")}
              priority
            />
          </Link>

          {/* Desktop Horizontal Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-all duration-300 pb-1 border-b-2",
                  showWhiteText
                    ? getIsActive(item)
                      ? "text-white border-white"
                      : "text-white/80 border-transparent hover:text-white hover:border-white/50"
                    : getIsActive(item)
                      ? "text-primary border-primary"
                      : "text-foreground/80 border-transparent hover:text-primary hover:border-primary/50",
                )}
              >
                {item.label}
              </Link>
            ))}
            <button className={cn(
              "transition-all duration-300",
              showWhiteText
                ? "text-white/80 hover:text-white"
                : "text-foreground/80 hover:text-primary"
            )} aria-label="Search">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden pb-4 border-t border-border/30">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "text-sm font-semibold tracking-wide py-2 px-4 rounded-lg transition-all duration-200",
                    getIsActive(item)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
