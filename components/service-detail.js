"use client"

import Link from "next/link"
import { ArrowLeft, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageSlider } from "@/components/ui/image-slider"

export function ServiceDetail({
  title,
  subtitle,
  description,
  longDescription,
  icon,
  features,
  benefits,
  images,
}) {
  return (
    <div className="min-h-screen bg-background">
      <style jsx global>{`
        .force-contain img {
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          object-fit: contain !important;
          position: relative !important;
        }
        .image-container-frame {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background-color: rgb(243 244 246 / 0.5); /* bg-muted/50 */
        }
      `}</style>

      {/* Cabecera */}
      <div className="bg-primary text-primary-foreground py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/#servicios" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a servicios
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <div>
              <p className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider mb-2">
                {subtitle}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                {title}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA - SLIDER */}
          <div className="w-full lg:sticky lg:top-28">
            <div className="image-container-frame overflow-hidden rounded-3xl border border-border aspect-[4/3] relative">
              <div className="force-contain w-full h-full">
                <ImageSlider images={images} />
              </div>
            </div>
          </div>

          {/* Columna Derecha - Información */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Sobre este servicio
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {longDescription}
              </p>
            </section>

            {/* Beneficios */}
            <section className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-5">
                Beneficios principales
              </h3>
              <ul className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="h-14 px-8 text-md shadow-lg shadow-primary/20">
                <Link href="/#contacto">Solicitar Presupuesto Gratis</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-md">
                <a href="tel:+34652304801">
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar Ahora
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Características al final */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-12 text-center">
            Qué incluye nuestro servicio profesional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-muted/30 p-8 rounded-2xl border border-border hover:border-primary/50 transition-all group"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed italic">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}