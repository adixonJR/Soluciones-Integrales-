import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../tecnologia.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";




const testimonios = [
  {
    nombre: 'Maria Torres',
    imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
    opinion: 'Muy profesionalismo y rapidez nos impresionaron. El nuevo diseño ha atraído más clientes.',
  },
  {
    nombre: 'Carlos Gómez',
    imagen: 'https://randomuser.me/api/portraits/men/32.jpg',
    opinion: 'La integración fue muy sencilla. En pocos días ya estábamos facturando sin problemas.',
  },
  {
    nombre: 'Laura Ramírez',
    imagen: 'https://randomuser.me/api/portraits/women/55.jpg',
    opinion: 'El soporte técnico es excelente. Siempre disponibles para ayudarnos cuando lo necesitamos.',
  },
];


const TecnologiaEnSeguridad: React.FC = () => {
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonios.length]);

  return (
    <div className="tecnologia-seguridad-page">
      <section className="page-header">
        <div className="rrelative z-20 flex flex-col items-center justify-center text-center px-4">
                
                  <h1 className="text-4xl md:text-6xl font-bold text-sky-400">
                  <TextType
                    text={['Tecnología en Seguridad']}
                    typingSpeed={70}
                    pauseDuration={2000}
                    loop={false}
                    showCursor={false}
                    textColors={['#38bdf8']}
                  />
                  </h1>
                
                
                 <span className="mt-2 text-sm md:text-base font-semibold tracking-wider text-gray-300">
                            Inicio / Tecnología en Seguridad
                          </span>
                </div>
      </section>

      <section className="protection-section">
        <div className="container">
          <div className="protection-content">
            <div className="protection-text-container">
              <div className="protection-text">
                <h2 className="protection-title">Protección Total para tu Hogar y Negocio</h2>
                <p className="protection-description">
                  En nuestro servicio de <strong>Tecnología en Seguridad</strong>, ofrecemos <strong>soluciones integrales</strong> para proteger lo que más te importa. Contamos con una amplia gama de productos de última generación, que incluyen:
                </p>
                
                <p className="protection-features">
                  <strong>Cámaras de vigilancia de alta definición</strong>: Para una supervisión detallada de cada rincón de tu propiedad. <strong>Sistemas avanzados de monitoreo</strong>: Diseñados para ofrecer seguridad constante y cobertura total, las 24 horas del día, los 7 días de la semana.
                </p>
                
                <p className="protection-trust">
                  Confía en nosotros para mantener lo que más valoras seguro.
                </p>
              </div>
            </div>
            
            <div className="protection-image">
              <img 
                src="https://i.postimg.cc/jj5zw3TN/primera.jpg" 
                alt="Profesional de seguridad trabajando" 
                className="person-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-image">
              <img 
                src="https://i.postimg.cc/sD6JsGbw/image2.jpg" 
                alt="Soluciones personalizadas de seguridad" 
                className="solutions-img"
              />
            </div>
            
            <div className="solutions-text-container">
              <div className="solutions-text">
                <h2 className="solutions-title">Soluciones Personalizadas para Cada Cliente</h2>
                <p className="solutions-description">
                  Entendemos que cada cliente tiene necesidades de seguridad únicas. Por eso, ofrecemos soluciones personalizadas que se adaptan a tus requisitos específicos. Ya sea que necesites un sistema de vigilancia para tu hogar, una solución integral para tu negocio o seguridad para un evento especial, estamos aquí para diseñar y entregar la mejor opción para ti.  
                  Nuestro equipo de expertos trabajará contigo para evaluar tus necesidades y proporcionarte un sistema de seguridad que te brinde tranquilidad y protección efectiva.
                </p>
                
                <div className="separator"></div>
                
                <button className="solutions-contact-btn">CONTACTANOS</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-section">
        <div className="container">
          <div className="technology-content">
            <div className="technology-text">
              <h2>Tecnología de Vanguardia en Seguridad</h2>
              <p className="technology-description">
                Nos mantenemos a la vanguardia en tecnología de seguridad para ofrecerte las soluciones más avanzadas del mercado. Contamos con una amplia gama de productos de última generación, como las <strong>cámaras Hikvision ColorVu Bullet FULL HD</strong>, que proporcionan una vigilancia de alta calidad con características avanzadas, incluyendo:
              </p>
              
              <p className="technology-feature">
                <strong>Tipo de tarjeta:</strong> Asegúrate de que tu tarjeta BCCP sea una tarjeta de crédito o débito internacional (Visa o Mastercard), ya que Discord generalmente acepta estas tarjetas.
              </p>
              
              <p className="technology-feature">
                <strong>Restricciones del banco:</strong> Algunos bancos tienen restricciones para transacciones internacionales o en línea. Puedes verificar con el BCCP si tu tarjeta está habilitada para compras internacionales y en línea.
              </p>
            </div>
            
            <div className="technology-image">
              <img 
                src="https://i.postimg.cc/HLrqm73g/image3.jpg" 
                alt="Cámara de seguridad de vanguardia" 
                className="camera-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="service-content">
            <div className="service-images">
              <img 
                src="https://i.postimg.cc/d18SQRyz/image4.jpg" 
                alt="Servicio técnico especializado" 
                className="service-image-top"
              />
              <img 
                src="https://i.postimg.cc/Wbt6X64T/image5.jpg" 
                alt="Soporte técnico 24/7" 
                className="service-image-bottom"
              />
            </div>
            
            <div className="service-text">
              <h2>Servicio y Soporte Técnico Impecables</h2>
              <p className="service-description">
                No solo vendemos equipos de seguridad; ofrecemos un servicio integral que cubre todas tus necesidades de protección. Desde cámaras de vigilancia de alta definición con visión nocturna hasta sistemas de monitoreo avanzados con alertas en tiempo real, nuestros productos están diseñados para ofrecer una cobertura total y una vigilancia constante.
              </p>
              <p className="service-description">
                Lo que realmente nos distingue es nuestro compromiso con el servicio y el soporte técnico. Nuestro equipo de expertos se encarga de cada detalle, desde la instalación inicial hasta el mantenimiento regular y las actualizaciones necesarias para mantener tu sistema al día con las últimas tecnologías. Ofrecemos asistencia técnica 24/7, siempre disponibles para resolver cualquier problema o realizar ajustes para asegurar que tu sistema funcione de manera óptima.
              </p>
              <p className="service-description">
                Tu seguridad es nuestra máxima prioridad, y estamos comprometidos a brindar un servicio excepcional que garantice la protección continua de tus propiedades. Con nosotros, obtienes más que equipos de seguridad; obtienes tranquilidad y la confianza de saber que estás protegido en todo momento.
              </p>
              <button className="solutions-contact-btn">CONTACTAR</button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Opiniones de Nuestro Servicio Digital
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {testimonios.map((testimonio, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-black bg-opacity-90 text-white rounded-xl p-6 shadow-lg">
                    <p className="mb-4 text-lg italic">"{testimonio.opinion}"</p>
                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={testimonio.imagen}
                        alt={testimonio.nombre}
                        className="w-10 h-10 rounded-full border-2 border-blue-400"
                      />
                      <span className="font-semibold text-sm">
                        {testimonio.nombre}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
         <ScrollButton />
      </div>
    </section>
    </div>
  );
};

export default TecnologiaEnSeguridad;