"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Shield,
  FileText,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  Search,
  Filter,
  Settings,
  ArrowLeft,
  Play,
  Clock,
  CheckCircle,
  AlertTriangle,
  Eye,
  Edit,
  Trash2,
  Share,
  FileSpreadsheet,
  FileIcon as FilePdf,
  Globe,
  Users,
  Activity,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function ReportsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [reportName, setReportName] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [isGenerating, setIsGenerating] = useState(false)

  const reportTemplates = [
    {
      id: "security-overview",
      name: "Sicherheits-Übersicht",
      description: "Umfassender Überblick über alle Sicherheitsaspekte",
      icon: Shield,
      category: "security",
      estimatedTime: "5-10 Min",
      features: ["Schwachstellen-Analyse", "Bedrohungslandschaft", "Compliance-Status", "Empfehlungen"],
    },
    {
      id: "vulnerability-report",
      name: "Schwachstellen-Report",
      description: "Detaillierte Analyse aller gefundenen Schwachstellen",
      icon: AlertTriangle,
      category: "security",
      estimatedTime: "3-5 Min",
      features: ["CVSS-Bewertungen", "Prioritätsliste", "Behebungsschritte", "Timeline"],
    },
    {
      id: "compliance-audit",
      name: "Compliance-Audit",
      description: "Prüfung der Einhaltung von Sicherheitsstandards",
      icon: Award,
      category: "compliance",
      estimatedTime: "10-15 Min",
      features: ["DSGVO-Check", "ISO 27001", "SOC 2", "Zertifizierungsstatus"],
    },
    {
      id: "executive-summary",
      name: "Executive Summary",
      description: "Zusammenfassung für Führungskräfte",
      icon: TrendingUp,
      category: "executive",
      estimatedTime: "2-3 Min",
      features: ["KPIs", "Trends", "ROI-Analyse", "Strategische Empfehlungen"],
    },
    {
      id: "domain-analysis",
      name: "Domain-Analyse",
      description: "Detaillierte Analyse einzelner oder mehrerer Domains",
      icon: Globe,
      category: "technical",
      estimatedTime: "5-8 Min",
      features: ["SSL-Status", "DNS-Konfiguration", "Performance", "Sicherheitsbewertung"],
    },
    {
      id: "user-activity",
      name: "Benutzer-Aktivität",
      description: "Übersicht über Benutzeraktivitäten und -verhalten",
      icon: Users,
      category: "analytics",
      estimatedTime: "3-5 Min",
      features: ["Login-Statistiken", "Feature-Nutzung", "Scan-Aktivität", "Engagement"],
    },
  ]

  const existingReports = [
    {
      id: 1,
      name: "Wöchentlicher Sicherheitsbericht",
      template: "Sicherheits-Übersicht",
      created: "15.01.2024 14:30",
      status: "Fertig",
      size: "2.4 MB",
      format: "PDF",
      downloads: 12,
      shared: true,
      author: "System",
      domains: ["example.com", "shop.example.com"],
    },
    {
      id: 2,
      name: "Q1 Compliance Report",
      template: "Compliance-Audit",
      created: "10.01.2024 09:15",
      status: "Fertig",
      size: "1.8 MB",
      format: "PDF",
      downloads: 8,
      shared: false,
      author: "Admin",
      domains: ["alle"],
    },
    {
      id: 3,
      name: "Schwachstellen-Analyse Januar",
      template: "Schwachstellen-Report",
      created: "08.01.2024 16:45",
      status: "Wird generiert...",
      size: "0 MB",
      format: "Excel",
      downloads: 0,
      shared: false,
      author: "Max Mustermann",
      domains: ["api.example.com"],
    },
    {
      id: 4,
      name: "Executive Dashboard",
      template: "Executive Summary",
      created: "05.01.2024 11:20",
      status: "Fertig",
      size: "1.1 MB",
      format: "PDF",
      downloads: 25,
      shared: true,
      author: "Sarah Schmidt",
      domains: ["alle"],
    },
    {
      id: 5,
      name: "Domain Security Check",
      template: "Domain-Analyse",
      created: "03.01.2024 13:10",
      status: "Fehler",
      size: "0 MB",
      format: "PDF",
      downloads: 0,
      shared: false,
      author: "System",
      domains: ["blog.example.com"],
    },
  ]

  const filteredReports = existingReports.filter((report) => {
    const matchesSearch =
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.template.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.author.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "all" || report.status.toLowerCase().includes(filterStatus.toLowerCase())

    return matchesSearch && matchesStatus
  })

  const generateReport = () => {
    setIsGenerating(true)
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false)
      setReportName("")
      setSelectedTemplate("")
    }, 3000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Fertig":
        return "badge-success"
      case "Wird generiert...":
        return "badge-primary"
      case "Fehler":
        return "badge-danger"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "PDF":
        return <FilePdf className="w-4 h-4 text-red-400" />
      case "Excel":
        return <FileSpreadsheet className="w-4 h-4 text-green-400" />
      default:
        return <FileText className="w-4 h-4 text-blue-400" />
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

      {/* Header */}
      <header className="relative z-10 border-b border-primary/20 backdrop-blur-xl bg-slate-950/80 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2">
                <ArrowLeft className="w-5 h-5 text-gray-400" />
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Aegis
                </span>
              </Link>
              <div className="text-gray-400">|</div>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <h1 className="text-xl font-semibold text-white">Reports & Analytics</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-primary">
                    <Play className="w-4 h-4 mr-2" />
                    Neuen Report erstellen
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-card card-hover border-primary/20 text-white max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Neuen Report erstellen</DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Wählen Sie eine Vorlage und konfigurieren Sie Ihren Report.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="reportName">Report-Name</Label>
                      <Input
                        id="reportName"
                        placeholder="z.B. Monatlicher Sicherheitsbericht"
                        className="input-modern text-white mt-2"
                        value={reportName}
                        onChange={(e) => setReportName(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label>Report-Vorlage wählen</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {reportTemplates.map((template) => (
                          <Card
                            key={template.id}
                            className={`glass-card card-hover cursor-pointer transition-all duration-300 ${
                              selectedTemplate === template.id
                                ? "border-cyan-400/60 bg-cyan-500/10"
                                : "border-primary/20 hover:border-secondary/40"
                            }`}
                            onClick={() => setSelectedTemplate(template.id)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                                  <template.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-white font-semibold mb-1">{template.name}</h3>
                                  <p className="text-gray-400 text-sm mb-2">{template.description}</p>
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Badge className="bg-blue-500/20 text-blue-400 text-xs">{template.category}</Badge>
                                    <div className="flex items-center space-x-1 text-gray-400 text-xs">
                                      <Clock className="w-3 h-3" />
                                      <span>{template.estimatedTime}</span>
                                    </div>
                                  </div>
                                  <div className="space-y-1">
                                    {template.features.slice(0, 2).map((feature, index) => (
                                      <div key={index} className="flex items-center space-x-1 text-xs text-gray-400">
                                        <CheckCircle className="w-3 h-3 text-green-400" />
                                        <span>{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {selectedTemplate && (
                      <div className="space-y-4">
                        <Separator className="bg-blue-500/20" />
                        <div>
                          <Label>Konfiguration</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <Label htmlFor="timeRange">Zeitraum</Label>
                              <Select>
                                <SelectTrigger className="input-modern text-white">
                                  <SelectValue placeholder="Zeitraum wählen" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-800 border-blue-500/30">
                                  <SelectItem value="7days">Letzte 7 Tage</SelectItem>
                                  <SelectItem value="30days">Letzte 30 Tage</SelectItem>
                                  <SelectItem value="90days">Letzte 90 Tage</SelectItem>
                                  <SelectItem value="custom">Benutzerdefiniert</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label htmlFor="format">Format</Label>
                              <Select>
                                <SelectTrigger className="input-modern text-white">
                                  <SelectValue placeholder="Format wählen" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-800 border-blue-500/30">
                                  <SelectItem value="pdf">PDF</SelectItem>
                                  <SelectItem value="excel">Excel</SelectItem>
                                  <SelectItem value="html">HTML</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Switch id="includeCharts" defaultChecked />
                            <Label htmlFor="includeCharts">Diagramme und Grafiken einschließen</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="includeRecommendations" defaultChecked />
                            <Label htmlFor="includeRecommendations">Handlungsempfehlungen einschließen</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="includeAppendix" />
                            <Label htmlFor="includeAppendix">Technische Details im Anhang</Label>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="customNotes">Zusätzliche Notizen (optional)</Label>
                          <Textarea
                            id="customNotes"
                            placeholder="Fügen Sie zusätzliche Informationen oder spezielle Anforderungen hinzu..."
                            className="input-modern text-white mt-2"
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-4">
                      <Button
                        className="flex-1 btn-primary"
                        onClick={generateReport}
                        disabled={!selectedTemplate || !reportName || isGenerating}
                      >
                        {isGenerating ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Wird generiert...
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Report erstellen
                          </>
                        )}
                      </Button>
                      <Button variant="outline" className="border-gray-500/30 text-gray-400 bg-transparent">
                        Vorschau
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card card-hover border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Gesamt Reports</p>
                  <p className="text-3xl font-bold text-white">{existingReports.length}</p>
                </div>
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card card-hover border-green-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Fertige Reports</p>
                  <p className="text-3xl font-bold text-white">
                    {existingReports.filter((r) => r.status === "Fertig").length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card card-hover border-yellow-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">In Bearbeitung</p>
                  <p className="text-3xl font-bold text-white">
                    {existingReports.filter((r) => r.status.includes("generiert")).length}
                  </p>
                </div>
                <Activity className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card card-hover border-cyan-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Downloads</p>
                  <p className="text-3xl font-bold text-white">
                    {existingReports.reduce((sum, r) => sum + r.downloads, 0)}
                  </p>
                </div>
                <Download className="w-8 h-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports Management */}
        <Tabs defaultValue="reports" className="space-y-6">
          <TabsList className="tabs-modern p-1">
            <TabsTrigger value="reports" className="tab-active">
              <FileText className="w-4 h-4 mr-2" />
              Meine Reports
            </TabsTrigger>
            <TabsTrigger value="templates" className="tab-active">
              <Target className="w-4 h-4 mr-2" />
              Vorlagen
            </TabsTrigger>
            <TabsTrigger value="analytics" className="tab-active">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="scheduled" className="tab-active">
              <Calendar className="w-4 h-4 mr-2" />
              Geplante Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reports">
            <Card className="glass-card card-hover border-primary/20">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div>
                    <CardTitle className="text-white">Report-Bibliothek</CardTitle>
                    <CardDescription className="text-gray-400">
                      Verwalten Sie alle Ihre generierten Reports
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Reports suchen..."
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
                        <SelectItem value="fertig">Fertig</SelectItem>
                        <SelectItem value="generiert">In Bearbeitung</SelectItem>
                        <SelectItem value="fehler">Fehler</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredReports.map((report) => (
                    <Card key={report.id} className="glass-card card-hover border-blue-500/10 bg-slate-800/20">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                              {getFormatIcon(report.format)}
                            </div>
                            <div>
                              <h3 className="text-white font-semibold mb-1">{report.name}</h3>
                              <p className="text-gray-400 text-sm mb-2">
                                {report.template} • {report.author}
                              </p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span>Erstellt: {report.created}</span>
                                <span>Größe: {report.size}</span>
                                <span>Downloads: {report.downloads}</span>
                                <div className="flex items-center space-x-1">
                                  <Globe className="w-3 h-3" />
                                  <span>
                                    {Array.isArray(report.domains) ? report.domains.join(", ") : report.domains}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <Badge className={getStatusColor(report.status)}>{report.status}</Badge>

                            {report.shared && (
                              <Badge className="bg-purple-500/20 text-purple-400">
                                <Share className="w-3 h-3 mr-1" />
                                Geteilt
                              </Badge>
                            )}

                            <div className="flex items-center space-x-2">
                              {report.status === "Fertig" && (
                                <>
                                  <Button size="sm" className="btn-primary">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-500/30 text-blue-400 bg-transparent"
                                  >
                                    <Eye className="w-4 h-4 mr-2" />
                                    Vorschau
                                  </Button>
                                </>
                              )}

                              {report.status === "Wird generiert..." && (
                                <div className="flex items-center space-x-2">
                                  <Progress value={67} className="w-20" />
                                  <span className="text-blue-400 text-sm">67%</span>
                                </div>
                              )}

                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-500/30 text-gray-400 bg-transparent"
                              >
                                <Share className="w-4 h-4" />
                              </Button>

                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-500/30 text-red-400 bg-transparent"
                              >
                                <Trash2 className="w-4 h-4" />
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

          <TabsContent value="templates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reportTemplates.map((template) => (
                <Card
                  key={template.id}
                  className="glass-card card-hover border-primary/20 hover:border-secondary/40 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                        <template.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{template.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className="bg-blue-500/20 text-blue-400 text-xs">{template.category}</Badge>
                          <div className="flex items-center space-x-1 text-gray-400 text-xs">
                            <Clock className="w-3 h-3" />
                            <span>{template.estimatedTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4">{template.description}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-white font-medium text-sm">Enthaltene Features:</p>
                      {template.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" className="flex-1 btn-primary">
                        <Play className="w-4 h-4 mr-2" />
                        Verwenden
                      </Button>
                      <Button size="sm" variant="outline" className="border-blue-500/30 text-blue-400 bg-transparent">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <PieChart className="w-5 h-5 mr-2 text-cyan-400" />
                    Report-Typen Verteilung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-white">Sicherheits-Reports</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-400 font-semibold">45%</span>
                        <Progress value={45} className="w-20" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-white">Compliance-Reports</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400 font-semibold">30%</span>
                        <Progress value={30} className="w-20" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                        <span className="text-white">Executive Summaries</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-400 font-semibold">15%</span>
                        <Progress value={15} className="w-20" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                        <span className="text-white">Sonstige</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-400 font-semibold">10%</span>
                        <Progress value={10} className="w-20" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <LineChart className="w-5 h-5 mr-2 text-cyan-400" />
                    Report-Generierung Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-slate-800/30 rounded-lg flex items-center justify-center mb-4">
                    <p className="text-gray-400">Trend-Diagramm würde hier angezeigt</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-green-400 font-bold">+23%</p>
                      <p className="text-gray-400 text-sm">Diese Woche</p>
                    </div>
                    <div>
                      <p className="text-blue-400 font-bold">156</p>
                      <p className="text-gray-400 text-sm">Diesen Monat</p>
                    </div>
                    <div>
                      <p className="text-purple-400 font-bold">4.2</p>
                      <p className="text-gray-400 text-sm">Ø pro Tag</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card card-hover border-primary/20 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-cyan-400" />
                    Beliebteste Report-Vorlagen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Sicherheits-Übersicht", usage: 89, trend: "+12%" },
                      { name: "Schwachstellen-Report", usage: 76, trend: "+8%" },
                      { name: "Executive Summary", usage: 65, trend: "+15%" },
                      { name: "Compliance-Audit", usage: 54, trend: "+5%" },
                      { name: "Domain-Analyse", usage: 43, trend: "+3%" },
                    ].map((template, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-white font-medium">{template.name}</span>
                          <Badge className="bg-green-500/20 text-green-400 text-xs">{template.trend}</Badge>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Progress value={template.usage} className="w-32" />
                          <span className="text-cyan-400 font-semibold w-12 text-right">{template.usage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scheduled">
            <Card className="glass-card card-hover border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Geplante Reports</CardTitle>
                    <CardDescription className="text-gray-400">
                      Automatische Report-Generierung nach Zeitplan
                    </CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="btn-primary">
                        <Calendar className="w-4 h-4 mr-2" />
                        Neuen Zeitplan erstellen
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass-card card-hover border-primary/20 text-white">
                      <DialogHeader>
                        <DialogTitle>Automatischen Report planen</DialogTitle>
                        <DialogDescription className="text-gray-300">
                          Erstellen Sie einen wiederkehrenden Report-Zeitplan.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="scheduleName">Zeitplan-Name</Label>
                          <Input
                            id="scheduleName"
                            placeholder="z.B. Wöchentlicher Sicherheitsbericht"
                            className="input-modern text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="scheduleTemplate">Report-Vorlage</Label>
                          <Select>
                            <SelectTrigger className="input-modern text-white">
                              <SelectValue placeholder="Vorlage wählen" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-800 border-blue-500/30">
                              <SelectItem value="security">Sicherheits-Übersicht</SelectItem>
                              <SelectItem value="vulnerability">Schwachstellen-Report</SelectItem>
                              <SelectItem value="compliance">Compliance-Audit</SelectItem>
                              <SelectItem value="executive">Executive Summary</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="frequency">Häufigkeit</Label>
                          <Select>
                            <SelectTrigger className="input-modern text-white">
                              <SelectValue placeholder="Häufigkeit wählen" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-800 border-blue-500/30">
                              <SelectItem value="daily">Täglich</SelectItem>
                              <SelectItem value="weekly">Wöchentlich</SelectItem>
                              <SelectItem value="monthly">Monatlich</SelectItem>
                              <SelectItem value="quarterly">Quartalsweise</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="autoEmail" />
                          <Label htmlFor="autoEmail">Automatisch per E-Mail versenden</Label>
                        </div>
                        <Button className="w-full btn-primary">Zeitplan erstellen</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Wöchentlicher Sicherheitsbericht",
                      template: "Sicherheits-Übersicht",
                      frequency: "Jeden Montag um 08:00",
                      nextRun: "22.01.2024 08:00",
                      status: "Aktiv",
                      recipients: 3,
                    },
                    {
                      name: "Monatlicher Compliance-Check",
                      template: "Compliance-Audit",
                      frequency: "Jeden 1. des Monats um 09:00",
                      nextRun: "01.02.2024 09:00",
                      status: "Aktiv",
                      recipients: 5,
                    },
                    {
                      name: "Quartalsweise Executive Summary",
                      template: "Executive Summary",
                      frequency: "Quartalsweise am 15. um 10:00",
                      nextRun: "15.04.2024 10:00",
                      status: "Pausiert",
                      recipients: 2,
                    },
                  ].map((schedule, index) => (
                    <Card key={index} className="glass-card card-hover border-blue-500/10 bg-slate-800/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold mb-1">{schedule.name}</h3>
                              <p className="text-gray-400 text-sm mb-1">
                                {schedule.template} • {schedule.frequency}
                              </p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span>Nächste Ausführung: {schedule.nextRun}</span>
                                <span>{schedule.recipients} Empfänger</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <Badge className={`${schedule.status === "Aktiv" ? "badge-success" : "badge-warning"}`}>
                              {schedule.status}
                            </Badge>

                            <div className="flex items-center space-x-2">
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
                                className={`${
                                  schedule.status === "Aktiv"
                                    ? "border-yellow-500/30 text-yellow-400"
                                    : "border-green-500/30 text-green-400"
                                } bg-transparent`}
                              >
                                {schedule.status === "Aktiv" ? "Pausieren" : "Aktivieren"}
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
        </Tabs>
      </div>
    </div>
  )
}
