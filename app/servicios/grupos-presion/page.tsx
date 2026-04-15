import { Droplets } from "lucide-react"
import { ServiceDetail } from "@/components/ServiceDetail"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Grupos de Presion | Fontawachi Instalaciones",
  description: "Instalacion de grupos de presion de agua en Mazarron. Bombas de presion, descalcificadores y sistemas de tratamiento de agua.",
}

const serviceData = {
  title: "Grupos de Presion",
  subtitle: "Sistemas de Agua",
  description: "Optimiza el flujo de agua con nuestras instalaciones de bombas de presion y soluciones de sistemas de agua para un suministro constante.",
  longDescription: "La presion de agua insuficiente es un problema comun en muchas viviendas, especialmente en zonas altas o edificios antiguos. En Fontawachi Instalaciones somos especialistas en grupos de presion y sistemas de bombeo para garantizar un caudal y presion optimos en toda tu vivienda o negocio. Tambien instalamos descalcificadores y sistemas de tratamiento de agua para proteger tus electrodomesticos y tuberias de la cal, muy presente en el agua de la zona de Murcia.",
  features: [
    {
      title: "Grupos de Presion",
      description: "Bombas y sistemas de presion para garantizar un caudal constante en toda la vivienda.",
    },
    {
      title: "Descalcificadores",
      description: "Elimina la cal del agua para proteger tus electrodomesticos y tuberias.",
    },
    {
      title: "Depositos de Agua",
      description: "Instalacion de depositos para almacenamiento y regulacion del suministro.",
    },
    {
      title: "Bombas Sumergibles",
      description: "Para pozos y depositos subterraneos con maxima eficiencia.",
    },
    {
      title: "Sistemas de Riego",
      description: "Automatizacion de riego para jardines y cultivos.",
    },
    {
      title: "Osmosis Inversa",
      description: "Sistemas de purificacion de agua para consumo domestico.",
    },
  ],
  benefits: [
    "Presion de agua constante en todos los puntos de consumo",
    "Proteccion de electrodomesticos contra la cal",
    "Agua de mejor calidad para consumo",
    "Ahorro en mantenimiento de tuberias",
    "Sistemas silenciosos y eficientes",
    "Solucion para viviendas en zonas altas",
  ],
  images: [
    { src: "/images/services/pressure-1.jpg", alt: "Grupo de presion instalado" },
    { src: "/images/services/pressure-2.jpg", alt: "Sistema de bombeo de agua" },
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
