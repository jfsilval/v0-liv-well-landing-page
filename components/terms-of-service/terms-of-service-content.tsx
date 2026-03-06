"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "acceptance-of-terms", title: "1. Acceptance of Terms" },
  { id: "changes-to-terms", title: "2. Changes to the Terms" },
  { id: "accessing-site", title: "3. Accessing the Site and Submission of Inquiries" },
  { id: "intellectual-property", title: "4. Intellectual Property Rights" },
  { id: "prohibited-uses", title: "5. Prohibited Uses" },
  { id: "disclaimer-warranties", title: "6. Disclaimer of Warranties" },
  { id: "limitation-liability", title: "7. Limitation on Liability" },
  { id: "indemnification", title: "8. Indemnification" },
  { id: "governing-law", title: "9. Governing Law and Jurisdiction" },
  { id: "arbitration", title: "10. Arbitration" },
  { id: "electronic-communications", title: "11. Electronic Communications" },
  { id: "international-use", title: "12. International Use" },
  { id: "contact-us", title: "Contact Us" },
]

export function TermsOfServiceContent() {
  const [activeSection, setActiveSection] = useState<string>("introduction")
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = sectionRefs.current[id]
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id]
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto lg:max-w-6xl">
        <div className="lg:grid lg:grid-cols-[240px_1fr] gap-12">
          {/* Sticky TOC - Desktop */}
          <aside className="hidden lg:block">
            <nav className="sticky top-32">
              <h2 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                Table of Contents
              </h2>
              <ul className="space-y-2 text-sm">
                {sections.map(({ id, title }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={cn(
                        "text-left w-full py-1 px-2 rounded transition-colors",
                        activeSection === id
                          ? "text-primary font-medium bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
          <article className="prose prose-slate max-w-none">
            {/* Introduction */}
            <section
              id="introduction"
              ref={(el) => { sectionRefs.current["introduction"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Liv Well Pharmaceuticals LLC-FZ website https://www.livwellpharmaceuticals.com (the &quot;Site&quot;), which is strictly informational and intended for business-to-business (B2B) professional use only. The Site does not support user registration, e-commerce functionality, or commercial transactions of any kind. By using the Site, you acknowledge that it is designed to provide general information about our wholesale pharmaceutical trading activities and to facilitate professional inquiries via our contact forms. Your use of the Site, including submission of inquiries through our contact forms, constitutes your acceptance of these Terms and our Privacy Policy, which is incorporated herein by reference. If you do not want to agree to these Terms or the Privacy Policy, you must not access or use the Site.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The Site is intended exclusively for professionals acting in a business capacity on behalf of legally established entities. By using this Site or submitting information via our contact forms, you represent and warrant that: (i) you are at least 18 years of age; (ii) you are authorized to act on behalf of a legitimate business entity; and (iii) any information you provide is accurate, current, and submitted for legitimate business-to-business purposes. We do not target, solicit, or accept submissions from consumers, patients, or individuals acting in a personal capacity.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* 1. Acceptance of Terms */}
            <section
              id="acceptance-of-terms"
              ref={(el) => { sectionRefs.current["acceptance-of-terms"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing or using this Site, you certify that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these Terms or the Privacy Policy, you must not access or use the Site. Liv Well Pharmaceuticals LLC-FZ grants access to this informational website solely to professionals acting in a business capacity on behalf of legitimate entities who have accepted these terms.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* 2. Changes to the Terms */}
            <section
              id="changes-to-terms"
              ref={(el) => { sectionRefs.current["changes-to-terms"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">2. Changes to the Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to modify, amend, or replace these Terms at any time in our sole discretion. Any changes will be effective immediately upon posting the revised Terms on this page, with the &quot;Effective Date&quot; updated accordingly. Your continued use of the Site after any revision constitutes your acceptance of the updated Terms. These Terms represent the entire understanding between you and Liv Well Pharmaceuticals LLC-FZ regarding use of the Site and supersede all prior agreements, representations, or communications, whether written or oral, relating to the subject matter herein.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* 3. Accessing the Site and Submission of Inquiries */}
            <section
              id="accessing-site"
              ref={(el) => { sectionRefs.current["accessing-site"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">3. Accessing the Site and Submission of Inquiries</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Access to the Site is free and does not require user registration or account creation. Certain features, such as our contact forms, may request professional information (e.g., name, business email, company details) to facilitate your inquiry. It is a condition of your use of the Site that any information you voluntarily provide via these forms is accurate, current, complete, and submitted for legitimate business-to-business purposes. We reserve the right to reject or disregard submissions that appear to be fraudulent, misleading, spam, or unrelated to professional pharmaceutical trading inquiries.
              </p>
              <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r-lg my-6">
                <p className="text-foreground/80 leading-relaxed font-medium mb-2">Important Notice Regarding Submissions:</p>
                <p className="text-foreground/80 leading-relaxed">
                  Please be aware that submission of information via our contact forms does not guarantee receipt, processing, or review by our team. Electronic transmissions may be subject to technical failures, filtering, or security protocols beyond our control. Accordingly, no submission via the Site shall be construed as creating any obligation on our part to analyze, respond to, or act upon the information provided, unless otherwise required by applicable pharmaceutical regulations (e.g., valid pharmacovigilance reports). For urgent matters, including suspected adverse events or product quality complaints, please use alternative contact methods explicitly provided on the Site or contact the relevant Marketing Authorization Holder or competent health authority directly.
                </p>
              </div>
            </section>

            <hr className="border-border my-8" />

            {/* 4. Intellectual Property Rights */}
            <section
              id="intellectual-property"
              ref={(el) => { sectionRefs.current["intellectual-property"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The Site and its entire contents, features, and functionality are owned by Liv Well Pharmaceuticals LLC-FZ, our licensors, or other providers of such material and are protected by United Arab Emirates federal intellectual property laws, international copyright treaties, and other applicable proprietary rights legislation. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as expressly permitted herein for limited personal, non-commercial use in connection with evaluating potential business relationships with us, except as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
                <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <strong>Regarding image rights:</strong> All images on the Site are either owned by us, licensed, or used with permission. You may not use, copy, or distribute any images without our express written consent. Violation may result in legal action.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>User Submissions License:</strong> By submitting inquiries, feedback, or other content via our contact forms, you grant Liv Well Pharmaceuticals LLC-FZ a non-exclusive, royalty-free, worldwide license to use, reproduce, and process such content solely for the purpose of responding to your inquiry, fulfilling regulatory obligations (including pharmacovigilance reporting), and improving our business operations. You retain all ownership rights to your original content. We do not claim ownership over your submissions, and we will not use your business-confidential information for marketing or public disclosure without your prior written consent.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* 5. Prohibited Uses */}
            <section
              id="prohibited-uses"
              ref={(el) => { sectionRefs.current["prohibited-uses"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">5. Prohibited Uses</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
                <li>To impersonate or attempt to impersonate us, our employees, another user, or any other person or entity.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site, or which may harm us or users of the Site or expose them to liability.</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mb-4">Additionally, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Use the Site in any manner that could disable, overburden, damage, or impair the Site.</li>
                <li>Use any robot, spider, or other automatic device, process, or means to access the Site for any purpose.</li>
                <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
              </ul>
            </section>

            <hr className="border-border my-8" />

            {/* 6. Disclaimer of Warranties */}
            <section
              id="disclaimer-warranties"
              ref={(el) => { sectionRefs.current["disclaimer-warranties"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The Site is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We disclaim all warranties of any kind, whether express or implied, statutory or otherwise, including but not limited to any warranties of merchantability, non-infringement, and fitness for a particular purpose.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Furthermore, any information submitted via our contact forms regarding pharmacovigilance or product safety is collected solely for regulatory compliance purposes and does not constitute medical advice, diagnosis, or treatment. We are not liable for any reliance placed on Site content or on information submitted through our forms. Submissions related to adverse events or product quality complaints will be processed in accordance with applicable pharmaceutical regulations and forwarded to the relevant Marketing Authorization Holder or competent authority as required by law.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* 7. Limitation on Liability */}
            <section
              id="limitation-liability"
              ref={(el) => { sectionRefs.current["limitation-liability"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">7. Limitation on Liability</h2>
              <p className="text-foreground/80 leading-relaxed">
                In no event will we, our affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Site, including any direct, indirect, special, incidental, consequential, or punitive damages.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* 8. Indemnification */}
            <section
              id="indemnification"
              ref={(el) => { sectionRefs.current["indemnification"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">8. Indemnification</h2>
              <p className="text-foreground/80 leading-relaxed">
                To the fullest extent permitted by UAE Federal Law, you agree to defend, indemnify, and hold harmless Liv Well Pharmaceuticals LLC-FZ, its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or in connection with: (i) your use of or access to the Site; (ii) your violation of these Terms; (iii) your submission of inaccurate, misleading, or unlawful information via our contact forms; or (iv) your infringement of any third-party intellectual property or other rights.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* 9. Governing Law and Jurisdiction */}
            <section
              id="governing-law"
              ref={(el) => { sectionRefs.current["governing-law"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">9. Governing Law and Jurisdiction</h2>
              <p className="text-foreground/80 leading-relaxed">
                All matters relating to the Site and these Terms shall be governed by and construed in accordance with the federal laws of the United Arab Emirates, as applied in the Emirate of Dubai, without giving effect to any choice or conflict of law provision or rule. Liv Well Pharmaceuticals LLC-FZ is established in Meydan Free Zone, Dubai, UAE, and is subject to UAE Federal Law, including Federal Decree-Law No. 45/2021 on the Protection of Personal Data. Any legal action or proceeding arising under or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts of Dubai, UAE.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* 10. Arbitration */}
            <section
              id="arbitration"
              ref={(el) => { sectionRefs.current["arbitration"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">10. Arbitration</h2>
              <p className="text-foreground/80 leading-relaxed">
                At our sole discretion, we may require that any dispute, controversy, or claim arising out of or relating to these Terms be finally settled by arbitration administered by the Dubai International Arbitration Centre (DIAC) under its Arbitration Rules in force at the time of filing. The seat of arbitration shall be Dubai, United Arab Emirates. The language of the arbitration shall be English. The arbitral award shall be final and binding upon the parties. Notwithstanding the foregoing, either party may seek interim or conservatory measures from any competent court in the UAE to prevent irreparable harm or protect intellectual property rights.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* 11. Electronic Communications */}
            <section
              id="electronic-communications"
              ref={(el) => { sectionRefs.current["electronic-communications"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">11. Electronic Communications</h2>
              <p className="text-foreground/80 leading-relaxed">
                By submitting information via our contact forms, you consent to receive electronic communications from us at the email address you provide. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing. Submissions via our contact forms are transmitted via encrypted channels (HTTPS) and delivered to our secure email systems. We do not guarantee immediate receipt or response to submissions; for urgent matters, please use alternative contact methods specified on the Site.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* 12. International Use */}
            <section
              id="international-use"
              ref={(el) => { sectionRefs.current["international-use"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">12. International Use</h2>
              <p className="text-foreground/80 leading-relaxed">
                The Site is accessible globally, but the content is prepared primarily for audiences in the United Arab Emirates and may not be appropriate or available for use in other jurisdictions. Users who access the Site from outside the UAE do so at their own initiative and are responsible for compliance with applicable local laws. By using the Site, you represent that your access and use comply with all laws applicable to you.
              </p>
            </section>

            <hr className="border-border my-8" />

            {/* Contact Us */}
            <section
              id="contact-us"
              ref={(el) => { sectionRefs.current["contact-us"] = el }}
              className="scroll-mt-32 mb-12"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                For questions about these Terms, our practices, or to exercise any rights regarding your information, please contact us at:{" "}
                <a href="mailto:info@livwellpharmaceuticals.com" className="text-secondary hover:underline">
                  info@livwellpharmaceuticals.com
                </a>
              </p>
              <p className="text-foreground/80 leading-relaxed">
                For pharmacovigilance-related submissions, please clearly mark the subject line as &quot;Pharmacovigilance Report&quot; to ensure appropriate regulatory handling. We aim to respond to legitimate inquiries within 30 days, subject to regulatory priorities and verification requirements.
              </p>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}
