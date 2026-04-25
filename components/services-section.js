import Link from "next/link"
import Image from "next/image"
import {
  Sun,
  Wind,
  Flame,
  Droplets,
  Zap,
  Wrench,
  ThermometerSun,
  Waves,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Sun,
    title: "Energía solar",
    logo: "/logos/freesol.jpg",
    description: "Aprovecha la energía del sol con nuestras instalaciones profesionales de paneles solares. Reduce tu factura eléctrica y tu huella de carbono.",
    href: "/servicios/energia-solar",
  },
  {
    icon: Zap,
    title: "Sistemas fotovoltaicos",
    logo: "/logos/mazarron-solar.png",
    description: "Diseño e instalación completa de sistemas fotovoltaicos para máxima eficiencia energética y ahorro a largo plazo.",
    href: "/servicios/fotovoltaica",
  },
  {
    icon: Wind,
    title: "Aire acondicionado",
    description: "Mantente cómodo todo el año con nuestros servicios de instalación, mantenimiento y reparación de aire acondicionado de todas las marcas.",
    href: "/servicios/aire-acondicionado",
  },
  {
    icon: ThermometerSun,
    title: "Aerotermia",
    description: "La tecnología del futuro hoy. Climatiza tu hogar y obtén agua caliente con la máxima eficiencia utilizando una bomba de calor aerotérmica.",
    href: "/servicios/aerotermia",
  },
  {
    icon: Flame,
    title: "Calderas y calefacción",
    description: "Instalación, mantenimiento y reparación de calderas para mantener tu hogar caliente y tu sistema de calefacción eficiente.",
    href: "/servicios/calderas",
  },
  {
    icon: Wrench,
    title: "Localización de fugas de agua y fontanería",
    description: "Localización y reparación de fugas de agua, instalaciones completas y mantenimiento. Nuestros fontaneros certificados atienden todas tus necesidades residenciales y comerciales.",
    href: "/servicios/fontaneria",
  },
  {
    icon: Waves,
    title: "Sistemas de tratamiento de agua",
    description: "Mejora la calidad del agua en tu hogar. Instalamos descalcificadores y sistemas de ósmosis inversa para un agua más pura y saludable.",
    href: "/servicios/tratamiento-agua",
  },
  {
    icon: Droplets,
    title: "Grupos de presión",
    description: "Optimiza el flujo de agua con nuestras instalaciones de bombas de presión y soluciones de sistemas de agua para un suministro constante.",
    href: "/servicios/grupos-presion",
  }
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Nuestros servicios</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Especialistas en instalaciones y mantenimiento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cubrimos todas las necesidades técnicas de tu inmueble con tecnología de vanguardia y atención personalizada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col h-full"
            >
              {/* Contenedor Superior: Icono y Logo más grande */}
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {service.logo && (
                  /* Aumentamos de w-20 a w-28 y de h-10 a h-14 */
                  <div className="relative w-28 h-14 ml-2">
                    <Image
                      src={service.logo}
                      alt={`Logo de ${service.title}`}
                      fill
                      className="object-contain"
                      priority={service.title === "Energía Solar"}
                    />
                  </div>
                )}
              </div>

              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Footer de la card */}
              <div className="flex items-center text-primary text-sm font-medium mt-auto pt-4 border-t border-border/50">
                <span>Ver detalles</span>
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}