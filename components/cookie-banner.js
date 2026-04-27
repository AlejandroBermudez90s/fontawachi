// components/cookie-banner.js
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted")
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem("cookies-accepted", "false")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4 sm:p-6 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Usamos cookies para mejorar tu experiencia. Consulta nuestra{" "}
          <Link href="/politica-cookies" className="text-primary hover:underline">
            Política de Cookies
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-lg border border-border hover:border-foreground"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}