export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-400">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-semibold">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Aegis
            </span>{" "}
            Cybersecurity
          </div>
          <nav className="flex flex-wrap gap-4">
            <a href="/about" className="hover:text-slate-200 transition">
              Über uns
            </a>
            <a href="/contact" className="hover:text-slate-200 transition">
              Kontakt
            </a>
            <a href="/reports" className="hover:text-slate-200 transition">
              Reports
            </a>
            <a href="/dashboard" className="hover:text-slate-200 transition">
              Dashboard
            </a>
          </nav>
        </div>
        <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Aegis. Alle Rechte vorbehalten.</div>
      </div>
    </footer>
  )
}
