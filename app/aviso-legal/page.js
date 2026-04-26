import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Aviso Legal | Fontawachi Instalaciones",
  description: "Aviso legal de Fontawachi Instalaciones.",
}

export default function AvisoLegalPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <div className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider mb-3">Legal</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Aviso Legal</h1>
            <p className="mt-4 text-primary-foreground/80">Última actualización: abril de 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-10">

            <section className="bg-muted rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-5">1. Datos identificativos</h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa de los siguientes datos:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["Titular", "Washington Manuel Bermúdez Zambrano"],
                  ["NIF", "58488061G"],
                  ["Nombre comercial", "Fontawachi Instalaciones"],
                  ["Domicilio", "Mazarrón, Murcia"],
                  ["Email", "fontawachi@gmail.com"],
                  ["Teléfono", "652 30 48 01"],
                  ["Web", "www.fontawachi.com"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-background rounded-xl px-4 py-3 border border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            {[
              {
                num: "2",
                title: "Objeto y ámbito de aplicación",
                content: "El presente Aviso Legal regula el acceso y uso del sitio web www.fontawachi.com, titularidad de Washington Manuel Bermúdez Zambrano. El acceso a este sitio web implica la aceptación plena y sin reservas de las presentes condiciones.",
              },
              {
                num: "3",
                title: "Propiedad intelectual e industrial",
                content: "Todos los contenidos del sitio web —incluyendo textos, imágenes, logotipos, diseño gráfico y código fuente— son propiedad de Washington Manuel Bermúdez Zambrano o de terceros que han autorizado su uso, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.",
              },
              {
                num: "4",
                title: "Responsabilidad",
                content: "Fontawachi Instalaciones no se hace responsable de los daños que pudieran derivarse del uso del sitio web, ni de la información contenida en páginas externas enlazadas desde este sitio. El titular se reserva el derecho de modificar, suspender o eliminar el sitio web sin previo aviso.",
              },
              {
                num: "5",
                title: "Legislación aplicable",
                content: "Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales de Murcia.",
              },
              {
                num: "6",
                title: "Modificaciones",
                content: "Fontawachi Instalaciones se reserva el derecho de modificar el presente Aviso Legal en cualquier momento. Se recomienda revisarlo periódicamente.",
              },
            ].map(({ num, title, content }) => (
              <section key={num} className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 mt-1">
                  {num}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{content}</p>
                </div>
              </section>
            ))}

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}