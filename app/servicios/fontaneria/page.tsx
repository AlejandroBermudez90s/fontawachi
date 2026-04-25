import { Wrench } from "lucide-react"
import { ServiceDetail } from "@/components/service-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fontanería | Fontawachi Instalaciones",
  description: "Servicios de fontanería en Mazarrón. Reparación de fugas, instalación de baños, reforma de tuberías y urgencias 24 horas.",
}

const serviceData = {
  title: "Fontanería",
  subtitle: "Servicios integrales",
  description: "Desde reparaciones hasta instalaciones completas, nuestros fontaneros certificados atienden todas tus necesidades residenciales y comerciales.",
  longDescription: "El servicio de fontanería es fundamental para el funcionamiento de cualquier vivienda o negocio. En Fontawachi Instalaciones contamos con un equipo de fontaneros profesionales con amplia experiencia en todo tipo de trabajos: desde una simple reparación de grifo hasta la instalación completa de un cuarto de baño. Ofrecemos servicio de urgencias para averías que no pueden esperar, como fugas de agua o atascos. Nuestro compromiso es resolver tu problema de forma rápida, limpia y con garantía.",
  features: [
    {
      title: "Reparación de fugas",
      description: "Detección y reparación de fugas de agua visibles y ocultas con tecnología ultrasonidos y gas traza.",
    },
    {
      title: "Instalación y montaje de baños",
      description: "Reforma completa de baños: sanitarios, grifería, mamparas y accesorios.",
    },
    {
      title: "Reforma de tuberías",
      description: "Sustitución de tuberías antiguas por materiales modernos y duraderos.",
    },
    {
      title: "Termos Eléctricos",
      description: "Instalación y reparación de termos eléctricos.",
    }
  ],
  benefits: [
    "Respuesta rápida ante emergencias",
    "Fontaneros certificados y con gran experiencia",
    "Presupuesto detallado sin compromiso",
    "Trabajos con garantía por escrito",
    "Limpieza total tras cada intervención",
    "Uso de materiales de primera calidad",
  ],
  images: [
    { src: "/images/services/fontaneria/fontaneria1.jpeg", alt: "Fontanero trabajando" },
    { src: "/images/services/fontaneria/fugas0.jpeg", alt: "Fontanero trabajando" },
    { src: "/images/services/fontaneria/fugas1.jpeg", alt: "Fontanero trabajando" },
    { src: "/images/services/fontaneria/fontaneria2.jpeg", alt: "Fontanero trabajando" },
    { src: "/images/services/fontaneria/fugas2.jpeg", alt: "Fontanero trabajando" },
    { src: "/images/services/fontaneria/fontaneria3.jpeg", alt: "Fontanero trabajando" },
    { src: "/images/services/fontaneria/fugas3.jpeg", alt: "Fontanero trabajando" },
    { src: "/images/services/fontaneria/fontaneria4.jpeg", alt: "Fontanero trabajando" },
    { src: "/images/services/fontaneria/fugas4.jpeg", alt: "Fontanero trabajando" },
    { src: "/images/services/fontaneria/fugas5.jpeg", alt: "Fontanero trabajando" },
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