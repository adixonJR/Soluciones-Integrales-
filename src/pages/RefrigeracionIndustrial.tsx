import React from 'react';
import fondoN from '../assets/fondoN.jpg'; // tu banner superior
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "framer-motion"; 
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

const RefrigeracionIndustrial: React.FC = () => {
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
                            text={['Refrigeración Industrial']}
                            typingSpeed={70}
                            pauseDuration={2000}
                            loop={false}
                            showCursor={false}
                            textColors={['#38bdf8']}
                          />
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
              Soluciones Personalizadas de Refrigeración Industrial
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos soluciones de refrigeración industrial adaptadas a las necesidades específicas de tu empresa. Nuestro enfoque personalizado incluye el diseño, instalación y mantenimiento de sistemas de refrigeración que garantizan la eficiencia energética y la seguridad operativa. Nos especializamos en optimizar el rendimiento de tus equipos, asegurando un ambiente de trabajo seguro y productivo para tu personal.
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
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/2148921408.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="bg-neutral-800 py-20 px-6 md:px-16">
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
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/2149250244.jpg"
              alt="Imagen 1"
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
              Instalación Avanzada y Mantenimiento Proactivo
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Contamos con un equipo técnico altamente capacitado para la instalación avanzada y el mantenimiento proactivo de sistemas de refrigeración industrial. Realizamos inspecciones regulares y ajustes preventivos para maximizar la fiabilidad y durabilidad de tus equipos. Este enfoque no solo reduce costos operativos a largo plazo, sino que también minimiza el riesgo de interrupciones no planificadas, garantizando la continuidad en tus procesos productivos.
            </p>
            <a href="/contacto">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          CONTÁCTANOS
        </button>
      </a>
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
              Nos comprometemos a cumplir con las normativas de seguridad y medioambientales aplicables a los sistemas de refrigeración industrial. Nuestros servicios cumplen con los estándares más rigurosos, garantizando la seguridad de tus operaciones y la protección del medio ambiente. Este compromiso con el cumplimiento normativo fortalece la reputación de tu empresa como líder en prácticas responsables y seguras, atrayendo a clientes que valoran la conformidad legal y la gestión responsable.
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
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/hombre-tiro-medio-que-trabaja-herramienta_23-2148921405.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Cuarta sección */}
      <section className="bg-white py-20 px-6 md:px-16">
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
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/gerente-empresa-tiene-planes-proyecto-mientras-habla-trabajador-manual-afroamericano-que-senala-algo-fabrica_637285-4115.jpg"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          {/* Texto a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-gray-800"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Asesoramiento en Eficiencia Energética y Sostenibilidad
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Ofrecemos asesoramiento especializado en eficiencia energética y sostenibilidad para optimizar el consumo de energía de tus sistemas de refrigeración industrial. Analizamos el rendimiento energético de tus equipos, identificamos áreas de mejora y recomendamos soluciones que reduzcan costos operativos y minimicen el impacto ambiental. Este enfoque no solo optimiza tus recursos, sino que también fortalece la imagen de tu empresa como un líder en innovación y responsabilidad ambiental.
            </p>
           <a href="/contacto">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          CONTACTAR
        </button>
      </a>
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
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default RefrigeracionIndustrial;
