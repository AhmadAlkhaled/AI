"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Eye, EyeOff, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: "", content: "" })

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: "", content: "" })

    // Simulate API call
    setTimeout(() => {
      if (loginData.email && loginData.password) {
        setMessage({ type: "success", content: "Anmeldung erfolgreich! Weiterleitung..." })
        setTimeout(() => {
          window.location.href = "/dashboard"
        }, 1500)
      } else {
        setMessage({ type: "error", content: "Bitte füllen Sie alle Felder aus." })
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: "", content: "" })

    // Validate passwords match
    if (registerData.password !== registerData.confirmPassword) {
      setMessage({ type: "error", content: "Passwörter stimmen nicht überein." })
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      if (registerData.email && registerData.password && registerData.acceptTerms) {
        setMessage({ type: "success", content: "Registrierung erfolgreich! Bitte bestätigen Sie Ihre E-Mail." })
      } else {
        setMessage({ type: "error", content: "Bitte füllen Sie alle Felder aus und akzeptieren Sie die AGB." })
      }
      setIsLoading(false)
    }, 1000)
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
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Aegis
              </span>
            </Link>
            <div className="text-sm text-gray-400">
              Neu hier?{" "}
              <Link href="/contact" className="text-purple-400 hover:text-purple-300">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Willkommen bei{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Aegis</span>
            </h1>
            <p className="text-gray-300">Sichern Sie Ihre digitale Zukunft</p>
          </div>

          {/* Message Display */}
          {message.content && (
            <div
              className={`mb-6 p-4 rounded-lg border flex items-center space-x-2 ${
                message.type === "success"
                  ? "bg-green-500/20 border-green-500/30 text-green-300"
                  : "bg-red-500/20 border-red-500/30 text-red-300"
              }`}
            >
              {message.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span>{message.content}</span>
            </div>
          )}

          {/* Login/Register Tabs */}
          <Card className="glass-card border-purple-500/20">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border border-purple-500/20">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
                >
                  Anmelden
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600"
                >
                  Registrieren
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <CardHeader>
                  <CardTitle className="text-white">Bei Ihrem Konto anmelden</CardTitle>
                  <CardDescription className="text-gray-300">
                    Geben Sie Ihre Anmeldedaten ein, um auf Ihr Dashboard zuzugreifen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        E-Mail-Adresse
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ihre@email.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        className="input-modern"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">
                        Passwort
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Ihr Passwort"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          className="input-modern pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="remember"
                          checked={loginData.rememberMe}
                          onChange={(e) => setLoginData({ ...loginData, rememberMe: e.target.checked })}
                          className="rounded border-gray-600 bg-slate-800"
                        />
                        <Label htmlFor="remember" className="text-sm text-gray-300">
                          Angemeldet bleiben
                        </Label>
                      </div>
                      <Link href="/contact" className="text-sm text-purple-400 hover:text-purple-300">
                        Passwort vergessen?
                      </Link>
                    </div>
                    <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                      {isLoading ? "Wird angemeldet..." : "Anmelden"}
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>

              <TabsContent value="register">
                <CardHeader>
                  <CardTitle className="text-white">Neues Konto erstellen</CardTitle>
                  <CardDescription className="text-gray-300">
                    Registrieren Sie sich für Ihren kostenlosen Aegis-Account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">
                          Vorname
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Max"
                          value={registerData.firstName}
                          onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                          className="input-modern"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">
                          Nachname
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Mustermann"
                          value={registerData.lastName}
                          onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                          className="input-modern"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerEmail" className="text-white">
                        E-Mail-Adresse
                      </Label>
                      <Input
                        id="registerEmail"
                        type="email"
                        placeholder="max@unternehmen.com"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        className="input-modern"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Unternehmen
                      </Label>
                      <Input
                        id="company"
                        placeholder="Ihr Unternehmen"
                        value={registerData.company}
                        onChange={(e) => setRegisterData({ ...registerData, company: e.target.value })}
                        className="input-modern"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerPassword" className="text-white">
                        Passwort
                      </Label>
                      <div className="relative">
                        <Input
                          id="registerPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Sicheres Passwort"
                          value={registerData.password}
                          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                          className="input-modern pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white">
                        Passwort bestätigen
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Passwort wiederholen"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        className="input-modern"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={registerData.acceptTerms}
                        onChange={(e) => setRegisterData({ ...registerData, acceptTerms: e.target.checked })}
                        className="rounded border-gray-600 bg-slate-800"
                        required
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-300">
                        Ich akzeptiere die{" "}
                        <Link href="/contact" className="text-purple-400 hover:text-purple-300">
                          AGB
                        </Link>{" "}
                        und{" "}
                        <Link href="/contact" className="text-purple-400 hover:text-purple-300">
                          Datenschutzrichtlinien
                        </Link>
                      </Label>
                    </div>
                    <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                      {isLoading ? "Wird registriert..." : "Konto erstellen"}
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>
              Durch die Nutzung von Aegis stimmen Sie unseren{" "}
              <Link href="/contact" className="text-purple-400 hover:text-purple-300">
                Nutzungsbedingungen
              </Link>{" "}
              zu.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
