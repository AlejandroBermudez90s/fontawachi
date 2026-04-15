import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const highlights: string[] = [
  "Profesionales Cualificados",
  "Servicio de Urgencias 24/7",
  "Presupuesto Sin Compromiso",
]

export function HeroSection() {
  return (
    <section className="relative pt-20 lg:pt-24">
      {/* Hero Image */}
      <div className="relative h-[60vh] lg:h-[80vh] min-h-[500px]">
        <Image
          src="/images/solar-hero.jpg"
          alt="Paneles solares en tejado residencial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Tu Solucion Integral en Energia y Hogar
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl">
                Instalaciones solares, climatizacion, fontaneria y sistemas de presion de agua 
                para viviendas y negocios en Mazarron y toda la Region de Murcia.
              </p>
              
              {/* Highlights */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/90">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#contacto">
                    Pedir Presupuesto Gratis
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
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
