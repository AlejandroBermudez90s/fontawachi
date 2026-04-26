import { Waves } from "lucide-react"
import { ServiceDetail } from "@/components/service-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Sistemas de Tratamiento de Agua | Fontawachi Instalaciones",
  description: "Especialistas en descalcificadores y ósmosis inversa en Mazarrón, Murcia. Mejora la calidad del agua de tu hogar y protege tus electrodomésticos.",
}

const serviceData = {
  title: "Sistemas de tratamiento de agua",
  subtitle: "Pureza y calidad",
  description: "Mejora la calidad del agua en tu hogar. Instalamos descalcificadores y sistemas de ósmosis inversa para un agua más pura, saludable y libre de cal.",
  longDescription: "En Fontawachi Instalaciones entendemos que la calidad del agua es fundamental para tu salud y el mantenimiento de tu hogar. En la zona de Mazarrón y la Región de Murcia, la dureza del agua es un problema común que afecta a tuberías y electrodomésticos. Ofrecemos soluciones avanzadas de tratamiento de agua, desde descalcificación integral para toda la vivienda hasta sistemas de ósmosis de alta eficiencia para consumo humano, garantizando un agua de mineralización débil directamente desde tu grifo.",
  features: [
    {
      title: "Análisis de dureza",
      description: "Realizamos un test de dureza y calidad del agua en tu domicilio para recomendarte el sistema más adecuado.",
    },
    {
      title: "Descalcificación integral",
      description: "Eliminamos la cal de toda tu red de agua para proteger tuberías, calderas, termos y grifería.",
    },
    {
      title: "Ósmosis inversa",
      description: "Sistemas de filtrado de múltiples etapas para obtener agua pura de baja mineralización, ideal para beber y cocinar.",
    },
    {
      title: "Instalación sin obras",
      description: "Realizamos instalaciones limpias y compactas que se adaptan al espacio disponible en tu cocina o cuarto técnico.",
    },
    {
      title: "Ahorro en mantenimiento",
      description: "El agua sin cal alarga la vida útil de tus electrodomésticos y reduce el consumo de detergentes y productos de limpieza.",
    },
    {
      title: "Servicio de postventa",
      description: "Contamos con servicio de cambio de filtros y mantenimiento periódico para que tu agua sea siempre perfecta.",
    },
  ],
  benefits: [
    "Agua pura y de excelente sabor para toda la familia",
    "Protección total contra la cal en tuberías y electrodomésticos",
    "Ahorro económico al eliminar la compra de agua embotellada",
    "Piel y cabello más suaves al eliminar el exceso de sales y cloro",
    "Reducción de residuos plásticos, contribuyendo al medio ambiente",
    "Mejora el rendimiento y eficiencia de sistemas de calefacción y termos",
  ],
  images: [
    { src: "/images/services/tratamiento-agua/tratamiento-agua1.jpg", alt: "Instalación de descalcificador" },
    { src: "/images/services/tratamiento-agua/tratamiento-agua2.jpg", alt: "Instalación de descalcificador" },
    { src: "/images/services/tratamiento-agua/tratamiento-agua3.jpg", alt: "Instalación de descalcificador" },
    { src: "/images/services/tratamiento-agua/tratamiento-agua4.jpg", alt: "Instalación de descalcificador" },
    { src: "/images/services/tratamiento-agua/tratamiento-agua5.jpg", alt: "Instalación de descalcificador" },
    { src: "/images/services/tratamiento-agua/tratamiento-agua6.jpg", alt: "Instalación de descalcificador" },
    { src: "/images/services/tratamiento-agua/tratamiento-agua7.jpg", alt: "Instalación de descalcificador" }
  ],
}

export default function TratamientoAguaPage() {
  return (
    <>
      <Header />
      <ServiceDetail {...serviceData} icon={<Waves className="w-8 h-8" />} />
      <Footer />
    </>
  )
}