import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'Fontawachi Instalaciones',
  description: 'Servicios profesionales de energía solar, aire acondicionado, calderas, sistemas de presión de agua, instalaciones fotovoltaicas y fontanería en Mazarrón, Murcia.',
  icons: {
    icon: [
      {
        url: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Fontawachi Instalaciones',
    description: 'Servicios profesionales de energía solar, aire acondicionado, aerotermia, calderas, sistemas de presión de agua, instalaciones fotovoltaicas y fontanería en Mazarrón, Murcia.',
    url: 'https://www.fontawachi.com',
    siteName: 'Fontawachi Instalaciones',
    images: [
      {
        url: '/images/hero-image.webp', // ← pon aquí el nombre de tu imagen
        width: 1200,
        height: 630,
        alt: 'Fontawachi Instalaciones - Mazarrón, Murcia',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${geist.className} ${geistMono.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}