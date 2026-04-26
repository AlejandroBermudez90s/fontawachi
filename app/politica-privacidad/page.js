import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Política de Privacidad | Fontawachi Instalaciones",
  description: "Política de privacidad de Fontawachi Instalaciones.",
}

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-20">
        {/* Hero */}
        <div className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider mb-3">Legal</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Política de Privacidad</h1>
            <p className="mt-4 text-primary-foreground/80">Última actualización: abril de 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-10">

            <section className="bg-muted rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-5">1. Responsable del tratamiento</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["Titular", "Washington Manuel Bermúdez Zambrano"],
                  ["NIF", "58488061G"],
                  ["Email", "fontawachi@gmail.com"],
                  ["Teléfono", "652 30 48 01"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-background rounded-xl px-4 py-3 border border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Datos que recogemos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">A través del formulario de contacto de este sitio web recogemos los siguientes datos personales:</p>
                <ul className="space-y-2">
                  {["Nombre completo", "Correo electrónico", "Número de teléfono (opcional)", "Servicio de interés", "Mensaje"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Finalidad del tratamiento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Los datos recogidos se utilizan exclusivamente para:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Gestionar y responder las solicitudes de presupuesto o información enviadas a través del formulario de contacto.",
                    "Contactar con el usuario en relación con los servicios solicitados.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground leading-relaxed">No utilizamos los datos para envíos comerciales ni los cedemos a terceros.</p>
              </div>
            </section>

            {[
              {
                num: "4",
                title: "Base legal",
                content: "El tratamiento de tus datos se basa en el consentimiento otorgado al enviar el formulario de contacto, de conformidad con el artículo 6.1.a del Reglamento General de Protección de Datos (RGPD).",
              },
              {
                num: "5",
                title: "Conservación de los datos",
                content: "Los datos se conservarán únicamente durante el tiempo necesario para atender tu solicitud y, en su caso, durante el plazo legalmente establecido.",
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

            <section className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 mt-1">6</div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Derechos del usuario</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Puedes ejercer en cualquier momento los siguientes derechos:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {[
                    ["Acceso", "Conocer qué datos tuyos tratamos."],
                    ["Rectificación", "Corregir datos inexactos."],
                    ["Supresión", "Solicitar la eliminación de tus datos."],
                    ["Oposición", "Oponerte al tratamiento de tus datos."],
                    ["Portabilidad", "Recibir tus datos en formato estructurado."],
                  ].map(([label, desc]) => (
                    <div key={label} className="bg-muted rounded-xl px-4 py-3 border border-border">
                      <p className="text-sm font-semibold text-foreground mb-1">{label}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">Para ejercer estos derechos, envía un correo a <span className="font-medium text-foreground">fontawachi@gmail.com</span> indicando el derecho que deseas ejercer y adjuntando copia de tu DNI. Si consideras que el tratamiento no es conforme a la normativa, puedes reclamar ante la <a href="https://www.aepd.es" className="text-primary hover:underline" target="_blank">Agencia Española de Protección de Datos</a>.</p>
              </div>
            </section>

            {[
              {
                num: "7",
                title: "Seguridad",
                content: "Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos y evitar su alteración, pérdida, tratamiento o acceso no autorizado.",
              },
              {
                num: "8",
                title: "Modificaciones",
                content: "Nos reservamos el derecho de actualizar esta Política de Privacidad. Te recomendamos revisarla periódicamente. Última actualización: abril de 2026.",
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