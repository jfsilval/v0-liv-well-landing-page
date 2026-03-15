"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const sectionsEn = [
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

const sectionsEs = [
  { id: "introduction", title: "Introducción" },
  { id: "acceptance-of-terms", title: "1. Aceptación de los Términos" },
  { id: "changes-to-terms", title: "2. Cambios en los Términos" },
  { id: "accessing-site", title: "3. Acceso al Sitio y Envío de Consultas" },
  { id: "intellectual-property", title: "4. Derechos de Propiedad Intelectual" },
  { id: "prohibited-uses", title: "5. Usos Prohibidos" },
  { id: "disclaimer-warranties", title: "6. Exclusión de Garantías" },
  { id: "limitation-liability", title: "7. Limitación de Responsabilidad" },
  { id: "indemnification", title: "8. Indemnización" },
  { id: "governing-law", title: "9. Ley Aplicable y Jurisdicción" },
  { id: "arbitration", title: "10. Arbitraje" },
  { id: "electronic-communications", title: "11. Comunicaciones Electrónicas" },
  { id: "international-use", title: "12. Uso Internacional" },
  { id: "contact-us", title: "Contáctenos" },
]

export function TermsOfServiceContent({ locale }: { locale: string }) {
  const isEs = locale === 'es'
  const sections = isEs ? sectionsEs : sectionsEn
  const [activeSection, setActiveSection] = useState<string>("introduction")
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto lg:max-w-6xl">
        <div className="lg:grid lg:grid-cols-[240px_1fr] gap-12">
          <aside className="hidden lg:block">
            <nav className="sticky top-32">
              <h2 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                {isEs ? 'Tabla de Contenidos' : 'Table of Contents'}
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
          <article className="prose prose-slate max-w-none">
            {isEs ? <TermsArticleEs sectionRefs={sectionRefs} /> : <TermsArticleEn sectionRefs={sectionRefs} />}
          </article>
        </div>
      </div>
    </section>
  )
}

function TermsArticleEn({ sectionRefs }: { sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>> }) {
  return (
    <>
      <section id="introduction" ref={(el) => { sectionRefs.current["introduction"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
        <p className="text-foreground leading-relaxed mb-4">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Liv Well Pharmaceuticals LLC-FZ website https://www.livwellpharmaceuticals.com (the &quot;Site&quot;), which is strictly informational and intended for business-to-business (B2B) professional use only. The Site does not support user registration, e-commerce functionality, or commercial transactions of any kind. By using the Site, you acknowledge that it is designed to provide general information about our wholesale pharmaceutical trading activities and to facilitate professional inquiries via our contact forms. Your use of the Site, including submission of inquiries through our contact forms, constitutes your acceptance of these Terms and our Privacy Policy, which is incorporated herein by reference. If you do not want to agree to these Terms or the Privacy Policy, you must not access or use the Site.
        </p>
        <p className="text-foreground leading-relaxed">
          The Site is intended exclusively for professionals acting in a business capacity on behalf of legally established entities. By using this Site or submitting information via our contact forms, you represent and warrant that: (i) you are at least 18 years of age; (ii) you are authorized to act on behalf of a legitimate business entity; and (iii) any information you provide is accurate, current, and submitted for legitimate business-to-business purposes. We do not target, solicit, or accept submissions from consumers, patients, or individuals acting in a personal capacity.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="acceptance-of-terms" ref={(el) => { sectionRefs.current["acceptance-of-terms"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
        <p className="text-foreground leading-relaxed">
          By accessing or using this Site, you certify that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these Terms or the Privacy Policy, you must not access or use the Site. Liv Well Pharmaceuticals LLC-FZ grants access to this informational website solely to professionals acting in a business capacity on behalf of legitimate entities who have accepted these terms.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="changes-to-terms" ref={(el) => { sectionRefs.current["changes-to-terms"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">2. Changes to the Terms</h2>
        <p className="text-foreground leading-relaxed">
          We reserve the right to modify, amend, or replace these Terms at any time in our sole discretion. Any changes will be effective immediately upon posting the revised Terms on this page, with the &quot;Effective Date&quot; updated accordingly. Your continued use of the Site after any revision constitutes your acceptance of the updated Terms. These Terms represent the entire understanding between you and Liv Well Pharmaceuticals LLC-FZ regarding use of the Site and supersede all prior agreements, representations, or communications, whether written or oral, relating to the subject matter herein.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="accessing-site" ref={(el) => { sectionRefs.current["accessing-site"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">3. Accessing the Site and Submission of Inquiries</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Access to the Site is free and does not require user registration or account creation. Certain features, such as our contact forms, may request professional information (e.g., name, business email, company details) to facilitate your inquiry. It is a condition of your use of the Site that any information you voluntarily provide via these forms is accurate, current, complete, and submitted for legitimate business-to-business purposes. We reserve the right to reject or disregard submissions that appear to be fraudulent, misleading, spam, or unrelated to professional pharmaceutical trading inquiries.
        </p>
        <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r-lg my-6">
          <p className="text-foreground leading-relaxed font-medium mb-2">Important Notice Regarding Submissions:</p>
          <p className="text-foreground leading-relaxed">
            Please be aware that submission of information via our contact forms does not guarantee receipt, processing, or review by our team. Electronic transmissions may be subject to technical failures, filtering, or security protocols beyond our control. Accordingly, no submission via the Site shall be construed as creating any obligation on our part to analyze, respond to, or act upon the information provided, unless otherwise required by applicable pharmaceutical regulations (e.g., valid pharmacovigilance reports). For urgent matters, including suspected adverse events or product quality complaints, please use alternative contact methods explicitly provided on the Site or contact the relevant Marketing Authorization Holder or competent health authority directly.
          </p>
        </div>
      </section>
      <hr className="border-border my-8" />
      <section id="intellectual-property" ref={(el) => { sectionRefs.current["intellectual-property"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property Rights</h2>
        <p className="text-foreground leading-relaxed mb-4">
          The Site and its entire contents, features, and functionality are owned by Liv Well Pharmaceuticals LLC-FZ, our licensors, or other providers of such material and are protected by United Arab Emirates federal intellectual property laws, international copyright treaties, and other applicable proprietary rights legislation. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as expressly permitted herein for limited personal, non-commercial use in connection with evaluating potential business relationships with us, except as follows:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
          <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
          <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
        </ul>
        <p className="text-foreground leading-relaxed mb-4">
          <strong>Regarding image rights:</strong> All images on the Site are either owned by us, licensed, or used with permission. You may not use, copy, or distribute any images without our express written consent. Violation may result in legal action.
        </p>
        <p className="text-foreground leading-relaxed">
          <strong>User Submissions License:</strong> By submitting inquiries, feedback, or other content via our contact forms, you grant Liv Well Pharmaceuticals LLC-FZ a non-exclusive, royalty-free, worldwide license to use, reproduce, and process such content solely for the purpose of responding to your inquiry, fulfilling regulatory obligations (including pharmacovigilance reporting), and improving our business operations. You retain all ownership rights to your original content. We do not claim ownership over your submissions, and we will not use your business-confidential information for marketing or public disclosure without your prior written consent.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="prohibited-uses" ref={(el) => { sectionRefs.current["prohibited-uses"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">5. Prohibited Uses</h2>
        <p className="text-foreground leading-relaxed mb-4">
          You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
          <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
          <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
          <li>To impersonate or attempt to impersonate us, our employees, another user, or any other person or entity.</li>
          <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site, or which may harm us or users of the Site or expose them to liability.</li>
        </ul>
        <p className="text-foreground leading-relaxed mb-4">Additionally, you agree not to:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
          <li>Use the Site in any manner that could disable, overburden, damage, or impair the Site.</li>
          <li>Use any robot, spider, or other automatic device, process, or means to access the Site for any purpose.</li>
          <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
        </ul>
      </section>
      <hr className="border-border my-8" />
      <section id="disclaimer-warranties" ref={(el) => { sectionRefs.current["disclaimer-warranties"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">6. Disclaimer of Warranties</h2>
        <p className="text-foreground leading-relaxed mb-4">
          The Site is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We disclaim all warranties of any kind, whether express or implied, statutory or otherwise, including but not limited to any warranties of merchantability, non-infringement, and fitness for a particular purpose.
        </p>
        <p className="text-foreground leading-relaxed">
          Furthermore, any information submitted via our contact forms regarding pharmacovigilance or product safety is collected solely for regulatory compliance purposes and does not constitute medical advice, diagnosis, or treatment. We are not liable for any reliance placed on Site content or on information submitted through our forms. Submissions related to adverse events or product quality complaints will be processed in accordance with applicable pharmaceutical regulations and forwarded to the relevant Marketing Authorization Holder or competent authority as required by law.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="limitation-liability" ref={(el) => { sectionRefs.current["limitation-liability"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">7. Limitation on Liability</h2>
        <p className="text-foreground leading-relaxed">
          In no event will we, our affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Site, including any direct, indirect, special, incidental, consequential, or punitive damages.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="indemnification" ref={(el) => { sectionRefs.current["indemnification"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">8. Indemnification</h2>
        <p className="text-foreground leading-relaxed">
          To the fullest extent permitted by UAE Federal Law, you agree to defend, indemnify, and hold harmless Liv Well Pharmaceuticals LLC-FZ, its affiliates, officers, employees, and agents from and against any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or in connection with: (i) your use of or access to the Site; (ii) your violation of these Terms; (iii) your submission of inaccurate, misleading, or unlawful information via our contact forms; or (iv) your infringement of any third-party intellectual property or other rights.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="governing-law" ref={(el) => { sectionRefs.current["governing-law"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">9. Governing Law and Jurisdiction</h2>
        <p className="text-foreground leading-relaxed">
          All matters relating to the Site and these Terms shall be governed by and construed in accordance with the federal laws of the United Arab Emirates, as applied in the Emirate of Dubai, without giving effect to any choice or conflict of law provision or rule. Liv Well Pharmaceuticals LLC-FZ is established in Meydan Free Zone, Dubai, UAE, and is subject to UAE Federal Law, including Federal Decree-Law No. 45/2021 on the Protection of Personal Data. Any legal action or proceeding arising under or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts of Dubai, UAE.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="arbitration" ref={(el) => { sectionRefs.current["arbitration"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">10. Arbitration</h2>
        <p className="text-foreground leading-relaxed">
          At our sole discretion, we may require that any dispute, controversy, or claim arising out of or relating to these Terms be finally settled by arbitration administered by the Dubai International Arbitration Centre (DIAC) under its Arbitration Rules in force at the time of filing. The seat of arbitration shall be Dubai, United Arab Emirates. The language of the arbitration shall be English. The arbitral award shall be final and binding upon the parties. Notwithstanding the foregoing, either party may seek interim or conservatory measures from any competent court in the UAE to prevent irreparable harm or protect intellectual property rights.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="electronic-communications" ref={(el) => { sectionRefs.current["electronic-communications"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">11. Electronic Communications</h2>
        <p className="text-foreground leading-relaxed">
          By submitting information via our contact forms, you consent to receive electronic communications from us at the email address you provide. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing. Submissions via our contact forms are transmitted via encrypted channels (HTTPS) and delivered to our secure email systems. We do not guarantee immediate receipt or response to submissions; for urgent matters, please use alternative contact methods specified on the Site.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="international-use" ref={(el) => { sectionRefs.current["international-use"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">12. International Use</h2>
        <p className="text-foreground leading-relaxed">
          The Site is accessible globally, but the content is prepared primarily for audiences in the United Arab Emirates and may not be appropriate or available for use in other jurisdictions. Users who access the Site from outside the UAE do so at their own initiative and are responsible for compliance with applicable local laws. By using the Site, you represent that your access and use comply with all laws applicable to you.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="contact-us" ref={(el) => { sectionRefs.current["contact-us"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
        <p className="text-foreground leading-relaxed mb-4">
          For questions about these Terms, our practices, or to exercise any rights regarding your information, please contact us at:{" "}
          <a href="mailto:info@livwellpharmaceuticals.com" className="text-primary font-medium hover:underline">
            info@livwellpharmaceuticals.com
          </a>
        </p>
        <p className="text-foreground leading-relaxed">
          For pharmacovigilance-related submissions, please clearly mark the subject line as &quot;Pharmacovigilance Report&quot; to ensure appropriate regulatory handling. We aim to respond to legitimate inquiries within 30 days, subject to regulatory priorities and verification requirements.
        </p>
      </section>
    </>
  )
}

function TermsArticleEs({ sectionRefs }: { sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>> }) {
  return (
    <>
      <section id="introduction" ref={(el) => { sectionRefs.current["introduction"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Introducción</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Estos Términos de Servicio (&quot;Términos&quot;) rigen su acceso y uso del sitio web de Liv Well Pharmaceuticals LLC-FZ https://www.livwellpharmaceuticals.com (el &quot;Sitio&quot;), que es estrictamente informativo y está destinado exclusivamente al uso profesional empresarial (B2B). El Sitio no admite registro de usuarios, funcionalidad de comercio electrónico ni transacciones comerciales de ningún tipo. Al utilizar el Sitio, usted reconoce que está diseñado para proporcionar información general sobre nuestras actividades de comercio farmacéutico mayorista y para facilitar consultas profesionales a través de nuestros formularios de contacto. Su uso del Sitio, incluido el envío de consultas a través de nuestros formularios de contacto, constituye su aceptación de estos Términos y nuestra Política de Privacidad, que se incorpora aquí como referencia. Si no desea aceptar estos Términos o la Política de Privacidad, no debe acceder ni utilizar el Sitio.
        </p>
        <p className="text-foreground leading-relaxed">
          El Sitio está destinado exclusivamente a profesionales que actúan en capacidad empresarial en nombre de entidades legalmente establecidas. Al utilizar este Sitio o enviar información a través de nuestros formularios de contacto, usted declara y garantiza que: (i) tiene al menos 18 años de edad; (ii) está autorizado para actuar en nombre de una entidad comercial legítima; y (iii) cualquier información que proporcione es precisa, vigente y enviada con fines legítimos de negocio a negocio. No nos dirigimos, solicitamos ni aceptamos envíos de consumidores, pacientes ni personas que actúen a título personal.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="acceptance-of-terms" ref={(el) => { sectionRefs.current["acceptance-of-terms"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">1. Aceptación de los Términos</h2>
        <p className="text-foreground leading-relaxed">
          Al acceder o utilizar este Sitio, usted certifica que ha leído, comprendido y acepta estar sujeto a estos Términos de Servicio y a nuestra Política de Privacidad. Si no está de acuerdo con estos Términos o con la Política de Privacidad, no debe acceder ni utilizar el Sitio. Liv Well Pharmaceuticals LLC-FZ otorga acceso a este sitio web informativo únicamente a profesionales que actúan en capacidad empresarial en nombre de entidades legítimas que han aceptado estos términos.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="changes-to-terms" ref={(el) => { sectionRefs.current["changes-to-terms"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">2. Cambios en los Términos</h2>
        <p className="text-foreground leading-relaxed">
          Nos reservamos el derecho de modificar, enmendar o reemplazar estos Términos en cualquier momento a nuestra sola discreción. Cualquier cambio será efectivo inmediatamente después de publicar los Términos revisados en esta página, con la &quot;Fecha de Vigencia&quot; actualizada en consecuencia. Su uso continuado del Sitio después de cualquier revisión constituye su aceptación de los Términos actualizados. Estos Términos representan el entendimiento completo entre usted y Liv Well Pharmaceuticals LLC-FZ con respecto al uso del Sitio y reemplazan todos los acuerdos, representaciones o comunicaciones previas, ya sean escritas u orales, relacionadas con el objeto de los mismos.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="accessing-site" ref={(el) => { sectionRefs.current["accessing-site"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">3. Acceso al Sitio y Envío de Consultas</h2>
        <p className="text-foreground leading-relaxed mb-4">
          El acceso al Sitio es gratuito y no requiere registro de usuario ni creación de cuenta. Algunas funciones, como nuestros formularios de contacto, pueden solicitar información profesional (p. ej., nombre, correo electrónico empresarial, datos de la empresa) para facilitar su consulta. Es condición de uso del Sitio que cualquier información que proporcione voluntariamente a través de estos formularios sea precisa, vigente, completa y enviada con fines legítimos de negocio a negocio. Nos reservamos el derecho de rechazar o ignorar envíos que parezcan fraudulentos, engañosos, spam o no relacionados con consultas profesionales de comercio farmacéutico.
        </p>
        <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r-lg my-6">
          <p className="text-foreground leading-relaxed font-medium mb-2">Aviso Importante Sobre los Envíos:</p>
          <p className="text-foreground leading-relaxed">
            Tenga en cuenta que el envío de información a través de nuestros formularios de contacto no garantiza la recepción, el procesamiento ni la revisión por parte de nuestro equipo. Las transmisiones electrónicas pueden estar sujetas a fallas técnicas, filtros o protocolos de seguridad fuera de nuestro control. En consecuencia, ningún envío a través del Sitio deberá interpretarse como la creación de ninguna obligación de nuestra parte de analizar, responder o actuar sobre la información proporcionada, salvo que lo exijan las regulaciones farmacéuticas aplicables (p. ej., informes válidos de farmacovigilancia). Para asuntos urgentes, incluidos eventos adversos sospechados o quejas sobre la calidad del producto, utilice los métodos de contacto alternativos indicados explícitamente en el Sitio o contacte directamente al Titular de la Autorización de Comercialización o a la autoridad sanitaria competente.
          </p>
        </div>
      </section>
      <hr className="border-border my-8" />
      <section id="intellectual-property" ref={(el) => { sectionRefs.current["intellectual-property"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">4. Derechos de Propiedad Intelectual</h2>
        <p className="text-foreground leading-relaxed mb-4">
          El Sitio y la totalidad de sus contenidos, características y funcionalidades son propiedad de Liv Well Pharmaceuticals LLC-FZ, nuestros licenciantes u otros proveedores de dicho material, y están protegidos por las leyes federales de propiedad intelectual de los Emiratos Árabes Unidos, los tratados internacionales de derechos de autor y demás legislación aplicable sobre derechos de propiedad. No debe reproducir, distribuir, modificar, crear obras derivadas, exhibir públicamente, ejecutar públicamente, republicar, descargar, almacenar ni transmitir ningún material de nuestro Sitio, salvo lo expresamente permitido aquí para uso personal limitado y no comercial en el contexto de la evaluación de posibles relaciones comerciales con nosotros, excepto en los siguientes casos:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
          <li>Su computadora puede almacenar temporalmente copias de dichos materiales en la RAM de forma incidental al acceder y visualizar esos materiales.</li>
          <li>Puede almacenar archivos que su navegador web almacene automáticamente en caché con fines de mejora de la visualización.</li>
        </ul>
        <p className="text-foreground leading-relaxed mb-4">
          <strong>Sobre los derechos de imagen:</strong> Todas las imágenes del Sitio son de nuestra propiedad, están licenciadas o se utilizan con permiso. No puede usar, copiar ni distribuir ninguna imagen sin nuestro consentimiento expreso por escrito. Las infracciones pueden dar lugar a acciones legales.
        </p>
        <p className="text-foreground leading-relaxed">
          <strong>Licencia de Envíos de Usuarios:</strong> Al enviar consultas, comentarios u otro contenido a través de nuestros formularios de contacto, usted otorga a Liv Well Pharmaceuticals LLC-FZ una licencia no exclusiva, libre de regalías y mundial para usar, reproducir y procesar dicho contenido únicamente con el fin de responder a su consulta, cumplir con obligaciones regulatorias (incluida la farmacovigilancia) y mejorar nuestras operaciones comerciales. Usted conserva todos los derechos de propiedad sobre su contenido original. No reclamamos la titularidad de sus envíos y no utilizaremos su información empresarial confidencial para marketing ni divulgación pública sin su consentimiento previo por escrito.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="prohibited-uses" ref={(el) => { sectionRefs.current["prohibited-uses"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">5. Usos Prohibidos</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Solo puede utilizar el Sitio para fines lícitos y de acuerdo con estos Términos. Usted acepta no utilizar el Sitio:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
          <li>De cualquier manera que infrinja cualquier ley o regulación federal, estatal, local o internacional aplicable.</li>
          <li>Con el fin de explotar, dañar o intentar explotar o dañar a menores de cualquier manera.</li>
          <li>Para transmitir o procurar el envío de cualquier material publicitario o promocional sin nuestro consentimiento previo por escrito.</li>
          <li>Para suplantar o intentar suplantar a nuestra empresa, a nuestros empleados, a otro usuario o a cualquier otra persona o entidad.</li>
          <li>Para participar en cualquier otra conducta que restrinja o inhiba el uso o disfrute del Sitio por parte de cualquier persona, o que pueda causarnos daño a nosotros o a los usuarios del Sitio o exponerlos a responsabilidad.</li>
        </ul>
        <p className="text-foreground leading-relaxed mb-4">Además, usted acepta no:</p>
        <ul className="list-disc pl-6 space-y-2 text-foreground/80">
          <li>Utilizar el Sitio de cualquier manera que pueda desactivar, sobrecargar, dañar o deteriorar el Sitio.</li>
          <li>Utilizar robots, arañas u otros dispositivos, procesos o medios automáticos para acceder al Sitio con cualquier fin.</li>
          <li>Introducir virus, caballos de Troya, gusanos, bombas lógicas u otro material malicioso o tecnológicamente dañino.</li>
        </ul>
      </section>
      <hr className="border-border my-8" />
      <section id="disclaimer-warranties" ref={(el) => { sectionRefs.current["disclaimer-warranties"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">6. Exclusión de Garantías</h2>
        <p className="text-foreground leading-relaxed mb-4">
          El Sitio se proporciona &quot;TAL CUAL&quot; y &quot;SEGÚN DISPONIBILIDAD&quot;. Renunciamos a todas las garantías de cualquier tipo, ya sean expresas o implícitas, legales o de otro tipo, incluidas, entre otras, las garantías de comerciabilidad, no infracción e idoneidad para un fin particular.
        </p>
        <p className="text-foreground leading-relaxed">
          Asimismo, cualquier información enviada a través de nuestros formularios de contacto en relación con la farmacovigilancia o la seguridad de los productos se recopila únicamente para fines de cumplimiento normativo y no constituye asesoramiento médico, diagnóstico ni tratamiento. No somos responsables de ninguna confianza depositada en el contenido del Sitio ni en la información enviada a través de nuestros formularios. Los envíos relacionados con eventos adversos o quejas sobre la calidad del producto se procesarán de acuerdo con las regulaciones farmacéuticas aplicables y se remitirán al Titular de la Autorización de Comercialización o a la autoridad competente correspondiente según lo exija la ley.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="limitation-liability" ref={(el) => { sectionRefs.current["limitation-liability"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">7. Limitación de Responsabilidad</h2>
        <p className="text-foreground leading-relaxed">
          En ningún caso nosotros, nuestras filiales, ni sus licenciantes, proveedores de servicios, empleados, agentes, funcionarios o directores seremos responsables de daños de ningún tipo, bajo ninguna teoría legal, derivados de o relacionados con su uso, o la imposibilidad de uso, del Sitio, incluidos daños directos, indirectos, especiales, incidentales, consecuentes o punitivos.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="indemnification" ref={(el) => { sectionRefs.current["indemnification"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">8. Indemnización</h2>
        <p className="text-foreground leading-relaxed">
          En la máxima medida permitida por la Ley Federal de los EAU, usted acepta defender, indemnizar y eximir de responsabilidad a Liv Well Pharmaceuticals LLC-FZ, sus filiales, funcionarios, empleados y agentes frente a cualquier reclamación, responsabilidad, daño, pérdida o gasto (incluidos los honorarios legales razonables) que surja de o esté relacionado con: (i) su uso o acceso al Sitio; (ii) su incumplimiento de estos Términos; (iii) su envío de información inexacta, engañosa o ilícita a través de nuestros formularios de contacto; o (iv) su infracción de la propiedad intelectual u otros derechos de terceros.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="governing-law" ref={(el) => { sectionRefs.current["governing-law"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">9. Ley Aplicable y Jurisdicción</h2>
        <p className="text-foreground leading-relaxed">
          Todos los asuntos relacionados con el Sitio y estos Términos se regirán e interpretarán de acuerdo con las leyes federales de los Emiratos Árabes Unidos, tal como se aplican en el Emirato de Dubái, sin tener en cuenta ninguna disposición o regla de elección o conflicto de leyes. Liv Well Pharmaceuticals LLC-FZ está establecida en Meydan Free Zone, Dubái, EAU, y está sujeta a la Ley Federal de los EAU, incluido el Decreto-Ley Federal N.º 45/2021 sobre la Protección de Datos Personales. Cualquier acción o procedimiento legal derivado de o relacionado con estos Términos estará sujeto a la jurisdicción exclusiva de los tribunales competentes de Dubái, EAU.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="arbitration" ref={(el) => { sectionRefs.current["arbitration"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">10. Arbitraje</h2>
        <p className="text-foreground leading-relaxed">
          A nuestra sola discreción, podemos exigir que cualquier disputa, controversia o reclamación que surja de o esté relacionada con estos Términos sea resuelta definitivamente mediante arbitraje administrado por el Centro Internacional de Arbitraje de Dubái (DIAC) bajo sus Reglas de Arbitraje vigentes en el momento de la presentación. La sede del arbitraje será Dubái, Emiratos Árabes Unidos. El idioma del arbitraje será el inglés. El laudo arbitral será definitivo y vinculante para las partes. Sin perjuicio de lo anterior, cualquiera de las partes podrá solicitar medidas cautelares o provisionales ante cualquier tribunal competente de los EAU para prevenir daños irreparables o proteger derechos de propiedad intelectual.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="electronic-communications" ref={(el) => { sectionRefs.current["electronic-communications"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">11. Comunicaciones Electrónicas</h2>
        <p className="text-foreground leading-relaxed">
          Al enviar información a través de nuestros formularios de contacto, usted consiente en recibir comunicaciones electrónicas nuestras en la dirección de correo electrónico que proporcione. Usted acepta que todos los acuerdos, avisos, divulgaciones y demás comunicaciones que le proporcionemos electrónicamente satisfacen cualquier requisito legal de que dichas comunicaciones sean por escrito. Los envíos a través de nuestros formularios de contacto se transmiten mediante canales cifrados (HTTPS) y se entregan a nuestros sistemas de correo electrónico seguros. No garantizamos la recepción inmediata ni la respuesta a los envíos; para asuntos urgentes, utilice los métodos de contacto alternativos especificados en el Sitio.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="international-use" ref={(el) => { sectionRefs.current["international-use"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">12. Uso Internacional</h2>
        <p className="text-foreground leading-relaxed">
          El Sitio es accesible globalmente, pero el contenido está preparado principalmente para audiencias en los Emiratos Árabes Unidos y puede no ser apropiado o estar disponible para su uso en otras jurisdicciones. Los usuarios que accedan al Sitio desde fuera de los EAU lo hacen por iniciativa propia y son responsables del cumplimiento de las leyes locales aplicables. Al utilizar el Sitio, usted declara que su acceso y uso cumplen con todas las leyes que le son aplicables.
        </p>
      </section>
      <hr className="border-border my-8" />
      <section id="contact-us" ref={(el) => { sectionRefs.current["contact-us"] = el }} className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Contáctenos</h2>
        <p className="text-foreground leading-relaxed mb-4">
          Para preguntas sobre estos Términos, nuestras prácticas o para ejercer cualquier derecho sobre su información, contáctenos en:{" "}
          <a href="mailto:info@livwellpharmaceuticals.com" className="text-primary font-medium hover:underline">
            info@livwellpharmaceuticals.com
          </a>
        </p>
        <p className="text-foreground leading-relaxed">
          Para envíos relacionados con farmacovigilancia, indique claramente en el asunto del correo &quot;Informe de Farmacovigilancia&quot; para garantizar el tratamiento regulatorio adecuado. Nuestro objetivo es responder a las consultas legítimas en un plazo de 30 días, sujeto a las prioridades regulatorias y los requisitos de verificación.
        </p>
      </section>
    </>
  )
}
