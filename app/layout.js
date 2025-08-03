import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aegis - KI-gestützte Cybersicherheit",
  description:
    "Fortschrittliche Cybersicherheitslösungen mit KI-gestützter Bedrohungserkennung, Echtzeit-Monitoring und automatischer Incident Response.",
  keywords: "Cybersicherheit, KI, Bedrohungserkennung, Sicherheit, Monitoring, Incident Response",
  authors: [{ name: "Aegis Security Team" }],
  creator: "Aegis Security",
  publisher: "Aegis Security",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://aegis-security.com",
    title: "Aegis - KI-gestützte Cybersicherheit",
    description: "Schützen Sie Ihr Unternehmen mit fortschrittlicher KI-Technologie vor Cyberbedrohungen.",
    siteName: "Aegis Security",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis - KI-gestützte Cybersicherheit",
    description: "Schützen Sie Ihr Unternehmen mit fortschrittlicher KI-Technologie vor Cyberbedrohungen.",
    creator: "@AegisSecurity",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#9333ea" },
    { media: "(prefers-color-scheme: dark)", color: "#9333ea" },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#9333ea" />
        <meta name="theme-color" content="#9333ea" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-slate-950 text-white">{children}</div>
      </body>
    </html>
  )
}
