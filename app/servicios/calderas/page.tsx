import { Flame } from "lucide-react"
import { ServiceDetail } from "@/components/ServiceDetail"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calderas y Calefaccion | Fontawachi Instalaciones",
  description: "Instalacion y mantenimiento de calderas en Mazarron. Calderas de gas, condensacion, biomasa y sistemas de calefaccion completos.",
}

const serviceData = {
  title: "Calderas y Calefaccion",
  subtitle: "Confort Termico",
  description: "Instalacion, mantenimiento y reparacion de calderas para mantener tu hogar caliente y tu sistema de calefaccion eficiente.",
  longDescription: "Aunque Mazarron disfruta de un clima templado, las noches de invierno requieren un buen sistema de calefaccion. En Fontawachi Instalaciones ofrecemos soluciones completas de calderas y calefaccion, desde la instalacion de calderas de gas y condensacion hasta sistemas de suelo radiante y radiadores. Somos instaladores autorizados y realizamos las revisiones obligatorias segun normativa. Nuestro objetivo es que disfrutes del maximo confort con el minimo consumo energetico.",
  features: [
    {
      title: "Calderas de Condensacion",
      description: "La opcion mas eficiente del mercado, con ahorros de hasta un 30% respecto a calderas convencionales.",
    },
    {
      title: "Calderas de Gas",
      description: "Instalacion y mantenimiento de calderas de gas natural y propano.",
    },
    {
      title: "Suelo Radiante",
      description: "Sistema de calefaccion invisible que proporciona un calor uniforme y agradable.",
    },
    {
      title: "Radiadores",
      description: "Instalacion y sustitucion de radiadores de aluminio, hierro fundido o toalleros.",
    },
    {
      title: "Revision Obligatoria",
      description: "Cumplimos con la normativa vigente para garantizar la seguridad de tu instalacion.",
    },
    {
      title: "Reparacion Urgente",
      description: "Servicio rapido para que no te quedes sin calefaccion ni agua caliente.",
    },
  ],
  benefits: [
    "Ahorro energetico con calderas de alta eficiencia",
    "Agua caliente sanitaria instantanea",
    "Cumplimiento de normativa y certificaciones",
    "Sistemas compatibles con energia solar termica",
    "Confort termico uniforme en toda la vivienda",
    "Financiacion disponible para la instalacion",
  ],
  images: [
    { src: "/images/services/boiler-1.jpg", alt: "Caldera moderna instalada" },
    { src: "/images/services/boiler-2.jpg", alt: "Mantenimiento de caldera" },
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
