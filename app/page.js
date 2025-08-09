"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Shield,
  Zap,
  Eye,
  Lock,
  ArrowRight,
  Menu,
  X,
  Globe,
  Server,
  Activity,
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  LineChart,
  Database,
  Wifi,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Michael Schmidt",
      company: "DataSecure AG",
      role: "IT-Direktor",
      content: "Seit der Implementierung von Aegis haben wir 99.9% aller Angriffe erfolgreich abgewehrt.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Lisa Müller",
      company: "CloudTech Solutions",
      role: "Security Manager",
      content: "Die Benutzerfreundlichkeit und Effizienz von Aegis übertrifft alle Erwartungen.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Jonas Becker",
      company: "FinServe AG",
      role: "Head of IT",
      content: "Onboarding ohne Agenten und sofort messbarer Mehrwert.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Anna Keller",
      company: "Medico Health",
      role: "CISO",
      content: "Compliance-Reports sparen uns Tage in der Audit-Vorbereitung.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Tobias Wagner",
      company: "RetailNext",
      role: "Security Lead",
      content: "Die Priorisierung der Findings ist erstklassig.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Julia Neumann",
      company: "GreenEnergy",
      role: "IT Governance",
      content: "Transparenz über alle Cloud-Accounts hinweg – endlich zentral.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Markus Vogel",
      company: "AutoLogic",
      role: "SOC Manager",
      content: "Weniger False Positives, schnellere Reaktion.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Nina Hartmann",
      company: "EduNet",
      role: "IT-Sicherheit",
      content: "Intuitive Oberfläche und starke Alerting-Funktionen.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Felix Brandt",
      company: "ShipIt Logistics",
      role: "DevSecOps",
      content: "Nahtlose Integrationen in unsere Toolchain.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Sofia Lehmann",
      company: "BioTech Labs",
      role: "Risk Officer",
      content: "Fundierte Berichte und klare Handlungsempfehlungen.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "David Krause",
      company: "UrbanBank",
      role: "IT Ops",
      content: "24/7 Monitoring mit verlässlichen Alerts.",
      rating: 5,
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "M. Schulz",
      role: "CISO, FinServe AG",
      text: "Aegis hat unsere Mean-Time-to-Detect um 68% gesenkt.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "L. Weber",
      role: "IT-Leiter, AutoTech",
      text: "Nahtlose Integration ins bestehende SIEM. Top!",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "T. Hartmann",
      role: "SOC Lead, RetailCo",
      text: "Alarme sind präziser, weniger False Positives.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "A. Hoffmann",
      role: "CTO, HealthSoft",
      text: "Transparente Reports überzeugen auch Auditoren.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "S. Kaiser",
      role: "CIO, LogiChain",
      text: "24/7 Monitoring und klare Eskalationspfade.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "R. Meier",
      role: "Founder, SaaSCloud",
      text: "PoC in 2 Wochen – klar messbare Ergebnisse.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "J. Krüger",
      role: "Head of IT, IndustrieX",
      text: "Zero-Trust-Ansatz gut unterstützt.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "V. Klein",
      role: "Security Arch., BuildCo",
      text: "Sehr flexible Richtlinien-Engine.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "F. Wagner",
      role: "Ops Lead, MediaHub",
      text: "Dashboards sind wirklich hilfreich.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "K. Neumann",
      role: "CISO, BankPlus",
      text: "Audits laufen schneller mit Aegis.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "N. Brandt",
      role: "SecOps, PharmaOne",
      text: "Automatisierte Response spart viel Zeit.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "P. Vogel",
      role: "VP Eng., AdServe",
      text: "Empfehlung für wachsende SaaS-Teams.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const stats = [
    { number: "99.9%", label: "Erkennungsrate" },
    { number: "< 1s", label: "Reaktionszeit" },
    { number: "10M+", label: "Geschützte Endpunkte" },
    { number: "24/7", label: "Support" },
  ]

  const useCases = [
    {
      key: "web",
      icon: Globe,
      title: "Web Security",
      description: "Schützen Sie Ihre Webanwendungen mit kontinuierlichen Scans, WAF-Empfehlungen und CDN-Härtung.",
      points: ["OWASP Top 10", "WAF Empfehlungen", "CDN-Härtung"],
      image: "/placeholder.svg?height=520&width=880",
    },
    {
      key: "cloud",
      icon: Server,
      title: "Cloud Security",
      description: "Transparenz in Multi-Cloud-Umgebungen: CSPM-Checks, IAM-Analysen und Exposure-Scans.",
      points: ["CSPM Checks", "IAM Analyse", "Storage Exposure Scan"],
      image: "/placeholder.svg?height=520&width=880",
    },
    {
      key: "darkweb",
      icon: Lock,
      title: "Dark Web Monitoring",
      description: "Früherkennung von Leaks, kompromittierten Credentials und Brand-Abuse im Dark Web.",
      points: ["Leak-Erkennung", "Brand Monitoring", "Credential Stuffing Frühwarnung"],
      image: "/placeholder.svg?height=520&width=880",
    },
  ]

  const kpis = [
    { label: "Blockierte Angriffe", value: "12.4k", trend: "+310", up: true },
    { label: "Falsch-Positive", value: "0.4%", trend: "-0.1%", up: false },
    { label: "Durchschn. Scanzeit", value: "4m 38s", trend: "-12%", up: true },
    { label: "Sensor-Latenz", value: "172ms", trend: "-8ms", up: true },
  ]

  const blogPosts = [
    {
      title: "Zero Trust in der Praxis: Ein Leitfaden",
      excerpt: "Warum Zero Trust mehr als ein Buzzword ist und wie Sie pragmatisch starten.",
      image: "/placeholder.svg?height=420&width=720",
      href: "#",
    },
    {
      title: "Ransomware 2025: Trends & Abwehr",
      excerpt: "Die neuesten Taktiken der Angreifer und was wirklich schützt.",
      image: "/placeholder.svg?height=420&width=720",
      href: "#",
    },
    {
      title: "Von Alerts zu Aktionen: SOAR light",
      excerpt: "Wie Sie aus Alarmevents automatisierte Playbooks erstellen.",
      image: "/placeholder.svg?height=420&width=720",
      href: "#",
    },
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

        {/* Features Section (unverändert im Look) */}
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

        {/* NEW: Use Cases Section (gleicher Stil, dunkles Glas, lila/blau Akzente) */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Anwendungsfälle</Badge>
            <h2 className="text-4xl font-bold">
              Passend für{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Ihren Stack
              </span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Wählen Sie den Fokus – Aegis passt sich Ihrer Umgebung an, von Web bis Cloud und Dark Web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <Card key={uc.key} className="glass-card card-hover border-purple-500/20 overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                      <uc.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white">{uc.title}</CardTitle>
                      <CardDescription className="text-gray-400">{uc.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <img
                    src={uc.image || "/placeholder.svg"}
                    alt={`${uc.title} Vorschau`}
                    className="w-full h-40 object-cover rounded-md border border-purple-500/20"
                  />
                  <ul className="mt-4 space-y-2">
                    {uc.points.map((p) => (
                      <li key={p} className="flex items-center text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" className="w-full bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                    Mehr erfahren
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* NEW: Live Analytics (ohne Theme-Wechsel, gleiche Farbpalette) */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-slate-900/60">
              <LineChart className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300 text-sm">Live Analytics</span>
            </div>
            <h2 className="text-4xl font-bold mt-4">
              Bedrohungen{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                im Blick
              </span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              KPIs in Echtzeit – priorisiert und übersichtlich, damit Ihr Team schneller handeln kann.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* KPI Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {kpis.map((k) => (
                <Card key={k.label} className="glass-card card-hover border-purple-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-400 text-sm">{k.label}</div>
                        <div className="text-3xl font-bold text-white mt-1">{k.value}</div>
                      </div>
                      <div
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          k.up ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                        }`}
                      >
                        {k.up ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                        {k.trend}
                      </div>
                    </div>
                    <div className="mt-4 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          k.up ? "from-blue-500 to-purple-500" : "from-rose-500 to-rose-400"
                        }`}
                        style={{ width: k.up ? "72%" : "38%" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Health */}
            <Card className="glass-card card-hover border-primary/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-cyan-400" />
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Web Server", status: "online", load: 34, icon: Server },
                  { name: "Database", status: "online", load: 67, icon: Database },
                  { name: "API Gateway", status: "warning", load: 89, icon: Wifi },
                  { name: "Load Balancer", status: "online", load: 23, icon: Activity },
                ].map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                    <div className="flex items-center space-x-3">
                      <service.icon className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-white font-medium">{service.name}</p>
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              service.status === "online" ? "bg-green-500 animate-pulse" : "bg-yellow-500 animate-pulse"
                            }`}
                          ></div>
                          <span
                            className={`text-sm ${service.status === "online" ? "text-green-400" : "text-yellow-400"}`}
                          >
                            {service.status === "online" ? "Online" : "Warnung"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">{service.load}% Load</p>
                      <Progress value={service.load} className="w-20" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* NEW: Integrationen / Partner */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Integrationen</Badge>
            <h2 className="text-4xl font-bold">
              Nahtlos{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                verbunden
              </span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Aegis integriert sich in Ihre bestehende Toolchain – von Cloud bis Ticketing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {["AWS", "Azure", "GCP", "GitHub", "Slack", "Jira"].map((name) => (
              <Card key={name} className="glass-card border-purple-500/20 text-center">
                <CardContent className="p-4">
                  <div className="w-10 h-10 mx-auto rounded-md bg-gradient-to-r from-purple-600 to-blue-600 mb-2" />
                  <div className="text-gray-300 text-sm">{name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section (Carousel with 3 visible on desktop) */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Was unsere{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Kunden sagen
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Echtes Feedback aus regulierten Branchen, Tech und Mittelstand.
            </p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="glass-card card-hover border-purple-500/20 h-full">
                    <CardContent className="p-6 flex h-full flex-col">
                      <div className="flex items-center gap-4">
                        <img
                          src={t.avatar || "/placeholder.svg"}
                          alt={`Avatar von ${t.name}`}
                          className="w-12 h-12 rounded-full border border-purple-500/30 object-cover"
                        />
                        <div>
                          <div className="font-semibold text-white">{t.name}</div>
                          <div className="text-purple-400 text-sm">{t.role}</div>
                          <div className="text-gray-400 text-xs">{t.company}</div>
                        </div>
                      </div>

                      <div className="flex mt-4 mb-2">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.348l-2.882 2.024c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.484 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="text-gray-300 leading-relaxed">
                        {'"'}
                        {t.content}
                        {'"'}
                      </blockquote>

                      <div className="mt-6">
                        <div className="h-px bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-transparent" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              aria-label="Vorherige Kundenstimmen"
              className="left-0 -translate-y-1/2 top-1/2 bg-slate-900/70 border border-purple-500/30 hover:bg-slate-800/80 text-white"
            />
            <CarouselNext
              aria-label="Nächste Kundenstimmen"
              className="right-0 -translate-y-1/2 top-1/2 bg-slate-900/70 border border-purple-500/30 hover:bg-slate-800/80 text-white"
            />
          </Carousel>
        </section>

        {/* NEW: Blog Preview (gleiche Optik) */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Blog</Badge>
            <h2 className="text-4xl font-bold">Insights & Best Practices</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Aktuelle Entwicklungen, Leitfäden und Fallstudien aus der Praxis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="glass-card card-hover border-purple-500/20 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-40 object-cover border-b border-purple-500/20"
                />
                <CardHeader>
                  <CardTitle className="text-white text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-gray-300">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50 w-full"
                    asChild
                  >
                    <a href={post.href} aria-label={`Weiterlesen: ${post.title}`}>
                      Weiterlesen
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section (unverändert im Stil) */}
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
      </div>
    </div>
  )
}
