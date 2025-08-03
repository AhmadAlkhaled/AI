"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: "", content: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: "", content: "" })

    // Simulate API call
    setTimeout(() => {
      if (formData.email && formData.message) {
        setMessage({
          type: "success",
          content: "Vielen Dank für Ihre Nachricht! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.",
        })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "general",
        })
      } else {
        setMessage({ type: "error", content: "Bitte füllen Sie alle Pflichtfelder aus." })
      }
      setIsLoading(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "E-Mail",
      content: "info@aegis-security.com",
      description: "Wir antworten innerhalb von 24 Stunden",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+49 (0) 30 12345678",
      description: "Mo-Fr: 9:00 - 18:00 Uhr",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Alexanderplatz 1, 10178 Berlin",
      description: "Deutschland",
    },
  ]

  const inquiryTypes = [
    { value: "general", label: "Allgemeine Anfrage" },
    { value: "sales", label: "Vertrieb" },
    { value: "support", label: "Technischer Support" },
    { value: "partnership", label: "Partnerschaft" },
    { value: "press", label: "Presse" },
  ]

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>
        <div className="cyber-grid opacity-20"></div>
        <div className="floating-particles"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-purple-500/20 backdrop-blur-xl bg-slate-950/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Aegis
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/about">
                <Button variant="outline" size="sm" className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                  Über uns
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="btn-primary">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kontaktieren Sie{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">uns</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Haben Sie Fragen zu unseren Cybersicherheitslösungen? Unser Expertenteam steht Ihnen gerne zur Verfügung.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-card card-hover border-purple-500/20 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-400 font-semibold mb-2">{info.content}</p>
                  <p className="text-gray-300 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="glass-card border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Nachricht senden</CardTitle>
                  <CardDescription className="text-gray-300">
                    Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Message Display */}
                  {message.content && (
                    <div
                      className={`mb-6 p-4 rounded-lg border flex items-center space-x-2 ${
                        message.type === "success"
                          ? "bg-green-500/20 border-green-500/30 text-green-300"
                          : "bg-red-500/20 border-red-500/30 text-red-300"
                      }`}
                    >
                      {message.type === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm">{message.content}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">
                          Vorname *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Max"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="input-modern"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">
                          Nachname *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Mustermann"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="input-modern"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        E-Mail-Adresse *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="max@unternehmen.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-modern"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">
                          Unternehmen
                        </Label>
                        <Input
                          id="company"
                          placeholder="Ihr Unternehmen"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="input-modern"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Telefon
                        </Label>
                        <Input
                          id="phone"
                          placeholder="+49 (0) 30 12345678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="input-modern"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="text-white">
                        Art der Anfrage
                      </Label>
                      <select
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="input-modern w-full"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        Betreff *
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Worum geht es?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="input-modern"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Nachricht *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="input-modern min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Nachricht senden
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <Card className="glass-card border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Clock className="w-6 h-6 mr-2 text-purple-400" />
                      Antwortzeiten
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Allgemeine Anfragen</span>
                      <span className="text-purple-400 font-semibold">24 Stunden</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Vertriebsanfragen</span>
                      <span className="text-purple-400 font-semibold">4 Stunden</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Support-Tickets</span>
                      <span className="text-purple-400 font-semibold">2 Stunden</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Notfälle</span>
                      <span className="text-red-400 font-semibold">Sofort</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Users className="w-6 h-6 mr-2 text-blue-400" />
                      Unser Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Unser erfahrenes Team aus Cybersicherheitsexperten steht Ihnen mit Rat und Tat zur Seite.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• 15+ Jahre Branchenerfahrung</li>
                      <li>• Zertifizierte Sicherheitsexperten</li>
                      <li>• 24/7 Support verfügbar</li>
                      <li>• Mehrsprachiger Service</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <MessageSquare className="w-6 h-6 mr-2 text-green-400" />
                      Häufige Fragen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Bevor Sie uns kontaktieren, schauen Sie gerne in unsere FAQ-Sektion.
                    </p>
                    <Button variant="outline" className="w-full bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                      FAQ besuchen
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="container mx-auto px-4 py-16">
          <Card className="glass-card border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white text-center">Besuchen Sie uns</CardTitle>
              <CardDescription className="text-gray-300 text-center">
                Unser Hauptsitz in Berlin - Termine nach Vereinbarung
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-slate-800/50 rounded-lg flex items-center justify-center border border-gray-700/50">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">Alexanderplatz 1</p>
                  <p className="text-gray-300">10178 Berlin, Deutschland</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
