import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export function Footer({ showPharmacovigilance = true }: { showPharmacovigilance?: boolean }) {
  return (
    <footer>
      {showPharmacovigilance && (
      <div className="bg-gradient-to-r from-primary via-secondary to-accent py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Pharmacovigilance</h3>
            <p className="text-white/90 mb-4 leading-relaxed">
              If you have presented a suspected adverse reaction associated with the use of any medication of Liv Well
              Pharmaceuticals, we would appreciate sharing your report to our Pharmacovigilance team by sending an email
              to{" "}
              <a
                href="mailto:pharmacovigilance@livwellpharmaceuticals.com"
                className="text-white hover:underline font-semibold break-words inline-block"
              >
                pharmacovigilance@livwellpharmaceuticals.com
              </a>{" "}
              or through our contact form.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact us
            </Link>
          </div>
        </div>
      </div>
      )}
      {/* End of pharmacovigilance section */}

      <div className="bg-[#0a2351] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-4 pb-8 border-b border-white/20">
            <p className="text-2xl font-semibold text-balance">Quality Generics. Global Reach. Trusted Worldwide.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-8 py-6 lg:justify-items-center lg:items-center">
            {/* Company Info */}
            <div className="min-w-0 lg:justify-self-start">
              <Image
                src="/logo.png"
                alt="Liv Well Pharmaceuticals"
                width={280}
                height={160}
                className="h-36 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-white/80 leading-relaxed">
                Trusted pharmaceutical solutions<br />
                for a healthier world. Innovation,<br />
                quality, and care in every product.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#products" className="text-sm text-white/80 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-white/80 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-white/80 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Patient Information
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Healthcare Professionals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Clinical Trials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Pharmacovigilance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex justify-center items-center">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} Liv Well Pharmaceuticals. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
