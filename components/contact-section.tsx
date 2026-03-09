"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Handle form submission
      alert("Thank you for contacting us! We will get back to you soon.")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setErrors({})
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name <span className="text-destructive" aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-required="true"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && <p id="name-error" role="alert" className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email <span className="text-destructive" aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    aria-required="true"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p id="email-error" role="alert" className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  rows={6}
                  aria-required="true"
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p id="message-error" role="alert" className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <Button type="submit" size="lg"                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
