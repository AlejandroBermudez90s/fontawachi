"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefono",
    content: "968 123 456",
    href: "tel:+34968123456",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@fontawachi.es",
    href: "mailto:info@fontawachi.es",
  },
  {
    icon: MapPin,
    title: "Direccion",
    content: "Calle Mayor 123, 30860 Mazarron, Murcia",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "L-V: 8:00-20:00 | S: 9:00-14:00",
    href: null,
  },
];

const services = [
  "Energia Solar",
  "Sistemas Fotovoltaicos",
  "Aire Acondicionado",
  "Calderas y Calefaccion",
  "Sistemas de Presion",
  "Fontaneria",
  "Otro",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Contacta con Nosotros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Solicita tu presupuesto gratuito y sin compromiso. Te responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Mensaje Enviado</h3>
                  <p className="mt-2 text-muted-foreground">
                    Gracias por contactar con nosotros. Te responderemos lo antes posible.
                  </p>
                  <Button className="mt-6" onClick={() => setSubmitted(false)}>
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefono *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="600 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Servicio de interes</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe tu proyecto o consulta..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Solicitar Presupuesto"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario, aceptas nuestra politica de privacidad.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-1 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="mt-1 text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map placeholder */}
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="h-[200px] bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Mapa de ubicacion</p>
                    <p className="text-xs">Mazarron, Murcia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
