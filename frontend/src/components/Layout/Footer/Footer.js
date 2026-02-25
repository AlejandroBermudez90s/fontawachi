//import style from './Footer.module.css'
import Link from "next/link";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">

          {/* Columna 1: Logo y Descripción */}
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold text-primary mb-3">FONTAWACHI</h3>
            <p className="text-secondary">
              Especialistas en instalaciones de fontanería, climatización y calefacción.
              Comprometidos con la eficiencia energética y el confort de tu hogar.
            </p>
            <div className="d-flex gap-3 mt-4">
              {/* Iconos de redes sociales (puedes usar Bootstrap Icons) */}
              <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Navegación</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/" className="text-secondary text-decoration-none hover-white">Inicio</Link></li>
              <li className="mb-2"><Link href="#servicios" className="text-secondary text-decoration-none">Servicios</Link></li>
              <li className="mb-2"><Link href="#nosotros" className="text-secondary text-decoration-none">Sobre Nosotros</Link></li>
              <li className="mb-2"><Link href="#contacto" className="text-secondary text-decoration-none">Presupuesto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Servicios Destacados */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Servicios</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2 small">• Instalación de Aire Acondicionado</li>
              <li className="mb-2 small">• Fontanería Urgente 24h</li>
              <li className="mb-2 small">• Calderas y Calefacción</li>
              <li className="mb-2 small">• Mantenimiento de Aerotermia</li>
            </ul>
          </div>

          {/* Columna 4: Contacto Directo */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-geo-alt-fill text-primary me-2 mt-1"></i>
                <span className="text-secondary small">Calle Ejemplo 123, 28001 Madrid</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                <a href="tel:+34900000000" className="text-secondary text-decoration-none">+34 900 000 000</a>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                <a href="mailto:info@fontawachi.com" className="text-secondary text-decoration-none small">info@fontawachi.com</a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="my-4 border-secondary opacity-25" />

        {/* Copyright y Legal */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small text-secondary mb-0">
              © {currentYear} Fontawachi Instalaciones. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <Link href="/privacidad" className="small text-secondary text-decoration-none me-3">Aviso Legal</Link>
            <Link href="/cookies" className="small text-secondary text-decoration-none">Cookies</Link>
          </div>
        </div>
      </div>

      <style>{`
        .hover-white:hover { color: white !important; transition: 0.3s; }
      `}</style>
    </footer>
  )
}