import { Sun } from "lucide-react"
import { ServiceDetail } from "@/components/ServiceDetail"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Energia Solar | Fontawachi Instalaciones",
  description: "Instalacion profesional de paneles solares en Mazarron, Murcia. Reduce tu factura electrica con energia solar limpia y renovable.",
}

const serviceData = {
  title: "Energia Solar",
  subtitle: "Energia Renovable",
  description: "Aprovecha la energia del sol con nuestras instalaciones profesionales de paneles solares. Reduce tu factura electrica y tu huella de carbono.",
  longDescription: "En Fontawachi Instalaciones somos especialistas en el diseno e instalacion de sistemas de energia solar para viviendas y negocios en Mazarron y toda la Region de Murcia. Nuestra region cuenta con mas de 300 dias de sol al ano, lo que la convierte en el lugar ideal para aprovechar la energia solar. Nuestro equipo de tecnicos certificados te acompana desde el estudio inicial hasta la puesta en marcha, garantizando un sistema optimizado para tus necesidades especificas.",
  features: [
    {
      title: "Estudio Personalizado",
      description: "Analizamos tu consumo energetico y las caracteristicas de tu vivienda para disenar el sistema optimo.",
    },
    {
      title: "Instalacion Profesional",
      description: "Tecnicos certificados con amplia experiencia en instalaciones residenciales y comerciales.",
    },
    {
      title: "Tramites y Subvenciones",
      description: "Gestionamos todos los tramites administrativos y te ayudamos a acceder a las subvenciones disponibles.",
    },
    {
      title: "Monitorizacion Inteligente",
      description: "Sistemas de monitorizacion para controlar tu produccion y consumo en tiempo real desde tu movil.",
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento para asegurar el maximo rendimiento de tu instalacion durante anos.",
    },
    {
      title: "Garantia Extendida",
      description: "Todos nuestros equipos cuentan con garantia de fabricante y garantia de instalacion.",
    },
  ],
  benefits: [
    "Ahorro de hasta un 70% en tu factura de electricidad",
    "Amortizacion de la inversion en 5-7 anos",
    "Aumento del valor de tu propiedad",
    "Independencia energetica y proteccion contra subidas de precios",
    "Energia 100% limpia y renovable",
    "Acceso a bonificaciones fiscales y subvenciones",
  ],
  images: [
    { src: "/images/services/solar-1.jpg", alt: "Instalacion de paneles solares" },
    { src: "/images/services/solar-2.jpg", alt: "Paneles solares en tejado" },
    { src: "/images/services/solar-3.jpg", alt: "Vista aerea paneles solares" },
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
