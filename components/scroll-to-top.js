"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <button
      onClick={onClick}
      aria-label="Nach oben scrollen"
      className={`fixed right-4 z-40 rounded-full border border-white/15 bg-slate-900/80 p-3 text-white/90 shadow-xl backdrop-blur transition-all hover:bg-slate-900/95 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
        visible ? "bottom-28 opacity-100" : "-bottom-10 opacity-0"
      }`}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  )
}
