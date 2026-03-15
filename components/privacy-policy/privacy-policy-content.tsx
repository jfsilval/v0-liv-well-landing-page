"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const sectionsEn = [
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

const sectionsEs = [
  { id: "intro", title: "Introducción" },
  { id: "information-we-collect", title: "1. Información que Recopilamos" },
  { id: "use-of-information", title: "2. Uso de Su Información" },
  { id: "disclosure", title: "3. Divulgación de Su Información" },
  { id: "tracking", title: "4. Tecnologías de Seguimiento" },
  { id: "security", title: "5. Seguridad de Su Información" },
  { id: "international-transfer", title: "6. Transferencia Internacional" },
  { id: "eligibility", title: "7. Elegibilidad y Requisito de Edad" },
  { id: "data-rights", title: "8. Sus Derechos de Protección de Datos" },
  { id: "contact", title: "Contáctenos" },
]

export function PrivacyPolicyContent({ locale }: { locale: string }) {
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
            {isEs ? <PrivacyArticleEs /> : <PrivacyArticleEn />}
          </article>
        </div>
      </div>
    </section>
  )
}

function PrivacyArticleEn() {
  return (
    <>
      <div id="intro" className="scroll-mt-28">
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          Liv Well Pharmaceuticals LLC-FZ (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website http://www.livwellpharmaceuticals.com (the &quot;Site&quot;), including any data you may provide through the Site. This Policy applies to all visitors, users, and others who access the Site.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &quot;Last Updated&quot; date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
        </p>
      </div>
      <div className="border-t border-border my-8" />
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
      <div id="tracking" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">4. Tracking Technologies</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. For more details on the types of cookies we use, how we use them, and your choices regarding cookie settings, please review our separate Cookie Policy available at our website.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="security" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">5. Security of Your Information</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          We implement administrative, technical, and physical security measures designed to protect your personal information, including the use of secure email protocols and access controls to our communication systems. Where sensitive health data or pharmacovigilance information is submitted via our contact forms, it is transmitted via encrypted channels (HTTPS) and stored in password-protected email accounts with restricted access. While we strive to use commercially acceptable means to protect your information, please be aware that no method of electronic transmission or storage is 100% secure. If you have reason to believe that your interaction with us is no longer secure, please notify us immediately.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="international-transfer" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">6. International Transfer</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Your information may be transferred to, and maintained on, servers located outside your state, province, country, or other governmental jurisdiction where data protection laws may differ from those applicable in your location. If you are located outside the United Arab Emirates and choose to provide information to us, please note that we transfer and process such data in the United Arab Emirates. We process your personal data in compliance with UAE Federal Decree-Law No. 45/2021 on the Protection of Personal Data (PDPL), and where applicable, we implement appropriate safeguards such as standard contractual clauses or adequacy determinations to ensure an adequate level of protection for international transfers. By submitting your information, you consent to this transfer, processing, and storage under the terms of this Policy and applicable UAE law.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="eligibility" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">7. Eligibility and Age Requirement</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          This Site is intended exclusively for professionals acting in a business capacity on behalf of legally established entities. By using this Site, you represent and warrant that: (i) you are at least 18 years of age; (ii) you are authorized to act on behalf of a legitimate business entity; and (iii) any information you provide is submitted for legitimate business-to-business purposes. We do not target, solicit, or accept submissions from consumers, patients, or individuals acting in a personal capacity. Liv Well Pharmaceuticals LLC-FZ assumes no responsibility for liabilities related to age or capacity misrepresentation.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="data-rights" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">8. Your Data Protection Rights (Global)</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Regardless of your location, you have certain rights regarding your personal data under applicable data protection laws, including the UAE Federal Decree-Law No. 45/2021, the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other local regulations. These rights may include: (i) the right to access, correct, or delete your personal data; (ii) the right to restrict or object to processing; (iii) the right to data portability; and (iv) the right to withdraw consent where processing is based on consent. To exercise any of these rights, please contact us with a description of your request. We will respond within the timeframe required by applicable law and may request verification of your identity to protect your privacy. If you are located in the European Economic Area, you also have the right to lodge a complaint with your local data protection authority. If you are located in the UAE, you may contact the UAE Data Office regarding concerns about our processing of your personal data.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="contact" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">Contact Us</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          If you have questions or comments about this Privacy Policy, contact us at:{" "}
          <a href="mailto:info@livwellpharmaceuticals.com" className="text-primary hover:underline font-medium">
            info@livwellpharmaceuticals.com
          </a>
        </p>
      </div>
    </>
  )
}

function PrivacyArticleEs() {
  return (
    <>
      <div id="intro" className="scroll-mt-28">
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          Liv Well Pharmaceuticals LLC-FZ (&quot;nosotros&quot;, &quot;nos&quot; o &quot;nuestro&quot;) se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información cuando visita nuestro sitio web http://www.livwellpharmaceuticals.com (el &quot;Sitio&quot;), incluidos los datos que pueda proporcionar a través del Sitio. Esta Política se aplica a todos los visitantes, usuarios y demás personas que accedan al Sitio.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Lea esta Política de Privacidad detenidamente. Si no está de acuerdo con sus términos, no acceda al Sitio. Nos reservamos el derecho de realizar cambios en esta Política de Privacidad en cualquier momento y por cualquier motivo. Le informaremos sobre cualquier cambio actualizando la fecha de &quot;Última Actualización&quot; de esta Política. Le recomendamos revisar periódicamente esta Política de Privacidad para mantenerse informado de las actualizaciones.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="information-we-collect" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">1. Información que Recopilamos</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Podemos recopilar información sobre usted de diversas maneras. La información que podemos recopilar en el Sitio incluye:
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="font-semibold text-foreground">Datos Personales:</span> Información de identificación personal, como su nombre, dirección de correo electrónico, número de teléfono y datos de la empresa, que usted nos proporciona voluntariamente al enviar consultas a través de nuestros formularios de contacto, comunicaciones por correo electrónico u otras funciones interactivas del Sitio. Dado que nuestro sitio web es estrictamente informativo y no admite registro de usuarios ni transacciones comerciales, recopilamos datos personales únicamente con el fin de facilitar la comunicación empresarial (B2B) y responder a sus consultas profesionales.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="font-semibold text-foreground">Datos Derivados:</span> Información que nuestros servidores recopilan automáticamente cuando accede al Sitio, como su dirección IP, tipo de navegador, sistema operativo, horas de acceso y las páginas que ha visitado inmediatamente antes y después de acceder al Sitio.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="font-semibold text-foreground">Datos de Terceros:</span> Información de terceros, como socios, proveedores de análisis o contrapartes regulatorias, cuando se comparte en el contexto de consultas comerciales legítimas. Tenga en cuenta que no recopilamos activamente datos de salud sensibles ni información identificable de pacientes. En el caso de que se envíe voluntariamente información relacionada con farmacovigilancia a través de nuestros canales de contacto, dicha información se procesará estrictamente para fines de cumplimiento normativo, se anonimizará o seudonimizará cuando sea factible, y se manejará con salvaguardias de confidencialidad reforzadas de acuerdo con el Decreto-Ley Federal de los EAU N.º 45/2021 y las regulaciones farmacéuticas internacionales aplicables. Le pedimos amablemente que evite incluir datos identificables innecesarios de pacientes en cualquier envío.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="use-of-information" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">2. Uso de Su Información</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Disponer de información precisa sobre usted nos permite brindarle una experiencia fluida, eficiente y personalizada. Específicamente, podemos utilizar la información recopilada sobre usted a través del Sitio para:
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Procesar y responder a sus consultas profesionales, facilitar la comunicación empresarial y gestionar las obligaciones de farmacovigilancia cuando corresponda. Tenga en cuenta que nuestro Sitio es estrictamente informativo y no admite transacciones comerciales, actividades de comercio electrónico ni registro de usuarios. Cualquier dato personal enviado a través de formularios de contacto se utiliza únicamente para atender su consulta, cumplir con nuestras obligaciones regulatorias en el sector farmacéutico o comunicarnos con usted sobre asuntos comerciales relevantes.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Administrar promociones, encuestas u otras funciones del Sitio. Comunicarnos con usted sobre productos, servicios, ofertas, eventos de farmacovigilancia y otros eventos ofrecidos por nosotros y terceros. Supervisar y analizar el uso y las tendencias para mejorar su experiencia en el Sitio. Detectar, prevenir y abordar problemas técnicos o fraudes. Cumplir con las obligaciones de farmacovigilancia y presentación de informes regulatorios bajo las leyes farmacéuticas aplicables en los EAU y otras jurisdicciones donde se comercializan nuestros productos. Esto puede incluir el procesamiento de información relacionada con la salud enviada de buena fe con fines de notificación de eventos adversos, lo cual se procesa sobre la base legal del cumplimiento normativo y no del consentimiento.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="disclosure" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">3. Divulgación de Su Información</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Podemos compartir la información que hemos recopilado sobre usted en determinadas situaciones. Su información puede divulgarse de la siguiente manera:
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="font-semibold text-foreground">Por Ley o para Proteger Derechos:</span> Si consideramos que la divulgación de información sobre usted es necesaria para cumplir con la ley, como responder a una citación o proceso legal similar, o cuando creemos de buena fe que la divulgación es necesaria para proteger nuestros derechos, su seguridad o la de otros, investigar fraudes o responder a una solicitud gubernamental.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="font-semibold text-foreground">Transferencias Comerciales:</span> Si participamos en una fusión, adquisición o venta de la totalidad o parte de nuestros activos, su información puede ser transferida.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="font-semibold text-foreground">Proveedores de Servicios de Terceros:</span> Podemos compartir su información con terceros que realizan servicios para nosotros o en nuestro nombre, como análisis de datos, entrega de correos electrónicos, servicios de alojamiento, atención al cliente y asistencia de marketing. Estos proveedores están obligados a no divulgar ni utilizar la información para ningún otro fin.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <span className="font-semibold text-foreground">Con Su Consentimiento:</span> Podemos divulgar su información personal para cualquier otro fin con su consentimiento.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          No vendemos su información personal a terceros.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="tracking" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">4. Tecnologías de Seguimiento</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Podemos usar cookies, balizas web, píxeles de seguimiento y otras tecnologías de rastreo en el Sitio para personalizar el contenido y mejorar su experiencia. Para obtener más detalles sobre los tipos de cookies que utilizamos, cómo las usamos y sus opciones respecto a la configuración de cookies, consulte nuestra Política de Cookies disponible en nuestro sitio web.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="security" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">5. Seguridad de Su Información</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Implementamos medidas de seguridad administrativas, técnicas y físicas diseñadas para proteger su información personal, incluido el uso de protocolos de correo electrónico seguros y controles de acceso a nuestros sistemas de comunicación. Cuando se envía información de salud sensible o datos de farmacovigilancia a través de nuestros formularios de contacto, se transmite mediante canales cifrados (HTTPS) y se almacena en cuentas de correo electrónico protegidas con contraseña y acceso restringido. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger su información, tenga en cuenta que ningún método de transmisión o almacenamiento electrónico es 100% seguro. Si tiene motivos para creer que su interacción con nosotros ya no es segura, notifíquenoslo de inmediato.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="international-transfer" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">6. Transferencia Internacional</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Su información puede ser transferida y mantenida en servidores ubicados fuera de su estado, provincia, país u otra jurisdicción gubernamental, donde las leyes de protección de datos pueden diferir de las aplicables en su ubicación. Si se encuentra fuera de los Emiratos Árabes Unidos y elige proporcionarnos información, tenga en cuenta que transferimos y procesamos dichos datos en los Emiratos Árabes Unidos. Procesamos sus datos personales en cumplimiento del Decreto-Ley Federal de los EAU N.º 45/2021 sobre la Protección de Datos Personales (PDPL) y, cuando corresponda, implementamos salvaguardias adecuadas, como cláusulas contractuales estándar o determinaciones de adecuación, para garantizar un nivel adecuado de protección en las transferencias internacionales. Al enviar su información, usted consiente esta transferencia, procesamiento y almacenamiento bajo los términos de esta Política y la legislación aplicable de los EAU.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="eligibility" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">7. Elegibilidad y Requisito de Edad</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Este Sitio está destinado exclusivamente a profesionales que actúan en capacidad empresarial en nombre de entidades legalmente establecidas. Al utilizar este Sitio, usted declara y garantiza que: (i) tiene al menos 18 años de edad; (ii) está autorizado para actuar en nombre de una entidad comercial legítima; y (iii) cualquier información que proporcione se envía con fines legítimos de negocio a negocio. No nos dirigimos, solicitamos ni aceptamos envíos de consumidores, pacientes ni personas que actúen a título personal. Liv Well Pharmaceuticals LLC-FZ no asume ninguna responsabilidad por obligaciones relacionadas con la tergiversación de edad o capacidad.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="data-rights" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">8. Sus Derechos de Protección de Datos (Global)</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Independientemente de su ubicación, usted tiene ciertos derechos sobre sus datos personales bajo las leyes de protección de datos aplicables, incluido el Decreto-Ley Federal de los EAU N.º 45/2021, el Reglamento General de Protección de Datos de la UE (RGPD), la Ley de Privacidad del Consumidor de California (CCPA) y otras regulaciones locales. Estos derechos pueden incluir: (i) el derecho a acceder, corregir o eliminar sus datos personales; (ii) el derecho a restringir u oponerse al procesamiento; (iii) el derecho a la portabilidad de datos; y (iv) el derecho a retirar el consentimiento cuando el procesamiento se base en él. Para ejercer cualquiera de estos derechos, contáctenos con una descripción de su solicitud. Responderemos dentro del plazo exigido por la ley aplicable y podremos solicitar verificación de su identidad para proteger su privacidad. Si se encuentra en el Espacio Económico Europeo, también tiene derecho a presentar una reclamación ante su autoridad local de protección de datos. Si se encuentra en los EAU, puede contactar a la Oficina de Datos de los EAU en relación con inquietudes sobre el procesamiento de sus datos personales.
        </p>
      </div>
      <div className="border-t border-border my-8" />
      <div id="contact" className="scroll-mt-28">
        <h2 className="text-xl font-semibold text-primary mb-3 mt-8">Contáctenos</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos en:{" "}
          <a href="mailto:info@livwellpharmaceuticals.com" className="text-primary hover:underline font-medium">
            info@livwellpharmaceuticals.com
          </a>
        </p>
      </div>
    </>
  )
}
