import { Shield, Award, Clock, Leaf, CreditCard, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Licencia y Seguro",
    description: "Empresa con todas las licencias en regla y seguro de responsabilidad civil.",
  },
  {
    icon: Award,
    title: "Garantia de Calidad",
    description: "Garantia por escrito en todos nuestros trabajos e instalaciones.",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Respetamos los plazos acordados y cumplimos con los horarios establecidos.",
  },
  {
    icon: Leaf,
    title: "Eficiencia Energetica",
    description: "Soluciones que reducen el consumo energetico y respetan el medio ambiente.",
  },
  {
    icon: CreditCard,
    title: "Financiacion Flexible",
    description: "Ofrecemos opciones de financiacion adaptadas a tus necesidades.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atencion Personalizada",
    description: "Equipo dedicado para resolver todas tus dudas y consultas.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Por Que Elegir Fontawachi
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            La confianza de nuestros clientes es nuestro mayor aval. Descubre por que somos la mejor opcion para tus instalaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-secondary-foreground/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
