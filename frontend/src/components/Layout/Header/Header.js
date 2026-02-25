import style from './Header.module.css'

export default function Header() {

  return (
    <header className="position-relative overflow-hidden vh-100 d-flex align-items-center bg-dark text-white">
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url("/tu-imagen-instalacion.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.4'
        }}
      ></div>

      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-8">
            <span className="badge bg-primary mb-3 px-3 py-2 text-uppercase">Instaladores Autorizados</span>
            <h1 className="display-2 fw-extrabold mb-4">
              Fontawachi <span className="text-primary">Instalaciones</span>
            </h1>
            <p className="lead mb-5 fs-4 text-light">
              Garantizamos el confort de tu hogar con soluciones eficientes de climatización, energía solar y Aerotermia.
            </p>
            <div className="d-grid d-md-flex gap-3">
              <button className="btn btn-primary btn-lg px-4 py-3 fw-bold">SOLICITAR PRESUPUESTO</button>
              <button className="btn btn-outline-light btn-lg px-4 py-3">SABER MÁS</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
