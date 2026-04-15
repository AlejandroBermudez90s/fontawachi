import Image from "next/image"

const stats = [
  { value: "15+", label: "Anos de Experiencia" },
  { value: "2000+", label: "Proyectos Realizados" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "24/7", label: "Servicio de Urgencias" },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/technician-work.jpg"
                alt="Tecnico profesional trabajando"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-90">Anos de Excelencia</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Sobre Nosotros</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Expertos de Confianza en Soluciones Energeticas y del Hogar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Con mas de 15 anos de experiencia, Fontawachi Instalaciones ha sido el socio de confianza 
              para miles de hogares y negocios en Mazarron y toda la Region de Murcia que buscan 
              soluciones fiables en energia y servicios del hogar. Nuestro equipo de profesionales 
              certificados esta comprometido con ofrecer calidad excepcional y satisfaccion al cliente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nos especializamos en sistemas de energia solar, instalaciones de climatizacion, 
              servicios de calderas, sistemas de presion de agua y soluciones integrales de fontaneria. 
              Nuestro compromiso con la excelencia y las practicas sostenibles nos distingue en el sector.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
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
