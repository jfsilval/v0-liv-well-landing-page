"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Liv Well Pharmaceuticals different?",
    answer:
      "Our focus is simple: making quality healthcare more accessible. We specialize in developing affordable generic medicines without compromising on quality standards. Every product we manufacture undergoes rigorous quality control and meets international regulatory requirements. At Liv Well, we believe good medicine shouldn't be out of reach; and that's what drives us every day.",
  },
  {
    question: "Are your products WHO-approved?",
    answer:
      "Our products are manufactured in compliance with WHO Good Manufacturing Practices (GMP) guidelines, which are internationally recognized quality standards for pharmaceutical production. We maintain strict quality control processes and adhere to regulatory requirements in all markets where we operate. For specific product certifications or regulatory approvals, please contact us directly as requirements vary by product and destination market.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "Quality is built into every step of our process. We start by carefully selecting and testing raw materials from qualified suppliers. Throughout manufacturing, our team conducts in-process controls at critical points to catch any deviations early. Every batch undergoes comprehensive cross-laboratory testing before release, and we maintain detailed documentation to ensure full traceability. All our facilities operate under Good Manufacturing Practices (GMP), and we conduct regular internal audits to maintain these standards consistently.",
  },
  {
    question: "Do you offer generic alternatives to brand-name drugs?",
    answer:
      "Yes, we offer high-quality generic alternatives to many brand-name medications at more affordable prices. Our generic medicines are manufactured to rigorous quality standards and provide effective therapeutic options for patients seeking cost-effective treatment solutions.",
  },
  {
    question: "What is your approach to sustainability?",
    answer:
      "We're working to reduce our environmental footprint through practical measures. This includes optimizing our manufacturing processes to minimize waste, implementing energy-efficient practices where feasible, and ensuring proper disposal of pharmaceutical waste according to regulations. We recognize that pharmaceutical manufacturing has environmental challenges, and we're committed to continuously improving our practices as we grow. Sustainability is an ongoing effort, not a destination.",
  },
  {
    question: "How can healthcare providers partner with Liv Well?",
    answer:
      "We value partnerships with Ministries of Health, healthcare providers, hospitals, clinics, and distributors who share our commitment to accessible healthcare. Whether you're interested in product availability for your patients, bulk supply agreements, or distribution opportunities, we're open to discussing how we can work together. Please contact us through the form below or email us directly at info@livwellpharmaceuticals.com with details about your organization and needs. We'll respond promptly to explore potential collaboration.",
  },
]

export function AccordionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Learn more about our pharmaceutical solutions and how we can support your healthcare needs.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
