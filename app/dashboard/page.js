"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  AlertTriangle,
  Activity,
  Scan,
  Server,
  Database,
  Wifi,
  Eye,
  Zap,
  TrendingUp,
  Download,
  Settings,
  Bell,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [securityScore, setSecurityScore] = useState(0)
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    // Animate security score on load
    const targetScore = 87
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps
    const increment = targetScore / steps

    let currentScore = 0
    const timer = setInterval(() => {
      currentScore += increment
      if (currentScore >= targetScore) {
        setSecurityScore(targetScore)
        clearInterval(timer)
      } else {
        setSecurityScore(Math.floor(currentScore))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [])

  const handleScan = () => {
    setIsScanning(true)
    setScanProgress(0)

    const scanTimer = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          setIsScanning(false)
          clearInterval(scanTimer)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  const vulnerabilities = [
    {
      id: 1,
      title: "Veraltete SSL-Zertifikate",
      severity: "high",
      status: "open",
      description: "3 SSL-Zertifikate laufen in den nächsten 30 Tagen ab",
    },
    {
      id: 2,
      title: "Schwache Passwort-Richtlinien",
      severity: "medium",
      status: "in-progress",
      description: "Passwort-Komplexität entspricht nicht den Best Practices",
    },
    {
      id: 3,
      title: "Unverschlüsselte Datenübertragung",
      severity: "high",
      status: "open",
      description: "HTTP-Verbindungen ohne HTTPS-Weiterleitung erkannt",
    },
    {
      id: 4,
      title: "Veraltete Software-Versionen",
      severity: "low",
      status: "resolved",
      description: "Mehrere Systeme verwenden veraltete Software-Versionen",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "scan",
      message: "Vollständiger Sicherheitsscan abgeschlossen",
      time: "vor 2 Stunden",
      status: "success",
    },
    {
      id: 2,
      type: "threat",
      message: "Verdächtige Aktivität blockiert",
      time: "vor 4 Stunden",
      status: "warning",
    },
    {
      id: 3,
      type: "update",
      message: "Sicherheitsrichtlinien aktualisiert",
      time: "vor 6 Stunden",
      status: "info",
    },
    {
      id: 4,
      type: "alert",
      message: "Neue Schwachstelle erkannt",
      time: "vor 8 Stunden",
      status: "error",
    },
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "text-red-400 bg-red-500/20 border-red-500/30"
      case "medium":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
      case "low":
        return "text-green-400 bg-green-500/20 border-green-500/30"
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "text-red-400 bg-red-500/20 border-red-500/30"
      case "in-progress":
        return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"
      case "resolved":
        return "text-green-400 bg-green-500/20 border-green-500/30"
      default:
        return "text-gray-400 bg-gray-500/20 border-gray-500/30"
    }
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case "scan":
        return <Scan className="w-4 h-4" />
      case "threat":
        return <Shield className="w-4 h-4" />
      case "update":
        return <Settings className="w-4 h-4" />
      case "alert":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Activity className="w-4 h-4" />
    }
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
      <nav className="relative z-50 border-b border-purple-500/20 backdrop-blur-xl bg-slate-950/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Aegis Dashboard
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/notifications">
                <Button variant="outline" size="sm" className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                  <Bell className="w-4 h-4 mr-2" />
                  Benachrichtigungen
                </Button>
              </Link>
              <Link href="/reports">
                <Button variant="outline" size="sm" className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                  <FileText className="w-4 h-4 mr-2" />
                  Berichte
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="sm" className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                  Abmelden
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Willkommen zurück,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Admin</span>
          </h1>
          <p className="text-gray-300">Hier ist ein Überblick über Ihre Sicherheitslage</p>
        </div>

        {/* Security Score & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Security Score */}
          <Card className="glass-card card-hover border-purple-500/20 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-6 h-6 mr-2 text-purple-400" />
                Sicherheitsbewertung
              </CardTitle>
              <CardDescription className="text-gray-300">Aktuelle Bewertung Ihrer Sicherheitslage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-6xl font-bold text-purple-400 mb-2">{securityScore}</div>
                  <div className="text-gray-300">von 100 Punkten</div>
                </div>
                <div className="text-right">
                  <Badge
                    className={
                      securityScore >= 80
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : securityScore >= 60
                          ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                          : "bg-red-500/20 text-red-300 border-red-500/30"
                    }
                  >
                    {securityScore >= 80 ? "Ausgezeichnet" : securityScore >= 60 ? "Gut" : "Verbesserung nötig"}
                  </Badge>
                </div>
              </div>
              <Progress value={securityScore} className="h-3 mb-4" />
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-green-400 font-semibold">23</div>
                  <div className="text-gray-400">Geschützt</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-400 font-semibold">5</div>
                  <div className="text-gray-400">Warnungen</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-semibold">2</div>
                  <div className="text-gray-400">Kritisch</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Scan */}
          <Card className="glass-card card-hover border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Scan className="w-6 h-6 mr-2 text-blue-400" />
                Schnell-Scan
              </CardTitle>
              <CardDescription className="text-gray-300">Sofortige Sicherheitsüberprüfung</CardDescription>
            </CardHeader>
            <CardContent>
              {isScanning ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">{scanProgress}%</div>
                    <div className="text-gray-300 text-sm">Scanning...</div>
                  </div>
                  <Progress value={scanProgress} className="h-2" />
                  <div className="text-xs text-gray-400 text-center">Überprüfe Netzwerk und Systeme</div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-gray-300 mb-4">Letzter Scan: vor 2 Stunden</div>
                    <Button onClick={handleScan} className="btn-primary w-full">
                      <Zap className="w-4 h-4 mr-2" />
                      Scan starten
                    </Button>
                  </div>
                  <div className="text-xs text-gray-400 text-center">Durchschnittliche Dauer: 2-3 Minuten</div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-purple-500/20">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Übersicht
            </TabsTrigger>
            <TabsTrigger
              value="vulnerabilities"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Schwachstellen
            </TabsTrigger>
            <TabsTrigger
              value="monitoring"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Live-Monitoring
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Berichte
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* System Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card card-hover border-green-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Firewall</p>
                      <p className="text-2xl font-bold text-green-400">Aktiv</p>
                    </div>
                    <Shield className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Alle Regeln aktiv
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card card-hover border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Netzwerk</p>
                      <p className="text-2xl font-bold text-blue-400">Sicher</p>
                    </div>
                    <Wifi className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      Verschlüsselung aktiv
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card card-hover border-purple-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Server</p>
                      <p className="text-2xl font-bold text-purple-400">Online</p>
                    </div>
                    <Server className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      12/12 Server aktiv
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card card-hover border-yellow-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-300 text-sm">Datenbank</p>
                      <p className="text-2xl font-bold text-yellow-400">Warnung</p>
                    </div>
                    <Database className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                      Backup überfällig
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="glass-card card-hover border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-purple-400" />
                  Letzte Aktivitäten
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Aktuelle Sicherheitsereignisse und Systemaktivitäten
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-slate-800/30">
                      <div
                        className={`p-2 rounded-full ${
                          activity.status === "success"
                            ? "bg-green-500/20 text-green-400"
                            : activity.status === "warning"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : activity.status === "error"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm">{activity.message}</p>
                        <p className="text-gray-400 text-xs">{activity.time}</p>
                      </div>
                      <Badge
                        className={
                          activity.status === "success"
                            ? "bg-green-500/20 text-green-300 border-green-500/30"
                            : activity.status === "warning"
                              ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                              : activity.status === "error"
                                ? "bg-red-500/20 text-red-300 border-red-500/30"
                                : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                        }
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vulnerabilities" className="space-y-6">
            <Card className="glass-card card-hover border-red-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
                  Erkannte Schwachstellen
                </CardTitle>
                <CardDescription className="text-gray-300">Aktuelle Sicherheitslücken und deren Status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vulnerabilities.map((vuln) => (
                    <div key={vuln.id} className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-white font-semibold mb-1">{vuln.title}</h3>
                          <p className="text-gray-300 text-sm">{vuln.description}</p>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Badge className={getSeverityColor(vuln.severity)}>
                            {vuln.severity === "high" ? "Hoch" : vuln.severity === "medium" ? "Mittel" : "Niedrig"}
                          </Badge>
                          <Badge className={getStatusColor(vuln.status)}>
                            {vuln.status === "open"
                              ? "Offen"
                              : vuln.status === "in-progress"
                                ? "In Bearbeitung"
                                : "Behoben"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-slate-700/50 border-gray-600 hover:bg-slate-600/50"
                        >
                          Details
                        </Button>
                        <Button size="sm" className="btn-primary">
                          Beheben
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card card-hover border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Eye className="w-6 h-6 mr-2 text-green-400" />
                    Live-Traffic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Eingehende Anfragen</span>
                      <span className="text-green-400 font-semibold">1,247/min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Blockierte Anfragen</span>
                      <span className="text-red-400 font-semibold">23/min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Verdächtige IPs</span>
                      <span className="text-yellow-400 font-semibold">5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card card-hover border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-blue-400" />
                    System-Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">CPU-Auslastung</span>
                        <span className="text-blue-400">34%</span>
                      </div>
                      <Progress value={34} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">RAM-Nutzung</span>
                        <span className="text-blue-400">67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Netzwerk I/O</span>
                        <span className="text-blue-400">23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="glass-card card-hover border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-purple-400" />
                  Verfügbare Berichte
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Generieren und herunterladen Sie detaillierte Sicherheitsberichte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                    <h3 className="text-white font-semibold mb-2">Wöchentlicher Sicherheitsbericht</h3>
                    <p className="text-gray-300 text-sm mb-4">Umfassende Analyse der letzten 7 Tage</p>
                    <Button size="sm" className="btn-primary w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Herunterladen
                    </Button>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                    <h3 className="text-white font-semibold mb-2">Schwachstellen-Report</h3>
                    <p className="text-gray-300 text-sm mb-4">Detaillierte Auflistung aller Sicherheitslücken</p>
                    <Button size="sm" className="btn-primary w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Herunterladen
                    </Button>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                    <h3 className="text-white font-semibold mb-2">Compliance-Bericht</h3>
                    <p className="text-gray-300 text-sm mb-4">GDPR und ISO 27001 Konformitätsbericht</p>
                    <Button size="sm" className="btn-primary w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Herunterladen
                    </Button>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                    <h3 className="text-white font-semibold mb-2">Incident-Report</h3>
                    <p className="text-gray-300 text-sm mb-4">Zusammenfassung aller Sicherheitsvorfälle</p>
                    <Button size="sm" className="btn-primary w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Herunterladen
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
