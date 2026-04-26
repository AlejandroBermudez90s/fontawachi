import { Shield, Clock, Award, Users, Leaf, Facebook, Instagram, CreditCard } from "lucide-react"
import Link from "next/link"

const reasons = [
  {
    icon: Shield,
    title: "Profesionales autorizados",
    description: "Técnicos cualificados, con licencia y asegurados para tu total tranquilidad.",
  },
  {
    icon: Clock,
    title: "Servicio puntual",
    description: "Respetamos tu tiempo con llegadas puntuales y finalización eficiente de proyectos.",
  },
  {
    icon: Award,
    title: "Calidad garantizada",
    description: "Garantías líderes en el sector y satisfacción garantizada en todos nuestros trabajos.",
  },
  {
    icon: Users,
    title: "Equipo experto",
    description: "Técnicos altamente formados y certificados con años de experiencia práctica.",
  },
  {
    icon: Leaf,
    title: "Ecológico",
    description: "Comprometidos con prácticas sostenibles y soluciones de eficiencia energética.",
  },
  {
    icon: CreditCard,
    title: "Financiación",
    description: "Ofrecemos financiación gratuita en todos nuestros proyectos.",
  },
  {
    icon: Instagram,
    title: "Síguenos",
    description: "Conoce nuestro día a día y mira nuestros últimos trabajos realizados.",
    isSocial: true,
  }
]

export function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">¿Por qué elegirnos?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-white">
            La diferencia Fontawachi
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            Vamos más allá para garantizar tu satisfacción completa en cada proyecto.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-white">{reason.title}</h3>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
                  {reason.description}
                </p>
                
                {/* Redes Sociales */}
                {reason.isSocial && (
                  <div className="flex gap-5 mt-auto">
                    <Link 
                      href="https://www.facebook.com/FontaWachi2.0/" 
                      target="_blank" 
                      className="text-white/60 hover:text-white transition-all hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6" />
                    </Link>
                    <Link 
                      href="https://www.instagram.com/fontawachi/" 
                      target="_blank" 
                      className="text-white/60 hover:text-white transition-all hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </Link>
                    <Link 
                      href="https://www.tiktok.com/@fontawachi_instalaciones" 
                      target="_blank" 
                      className="text-white/60 hover:text-white transition-all hover:scale-110"
                      aria-label="TikTok"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="w-6 h-6"
                      >
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}