"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const sectionsEn = [
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

const sectionsEs = [
  { id: "intro", title: "Introducción" },
  { id: "what-are-cookies", title: "1. ¿Qué Son las Cookies?" },
  { id: "how-we-use-cookies", title: "2. Cómo Utilizamos las Cookies" },
  { id: "your-choices", title: "3. Sus Opciones Respecto a las Cookies" },
  { id: "third-party-cookies", title: "4. Cookies de Terceros" },
  { id: "cookie-duration", title: "5. Duración de las Cookies y Retención de Datos" },
  { id: "international-users", title: "6. Usuarios Internacionales" },
  { id: "changes", title: "7. Cambios en Esta Política de Cookies" },
  { id: "contact", title: "Contáctenos" },
]

export function CookiePolicyContent({ locale }: { locale: string }) {
  const isEs = locale === 'es'
  const sections = isEs ? sectionsEs : sectionsEn
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-[240px_1fr] gap-12 max-w-6xl mx-auto">
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {isEs ? 'Contenido' : 'Contents'}
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
          <article className="max-w-4xl prose prose-sm">
            {isEs ? <CookieArticleEs /> : <CookieArticleEn />}
          </article>
        </div>
      </div>
    </section>
  )
}

function CookieArticleEn() {
  return (
    <>
      <div id="intro" className="scroll-mt-28">
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          This Cookie Policy explains what cookies are and how Liv Well Pharmaceuticals LLC-FZ, a company established in Dubai, United Arab Emirates, uses them on its informational website https://www.livwellpharmaceuticals.com (the &quot;Site&quot;). The Site is strictly for business-to-business (B2B) professional use. This policy is governed by UAE Federal Decree-Law No. 45/2021 on the Protection of Personal Data (PDPL). For further information on how we process your personal data, please review our Privacy Policy, which is incorporated herein by reference.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="what-are-cookies" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">1. What Are Cookies?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Cookies are small pieces of text used to store information on web browsers. Cookies are used to store and receive identifiers and other information on computers, phones, and other devices. Other technologies, including data we store on your web browser or device, identifiers associated with your device, and other software, are used for similar purposes. In this policy, we refer to all of these technologies as &quot;cookies&quot;. Please note that our Site does not use local storage, session storage, or device fingerprinting beyond standard cookie functionality.
        </p>
      </div>
      <div className="border-t border-border my-8" />
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
      <div id="your-choices" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">3. Your Choices Regarding Cookies</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Since we use only Essential Technologies and privacy-friendly Analytics (Vercel) that do not require consent under most jurisdictions, we do not display a cookie consent banner. However, you can manage or disable cookies and local storage through your browser settings at any time. Instructions for major browsers (Chrome, Firefox, Safari, Edge) are available via their respective support pages. Please note that disabling Essential Technologies may prevent the contact form from functioning properly. If you disable Analytics, we will not be able to track Site usage statistics, but your browsing experience will otherwise remain unaffected.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="third-party-cookies" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">4. Third-Party Cookies</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The only third-party service provider that processes data via technologies on our Site is Vercel Inc. (provider of Vercel Analytics). Vercel Inc. is based in the United States. Data collected via Vercel Analytics is anonymized and processed in accordance with Vercel&apos;s Privacy Policy (https://vercel.com/legal/privacy-policy). We do not allow advertising networks, ad servers, or social media plugins to place cookies or tracking technologies on your device. By using the Site, you acknowledge that anonymized analytics data may be transferred to and processed in the United States, subject to appropriate safeguards.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="cookie-duration" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">5. Cookie Duration and Data Retention</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Essential Cookies are typically session cookies and expire when you close your browser. Performance/Analytics Cookies may persist for up to 24 months depending on your browser settings and the specific cookie. Any personal data incidentally collected via cookies (e.g., IP address in server logs) is retained only for as long as necessary to fulfill the purposes outlined in this Policy or as required by UAE law, typically not exceeding 12 months unless a longer period is mandated for security or regulatory purposes. For information on retention of data submitted via contact forms, please refer to our Privacy Policy.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="international-users" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">6. International Users</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The Site is accessible globally, but cookie practices described herein are implemented in compliance with UAE Federal Decree-Law No. 45/2021. Users accessing the Site from jurisdictions with specific cookie consent requirements (e.g., the European Economic Area under GDPR, California under CCPA/CPRA) should note that we apply a high standard of transparency and data minimization globally. If you believe our cookie practices conflict with mandatory local law, please contact us so we can evaluate appropriate accommodations.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="changes" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">7. Changes to This Cookie Policy</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          We may update our Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices. We will notify you of material changes by posting the new Cookie Policy on this page and updating the &quot;Effective Date&quot; at the top. For significant changes affecting how we process personal data, we may provide additional notice via email or a prominent notice on the Site, consistent with UAE Federal Decree-Law No. 45/2021. Your continued use of the Site after such changes constitutes your acceptance of the updated policy.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="contact" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">Contact Us</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          If you have questions, comments, or requests regarding this Cookie Policy, our use of cookies, or if you wish to exercise your data protection rights related to cookie-derived information, please contact us at:{" "}
          <a href="mailto:info@livwellpharmaceuticals.com" className="text-primary hover:underline font-medium">
            info@livwellpharmaceuticals.com
          </a>
        </p>
      </div>
    </>
  )
}

function CookieArticleEs() {
  return (
    <>
      <div id="intro" className="scroll-mt-28">
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          Esta Política de Cookies explica qué son las cookies y cómo Liv Well Pharmaceuticals LLC-FZ, una empresa establecida en Dubái, Emiratos Árabes Unidos, las utiliza en su sitio web informativo https://www.livwellpharmaceuticals.com (el &quot;Sitio&quot;). El Sitio es estrictamente para uso profesional empresarial (B2B). Esta política se rige por el Decreto-Ley Federal de los EAU N.º 45/2021 sobre la Protección de Datos Personales (PDPL). Para obtener más información sobre cómo procesamos sus datos personales, consulte nuestra Política de Privacidad, que se incorpora aquí como referencia.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="what-are-cookies" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">1. ¿Qué Son las Cookies?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Las cookies son pequeños fragmentos de texto que se utilizan para almacenar información en los navegadores web. Se utilizan para guardar y recibir identificadores y otra información en computadoras, teléfonos y otros dispositivos. Otras tecnologías, incluidos los datos que almacenamos en su navegador web o dispositivo, los identificadores asociados con su dispositivo y otro software, se utilizan con fines similares. En esta política, nos referimos a todas estas tecnologías como &quot;cookies&quot;. Tenga en cuenta que nuestro Sitio no utiliza almacenamiento local, almacenamiento de sesión ni identificación de dispositivos más allá de la funcionalidad estándar de cookies.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="how-we-use-cookies" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">2. Cómo Utilizamos las Cookies</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Utilizamos cookies y tecnologías similares únicamente para garantizar el correcto funcionamiento de nuestro Sitio informativo y para comprender cómo los visitantes profesionales interactúan con nuestro contenido de forma agregada y anonimizada. No utilizamos cookies para publicidad, segmentación de comportamiento ni seguimiento entre sitios. Los tipos específicos de tecnologías utilizadas son:
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="font-semibold text-foreground">1. Tecnologías Esenciales:</span> Son estrictamente necesarias para el funcionamiento del Sitio (p. ej., envío seguro de formularios mediante HTTPS, balanceo de carga, seguridad). No almacenan información de identificación personal y suelen ser de sesión.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="font-semibold text-foreground">2. Análisis de Rendimiento (Vercel Analytics):</span> Utilizamos Vercel Analytics, una herramienta de medición respetuosa con la privacidad, para contabilizar visitas y fuentes de tráfico. Esta tecnología no utiliza cookies persistentes para el seguimiento, no recopila datos personales (las direcciones IP se anonimizan) y no rastrea a los usuarios en diferentes sitios web. Toda la información recopilada es agregada y anónima. No combinamos estos datos analíticos con información personal enviada a través de nuestros formularios de contacto.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          No utilizamos Cookies de Funcionalidad, Cookies de Segmentación ni cookies publicitarias en este Sitio. Si esto cambia en el futuro, actualizaremos esta política y, cuando lo exija la legislación aplicable (incluido el Decreto-Ley Federal de los EAU N.º 45/2021), solicitaremos su consentimiento previo.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="your-choices" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">3. Sus Opciones Respecto a las Cookies</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Dado que solo utilizamos Tecnologías Esenciales y análisis respetuoso con la privacidad (Vercel) que no requieren consentimiento en la mayoría de las jurisdicciones, no mostramos un banner de consentimiento de cookies. Sin embargo, puede gestionar o deshabilitar las cookies y el almacenamiento local a través de la configuración de su navegador en cualquier momento. Las instrucciones para los principales navegadores (Chrome, Firefox, Safari, Edge) están disponibles en sus respectivas páginas de soporte. Tenga en cuenta que deshabilitar las Tecnologías Esenciales puede impedir que el formulario de contacto funcione correctamente. Si deshabilita Analytics, no podremos rastrear estadísticas de uso del Sitio, pero su experiencia de navegación no se verá afectada de ninguna otra manera.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="third-party-cookies" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">4. Cookies de Terceros</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          El único proveedor de servicios de terceros que procesa datos mediante tecnologías en nuestro Sitio es Vercel Inc. (proveedor de Vercel Analytics). Vercel Inc. tiene su sede en los Estados Unidos. Los datos recopilados a través de Vercel Analytics son anonimizados y procesados de acuerdo con la Política de Privacidad de Vercel (https://vercel.com/legal/privacy-policy). No permitimos que redes publicitarias, servidores de anuncios o complementos de redes sociales coloquen cookies o tecnologías de seguimiento en su dispositivo. Al utilizar el Sitio, usted reconoce que los datos de análisis anonimizados pueden transferirse y procesarse en los Estados Unidos, sujetos a las salvaguardias adecuadas.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="cookie-duration" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">5. Duración de las Cookies y Retención de Datos</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Las Cookies Esenciales suelen ser cookies de sesión y caducan cuando cierra su navegador. Las Cookies de Rendimiento/Analítica pueden persistir hasta 24 meses según la configuración de su navegador y la cookie específica. Cualquier dato personal recopilado de forma incidental a través de cookies (p. ej., dirección IP en los registros del servidor) se conserva únicamente durante el tiempo necesario para cumplir los fines descritos en esta Política o según lo exija la legislación de los EAU, generalmente no más de 12 meses, salvo que un período más largo sea obligatorio por razones de seguridad o normativas. Para obtener información sobre la retención de datos enviados a través de formularios de contacto, consulte nuestra Política de Privacidad.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="international-users" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">6. Usuarios Internacionales</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          El Sitio es accesible globalmente, pero las prácticas de cookies descritas aquí se implementan en cumplimiento del Decreto-Ley Federal de los EAU N.º 45/2021. Los usuarios que acceden al Sitio desde jurisdicciones con requisitos específicos de consentimiento de cookies (p. ej., el Espacio Económico Europeo bajo el RGPD, California bajo CCPA/CPRA) deben tener en cuenta que aplicamos un alto estándar de transparencia y minimización de datos a nivel global. Si cree que nuestras prácticas de cookies entran en conflicto con la ley local obligatoria, contáctenos para que podamos evaluar las adaptaciones adecuadas.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="changes" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">7. Cambios en Esta Política de Cookies</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Podemos actualizar nuestra Política de Cookies periódicamente para reflejar cambios en la tecnología, los requisitos legales o nuestras prácticas comerciales. Le notificaremos los cambios materiales publicando la nueva Política de Cookies en esta página y actualizando la &quot;Fecha de Vigencia&quot; en la parte superior. Para cambios significativos que afecten cómo procesamos datos personales, podemos proporcionar notificación adicional por correo electrónico o un aviso destacado en el Sitio, de acuerdo con el Decreto-Ley Federal de los EAU N.º 45/2021. Su uso continuado del Sitio después de dichos cambios constituye su aceptación de la política actualizada.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="contact" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">Contáctenos</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Si tiene preguntas, comentarios o solicitudes sobre esta Política de Cookies, nuestro uso de cookies, o si desea ejercer sus derechos de protección de datos relacionados con la información derivada de cookies, contáctenos en:{" "}
          <a href="mailto:info@livwellpharmaceuticals.com" className="text-primary hover:underline font-medium">
            info@livwellpharmaceuticals.com
          </a>
        </p>
      </div>
    </>
  )
}
