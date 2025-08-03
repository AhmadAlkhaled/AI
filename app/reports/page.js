"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Calendar,
  Search,
  Plus,
  Settings,
  ArrowLeft,
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  User,
  Globe,
  Database,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function ReportsPage() {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Wöchentlicher Sicherheitsbericht",
      description: "Umfassende Analyse der Sicherheitslage der letzten 7 Tage",
      type: "security",
      status: "completed",
      createdAt: "2024-01-15",
      size: "2.4 MB",
      format: "PDF",
      author: "System",
      category: "weekly",
    },
    {
      id: 2,
      title: "Schwachstellen-Analyse Q1 2024",
      description: "Detaillierte Auflistung und Bewertung aller erkannten Schwachstellen",
      type: "vulnerability",
      status: "completed",
      createdAt: "2024-01-10",
      size: "1.8 MB",
      format: "PDF",
      author: "Dr. Sarah Weber",
      category: "quarterly",
    },
    {
      id: 3,
      title: "Compliance-Bericht GDPR",
      description: "Konformitätsbericht für GDPR-Anforderungen",
      type: "compliance",
      status: "generating",
      createdAt: "2024-01-14",
      size: "Wird generiert...",
      format: "PDF",
      author: "System",
      category: "compliance",
    },
    {
      id: 4,
      title: "Incident Response Report",
      description: "Zusammenfassung aller Sicherheitsvorfälle und Reaktionszeiten",
      type: "incident",
      status: "completed",
      createdAt: "2024-01-12",
      size: "3.1 MB",
      format: "PDF",
      author: "Michael Schmidt",
      category: "incident",
    },
    {
      id: 5,
      title: "Netzwerk-Traffic-Analyse",
      description: "Analyse des Netzwerkverkehrs und Anomalieerkennung",
      type: "network",
      status: "scheduled",
      createdAt: "2024-01-16",
      size: "Geplant",
      format: "PDF",
      author: "System",
      category: "network",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "all" || report.type === selectedType
    const matchesStatus = selectedStatus === "all" || report.status === selectedStatus

    return matchesSearch && matchesType && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "generating":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "scheduled":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "failed":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "security":
        return <Shield className="w-5 h-5 text-purple-400" />
      case "vulnerability":
        return <AlertTriangle className="w-5 h-5 text-red-400" />
      case "compliance":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "incident":
        return <Zap className="w-5 h-5 text-yellow-400" />
      case "network":
        return <Globe className="w-5 h-5 text-blue-400" />
      default:
        return <FileText className="w-5 h-5 text-gray-400" />
    }
  }

  const reportTemplates = [
    {
      id: 1,
      name: "Sicherheitsübersicht",
      description: "Allgemeine Sicherheitslage und Trends",
      icon: Shield,
      color: "purple",
    },
    {
      id: 2,
      name: "Schwachstellen-Report",
      description: "Detaillierte Schwachstellenanalyse",
      icon: AlertTriangle,
      color: "red",
    },
    {
      id: 3,
      name: "Compliance-Bericht",
      description: "Einhaltung von Sicherheitsstandards",
      icon: CheckCircle,
      color: "green",
    },
    {
      id: 4,
      name: "Incident-Analyse",
      description: "Sicherheitsvorfälle und Reaktionen",
      icon: Zap,
      color: "yellow",
    },
    {
      id: 5,
      name: "Netzwerk-Analyse",
      description: "Traffic und Anomalieerkennung",
      icon: Globe,
      color: "blue",
    },
    {
      id: 6,
      name: "Performance-Report",
      description: "System-Performance und Verfügbarkeit",
      icon: TrendingUp,
      color: "cyan",
    },
  ]

  const analytics = {
    totalReports: reports.length,
    completedReports: reports.filter((r) => r.status === "completed").length,
    scheduledReports: reports.filter((r) => r.status === "scheduled").length,
    totalSize: "12.3 MB",
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
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Aegis
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Neuer Bericht
              </Button>
              <Button variant="outline" size="sm" className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                <Settings className="w-4 h-4 mr-2" />
                Einstellungen
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Berichte</span>
          </h1>
          <p className="text-gray-300">Generieren und verwalten Sie detaillierte Sicherheitsberichte</p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card card-hover border-purple-500/20">
            <CardContent className="p-6 text-center">
              <FileText className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-400">{analytics.totalReports}</div>
              <div className="text-gray-300 text-sm">Gesamt</div>
            </CardContent>
          </Card>
          <Card className="glass-card card-hover border-green-500/20">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-400">{analytics.completedReports}</div>
              <div className="text-gray-300 text-sm">Abgeschlossen</div>
            </CardContent>
          </Card>
          <Card className="glass-card card-hover border-blue-500/20">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-400">{analytics.scheduledReports}</div>
              <div className="text-gray-300 text-sm">Geplant</div>
            </CardContent>
          </Card>
          <Card className="glass-card card-hover border-yellow-500/20">
            <CardContent className="p-6 text-center">
              <Database className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-400">{analytics.totalSize}</div>
              <div className="text-gray-300 text-sm">Gesamtgröße</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="reports" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-purple-500/20">
            <TabsTrigger
              value="reports"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Alle Berichte
            </TabsTrigger>
            <TabsTrigger
              value="generator"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Bericht erstellen
            </TabsTrigger>
            <TabsTrigger
              value="templates"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Vorlagen
            </TabsTrigger>
            <TabsTrigger
              value="scheduled"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Geplante Berichte
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reports" className="space-y-6">
            {/* Filters */}
            <Card className="glass-card border-purple-500/20">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Berichte durchsuchen..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-modern pl-10"
                    />
                  </div>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="input-modern"
                  >
                    <option value="all">Alle Typen</option>
                    <option value="security">Sicherheit</option>
                    <option value="vulnerability">Schwachstellen</option>
                    <option value="compliance">Compliance</option>
                    <option value="incident">Vorfälle</option>
                    <option value="network">Netzwerk</option>
                  </select>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="input-modern"
                  >
                    <option value="all">Alle Status</option>
                    <option value="completed">Abgeschlossen</option>
                    <option value="generating">Wird generiert</option>
                    <option value="scheduled">Geplant</option>
                    <option value="failed">Fehlgeschlagen</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Reports List */}
            <div className="space-y-4">
              {filteredReports.map((report) => (
                <Card key={report.id} className="glass-card card-hover border-purple-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0 mt-1">{getTypeIcon(report.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-white">{report.title}</h3>
                            <Badge className={getStatusColor(report.status)}>
                              {report.status === "completed"
                                ? "Abgeschlossen"
                                : report.status === "generating"
                                  ? "Wird generiert"
                                  : report.status === "scheduled"
                                    ? "Geplant"
                                    : "Fehlgeschlagen"}
                            </Badge>
                          </div>
                          <p className="text-gray-300 text-sm mb-3 leading-relaxed">{report.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{report.createdAt}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{report.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FileText className="w-3 h-3" />
                              <span>{report.format}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Database className="w-3 h-3" />
                              <span>{report.size}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {report.status === "generating" && (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-sm text-purple-400">Generiert...</span>
                          </div>
                        )}
                        {report.status === "completed" && (
                          <Button size="sm" className="btn-primary">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        )}
                        {report.status === "scheduled" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50"
                          >
                            <Clock className="w-4 h-4 mr-2" />
                            Geplant
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="generator" className="space-y-6">
            <Card className="glass-card border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Plus className="w-6 h-6 mr-2 text-purple-400" />
                  Neuen Bericht erstellen
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Konfigurieren Sie Ihren benutzerdefinierten Sicherheitsbericht
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="report-title" className="text-white">
                        Berichtstitel
                      </Label>
                      <Input
                        id="report-title"
                        placeholder="z.B. Monatlicher Sicherheitsbericht"
                        className="input-modern mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="report-type" className="text-white">
                        Berichtstyp
                      </Label>
                      <select className="input-modern mt-2 w-full">
                        <option value="security">Sicherheitsübersicht</option>
                        <option value="vulnerability">Schwachstellen-Analyse</option>
                        <option value="compliance">Compliance-Bericht</option>
                        <option value="incident">Incident-Report</option>
                        <option value="network">Netzwerk-Analyse</option>
                        <option value="custom">Benutzerdefiniert</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="date-range" className="text-white">
                        Zeitraum
                      </Label>
                      <select className="input-modern mt-2 w-full">
                        <option value="last-7-days">Letzte 7 Tage</option>
                        <option value="last-30-days">Letzte 30 Tage</option>
                        <option value="last-90-days">Letzte 90 Tage</option>
                        <option value="custom">Benutzerdefiniert</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="format" className="text-white">
                        Format
                      </Label>
                      <select className="input-modern mt-2 w-full">
                        <option value="pdf">PDF</option>
                        <option value="excel">Excel</option>
                        <option value="csv">CSV</option>
                        <option value="json">JSON</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="recipients" className="text-white">
                        Empfänger (optional)
                      </Label>
                      <Input
                        id="recipients"
                        placeholder="email@example.com, email2@example.com"
                        className="input-modern mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="schedule" className="text-white">
                        Zeitplan
                      </Label>
                      <select className="input-modern mt-2 w-full">
                        <option value="now">Sofort generieren</option>
                        <option value="daily">Täglich</option>
                        <option value="weekly">Wöchentlich</option>
                        <option value="monthly">Monatlich</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-700/50">
                  <Button variant="outline" className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                    Abbrechen
                  </Button>
                  <Button className="btn-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Bericht erstellen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reportTemplates.map((template) => (
                <Card key={template.id} className="glass-card card-hover border-purple-500/20">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r from-${template.color}-600 to-${template.color}-500 rounded-lg flex items-center justify-center mb-4`}
                    >
                      <template.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{template.name}</CardTitle>
                    <CardDescription className="text-gray-300">{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full btn-primary">
                      <Plus className="w-4 h-4 mr-2" />
                      Vorlage verwenden
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-6">
            <Card className="glass-card border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-blue-400" />
                  Geplante Berichte
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Verwalten Sie automatisch generierte Berichte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold">Wöchentlicher Sicherheitsbericht</h3>
                        <p className="text-gray-300 text-sm">Jeden Montag um 09:00 Uhr</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Aktiv</Badge>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Nächste Ausführung: Montag, 22. Januar 2024</span>
                      <span>Empfänger: 3</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold">Monatlicher Compliance-Bericht</h3>
                        <p className="text-gray-300 text-sm">Am 1. jeden Monats um 08:00 Uhr</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Aktiv</Badge>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Nächste Ausführung: Donnerstag, 1. Februar 2024</span>
                      <span>Empfänger: 5</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold">Täglicher Incident-Report</h3>
                        <p className="text-gray-300 text-sm">Täglich um 18:00 Uhr</p>
                      </div>
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Pausiert</Badge>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Pausiert seit: 10. Januar 2024</span>
                      <span>Empfänger: 2</span>
                    </div>
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
