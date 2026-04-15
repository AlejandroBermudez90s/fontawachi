import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";

const highlights = [
  "Profesionales Certificados",
  "Atencion 24/7",
  "Presupuesto Gratuito",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/solar-hero.jpg"
          alt="Instalacion de paneles solares"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Expertos en Energia Solar y Climatizacion en Mazarron
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
            Fontawachi Instalaciones ofrece soluciones integrales en energia solar, aire acondicionado, 
            calderas, fontaneria y sistemas de presion de agua. Mas de 15 anos de experiencia en la Region de Murcia.
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap gap-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-primary-foreground" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="#contacto">Solicitar Presupuesto Gratis</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-white/10 border-white/30 text-white hover:bg-white/20">
              <a href="tel:+34968123456">
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
