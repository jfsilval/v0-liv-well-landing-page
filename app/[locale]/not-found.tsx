import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-primary/10 mt-28">
        <div className="flex items-center justify-center py-20 px-4">
          <div className="text-center space-y-8">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Page Not Found</h1>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/">Go Home</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer showPharmacovigilance={false} />
    </>
  )
}
