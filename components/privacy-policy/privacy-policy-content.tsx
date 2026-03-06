"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "use-of-information", title: "2. Use of Your Information" },
  { id: "disclosure", title: "3. Disclosure of Your Information" },
  { id: "tracking", title: "4. Tracking Technologies" },
  { id: "security", title: "5. Security of Your Information" },
  { id: "international-transfer", title: "6. International Transfer" },
  { id: "eligibility", title: "7. Eligibility and Age Requirement" },
  { id: "data-rights", title: "8. Your Data Protection Rights" },
  { id: "contact", title: "Contact Us" },
]

export function PrivacyPolicyContent() {
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
                Liv Well Pharmaceuticals LLC-FZ (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website http://www.livwellpharmaceuticals.com (the &quot;Site&quot;), including any data you may provide through the Site. This Policy applies to all visitors, users, and others who access the Site.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &quot;Last Updated&quot; date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 1 */}
            <div id="information-we-collect" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">1. Information We Collect</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">Personal Data:</span> Personally identifiable information, such as your name, email address, telephone number, and company details that you voluntarily provide to us when you submit inquiries via our contact forms, email communications, or other interactive features of the Site. As our website is strictly informational and does not support user registration or commercial transactions, we collect personal data solely for the purpose of facilitating business-to-business (B2B) communication and responding to your professional inquiries.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">Derivative Data:</span> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">Data from Third Parties:</span> Information from third parties, such as partners, analytics providers, or regulatory counterparts, when shared in the context of legitimate business inquiries. Please note that we do not actively collect sensitive health data or patient-identifiable information. In the event that pharmacovigilance-related information is voluntarily submitted through our contact channels, such data will be processed strictly for regulatory compliance purposes, anonymized or pseudonymized where feasible, and handled with enhanced confidentiality safeguards in accordance with UAE Federal Decree-Law No. 45/2021 and applicable international pharmaceutical regulations. We kindly request that you avoid including unnecessary identifiable patient details in any submission.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 2 */}
            <div id="use-of-information" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">2. Use of Your Information</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Process and respond to your professional inquiries, facilitate business-to-business communication, and manage pharmacovigilance reporting obligations where applicable. Please note that our Site is strictly informational and does not support commercial transactions, e-commerce activities, or user registration. Any personal data submitted via contact forms is used solely to address your inquiry, fulfill our regulatory duties in the pharmaceutical sector, or communicate with you regarding relevant business matters.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Administer promotions, surveys, or other Site features. Communicate with you about products, services, offers, pharmacovigilance events, and other events offered by us and others. Monitor and analyze usage and trends to improve your experience with the Site. Detect, prevent, and address technical issues or fraud. Comply with pharmacovigilance and regulatory reporting obligations under applicable pharmaceutical laws in the UAE and other jurisdictions where our products are marketed. This may include processing health-related information submitted in good faith for the purpose of reporting adverse events, which is processed on the legal basis of regulatory compliance rather than consent.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 3 */}
            <div id="disclosure" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">3. Disclosure of Your Information</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">By Law or to Protect Rights:</span> If we believe the release of information about you is necessary to comply with the law, such as to comply with a subpoena, or similar legal process, or when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">Business Transfers:</span> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">Third-Party Service Providers:</span> We may share your information with third parties that perform services for us or on our behalf, such as data analysis, email delivery, hosting services, customer service, and marketing assistance. These providers are obligated not to disclose or use the information for any other purpose.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <span className="font-semibold text-foreground">With Your Consent:</span> We may disclose your personal information for any other purpose with your consent.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information to third parties.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 4 */}
            <div id="tracking" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">4. Tracking Technologies</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. For more details on the types of cookies we use, how we use them, and your choices regarding cookie settings, please review our separate Cookie Policy available at our website.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 5 */}
            <div id="security" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">5. Security of Your Information</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We implement administrative, technical, and physical security measures designed to protect your personal information, including the use of secure email protocols and access controls to our communication systems. Where sensitive health data or pharmacovigilance information is submitted via our contact forms, it is transmitted via encrypted channels (HTTPS) and stored in password-protected email accounts with restricted access. While we strive to use commercially acceptable means to protect your information, please be aware that no method of electronic transmission or storage is 100% secure. If you have reason to believe that your interaction with us is no longer secure, please notify us immediately.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 6 */}
            <div id="international-transfer" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">6. International Transfer</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Your information may be transferred to, and maintained on, servers located outside your state, province, country, or other governmental jurisdiction where data protection laws may differ from those applicable in your location. If you are located outside the United Arab Emirates and choose to provide information to us, please note that we transfer and process such data in the United Arab Emirates. We process your personal data in compliance with UAE Federal Decree-Law No. 45/2021 on the Protection of Personal Data (PDPL), and where applicable, we implement appropriate safeguards such as standard contractual clauses or adequacy determinations to ensure an adequate level of protection for international transfers. By submitting your information, you consent to this transfer, processing, and storage under the terms of this Policy and applicable UAE law.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 7 */}
            <div id="eligibility" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">7. Eligibility and Age Requirement</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This Site is intended exclusively for professionals acting in a business capacity on behalf of legally established entities. By using this Site, you represent and warrant that: (i) you are at least 18 years of age; (ii) you are authorized to act on behalf of a legitimate business entity; and (iii) any information you provide is submitted for legitimate business-to-business purposes. We do not target, solicit, or accept submissions from consumers, patients, or individuals acting in a personal capacity. Liv Well Pharmaceuticals LLC-FZ assumes no responsibility for liabilities related to age or capacity misrepresentation.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Section 8 */}
            <div id="data-rights" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">8. Your Data Protection Rights (Global)</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Regardless of your location, you have certain rights regarding your personal data under applicable data protection laws, including the UAE Federal Decree-Law No. 45/2021, the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other local regulations. These rights may include: (i) the right to access, correct, or delete your personal data; (ii) the right to restrict or object to processing; (iii) the right to data portability; and (iv) the right to withdraw consent where processing is based on consent. To exercise any of these rights, please contact us with a description of your request. We will respond within the timeframe required by applicable law and may request verification of your identity to protect your privacy. If you are located in the European Economic Area, you also have the right to lodge a complaint with your local data protection authority. If you are located in the UAE, you may contact the UAE Data Office regarding concerns about our processing of your personal data.
              </p>
            </div>

            <div className="border-t border-border my-8" />

            {/* Contact */}
            <div id="contact" className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-primary mb-3 mt-8">Contact Us</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, contact us at:{" "}
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
