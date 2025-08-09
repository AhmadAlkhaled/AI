import "./globals.css"
import Footer from "../components/footer"
import ChatWidget from "../components/chat/chat-widget"
import ScrollToTop from "../components/scroll-to-top"

export const metadata = {
  title: "Aegis Cybersecurity",
  description: "Proaktive Cyberabwehr mit Aegis.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Floating utilities */}
        <ScrollToTop />
        <ChatWidget />
      </body>
    </html>
  )
}
