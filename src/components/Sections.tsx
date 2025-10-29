import React, { useState, useEffect } from 'react'

type Section = 'bienvenida' | 'quienes' | 'que-vendemos' | 'contacto'

export default function Sections({ activeSection, onChange }:{ activeSection: Section, onChange: (s: Section) => void }){
  const [showGmail, setShowGmail] = useState(false)

  useEffect(() => {
    // Scroll to top when section changes (imitando comportamiento original)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeSection])

  return (
    <main>
      <section id="bienvenida" className={`section-card ${activeSection === 'bienvenida' ? 'show' : 'hidden'}`}>
        <h2 className="title">Te damos la bienvenida a Eco Print</h2>
        <p className="lead">En Eco Print transformamos la forma de crear y aprender con una impresora que combina ingenio, sostenibilidad y arte. Cada línea que dibuja impulsa la imaginación y el cuidado del planeta.</p>
        <button className="btn" onClick={() => onChange('quienes')}>Conoce más</button>
      </section>

      <section id="quienes" className={`section-card ${activeSection === 'quienes' ? 'show' : 'hidden'}`}>
        <h2 className="title">¿Quiénes somos?</h2>
        <p className="lead">Somos Eco Print, desarrollamos tecnología sostenible. Combinamos innovación, programación y conciencia ambiental para crear soluciones que promuevan el aprendizaje y el cuidado del planeta. Nuestro proyecto es una máquina que escribe, dibuja y delinea sin tinta, utilizando materiales ecológicos y reciclables, y funciona con lápices.</p>
        <p className="lead">Queremos demostrar que la tecnología puede ser útil y respetuosa con el medio ambiente, fomentando una educación creativa y responsable.</p>
        <img src="Captura de pantalla 2025-10-28 181422.png" alt="Organigrama Eco Print" className="org-img" />
        <button className="btn" onClick={() => onChange('que-vendemos')}>Ver productos</button>
      </section>

      <section id="que-vendemos" className={`section-card ${activeSection === 'que-vendemos' ? 'show' : 'hidden'}`}>
        <h2 className="title">Qué vendemos</h2>
        <p className="lead"><strong>Eco Print</strong> apuesta por la innovación y la sostenibilidad. Nuestra principal creación es una <strong>impresora ecológica con funcionamiento a lápiz</strong>, diseñada para reemplazar la tinta convencional por materiales más sostenibles como lápices o marcadores.</p>
        <p className="lead">Este sistema único permite <strong>dibujar, escribir y delinear automáticamente</strong>, combinando la precisión tecnológica de una impresora moderna con el toque artístico y consciente del trabajo manual.</p>
        <p className="lead">Gracias a esta idea, reducimos el impacto ambiental generado por los residuos de tinta y promovemos una alternativa educativa, creativa y respetuosa con el planeta.</p>
        <button className="btn" onClick={() => onChange('contacto')}>Contáctanos</button>
      </section>

      <section id="contacto" className={`section-card ${activeSection === 'contacto' ? 'show' : 'hidden'}`}>
        <h2 className="title">Contacto</h2>
        <p className="lead">Conéctate con nosotros a través de nuestras redes sociales o escribe al correo. Aquí tienes los enlaces directos:</p>
        <div className="social-row">
          <a className="social-item" href="https://www.instagram.com/eco_print11?igsh=MWhiYXZyNmU0YWo5Zg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram Eco Print" />
            <div className="social-label">Instagram</div>
          </a>
          <a className="social-item" href="https://www.facebook.com/share/1HsP1VNHYh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook Eco Print" />
            <div className="social-label">Facebook</div>
          </a>

          <div className="social-item" id="gmail-wrap" onClick={() => setShowGmail(s => !s)} style={{cursor: 'pointer'}}>
            <img id="gmail-icon" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail Eco Print" />
            <div className="social-label">Gmail</div>
            <div id="gmail-address" className="gmail-address" style={{display: showGmail ? 'block' : 'none'}}>ecoprint219@gmail.com</div>
          </div>
        </div>
      </section>
    </main>
  )
}
