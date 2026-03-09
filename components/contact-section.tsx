"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react"

// Zod schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Failed')
      setIsSuccess(true)
      reset()
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      setSubmitError(
        'Something went wrong. Please email us at info@livwellpharmaceuticals.com'
      )
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#0a2351]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance text-white">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <div className="flex justify-center mb-6" aria-hidden="true">
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Have questions about our products or services? Our team is here to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 lg:col-span-2">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/10 border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2 text-white">Email Us</h3>
                  <p className="text-sm text-white/90">info@livwellpharmaceuticals.com</p>
                  <p className="text-sm text-white/90">support@livwellpharmaceuticals.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/10 border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Call Us</h3>
                  <p className="text-sm text-white/90">+971 4 516 3600 Ext: 8437</p>
                  <p className="text-sm text-white/90">Sun-Thu 9AM-6PM (GST)</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white/10 border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Address</h3>
                  <p className="text-sm text-white/90">
                    Meydan Grandstand, 6th Floor
                    <br />
                    Meydan Road, Nad Al Sheba
                    <br />
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-3 p-8 bg-white/10 border-white/10">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-16 w-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/90">Thank you for reaching out. Our team will get back to you within 1-2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name <span className="text-destructive" aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Your name"
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="text-red-400 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email <span className="text-destructive" aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your@email.com"
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="text-red-400 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+1 (555) 000-0000"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="How can we help?"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message <span className="text-destructive" aria-hidden="true">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your inquiry..."
                    rows={6}
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-red-400 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 rounded-md px-6 text-sm font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitError && (
                  <p className="text-red-400 text-sm text-center mt-2">{submitError}</p>
                )}
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
