import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "../components/footer"
import ChatWidget from "../components/chat/chat-widget"
import ScrollToTop from "../components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aegis - KI-gestützte Cybersicherheit",
  description:
    "Fortschrittliche Cybersicherheitslösungen mit KI-gestützter Bedrohungserkennung, Echtzeit-Monitoring und automatischer Incident Response.",
  robots: { index: true, follow: true },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#9333ea" },
    { media: "(prefers-color-scheme: dark)", color: "#9333ea" },
  ],
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
          <main className="flex-1">{children}</main>
          {/* Single global footer (avoid duplicates) */}
          <Footer />
        </div>

        {/* Floating utilities on all pages */}
        <ScrollToTop />
        <ChatWidget />
      </body>
    </html>
  )
}
