"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, LucideIcon } from "lucide-react"

interface ContactInfo {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    label: "Telefono",
    value: "600 000 000",
    href: "tel:+34600000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@fontawachi.es",
    href: "mailto:info@fontawachi.es",
  },
  {
    icon: MapPin,
    label: "Direccion",
    value: "Mazarron, Murcia",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun-Vie: 8:00-18:00 | Urgencias: 24/7",
    href: "#",
  },
]

const serviceOptions: string[] = [
  "Energia Solar",
  "Sistemas Fotovoltaicos",
  "Aire Acondicionado",
  "Calderas y Calefaccion",
  "Grupos de Presion",
  "Fontaneria",
  "Otro",
]

export function ContactSection(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contacto</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Solicita tu Presupuesto Gratis
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Listo para empezar tu proyecto? Contactanos para un presupuesto gratuito y sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Gracias!</h3>
                <p className="text-muted-foreground">
                  Hemos recibido tu mensaje y te contactaremos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Juan Garcia"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Correo Electronico *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@ejemplo.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="600 000 000"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Servicio Requerido *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="">Selecciona un servicio</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuentanos sobre tu proyecto..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contacta con Nosotros</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Tienes preguntas sobre nuestros servicios? Necesitas una reparacion de urgencia? 
                Nuestro equipo esta aqui para ayudarte. Contactanos a traves de cualquiera de los 
                canales siguientes o rellena el formulario de contacto.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
