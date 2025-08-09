"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function scrollTop() {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch {
      window.scrollTo(0, 0)
    }
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Nach oben scrollen"
      className={`fixed right-5 z-[60] h-10 w-10 rounded-full border border-purple-500/30 bg-slate-900/80 text-white shadow-lg backdrop-blur transition
        ${visible ? "bottom-24 opacity-100" : "-bottom-20 opacity-0 pointer-events-none"}`}
    >
      <ArrowUp className="mx-auto h-5 w-5" />
    </button>
  )
}
