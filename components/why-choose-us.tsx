import { Shield, Clock, Award, Users, Leaf, Headphones, LucideIcon } from "lucide-react"

interface Reason {
  icon: LucideIcon
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    icon: Shield,
    title: "Profesionales Autorizados",
    description: "Tecnicos cualificados, con licencia y asegurados para tu total tranquilidad.",
  },
  {
    icon: Clock,
    title: "Servicio Puntual",
    description: "Respetamos tu tiempo con llegadas puntuales y finalizacion eficiente de proyectos.",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Garantias lideres en el sector y satisfaccion garantizada en todos nuestros trabajos.",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Tecnicos altamente formados y certificados con anos de experiencia practica.",
  },
  {
    icon: Leaf,
    title: "Ecologico",
    description: "Comprometidos con practicas sostenibles y soluciones de eficiencia energetica.",
  },
  {
    icon: Headphones,
    title: "Atencion 24/7",
    description: "Soporte de emergencia las 24 horas cuando mas nos necesitas.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">Por Que Elegirnos</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            La Diferencia Fontawachi
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            Vamos mas alla para garantizar tu satisfaccion completa en cada proyecto.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
