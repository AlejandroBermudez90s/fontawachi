import Image from "next/image";

const stats = [
  { value: "15+", label: "Anos de Experiencia" },
  { value: "2000+", label: "Proyectos Realizados" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "24/7", label: "Servicio de Urgencias" },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/technician-work.jpg"
              alt="Tecnico de Fontawachi trabajando"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sobre Fontawachi Instalaciones
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Desde hace mas de 15 anos, Fontawachi Instalaciones es la empresa de referencia en Mazarron 
              y la Region de Murcia para todo tipo de instalaciones relacionadas con la energia solar, 
              climatizacion y fontaneria.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Nuestro equipo de profesionales certificados trabaja con las mejores marcas del mercado 
              y ofrece garantia en todos nuestros trabajos. Nos comprometemos con la calidad, la 
              eficiencia energetica y la satisfaccion total de nuestros clientes.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
