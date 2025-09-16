"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    const mailtoLink = `mailto:jamesayantunji98@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Let's Work Together</h3>
              <p className="text-foreground mb-8 text-pretty leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
                  <Mail className="h-5 w-5 text-accent" />
                  <a
                    href="mailto:jamesayantunji98@gmail.com"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    jamesayantunji98@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                  <a href="tel:+2347041604696" className="text-foreground hover:text-accent transition-colors">
                    +234 704 160 4696
                  </a>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-foreground">Nigeria</span>
                </div>
              </div>
            </div>

            <Card className="border-border shadow-md">
              <CardHeader>
                <CardTitle className="text-primary">Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-accent resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}