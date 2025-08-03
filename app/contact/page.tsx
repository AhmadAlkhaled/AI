"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Mail, Phone, MapPin, ArrowLeft, Send, Linkedin, Twitter, Github } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>
        <div className="cyber-grid opacity-20"></div>
        <div className="floating-particles"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-primary/20 backdrop-blur-xl bg-slate-950/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r text-primary to-secondary bg-clip-text text-transparent">
                Aegis
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kontakt{" "}
            <span className="bg-gradient-to-r text-primary to-secondary bg-clip-text text-transparent">aufnehmen</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Haben Sie Fragen zu Aegis oder möchten Sie eine persönliche Demo? Unser Team steht Ihnen gerne zur
            Verfügung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card card-hover border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Nachricht senden</CardTitle>
              <CardDescription className="text-gray-300">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr vollständiger Name"
                      className="input-modern text-white placeholder:text-gray-400 focus:border-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      E-Mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ihre@email.com"
                      className="input-modern text-white placeholder:text-gray-400 focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    Unternehmen
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ihr Unternehmen (optional)"
                    className="input-modern text-white placeholder:text-gray-400 focus:border-secondary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Nachricht *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    rows={6}
                    className="input-modern text-white placeholder:text-gray-400 focus:border-secondary resize-none"
                  />
                </div>

                <Button type="submit" className="w-full btn-primary text-white border-0">
                  <Send className="w-4 h-4 mr-2" />
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="glass-card card-hover border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Kontaktinformationen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">E-Mail</p>
                    <p className="text-gray-300">contact@aegis-security.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Telefon</p>
                    <p className="text-gray-300">+49 (0) 30 12345678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Adresse</p>
                    <p className="text-gray-300">
                      Aegis Security GmbH
                      <br />
                      Unter den Linden 1<br />
                      10117 Berlin, Deutschland
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="glass-card card-hover border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-white">Geschäftszeiten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Montag - Freitag</span>
                  <span className="text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Samstag</span>
                  <span className="text-white">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sonntag</span>
                  <span className="text-gray-400">Geschlossen</span>
                </div>
                <div className="pt-3 border-t border-primary/20">
                  <p className="text-cyan-400 text-sm">🚨 24/7 Support für Enterprise-Kunden</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="glass-card card-hover border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-white">Folgen Sie uns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-12 h-12 btn-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 btn-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="glass-card card-hover border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Unser Standort</CardTitle>
              <CardDescription className="text-gray-300">
                Besuchen Sie uns in unserem Büro in Berlin Mitte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-slate-800/30 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Interaktive Karte würde hier angezeigt</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
