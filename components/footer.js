"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Energía Solar", href: "/servicios/energia-solar" },
    { label: "Sistemas Fotovoltaicos", href: "/servicios/fotovoltaica" },
    { label: "Aire Acondicionado", href: "/servicios/aire-acondicionado" },
    { label: "Aerotermia", href: "/servicios/aerotermia" },
    { label: "Calderas y Calefacción", href: "/servicios/calderas" },
    { label: "Tratamiento de Agua", href: "/servicios/tratamiento-agua" },
    { label: "Fontanería", href: "/servicios/fontaneria" },
    { label: "Grupos de presión", href: "/servicios/grupos-presion" }
  ],
  company: [
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
    { label: "Zona de Cobertura", href: "#" },
  ],
  support: [
    { label: "Contacto", href: "#contacto" },
    { label: "Presupuesto Gratis", href: "#contacto" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-20 h-20">
                <Image 
                  src="/logo-fontawachi.png"
                  alt="Logo Fontawachi"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-lg">Fontawachi</span>
            </Link>
            <p className="text-secondary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Tu socio de confianza para energía solar, climatización, fontanería y soluciones de 
              confort del hogar. Sirviendo a clientes residenciales y comerciales en Mazarrón y 
              toda la Región de Murcia con excelencia durante más de 20 años.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Ayuda</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} Fontawachi Instalaciones. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-secondary-foreground/60 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-secondary-foreground/60 hover:text-white transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}