import React from "react";
import { motion } from "framer-motion";
// ---- Types ----
interface Service {
  title: string;
  label: string; // "Servicios" or similar
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
  text: string;
}

interface ClientLogo {
  src: string;
  alt: string;
}

interface Props {
  className?: string;
}

// ---- Data (from your snippet) ----
const badges = [
  { label: "Confianza", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Velocidad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Calidad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Seguridad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Soporte", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Personalizado", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
];

const servicesTop: Service[] = [
  {
    label: "Servicios",
    title: "Desarrollo de Software",
    image:
      "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/mejores-herramientas-desarrollo-software-1-400x267.png",
    imageAlt: "Herramientas de desarrollo de software",
    cta: "Información",
  },
  {
    label: "Servicios",
    title: "Facturacion Electronica",
    image:
      "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/s3-blog-facturacion-electronica-min-400x256.png",
    imageAlt: "Facturación electrónica",
    cta: "Información",
  },
  {
    label: "Servicios",
    title: "Soporte Técnico",
    image:
      "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/Soporte-en-Sitio-¿Que-es-eso-copia.webp",
    imageAlt: "Soporte en sitio",
    cta: "INFORMACION",
  },
];

const servicesBottom: Service[] = [
  {
    label: "Servícios",
    title: "Tecnlogía en Seguridad",
    image:
      "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/DALL·E-2024-10-17-23.00.55-A-darker-modern-technology-security-concept-image-showing-a-network-of-interconnected-devices-data-servers-and-cloud-services-protected-by-digital-l-300x300.webp",
    imageAlt: "Tecnología en seguridad (concepto)",
    cta: "INFORMACION",
  },
  {
    label: "Servicios",
    title: "Tecnología en Seguridad",
    image:
      "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/tecnologia-seguridad-1-768x512.jpg",
    imageAlt: "Cámaras y seguridad",
    cta: "Información",
  },
  {
    label: "Servicios",
    title: "Soporte Técnico",
    image:
      "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/Soporte-en-Sitio-¿Que-es-eso-copia-400x267.webp",
    imageAlt: "Soporte técnico",
    cta: "Información",
  },
];

const features: Feature[] = [
  { title: "Soluciones a Medida", text: "Desarrollamos software a la medida de tus necesidades. Adaptado específicamente para ti.", as: "h3" },
  { title: "Altamente Escalable", text: "Nuestras soluciones crecen sin problemas con tu negocio. Adaptación sin límites.", as: "h3" },
  { title: "Diseño UX / UI", text: "Creamos interfaces intuitivas que encantan a los usuarios y mejora la experiencia de tu cliente.", as: "h3" },
  { title: "Procesos Optimizados", text: "Automatizamos tareas y operaciones para mejorar la productividad y reducir costos.", as: "h3" },
  { title: "Calidad Garantizada", text: "Aseguramos un rendimiento confiable y duradero para tu negocio. con los más altos estándares.", as: "h3" },
  { title: "Soporte Técnico", text: "Ofrecemos asistencia continua para mantener tu software al día siempre estamos aquí para ayudarte.", as: "h3" },
  // Repetidos como h4
  { title: "Soluciones a Medida", text: "Desarrollamos software a la medida de tus necesidades. Adaptado específicamente.", as: "h4" },
  { title: "Altamente Escalable", text: "Nuestras soluciones crecen sin problemas con tu negocio. Adaptación sin límites.", as: "h4" },
  { title: "Diseño UX / UI", text: "Interfaces intuitivas que encantan a los usuarios y mejora la experiencia de tu cliente.", as: "h4" },
  { title: "Procesos Optimizados", text: "Automatizamos tareas y operaciones para mejorar la productividad y reducir costos.", as: "h4" },
  { title: "Calidad Garantizada", text: "Aseguramos un rendimiento confiable y duradero para tu negocio. con los más altos estándares.", as: "h4" },
  { title: "Soporte Técnico", text: "Ofrecemos asistencia continua para mantener tu software al día siempre estamos aquí para ayudarte.", as: "h4" },
];

const testimonials: Testimonial[] = [
  {
    name: "Italo romero",
    avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-1.png",
    text: "buen servicio de sitios web excelente servicio diseño y experiencia",
  },
  {
    name: "William Moises",
    avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-2.png",
    text: "Buen lugar donde te ofrecen de todo en tecnología informática y de cyber vigilancia.",
  },
  {
    name: "Fritzl Yacomin",
    avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed.png",
    text: "Excelente atención, realmente muy profesionales en su trato y servicio.",
  },
  {
    name: "Marielis Baptista",
    avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-3.png",
    text: "Excelente los productos y trato para los clientes y lo recomiendo totalmente",
  },
  {
    name: "Ana montes",
    avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-4.png",
    text: "Muy buen servicios de parte de los empleados y como atienden y ayudan",
  },
];

const clients: ClientLogo[] = [
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-5.svg", alt: "Frame 394-modified (5)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-4.svg", alt: "Frame 394-modified (4)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-1-1.svg", alt: "Frame 394-modified (1)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-7.svg", alt: "Frame 394-modified (7)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-10.svg", alt: "Frame 394-modified (10)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-3.svg", alt: "Frame 394-modified (3)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-9.svg", alt: "Frame 394-modified (9)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-11.svg", alt: "Frame 394-modified (11)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-12.svg", alt: "Frame 394-modified (12)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-2.svg", alt: "Frame 394-modified (2)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-6.svg", alt: "Frame 394-modified (6)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-18.svg", alt: "Frame 394-modified (18)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-16.svg", alt: "Frame 394-modified (16)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-19.svg", alt: "Frame 394-modified (19)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-8.svg", alt: "Frame 394-modified (8)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-17.svg", alt: "Frame 394-modified (17)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-15.svg", alt: "Frame 394-modified (15)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-13.svg", alt: "Frame 394-modified (13)" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-14.svg", alt: "Frame 394-modified (14)" },
];

const heroImage = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/Frame-907-1.png";
const heroImageAlt = "Soluciones Integrales JB para impulsar tu negocio";
const uiImage = "https://solucionesintegralesjb.com/wp-content/uploads/elementor/thumbs/Frame-932-qqow7tfd3r2zohqj4jx9yf23tmjv30p5niiolmvipc.png";
const mockupImage = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/MacBook-Pro-and-iPhone-15-Pro-Mockup-768x787.png";
const videoUrl = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/ES-1.mp4";

// ---- Component ----
const Badge: React.FC<{ label: string; icon: string }>
  = ({ label, icon }) => (
  <div className="flex items-center gap-2 py-1">
    <img src={icon} alt="check icon" className="h-6 w-6" />
    <span className="text-sm sm:text-base">{label}</span>
  </div>
);

const ServiceCard: React.FC<{ item: Service }>
  = ({ item }) => (
  <div className="rounded-2xl border bg-white shadow-sm overflow-hidden hover:shadow-md transition">
    <img src={item.image} alt={item.imageAlt} className="w-full h-48 object-cover" />
    <div className="p-4">
      <p className="text-xs uppercase tracking-wide text-gray-500">{item.label}</p>
      <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
      <a
        href={item.href || "#"}
        className="inline-block mt-3 text-sm font-medium underline decoration-2 underline-offset-4"
        aria-label={`${item.cta} sobre ${item.title}`}
      >
        {item.cta}
      </a>
    </div>
  </div>
);

const FeatureBlock: React.FC<{ feature: Feature }>
  = ({ feature }) => {
  const Tag = feature.as || "h3";
  return (
    <div className="space-y-1">
      <Tag className="text-lg font-semibold">{feature.title}</Tag>
      <p className="text-sm text-gray-700">{feature.text}</p>
    </div>
  );
};

const TestimonialCard: React.FC<{ t: Testimonial }>
  = ({ t }) => (
  <div className="rounded-2xl border bg-white p-4 shadow-sm flex gap-3 items-start">
    <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
    <div>
      <p className="font-semibold leading-tight">{t.name}</p>
      <p className="text-sm text-gray-700">{t.text}</p>
    </div>
  </div>
);

const SolucionesIntegralesJBSection: React.FC<Props> = ({ className }) => {
  return (
    <section className={"w-full " + (className || "")}>      
      {/* CARRUSEL */}
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        
      </div>

   {/* Soluciones Estratégicas para Crecer */}
<div className="bg-black w-full px-6 py-10">
  <p className="text-sm uppercase tracking-wider text-cyan-400 font-semibold">
    Soluciones Integrales para Impulsa tu Negocio
  </p>
  <h2 className="text-3xl font-bold text-white">
    Soluciones Estratégicas para Crecer
  </h2>

  {/* Contenedor con paginación */}
  <div className="mt-6">
    {(() => {
      const [index, setIndex] = React.useState(0);
      const itemsPerPage = 2;

      const handleNext = () => {
        if (index + itemsPerPage < servicesTop.length) {
          setIndex(index + itemsPerPage);
        }
      };

      const handlePrev = () => {
        if (index - itemsPerPage >= 0) {
          setIndex(index - itemsPerPage);
        }
      };

      const visibleItems = servicesTop.slice(index, index + itemsPerPage);

      return (
        <>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleItems.map((s) => (
              <ServiceCard key={s.title} item={s} />
            ))}
          </div>

          {/* Botones navegación */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="px-4 py-2 bg-cyan-600 text-white rounded-lg disabled:opacity-40"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={index + itemsPerPage >= servicesTop.length}
              className="px-4 py-2 bg-cyan-600 text-white rounded-lg disabled:opacity-40"
            >
              Siguiente
            </button>
          </div>
        </>
      );
    })()}
  </div>
</div>


{/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
{/* Features con imagen centrada */}
<div className="mx-auto max-w-6xl px-4 py-10">
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="italic font-semibold text-center"
  >
    Lo que te ofrecemos para potenciar tu éxito digital
  </motion.p>

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center"
  >
    Características de Soluciones Integrales JB
  </motion.h2>

  {/* Contenedor general */}
  <div className="mt-10 grid lg:grid-cols-3 gap-6 items-center">
    {/* Columna izquierda con 3 características */}
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
      className="space-y-6"
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

    {/* Imagen en el centro más pequeña */}
    <motion.img
      src={uiImage}
      alt="Diseño web profesional"
      className="w-64 mx-auto rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    />

    {/* Columna derecha con 3 características */}
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
      className="space-y-6"
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
{/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

      {/* Video + Texto duplicado */}
<div className="bg-black w-full">
  <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
    <div className="space-y-4">
      <p className="text-sm uppercase tracking-wider text-cyan-400 font-semibold">
        Transformando Ideas en Soluciones Integrales
      </p>
      <h2 className="text-3xl font-bold text-white">
        Soluciones Digitales Personalizadas
      </h2>
      <p className="text-gray-300">
        Sumérgete en nuestro enfoque colaborativo para desarrollar soluciones
        digitales únicas. Desde la concepción hasta la implementación, estamos
        aquí para hacer realidad tus visiones digitales y mejorar tu estrategia
        empresarial con nosotros <span className="text-cyan-400">Soluciones Integrales JB</span>.
      </p>
    </div>
    <video
      className="w-full rounded-2xl shadow-lg"
      src={videoUrl}
      controls
      preload="metadata"
    />
  </div>
</div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* Testimonials */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-bold">Que dicen de nosotros</h2>
        <p className="text-gray-700">Opiniones Auténticas que Avalan la Calidad y Rendimiento de Nuestros servicios.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* Clients */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-3xl font-bold">Nuestros clientes</h2>
        <p className="text-gray-700">Las marcas que confían en Soluciones Integrales JB</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
          {clients.map((c, idx) => (
            <div key={idx} className="p-4 rounded-xl border bg-white flex items-center justify-center">
              <img src={c.src} alt={c.alt} className="max-h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolucionesIntegralesJBSection;
