import { Sun, Wind, Flame, Droplets, Zap, Wrench } from "lucide-react"

const services = [
  {
    icon: Sun,
    title: "Energia Solar",
    description: "Aprovecha la energia del sol con nuestras instalaciones profesionales de paneles solares. Reduce tu factura electrica y tu huella de carbono.",
  },
  {
    icon: Zap,
    title: "Sistemas Fotovoltaicos",
    description: "Diseno e instalacion completa de sistemas fotovoltaicos para maxima eficiencia energetica y ahorro a largo plazo.",
  },
  {
    icon: Wind,
    title: "Aire Acondicionado",
    description: "Mantente comodo todo el ano con nuestros servicios de instalacion, mantenimiento y reparacion de aire acondicionado de todas las marcas.",
  },
  {
    icon: Flame,
    title: "Calderas y Calefaccion",
    description: "Instalacion, mantenimiento y reparacion de calderas para mantener tu hogar caliente y tu sistema de calefaccion eficiente.",
  },
  {
    icon: Droplets,
    title: "Grupos de Presion",
    description: "Optimiza el flujo de agua con nuestras instalaciones de bombas de presion y soluciones de sistemas de agua para un suministro constante.",
  },
  {
    icon: Wrench,
    title: "Fontaneria",
    description: "Desde reparaciones hasta instalaciones completas, nuestros fontaneros certificados atienden todas tus necesidades residenciales y comerciales.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Nuestros Servicios</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Soluciones Integrales para tu Hogar y Negocio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos una gama completa de servicios profesionales para cubrir todas tus necesidades energeticas y de confort.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
