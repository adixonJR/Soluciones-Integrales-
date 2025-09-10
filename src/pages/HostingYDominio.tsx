import React from 'react';
import fondoN from '../assets/fondoN.jpg'; // tu banner superior
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css/autoplay'; 
import 'swiper/css';
import 'swiper/css/pagination';
import ScrollButton from "../components/ScrollButton";

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

const HostingYDominio: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">

      {/* Banner Superior */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center z-10">
          Hosting y Dominio
        </h1>
      </div>

      {/* Sección de Hosting y Dominio */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Hosting Seguro y Confiable
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos servicios de hosting seguro y confiable para tu sitio web. Nuestros servidores de alta velocidad garantizan que tu página esté siempre accesible y funcione sin problemas. Con una infraestructura robusta y medidas avanzadas de seguridad, protegemos tus datos y aseguramos el rendimiento óptimo de tu sitio. Confía en nosotros para mantener tu presencia en línea activa y segura.
            </p>

          </div>

          {/* Imagen */}
          <div className="md:w-1/2">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Cloud-hosting-amico.svg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Imágenes a la izquierda */}
    <div className="md:w-1/2 flex flex-col gap-6">
      <img
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-940.svg"
        alt="Imagen 1"
        className="rounded-lg shadow-md w-full"
      />
    </div>


    {/* Texto a la derecha */}
    <div className="md:w-1/2 text-white">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
        Registro de Dominios Personalizados
      </h2>
      <p className="mb-4 leading-relaxed text-justify">
        Nuestro servicio de registro de dominios personalizados te permite obtener la dirección web perfecta para tu negocio. Ya sea que necesites un dominio .com, .pe o cualquier otra extensión, estamos aquí para ayudarte a encontrar y registrar el dominio ideal que represente tu marca.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
        CONTÁCTANOS
      </button>
    </div>

  </div>
</section>


 <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Planes de Hosting Escalables
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos una amplia gama de planes de hosting escalables, diseñados para ajustarse a las necesidades específicas de tu negocio. Ya sea que estés iniciando con una solución básica para pequeñas empresas o necesites un plan avanzado para gestionar sitios web de alto tráfico, tenemos la opción ideal para ti.
            </p>
            <p className="leading-relaxed text-justify">
             A medida que tu negocio crece, nuestros servicios se adaptan, garantizando el espacio, rendimiento y recursos necesarios para acompañar tu expansión en línea, permitiéndote enfocarte en tu éxito sin preocuparte por limitaciones tecnológicas.
            </p>
          </div>

          {/* Imagen */}
          <div className="md:w-1/2">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Server-amico.svg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </div>
        </div>
      </section>


      <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Imágenes a la izquierda */}
    <div className="md:w-1/2 flex flex-col gap-6">
      <img
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-941.svg"
        alt="Imagen 1"
        className="rounded-lg shadow-md w-full"
      />

    </div>

    {/* Texto a la derecha */}
    <div className="md:w-1/2 text-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
           Soporte Técnico 24/7
      </h2>
      <p className="mb-4 leading-relaxed text-justify">
        En Soluciones Integrales JB, ofrecemos un soporte técnico disponible las 24 horas, los 7 días de la semana, para asistirte con cualquier aspecto relacionado con tu hosting y dominio. Nos especializamos en la venta de hosting y dominios, transferencia de dominios, y la configuración de correo electrónico en la nube, asegurando que tus servicios digitales estén siempre en funcionamiento.
      </p>
      <p className="leading-relaxed text-justify mb-6">
       Además, implementamos certificados digitales SSL para proteger tu página web, y certificados digitales para correo electrónico, garantizando la seguridad en todas tus comunicaciones. Ya sea que necesites ayuda con la configuración inicial, resolver problemas técnicos o cualquier otra consulta, estamos aquí para asegurarnos de que tu sitio web y servicios tecnológicos funcionen de manera óptima, adaptándonos a las demandas de la era digital.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
        CONTACTAR
      </button>
    </div>
      </div>
</section>
<section className="py-20 px-4 sm:px-10 bg-gradient-to-b from-[#1e1e1e] to-[#2e1015] text-white rounded-tl-3xl rounded-tr-3xl">
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
    loop={true} // loop infinito
    autoplay={{
      delay: 3000, // tiempo en ms entre slides (3 segundos)
      disableOnInteraction: false, // que no se detenga al interactuar
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
</div>
<ScrollButton />
  </div>
</section>

</div>
  );
};

export default HostingYDominio;
