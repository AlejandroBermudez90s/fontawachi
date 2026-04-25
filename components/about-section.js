import Image from "next/image"

const stats = [
  { value: "20+", label: "Años de Experiencia" },
  { value: "2000+", label: "Proyectos Realizados" },
  { value: "98%", label: "Clientes Satisfechos" }
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/papa.jpg"
                alt="Técnico profesional trabajando"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Contenido */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Sobre Nosotros</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Expertos de Confianza en Soluciones Energéticas y del Hogar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Con más de 20 años de experiencia, Fontawachi Instalaciones ha sido el socio de confianza
              para miles de hogares y negocios en Mazarrón y toda la Región de Murcia que buscan
              soluciones fiables en energía y servicios del hogar. Nuestro equipo de profesionales
              certificados está comprometido con ofrecer calidad excepcional y satisfacción al cliente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nos especializamos en sistemas de energía solar, instalaciones de climatización,
              servicios de calderas, sistemas de presión de agua y soluciones integrales de fontanería.
              Nuestro compromiso con la excelencia y las prácticas sostenibles nos distingue en el sector.
            </p>

            {/* Cuadrícula de Estadísticas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}