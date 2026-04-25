import { Droplets } from "lucide-react"
import { ServiceDetail } from "@/components/service-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Grupos de Presión | Fontawachi Instalaciones",
  description: "Instalación de grupos de presión de agua en Mazarrón. Bombas de presión, descalcificadores y sistemas de tratamiento de agua.",
}

const serviceData = {
  title: "Grupos de presión",
  subtitle: "Sistemas de agua",
  description: "Optimiza el flujo de agua con nuestras instalaciones de bombas de presión y soluciones de sistemas de agua para un suministro constante.",
  longDescription: "La presión de agua insuficiente es un problema común en muchas viviendas, especialmente en zonas altas o edificios antiguos. En Fontawachi Instalaciones somos especialistas en grupos de presión y sistemas de bombeo para garantizar un caudal y presión óptimos en toda tu vivienda o negocio. También instalamos descalcificadores y sistemas de tratamiento de agua para proteger tus electrodomésticos y tuberías de la cal, muy presente en el agua de la zona de Murcia.",
  features: [
    {
      title: "Grupos de Presión",
      description: "Bombas y sistemas de presión para garantizar un caudal constante en toda la vivienda.",
    },
    {
      title: "Descalcificadores",
      description: "Elimina la cal del agua para proteger tus electrodomésticos y tuberías.",
    },
    {
      title: "Depósitos de Agua",
      description: "Instalación de depósitos para almacenamiento y regulación del suministro.",
    },
    {
      title: "Bombas Sumergibles",
      description: "Para pozos y depósitos subterráneos con la máxima eficiencia energética.",
    },
    {
      title: "Ósmosis Inversa",
      description: "Sistemas de purificación de agua avanzada para consumo doméstico.",
    },
  ],
  benefits: [
    "Presión de agua constante en todos los puntos de consumo",
    "Protección total de electrodomésticos contra la cal",
    "Agua de mejor calidad para el consumo diario",
    "Ahorro significativo en el mantenimiento de tuberías",
    "Sistemas silenciosos de última generación y eficientes",
    "Solución definitiva para viviendas en zonas altas",
  ],
  images: [
    { src: "/images/services/grupos-presion/grupo1.jpeg", alt: "Grupo de presión instalado" },
    { src: "/images/services/grupos-presion/grupo2.jpeg", alt: "Grupo de presión instalado" },
    { src: "/images/services/grupos-presion/grupo3.jpeg", alt: "Grupo de presión instalado" },
    { src: "/images/services/grupos-presion/grupo4.jpeg", alt: "Grupo de presión instalado" },
  ],
}

export default function GruposPresionPage() {
  return (
    <>
      <Header />
      <ServiceDetail {...serviceData} icon={<Droplets className="w-8 h-8"/>}/>
      <Footer />
    </>
  )
}