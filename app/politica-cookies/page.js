import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Política de Cookies | Fontawachi Instalaciones",
  description: "Política de cookies de Fontawachi Instalaciones.",
}

export default function PoliticaCookiesPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-20">
        {/* Hero */}
        <div className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider mb-3">Legal</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Política de Cookies</h1>
            <p className="mt-4 text-primary-foreground/80">Última actualización: abril de 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-10">

            <section className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">¿Qué son las cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Se utilizan para recordar tus preferencias, mejorar tu experiencia de navegación y recopilar información sobre el uso del sitio.</p>
              </div>
            </section>

            <section className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">¿Qué cookies utilizamos?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">En fontawachi.com utilizamos los siguientes tipos de cookies:</p>

                <div className="space-y-4">
                  <div className="bg-muted rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Necesarias</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Cookies de preferencias</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Almacenamos tu preferencia de aceptación de cookies en tu navegador mediante <code className="bg-background px-1 py-0.5 rounded text-xs">localStorage</code>. Esta información no se envía a ningún servidor externo y se elimina si limpias los datos del navegador.</p>
                  </div>

                  <div className="bg-muted rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Analíticas</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Vercel Analytics</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Utilizamos Vercel Analytics para recopilar datos anónimos sobre el uso del sitio web, como páginas visitadas y tiempo de carga. Esta herramienta no utiliza cookies de seguimiento tradicionales y está diseñada para respetar la privacidad del usuario. Más información en <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" className="text-primary hover:underline">vercel.com</a>.</p>
                  </div>

                  <div className="bg-muted rounded-2xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Terceros</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Google Fonts</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Este sitio utiliza fuentes tipográficas de Google Fonts. Al cargar la página, tu navegador realiza una solicitud a los servidores de Google, lo que puede implicar el tratamiento de tu dirección IP. Más información en <a href="https://policies.google.com/privacy" target="_blank" className="text-primary hover:underline">policies.google.com</a>.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">¿Cómo gestionar las cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Puedes aceptar o rechazar las cookies a través del banner que aparece al visitar nuestra web por primera vez. Además, puedes configurar tu navegador para bloquear o eliminar cookies:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    ["Google Chrome", "Configuración → Privacidad y seguridad → Cookies"],
                    ["Mozilla Firefox", "Opciones → Privacidad y seguridad → Cookies"],
                    ["Safari", "Preferencias → Privacidad → Cookies"],
                    ["Microsoft Edge", "Configuración → Privacidad → Cookies"],
                  ].map(([browser, path]) => (
                    <div key={browser} className="bg-muted rounded-xl px-4 py-3 border border-border">
                      <p className="text-sm font-semibold text-foreground mb-1">{browser}</p>
                      <p className="text-xs text-muted-foreground">{path}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">Más información</h2>
                <p className="text-muted-foreground leading-relaxed">Para cualquier consulta sobre nuestra política de cookies, puedes contactarnos en <span className="font-medium text-foreground">fontawachi@gmail.com</span>. También puedes consultar nuestra <a href="/politica-privacidad" className="text-primary hover:underline">Política de Privacidad</a> y nuestro <a href="/aviso-legal" className="text-primary hover:underline">Aviso Legal</a>.</p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}