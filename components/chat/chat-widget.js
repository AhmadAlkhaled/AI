"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

const FAQ_SUGGESTIONS = [
  "Was bietet Aegis genau an?",
  "Wie funktioniert die Dark-Web-Überwachung?",
  "Gibt es eine Demo?",
  "Welche Integrationen unterstützt Aegis?",
  "Wie sicher sind meine Daten?",
  "Wie kann ich starten?",
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hallo! Wie kann ich Ihnen bei Cybersicherheit helfen?" },
  ])
  const [input, setInput] = useState("")
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  async function send(text) {
    const userText = text.trim()
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
      setMessages((m) => [...m, { role: "assistant", content: data.reply ?? "OK." }])
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Entschuldigung, es gab ein Problem. Bitte versuchen Sie es erneut." },
      ])
    }
  }

  async function onSubmit(e) {
    e.preventDefault()
    await send(input)
  }

  function onFaqClick(q) {
    void send(q)
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-900/30 ring-1 ring-white/10 hover:opacity-90 transition"
          aria-label="Chat öffnen"
          type="button"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {open && (
        <div
          className="fixed bottom-5 right-5 z-50 w-[90vw] max-w-sm overflow-hidden rounded-xl border border-purple-500/30 bg-slate-950/80 text-white shadow-2xl backdrop-blur transition-all duration-200 ease-out"
          role="dialog"
          aria-modal="true"
          aria-label="Aegis Support Chat"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-gradient-to-r from-slate-900/60 to-slate-900/20">
            <div className="font-semibold">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Aegis
              </span>{" "}
              Chat
            </div>
            <button
              className="rounded-md p-1 hover:bg-slate-800/70"
              onClick={() => setOpen(false)}
              aria-label="Chat schließen"
              type="button"
            >
              <X className="h-5 w-5 text-slate-300" />
            </button>
          </div>

          {/* Häufige Fragen */}
          <div className="px-4 pt-3">
            <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">Häufige Fragen</div>
            <div className="flex flex-wrap gap-2">
              {FAQ_SUGGESTIONS.map((q, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => onFaqClick(q)}
                  className="rounded-full border border-purple-500/30 bg-slate-900/60 px-3 py-1 text-xs text-slate-200 hover:border-purple-400/50 hover:bg-slate-900/80 transition"
                  aria-label={`Häufige Frage: ${q}`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Nachrichten */}
          <div className="h-64 overflow-y-auto px-4 py-3 space-y-3" aria-live="polite" aria-atomic="false">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    "max-w-[85%] rounded-lg px-3 py-2 text-sm " +
                    (m.role === "user"
                      ? "bg-gradient-to-r from-purple-600/80 to-fuchsia-600/80 text-white"
                      : "bg-slate-800/70 border border-slate-700/60 text-slate-100")
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Eingabe */}
          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-slate-700/50 p-3">
            <input
              type="text"
              className="flex-1 rounded-md bg-slate-900/70 px-3 py-2 text-sm text-white placeholder-slate-400 outline-none ring-1 ring-inset ring-slate-700/60 focus:ring-purple-500/60"
              placeholder="Frage stellen..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Nachricht eingeben"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 rounded-md bg-purple-600 px-3 py-2 text-sm font-medium text-white hover:bg-purple-500 transition"
              aria-label="Nachricht senden"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Senden</span>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
