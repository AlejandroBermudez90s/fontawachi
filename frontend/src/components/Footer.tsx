import Link from "next/link";
import { Droplets } from "lucide-react";

const serviceLinks = [
  { label: "Energia Solar", href: "#servicios" },
  { label: "Fotovoltaica", href: "#servicios" },
  { label: "Aire Acondicionado", href: "#servicios" },
  { label: "Calderas", href: "#servicios" },
  { label: "Presion de Agua", href: "#servicios" },
  { label: "Fontaneria", href: "#servicios" },
];

const companyLinks = [
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Por Que Elegirnos", href: "#por-que-elegirnos" },
  { label: "Contacto", href: "#contacto" },
];

const legalLinks = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Politica de Privacidad", href: "/privacidad" },
  { label: "Politica de Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Droplets className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Fontawachi</span>
                <span className="text-xs text-secondary-foreground/70 -mt-1">Instalaciones</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
              Expertos en energia solar, climatizacion y fontaneria en Mazarron y toda la Region de Murcia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-secondary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/70">
            &copy; {new Date().getFullYear()} Fontawachi Instalaciones. Todos los derechos reservados.
          </p>
          <p className="text-sm text-secondary-foreground/70">
            Mazarron, Murcia - Espana
          </p>
        </div>
      </div>
    </footer>
  );
}
