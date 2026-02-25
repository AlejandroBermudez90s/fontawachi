"use client";

import style from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3 ${style.navbarCentered}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary fs-3" href="/">
          FONTAWACHI
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${style.navCollapse}`} id="navbarNav">
          <ul className={`navbar-nav gap-3 ${style.navList}`}>
            <li className="nav-item">
              <Link className={`nav-link fw-semibold ${style.navLink}`} href="/">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className={`nav-link dropdown-toggle fw-semibold ${style.navLink}`} 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul className="dropdown-menu shadow border-0" aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" href="/servicios/fontaneria">Fontanería</Link></li>
                <li><Link className="dropdown-item" href="/servicios/climatizacion">Climatización</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/servicios/urgencias">Urgencias 24h</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className={`nav-link fw-semibold ${style.navLink}`} href="/nosotros">Nosotros</Link>
            </li>
            
            <li className={`nav-item ${style.contactItem}`}>
              <a className="btn btn-primary fw-bold px-4 shadow-sm" href="#contacto">
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
