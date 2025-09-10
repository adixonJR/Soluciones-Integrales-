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

const FacturacionElectronica: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">

      {/* Banner Superior */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center z-10">
          Facturación Electrónica
        </h1>
      </div>

      {/* Sección de Facturación Electrónica */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Automatiza tu Proceso de Facturación
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nuestro servicio de Facturación Electrónica te permite automatizar todo el proceso de facturación, desde la emisión hasta el almacenamiento de documentos, simplificando así la gestión financiera de tu empresa. Este sistema no solo optimiza el tiempo y reduce errores, sino que también garantiza la seguridad y confidencialidad de la información.
            </p>
            <p className="leading-relaxed text-justify">
              Con integración directa a SUNAT, nuestro software asegura que todas tus facturas cumplan con las regulaciones fiscales vigentes en Perú, facilitando el cumplimiento de tus obligaciones tributarias. Además, el sistema está diseñado para adaptarse a las necesidades de empresas de diversos tamaños, brindándote flexibilidad y escalabilidad a medida que tu negocio crece.
            </p>
          </div>

          {/* Imagen */}
          <div className="md:w-1/2">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/2150062347.jpg"
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
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/2148938351.jpg"
        alt="Imagen 1"
        className="rounded-lg shadow-md w-full"
      />
      <img
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/personnel-officer-2-450x253-1.jpg"
        alt="Imagen 2"
        className="rounded-lg shadow-md w-full"
      />
    </div>

    {/* Texto a la derecha */}
    <div className="md:w-1/2 text-gray-800">
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
    </div>

  </div>
</section>


 <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Acceso y Control desde Cualquier Lugar
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Con nuestro software, puedes acceder a tus facturas electrónicas y gestionar tus operaciones desde cualquier lugar y en cualquier momento, garantizando la seguridad de tus datos. La plataforma en la nube te permite monitorear y controlar tus facturas en tiempo real desde cualquier dispositivo, ya sea una computadora, tablet o smartphone.
            </p>
            <p className="leading-relaxed text-justify">
             Esto no solo aumenta la eficiencia, sino que también te brinda la flexibilidad necesaria para adaptarte rápidamente a las necesidades de tu negocio, asegurando que siempre estés en control, sin importar dónde te encuentres. Además, las actualizaciones automáticas te aseguran que siempre estarás utilizando la última tecnología sin complicaciones adicionales.
            </p>
          </div>

          {/* Imagen */}
          <div className="md:w-1/2">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/700a3e638490cb4d215f4b94405c40d1.jpg"
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
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/El-nuevo-programa-cooperativo-de-cumplimiento-fiscal-en-Ecuador.jpg"
        alt="Imagen 1"
        className="rounded-lg shadow-md w-full"
      />

    </div>

    {/* Texto a la derecha */}
    <div className="md:w-1/2 text-gray-800">
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
  <ScrollButton />
</div>
  </div>
</section>

</div>
  );
};

export default FacturacionElectronica;
