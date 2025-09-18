import React from 'react';
import fondoN from '../assets/fondoN.jpg'; // tu banner superior
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';
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

const Soporte: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">

      {/* Banner Superior */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-sky-400 text-center z-10">
          <TextType
            text={['Soporte Técnico']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={['#38bdf8']}
          />
        </h1>
      </div>

      {/* Sección de Hosting y Dominio */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Asistencia Técnica Integral
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En <strong>Soluciones Integrales JB</strong>, brindamos un soporte técnico integral para garantizar el óptimo funcionamiento de tus sistemas. Nuestro equipo de expertos está disponible para resolver cualquier inconveniente técnico, ya sea relacionado con hardware o software, proporcionando soluciones rápidas y efectivas que minimizan el tiempo de inactividad. 
            </p>
            <p className="leading-relaxed text-justify">
              Nos comprometemos a mantener la continuidad operativa de tus sistemas tecnológicos, asegurando que tu negocio siga funcionando sin interrupciones. Confía en nosotros para gestionar y mantener tus infraestructuras tecnológicas de manera eficiente.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/800_imagen-1.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[500px] h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección Monitoreo */}
<section className="bg-neutral-800 py-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

    {/* Imágenes */}
    <motion.div
      className="md:w-1/2 flex flex-col gap-6 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/4051.jpg"
        alt="Imagen 1"
        className="rounded-lg shadow-md w-full max-w-[350px] mx-auto"
      />
      <img
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/images-4.jpg"
        alt="Imagen 2"
        className="rounded-lg shadow-md w-full max-w-[350px] mx-auto"
      />
    </motion.div>

    {/* Texto */}
    <motion.div
      className="md:w-1/2 text-white flex flex-col"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
        Monitoreo y Mantenimiento Proactivo
      </h2>
      <p className="mb-4 leading-relaxed text-justify">
        Nuestro servicio de soporte técnico va más allá de la simple resolución de problemas; incluye monitoreo y mantenimiento proactivo para anticiparnos a posibles fallos. Utilizamos herramientas avanzadas para supervisar tus sistemas en tiempo real, detectando cualquier irregularidad y aplicando ajustes preventivos para evitar interrupciones.
      </p>
      <p className="mb-6 leading-relaxed text-justify">
        Nos comprometemos a mantener tu infraestructura tecnológica en su mejor estado, asegurando un rendimiento óptimo y prolongando la vida útil de tus equipos, lo que se traduce en una mayor eficiencia operativa para tu negocio.
      </p>
      <div className="separator"></div>
      <a href="/contacto">
        <button className="solutions-contact-btn">CONTACTANOS</button>
      </a>
    </motion.div>
    
  </div>

</section>


      {/* Sección Remoto y On-Site */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Soporte Remoto y On-Site
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Ofrecemos soporte técnico tanto remoto como on-site, adaptándonos a las necesidades específicas de tu negocio. A través de nuestro soporte remoto, utilizamos herramientas avanzadas de acceso y diagnóstico en línea para resolver problemas de manera rápida y eficiente.
            </p>
            <p className="leading-relaxed text-justify">
              Cuando es necesario, enviamos técnicos calificados a tus instalaciones para realizar mantenimiento de computadoras de escritorio, portátiles, impresoras y otros equipos tecnológicos. Con nosotros, tienes la flexibilidad de recibir el soporte que necesitas, ya sea para solucionar problemas complejos o realizar mantenimientos programados.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/retrato-hombre-negocios-atractivo-30s-vistiendo-traje-telefono-movil-mientras-trabaja-computadora-oficina_171337-57902.jpg"
              alt="Soporte remoto"
              className="w-full max-w-[500px] h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección Consultoría */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Imagen */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-934.png"
              alt="Consultoría tecnológica"
              className="rounded-lg shadow-md w-full max-w-[500px]"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Consultoría y Asesoramiento Tecnológico
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Además de resolver problemas técnicos, proporcionamos consultoría y asesoramiento para optimizar tu infraestructura tecnológica. Evaluamos tus necesidades actuales y futuras, recomendando mejoras y actualizaciones que aumenten la eficiencia y la seguridad de tus sistemas. 
            </p>
            <p className="mb-6 leading-relaxed text-justify">
              Nuestro objetivo es ayudarte a tomar decisiones informadas sobre tus inversiones tecnológicas, asegurando que tu negocio esté preparado para crecer y adaptarse a las nuevas demandas del mercado.
            </p>
            <a href="/contacto">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                CONTACTAR
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-[#1e1e1e] to-[#2e1015] text-white rounded-tl-3xl rounded-tr-3xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Título */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-400">
              Opiniones de Nuestros <br /> Servicios Digitales
            </h2>
          </motion.div>

          {/* Carrusel */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
                    <p className="mb-4 text-base md:text-lg">"{testimonio.opinion}"</p>
                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={testimonio.imagen}
                        alt={testimonio.nombre}
                        className="w-10 h-10 rounded-full border-2 border-blue-400"
                      />
                      <span className="font-semibold text-sm">{testimonio.nombre}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <ScrollButton />
        </div>
      </section>

    </div>
  );
};

export default Soporte;
