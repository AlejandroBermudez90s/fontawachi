import { Wrench } from "lucide-react"
import { ServiceDetail } from "@/components/ServiceDetail"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fontaneria | Fontawachi Instalaciones",
  description: "Servicios de fontaneria en Mazarron. Reparacion de fugas, instalacion de banos, reforma de tuberias y urgencias 24 horas.",
}

const serviceData = {
  title: "Fontaneria",
  subtitle: "Servicios Integrales",
  description: "Desde reparaciones hasta instalaciones completas, nuestros fontaneros certificados atienden todas tus necesidades residenciales y comerciales.",
  longDescription: "El servicio de fontaneria es fundamental para el funcionamiento de cualquier vivienda o negocio. En Fontawachi Instalaciones contamos con un equipo de fontaneros profesionales con amplia experiencia en todo tipo de trabajos: desde una simple reparacion de grifo hasta la instalacion completa de un cuarto de bano. Ofrecemos servicio de urgencias para averias que no pueden esperar, como fugas de agua o atascos. Nuestro compromiso es resolver tu problema de forma rapida, limpia y con garantia.",
  features: [
    {
      title: "Reparacion de Fugas",
      description: "Deteccion y reparacion de fugas de agua visibles y ocultas con tecnologia avanzada.",
    },
    {
      title: "Desatascos",
      description: "Servicio de desatasco de tuberias, desagues y arquetas con maquinaria profesional.",
    },
    {
      title: "Instalacion de Banos",
      description: "Reforma completa de banos: sanitarios, griferia, mamparas y accesorios.",
    },
    {
      title: "Reforma de Tuberias",
      description: "Sustitucion de tuberias antiguas por materiales modernos y duraderos.",
    },
    {
      title: "Termos y Calentadores",
      description: "Instalacion y reparacion de termos electricos y calentadores de gas.",
    },
    {
      title: "Urgencias 24h",
      description: "Servicio de emergencia disponible las 24 horas para averias urgentes.",
    },
  ],
  benefits: [
    "Respuesta rapida ante emergencias",
    "Fontaneros certificados y con experiencia",
    "Presupuesto sin compromiso",
    "Trabajos con garantia",
    "Limpieza total tras cada intervencion",
    "Materiales de primera calidad",
  ],
  images: [
    { src: "/images/services/plumbing-1.jpg", alt: "Fontanero trabajando" },
    { src: "/images/services/plumbing-2.jpg", alt: "Instalacion de bano" },
  ],
}

export default function FontaneriaPage() {
  return (
    <>
      <Header />
      <ServiceDetail {...serviceData} icon={<Wrench className="w-8 h-8"/>} />
      <Footer />
    </>
  )
}
