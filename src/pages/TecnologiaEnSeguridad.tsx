import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../tecnologia.css';

const TecnologiaEnSeguridad: React.FC = () => {
  // Estado para el carrusel de testimonios
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Datos de testimonios
  const testimonials = [
    {
      name: "Leonardo",
      text: "El equipo entendió perfectamente nuestras necesidades y creó un sitio web funcional y atractivo. ¡Estamos encantados!"
    },
    {
      name: "Naomi Sifuentes",
      text: "La experiencia de usuario mejoró significativamente desde que rediseñaron nuestro sitio. Excelente trabajo."
    },
    {
      name: "María Torres",
      text: "Muy profesionalismo y rapidez nos impresionaron. El nuevo diseño ha atraído más clientes."
    },
    {
      name: "Juan Delprado",
      text: "Transformaron nuestra visión en realidad con un sitio web moderno y eficiente. ¡Totalmente recomendados!"
    }
  ];

  // Efecto para cambiar automáticamente los testimonios cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="tecnologia-seguridad-page">

      {/* Sección 1: Encabezado con migas de pan */}
      <section className="page-header">
        <div className="container">
          <h1>Tecnología en Seguridad</h1>
          <nav className="breadcrumb">
            <Link to="/">Inicio</Link> / Tecnología en Seguridad
          </nav>
        </div>
      </section>

      {/* Sección 2: Protección Total */}
      <section className="protection-section">
        <div className="container">
          <h2>Protección Total para tu Hogar y Negocio</h2>
          <p>
            En nuestro servicio de <strong>Tecnología en Seguridad</strong>, ofrecemos <strong>soluciones integrales</strong> para proteger lo que más te importa. Contamos con una amplia gama de productos de última generación, que incluyen:
          </p>
          <div className="features-grid">
            <div className="feature">
              <h3>Cámaras de vigilancia de alta definición</h3>
              <p>Para una supervisión detallada de cada rincón de tu propiedad.</p>
            </div>
            <div className="feature">
              <h3>Sistemas avanzados de monitoreo</h3>
              <p>Diseñados para ofrecer seguridad constante y cobertura total, las 24 horas del día, los 7 días de la semana.</p>
            </div>
          </div>
          <p className="trust-text">Confía en nosotros para mantener lo que más valoras seguro.</p>
        </div>
      </section>

      {/* Sección 3: Soluciones Personalizadas */}
      <section className="solutions-section">
        <div className="container">
          <h2>Soluciones Personalizadas para Cada Cliente</h2>
          <p>
            Entendemos que cada cliente tiene necesidades de seguridad únicas. Por eso, ofrecemos soluciones personalizadas que se adaptan a tus requisitos específicos. Ya sea que necesites un sistema de vigilancia para tu hogar, una solución integral para tu negocio o seguridad para un evento especial, estamos aquí para diseñar y entregar la mejor opción para ti.
          </p>
          <p>
            Nuestro equipo de expertos trabajará contigo para evaluar tus necesidades y proporcionarte un sistema de seguridad que te brinde tranquilidad y protección efectiva.
          </p>
          <button className="contact-btn">CONTACTANOS</button>
        </div>
      </section>

      {/* Sección 4: Tecnología de Vanguardia */}
      <section className="technology-section">
        <div className="container">
          <h2>Tecnología de Vanguardia en Seguridad</h2>
          <p>
            Nos mantenemos a la vanguardia en tecnología de seguridad para ofrecerle las soluciones más avanzadas del mercado. Contamos con una amplia gama de productos de última generación, como las <strong>cámaras Hilwision ColorVu Bullet FULL HD</strong>, que proporcionan una vigilancia de alta calidad con características avanzadas.
          </p>
        </div>
      </section>

      {/* Sección 5: Servicio y Soporte Técnico */}
      <section className="service-section">
        <div className="container">
          <h2>Servicio y Soporte Técnico Impecables</h2>
          <p>
            No solo vendemos equipos de seguridad; ofrecemos un servicio integral que cubre todas tus necesidades de protección. Desde cámaras de vigilancia de alta definición con visión nocturna hasta sistemas de monitoreo avanzados con alertas en tiempo real, nuestros productos están diseñados para ofrecer una cobertura total y una vigilancia constante.
          </p>
          <p>
            Lo que realmente nos distingue es nuestro compromiso con el servicio y el soporte técnico. Nuestro equipo de expertos se encarga de cada detalle, desde la instalación inicial hasta el mantenimiento regular y las actualizaciones necesarias para mantener tu sistema al día con las últimas tecnologías.
          </p>
          <p>
            Ofrecemos asistencia técnica 24/7, siempre disponibles para resolver cualquier problema o realizar ajustes para asegurar que tu sistema funcione de manera óptima.
          </p>
          <p>
            Tu seguridad es nuestra máxima prioridad, y estamos comprometidos a brindar un servicio excepcional que garantice la protección continua de tus propiedades. Con nosotros, obtienes más que equipos de seguridad; obtienes tranquilidad y la confianza de saber que estás protegido en todo momento.
          </p>
          <button className="contact-btn">CONTACTAR</button>
        </div>
      </section>

      {/* Sección 6: Opiniones de clientes */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Opiniones de Nuestro Servicio Digital</h2>
          <div className="testimonial-container">
            <div className="testimonial">
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <p className="testimonial-author">- {testimonials[currentTestimonial].name}</p>
            </div>
            <div className="testimonial-controls">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`control-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Mostrar testimonio ${index + 1}`}
                >
                  •
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TecnologiaEnSeguridad;
