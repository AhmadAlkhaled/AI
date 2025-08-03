"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Shield,
  Users,
  Settings,
  BarChart3,
  Server,
  Database,
  Activity,
  CheckCircle,
  UserPlus,
  Edit,
  Trash2,
  Search,
  Filter,
  Eye,
  EyeOff,
} from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Max Mustermann",
      email: "max@example.com",
      role: "Admin",
      status: "active",
      lastLogin: "vor 2 Stunden",
      company: "TechCorp GmbH",
    },
    {
      id: 2,
      name: "Sarah Weber",
      email: "sarah@example.com",
      role: "User",
      status: "active",
      lastLogin: "vor 1 Tag",
      company: "DataSecure AG",
    },
    {
      id: 3,
      name: "Michael Schmidt",
      email: "michael@example.com",
      role: "Manager",
      status: "inactive",
      lastLogin: "vor 1 Woche",
      company: "CloudTech Solutions",
    },
  ])

  const [systemStats, setSystemStats] = useState({
    totalUsers: 0,
    activeScans: 0,
    threatsBlocked: 0,
    systemUptime: 0,
  })

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")

  useEffect(() => {
    // Animate stats
    const targets = {
      totalUsers: 15847,
      activeScans: 23,
      threatsBlocked: 1247,
      systemUptime: 99.9,
    }

    const duration = 2000
    const steps = 60
    const stepTime = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setSystemStats({
        totalUsers: Math.floor(targets.totalUsers * progress),
        activeScans: Math.floor(targets.activeScans * progress),
        threatsBlocked: Math.floor(targets.threatsBlocked * progress),
        systemUptime: Math.min(targets.systemUptime * progress, 99.9),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [])

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === "all" || user.role.toLowerCase() === selectedRole.toLowerCase()
    return matchesSearch && matchesRole
  })

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId))
  }

  const handleToggleUserStatus = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, status: user.status === "active" ? "inactive" : "active" } : user,
      ),
    )
  }

  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "manager":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "user":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getStatusColor = (status) => {
    return status === "active"
      ? "bg-green-500/20 text-green-300 border-green-500/30"
      : "bg-gray-500/20 text-gray-300 border-gray-500/30"
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
                Aegis Admin
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                  Dashboard
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
            Admin{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-gray-300">Systemverwaltung und Benutzermanagement</p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card card-hover border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Gesamte Benutzer</p>
                  <p className="text-3xl font-bold text-purple-400">{systemStats.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <div className="mt-4">
                <div className="flex items-center text-xs text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  +12% seit letztem Monat
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card card-hover border-blue-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Aktive Scans</p>
                  <p className="text-3xl font-bold text-blue-400">{systemStats.activeScans}</p>
                </div>
                <Activity className="w-8 h-8 text-blue-400" />
              </div>
              <div className="mt-4">
                <div className="flex items-center text-xs text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Läuft kontinuierlich
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card card-hover border-green-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Bedrohungen blockiert</p>
                  <p className="text-3xl font-bold text-green-400">{systemStats.threatsBlocked.toLocaleString()}</p>
                </div>
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <div className="mt-4">
                <div className="flex items-center text-xs text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Heute
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card card-hover border-yellow-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">System Uptime</p>
                  <p className="text-3xl font-bold text-yellow-400">{systemStats.systemUptime.toFixed(1)}%</p>
                </div>
                <Server className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="mt-4">
                <div className="flex items-center text-xs text-gray-400">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  Letzten 30 Tage
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Admin Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-purple-500/20">
            <TabsTrigger
              value="users"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Benutzerverwaltung
            </TabsTrigger>
            <TabsTrigger
              value="system"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              System-Monitoring
            </TabsTrigger>
            <TabsTrigger
              value="scans"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Scan-Management
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Einstellungen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            {/* User Management Header */}
            <Card className="glass-card border-purple-500/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white flex items-center">
                      <Users className="w-6 h-6 mr-2 text-purple-400" />
                      Benutzerverwaltung
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Verwalten Sie Benutzerkonten und Berechtigungen
                    </CardDescription>
                  </div>
                  <Button className="btn-primary">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Neuer Benutzer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Benutzer suchen..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input-modern pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="input-modern"
                    >
                      <option value="all">Alle Rollen</option>
                      <option value="admin">Admin</option>
                      <option value="manager">Manager</option>
                      <option value="user">User</option>
                    </select>
                    <Button variant="outline" size="sm" className="bg-slate-800/50 border-gray-600">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Users Table */}
                <div className="space-y-4">
                  {filteredUsers.map((user) => (
                    <div key={user.id} className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{user.name}</h3>
                            <p className="text-gray-300 text-sm">{user.email}</p>
                            <p className="text-gray-400 text-xs">{user.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                            <Badge className={`${getStatusColor(user.status)} ml-2`}>
                              {user.status === "active" ? "Aktiv" : "Inaktiv"}
                            </Badge>
                            <p className="text-gray-400 text-xs mt-1">Letzter Login: {user.lastLogin}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleToggleUserStatus(user.id)}
                              className="bg-slate-700/50 border-gray-600 hover:bg-slate-600/50"
                            >
                              {user.status === "active" ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-slate-700/50 border-gray-600 hover:bg-slate-600/50"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeleteUser(user.id)}
                              className="bg-red-500/20 border-red-500/30 hover:bg-red-500/30 text-red-300"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card card-hover border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Server className="w-6 h-6 mr-2 text-green-400" />
                    Server-Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">CPU-Auslastung</span>
                        <span className="text-green-400">23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">RAM-Nutzung</span>
                        <span className="text-green-400">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Festplatte</span>
                        <span className="text-green-400">67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Netzwerk I/O</span>
                        <span className="text-green-400">12%</span>
                      </div>
                      <Progress value={12} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card card-hover border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Database className="w-6 h-6 mr-2 text-blue-400" />
                    Datenbank-Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Verbindungen</span>
                      <span className="text-blue-400 font-semibold">247/500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Abfragen/Sek</span>
                      <span className="text-blue-400 font-semibold">1,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Cache Hit Rate</span>
                      <span className="text-green-400 font-semibold">98.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Letztes Backup</span>
                      <span className="text-gray-400">vor 2 Stunden</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scans" className="space-y-6">
            <Card className="glass-card card-hover border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-purple-400" />
                  Aktive Scans
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Überwachen und verwalten Sie laufende Sicherheitsscans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold">Vollständiger Netzwerk-Scan</h3>
                        <p className="text-gray-300 text-sm">Überprüfung aller Netzwerk-Endpunkte</p>
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Läuft</Badge>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 text-sm">Fortschritt</span>
                        <span className="text-blue-400 text-sm">67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Gestartet: vor 15 Minuten</span>
                      <span>ETA: 8 Minuten</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-800/30 border border-gray-700/50">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold">Schwachstellen-Analyse</h3>
                        <p className="text-gray-300 text-sm">Tiefgehende Analyse bekannter Schwachstellen</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Abgeschlossen</Badge>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Abgeschlossen: vor 1 Stunde</span>
                      <span>Dauer: 23 Minuten</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card card-hover border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="w-6 h-6 mr-2 text-purple-400" />
                    Bedrohungsstatistiken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Malware erkannt</span>
                      <span className="text-red-400 font-semibold">23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Phishing-Versuche</span>
                      <span className="text-yellow-400 font-semibold">156</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">DDoS-Angriffe</span>
                      <span className="text-orange-400 font-semibold">7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Blockierte IPs</span>
                      <span className="text-blue-400 font-semibold">1,247</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card card-hover border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                    Erfolgsmetriken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Erkennungsrate</span>
                      <span className="text-green-400 font-semibold">99.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">False Positives</span>
                      <span className="text-green-400 font-semibold">0.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Reaktionszeit</span>
                      <span className="text-green-400 font-semibold">&lt; 1s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Kundenzufriedenheit</span>
                      <span className="text-green-400 font-semibold">4.9/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="glass-card card-hover border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="w-6 h-6 mr-2 text-purple-400" />
                  System-Einstellungen
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Konfigurieren Sie globale Systemeinstellungen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="scan-interval" className="text-white">
                        Scan-Intervall (Minuten)
                      </Label>
                      <Input id="scan-interval" type="number" defaultValue="30" className="input-modern mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="alert-threshold" className="text-white">
                        Alarm-Schwellenwert
                      </Label>
                      <Input id="alert-threshold" type="number" defaultValue="5" className="input-modern mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="retention-days" className="text-white">
                        Log-Aufbewahrung (Tage)
                      </Label>
                      <Input id="retention-days" type="number" defaultValue="90" className="input-modern mt-2" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="max-users" className="text-white">
                        Max. Benutzer
                      </Label>
                      <Input id="max-users" type="number" defaultValue="1000" className="input-modern mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="backup-interval" className="text-white">
                        Backup-Intervall (Stunden)
                      </Label>
                      <Input id="backup-interval" type="number" defaultValue="24" className="input-modern mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="session-timeout" className="text-white">
                        Session-Timeout (Minuten)
                      </Label>
                      <Input id="session-timeout" type="number" defaultValue="60" className="input-modern mt-2" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-700/50">
                  <Button variant="outline" className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50">
                    Zurücksetzen
                  </Button>
                  <Button className="btn-primary">Einstellungen speichern</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
