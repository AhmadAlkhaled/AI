"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
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
  Bell,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Settings,
  Trash2,
  Star,
  Mail,
  Smartphone,
  Slack,
  ArrowLeft,
  Eye,
  EyeOff,
  Globe,
  Activity,
  FileText,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "critical",
      title: "Kritische Schwachstelle erkannt",
      message: "SQL Injection Vulnerability in api.example.com gefunden. Sofortige Maßnahmen erforderlich.",
      timestamp: "vor 5 Min",
      read: false,
      starred: true,
      category: "security",
      domain: "api.example.com",
      severity: "Kritisch",
      actions: ["Details anzeigen", "Als behoben markieren"],
    },
    {
      id: 2,
      type: "warning",
      title: "SSL-Zertifikat läuft ab",
      message: "Das SSL-Zertifikat für blog.example.com läuft in 7 Tagen ab.",
      timestamp: "vor 2 Std",
      read: false,
      starred: false,
      category: "maintenance",
      domain: "blog.example.com",
      severity: "Mittel",
      actions: ["Zertifikat erneuern", "Erinnerung setzen"],
    },
    {
      id: 3,
      type: "success",
      title: "Scan erfolgreich abgeschlossen",
      message:
        "Vollständiger Sicherheitsscan von shop.example.com wurde erfolgreich beendet. Keine kritischen Probleme gefunden.",
      timestamp: "vor 4 Std",
      read: true,
      starred: false,
      category: "scan",
      domain: "shop.example.com",
      severity: "Info",
      actions: ["Report anzeigen", "Neuen Scan planen"],
    },
    {
      id: 4,
      type: "info",
      title: "Neuer Benutzer registriert",
      message: "Ein neuer Benutzer (sarah@startup.com) hat sich für den Pro-Plan registriert.",
      timestamp: "vor 6 Std",
      read: true,
      starred: false,
      category: "user",
      domain: null,
      severity: "Info",
      actions: ["Profil anzeigen", "Willkommensnachricht senden"],
    },
    {
      id: 5,
      type: "warning",
      title: "Ungewöhnlicher Traffic erkannt",
      message: "Erhöhtes Traffic-Aufkommen auf example.com. Möglicher DDoS-Angriff.",
      timestamp: "vor 8 Std",
      read: false,
      starred: true,
      category: "security",
      domain: "example.com",
      severity: "Hoch",
      actions: ["Traffic analysieren", "Schutzmaßnahmen aktivieren"],
    },
    {
      id: 6,
      type: "success",
      title: "Compliance-Check bestanden",
      message: "DSGVO-Compliance-Prüfung für alle Domains erfolgreich abgeschlossen.",
      timestamp: "vor 1 Tag",
      read: true,
      starred: false,
      category: "compliance",
      domain: null,
      severity: "Info",
      actions: ["Report herunterladen", "Nächste Prüfung planen"],
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterCategory, setFilterCategory] = useState("all")
  const [showUnreadOnly, setShowUnreadOnly] = useState(false)
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: true,
    slack: false,
    sms: false,
    critical: true,
    warning: true,
    info: true,
    success: true,
  })

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (notification.domain && notification.domain.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesType = filterType === "all" || notification.type === filterType
    const matchesCategory = filterCategory === "all" || notification.category === filterCategory
    const matchesRead = !showUnreadOnly || !notification.read

    return matchesSearch && matchesType && matchesCategory && matchesRead
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAsUnread = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: false } : notification)),
    )
  }

  const toggleStar = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, starred: !notification.starred } : notification,
      ),
    )
  }

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <XCircle className="w-5 h-5 text-danger" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-warning" />
      case "success":
        return <CheckCircle className="w-5 h-5 text-success" />
      case "info":
        return <Bell className="w-5 h-5 text-info" />
      default:
        return <Bell className="w-5 h-5 text-gray-400" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "security":
        return <Shield className="w-4 h-4" />
      case "maintenance":
        return <Settings className="w-4 h-4" />
      case "scan":
        return <Activity className="w-4 h-4" />
      case "user":
        return <Users className="w-4 h-4" />
      case "compliance":
        return <FileText className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
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
      <header className="relative z-10 border-primary/20 backdrop-blur-xl bg-slate-950/80 sticky top-0">
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
                <Bell className="w-5 h-5 text-cyan-400" />
                <h1 className="text-xl font-semibold text-white">Benachrichtigungen</h1>
                {unreadCount > 0 && <Badge className="badge-danger ml-2">{unreadCount} ungelesen</Badge>}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-blue-500/30 text-blue-400 bg-transparent"
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Alle als gelesen markieren
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                    <Settings className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-card card-hover border-primary/20 text-white max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Benachrichtigungs-Einstellungen</DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Konfigurieren Sie, wie und wann Sie Benachrichtigungen erhalten möchten.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-semibold mb-4">Benachrichtigungskanäle</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-blue-400" />
                            <div>
                              <Label htmlFor="email">E-Mail</Label>
                              <p className="text-gray-400 text-sm">Benachrichtigungen per E-Mail erhalten</p>
                            </div>
                          </div>
                          <Switch
                            id="email"
                            checked={notificationSettings.email}
                            onCheckedChange={(checked) =>
                              setNotificationSettings((prev) => ({ ...prev, email: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Smartphone className="w-5 h-5 text-green-400" />
                            <div>
                              <Label htmlFor="push">Push-Benachrichtigungen</Label>
                              <p className="text-gray-400 text-sm">Browser-Benachrichtigungen aktivieren</p>
                            </div>
                          </div>
                          <Switch
                            id="push"
                            checked={notificationSettings.push}
                            onCheckedChange={(checked) =>
                              setNotificationSettings((prev) => ({ ...prev, push: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Slack className="w-5 h-5 text-purple-400" />
                            <div>
                              <Label htmlFor="slack">Slack Integration</Label>
                              <p className="text-gray-400 text-sm">Benachrichtigungen in Slack-Channel</p>
                            </div>
                          </div>
                          <Switch
                            id="slack"
                            checked={notificationSettings.slack}
                            onCheckedChange={(checked) =>
                              setNotificationSettings((prev) => ({ ...prev, slack: checked }))
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-blue-500/20" />

                    <div>
                      <h3 className="text-white font-semibold mb-4">Benachrichtigungstypen</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <XCircle className="w-5 h-5 text-red-400" />
                            <div>
                              <Label htmlFor="critical">Kritische Warnungen</Label>
                              <p className="text-gray-400 text-sm">
                                Sofortige Benachrichtigung bei kritischen Problemen
                              </p>
                            </div>
                          </div>
                          <Switch
                            id="critical"
                            checked={notificationSettings.critical}
                            onCheckedChange={(checked) =>
                              setNotificationSettings((prev) => ({ ...prev, critical: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <AlertTriangle className="w-5 h-5 text-yellow-400" />
                            <div>
                              <Label htmlFor="warning">Warnungen</Label>
                              <p className="text-gray-400 text-sm">Benachrichtigungen bei Warnungen</p>
                            </div>
                          </div>
                          <Switch
                            id="warning"
                            checked={notificationSettings.warning}
                            onCheckedChange={(checked) =>
                              setNotificationSettings((prev) => ({ ...prev, warning: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <div>
                              <Label htmlFor="success">Erfolgs-Meldungen</Label>
                              <p className="text-gray-400 text-sm">Bestätigungen für abgeschlossene Aktionen</p>
                            </div>
                          </div>
                          <Switch
                            id="success"
                            checked={notificationSettings.success}
                            onCheckedChange={(checked) =>
                              setNotificationSettings((prev) => ({ ...prev, success: checked }))
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <Button className="w-full btn-primary">Einstellungen speichern</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Filters and Search */}
        <Card className="glass-card card-hover border-primary/20 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Benachrichtigungen suchen..."
                    className="pl-10 input-modern text-white w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-40 input-modern text-white">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-blue-500/30">
                    <SelectItem value="all">Alle Typen</SelectItem>
                    <SelectItem value="critical">Kritisch</SelectItem>
                    <SelectItem value="warning">Warnung</SelectItem>
                    <SelectItem value="success">Erfolg</SelectItem>
                    <SelectItem value="info">Info</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-40 input-modern text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-blue-500/30">
                    <SelectItem value="all">Alle Kategorien</SelectItem>
                    <SelectItem value="security">Sicherheit</SelectItem>
                    <SelectItem value="maintenance">Wartung</SelectItem>
                    <SelectItem value="scan">Scans</SelectItem>
                    <SelectItem value="user">Benutzer</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Switch id="unreadOnly" checked={showUnreadOnly} onCheckedChange={setShowUnreadOnly} />
                  <Label htmlFor="unreadOnly" className="text-white">
                    Nur ungelesene
                  </Label>
                </div>

                <Badge className="badge-info">{filteredNotifications.length} Benachrichtigungen</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <Card className="glass-card card-hover border-primary/20">
              <CardContent className="p-12 text-center">
                <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Keine Benachrichtigungen gefunden</h3>
                <p className="text-gray-400">
                  {searchTerm || filterType !== "all" || filterCategory !== "all" || showUnreadOnly
                    ? "Versuchen Sie, Ihre Filter zu ändern."
                    : "Sie haben alle Benachrichtigungen gelesen."}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`glass-card card-hover transition-all duration-300 hover:border-cyan-400/40 ${
                  !notification.read ? "border-blue-500/40 bg-blue-500/5" : "border-blue-500/20 bg-slate-800/20"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className={`font-semibold ${!notification.read ? "text-white" : "text-gray-300"}`}>
                            {notification.title}
                          </h3>

                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              {getCategoryIcon(notification.category)}
                              <span className="text-gray-400 text-xs capitalize">{notification.category}</span>
                            </div>

                            <Badge
                              className={`text-xs ${
                                notification.severity === "Kritisch"
                                  ? "badge-danger"
                                  : notification.severity === "Hoch"
                                    ? "badge-warning"
                                    : notification.severity === "Mittel"
                                      ? "badge-warning"
                                      : "badge-info"
                              }`}
                            >
                              {notification.severity}
                            </Badge>

                            {notification.domain && (
                              <Badge className="bg-gray-500/20 text-gray-400 text-xs">
                                <Globe className="w-3 h-3 mr-1" />
                                {notification.domain}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <p className={`text-sm mb-3 ${!notification.read ? "text-gray-300" : "text-gray-400"}`}>
                          {notification.message}
                        </p>

                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{notification.timestamp}</span>
                          </div>
                          {!notification.read && <Badge className="badge-info text-xs">Neu</Badge>}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2 mt-4">
                          {notification.actions.map((action, index) => (
                            <Button
                              key={index}
                              size="sm"
                              variant="outline"
                              className="border-blue-500/30 text-blue-400 bg-transparent text-xs"
                            >
                              {action}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center space-x-2 ml-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-yellow-400"
                        onClick={() => toggleStar(notification.id)}
                      >
                        <Star className={`w-4 h-4 ${notification.starred ? "text-yellow-400 fill-current" : ""}`} />
                      </Button>

                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-blue-400"
                        onClick={() =>
                          notification.read ? markAsUnread(notification.id) : markAsRead(notification.id)
                        }
                      >
                        {notification.read ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>

                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-red-400"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Quick Stats */}
        {filteredNotifications.length > 0 && (
          <Card className="glass-card card-hover border-primary/20 mt-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-danger">
                    {notifications.filter((n) => n.type === "critical").length}
                  </p>
                  <p className="text-gray-400 text-sm">Kritisch</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-warning">
                    {notifications.filter((n) => n.type === "warning").length}
                  </p>
                  <p className="text-gray-400 text-sm">Warnungen</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-success">
                    {notifications.filter((n) => n.type === "success").length}
                  </p>
                  <p className="text-gray-400 text-sm">Erfolg</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-info">{notifications.filter((n) => n.starred).length}</p>
                  <p className="text-gray-400 text-sm">Favoriten</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
