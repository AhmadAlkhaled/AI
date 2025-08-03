import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Target, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
            Über <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Aegis</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Wir sind ein innovatives Team von Cybersicherheitsexperten, das sich der Mission verschrieben hat,
            Unternehmen jeder Größe vor digitalen Bedrohungen zu schützen.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="glass-card card-hover border-primary/20">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Unsere Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Wir demokratisieren Cybersicherheit durch KI-gestützte Technologie. Unser Ziel ist es, auch kleineren
                Unternehmen Zugang zu Enterprise-Level-Sicherheitslösungen zu ermöglichen, die bisher nur großen
                Konzernen vorbehalten waren.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card card-hover border-primary/20">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Unsere Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Eine Welt, in der jedes Unternehmen - unabhängig von Größe oder Budget - proaktiv gegen Cyberbedrohungen
                geschützt ist. Wir streben nach einer Zukunft, in der Sicherheitslücken automatisch erkannt und behoben
                werden, bevor Schäden entstehen.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Unser{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Lernen Sie die Experten kennen, die Aegis zu dem machen, was es ist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Gründerin",
                description: "15+ Jahre Erfahrung in Cybersicherheit, ehemals bei Google Security",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Marcus Weber",
                role: "CTO",
                description: "KI-Experte mit Fokus auf Machine Learning für Sicherheitsanwendungen",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Lisa Müller",
                role: "Head of Research",
                description: "Promovierte Informatikerin, spezialisiert auf Threat Intelligence",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Alex Rodriguez",
                role: "Lead Security Engineer",
                description: "Penetration Testing Experte mit 12+ Jahren Branchenerfahrung",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Nina Kowalski",
                role: "Head of Compliance",
                description: "Rechtsanwältin mit Spezialisierung auf Datenschutz und IT-Recht",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Tom Anderson",
                role: "VP Engineering",
                description: "Full-Stack Entwickler mit Fokus auf skalierbare Sicherheitsarchitekturen",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="glass-card card-hover border-primary/20 hover:border-secondary/40 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform"></div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Unsere{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Werte</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Sicherheit First",
                description: "Sicherheit steht bei allem was wir tun an erster Stelle",
              },
              {
                icon: Users,
                title: "Transparenz",
                description: "Offene Kommunikation und ehrliche Beratung für unsere Kunden",
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Kontinuierliche Weiterentwicklung unserer Technologie",
              },
              {
                icon: Target,
                title: "Exzellenz",
                description: "Höchste Qualitätsstandards in allen Bereichen",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="glass-card card-hover border-primary/20 text-center hover:border-secondary/40 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glass-card card-hover border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Bereit für die Zukunft der Cybersicherheit?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schließen Sie sich Tausenden von Unternehmen an, die bereits auf Aegis vertrauen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="btn-primary text-white border-0 px-8 py-4 text-lg">
                    Kostenlos testen
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-blue-500/10 px-8 py-4 text-lg bg-transparent"
                  >
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
