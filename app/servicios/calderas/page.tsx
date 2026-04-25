import { Flame } from "lucide-react"
import { ServiceDetail } from "@/components/service-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calderas y Calefacción | Fontawachi Instalaciones",
  description: "Instalación y mantenimiento de calderas en Mazarrón. Calderas de gas, condensación, biomasa y sistemas de calefacción completos.",
}

const serviceData = {
  title: "Calderas y Calefacción",
  subtitle: "Confort Térmico",
  description: "Instalación, mantenimiento y reparación de calderas para mantener tu hogar caliente y tu sistema de calefacción eficiente.",
  longDescription: "Aunque Mazarrón disfruta de un clima templado, las noches de invierno requieren un buen sistema de calefacción. En Fontawachi Instalaciones ofrecemos soluciones completas de calderas y calefacción, desde la instalación de calderas de gas y condensación hasta sistemas de suelo radiante y radiadores. Somos instaladores autorizados y realizamos las revisiones obligatorias según la normativa vigente. Nuestro objetivo es que disfrutes del máximo confort con el mínimo consumo energético.",
  features: [
    {
      title: "Calderas de Condensación",
      description: "La opción más eficiente del mercado, con ahorros de hasta un 30% respecto a calderas convencionales.",
    },
    {
      title: "Calderas de Gas",
      description: "Instalación y mantenimiento de calderas de gas natural y propano.",
    },
    {
      title: "Suelo Radiante",
      description: "Sistema de calefacción invisible que proporciona un calor uniforme y una sensación térmica muy agradable.",
    },
    {
      title: "Radiadores",
      description: "Instalación y sustitución de radiadores de aluminio, hierro fundido o prácticos toalleros.",
    },
    {
      title: "Revisión Obligatoria",
      description: "Cumplimos con la normativa del RITE para garantizar la seguridad y eficiencia de tu instalación.",
    },
    {
      title: "Reparación Urgente",
      description: "Servicio rápido y eficaz para que no te quedes sin calefacción ni agua caliente cuando más lo necesitas.",
    },
  ],
  benefits: [
    "Máximo ahorro energético con calderas de alta eficiencia",
    "Agua caliente sanitaria de forma instantánea",
    "Cumplimiento estricto de normativa y certificaciones legales",
    "Sistemas híbridos compatibles con energía solar térmica",
    "Confort térmico uniforme en todas las estancias de la vivienda",
    "Opciones de financiación flexible para tu nueva instalación",
  ],
  images: [
    { src: "/images/services/boiler-1.jpg", alt: "Caldera moderna instalada" },
    { src: "/images/services/boiler-2.jpg", alt: "Mantenimiento profesional de caldera" },
  ],
}

export default function CalderasPage() {
  return (
    <>
      <Header />
      <ServiceDetail {...serviceData} icon={<Flame className="w-8 h-8"/>}/>
      <Footer />
    </>
  )
}