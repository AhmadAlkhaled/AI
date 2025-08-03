"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Eye, Lock, ArrowRight, Star, Menu, X } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    {
      icon: Shield,
      title: "Erweiterte Bedrohungserkennung",
      description: "KI-gestützte Erkennung von Zero-Day-Exploits und fortgeschrittenen persistenten Bedrohungen",
      color: "purple",
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Kontinuierliche Überwachung Ihrer Systeme mit Echtzeit-Benachrichtigungen",
      color: "blue",
    },
    {
      icon: Lock,
      title: "Compliance Management",
      description: "Automatische Einhaltung von GDPR, ISO 27001 und anderen Sicherheitsstandards",
      color: "green",
    },
    {
      icon: Zap,
      title: "Automatische Reaktion",
      description: "Sofortige Eindämmung und Neutralisierung erkannter Bedrohungen",
      color: "yellow",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Weber",
      company: "TechCorp GmbH",
      role: "CISO",
      content:
        "Aegis hat unsere Sicherheitslage revolutioniert. Die KI-gestützte Bedrohungserkennung ist unübertroffen.",
      rating: 5,
    },
    {
      name: "Michael Schmidt",
      company: "DataSecure AG",
      role: "IT-Direktor",
      content: "Seit der Implementierung von Aegis haben wir 99.9% aller Angriffe erfolgreich abgewehrt.",
      rating: 5,
    },
    {
      name: "Lisa Müller",
      company: "CloudTech Solutions",
      role: "Security Manager",
      content: "Die Benutzerfreundlichkeit und Effizienz von Aegis übertrifft alle Erwartungen.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "99.9%", label: "Erkennungsrate" },
    { number: "< 1s", label: "Reaktionszeit" },
    { number: "10M+", label: "Geschützte Endpunkte" },
    { number: "24/7", label: "Support" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

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
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Aegis
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                Über uns
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Kontakt
              </Link>
              <Link href="/login">
                <Button variant="outline" className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                  Anmelden
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="btn-primary">Dashboard</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Über uns
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="w-full bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                    Anmelden
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="w-full btn-primary">Dashboard</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              🚀 Neue KI-gestützte Bedrohungserkennung verfügbar
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Schützen Sie Ihr
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-glow">
                Digitales Reich
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Aegis bietet fortschrittliche Cybersicherheitslösungen mit KI-gestützter Bedrohungserkennung,
              Echtzeit-Monitoring und automatischer Incident Response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  Kostenlos testen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 bg-slate-800/50 border-gray-600 hover:bg-slate-700/50"
                >
                  Mehr erfahren
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card card-hover border-purple-500/20 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Warum{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Aegis?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Modernste Technologie trifft auf bewährte Sicherheitspraktiken
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card card-hover border-purple-500/20">
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-${feature.color}-600 to-${feature.color}-500 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Was unsere{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Kunden sagen
              </span>
            </h2>
          </div>

          <Card className="glass-card border-purple-500/20 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-300 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div>
                <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                <div className="text-purple-400">{testimonials[currentTestimonial].role}</div>
                <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-purple-400" : "bg-gray-600"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <Card className="glass-card border-purple-500/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bereit für{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ultimativen Schutz?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Starten Sie noch heute mit Aegis und erleben Sie die Zukunft der Cybersicherheit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button size="lg" className="btn-primary text-lg px-8 py-4">
                    Jetzt starten
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 bg-slate-800/50 border-gray-600 hover:bg-slate-700/50"
                  >
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t border-purple-500/20 bg-slate-950/80 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Aegis
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Fortschrittliche Cybersicherheitslösungen für das digitale Zeitalter.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Produkt</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="/dashboard" className="hover:text-white transition-colors">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Preise
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Unternehmen</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Kontakt
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Karriere
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Hilfe-Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Dokumentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 Aegis Cybersecurity. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
