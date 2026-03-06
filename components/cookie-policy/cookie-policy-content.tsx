"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "what-are-cookies", title: "1. What Are Cookies?" },
  { id: "how-we-use-cookies", title: "2. How We Use Cookies" },
  { id: "your-choices", title: "3. Your Choices Regarding Cookies" },
  { id: "third-party-cookies", title: "4. Third-Party Cookies" },
  { id: "cookie-duration", title: "5. Cookie Duration and Data Retention" },
  { id: "international-users", title: "6. International Users" },
  { id: "changes", title: "7. Changes to This Cookie Policy" },
  { id: "contact", title: "Contact Us" },
]

export function CookiePolicyContent() {
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -70% 0px" }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-[240px_1fr] gap-12 max-w-6xl mx-auto">
          {/* Table of Contents - Desktop */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Contents
              </h2>
              <ul className="space-y-2 border-l border-border">
                {sections.map(({ id, title }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={cn(
                        "block w-full text-left text-sm pl-4 py-1.5 border-l-2 -ml-[1px] transition-colors",
                        activeSection === id
                          ? "border-primary text-primary font-medium"
                          : "border-transparent text-muted-foreground hover:text-primary hover:border-primary/50"
                      )}
                    >
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <article className="max-w-4xl prose prose-sm">
            {/* Introduction */}
            <div id="intro" className="scroll-mt-28">
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                This Cookie Policy explains what cookies are and how Liv Well Pharmaceuticals LLC-FZ, a company established in Dubai, United Arab Emirates, uses them on its informational website https://www.livwellpharmaceuticals.com (the &quot;Site&quot;). The Site is strictly for business-to-business (B2B) professional use. This policy is governed by UAE Federal Decree-Law No. 45/2021 on the Protection of Personal Data (PDPL). For further information on how we process your personal data, please review our Privacy Policy, which is incorporated herein by reference.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 1 */}
            <div id="what-are-cookies" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">1. What Are Cookies?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Cookies are small pieces of text used to store information on web browsers. Cookies are used to store and receive identifiers and other information on computers, phones, and other devices. Other technologies, including data we store on your web browser or device, identifiers associated with your device, and other software, are used for similar purposes. In this policy, we refer to all of these technologies as &quot;cookies&quot;. Please note that our Site does not use local storage, session storage, or device fingerprinting beyond standard cookie functionality.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 2 */}
            <div id="how-we-use-cookies" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">2. How We Use Cookies</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar technologies solely to ensure the proper functioning of our informational Site and to understand how professional visitors interact with our content in an aggregated, anonymized manner. We do not use cookies for advertising, behavioral targeting, or cross-site tracking. The specific types of technologies used are:
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">1. Essential Technologies:</span> These are strictly necessary for the Site to function (e.g., secure form submission via HTTPS, load balancing, security). They do not store personally identifiable information and are typically session-based.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">2. Performance Analytics (Vercel Analytics):</span> We use Vercel Analytics, a privacy-friendly measurement tool, to count visits and traffic sources. This technology does not use persistent cookies for tracking, does not collect personal data (IP addresses are anonymized), and does not track users across different websites. All information collected is aggregated and anonymous. We do not combine this analytics data with personal information submitted via our contact forms.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We do not use Functionality Cookies, Targeting Cookies, or advertising cookies on this Site. If this changes in the future, we will update this policy and, where required by applicable law (including UAE Federal Decree-Law No. 45/2021), seek your prior consent.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 3 */}
            <div id="your-choices" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">3. Your Choices Regarding Cookies</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Since we use only Essential Technologies and privacy-friendly Analytics (Vercel) that do not require consent under most jurisdictions, we do not display a cookie consent banner. However, you can manage or disable cookies and local storage through your browser settings at any time. Instructions for major browsers (Chrome, Firefox, Safari, Edge) are available via their respective support pages. Please note that disabling Essential Technologies may prevent the contact form from functioning properly. If you disable Analytics, we will not be able to track Site usage statistics, but your browsing experience will otherwise remain unaffected.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 4 */}
            <div id="third-party-cookies" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">4. Third-Party Cookies</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The only third-party service provider that processes data via technologies on our Site is Vercel Inc. (provider of Vercel Analytics). Vercel Inc. is based in the United States. Data collected via Vercel Analytics is anonymized and processed in accordance with Vercel&apos;s Privacy Policy (https://vercel.com/legal/privacy-policy). We do not allow advertising networks, ad servers, or social media plugins to place cookies or tracking technologies on your device. By using the Site, you acknowledge that anonymized analytics data may be transferred to and processed in the United States, subject to appropriate safeguards.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 5 */}
            <div id="cookie-duration" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">5. Cookie Duration and Data Retention</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Essential Cookies are typically session cookies and expire when you close your browser. Performance/Analytics Cookies may persist for up to 24 months depending on your browser settings and the specific cookie. Any personal data incidentally collected via cookies (e.g., IP address in server logs) is retained only for as long as necessary to fulfill the purposes outlined in this Policy or as required by UAE law, typically not exceeding 12 months unless a longer period is mandated for security or regulatory purposes. For information on retention of data submitted via contact forms, please refer to our Privacy Policy.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 6 */}
            <div id="international-users" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">6. International Users</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The Site is accessible globally, but cookie practices described herein are implemented in compliance with UAE Federal Decree-Law No. 45/2021. Users accessing the Site from jurisdictions with specific cookie consent requirements (e.g., the European Economic Area under GDPR, California under CCPA/CPRA) should note that we apply a high standard of transparency and data minimization globally. If you believe our cookie practices conflict with mandatory local law, please contact us so we can evaluate appropriate accommodations.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 7 */}
            <div id="changes" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">7. Changes to This Cookie Policy</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We may update our Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices. We will notify you of material changes by posting the new Cookie Policy on this page and updating the &quot;Effective Date&quot; at the top. For significant changes affecting how we process personal data, we may provide additional notice via email or a prominent notice on the Site, consistent with UAE Federal Decree-Law No. 45/2021. Your continued use of the Site after such changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Contact */}
            <div id="contact" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">Contact Us</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                If you have questions, comments, or requests regarding this Cookie Policy, our use of cookies, or if you wish to exercise your data protection rights related to cookie-derived information, please contact us at:{" "}
                <a 
                  href="mailto:info@livwellpharmaceuticals.com" 
                  className="text-primary hover:underline font-medium"
                >
                  info@livwellpharmaceuticals.com
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
