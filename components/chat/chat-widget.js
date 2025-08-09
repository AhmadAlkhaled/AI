"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Send, X, Sparkles } from "lucide-react"

const faqs = [
  "Was ist Aegis?",
  "Wie funktioniert die KI-Erkennung?",
  "Bietet ihr 24/7 Monitoring?",
  "Welche Integrationen gibt es?",
  "Wie starte ich einen Proof of Concept?",
  "Wie funktioniert die Incident Response?",
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [animState, setAnimState] = useState("idle") // idle | entering | exiting
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hallo! Wie kann ich helfen?" }])

  const panelRef = useRef(null)
  const inputRef = useRef(null)

  // Smooth mount/unmount animation
  useEffect(() => {
    if (open) {
      setAnimState("entering")
      const t = setTimeout(() => setAnimState("idle"), 180)
      return () => clearTimeout(t)
    } else if (animState === "idle") {
      setAnimState("exiting")
      const t = setTimeout(() => setAnimState("idle"), 160)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const sendMessage = async (text) => {
    const userText = (text ?? input).trim()
    if (!userText) return
    setMessages((m) => [...m, { role: "user", content: userText }])
    setInput("")
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      })
      const data = await res.json()
      setMessages((m) => [...m, { role: "assistant", content: data.reply || "Alles klar!" }])
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Entschuldigung, es gab ein Problem. Bitte erneut versuchen." },
      ])
    }
  }

  return (
    <>
      {/* Trigger button */}
      <button
        aria-label="Chat öffnen"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/30 bg-slate-900/80 text-white shadow-2xl backdrop-blur transition hover:bg-slate-900/95"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-label="Aegis Chat"
        className={`fixed right-4 z-40 w-[92vw] max-w-sm rounded-2xl border border-white/15 bg-slate-950/80 text-white shadow-2xl backdrop-blur ${
          open || animState === "exiting" ? "pointer-events-auto" : "pointer-events-none"
        } ${open ? "bottom-24" : animState === "exiting" ? "bottom-24" : "bottom-24"}`}
        style={{}}
      >
        <div
          className={`glass-card ${
            open
              ? animState === "entering"
                ? "chat-enter-active"
                : ""
              : animState === "exiting"
                ? "chat-exit-active"
                : "hidden"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl border-b border-white/10 bg-gradient-to-r from-purple-600/20 to-purple-400/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-300" />
              <p className="text-sm font-semibold">Aegis Support</p>
            </div>
            <button
              aria-label="Chat schließen"
              onClick={() => setOpen(false)}
              className="rounded-md border border-white/10 p-1 text-white/70 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* FAQs quick replies */}
          <div className="flex flex-wrap gap-2 px-4 pb-3 pt-3">
            {faqs.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="rounded-full border border-purple-500/30 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="max-h-72 overflow-y-auto px-4 py-2">
            <ul className="space-y-2 text-sm">
              {messages.map((m, i) => (
                <li key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      m.role === "user"
                        ? "bg-purple-600/30 border border-purple-500/30"
                        : "bg-white/5 border border-white/10"
                    }`}
                  >
                    {m.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Input */}
          <form
            className="flex items-center gap-2 border-t border-white/10 px-3 py-3"
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage()
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nachricht eingeben..."
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-purple-500/50"
            />
            <button type="submit" aria-label="Senden" className="btn-primary h-10 w-10 rounded-lg p-0">
              <Send className="mx-auto h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
