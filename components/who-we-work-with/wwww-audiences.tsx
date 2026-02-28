"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

const audiences = [
  {
    headline:
      "You are responsible for supplying pharmaceutical products to a population — and the margin for error is zero",
    body: [
      "National health ministries, public procurement agencies, social security systems, and central supply authorities carry one of the heaviest responsibilities in any country: ensuring that essential pharmaceutical products are available, consistently supplied, and trustworthy — for the people who depend on public healthcare.",
      "The challenges are well-known — budget cycles that don't always align with health needs, supplier markets where quality can be difficult to verify, and the ever-present risk of shortage. In this environment, choosing a supplier based on price alone is not a strategy — it is a risk. What you need is a partner who understands public sector dynamics, meets the documentation and compliance standards your procurement processes demand, and delivers reliably — every time, without exception.",
      "If that is your reality, Liv Well Pharmaceuticals was built with you in mind.",
    ],
    signals: [
      "You manage large-scale or recurring pharmaceutical procurement",
      "Your procurement process requires strict regulatory and quality documentation",
      "You need a partner who can respond quickly when needs change",
      "Consistent supply reliability is non-negotiable for your organisation",
    ],
  },
  {
    headline: "You bring pharmaceutical products to markets that the big players overlook",
    body: [
      "Regional distributors, local importers, and pharmaceutical wholesalers are the backbone of medicine access in many parts of the world. You know your market — the regulations, the logistics, the gaps in supply that your customers depend on you to fill. What you need is a supply partner who can match your standards, complement your portfolio, and give you the confidence to make promises you know will be kept.",
      "In markets where supply options are limited, the temptation to prioritise cost above everything else is understandable — but the consequences of a quality failure fall on the patients at the end of the chain, not on the supplier. We believe that responsible procurement means holding the line on quality, and we work with distributors who share that conviction.",
      "If you are looking for a quality-assured source you can rely on — one that makes your business stronger without putting your reputation at risk — we would like to be part of your supply chain.",
    ],
    signals: [
      "You import or distribute pharmaceutical products in your market",
      "You need a partner with a broad generic portfolio and dependable availability",
      "You understand that your reputation depends on the quality of what you supply",
      "You value a partner who communicates clearly and responds without delays",
    ],
  },
  {
    headline: "Your mission is bigger than one country — and your supply needs to match",
    body: [
      "International organisations, humanitarian health agencies, and NGOs working in global health operate under a unique set of pressures. Your procurement standards are high — often requiring compliance with international frameworks and independent quality verification. Your timelines can shift suddenly in response to emerging needs. And the populations you serve are frequently those with the least access to alternative sources, where the cost of a supply failure is measured in human terms.",
      "Liv Well Pharmaceuticals has the quality credentials, the regulatory standing, and the operational flexibility to be a meaningful contributor to international health supply chains. We take seriously the responsibility that comes with serving organisations whose work has a direct humanitarian dimension — and we hold ourselves to the standards that responsibility demands.",
      "If your organisation coordinates or participates in pharmaceutical supply for vulnerable or underserved populations worldwide, we are ready to be part of that effort.",
    ],
    signals: [
      "You procure pharmaceutical products for programmes operating across multiple countries or regions",
      "Your procurement standards require GMP certification and full documentation",
      "You work in environments where supply reliability is a matter of human wellbeing",
      "You need a partner who can scale up quickly when the situation demands it",
    ],
  },
]

export function WwwwAudiences() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 bg-[#0a2351] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              Does This Sound Like <span className="text-secondary">You?</span>
            </h2>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
            </div>
            <p className="text-sm text-white/70 max-w-2xl mx-auto">
              You don{"'"}t need to fit a specific profile to work with Liv Well Pharmaceuticals. But if any of the
              following describes your organisation, we are confident we can add real value.
            </p>
          </div>

          <div className="space-y-3">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 border-l-4 border-l-secondary rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/[0.07]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <h3 className="text-sm md:text-base font-bold text-white pr-4">
                    {audience.headline}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="space-y-3 mb-5">
                      {audience.body.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-base text-white/70 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                      {audience.signals.map((signal, sIndex) => (
                        <div key={sIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                          <span className="text-base text-white/70">{signal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
