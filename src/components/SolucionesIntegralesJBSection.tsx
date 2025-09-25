import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollButton from "../components/ScrollButton";
import '../App.css'
import LogoLoop from "./LogoLoop";
import VoiceflowChat from "./VoiceflowChat";

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


// ---- Types ----
interface Service {
  title: string;
  label: string;
  image: string;
  imageAlt: string;
  cta: string;
  href?: string;
}

interface Feature {
  title: string;
  text: string;
  as?: "h3" | "h4";
}

interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
}

interface ClientLogo {
  src: string;
  alt: string;
}

interface HeroSlide {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  href?: string;
}

interface Props {
  className?: string;
}

// ---- Data ----
const heroSlides: HeroSlide[] = [
    { image: "https://img.freepik.com/vector-premium/fondo-banner-azul-marino-oscuro-plantilla-fondo-patron-banner-diseno-grafico-abstracto-vector_181182-18817.jpg", imageAlt: "Promoción de routers y conectividad", title: "Conectividad Superior", subtitle: "Routers de alta velocidad para tu hogar y oficina", href: "#" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCnsm9J7wUIodn531mcr04n2CLAjRkG8yvw&s", imageAlt: "Servicios de tecnología", title: "Soluciones Tecnológicas", subtitle: "Innovación y soporte a tu alcance", href: "#" },
    { image: "https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617553_960_720.jpg", imageAlt: "Banner de tecnología", title: "Tu Socio Estratégico", subtitle: "Impulsamos tu crecimiento digital", href: "#" },
    { image: "https://img.freepik.com/premium-vector/modern-blue-abstract-background-banner-wave-blue-abstract-banner-design-background_181182-28890.jpg", imageAlt: "Fondo abstracto azul", title: "Diseño y Desarrollo", subtitle: "Creamos experiencias únicas para tus usuarios", href: "#" },
    { image: "https://i.pinimg.com/originals/3b/20/bf/3b20bf22bd77577f9881becd558eccf5.jpg", imageAlt: "Redes y seguridad", title: "Seguridad Garantizada", subtitle: "Protegemos lo que más importa", href: "#" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKI86JmEHMBOtHzCh2TC4rSSlkNovG-7XNQrwODBsDn0Y_MVqUxUtby9nXjBbAk64Igdc&usqp=CAU", imageAlt: "Soporte técnico", title: "Soporte 24/7", subtitle: "Estamos aquí para ayudarte cuando nos necesites", href: "#" },
    { image: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Diseño-sin-título-5.png", imageAlt: "Integración de sistemas", title: "Integración Sin Esfuerzo", subtitle: "Conectamos tus sistemas para una operación fluida", href: "#" },
];

const responsiveServices = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2, slidesToSlide: 2 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
};

const heroResponsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const strategicServices: Service[] = [
  { label: "Servicios", title: "Desarrollo de Software", image: "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/mejores-herramientas-desarrollo-software-1-400x267.png", imageAlt: "Herramientas de desarrollo de software", cta: "INFORMACIÓN" },
  { label: "Servicios", title: "Facturación Electrónica", image: "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/s3-blog-facturacion-electronica-min-400x256.png", imageAlt: "Facturación electrónica", cta: "INFORMACIÓN" },
  { label: "Servicios", title: "Soporte Técnico", image: "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/Soporte-en-Sitio-¿Que-es-eso-copia.webp", imageAlt: "Soporte en sitio", cta: "INFORMACIÓN" },
  { label: "Servicios", title: "Tecnología en Seguridad", image: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/tecnologia-seguridad-1-768x512.jpg", imageAlt: "Tecnología y seguridad", cta: "INFORMACIÓN" }
];

const features: Feature[] = [
  { title: "Soluciones a Medida", text: "Desarrollamos software a la medida de tus necesidades. Adaptado específicamente para ti.", as: "h3" },
  { title: "Altamente Escalable", text: "Nuestras soluciones crecen sin problemas con tu negocio. Adaptación sin límites.", as: "h3" },
  { title: "Diseño UX / UI", text: "Creamos interfaces intuitivas que encantan a los usuarios y mejora la experiencia de tu cliente.", as: "h3" },
  { title: "Procesos Optimizados", text: "Automatizamos tareas y operaciones para mejorar la productividad y reducir costos.", as: "h3" },
  { title: "Calidad Garantizada", text: "Aseguramos un rendimiento confiable y duradero para tu negocio. con los más altos estándares.", as: "h3" },
  { title: "Soporte Técnico", text: "Ofrecemos asistencia continua para mantener tu software al día siempre estamos aquí para ayudarte.", as: "h3" },
];

const testimonials: Testimonial[] = [
    { name: "Italo romero", avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-1.png", quote: "Buen servicio de sitios web, excelente diseño y experiencia." },
    { name: "William Moises", avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-2.png", quote: "Buen lugar donde te ofrecen de todo en tecnología informática y de cyber vigilancia." },
    { name: "Fritzl Yacomin", avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed.png", quote: "Excelente atención, realmente muy profesionales en su trato y servicio." },
    { name: "Marielis Baptista", avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-3.png", quote: "Excelentes los productos y trato para los clientes, lo recomiendo totalmente." },
    { name: "Ana montes", avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-4.png", quote: "Muy buen servicio de parte de los empleados y cómo atienden y ayudan." },
];

const clientLogos = [
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-5.svg", alt: "Cliente 1", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-4.svg", alt: "Cliente 2", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-1-1.svg", alt: "Cliente 3", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-7.svg", alt: "Cliente 4", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-10.svg", alt: "Cliente 5", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-3.svg", alt: "Cliente 6", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-9.svg", alt: "Cliente 7", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-11.svg", alt: "Cliente 8", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-12.svg", alt: "Cliente 9", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-6.svg", alt: "Cliente 10", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-18.svg", alt: "Cliente 11", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-19.svg", alt: "Cliente 12", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-8.svg", alt: "Cliente 13", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-15.svg", alt: "Cliente 14", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-13.svg", alt: "Cliente 15", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-14.svg", alt: "Cliente 16", href: "#" },
];


const uiImage = "https://solucionesintegralesjb.com/wp-content/uploads/elementor/thumbs/Frame-932-qqow7tfd3r2zohqj4jx9yf23tmjv30p5niiolmvipc.png";
const videoUrl = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/ES-1.mp4";
const videoPoster = "https://solucionesintegralesjb.com/wp-content/uploads/2024/11/logo-cubo.png";

const StrategicServiceCard: React.FC<{ item: Service }> = ({ item }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 group text-white mx-2 cursor-pointer">
      <img
        src={item.image}
        alt={item.imageAlt}
        className="absolute w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <p className="bg-white/90 text-black text-xs font-bold px-3 py-1 rounded-full self-start mb-2">
          {item.label}
        </p>
        <h3 className="text-5xl font-bold leading-tight text-white text-shadow-lg">
          {item.title}
        </h3>
        <a
          href={item.href || "#"}
          className="mt-5 text-sm font-bold rounded-full px-6 py-3 text-center self-start shadow-lg
                     bg-blue-600 text-white
                     transition-all duration-300 ease-out
                     opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                     hover:bg-blue-500"
        >
          {item.cta}
        </a>
      </div>
    </div>
  );
};

const FeatureBlock: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Tag = feature.as || "h3";
  return (
    <div>
      <Tag className="text-lg font-bold text-blue-600">{feature.title}</Tag>
      <p className="text-sm text-gray-600 leading-relaxed mt-2">{feature.text}</p>
    </div>
  );
};

const SolucionesIntegralesJBSection: React.FC<Props> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={"w-full " + (className || "")}>
      <div className="w-full mb-10">
        <Carousel responsive={heroResponsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true} showDots={true} arrows={true} containerClass="carousel-container" dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative w-full h-80 md:h-96 text-white">
              <img src={slide.image} alt={slide.imageAlt} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide">{slide.title}</motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-4 text-sm md:text-lg font-semibold tracking-wider">{slide.subtitle}</motion.p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="bg-black w-full px-6 py-10">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold tracking-wide text-cyan-400">Soluciones Integrales para Impulsar tu Negocio</h2>
          <p className="mt-2 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Soluciones Estratégicas para Crecer</p>
        </div>
        <Carousel responsive={responsiveServices} infinite={true} autoPlay={true} autoPlaySpeed={4000} keyBoardControl={true} showDots={true} arrows={true} containerClass="carousel-container" itemClass="p-2">
          {strategicServices.map((s, idx) => (<StrategicServiceCard key={`${s.title}-${idx}`} item={s} />))}
        </Carousel>
      </div>


<div className="mx-auto max-w-6xl px-4 py-10">
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="italic font-semibold text-center text-blue-400"
  >
    Lo que te ofrecemos para potenciar tu éxito digital
  </motion.p>

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    className="text-2xl md:text-3xl font-bold text-center text-gray-800"
  >
    Características de Soluciones Integrales JB
  </motion.h2>

  {/* Grid responsive */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
    {/* Bloques Izquierda */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2 },
        },
      }}
      viewport={{ once: true }}
      className="space-y-8 text-right md:text-left lg:text-right"
    >
      {features.slice(0, 3).map((f, idx) => (
        <motion.div
          key={`${f.title}-${idx}`}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <FeatureBlock feature={f} />
        </motion.div>
      ))}
    </motion.div>

    {/* Imagen central */}
    <motion.img
      src={uiImage}
      alt="Diseño web profesional en teléfono"
      className="w-40 sm:w-56 md:w-64 mx-auto rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    />

    {/* Bloques Derecha */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2 },
        },
      }}
      viewport={{ once: true }}
      className="space-y-8 text-left"
    >
      {features.slice(3, 6).map((f, idx) => (
        <motion.div
          key={`${f.title}-${idx}`}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6 }}
        >
          <FeatureBlock feature={f} />
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>

      
      {/* ====================== SECCIÓN DE VIDEO CON NUEVO DISEÑO ====================== */}
      <section className="bg-neutral-800 text-white py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna del Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-start w-full relative"
          >
            {/* Contenedor con altura fija para el video */}
            <div className="w-full rounded-xl shadow-lg overflow-hidden" style={{ minHeight: '380px', maxHeight: '500px' }}>
              <video
                className="w-full h-full object-cover" // object-cover para que el video se adapte y cubra el contenedor
                src={videoUrl}
                controls
                preload="metadata"
                poster={videoPoster}
              />
            </div>
          </motion.div>

          {/* Columna del Texto */}
          <div className="text-gray-300">
             <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="italic text-cyan-400"
             >
                Transformando Ideas en Soluciones Integrales
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 mt-2"
            >
              Soluciones Digitales Personalizadas
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-base leading-relaxed"
            >
              Sumérgete en nuestro enfoque colaborativo para desarrollar 
              soluciones digitales únicas. Desde la concepción hasta la 
              implementación, estamos aquí para hacer realidad tus visiones 
              digitales y mejorar tu estrategia empresarial con nosotros.
            </motion.p>
          </div>
        </div>
      </section>

       {/* ====================== SECCIÓN DE OPINIONES CON CARRUSEL MEJORADO ====================== */}
       <section className="bg-slate-800 text-white py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
              Opiniones de Nuestros
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mt-2">
              Servicio digital
            </h2>
          </motion.div>

          {/* Carrusel de Comentarios (diseño mejorado) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl relative overflow-hidden h-[250px] md:h-[220px] flex items-center justify-center"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full px-8 transition-opacity duration-700 ease-in-out ${
                  currentIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <p className="text-lg text-gray-300 mb-6 italic min-h-[100px] md:min-h-[80px]">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-blue-400" />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Paginación */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === index ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                ></button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     <div className="bg-neutral-800 text-white py-24 px-4 md:px-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white mb-2">Nuestros clientes</h2>
    <p className="text-gray-400 text-lg">
      Las marcas que confían en Soluciones Integrales JB
    </p>

    {/* Contenedor del carrusel */}
    <div className="relative w-full mt-12">
      <div className="h-32 md:h-40 overflow-hidden">
       <LogoLoop
  logos={clientLogos}
  speed={100}
  direction="left"
  logoHeight={60}
  gap={40}
  pauseOnHover
  scaleOnHover
  ariaLabel="Technology partners"
  fadeOut
  fadeOutColor="#262626"
/>

      </div>
      <div className="h-32 md:h-40 overflow-hidden">
       <LogoLoop
  logos={clientLogos}
  speed={100}
  direction="right"
  logoHeight={60}
  gap={40}
  pauseOnHover
  scaleOnHover
  ariaLabel="Technology partners"
  fadeOut
  fadeOutColor="#262626"
/>
      </div>

</div>
 <VoiceflowChat />
          <ScrollButton />
          
        </div>
      </div>
    </section>
  );
};

export default SolucionesIntegralesJBSection;