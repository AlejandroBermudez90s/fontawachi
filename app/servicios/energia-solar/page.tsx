import { Sun } from "lucide-react"
import { ServiceDetail } from "@/components/service-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Energía Solar | Fontawachi Instalaciones",
  description: "Instalación profesional de paneles solares en Mazarrón, Murcia. Reduce tu factura eléctrica con energía solar limpia y renovable.",
}

const serviceData = {
  title: "Energía Solar",
  subtitle: "Energía Renovable",
  description: "Aprovecha la energía del sol con nuestras instalaciones profesionales de paneles solares. Reduce tu factura eléctrica y tu huella de carbono.",
  longDescription: "En Fontawachi Instalaciones somos especialistas en el diseño e instalación de sistemas de energía solar para viviendas y negocios en Mazarrón y toda la Región de Murcia. Nuestra región cuenta con más de 300 días de sol al año, lo que la convierte en el lugar ideal para aprovechar la energía solar. Nuestro equipo de técnicos certificados te acompaña desde el estudio inicial hasta la puesta en marcha, garantizando un sistema optimizado para tus necesidades específicas.",
  features: [
    {
      title: "Estudio Personalizado",
      description: "Analizamos tu consumo energético y las características de tu vivienda para diseñar el sistema óptimo.",
    },
    {
      title: "Instalación Profesional",
      description: "Técnicos certificados con amplia experiencia en instalaciones residenciales y comerciales.",
    },
    {
      title: "Trámites y Subvenciones",
      description: "Gestionamos todos los trámites administrativos y te ayudamos a acceder a las subvenciones disponibles.",
    },
    {
      title: "Monitorización Inteligente",
      description: "Sistemas de monitorización para controlar tu producción y consumo en tiempo real desde tu móvil.",
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento para asegurar el máximo rendimiento de tu instalación durante años.",
    },
    {
      title: "Garantía Extendida",
      description: "Todos nuestros equipos cuentan con garantía de fabricante y garantía de instalación.",
    },
  ],
  benefits: [
    "Ahorro de hasta un 70% en tu factura de electricidad",
    "Amortización de la inversión en 5-7 años",
    "Aumento del valor de tu propiedad",
    "Independencia energética y protección contra subidas de precios",
    "Energía 100% limpia y renovable",
    "Acceso a bonificaciones fiscales y subvenciones",
  ],
  images: [
    { src: "/images/services/solar-1.jpg", alt: "Instalación de paneles solares" },
    { src: "/images/services/solar-2.jpg", alt: "Paneles solares en tejado" },
    { src: "/images/services/solar-3.jpg", alt: "Vista aérea paneles solares" },
  ],
}

export default function EnergiaSolarPage() {
  return (
    <>
      <Header />
      <ServiceDetail {...serviceData} icon={<Sun className="w-8 h-8" />}  />
      <Footer />
    </>
  )
}