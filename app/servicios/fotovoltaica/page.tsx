import { Zap } from "lucide-react"
import { ServiceDetail } from "@/components/ServiceDetail"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sistemas Fotovoltaicos | Fontawachi Instalaciones",
  description: "Diseno e instalacion de sistemas fotovoltaicos en Mazarron. Autoconsumo con y sin baterias, conexion a red y sistemas aislados.",
}

const serviceData = {
  title: "Sistemas Fotovoltaicos",
  subtitle: "Autoconsumo Inteligente",
  description: "Diseno e instalacion completa de sistemas fotovoltaicos para maxima eficiencia energetica y ahorro a largo plazo.",
  longDescription: "Los sistemas fotovoltaicos son la solucion mas avanzada para generar tu propia electricidad. En Fontawachi ofrecemos soluciones completas de autoconsumo fotovoltaico, desde instalaciones basicas hasta sistemas con baterias de almacenamiento y gestion inteligente de energia. Trabajamos con las mejores marcas del mercado y nuestros ingenieros disenan cada instalacion para maximizar el aprovechamiento de la energia solar en tu ubicacion especifica.",
  features: [
    {
      title: "Autoconsumo Directo",
      description: "Consume la energia que produces al instante y reduce tu dependencia de la red electrica.",
    },
    {
      title: "Baterias de Almacenamiento",
      description: "Almacena el excedente de energia para usarla cuando mas la necesites, incluso de noche.",
    },
    {
      title: "Vertido a Red",
      description: "Vende el excedente de energia a la red y obtiene una compensacion en tu factura.",
    },
    {
      title: "Gestion Inteligente",
      description: "Optimiza automaticamente el uso de energia segun tus patrones de consumo.",
    },
    {
      title: "Inversores de Alta Eficiencia",
      description: "Equipos de ultima generacion para maximizar la conversion de energia solar.",
    },
    {
      title: "Ampliaciones Futuras",
      description: "Disenamos sistemas escalables que puedes ampliar segun tus necesidades.",
    },
  ],
  benefits: [
    "Independencia energetica total con sistemas con baterias",
    "Compensacion economica por excedentes vertidos a red",
    "Sistemas escalables y adaptables a tus necesidades",
    "Reduccion de la huella de carbono",
    "Proteccion ante cortes de suministro con sistemas hibridos",
    "Control total de tu energia desde una app",
  ],
  images: [
    { src: "/images/services/photovoltaic-1.jpg", alt: "Inversor fotovoltaico" },
    { src: "/images/services/solar-1.jpg", alt: "Sistema fotovoltaico completo" },
    { src: "/images/services/solar-2.jpg", alt: "Paneles fotovoltaicos" },
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
