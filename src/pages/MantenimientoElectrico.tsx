import React from 'react';
import fondoN from '../assets/fondoN.jpg'; // tu banner superior
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css/autoplay'; 
import 'swiper/css';
import 'swiper/css/pagination';
import ScrollButton from "../components/ScrollButton";
import { motion } from "framer-motion"; // 👈 agregado

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
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-cyan bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-sky-400 text-center z-10">
          Mantenimiento Eléctrico
        </h1>
      </motion.div>

      {/* Sección de Hosting y Dominio */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-gray-800"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">   
             Servicios de Mantenimiento
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
             En Soluciones Integrales JB, ofrecemos servicios de mantenimiento eléctrico preventivo especializados para empresas que buscan asegurar la fiabilidad y eficiencia de sus sistemas. Nuestro enfoque se centra en la detección proactiva de problemas, mediante inspecciones regulares y pruebas de funcionamiento. Esto no solo minimiza riesgos de averías costosas, sino que también mejora la durabilidad de las instalaciones eléctricas, beneficiando así el rendimiento operativo y reduciendo tiempos de inactividad imprevistos.
            </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                CONTÁCTANOS
              </button>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/15085.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="bg-black py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
          {/* Imágenes a la izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col gap-6"
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/5077.jpg"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          {/* Texto a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
             Reparaciones y Soluciones Rápidas
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
             En Soluciones Integrales JB, ofrecemos servicios de mantenimiento eléctrico preventivo especializados para empresas que buscan asegurar la fiabilidad y eficiencia de sus sistemas. Nuestro enfoque se centra en la detección proactiva de problemas, mediante inspecciones regulares y pruebas de funcionamiento. Esto no solo minimiza riesgos de averías costosas, sino que también mejora la durabilidad de las instalaciones eléctricas, beneficiando así el rendimiento operativo y reduciendo tiempos de inactividad imprevistos.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              CONTÁCTANOS
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tercera sección */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-gray-800"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Cumplimiento Normativo y Seguridad
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
             Nos comprometemos a cumplir con las normativas eléctricas vigentes, garantizando que todas las actividades de mantenimiento estén alineadas con los estándares de seguridad. Esto no solo protege tus activos y personal, sino que también refuerza la reputación de tu empresa como operador comprometido con prácticas seguras y responsables. Además, la transparencia en el cumplimiento normativo fortalece la credibilidad online, mejorando la percepción de marca y atrayendo a clientes que valoran la seguridad y el cumplimiento legal.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/6115.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Opiniones */}
      <section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-[#1e1e1e] to-[#2e1015] text-white rounded-tl-3xl rounded-tr-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Título */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-400">
              Opiniones de Nuestros <br /> Servicio digital
            </h2>
          </div>

          {/* Carrusel */}
          <div className="md:w-1/2">
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
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-black bg-opacity-90 text-white rounded-xl p-6 shadow-lg"
                  >
                    <p className="mb-4 text-base md:text-lg">"{testimonio.opinion}"</p>
                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={testimonio.imagen}
                        alt={testimonio.nombre}
                        className="w-10 h-10 rounded-full border-2 border-blue-400"
                      />
                      <span className="font-semibold text-sm">{testimonio.nombre}</span>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <ScrollButton />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PosicionamientoSEO;
