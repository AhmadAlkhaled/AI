"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Award, Globe, ArrowLeft, CheckCircle, Target, Heart, Zap, Eye, TrendingUp } from "lucide-react"
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

        {/* Mission & Vision */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-card card-hover border-purple-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Unsere Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Wir demokratisieren Cybersicherheit, indem wir fortschrittliche, KI-gestützte Sicherheitslösungen
                  entwickeln, die für Unternehmen jeder Größe zugänglich und erschwinglich sind. Unser Ziel ist es, eine
                  sicherere digitale Welt zu schaffen, in der Innovation ohne Angst vor Cyberbedrohungen gedeihen kann.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card card-hover border-blue-500/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Unsere Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Wir streben danach, der weltweit führende Anbieter von intelligenten Cybersicherheitslösungen zu
                  werden. Durch kontinuierliche Innovation und die Nutzung modernster Technologien wie künstlicher
                  Intelligenz und maschinellem Lernen wollen wir die Zukunft der Cybersicherheit gestalten.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Unsere{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Werte</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Diese Grundprinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card card-hover border-purple-500/20 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
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

        {/* Timeline */}
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
