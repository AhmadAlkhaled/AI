"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Shield,
  AlertTriangle,
  CheckCircle,
  Info,
  Search,
  Filter,
  Star,
  StarOff,
  Trash2,
  BookMarkedIcon as MarkAsUnread,
  Settings,
  ArrowLeft,
  Clock,
  User,
  Server,
  Globe,
  Lock,
  Eye,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "security",
      title: "Kritische Sicherheitslücke erkannt",
      message: "Eine kritische Schwachstelle wurde in Ihrem Webserver erkannt. Sofortige Maßnahmen erforderlich.",
      timestamp: "vor 5 Minuten",
      read: false,
      starred: true,
      priority: "high",
      source: "Vulnerability Scanner",
      category: "security",
    },
    {
      id: 2,
      type: "warning",
      title: "Ungewöhnliche Netzwerkaktivität",
      message: "Erhöhter Datenverkehr von unbekannten IP-Adressen festgestellt.",
      timestamp: "vor 15 Minuten",
      read: false,
      starred: false,
      priority: "medium",
      source: "Network Monitor",
      category: "network",
    },
    {
      id: 3,
      type: "info",
      title: "Sicherheitsscan abgeschlossen",
      message: "Der wöchentliche Sicherheitsscan wurde erfolgreich abgeschlossen. 23 Systeme überprüft.",
      timestamp: "vor 1 Stunde",
      read: true,
      starred: false,
      priority: "low",
      source: "Security Scanner",
      category: "scan",
    },
    {
      id: 4,
      type: "success",
      title: "Bedrohung erfolgreich blockiert",
      message: "Ein Malware-Angriff wurde automatisch erkannt und blockiert.",
      timestamp: "vor 2 Stunden",
      read: true,
      starred: true,
      priority: "medium",
      source: "AI Defense System",
      category: "threat",
    },
    {
      id: 5,
      type: "warning",
      title: "SSL-Zertifikat läuft ab",
      message: "Das SSL-Zertifikat für example.com läuft in 7 Tagen ab. Erneuerung erforderlich.",
      timestamp: "vor 4 Stunden",
      read: false,
      starred: false,
      priority: "medium",
      source: "Certificate Monitor",
      category: "certificate",
    },
    {
      id: 6,
      type: "info",
      title: "System-Update verfügbar",
      message: "Ein neues Sicherheitsupdate für Aegis ist verfügbar. Version 2.1.3 enthält wichtige Verbesserungen.",
      timestamp: "vor 6 Stunden",
      read: true,
      starred: false,
      priority: "low",
      source: "Update Manager",
      category: "system",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPriority, setSelectedPriority] = useState("all")
  const [showUnreadOnly, setShowUnreadOnly] = useState(false)

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || notification.category === selectedCategory
    const matchesPriority = selectedPriority === "all" || notification.priority === selectedPriority
    const matchesReadStatus = !showUnreadOnly || !notification.read

    return matchesSearch && matchesCategory && matchesPriority && matchesReadStatus
  })

  const unreadCount = notifications.filter((n) => !n.read).length
  const starredCount = notifications.filter((n) => n.starred).length

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const handleToggleStar = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, starred: !n.starred } : n)))
  }

  const handleDelete = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "security":
        return <Shield className="w-5 h-5 text-red-400" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "info":
        return <Info className="w-5 h-5 text-blue-400" />
      default:
        return <Bell className="w-5 h-5 text-gray-400" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "medium":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "low":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "security":
        return <Shield className="w-4 h-4" />
      case "network":
        return <Globe className="w-4 h-4" />
      case "scan":
        return <Eye className="w-4 h-4" />
      case "threat":
        return <Zap className="w-4 h-4" />
      case "certificate":
        return <Lock className="w-4 h-4" />
      case "system":
        return <Server className="w-4 h-4" />
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
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">{unreadCount} ungelesen</Badge>
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
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Benachrichtigungen
            </span>
          </h1>
          <p className="text-gray-300">Bleiben Sie über alle Sicherheitsereignisse informiert</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card card-hover border-purple-500/20">
            <CardContent className="p-6 text-center">
              <Bell className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-400">{notifications.length}</div>
              <div className="text-gray-300 text-sm">Gesamt</div>
            </CardContent>
          </Card>
          <Card className="glass-card card-hover border-red-500/20">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-400">{unreadCount}</div>
              <div className="text-gray-300 text-sm">Ungelesen</div>
            </CardContent>
          </Card>
          <Card className="glass-card card-hover border-yellow-500/20">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-400">{starredCount}</div>
              <div className="text-gray-300 text-sm">Markiert</div>
            </CardContent>
          </Card>
          <Card className="glass-card card-hover border-green-500/20">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-400">
                {notifications.filter((n) => n.type === "success").length}
              </div>
              <div className="text-gray-300 text-sm">Erfolg</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="glass-card border-purple-500/20 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Benachrichtigungen durchsuchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-modern pl-10"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-modern"
                >
                  <option value="all">Alle Kategorien</option>
                  <option value="security">Sicherheit</option>
                  <option value="network">Netzwerk</option>
                  <option value="scan">Scans</option>
                  <option value="threat">Bedrohungen</option>
                  <option value="certificate">Zertifikate</option>
                  <option value="system">System</option>
                </select>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="input-modern"
                >
                  <option value="all">Alle Prioritäten</option>
                  <option value="high">Hoch</option>
                  <option value="medium">Mittel</option>
                  <option value="low">Niedrig</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={showUnreadOnly ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowUnreadOnly(!showUnreadOnly)}
                  className={showUnreadOnly ? "btn-primary" : "bg-slate-800/50 border-gray-600 hover:bg-slate-700/50"}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Nur ungelesene
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleMarkAllAsRead}
                  className="bg-slate-800/50 border-gray-600 hover:bg-slate-700/50"
                >
                  Alle als gelesen markieren
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-purple-500/20">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Alle ({filteredNotifications.length})
            </TabsTrigger>
            <TabsTrigger
              value="unread"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Ungelesen ({filteredNotifications.filter((n) => !n.read).length})
            </TabsTrigger>
            <TabsTrigger
              value="starred"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Markiert ({filteredNotifications.filter((n) => n.starred).length})
            </TabsTrigger>
            <TabsTrigger
              value="high-priority"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
            >
              Hohe Priorität ({filteredNotifications.filter((n) => n.priority === "high").length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <Card className="glass-card border-gray-500/20">
                <CardContent className="p-12 text-center">
                  <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Keine Benachrichtigungen</h3>
                  <p className="text-gray-400">
                    Es wurden keine Benachrichtigungen gefunden, die Ihren Filterkriterien entsprechen.
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`glass-card card-hover border-purple-500/20 ${!notification.read ? "bg-slate-800/60" : "bg-slate-800/30"}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className={`font-semibold ${!notification.read ? "text-white" : "text-gray-300"}`}>
                              {notification.title}
                            </h3>
                            {!notification.read && <div className="w-2 h-2 bg-purple-400 rounded-full"></div>}
                          </div>
                          <p className="text-gray-300 text-sm mb-3 leading-relaxed">{notification.message}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{notification.timestamp}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{notification.source}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              {getCategoryIcon(notification.category)}
                              <span className="capitalize">{notification.category}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Badge className={getPriorityColor(notification.priority)}>
                          {notification.priority === "high"
                            ? "Hoch"
                            : notification.priority === "medium"
                              ? "Mittel"
                              : "Niedrig"}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleToggleStar(notification.id)}
                            className="p-2 hover:bg-slate-700/50"
                          >
                            {notification.starred ? (
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            ) : (
                              <StarOff className="w-4 h-4 text-gray-400" />
                            )}
                          </Button>
                          {!notification.read && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="p-2 hover:bg-slate-700/50"
                            >
                              <MarkAsUnread className="w-4 h-4 text-gray-400" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(notification.id)}
                            className="p-2 hover:bg-red-500/20 text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            {filteredNotifications
              .filter((n) => !n.read)
              .map((notification) => (
                <Card key={notification.id} className="glass-card card-hover border-purple-500/20 bg-slate-800/60">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-white">{notification.title}</h3>
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          </div>
                          <p className="text-gray-300 text-sm mb-3 leading-relaxed">{notification.message}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{notification.timestamp}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{notification.source}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Badge className={getPriorityColor(notification.priority)}>
                          {notification.priority === "high"
                            ? "Hoch"
                            : notification.priority === "medium"
                              ? "Mittel"
                              : "Niedrig"}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleToggleStar(notification.id)}
                            className="p-2 hover:bg-slate-700/50"
                          >
                            {notification.starred ? (
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            ) : (
                              <StarOff className="w-4 h-4 text-gray-400" />
                            )}
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="p-2 hover:bg-slate-700/50"
                          >
                            <MarkAsUnread className="w-4 h-4 text-gray-400" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(notification.id)}
                            className="p-2 hover:bg-red-500/20 text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="starred" className="space-y-4">
            {filteredNotifications
              .filter((n) => n.starred)
              .map((notification) => (
                <Card
                  key={notification.id}
                  className={`glass-card card-hover border-yellow-500/20 ${!notification.read ? "bg-slate-800/60" : "bg-slate-800/30"}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className={`font-semibold ${!notification.read ? "text-white" : "text-gray-300"}`}>
                              {notification.title}
                            </h3>
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            {!notification.read && <div className="w-2 h-2 bg-purple-400 rounded-full"></div>}
                          </div>
                          <p className="text-gray-300 text-sm mb-3 leading-relaxed">{notification.message}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{notification.timestamp}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{notification.source}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Badge className={getPriorityColor(notification.priority)}>
                          {notification.priority === "high"
                            ? "Hoch"
                            : notification.priority === "medium"
                              ? "Mittel"
                              : "Niedrig"}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleToggleStar(notification.id)}
                            className="p-2 hover:bg-slate-700/50"
                          >
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          </Button>
                          {!notification.read && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="p-2 hover:bg-slate-700/50"
                            >
                              <MarkAsUnread className="w-4 h-4 text-gray-400" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(notification.id)}
                            className="p-2 hover:bg-red-500/20 text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="high-priority" className="space-y-4">
            {filteredNotifications
              .filter((n) => n.priority === "high")
              .map((notification) => (
                <Card
                  key={notification.id}
                  className={`glass-card card-hover border-red-500/20 ${!notification.read ? "bg-slate-800/60" : "bg-slate-800/30"}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className={`font-semibold ${!notification.read ? "text-white" : "text-gray-300"}`}>
                              {notification.title}
                            </h3>
                            <Badge className="bg-red-500/20 text-red-300 border-red-500/30">KRITISCH</Badge>
                            {!notification.read && <div className="w-2 h-2 bg-purple-400 rounded-full"></div>}
                          </div>
                          <p className="text-gray-300 text-sm mb-3 leading-relaxed">{notification.message}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{notification.timestamp}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{notification.source}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <div className="flex space-x-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleToggleStar(notification.id)}
                            className="p-2 hover:bg-slate-700/50"
                          >
                            {notification.starred ? (
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            ) : (
                              <StarOff className="w-4 h-4 text-gray-400" />
                            )}
                          </Button>
                          {!notification.read && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="p-2 hover:bg-slate-700/50"
                            >
                              <MarkAsUnread className="w-4 h-4 text-gray-400" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(notification.id)}
                            className="p-2 hover:bg-red-500/20 text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
