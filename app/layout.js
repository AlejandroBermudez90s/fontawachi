import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'Fontawachi Instalaciones | Energía Solar, Climatización y Fontanería en Mazarrón',
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${geist.className} ${geistMono.className} font-sans antialiased`}>
        {children}
        
        {/* Analytics solo se ejecuta en producción para no ensuciar datos de desarrollo */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}