import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WwwwCta() {
  return (
    <section className="py-16 bg-[#0a2351] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Work With <span className="text-secondary">Us</span>
          </h2>
          <div className="flex justify-center mb-10">
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>

          <div className="space-y-5 mb-10">
            <p className="text-base text-white/70 leading-relaxed">
              We approach every enquiry with the same commitment: to understand what you need and respond with
              transparency about what we can deliver — because a partnership built on accurate expectations serves both
              sides far better than one built on promises we cannot keep.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              We welcome enquiries from organisations at any stage — whether you are evaluating new supply options,
              responding to an urgent need, or simply exploring what we can offer. And if the product you are looking for
              is not listed in our current portfolio, do not hesitate to reach out. Our team will review your requirement
              and let you know honestly whether we can help.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
              <Link href="/#contact">
                Submit Your Requirement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:text-secondary" asChild>
              <Link href="/#products">
                Explore Our Portfolio
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom divider matching footer container width */}
        <div className="border-b border-white/20 mt-8" />
      </div>
    </section>
  )
}
