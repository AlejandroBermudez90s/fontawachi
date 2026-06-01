# Fontawachi Instalaciones ☀️🚰

¡Bienvenido al repositorio de **Fontawachi Instalaciones**! Una aplicación web corporativa, moderna y ultra rápida desarrollada con las tecnologías más eficientes del ecosistema web actual. 

Este sitio web está diseñado para dar visibilidad posicional (SEO) y captar clientes potenciales en Mazarrón y la Región de Murcia para servicios de energía solar, climatización y fontanería.

---

## 🚀 Características Principales

*   **Rendimiento Extremo (Core Web Vitals):** Desarrollado sobre Next.js para garantizar tiempos de carga instantáneos que mejoran el posicionamiento en buscadores (SEO).
*   **Formulario de Contacto Profesional:** Integración nativa con la API de **Resend** para asegurar la entrega de correos electrónicos de clientes potenciales sin fallos.
*   **Diseño Adaptable (Responsive):** Interfaz moderna y optimizada para cualquier dispositivo (móviles, tablets y ordenadores) utilizando **Tailwind CSS**.
*   **Iconografía Estilizada:** Uso de **Lucide React** para un apartado visual limpio y minimalista.
*   **Analíticas Integradas:** Conectado con **Vercel Analytics** para monitorizar las visitas y el comportamiento del usuario en producción de forma respetuosa con la privacidad.

---

## 🛠️ Tecnologías Utilizadas

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Envío de Emails:** [Resend API](https://resend.com/)
*   **Fuentes:** [Google Fonts (Geist & Geist Mono)](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
*   **Iconos:** [Lucide React](https://lucide.dev/)
*   **Despliegue e infraestructura:** [Vercel](https://vercel.com/)

---

## ⚙️ Configuración del Entorno de Desarrollo

Sigue estos pasos para levantar el proyecto en local:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/tu-usuario/fontawachi.git](https://github.com/tu-usuario/fontawachi.git)
cd fontawachi
```
### 2\. Instalar dependencias

```bash
npm install  
\# o bien  
yarn install  
\# o bien  
pnpm install  
```

### 3\. Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y añade tus credenciales de Resend:

Fragmento de código

RESEND\_API\_KEY=re\_tu\_api\_key\_aqui  

### 4\. Ejecutar el servidor de desarrollo

```bash
npm run dev  
```
Abre[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)en tu navegador para ver el resultado.

## 📁 Estructura del Proyecto (Puntos Clave)

-   `src/app/layout.js`: Configuración global de metadatos (SEO en castellano), inyección de fuentes e integración de analíticas en producción.
-   `src/app/components/AboutSection.js`: Sección "Nosotros" con tarjetas de estadísticas dinámicas e imágenes optimizadas del equipo de técnicos.
-   `src/app/components/ServicesSection.js`: Grid interactivo que detalla las soluciones que ofrece la empresa con logos optimizados.
-   `public/`: Almacena recursos estáticos como el `icon.png` (favicon), `apple-icon.png` e imágenes corporativas.

## 📝 Licencia

Este proyecto es de código cerrado y de uso exclusivo para la marca ****Fontawachi Instalaciones****.
