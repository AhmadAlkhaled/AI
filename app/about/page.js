"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  ShieldCheck,
  Users,
  Award,
  Globe,
  ArrowLeft,
  CheckCircle,
  Target,
  Heart,
  Zap,
  TrendingUp,
  Cpu,
  Bot,
  Lock,
  Cloud,
  Activity,
  BarChart3,
  Server,
  Key,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Weber",
      role: "CEO & Gründerin",
      description: "15+ Jahre Erfahrung in Cybersicherheit und KI-Forschung",
      image: "SW",
    },
    {
      name: "Michael Schmidt",
      role: "CTO",
      description: "Experte für Cloud-Sicherheit und Systemarchitektur",
      image: "MS",
    },
    {
      name: "Lisa Müller",
      role: "Head of Security",
      description: "Spezialistin für Bedrohungsanalyse und Incident Response",
      image: "LM",
    },
    {
      name: "Thomas Klein",
      role: "Lead Developer",
      description: "Full-Stack Entwickler mit Fokus auf Sicherheitstechnologien",
      image: "TK",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Sicherheit First",
      description: "Sicherheit steht bei allem was wir tun an erster Stelle",
    },
    {
      icon: Heart,
      title: "Kundenorientierung",
      description: "Unsere Kunden und ihre Bedürfnisse stehen im Mittelpunkt",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Wir entwickeln kontinuierlich neue Lösungen und Technologien",
    },
    {
      icon: CheckCircle,
      title: "Vertrauen",
      description: "Transparenz und Vertrauen bilden die Basis unserer Arbeit",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Gründung von Aegis",
      description: "Start mit einer Vision für bessere Cybersicherheit",
    },
    {
      year: "2021",
      title: "Erste KI-Integration",
      description: "Entwicklung unserer ersten KI-gestützten Bedrohungserkennung",
    },
    {
      year: "2022",
      title: "10.000+ Kunden",
      description: "Erreichen von über 10.000 zufriedenen Kunden weltweit",
    },
    {
      year: "2023",
      title: "ISO 27001 Zertifizierung",
      description: "Erhalt der internationalen Sicherheitszertifizierung",
    },
    {
      year: "2024",
      title: "Globale Expansion",
      description: "Expansion in über 50 Länder mit lokalen Partnern",
    },
  ]

  const competencies = [
    {
      icon: ShieldCheck,
      title: "Managed Threat Defense",
      description:
        "24/7 Überwachung, Erkennung und Reaktion auf Bedrohungen durch unser SOC mit automatisierten Playbooks.",
    },
    {
      icon: Cpu,
      title: "KI-gestützte Erkennung",
      description: "ML-Modelle für Anomalieerkennung, UEBA und proaktive Abwehr komplexer Angriffe in Echtzeit.",
    },
    {
      icon: Bot,
      title: "Automatisierte Response",
      description:
        "SOAR-Workflows zur schnellen Eindämmung, Quarantäne und Wiederherstellung ohne manuelle Verzögerungen.",
    },
    {
      icon: Lock,
      title: "Identitäts- & Zugriffsschutz",
      description:
        "Zero-Trust-Strategie, MFA-Enforcement, Session-Monitoring und Richtlinien über Ihre gesamte Umgebung.",
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description:
        "Sichtbarkeit und Compliance für AWS, Azure, GCP – inklusive Misconfiguration Scans und Drift Detection.",
    },
    {
      icon: Activity,
      title: "Attack Surface Management",
      description:
        "Kontinuierliches Scannen Ihrer externen Angriffsfläche inkl. Dark Web Monitoring und Leak Detection.",
    },
  ]

  const products = [
    {
      title: "Aegis Sentinel",
      description:
        "Unsere zentrale Plattform für Threat Detection & Response mit intuitivem UI, Multi-Tenant-Fähigkeit und APIs.",
      image: "/placeholder.svg?height=360&width=640",
      bullets: [
        "Live-Alerts mit Kontext und Priorisierung",
        "Playbooks und Automatisierungsregeln",
        "Offene APIs und SIEM-Integrationen",
      ],
    },
    {
      title: "Aegis Shield Endpoint",
      description: "Next-Gen Endpoint Protection mit KI-Verhaltensanalyse, Ransomware-Schutz und Forensik.",
      image: "/placeholder.svg?height=360&width=640",
      bullets: ["Verhaltensbasierte Erkennung", "Rollback & Isolation", "Forensik-Timeline & Artefakte"],
    },
    {
      title: "Aegis Cloud Guard",
      description: "Cloud Security Posture Management (CSPM) und Runtime Protection für Container & Serverless.",
      image: "/placeholder.svg?height=360&width=640",
      bullets: [
        "Misconfig Erkennung in IaC & Runtime",
        "Compliance-Reports (ISO, SOC 2, HIPAA)",
        "Runtime Policies & Drift Detection",
      ],
    },
  ]

  const caseStudies = [
    {
      company: "FinNext Bank",
      result: "−74% MTTR",
      description:
        "Dramatische Reduktion der Reaktionszeit bei Incidents durch automatisierte Playbooks und verbesserte Sichtbarkeit.",
      metrics: ["–74% MTTR", "+42% Incident Coverage", "99.99% Uptime"],
      image: "/placeholder.svg?height=180&width=320",
    },
    {
      company: "Medica Health",
      result: "+98% Compliance",
      description: "Schnelles Erreichen von HIPAA/SOC 2 Compliance mit kontinuierlichem Monitoring und Audit-Reports.",
      metrics: ["+98% Compliance", "–60% Audit-Aufwand", "3x schnellere Remediation"],
      image: "/placeholder.svg?height=180&width=320",
    },
    {
      company: "ShopVerse",
      result: "–56% Fraud",
      description: "Deutliche Senkung betrügerischer Aktivitäten im E-Commerce durch KI-gestützte Anomalieerkennung.",
      metrics: ["–56% Fraud", "+31% Conversion", "Realtime Risk Scoring"],
      image: "/placeholder.svg?height=180&width=320",
    },
  ]

  const partners = ["aws", "azure", "gcp", "kubernetes", "docker", "okta", "github", "slack"]

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
              <Link href="/contact">
                <Button variant="outline" size="sm" className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                  Kontakt
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
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              🏆 Ausgezeichnet als "Cybersecurity Company of the Year 2024"
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Über{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Aegis</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Wir sind ein innovatives Cybersicherheitsunternehmen, das sich der Mission verschrieben hat, Unternehmen
              jeder Größe vor den sich ständig weiterentwickelnden digitalen Bedrohungen zu schützen.
            </p>
          </div>
        </section>

        {/* Kompetenzen */}
        <section className="container mx-auto px-4 pb-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Unsere{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Kompetenzen
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              End-to-End-Schutz mit modernster KI, Automatisierung und bewährter Methodik.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {competencies.map((item, idx) => (
              <Card key={idx} className="glass-card card-hover border-purple-500/20">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">{item.title}</CardTitle>
                    <CardDescription className="text-gray-300">{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Produkte & Lösungen */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Produkte &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Lösungen
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Von zentralem Threat Management bis Cloud Security – skalierbar, sicher und intuitiv.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <Card key={i} className="glass-card card-hover border-purple-500/20 overflow-hidden">
                <div className="relative w-full h-44">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={`Produktbild: ${p.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{p.title}</CardTitle>
                  <CardDescription className="text-gray-300">{p.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 mt-1" />
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Wie Aegis funktioniert (Architektur) */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="glass-card border-blue-500/20 overflow-hidden">
              <div className="relative w-full h-80">
                <Image
                  src="/placeholder.svg?height=480&width=800"
                  alt="Schematische Darstellung der Aegis-Plattform-Architektur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Card>
            <div>
              <h3 className="text-3xl font-bold mb-4">Wie Aegis funktioniert</h3>
              <p className="text-gray-300 mb-6">
                Unsere Plattform korreliert Events aus Endpunkten, Cloud, Identität und Netzwerk in Echtzeit, reichert
                sie mit Kontext an und triggert automatisch geeignete Gegenmaßnahmen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Server, title: "Ingestion Layer", desc: "Skalierbare Aufnahme von Logs und Telemetrie." },
                  { icon: BarChart3, title: "Analytics", desc: "UEBA, Anomalien & Threat Intelligence Feeds." },
                  { icon: Key, title: "Zero Trust", desc: "Richtlinien nach Identität, Gerät & Kontext." },
                  { icon: AlertTriangle, title: "SOAR", desc: "Automatisierte Playbooks und Workflows." },
                ].map((f, idx) => (
                  <Card key={idx} className="glass-card border-purple-500/20">
                    <CardHeader className="flex flex-row items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
                        <f.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-base">{f.title}</CardTitle>
                        <CardDescription className="text-gray-300">{f.desc}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Branchen & Integrationen */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-card border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Branchen</CardTitle>
                <CardDescription className="text-gray-300">
                  Flexibel, compliant und skalierbar für regulierte Umgebungen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: "Finanzen", img: "/placeholder.svg?height=80&width=160" },
                    { name: "Gesundheit", img: "/placeholder.svg?height=80&width=160" },
                    { name: "E-Commerce", img: "/placeholder.svg?height=80&width=160" },
                    { name: "Öffentlicher Sektor", img: "/placeholder.svg?height=80&width=160" },
                    { name: "SaaS", img: "/placeholder.svg?height=80&width=160" },
                    { name: "Energie", img: "/placeholder.svg?height=80&width=160" },
                  ].map((b, idx) => (
                    <div key={idx} className="text-center">
                      <div className="relative w-full h-14">
                        <Image
                          src={b.img || "/placeholder.svg"}
                          alt={`${b.name} Symbol`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-gray-300 text-sm mt-2">{b.name}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white">Integrationen</CardTitle>
                <CardDescription className="text-gray-300">
                  Nahtlose Anbindung an Ihre bestehende Toolchain.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {partners.map((p, idx) => (
                    <div key={idx} className="relative w-full h-12">
                      <Image
                        src={`/placeholder.svg?height=48&width=160&query=${encodeURIComponent(p)}%20logo`}
                        alt={`${p} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Unser{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lernen Sie die Experten kennen, die Aegis zu dem machen, was es ist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-card card-hover border-purple-500/20 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{member.image}</span>
                  </div>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <CardDescription className="text-purple-400">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Geschichte (Timeline) */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Unsere{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Geschichte
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Von der Vision zur Realität - die wichtigsten Meilensteine unserer Reise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="glass-card border-purple-500/20 flex-1">
                    <CardHeader>
                      <CardTitle className="text-white">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Kundenerfolge &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Fallstudien
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Messbare Resultate in Sicherheit, Compliance und Effizienz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c, idx) => (
              <Card key={idx} className="glass-card card-hover border-purple-500/20 overflow-hidden">
                <div className="relative w-full h-36">
                  <Image
                    src={c.image || "/placeholder.svg"}
                    alt={`${c.company} Case Study`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{c.company}</CardTitle>
                  <CardDescription className="text-purple-400 font-medium">{c.result}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{c.description}</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {c.metrics.map((m, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-purple-400" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Marketing-Strategie */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Unsere{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Marketing-Strategie
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Wachstumsfokussiert, datengetrieben und auf nachhaltige Kundenbeziehungen ausgerichtet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="glass-card border-purple-500/20">
              <CardHeader className="flex flex-row gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white">ICP & Positionierung</CardTitle>
                  <CardDescription className="text-gray-300">
                    Mid-Market bis Enterprise mit hohen Sicherheitsanforderungen.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm space-y-2">
                <p>• Zielkunden: Finance, Health, SaaS, Public</p>
                <p>• UVP: KI-gestützte Erkennung, SOAR-Automation, Compliance-Reports</p>
                <p>• Differenzierung: Schnelle Implementierung, offene APIs, TCO-Reduktion</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-blue-500/20">
              <CardHeader className="flex flex-row gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white">Channels & Funnel</CardTitle>
                  <CardDescription className="text-gray-300">
                    Kombination aus Inbound, Outbound und Partner-Ökosystem.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm space-y-2">
                <p>• Inbound: Content, Webinare, Community, SEO</p>
                <p>• Outbound: Account-Based, Events, Demos</p>
                <p>• Partner: Cloud Marketplaces, MSSPs, Beratungen</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/20">
              <CardHeader className="flex flex-row gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-white">Pakete & Pricing</CardTitle>
                  <CardDescription className="text-gray-300">
                    Transparent, verbrauchsorientiert und planbar.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300 text-sm space-y-2">
                <p>• Essentials: Kernschutz mit Reporting</p>
                <p>• Professional: + Automatisierung, Integrationen</p>
                <p>• Enterprise: + SLA, dediziertes SOC, Custom Playbooks</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="glass-card card-hover border-purple-500/20 text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-400 mb-2">50,000+</div>
                <div className="text-gray-300">Zufriedene Kunden</div>
              </CardContent>
            </Card>
            <Card className="glass-card card-hover border-blue-500/20 text-center">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Länder weltweit</div>
              </CardContent>
            </Card>
            <Card className="glass-card card-hover border-green-500/20 text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </CardContent>
            </Card>
            <Card className="glass-card card-hover border-yellow-500/20 text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-gray-300">Auszeichnungen</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20">
          <Card className="glass-card border-purple-500/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Bereit, Teil der{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Aegis-Familie
                </span>{" "}
                zu werden?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schließen Sie sich Tausenden von Unternehmen an, die bereits auf Aegis vertrauen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button size="lg" className="btn-primary text-lg px-8 py-4">
                    Kostenlos testen
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
