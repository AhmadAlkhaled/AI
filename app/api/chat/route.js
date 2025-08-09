export async function POST(request) {
  try {
    const { message } = await request.json()
    const text = String(message || "").toLowerCase()

    let reply =
      "Danke für Ihre Nachricht! Ich bin Ihr Aegis-Assistent. Fragen Sie mich zu Erkennung, Monitoring, Integrationen oder Onboarding."

    if (text.includes("aegis")) {
      reply = "Aegis ist eine KI-gestützte Sicherheitsplattform mit Echtzeit-Erkennung, Response und Reports."
    } else if (text.includes("monitor") || text.includes("24/7")) {
      reply = "Ja, wir unterstützen 24/7 Monitoring inkl. Benachrichtigungen und Eskalationen."
    } else if (text.includes("integration") || text.includes("siem")) {
      reply = "Wir integrieren u. a. SIEM/SOAR, Cloud Provider, EDR/XDR und Ticketing-Systeme."
    } else if (text.includes("poc") || text.includes("test")) {
      reply = "Für einen PoC: Wir setzen Ziele fest, definieren Datenquellen, aktivieren Szenarien und messen KPIs."
    }

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch {
    return new Response(JSON.stringify({ reply: "Unerwarteter Fehler. Bitte später erneut versuchen." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  }
}
