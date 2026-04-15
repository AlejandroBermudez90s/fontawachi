import { Sun, Wind, Flame, Droplets, Gauge, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Sun,
    title: "Energia Solar",
    description: "Instalacion de paneles solares termicos para agua caliente sanitaria y calefaccion. Ahorra hasta un 70% en tu factura energetica.",
  },
  {
    icon: Gauge,
    title: "Sistemas Fotovoltaicos",
    description: "Instalaciones fotovoltaicas para autoconsumo con o sin baterias. Genera tu propia electricidad de forma limpia y sostenible.",
  },
  {
    icon: Wind,
    title: "Aire Acondicionado",
    description: "Instalacion, mantenimiento y reparacion de sistemas de climatizacion. Equipos de alta eficiencia energetica para tu hogar o negocio.",
  },
  {
    icon: Flame,
    title: "Calderas y Calefaccion",
    description: "Instalacion y mantenimiento de calderas de gas, gasoil y biomasa. Sistemas de calefaccion eficientes para todo tipo de viviendas.",
  },
  {
    icon: Droplets,
    title: "Sistemas de Presion de Agua",
    description: "Grupos de presion, bombas y depositos. Solucionamos problemas de presion de agua en viviendas, comunidades y negocios.",
  },
  {
    icon: Wrench,
    title: "Fontaneria",
    description: "Servicios completos de fontaneria: instalaciones, reparaciones, desatascos y deteccion de fugas. Urgencias 24 horas.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos soluciones integrales para el confort y la eficiencia energetica de tu hogar o negocio en Mazarron y toda la Region de Murcia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-border hover:border-primary/50 transition-colors hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
