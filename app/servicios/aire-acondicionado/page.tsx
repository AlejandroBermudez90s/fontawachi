import { Wind } from "lucide-react"
import { ServiceDetail } from "@/components/ServiceDetail"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aire Acondicionado | Fontawachi Instalaciones",
  description: "Instalacion, mantenimiento y reparacion de aire acondicionado en Mazarron. Todas las marcas y sistemas split, multisplit y conductos.",
}

const serviceData = {
  title: "Aire Acondicionado",
  subtitle: "Climatizacion Profesional",
  description: "Mantente comodo todo el ano con nuestros servicios de instalacion, mantenimiento y reparacion de aire acondicionado de todas las marcas.",
  longDescription: "El clima mediterraneo de Mazarron hace imprescindible contar con un buen sistema de climatizacion. En Fontawachi Instalaciones somos expertos en aire acondicionado, ofreciendo soluciones para viviendas, locales comerciales y oficinas. Trabajamos con las principales marcas del mercado (Daikin, Mitsubishi, Fujitsu, Samsung, LG) y nuestros tecnicos estan certificados para garantizar instalaciones eficientes y duraderas. Tambien ofrecemos contratos de mantenimiento para asegurar el optimo funcionamiento de tu equipo.",
  features: [
    {
      title: "Instalacion Split y Multisplit",
      description: "Sistemas individuales o para climatizar varias estancias con una sola unidad exterior.",
    },
    {
      title: "Aire por Conductos",
      description: "Solucion integrada para climatizar toda la vivienda de forma uniforme y estetica.",
    },
    {
      title: "Sistemas Inverter",
      description: "Tecnologia de ahorro energetico que adapta la potencia a las necesidades reales.",
    },
    {
      title: "Reparacion Urgente",
      description: "Servicio de reparacion rapida para que no te quedes sin climatizacion.",
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Limpieza de filtros, revision de gas y comprobacion general para maxima eficiencia.",
    },
    {
      title: "Bomba de Calor",
      description: "Equipos que ofrecen frio en verano y calor en invierno con maxima eficiencia.",
    },
  ],
  benefits: [
    "Confort termico durante todo el ano",
    "Ahorro energetico con tecnologia Inverter (hasta 40%)",
    "Mejora de la calidad del aire interior",
    "Equipos silenciosos de ultima generacion",
    "Financiacion flexible disponible",
    "Servicio tecnico oficial de las principales marcas",
  ],
  images: [
    { src: "/images/services/ac-1.jpg", alt: "Instalacion aire acondicionado" },
    { src: "/images/services/ac-2.jpg", alt: "Unidad exterior aire acondicionado" },
    { src: "/images/services/ac-3.jpg", alt: "Mantenimiento aire acondicionado" },
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
