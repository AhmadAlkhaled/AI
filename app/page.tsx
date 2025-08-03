import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Eye, FileCheck, ArrowRight, Play, Star, Check, Users, Building, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="cyber-grid"></div>
        <div className="floating-particles"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-primary/20 backdrop-blur-xl bg-slate-950/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Aegis
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors">
                How it Works
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-blue-500/20">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="btn-primary text-white border-0">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-glow">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  AEGIS
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8 animate-pulse"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Automatisierte KI-Sicherheits-Scans für{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                maximale Unternehmenssicherheit
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Schützen Sie Ihr Unternehmen mit KI-gestützten Schwachstellen-Scans, Echtzeit-Monitoring und automatischen
              Compliance-Prüfungen. Vertrauen Sie auf die Zukunft der Cybersicherheit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="btn-primary text-white border-0 px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Kostenlos testen
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-blue-500/10 px-8 py-4 text-lg bg-transparent"
              >
                Demo ansehen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="glass-card card-hover p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
                <div className="text-gray-300">Erkennungsrate</div>
              </div>
              <div className="glass-card card-hover p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{"<"}5min</div>
                <div className="text-gray-300">Scan-Zeit</div>
              </div>
              <div className="glass-card card-hover p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Modernste{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                KI-Technologie
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Entdecken Sie die Funktionen, die Aegis zur führenden Cybersicherheitslösung machen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card card-hover border-primary/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">KI-Scans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Automatisierte Schwachstellen-Erkennung mit modernster KI-Technologie
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card card-hover border-primary/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Echtzeit-Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  24/7 Überwachung Ihrer Systeme mit sofortigen Benachrichtigungen
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card card-hover border-primary/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Automatische Prüfung von DSGVO, ISO 27001 und anderen Standards
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card card-hover border-primary/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Detaillierte Berichte und Handlungsempfehlungen für Ihr Team
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              So einfach{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                funktioniert's
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">In nur 3 Schritten zu umfassender Cybersicherheit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="glass-card card-hover p-8 mb-6 hover:scale-105 transition-transform">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Domain eingeben</h3>
                <p className="text-gray-300">Geben Sie einfach Ihre Domain oder IP-Adresse ein</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-card card-hover p-8 mb-6 hover:scale-105 transition-transform">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scan starten</h3>
                <p className="text-gray-300">Unsere KI analysiert Ihre Systeme in Echtzeit</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-card card-hover p-8 mb-6 hover:scale-105 transition-transform">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Bericht erhalten</h3>
                <p className="text-gray-300">Erhalten Sie detaillierte Berichte und Handlungsempfehlungen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vertrauen von{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tausenden
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card card-hover border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Aegis hat unsere Sicherheitslage revolutioniert. Die KI-gestützten Scans sind unglaublich präzise."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white font-semibold">Sarah Mueller</div>
                    <div className="text-gray-400 text-sm">CTO, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card card-hover border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Die Echtzeit-Überwachung gibt uns die Sicherheit, die wir brauchen. Absolute Empfehlung!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white font-semibold">Michael Schmidt</div>
                    <div className="text-gray-400 text-sm">CISO, SecureBank</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card card-hover border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Compliance war noch nie so einfach. Aegis automatisiert alles und spart uns Stunden."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mr-3"></div>
                  <div>
                    <div className="text-white font-semibold">Anna Weber</div>
                    <div className="text-gray-400 text-sm">Head of IT, DataFlow</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer Logos */}
          <div className="text-center">
            <p className="text-gray-400 mb-8">Vertrauen von führenden Unternehmen</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="glass-card card-hover px-6 py-3">
                <span className="text-white font-semibold">TechCorp</span>
              </div>
              <div className="glass-card card-hover px-6 py-3">
                <span className="text-white font-semibold">SecureBank</span>
              </div>
              <div className="glass-card card-hover px-6 py-3">
                <span className="text-white font-semibold">DataFlow</span>
              </div>
              <div className="glass-card card-hover px-6 py-3">
                <span className="text-white font-semibold">CyberSafe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transparente{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Preise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Wählen Sie den Plan, der perfekt zu Ihren Anforderungen passt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="glass-card card-hover border-primary/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Basic</CardTitle>
                <CardDescription className="text-gray-300">Für kleine Unternehmen</CardDescription>
                <div className="text-4xl font-bold text-white mt-4">
                  €29<span className="text-lg text-gray-400">/Monat</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Bis zu 5 Domains</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Wöchentliche Scans</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Basic Reports</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">E-Mail Support</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600">
                  Plan wählen
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="glass-card card-hover border-cyan-400/40 hover:border-cyan-400/60 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1">Beliebt</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Pro</CardTitle>
                <CardDescription className="text-gray-300">Für wachsende Unternehmen</CardDescription>
                <div className="text-4xl font-bold text-white mt-4">
                  €99<span className="text-lg text-gray-400">/Monat</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Bis zu 25 Domains</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Tägliche Scans</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Erweiterte Reports</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">API Zugang</span>
                </div>
                <Button className="w-full mt-6 btn-primary">Plan wählen</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="glass-card card-hover border-primary/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
                <CardDescription className="text-gray-300">Für große Unternehmen</CardDescription>
                <div className="text-4xl font-bold text-white mt-4">Individuell</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Unbegrenzte Domains</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Echtzeit Scans</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Custom Reports</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Dedicated Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">On-Premise Option</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Kontakt aufnehmen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 bg-slate-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Aegis
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Die Zukunft der Cybersicherheit. Schützen Sie Ihr Unternehmen mit KI-gestützter Technologie.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Produkt</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Preise
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Unternehmen</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Karriere
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    AGB
                  </Link>
                </li>
                <li>
                  <Link href="/imprint" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Sicherheit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/20 mt-12 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Aegis. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
