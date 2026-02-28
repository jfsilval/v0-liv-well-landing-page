"use client"

import { Card } from "@/components/ui/card"
import { Target, Shield, Users, Globe2, Award, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Your Trusted Global Partner in <span className="text-primary">Generic Medicines</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a leading international pharmaceutical company specialized in the development, production and
            worldwide distribution of high-quality generic medicines.
          </p>
        </div>

        <div className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Our Purpose</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To guarantee that essential, life-saving treatments reach healthcare systems and patients in every
                  corner of the planet, always meeting the most rigorous international quality and regulatory standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">World-Class Quality Standards</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every medicine that leaves our facilities is manufactured in state-of-the-art plants certified under
                  EU-GMP, WHO-GMP and other major global standards.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    600+ molecules across 400+ presentations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    800+ active sanitary registrations worldwide
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Certified in EU, USA, Middle East, Europe, UK and more
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Globe2 className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Therapeutic Coverage</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We supply essential medicines across multiple therapeutic areas, allowing us to respond quickly and
                  reliably to diverse healthcare needs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Oncology and cardiology treatments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Infectious diseases and CNS medications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Diabetes and chronic-care medicines
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-16">
          <Card className="p-10 bg-gradient-to-br from-accent/5 to-primary/5 border-accent">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">A Strategic Partner, Not Just a Supplier</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    What truly sets us apart is our partner-focused approach. We become a strategic ally that
                    understands the specific regulatory, logistical and budgetary challenges of each country and offers
                    flexible, efficient and fully traceable solutions.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Proven Pharmaceutical Quality</h4>
                    <p className="text-sm text-muted-foreground">Meeting the highest international standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Robust Global Supply Chain</h4>
                    <p className="text-sm text-muted-foreground">Reliable and fully traceable distribution</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Deep Regulatory Expertise</h4>
                    <p className="text-sm text-muted-foreground">Speeding up product registration and market entry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Long-Term Partnerships</h4>
                    <p className="text-sm text-muted-foreground">Built on transparency and mutual success</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Our Global Impact</h3>
            <p className="text-white/90">
              We are proud to be the trusted bridge connecting high-standard generic medicines with healthcare systems
              worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">600+</div>
              <div className="text-white/90">Molecules</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">400+</div>
              <div className="text-white/90">Presentations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">800+</div>
              <div className="text-white/90">Sanitary Registrations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/90">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
