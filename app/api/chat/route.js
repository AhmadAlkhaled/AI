import { NextResponse } from "next/server"

const FAQ_ANSWERS = [
  {
    match: /bietet|angebot|features|funktion/i,
    reply:
      "Aegis bietet Erkennung von Bedrohungen, Dark‑Web‑Monitoring, Schwachstellen‑Scans, Compliance‑Reports und Echtzeit‑Dashboards – alles aus einer Plattform.",
  },
  {
    match: /dark(-| )?web/i,
    reply:
      "Unsere Dark‑Web‑Überwachung durchsucht Leaks, Foren und Marktplätze nach Firmenbezug (Domains, E‑Mails, Assets) und alarmiert bei Treffern.",
  },
  {
    match: /demo|testen|probe/i,
    reply:
      "Gerne! Wir richten eine interaktive Demo für Sie ein. Schreiben Sie uns Ihre gewünschte Domain und einen Kontakt.",
  },
  {
    match: /integration|integrationen|siem|soar|api/i,
    reply:
      "Aegis integriert sich u.a. in SIEM/SOAR, Slack/Teams, E‑Mail‑Gateways und Cloud‑Provider. Auf Wunsch gibt es eine REST API und Webhooks.",
  },
  {
    match: /sicher|sicherheit|daten|privacy|gdpr|dsgvo/i,
    reply:
      "Ihre Daten werden verschlüsselt übertragen und gespeichert. Rollen‑ und Rechtemanagement, Audit‑Logs und DSGVO‑Konformität sind Standard.",
  },
  {
    match: /start|loslegen|preise|pricing/i,
    reply:
      "So starten Sie: 1) Kostenloses Assessment, 2) PoC, 3) Rollout. Preise richten sich nach Umfang/Assets – wir erstellen ein Angebot.",
  },
]

export async function POST(req) {
  try {
    const { message } = await req.json()
    const text = String(message ?? "").trim()

    if (!text) {
      return NextResponse.json({ reply: "Wie kann ich helfen? Stellen Sie gern eine Frage." })
    }

    for (const item of FAQ_ANSWERS) {
      if (item.match.test(text)) {
        return NextResponse.json({ reply: item.reply })
      }
    }

    // Fallback
    return NextResponse.json({
      reply:
        "Danke! Ich leite Ihre Frage weiter. In der Zwischenzeit: Aegis deckt Threat Detection, Dark‑Web‑Monitoring, Schwachstellen‑Scans und Compliance‑Reports ab.",
    })
  } catch (e) {
    return NextResponse.json(
      { reply: "Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 200 },
    )
  }
}
