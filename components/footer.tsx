import Link from "next/link"
import { Droplets, Facebook, Instagram, LucideIcon } from "lucide-react"

interface FooterLink {
  label: string
  href: string
}

interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

interface FooterLinks {
  services: FooterLink[]
  company: FooterLink[]
  support: FooterLink[]
}

const footerLinks: FooterLinks = {
  services: [
    { label: "Energia Solar", href: "#servicios" },
    { label: "Sistemas Fotovoltaicos", href: "#servicios" },
    { label: "Aire Acondicionado", href: "#servicios" },
    { label: "Calderas y Calefaccion", href: "#servicios" },
    { label: "Grupos de Presion", href: "#servicios" },
    { label: "Fontaneria", href: "#servicios" },
  ],
  company: [
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Por Que Elegirnos", href: "#por-que-elegirnos" },
    { label: "Zona de Cobertura", href: "#" },
  ],
  support: [
    { label: "Contacto", href: "#contacto" },
    { label: "Urgencias 24/7", href: "tel:+34600000000" },
    { label: "Presupuesto Gratis", href: "#contacto" },
  ],
}

const socialLinks: SocialLink[] = [
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
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-lg">Fontawachi</span>
            </Link>
            <p className="text-secondary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Tu socio de confianza para energia solar, climatizacion, fontaneria y soluciones de 
              confort del hogar. Sirviendo a clientes residenciales y comerciales en Mazarron y 
              toda la Region de Murcia con excelencia durante mas de 15 anos.
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

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
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

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
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

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Ayuda</h4>
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
              Politica de Privacidad
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
