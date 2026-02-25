import styles from './Home.module.css'

export default function Home () {

  return (
    <>
      <section className="py-5 bg-light" id="servicios">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary">Nuestros Servicios</h2>
            <p className="lead text-muted">Soluciones integrales para climatización y fontanería</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="text-primary mb-3"><i className="bi bi-thermometer-snow fs-1"></i></div>
                <h3 className="h4">Aire Acondicionado</h3>
                <p className="text-secondary">Instalación y mantenimiento de sistemas split, conductos y cassettes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="text-primary mb-3"><i className="bi bi-droplet-fill fs-1"></i></div>
                <h3 className="h4">Fontanería</h3>
                <p className="text-secondary">Reparaciones de urgencia, termos eléctricos y grupos de presión.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="text-primary mb-3"><i className="bi bi-house-check fs-1"></i></div>
                <h3 className="h4">Calefacción</h3>
                <p className="text-secondary">Especialistas en calderas gasoil y sistemas de calefacción central.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner de Acción Rápida */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">¿Tienes una avería urgente?</h2>
          <p className="mb-4">Atendemos avisos de fontanería y clima en menos de 24h.</p>
          <a href="tel:+34000000000" className="btn btn-light btn-lg fw-bold px-5">LLAMAR AHORA</a>
        </div>
      </section>
    </>
  )
}