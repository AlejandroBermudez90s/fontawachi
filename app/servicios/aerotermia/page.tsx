import { ThermometerSun } from "lucide-react"
import { ServiceDetail } from "@/components/service-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aerotermia | Fontawachi Instalaciones",
  description: "Instalación de sistemas de aerotermia en Mazarrón y Murcia. La solución más eficiente para calefacción, refrigeración y agua caliente.",
}

const serviceData = {
  title: "Aerotermia",
  subtitle: "Climatización Inteligente",
  description: "La tecnología del futuro hoy. Climatiza tu hogar y obtén agua caliente con la máxima eficiencia utilizando una bomba de calor aerotérmica.",
  longDescription: "En Fontawachi Instalaciones somos expertos en sistemas de aerotermia, la solución de climatización más eficiente y sostenible del mercado actual. La aerotermia extrae hasta el 75% de la energía del aire exterior para calentar o enfriar tu hogar y producir agua caliente sanitaria (ACS). Es el sistema ideal para combinar con placas solares fotovoltaicas, permitiéndote alcanzar un nivel de ahorro energético sin precedentes en la Región de Murcia.",
  features: [
    {
      title: "Instaladores Autorizados por el RITE",
      description: "Profesionales certificados para instalar y mantener tus sistemas de climatización con la máxima garantía legal y eficiencia técnica.",
    },
    {
      title: "Sistema 3 en 1",
      description: "Un solo equipo para calefacción en invierno, aire acondicionado en verano y agua caliente durante todo el año.",
    },
    
    {
      title: "Integración con Suelo Radiante",
      description: "Expertos en la combinación de aerotermia con suelo radiante o fancoils para un confort térmico inigualable.",
    },
    {
      title: "Energía Renovable",
      description: "Considerada energía limpia por la Unión Europea, reduce drásticamente las emisiones de CO2 de tu vivienda.",
    },
    {
      title: "Control Wifi Avanzado",
      description: "Gestiona la temperatura de cada zona de tu casa y programa el consumo desde cualquier lugar con tu smartphone.",
    },
    {
      title: "Sustitución de Calderas",
      description: "Realizamos la transición de sistemas antiguos de gas o gasoil a aerotermia de forma rápida y profesional.",
    },
  ],
  benefits: [
    "Ahorro de hasta un 60-70% en comparación con sistemas convencionales",
    "Eliminación total de facturas de gas o suministros de gasoil",
    "Seguridad máxima al no existir combustión ni almacenamiento de combustible",
    "Mantenimiento mínimo en comparación con calderas tradicionales",
    "Revalorización inmediata de tu propiedad y mejor certificación energética",
    "Sistema extremadamente silencioso y de larga vida útil",
  ],
  images: [
    { src: "/images/services/aerotermia/aerotermia1.jpg", alt: "Unidad exterior de aerotermia" },
  ],
}

export default function AerotermiaPage() {
  return (
    <>
      <Header />
      <ServiceDetail {...serviceData} icon={<ThermometerSun className="w-8 h-8" />} />
      <Footer />
    </>
  )
}