"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Globe,
  Eye,
  FileText,
  Settings,
  Plus,
  Filter,
  Download,
  Bell,
  Search,
  Activity,
  Server,
  Database,
  Wifi,
  Lock,
  Unlock,
  RefreshCw,
  Play,
  BarChart3,
  PieChart,
  LineChart,
  Edit,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [securityScore, setSecurityScore] = useState(87)
  const [isScanning, setIsScanning] = useState(false)
  const [selectedDomain, setSelectedDomain] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [notifications, setNotifications] = useState(3)
  const [realTimeData, setRealTimeData] = useState({
    activeThreats: 2,
    blockedAttacks: 147,
    systemLoad: 34,
    uptime: 99.9,
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData((prev) => ({
        ...prev,
        blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 3),
        systemLoad: Math.max(10, Math.min(90, prev.systemLoad + (Math.random() - 0.5) * 10)),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleStartScan = (domain) => {
    setIsScanning(true)
    setSelectedDomain(domain)
    // Simulate scan process
    setTimeout(() => {
      setIsScanning(false)
      setSecurityScore(Math.floor(Math.random() * 40) + 60)
    }, 3000)
  }

  const vulnerabilities = [
    {
      id: 1,
      title: "SQL Injection Vulnerability",
      severity: "Kritisch",
      domain: "api.example.com",
      description: "Potentielle SQL Injection in Login-Formular erkannt",
      cvss: "9.8",
      status: "Offen",
      discovered: "2024-01-15",
      category: "Injection",
    },
    {
      id: 2,
      title: "Cross-Site Scripting (XSS)",
      severity: "Hoch",
      domain: "shop.example.com",
      description: "Reflected XSS in Suchfunktion gefunden",
      cvss: "7.4",
      status: "In Bearbeitung",
      discovered: "2024-01-14",
      category: "XSS",
    },
    {
      id: 3,
      title: "Outdated SSL Certificate",
      severity: "Mittel",
      domain: "blog.example.com",
      description: "SSL-Zertifikat läuft in 30 Tagen ab",
      cvss: "5.3",
      status: "Geplant",
      discovered: "2024-01-13",
      category: "Konfiguration",
    },
    {
      id: 4,
      title: "Weak Password Policy",
      severity: "Niedrig",
      domain: "admin.example.com",
      description: "Schwache Passwort-Richtlinien erkannt",
      cvss: "3.1",
      status: "Behoben",
      discovered: "2024-01-12",
      category: "Authentifizierung",
    },
  ]

  const domains = [
    {
      name: "example.com",
      status: "Aktiv",
      lastScan: "vor 2 Std",
      score: 95,
      ssl: true,
      threats: 0,
      traffic: "Normal",
    },
    {
      name: "shop.example.com",
      status: "Warnung",
      lastScan: "vor 4 Std",
      score: 78,
      ssl: true,
      threats: 3,
      traffic: "Hoch",
    },
    {
      name: "api.example.com",
      status: "Kritisch",
      lastScan: "vor 6 Std",
      score: 45,
      ssl: false,
      threats: 12,
      traffic: "Ungewöhnlich",
    },
    {
      name: "blog.example.com",
      status: "Aktiv",
      lastScan: "vor 1 Tag",
      score: 88,
      ssl: true,
      threats: 1,
      traffic: "Niedrig",
    },
  ]

  const filteredVulnerabilities = vulnerabilities.filter((vuln) => {
    const matchesSearch =
      vuln.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vuln.domain.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || vuln.status.toLowerCase() === filterStatus.toLowerCase()
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"></div>
        <div className="cyber-grid opacity-20"></div>
        <div className="floating-particles"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-primary/20 backdrop-blur-xl bg-slate-950/80 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Aegis
                </span>
              </Link>
              <div className="text-gray-400">|</div>
              <h1 className="text-xl font-semibold text-white">Security Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white relative"
                  onClick={() => setNotifications(0)}
                >
                  <Bell className="w-4 h-4" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </Button>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                    <Settings className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-card card-hover border-primary/20 text-white">
                  <DialogHeader>
                    <DialogTitle>Dashboard Einstellungen</DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Passen Sie Ihr Dashboard an Ihre Bedürfnisse an.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notifications">Push-Benachrichtigungen</Label>
                      <Switch id="notifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="realtime">Echtzeit-Updates</Label>
                      <Switch id="realtime" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="darkmode">Dark Mode</Label>
                      <Switch id="darkmode" defaultChecked />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full cursor-pointer"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Welcome Section with Real-time Stats */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Security Command Center</h2>
              <p className="text-gray-400">Echtzeit-Überwachung Ihrer digitalen Assets</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">System Online</span>
              </div>
              <Badge className="badge-primary">Uptime: {realTimeData.uptime}%</Badge>
            </div>
          </div>

          {/* Real-time Threat Monitor */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="glass-card card-hover border-red-500/20 bg-red-500/5">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-400 text-sm font-medium">Aktive Bedrohungen</p>
                    <p className="text-2xl font-bold text-white">{realTimeData.activeThreats}</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card card-hover border-green-500/20 bg-green-500/5">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-400 text-sm font-medium">Blockierte Angriffe</p>
                    <p className="text-2xl font-bold text-white">{realTimeData.blockedAttacks}</p>
                  </div>
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card card-hover border-blue-500/20 bg-blue-500/5">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-400 text-sm font-medium">System Load</p>
                    <p className="text-2xl font-bold text-white">{Math.round(realTimeData.systemLoad)}%</p>
                  </div>
                  <Activity className="w-8 h-8 text-blue-400" />
                </div>
                <Progress value={realTimeData.systemLoad} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="glass-card card-hover border-cyan-500/20 bg-cyan-500/5">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-cyan-400 text-sm font-medium">Scans heute</p>
                    <p className="text-2xl font-bold text-white">24</p>
                  </div>
                  <Eye className="w-8 h-8 text-cyan-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security Score & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Enhanced Security Score */}
          <Card className="glass-card card-hover border-primary/20 lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                  Security Score
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-500/30 text-blue-400 bg-transparent"
                    onClick={() => setSecurityScore(Math.floor(Math.random() * 40) + 60)}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Aktualisieren
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl font-bold text-white">{securityScore}/100</div>
                <div className="text-right">
                  <Badge
                    className={`text-lg px-4 py-2 ${
                      securityScore >= 80 ? "badge-success" : securityScore >= 60 ? "badge-warning" : "badge-danger"
                    }`}
                  >
                    {securityScore >= 80 ? "Ausgezeichnet" : securityScore >= 60 ? "Gut" : "Kritisch"}
                  </Badge>
                </div>
              </div>

              <Progress value={securityScore} className="mb-6 h-3" />

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-400">12</p>
                  <p className="text-gray-400 text-sm">Sichere Domains</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-yellow-400">3</p>
                  <p className="text-gray-400 text-sm">Warnungen</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-400">1</p>
                  <p className="text-gray-400 text-sm">Kritische Issues</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-800/30 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Nächste geplante Prüfung</p>
                    <p className="text-gray-400 text-sm">Morgen um 02:00 Uhr</p>
                  </div>
                  <Button size="sm" className="btn-primary">
                    <Calendar className="w-4 h-4 mr-2" />
                    Planen
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card card-hover border-primary/20">
            <CardHeader>
              <CardTitle className="text-white">Schnellaktionen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full btn-primary hover:from-blue-700 hover:to-cyan-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Neuer Scan
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-card card-hover border-primary/20 text-white">
                  <DialogHeader>
                    <DialogTitle>Neuen Scan starten</DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Wählen Sie eine Domain für einen sofortigen Sicherheitsscan.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="domain">Domain oder IP-Adresse</Label>
                      <Input
                        id="domain"
                        placeholder="example.com"
                        className="input-modern text-white"
                        value={selectedDomain}
                        onChange={(e) => setSelectedDomain(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="scanType">Scan-Typ</Label>
                      <Select>
                        <SelectTrigger className="input-modern text-white">
                          <SelectValue placeholder="Wählen Sie einen Scan-Typ" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-blue-500/30">
                          <SelectItem value="quick">Quick Scan (5 Min)</SelectItem>
                          <SelectItem value="full">Full Scan (30 Min)</SelectItem>
                          <SelectItem value="deep">Deep Scan (2 Std)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      className="w-full btn-primary"
                      onClick={() => handleStartScan(selectedDomain)}
                      disabled={isScanning || !selectedDomain}
                    >
                      {isScanning ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Scanning...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Scan starten
                        </>
                      )}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Report generieren
              </Button>

              <Button
                variant="outline"
                className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent"
              >
                <FileText className="w-4 h-4 mr-2" />
                Compliance Check
              </Button>

              <Separator className="border-primary/20" />

              <div className="space-y-2">
                <p className="text-white font-medium text-sm">Letzte Aktivität</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">Scan abgeschlossen</span>
                    <span className="text-gray-500">vor 2h</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">Warnung erkannt</span>
                    <span className="text-gray-500">vor 4h</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Tabs with More Functionality */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="tabs-modern p-1">
            <TabsTrigger value="overview" className="tab-active">
              <BarChart3 className="w-4 h-4 mr-2" />
              Übersicht
            </TabsTrigger>
            <TabsTrigger value="vulnerabilities" className="tab-active">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Schwachstellen
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="tab-active">
              <Eye className="w-4 h-4 mr-2" />
              Live Monitoring
            </TabsTrigger>
            <TabsTrigger value="domains" className="tab-active">
              <Globe className="w-4 h-4 mr-2" />
              Domains
            </TabsTrigger>
            <TabsTrigger value="reports" className="tab-active">
              <FileText className="w-4 h-4 mr-2" />
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Threat Landscape */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <PieChart className="w-5 h-5 mr-2 text-cyan-400" />
                    Bedrohungslandschaft
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                        <span className="text-white">Malware</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-400 font-semibold">23%</span>
                        <Progress value={23} className="w-20" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-orange-500 rounded"></div>
                        <span className="text-white">Phishing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-400 font-semibold">18%</span>
                        <Progress value={18} className="w-20" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                        <span className="text-white">DDoS</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-400 font-semibold">15%</span>
                        <Progress value={15} className="w-20" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-white">Sonstige</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-400 font-semibold">44%</span>
                        <Progress value={44} className="w-20" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Trends */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <LineChart className="w-5 h-5 mr-2 text-cyan-400" />
                    Sicherheitstrends (7 Tage)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-slate-800/30 rounded-lg flex items-center justify-center mb-4">
                    <p className="text-gray-400">Interaktives Diagramm würde hier angezeigt</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-green-400 font-bold">+12%</p>
                      <p className="text-gray-400 text-sm">Sicherheit</p>
                    </div>
                    <div>
                      <p className="text-red-400 font-bold">-8%</p>
                      <p className="text-gray-400 text-sm">Bedrohungen</p>
                    </div>
                    <div>
                      <p className="text-blue-400 font-bold">+5%</p>
                      <p className="text-gray-400 text-sm">Performance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vulnerabilities">
            <Card className="glass-card card-hover border-primary/20">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div>
                    <CardTitle className="text-white">Schwachstellen-Management</CardTitle>
                    <CardDescription className="text-gray-400">
                      Verwalten und beheben Sie Sicherheitslücken in Ihren Systemen
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Schwachstellen suchen..."
                        className="pl-10 input-modern text-white w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-40 input-modern text-white">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-blue-500/30">
                        <SelectItem value="all">Alle Status</SelectItem>
                        <SelectItem value="offen">Offen</SelectItem>
                        <SelectItem value="in bearbeitung">In Bearbeitung</SelectItem>
                        <SelectItem value="geplant">Geplant</SelectItem>
                        <SelectItem value="behoben">Behoben</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button size="sm" className="btn-primary">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredVulnerabilities.map((vuln) => (
                    <Card key={vuln.id} className="glass-card card-hover border-l-4 border-l-red-500 bg-slate-800/30">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge
                                className={`${
                                  vuln.severity === "Kritisch"
                                    ? "badge-danger"
                                    : vuln.severity === "Hoch"
                                      ? "badge-warning"
                                      : vuln.severity === "Mittel"
                                        ? "badge-warning"
                                        : "badge-primary"
                                }`}
                              >
                                {vuln.severity}
                              </Badge>
                              <Badge
                                className={`${
                                  vuln.status === "Behoben"
                                    ? "badge-success"
                                    : vuln.status === "In Bearbeitung"
                                      ? "badge-primary"
                                      : "bg-gray-500/20 text-gray-400"
                                }`}
                              >
                                {vuln.status}
                              </Badge>
                              <span className="text-gray-400 text-sm">CVSS: {vuln.cvss}</span>
                            </div>
                            <h3 className="text-white font-semibold mb-1">{vuln.title}</h3>
                            <p className="text-gray-300 text-sm mb-2">{vuln.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-400">
                              <span>Domain: {vuln.domain}</span>
                              <span>Kategorie: {vuln.category}</span>
                              <span>Entdeckt: {vuln.discovered}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-blue-500/30 text-blue-400 bg-transparent"
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Bearbeiten
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-green-500/30 text-green-400 bg-transparent"
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Als behoben markieren
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* System Status */}
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
                                service.status === "online"
                                  ? "bg-green-500 animate-pulse"
                                  : "bg-yellow-500 animate-pulse"
                              }`}
                            ></div>
                            <span
                              className={`text-sm ${
                                service.status === "online" ? "text-green-400" : "text-yellow-400"
                              }`}
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

              {/* Live Alerts */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-cyan-400" />
                    Live Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      type: "critical",
                      title: "DDoS-Angriff erkannt",
                      description: "Ungewöhnlich hoher Traffic auf api.example.com",
                      time: "vor 2 Min",
                      icon: AlertTriangle,
                    },
                    {
                      type: "warning",
                      title: "SSL-Zertifikat läuft ab",
                      description: "blog.example.com Zertifikat läuft in 7 Tagen ab",
                      time: "vor 15 Min",
                      icon: Lock,
                    },
                    {
                      type: "info",
                      title: "Scan abgeschlossen",
                      description: "Vollständiger Scan von shop.example.com beendet",
                      time: "vor 1 Std",
                      icon: CheckCircle,
                    },
                  ].map((alert, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border-l-4 ${
                        alert.type === "critical"
                          ? "border-l-red-500 bg-red-500/10"
                          : alert.type === "warning"
                            ? "border-l-yellow-500 bg-yellow-500/10"
                            : "border-l-blue-500 bg-blue-500/10"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <alert.icon
                          className={`w-5 h-5 mt-0.5 ${
                            alert.type === "critical"
                              ? "text-red-400"
                              : alert.type === "warning"
                                ? "text-yellow-400"
                                : "text-blue-400"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-white font-medium">{alert.title}</p>
                          <p className="text-gray-300 text-sm">{alert.description}</p>
                          <p className="text-gray-400 text-xs mt-1">{alert.time}</p>
                        </div>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          <Unlock className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="domains">
            <Card className="glass-card card-hover border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white">Domain-Management</CardTitle>
                  <CardDescription className="text-gray-400">
                    Überwachen und verwalten Sie alle Ihre Domains an einem Ort
                  </CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="btn-primary hover:from-blue-700 hover:to-cyan-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Domain hinzufügen
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-card card-hover border-primary/20 text-white">
                    <DialogHeader>
                      <DialogTitle>Neue Domain hinzufügen</DialogTitle>
                      <DialogDescription className="text-gray-300">
                        Fügen Sie eine neue Domain zur Überwachung hinzu.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="newDomain">Domain</Label>
                        <Input id="newDomain" placeholder="example.com" className="input-modern text-white" />
                      </div>
                      <div>
                        <Label htmlFor="scanFrequency">Scan-Häufigkeit</Label>
                        <Select>
                          <SelectTrigger className="input-modern text-white">
                            <SelectValue placeholder="Wählen Sie die Häufigkeit" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-blue-500/30">
                            <SelectItem value="hourly">Stündlich</SelectItem>
                            <SelectItem value="daily">Täglich</SelectItem>
                            <SelectItem value="weekly">Wöchentlich</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full btn-primary">Domain hinzufügen</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {domains.map((domain, index) => (
                    <Card key={index} className="glass-card card-hover border-blue-500/10 bg-slate-800/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Globe className="w-5 h-5 text-blue-400" />
                              <div>
                                <p className="text-white font-medium">{domain.name}</p>
                                <p className="text-gray-400 text-sm">Letzter Scan: {domain.lastScan}</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <p className="text-white font-medium">Score</p>
                              <p
                                className={`text-lg font-bold ${
                                  domain.score >= 80
                                    ? "text-green-400"
                                    : domain.score >= 60
                                      ? "text-yellow-400"
                                      : "text-red-400"
                                }`}
                              >
                                {domain.score}
                              </p>
                            </div>

                            <div className="text-center">
                              <p className="text-white font-medium">SSL</p>
                              {domain.ssl ? (
                                <Lock className="w-5 h-5 text-green-400 mx-auto" />
                              ) : (
                                <Unlock className="w-5 h-5 text-red-400 mx-auto" />
                              )}
                            </div>

                            <div className="text-center">
                              <p className="text-white font-medium">Bedrohungen</p>
                              <p
                                className={`text-lg font-bold ${
                                  domain.threats === 0
                                    ? "text-green-400"
                                    : domain.threats <= 5
                                      ? "text-yellow-400"
                                      : "text-red-400"
                                }`}
                              >
                                {domain.threats}
                              </p>
                            </div>

                            <Badge
                              className={`${
                                domain.status === "Aktiv"
                                  ? "badge-success"
                                  : domain.status === "Warnung"
                                    ? "badge-warning"
                                    : "badge-danger"
                              }`}
                            >
                              {domain.status}
                            </Badge>

                            <div className="flex items-center space-x-2">
                              <Button size="sm" className="btn-primary" onClick={() => handleStartScan(domain.name)}>
                                <Play className="w-4 h-4 mr-2" />
                                Scan
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-blue-500/30 text-blue-400 bg-transparent"
                              >
                                <Settings className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Report Generation */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white">Report Generator</CardTitle>
                  <CardDescription className="text-gray-400">
                    Erstellen Sie benutzerdefinierte Sicherheitsberichte
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="reportType">Report-Typ</Label>
                    <Select>
                      <SelectTrigger className="input-modern text-white">
                        <SelectValue placeholder="Wählen Sie einen Report-Typ" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-blue-500/30">
                        <SelectItem value="security">Sicherheitsbericht</SelectItem>
                        <SelectItem value="compliance">Compliance Report</SelectItem>
                        <SelectItem value="vulnerability">Schwachstellen-Analyse</SelectItem>
                        <SelectItem value="executive">Executive Summary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timeRange">Zeitraum</Label>
                    <Select>
                      <SelectTrigger className="input-modern text-white">
                        <SelectValue placeholder="Wählen Sie einen Zeitraum" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-blue-500/30">
                        <SelectItem value="7days">Letzte 7 Tage</SelectItem>
                        <SelectItem value="30days">Letzte 30 Tage</SelectItem>
                        <SelectItem value="90days">Letzte 90 Tage</SelectItem>
                        <SelectItem value="custom">Benutzerdefiniert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="includeCharts" />
                    <Label htmlFor="includeCharts">Diagramme einschließen</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="includeRecommendations" defaultChecked />
                    <Label htmlFor="includeRecommendations">Empfehlungen einschließen</Label>
                  </div>

                  <Button className="w-full btn-primary hover:from-blue-700 hover:to-cyan-700">
                    <FileText className="w-4 h-4 mr-2" />
                    Report generieren
                  </Button>
                </CardContent>
              </Card>

              {/* Available Reports */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white">Verfügbare Reports</CardTitle>
                  <CardDescription className="text-gray-400">
                    Laden Sie bereits generierte Berichte herunter
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Wöchentlicher Sicherheitsbericht",
                        date: "15.01.2024",
                        type: "PDF",
                        size: "2.4 MB",
                        status: "Fertig",
                      },
                      {
                        name: "DSGVO Compliance Report",
                        date: "10.01.2024",
                        type: "PDF",
                        size: "1.8 MB",
                        status: "Fertig",
                      },
                      {
                        name: "Schwachstellen-Analyse Q1",
                        date: "08.01.2024",
                        type: "Excel",
                        size: "3.2 MB",
                        status: "Wird generiert...",
                      },
                      {
                        name: "Executive Summary",
                        date: "05.01.2024",
                        type: "PDF",
                        size: "1.1 MB",
                        status: "Fertig",
                      },
                    ].map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-blue-400" />
                          <div>
                            <p className="text-white font-medium">{report.name}</p>
                            <p className="text-gray-400 text-sm">
                              {report.date} • {report.type} • {report.size}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={`${report.status === "Fertig" ? "badge-success" : "badge-warning"}`}>
                            {report.status}
                          </Badge>
                          {report.status === "Fertig" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-blue-500/30 text-blue-400 bg-transparent"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
