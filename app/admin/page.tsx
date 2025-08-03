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
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  Users,
  Server,
  Settings,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Search,
  Filter,
  Download,
  Edit,
  Eye,
  Activity,
  Bell,
  RefreshCw,
  Play,
  Pause,
  CircleStopIcon as Stop,
  UserCheck,
  UserX,
  Crown,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState(1247)
  const [activeScans, setActiveScans] = useState(23)
  const [systemLoad, setSystemLoad] = useState(67)
  const [selectedUser, setSelectedUser] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [userFilter, setUserFilter] = useState("all")

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScans((prev) => Math.max(0, prev + (Math.random() > 0.5 ? 1 : -1)))
      setSystemLoad((prev) => Math.max(10, Math.min(90, prev + (Math.random() - 0.5) * 5)))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const users = [
    {
      id: 1,
      name: "Max Mustermann",
      email: "max@example.com",
      company: "TechCorp GmbH",
      plan: "Pro",
      status: "Aktiv",
      lastLogin: "vor 2 Std",
      domains: 12,
      scans: 156,
      joined: "2023-08-15",
    },
    {
      id: 2,
      name: "Sarah Schmidt",
      email: "sarah@startup.com",
      company: "StartupXYZ",
      plan: "Enterprise",
      status: "Aktiv",
      lastLogin: "vor 1 Tag",
      domains: 25,
      scans: 342,
      joined: "2023-06-22",
    },
    {
      id: 3,
      name: "Michael Weber",
      email: "m.weber@corp.de",
      company: "BigCorp AG",
      plan: "Basic",
      status: "Gesperrt",
      lastLogin: "vor 1 Woche",
      domains: 3,
      scans: 45,
      joined: "2023-11-03",
    },
    {
      id: 4,
      name: "Lisa Müller",
      email: "lisa@security.com",
      company: "SecureIT",
      plan: "Pro",
      status: "Aktiv",
      lastLogin: "vor 30 Min",
      domains: 18,
      scans: 289,
      joined: "2023-09-12",
    },
  ]

  const systemStats = [
    { name: "API Server", status: "online", load: 45, uptime: "99.9%", requests: "2.3M" },
    { name: "Scan Engine", status: "online", load: 78, uptime: "99.8%", requests: "156K" },
    { name: "Database", status: "warning", load: 89, uptime: "99.7%", requests: "890K" },
    { name: "Cache Layer", status: "online", load: 23, uptime: "100%", requests: "5.2M" },
  ]

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = userFilter === "all" || user.status.toLowerCase() === userFilter.toLowerCase()
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
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-yellow-400" />
                <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Settings className="w-4 h-4" />
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Admin Overview */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">System Control Center</h2>
          <p className="text-gray-400">Verwalten Sie Benutzer, Systeme und Einstellungen</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card card-hover border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Gesamte Benutzer</p>
                  <p className="text-3xl font-bold text-white">{totalUsers.toLocaleString()}</p>
                  <p className="text-green-400 text-sm">+12% diesen Monat</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card card-hover border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Aktive Scans</p>
                  <p className="text-3xl font-bold text-white">{activeScans}</p>
                  <p className="text-cyan-400 text-sm">Laufende Prozesse</p>
                </div>
                <Activity className="w-8 h-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card card-hover border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">System Load</p>
                  <p className="text-3xl font-bold text-white">{systemLoad}%</p>
                  <Progress value={systemLoad} className="mt-2" />
                </div>
                <Server className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card card-hover border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Uptime</p>
                  <p className="text-3xl font-bold text-white">99.9%</p>
                  <p className="text-green-400 text-sm">Letzte 30 Tage</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admin Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-primary/20 p-1">
            <TabsTrigger value="users" className="data-[state=active]:bg-blue-600">
              <Users className="w-4 h-4 mr-2" />
              Benutzerverwaltung
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-blue-600">
              <Server className="w-4 h-4 mr-2" />
              System Monitor
            </TabsTrigger>
            <TabsTrigger value="scans" className="data-[state=active]:bg-blue-600">
              <Activity className="w-4 h-4 mr-2" />
              Scan Management
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-600">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-blue-600">
              <Settings className="w-4 h-4 mr-2" />
              Einstellungen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card className="glass-card card-hover border-primary/20">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div>
                    <CardTitle className="text-white">Benutzerverwaltung</CardTitle>
                    <CardDescription className="text-gray-400">
                      Verwalten Sie alle registrierten Benutzer und deren Berechtigungen
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Benutzer suchen..."
                        className="pl-10 input-modern text-white w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select value={userFilter} onValueChange={setUserFilter}>
                      <SelectTrigger className="w-40 input-modern text-white">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-blue-500/30">
                        <SelectItem value="all">Alle Status</SelectItem>
                        <SelectItem value="aktiv">Aktiv</SelectItem>
                        <SelectItem value="gesperrt">Gesperrt</SelectItem>
                        <SelectItem value="inaktiv">Inaktiv</SelectItem>
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
                  {filteredUsers.map((user) => (
                    <Card key={user.id} className="glass-card card-hover border-primary/10 bg-slate-800/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <p className="text-white font-medium">{user.name}</p>
                              <p className="text-gray-400 text-sm">{user.email}</p>
                              <p className="text-gray-500 text-xs">{user.company}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-6">
                            <div className="text-center">
                              <p className="text-white font-medium">Plan</p>
                              <Badge
                                className={`${
                                  user.plan === "Enterprise"
                                    ? "badge-secondary"
                                    : user.plan === "Pro"
                                      ? "bg-blue-500/20 text-blue-400"
                                      : "bg-gray-500/20 text-gray-400"
                                }`}
                              >
                                {user.plan}
                              </Badge>
                            </div>

                            <div className="text-center">
                              <p className="text-white font-medium">Domains</p>
                              <p className="text-cyan-400 font-semibold">{user.domains}</p>
                            </div>

                            <div className="text-center">
                              <p className="text-white font-medium">Scans</p>
                              <p className="text-green-400 font-semibold">{user.scans}</p>
                            </div>

                            <div className="text-center">
                              <p className="text-white font-medium">Status</p>
                              <Badge className={`${user.status === "Aktiv" ? "badge-success" : "badge-danger"}`}>
                                {user.status}
                              </Badge>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-500/30 text-blue-400 bg-transparent"
                                  >
                                    <Edit className="w-4 h-4 mr-2" />
                                    Bearbeiten
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="glass-card card-hover border-primary/20 text-white">
                                  <DialogHeader>
                                    <DialogTitle>Benutzer bearbeiten</DialogTitle>
                                    <DialogDescription className="text-gray-300">
                                      Bearbeiten Sie die Benutzerinformationen und Berechtigungen.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div>
                                      <Label htmlFor="userName">Name</Label>
                                      <Input
                                        id="userName"
                                        defaultValue={user.name}
                                        className="input-modern text-white"
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="userEmail">E-Mail</Label>
                                      <Input
                                        id="userEmail"
                                        defaultValue={user.email}
                                        className="input-modern text-white"
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="userPlan">Plan</Label>
                                      <Select defaultValue={user.plan.toLowerCase()}>
                                        <SelectTrigger className="input-modern text-white">
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="bg-slate-800 border-blue-500/30">
                                          <SelectItem value="basic">Basic</SelectItem>
                                          <SelectItem value="pro">Pro</SelectItem>
                                          <SelectItem value="enterprise">Enterprise</SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Switch id="userActive" defaultChecked={user.status === "Aktiv"} />
                                      <Label htmlFor="userActive">Benutzer aktiv</Label>
                                    </div>
                                    <Button className="w-full btn-primary">Änderungen speichern</Button>
                                  </div>
                                </DialogContent>
                              </Dialog>

                              <Button
                                size="sm"
                                variant="outline"
                                className={`${
                                  user.status === "Aktiv"
                                    ? "border-red-500/30 text-red-400 hover:bg-red-500/10"
                                    : "border-green-500/30 text-green-400 hover:bg-green-500/10"
                                } bg-transparent`}
                              >
                                {user.status === "Aktiv" ? (
                                  <>
                                    <UserX className="w-4 h-4 mr-2" />
                                    Sperren
                                  </>
                                ) : (
                                  <>
                                    <UserCheck className="w-4 h-4 mr-2" />
                                    Entsperren
                                  </>
                                )}
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

          <TabsContent value="system">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* System Status */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Server className="w-5 h-5 mr-2 text-cyan-400" />
                    System Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {systemStats.map((system, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-slate-800/30">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            system.status === "online" ? "status-online" : "status-warning"
                          }`}
                        ></div>
                        <div>
                          <p className="text-white font-medium">{system.name}</p>
                          <p className="text-gray-400 text-sm">Uptime: {system.uptime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">{system.load}% Load</p>
                        <p className="text-gray-400 text-sm">{system.requests} Requests</p>
                        <Progress value={system.load} className="w-24 mt-1" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Resource Usage */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-cyan-400" />
                    Ressourcenverbrauch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">CPU Usage</span>
                      <span className="text-cyan-400">67%</span>
                    </div>
                    <Progress value={67} className="mb-1" />
                    <p className="text-gray-400 text-xs">8 Cores @ 3.2GHz</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Memory</span>
                      <span className="text-blue-400">45%</span>
                    </div>
                    <Progress value={45} className="mb-1" />
                    <p className="text-gray-400 text-xs">18GB / 32GB verwendet</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Storage</span>
                      <span className="text-yellow-400">78%</span>
                    </div>
                    <Progress value={78} className="mb-1" />
                    <p className="text-gray-400 text-xs">780GB / 1TB verwendet</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Network I/O</span>
                      <span className="text-green-400">23%</span>
                    </div>
                    <Progress value={23} className="mb-1" />
                    <p className="text-gray-400 text-xs">2.3GB/s Durchsatz</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scans">
            <Card className="glass-card card-hover border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Scan Management</CardTitle>
                    <CardDescription className="text-gray-400">
                      Überwachen und verwalten Sie alle laufenden und geplanten Scans
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="bg-gradient-to-r from-green-600 to-green-500">
                      <Play className="w-4 h-4 mr-2" />
                      Alle starten
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-500/30 text-red-400 bg-transparent">
                      <Stop className="w-4 h-4 mr-2" />
                      Alle stoppen
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      domain: "example.com",
                      type: "Full Scan",
                      status: "Läuft",
                      progress: 67,
                      eta: "15 Min",
                      user: "Max Mustermann",
                    },
                    {
                      id: 2,
                      domain: "shop.example.com",
                      type: "Quick Scan",
                      status: "Warteschlange",
                      progress: 0,
                      eta: "Wartend",
                      user: "Sarah Schmidt",
                    },
                    {
                      id: 3,
                      domain: "api.example.com",
                      type: "Deep Scan",
                      status: "Abgeschlossen",
                      progress: 100,
                      eta: "Fertig",
                      user: "Michael Weber",
                    },
                    {
                      id: 4,
                      domain: "blog.example.com",
                      type: "Security Audit",
                      status: "Fehler",
                      progress: 34,
                      eta: "Abgebrochen",
                      user: "Lisa Müller",
                    },
                  ].map((scan) => (
                    <Card key={scan.id} className="glass-card card-hover border-primary/10 bg-slate-800/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                scan.status === "Läuft"
                                  ? "bg-blue-500 animate-pulse"
                                  : scan.status === "Abgeschlossen"
                                    ? "bg-green-500"
                                    : scan.status === "Fehler"
                                      ? "bg-red-500"
                                      : "bg-yellow-500"
                              }`}
                            ></div>
                            <div>
                              <p className="text-white font-medium">{scan.domain}</p>
                              <p className="text-gray-400 text-sm">
                                {scan.type} • {scan.user}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-6">
                            <div className="text-center min-w-[100px]">
                              <p className="text-white font-medium">Fortschritt</p>
                              <div className="flex items-center space-x-2">
                                <Progress value={scan.progress} className="w-16" />
                                <span className="text-cyan-400 text-sm">{scan.progress}%</span>
                              </div>
                            </div>

                            <div className="text-center min-w-[80px]">
                              <p className="text-white font-medium">ETA</p>
                              <p className="text-gray-400 text-sm">{scan.eta}</p>
                            </div>

                            <Badge
                              className={`${
                                scan.status === "Läuft"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : scan.status === "Abgeschlossen"
                                    ? "bg-green-500/20 text-green-400"
                                    : scan.status === "Fehler"
                                      ? "bg-red-500/20 text-red-400"
                                      : "bg-yellow-500/20 text-yellow-400"
                              }`}
                            >
                              {scan.status}
                            </Badge>

                            <div className="flex items-center space-x-2">
                              {scan.status === "Läuft" ? (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-500/30 text-red-400 bg-transparent"
                                >
                                  <Pause className="w-4 h-4" />
                                </Button>
                              ) : scan.status === "Warteschlange" ? (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-green-500/30 text-green-400 bg-transparent"
                                >
                                  <Play className="w-4 h-4" />
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-blue-500/30 text-blue-400 bg-transparent"
                                >
                                  <RefreshCw className="w-4 h-4" />
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-500/30 text-gray-400 bg-transparent"
                              >
                                <Eye className="w-4 h-4" />
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

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Usage Statistics */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
                    Nutzungsstatistiken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">Scans heute</span>
                        <span className="text-cyan-400">1,247</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">Neue Benutzer</span>
                        <span className="text-green-400">+23</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">Aktive Domains</span>
                        <span className="text-blue-400">3,456</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">Gefundene Schwachstellen</span>
                        <span className="text-red-400">89</span>
                      </div>
                    </div>

                    <div className="h-48 bg-slate-800/30 rounded-lg flex items-center justify-center">
                      <p className="text-gray-400">Analytics-Diagramm würde hier angezeigt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Revenue & Plans */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                    Umsatz & Pläne
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-blue-400">456</p>
                        <p className="text-gray-400 text-sm">Basic</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-cyan-400">234</p>
                        <p className="text-gray-400 text-sm">Pro</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-purple-400">67</p>
                        <p className="text-gray-400 text-sm">Enterprise</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-white">Monatlicher Umsatz</span>
                        <span className="text-green-400 font-semibold">€45,678</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white">Wachstum (MoM)</span>
                        <span className="text-green-400">+12.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white">Churn Rate</span>
                        <span className="text-yellow-400">2.3%</span>
                      </div>
                    </div>

                    <div className="h-32 bg-slate-800/30 rounded-lg flex items-center justify-center">
                      <p className="text-gray-400">Umsatz-Diagramm würde hier angezeigt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* System Settings */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white">System-Einstellungen</CardTitle>
                  <CardDescription className="text-gray-400">Konfigurieren Sie globale Systemparameter</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="maintenance">Wartungsmodus</Label>
                      <p className="text-gray-400 text-sm">System für Wartungsarbeiten sperren</p>
                    </div>
                    <Switch id="maintenance" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoScans">Automatische Scans</Label>
                      <p className="text-gray-400 text-sm">Regelmäßige Scans für alle Domains</p>
                    </div>
                    <Switch id="autoScans" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notifications">Admin-Benachrichtigungen</Label>
                      <p className="text-gray-400 text-sm">E-Mail-Benachrichtigungen für Admins</p>
                    </div>
                    <Switch id="notifications" defaultChecked />
                  </div>

                  <div>
                    <Label htmlFor="maxScans">Max. gleichzeitige Scans</Label>
                    <Input id="maxScans" type="number" defaultValue="50" className="input-modern text-white mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="scanTimeout">Scan Timeout (Minuten)</Label>
                    <Input id="scanTimeout" type="number" defaultValue="120" className="input-modern text-white mt-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card className="glass-card card-hover border-primary/20">
                <CardHeader>
                  <CardTitle className="text-white">Sicherheits-Einstellungen</CardTitle>
                  <CardDescription className="text-gray-400">Konfigurieren Sie Sicherheitsrichtlinien</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="twoFactor">2FA für Admins</Label>
                      <p className="text-gray-400 text-sm">Zwei-Faktor-Authentifizierung erforderlich</p>
                    </div>
                    <Switch id="twoFactor" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sessionTimeout">Session Timeout</Label>
                      <p className="text-gray-400 text-sm">Automatische Abmeldung nach Inaktivität</p>
                    </div>
                    <Switch id="sessionTimeout" defaultChecked />
                  </div>

                  <div>
                    <Label htmlFor="passwordPolicy">Passwort-Richtlinie</Label>
                    <Select>
                      <SelectTrigger className="input-modern text-white mt-2">
                        <SelectValue placeholder="Wählen Sie eine Richtlinie" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-blue-500/30">
                        <SelectItem value="basic">Basic (8 Zeichen)</SelectItem>
                        <SelectItem value="medium">Medium (12 Zeichen + Sonderzeichen)</SelectItem>
                        <SelectItem value="strong">Stark (16 Zeichen + Komplexität)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="loginAttempts">Max. Login-Versuche</Label>
                    <Input id="loginAttempts" type="number" defaultValue="5" className="input-modern text-white mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="ipWhitelist">IP-Whitelist</Label>
                    <Textarea
                      id="ipWhitelist"
                      placeholder="192.168.1.0/24&#10;10.0.0.0/8"
                      className="input-modern text-white mt-2"
                      rows={3}
                    />
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
