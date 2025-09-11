import React from "react";
import fondoN from "../assets/fondoN.jpg"; // tu banner superior
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // 🔹 Animaciones
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";

// Variantes para animaciones
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const testimonios = [
  {
    nombre: "Maria Torres",
    imagen: "https://randomuser.me/api/portraits/women/44.jpg",
    opinion:
      "Muy profesionalismo y rapidez nos impresionaron. El nuevo diseño ha atraído más clientes.",
  },
  {
    nombre: "Carlos Gómez",
    imagen: "https://randomuser.me/api/portraits/men/32.jpg",
    opinion:
      "La integración fue muy sencilla. En pocos días ya estábamos facturando sin problemas.",
  },
  {
    nombre: "Laura Ramírez",
    imagen: "https://randomuser.me/api/portraits/women/55.jpg",
    opinion:
      "El soporte técnico es excelente. Siempre disponibles para ayudarnos cuando lo necesitamos.",
  },
];

const RedesEinfroestructura: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* Banner Superior */}
      <motion.div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
        
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-sky-400 text-center z-10">
          <TextType
            text={["Redes e Infraestructura"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={["#38bdf8"]}
          />
        </h1>
      </motion.div>

      {/* Sección de Hosting y Dominio */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Diseño e Implementación de Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, nos especializamos en el diseño e
              implementación de redes que priorizan tanto la eficiencia como la
              seguridad. Ya sea que necesites una red local para tu oficina o
              una infraestructura avanzada que conecte múltiples ubicaciones,
              nuestro equipo de expertos posee la experiencia y el conocimiento
              para desarrollar soluciones personalizadas que se ajusten a tus
              necesidades específicas.
            </p>
            <p className="mb-4 leading-relaxed text-justify">
              Nos enfocamos en cada detalle, desde la planificación y
              configuración inicial hasta el mantenimiento continuo,
              garantizando que tu red esté optimizada para ofrecer un
              rendimiento máximo. Además, implementamos las mejores prácticas en
              seguridad para proteger tus datos y mantener la integridad de la
              comunicación dentro de tu organización.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/ingenieros-redes-tableta-tiro-medio_23-2148323447.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[600px] rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Optimización y Mantenimiento */}
      <section className="bg-black py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imágenes */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/Mantenimiento-de-redes.jpg"
              alt="Imagen 1"
              className="rounded-lg shadow-md w-full"
            />
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/joven-sosteniendo-interruptores-ethernet-cables_23-2148323476.jpg"
              alt="Imagen 2"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Optimización y Mantenimiento de Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos servicios de optimización y
              mantenimiento de redes diseñados para garantizar que tu
              infraestructura opere de manera eficiente en todo momento.
            </p>
            <p className="mb-4 leading-relaxed text-justify">
              Implementamos un enfoque proactivo con mantenimiento preventivo y
              actualizaciones regulares, asegurando que tu red se mantenga en su
              mejor estado y funcione de manera óptima.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              CONTÁCTANOS
            </button>
          </motion.div>
        </div>
      </section>

      {/* Seguridad en Redes */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Seguridad en Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Implementamos firewalls, detección de intrusos y cifrado para
              asegurar tu infraestructura contra amenazas externas e internas.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/images-2.jpg"
              alt="Seguridad"
              className="w-full max-w-[600px] rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Consultoría */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/diversos-ingenieros-hombres-mujeres-discutiendo-sobre-tableta-digital-sala-servidores-computadoras-concepto-gestion-mantenimiento-servidor-bases-datos_13339-326644.jpg"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Consultoría en Infraestructura
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nuestro servicio de consultoría en infraestructura está diseñado
              para asistirte en la planificación y ejecución de proyectos de
              redes.
            </p>
            <p className="mb-4 leading-relaxed text-justify">
              Realizamos un análisis detallado y te ofrecemos soluciones
              personalizadas que optimizan tu infraestructura actual mientras
              preparan tu red para el futuro.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              CONTACTAR
            </button>
          </motion.div>
        </div>
      </section>

      {/* Opiniones */}
      <section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-[#1e1e1e] to-[#2e1015] text-white rounded-tl-3xl rounded-tr-3xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-400">
              Opiniones de Nuestros <br /> Servicio digital
            </h2>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
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
                    <p className="mb-4 text-base md:text-lg">
                      "{testimonio.opinion}"
                    </p>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RedesEinfroestructura;
