"use client"

import Link from "next/link"
import { ArrowLeft, Phone, CheckCircle } from "lucide-react"
import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ImageSlider } from "@/components/ui/image-slider"

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceDetailProps {
  title: string
  subtitle: string
  description: string
  longDescription: string
  icon: ReactNode
  features: ServiceFeature[]
  benefits: string[]
  images: {
    src: string
    alt: string
  }[]
}

export function ServiceDetail({
  title,
  subtitle,
  description,
  longDescription,
  icon,
  features,
  benefits,
  images,
}: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <ImageSlider images={images} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Sobre este servicio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {longDescription}
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Beneficios principales
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/#contacto">
                  Solicitar Presupuesto
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="tel:+34968123456">
                  <Phone className="w-4 h-4" />
                  Llamar Ahora
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Que incluye nuestro servicio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-muted rounded-xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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