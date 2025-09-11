import React from 'react';
import fondoN from '../assets/fondoN.jpg'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay'; 
import 'swiper/css';
import 'swiper/css/pagination';
import ScrollButton from "../components/ScrollButton";
import { motion } from "framer-motion";

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

const PosicionamientoSEO: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">

      {/* Banner Superior */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative text-4xl md:text-5xl font-bold text-white text-center z-10"
        >
          Posicionamiento SEO
        </motion.h1>
      </div>

      {/* Sección de Optimización SEO Fundamental */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 text-gray-800"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">   
              Optimización SEO Fundamental
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos servicios de SEO básico diseñados para mejorar la visibilidad orgánica de tu sitio web. Implementamos prácticas clave de optimización, como la investigación de palabras clave estratégicas para tu sector y la optimización de meta tags y descripciones. Nos aseguramos de que tu sitio siga las directrices más recientes de los motores de búsqueda, facilitando una indexación efectiva y un mejor posicionamiento en los resultados de búsqueda.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2"
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/seo.94e1f354aed0.svg"
              alt="Optimización SEO"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Mejora de la Estructura del Sitio */}
      <section className="bg-black py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 flex flex-col gap-6"
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/disenadora-web-femenina-papeles-notas-oficina_23-2149749879.jpg"
              alt="Mejora de la estructura"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Mejora de la Estructura del Sitio
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nuestro enfoque también se centra en optimizar la estructura del sitio, asegurando una navegación intuitiva y accesible tanto para los usuarios como para los motores de búsqueda. Mejoramos la arquitectura de enlaces internos para garantizar una distribución eficaz de la autoridad y facilitar el acceso al contenido.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              CONTÁCTANOS
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contenido Optimizado */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 text-gray-800"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Contenido Optimizado
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Desarrollamos estrategias de contenido optimizado que conectan de manera efectiva con tu audiencia objetivo y mejoran tu posicionamiento SEO.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2"
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/medium.avif"
              alt="Contenido optimizado"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Reportes y Seguimiento */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 flex flex-col gap-6"
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/optimizacion-motores-busqueda-seo-concepto-digital-internet_53876-138498.avif"
              alt="Reportes y seguimiento"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 text-gray-800"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Reportes y Seguimiento de Resultados
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Ofrecemos reportes detallados y un seguimiento exhaustivo de los resultados para que puedas evaluar el impacto de nuestras estrategias de SEO.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              CONTACTAR
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Opiniones */}
      <section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-[#1e1e1e] to-[#2e1015] text-white rounded-tl-3xl rounded-tr-3xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-400">
              Opiniones de Nuestros <br /> Servicio digital
            </h2>
          </motion.div>

          {/* Carrusel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2"
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
            <ScrollButton />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PosicionamientoSEO;
