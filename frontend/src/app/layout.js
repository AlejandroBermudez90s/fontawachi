// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// Estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '@/components/Bootstrap/BootstrapClient';

import Cabecera from '@/components/Layout/Header/Header'
import Footer from '@/components/Layout/Footer/Footer';
import Navbar from '@/components/Layout/Navbar/Navbar';

export const metadata = {
  title: "FontaWachi Instalaciones",
  description: "Servicios profesionales de climatización, energía solar y fontanería",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient/>

        <Navbar/>
        <Cabecera/>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
