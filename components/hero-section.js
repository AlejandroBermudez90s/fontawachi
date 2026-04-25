import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const highlights = [
  "Profesionales cualificados",
  "Empresa Instaladora Autorizada",
  "Garantía de Instalación Oficial"
]

export function HeroSection() {
  return (
    <section className="relative pt-20 lg:pt-24">
      {/* Imagen Hero */}
      <div className="relative h-[70vh] lg:h-[80vh] min-h-[600px]">
        <Image
          src="/hero-image.webp"
          alt="Paneles solares en tejado residencial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />

        {/* Contenido Hero */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Tu hogar, más eficiente y sostenible
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
                Expertos en energía solar, climatización y fontanería. Llevamos soluciones de confort a viviendas y empresas en Mazarrón y toda la Región de Murcia.
              </p>

              {/* Puntos destacados */}
              <div className="mt-6 sm:mt-8 flex flex-col gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/90">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Botones de acción */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="#contacto">
                    Contratar <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                  <Link href="#servicios">Nuestros Servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}