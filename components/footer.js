export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-white/80">Aegis</h3>
            <p className="mt-3 text-sm text-white/60">
              KI-gestützte Cybersicherheit, die Angriffe proaktiv erkennt und automatisch reagiert.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/80">Produkte</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>
                <a href="/dashboard" className="hover:text-white/90">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/reports" className="hover:text-white/90">
                  Reports
                </a>
              </li>
              <li>
                <a href="/notifications" className="hover:text-white/90">
                  Benachrichtigungen
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white/90">
                  Über uns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/80">Ressourcen</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>
                <a href="/contact" className="hover:text-white/90">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/90">
                  Dokumentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/90">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/80">Rechtliches</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white/90">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/90">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/90">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Aegis Security. Alle Rechte vorbehalten.</p>
          <p>Köln, Deutschland</p>
        </div>
      </div>
    </footer>
  )
}
