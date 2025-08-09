"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Bell, Activity } from "lucide-react"

export default function DashboardPage() {
  const [securityScore, setSecurityScore] = useState(87)
  const [isScanning, setIsScanning] = useState(false)
  const router = useRouter()
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
    <div className="section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-bold md:text-3xl">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="border-white/20 text-white/80 hover:bg-white/10 bg-transparent"
              onClick={() => router.push("/notifications")}
              aria-label="Benachrichtigungen öffnen"
            >
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Responsive grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white/90 flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-300" /> Erkennung
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/70">Live-Signaturen und Anomalien in Echtzeit.</CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white/90 flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-300" /> Aktivität
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/70">Ereignisse des letzten Tages mit Trend.</CardContent>
          </Card>

          <Card className="glass-card lg:col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-white/90">Aktionen</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button className="btn-primary">Schnell-Scan</Button>
              <Button className="rounded-lg border border-white/15 px-4 py-2 text-white/80 hover:bg-white/10">
                Report generieren
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
