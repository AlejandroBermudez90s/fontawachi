import { Zap } from "lucide-react"
import { ServiceDetail } from "@/components/service-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sistemas Fotovoltaicos | Fontawachi Instalaciones",
  description: "Diseño e instalación de sistemas fotovoltaicos en Mazarrón. Autoconsumo con y sin baterías, conexión a red y sistemas aislados.",
}

const serviceData = {
  title: "Sistemas fotovoltaicos",
  subtitle: "Autoconsumo inteligente",
  description: "Diseño e instalación completa de sistemas fotovoltaicos para máxima eficiencia energética y ahorro a largo plazo.",
  longDescription: "Los sistemas fotovoltaicos son la solución más avanzada para generar tu propia electricidad. En Fontawachi ofrecemos soluciones completas de autoconsumo fotovoltaico, desde instalaciones básicas hasta sistemas con baterías de almacenamiento y gestión inteligente de energía. Trabajamos con las mejores marcas del mercado y nuestros ingenieros diseñan cada instalación para maximizar el aprovechamiento de la energía solar en tu ubicación específica.",
  features: [
    {
      title: "Autoconsumo Directo",
      description: "Consume la energía que produces al instante y reduce tu dependencia de la red eléctrica.",
    },
    {
      title: "Baterías de Almacenamiento",
      description: "Almacena el excedente de energía para usarla cuando más la necesites, incluso de noche.",
    },
    {
      title: "Vertido a Red",
      description: "Vende el excedente de energía a la red y obtén una compensación en tu factura.",
    },
    {
      title: "Gestión Inteligente",
      description: "Optimiza automáticamente el uso de energía según tus patrones de consumo.",
    },
    {
      title: "Inversoores de Alta Eficiencia",
      description: "Equipos de última generación para maximizar la conversión de energía solar.",
    },
    {
      title: "Ampliaciones Futuras",
      description: "Diseñamos sistemas escalables que puedes ampliar según tus necesidades futuras.",
    },
  ],
  benefits: [
    "Independencia energética total con sistemas con baterías",
    "Compensación económica por excedentes vertidos a la red",
    "Sistemas escalables y adaptables a tus necesidades",
    "Reducción drástica de la huella de carbono",
    "Protección ante cortes de suministro con sistemas híbridos",
    "Control total de tu energía desde una aplicación móvil",
  ],
  images: [
    { src: "/images/services/fotovoltaica/fotovoltaica1.jpeg", alt: "Inversor fotovoltaico" },
    { src: "/images/services/fotovoltaica/fotovoltaica2.jpeg", alt: "Inversor fotovoltaico" },
    { src: "/images/services/fotovoltaica/fotovoltaica3.jpeg", alt: "Inversor fotovoltaico" },
    { src: "/images/services/fotovoltaica/fotovoltaica4.jpeg", alt: "Inversor fotovoltaico" },
    { src: "/images/services/fotovoltaica/fotovoltaica5.jpg", alt: "Inversor fotovoltaico" },
    { src: "/images/services/fotovoltaica/fotovoltaica6.jpeg", alt: "Inversor fotovoltaico" },
    { src: "/images/services/fotovoltaica/fotovoltaica7.jpeg", alt: "Inversor fotovoltaico" },
    { src: "/images/services/fotovoltaica/fotovoltaica8.jpeg", alt: "Inversor fotovoltaico" },
    { src: "/images/services/fotovoltaica/fotovoltaica9.jpg", alt: "Inversor fotovoltaico" },
  ],
}

export default function FotovoltaicaPage() {
  return (
    <>
      <Header />
      <ServiceDetail {...serviceData} icon={<Zap className="w-8 h-8"/>}/>
      <Footer />
    </>
  )
}