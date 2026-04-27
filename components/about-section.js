import Image from "next/image"
import { Star, ExternalLink } from "lucide-react"

const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: "2000+", label: "Proyectos realizados" },
  { value: "98%", label: "Clientes satisfechos" }
]

const reviews = [
  {
    name: "Paco Raja Toledo",
    avatar: "PR",
    rating: 5,
    date: "2022",
    text: "Sin duda alguna el mejor profesional de fontanería que puedas encontrar en la zona de Mazarron, trato excelente, trabajo efectivo, servicio inmejorable e inmediato y lo mejor la seriedad. Totalmente recomendable!",
  },
  {
    name: "Andrew McManus",
    avatar: "AM",
    rating: 5,
    date: "Hace 1 mes",
    text: "I have used this company three times. The first time was to fix a solar water heater, the second a oil boiler, and finally to install a water tank with a pump. All three things were carried out professionally, its gives you s sense of confidence that they know what they are doing, and when the task is completed, its to a high standard at a reasonable price. I would highly recommend them.",
  },
  {
    name: "Anna Hartley",
    avatar: "AH",
    rating: 5,
    date: "Hace 6 meses",
    text: "Telephoned Fontawachi on an evening, explained our problem, they came out very promptly to assess, locate and temporarily repair. Returned just as promptly to fully sort out our problem. We can’t recommend this company enough they thoroughly explained what needed to be done, job finished off to high standard - THANKYOU",
  },
  {
    name: "Nigel Jons",
    avatar: "NJ",
    rating: 5,
    date: "Hace 10 meses",
    text: "Fontawachi is an extremely professional and efficient company, who do excellent work at fair prices. We have used them on numerous occasions in the past six years, from small jobs to installation of a central heating system and regular maintenance of our equipment. They also stepped up when our pool filter in our pool housing cracked, damaging everything in the pool box. We were away on holiday at the time and it was all fixed when we returned. Manuel from Fontawachi, goes out of his way to support customers, even answering messages out of hours. They are our go to company and are highly recommended. If you have tried the rest, it is time to try the best.",
  },
  {
    name: "Lynne Mead",
    avatar: "LM",
    rating: 5,
    date: "Hace 3 meses",
    text: "Este plomero tardó 2 horas en encontrar y reparar una fuga que numerosos profesionales de compañías de seguros no pudieron encontrar, estamos extremadamente agradecidos y agradecidos de que haya completado el trabajo, altamente profesional y extremadamente competente, nunca usaríamos a nadie más.",
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
        />
      ))}
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/papa.jpg"
                alt="Técnico profesional trabajando"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Contenido */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Sobre nosotros</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Expertos de confianza en soluciones energéticas y del hogar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Con más de 20 años de experiencia, Fontawachi Instalaciones ha sido la empresa de confianza
              para miles de hogares y negocios en Mazarrón y toda la Región de Murcia que buscan
              soluciones fiables en energía y servicios del hogar. Nuestro equipo de profesionales
              certificados está comprometido con ofrecer calidad excepcional y satisfacción al cliente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nos especializamos en sistemas de energía solar, instalaciones de climatización,
              servicios de calderas, sistemas de presión de agua y soluciones integrales de fontanería.
              Nuestro compromiso con la excelencia y las prácticas sostenibles nos distingue en el sector.
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reseñas Google */}
        <div className="mt-16 lg:mt-20">
          {/* Header reseñas */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold text-foreground">4,8</span>
                  <StarRating rating={5} />
                </div>
                <p className="text-sm text-muted-foreground">Basado en 41 reseñas de Google</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/Fontawachi+Mazarron"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Ver todas las reseñas en Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Grid reseñas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-muted/50 rounded-2xl p-5 border border-border flex flex-col gap-3"
              >
                {/* Usuario */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  {/* Logo Google */}
                  <svg className="w-5 h-5 ml-auto flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>

                {/* Estrellas */}
                <StarRating rating={review.rating} />

                {/* Texto */}
                <p className="text-sm text-muted-foreground leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}