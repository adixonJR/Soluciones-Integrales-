import React from 'react';
import fondoN from '../assets/fondoN.jpg'; // tu banner superior
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css/autoplay'; 
import 'swiper/css';
import 'swiper/css/pagination';
import ScrollButton from "../components/ScrollButton";
import { motion } from "framer-motion";
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

const InstalacionesElectricas: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">

      {/* Banner Superior */}
      <motion.div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}

      >
        <div className="absolute inset-0 bg-cyan bg-opacity-50"></div>
         <h1 className="text-4xl md:text-6xl font-bold text-sky-400">
                                  <TextType
                                    text={['Instalaciones Eléctricas']}
                                    typingSpeed={70}
                                    pauseDuration={2000}
                                    loop={false}
                                    showCursor={false}
                                    textColors={['#38bdf8']}
                                  />
                                  </h1>
      </motion.div>

      {/* Sección de Hosting y Dominio */}
      <motion.section
        className="bg-white py-20 px-6 md:px-16"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">   
              Diseño y Ejecución de Instalaciones Eléctricas
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
             En Soluciones Integrales JB, ofrecemos servicios completos de diseño y ejecución de instalaciones eléctricas, adaptados a las necesidades específicas de tu empresa. Desde la planificación inicial hasta la implementación y pruebas finales, nos aseguramos de que cada instalación cumpla con los más altos estándares de calidad y seguridad, garantizando operaciones sin problemas y confiables.
            </p>
          </div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/tecnico-electrico-que-parece-concentrado-mientras-trabaja-cuadro-distribucion-fusibles_169016-24151.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Soluciones Personalizadas */}
      <motion.section
        className="bg-neutral-800 py-20 px-6 md:px-16"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imágenes a la izquierda */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/dos-ingenieros-constructores-hablando-sitio-construccion-ingeniero-explicando-dibujo-trabajador_169016-12057.jpg"
              alt="Imagen 1"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          {/* Texto a la derecha */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Soluciones Personalizadas y Eficientes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nos especializamos en proporcionar soluciones eléctricas personalizadas que optimizan el rendimiento y la eficiencia energética de tus instalaciones. Nuestro enfoque se centra en la adaptabilidad y la innovación, utilizando tecnologías avanzadas para maximizar el uso de recursos y reducir costos operativos a largo plazo.
            </p>
            <a href="/contacto">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          CONTÁCTANOS
        </button>
      </a>
          </div>
        </div>
      </motion.section>

      {/* Mantenimiento */}
      <motion.section
        className="bg-white py-20 px-6 md:px-16"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Mantenimiento Preventivo y Correctivo
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Ofrecemos programas de mantenimiento preventivo y servicios correctivos para asegurar el funcionamiento continuo y seguro de tus instalaciones eléctricas. Nuestro equipo técnico altamente capacitado realiza inspecciones regulares y pruebas exhaustivas para detectar y resolver problemas antes de que afecten la productividad y seguridad de tu empresa.
            </p>
          </div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/hombre-tecnico-electrico-que-trabaja-centralita-fusibles-instalacion-conexion-equipos-electricos_169016-5080.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Cumplimiento Normativo */}
      <motion.section
        className="bg-white py-20 px-6 md:px-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imágenes a la izquierda */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/hombre-tecnico-electrico-que-trabaja-centralita-fusibles-instalacion-conexion-equipos-electricos_169016-5078.jpg"
              alt="Imagen 1"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          {/* Texto a la derecha */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Cumplimiento Normativo y Seguridad
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nos comprometemos a cumplir con todas las normativas eléctricas y de seguridad vigentes, garantizando que cada instalación cumpla con los requisitos legales y de seguridad más estrictos. Esto no solo protege tus activos y personal, sino que también fortalece la reputación de tu empresa como un operador comprometido con prácticas seguras y responsables.
            </p>
            <a href="/contacto">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          CONTACTAR
        </button>
      </a>
          </div>
        </div>
      </motion.section>

      {/* Opiniones */}
      <motion.section
        className="py-20 px-4 sm:px-10 bg-gradient-to-b from-[#1e1e1e] to-[#2e1015] text-white rounded-tl-3xl rounded-tr-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Título a la izquierda */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-400">
              Opiniones de Nuestros <br /> Servicio digital
            </h2>
          </div>

          {/* Carrusel a la derecha */}
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
                    className="bg-black bg-opacity-90 text-white rounded-xl p-6 shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
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
          </div>
        </div>

        {/* Scroll Button con animación */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ScrollButton />
        </motion.div>
      </motion.section>

    </div>
  );
};

export default InstalacionesElectricas;
