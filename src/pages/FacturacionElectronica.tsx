import React from 'react';
import fondoN from '../assets/fondoN.jpg'; // tu banner superior
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";
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

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const FacturacionElectronica: React.FC = () => {
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
            text={['Facturación Electrónica']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={['#38bdf8']}
          />
        </h1>
      </div>

      {/* Sección 1 */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 text-gray-800"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Automatiza tu Proceso de Facturación
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nuestro servicio de Facturación Electrónica te permite automatizar todo el proceso de facturación, desde la emisión hasta el almacenamiento de documentos, simplificando así la gestión financiera de tu empresa. Este sistema no solo optimiza el tiempo y reduce errores, sino que también garantiza la seguridad y confidencialidad de la información.
            </p>
            <p className="leading-relaxed text-justify">
              Con integración directa a SUNAT, nuestro software asegura que todas tus facturas cumplan con las regulaciones fiscales vigentes en Perú, facilitando el cumplimiento de tus obligaciones tributarias. Además, el sistema está diseñado para adaptarse a las necesidades de empresas de diversos tamaños, brindándote flexibilidad y escalabilidad a medida que tu negocio crece.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/2150062347.jpg"
              alt="Automatización"
              className="w-full max-w-[500px] h-auto rounded-lg shadow-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/2148938351.jpg"
              alt="Integración 1"
              className="rounded-lg shadow-md w-full max-w-[450px] mx-auto"
            />
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/personnel-officer-2-450x253-1.jpg"
              alt="Integración 2"
              className="rounded-lg shadow-md w-full max-w-[450px] mx-auto"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-gray-800"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Integración Fácil y Rápida
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nuestro sistema de Facturación Electrónica se integra fácilmente con tus sistemas existentes, facilitando una transición sin problemas. Ya sea que utilices un ERP, un sistema de contabilidad específico o cualquier otra plataforma, nuestra solución se adapta a tus necesidades.
            </p>
            <p className="leading-relaxed text-justify mb-6">
              La integración es rápida y sencilla, permitiéndote comenzar a emitir facturas electrónicas en poco tiempo. Además, ofrecemos soporte técnico para garantizar una implementación exitosa y sin complicaciones.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              CONTÁCTANOS
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sección 3 */}
<section className="bg-neutral-900 py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
    
    {/* Texto */}
    <motion.div
      className="md:w-1/2 text-white"
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6"> Acceso y Control desde Cualquier Lugar </h2>

      <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
        Con nuestro software, puedes acceder a tus facturas electrónicas y gestionar tus operaciones 
        desde cualquier lugar y en cualquier momento, garantizando la seguridad de tus datos. 
        La plataforma en la nube te permite monitorear y controlar tus facturas en tiempo real 
        desde cualquier dispositivo: computadora, tablet o smartphone.
      </p>

      <p className="text-lg md:text-xl leading-relaxed text-gray-300">
        Esto no solo aumenta la eficiencia, sino que también te brinda la flexibilidad necesaria 
        para adaptarte rápidamente a las necesidades de tu negocio. Además, las actualizaciones 
        automáticas aseguran que siempre cuentes con la última tecnología sin complicaciones.
      </p>

      <div className="separator"></div>
    </motion.div>

    {/* Imagen */}
    <motion.div
      className="md:w-1/2 flex justify-center"
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/700a3e638490cb4d215f4b94405c40d1.jpg"
        alt="Acceso remoto"
        className="w-full max-w-[550px] h-auto rounded-2xl shadow-2xl border-4 border-blue-600"
      />
    </motion.div>
  </div>
</section>


      {/* Sección 4 */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/El-nuevo-programa-cooperativo-de-cumplimiento-fiscal-en-Ecuador.jpg"
              alt="Cumplimiento fiscal"
              className="rounded-lg shadow-md w-full max-w-[500px] mx-auto"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-gray-800"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Cumplimiento Fiscal Garantizado
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Por eso, nuestro software de Facturación Electrónica está meticulosamente diseñado para garantizar que todas tus transacciones sean registradas y reportadas conforme a los estrictos requerimientos de la SUNAT.
            </p>
            <p className="leading-relaxed text-justify mb-6">
              Con actualizaciones automáticas que incorporan los últimos cambios en las normativas fiscales, puedes estar seguro de que siempre cumplirás con la ley sin necesidad de preocuparte por ajustes manuales o errores. Nuestra plataforma te permite mantener tu negocio al día con total confianza, ofreciendo soluciones confiables y seguras que no solo protegen la integridad de tus operaciones, sino que también te ayudan a evitar sanciones innecesarias. Al optar por nuestras soluciones, te aseguras de que tu negocio esté siempre en plena conformidad, permitiéndote concentrarte en lo que realmente importa: el crecimiento y éxito de tu empresa.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              CONTACTAR
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sección Testimonios */}
      <section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-[#1e1e1e] to-[#2e1015] text-white rounded-tl-3xl rounded-tr-3xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-400">
              Opiniones de Nuestros <br /> Servicio digital
            </h2>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
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
            <ScrollButton />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FacturacionElectronica;
