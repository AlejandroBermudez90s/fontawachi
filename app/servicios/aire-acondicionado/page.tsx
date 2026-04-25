import { Wind } from "lucide-react"
import { ServiceDetail } from "@/components/service-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aire Acondicionado | Fontawachi Instalaciones",
  description: "Instalación, mantenimiento y reparación de aire acondicionado en Mazarrón. Todas las marcas y sistemas split, multisplit y conductos.",
}

const serviceData = {
  title: "Aire acondicionado",
  subtitle: "Climatización profesional",
  description: "Mantente cómodo todo el año con nuestros servicios de instalación, mantenimiento y reparación de aire acondicionado de todas las marcas.",
  longDescription: "El clima mediterráneo de Mazarrón hace imprescindible contar con un buen sistema de climatización. En Fontawachi Instalaciones somos expertos en aire acondicionado, ofreciendo soluciones para viviendas, locales comerciales y oficinas. Trabajamos con las principales marcas del mercado (Daikin, Mitsubishi, Fujitsu, Kosner, Midea) y nuestros técnicos están certificados para garantizar instalaciones eficientes y duraderas. También ofrecemos contratos de mantenimiento para asegurar el óptimo funcionamiento de tu equipo.",
  features: [
    {
      title: "Instaladores autorizados por el RITE",
      description: "Profesionales certificados para instalar y mantener tus sistemas de climatización con la máxima garantía legal y eficiencia técnica.",
    },
    {
      title: "Instalación split y multisplit",
      description: "Sistemas individuales o para climatizar varias estancias con una sola unidad exterior.",
    },
    {
      title: "Aire por conductos",
      description: "Solución integrada para climatizar toda la vivienda de forma uniforme y estética.",
    },
    {
      title: "Sistemas Inverter",
      description: "Tecnología de ahorro energético que adapta la potencia a las necesidades reales.",
    },
    
    {
      title: "Mantenimiento preventivo",
      description: "Limpieza de filtros, revisión y recarga de niveles de gas y comprobación general para máxima eficiencia.",
    },
    {
      title: "Bomba de calor",
      description: "Equipos que ofrecen frío en verano y calor en invierno con la máxima eficiencia energética.",
    },
  ],
  benefits: [
    "Confort térmico garantizado durante todo el año",
    "Ahorro energético con tecnología Inverter (hasta un 40%)",
    "Mejora significativa de la calidad del aire interior",
    "Equipos silenciosos de última generación para un mejor descanso",
    "Financiación flexible adaptada a tus necesidades",
    "Servicio técnico profesional de las principales marcas del sector",
  ],
  images: [
    { src: "/images/services/aire-acondicionado/aire2.jpg", alt: "Instalación de aire acondicionado" },
    { src: "/images/services/aire-acondicionado/aire1.jpg", alt: "Instalación de aire acondicionado" },
    { src: "/images/services/aire-acondicionado/aire3.jpeg", alt: "Instalación de aire acondicionado" },
    { src: "/images/services/aire-acondicionado/aire4.jpeg", alt: "Instalación de aire acondicionado" },
    { src: "/images/services/aire-acondicionado/aire5.jpeg", alt: "Instalación de aire acondicionado" },
    { src: "/images/services/aire-acondicionado/aire6.jpeg", alt: "Instalación de aire acondicionado" },
    { src: "/images/services/aire-acondicionado/aire7.jpeg", alt: "Instalación de aire acondicionado" },
  ],
}

export default function AireAcondicionadoPage() {
  return (
    <>
      <Header />
      <ServiceDetail {...serviceData} icon={<Wind className="w-8 h-8"/> }/>
      <Footer />
    </>
  )
}