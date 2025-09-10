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

const RedesEinfroestructura: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">

      {/* Banner Superior */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center z-10">
          Redes e Infraestructura
        </h1>
      </div>

      {/* Sección de Hosting y Dominio */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">   
              Diseño e Implementación de Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
             En Soluciones Integrales JB, nos especializamos en el diseño e implementación de redes que priorizan tanto la eficiencia como la seguridad. Ya sea que necesites una red local para tu oficina o una infraestructura avanzada que conecte múltiples ubicaciones, nuestro equipo de expertos posee la experiencia y el conocimiento para desarrollar soluciones personalizadas que se ajusten a tus necesidades específicas.
            </p>
            <p className="mb-4 leading-relaxed text-justify">
             Nos enfocamos en cada detalle, desde la planificación y configuración inicial hasta el mantenimiento continuo, garantizando que tu red esté optimizada para ofrecer un rendimiento máximo. Además, implementamos las mejores prácticas en seguridad para proteger tus datos y mantener la integridad de la comunicación dentro de tu organización. Con nuestras soluciones, disfrutarás de una conectividad fluida, confiable y escalable, permitiéndote centrarte en lo que realmente importa: el crecimiento y éxito de tu negocio.  
            </p>

          </div>

          {/* Imagen */}
          <div className="md:w-1/2">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/ingenieros-redes-tableta-tiro-medio_23-2148323447.jpg"
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
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/Mantenimiento-de-redes.jpg"
        alt="Imagen 1"
        className="rounded-lg shadow-md w-full"
      />
      <img
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/joven-sosteniendo-interruptores-ethernet-cables_23-2148323476.jpg"
        alt="Imagen 1"
        className="rounded-lg shadow-md w-full"
      />

    </div>


    {/* Texto a la derecha */}
    <div className="md:w-1/2 text-white">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
        Optimización y Mantenimiento de Redes
      </h2>
      <p className="mb-4 leading-relaxed text-justify">
       En Soluciones Integrales JB, ofrecemos servicios de optimización y mantenimiento de redes diseñados para garantizar que tu infraestructura opere de manera eficiente en todo momento. Nuestro equipo de expertos realiza un monitoreo continuo de tu red, detectando y solucionando posibles problemas antes de que impacten en tus operaciones.
      </p>
      <p className="mb-4 leading-relaxed text-justify">
       mplementamos un enfoque proactivo con mantenimiento preventivo y actualizaciones regulares, asegurando que tu red se mantenga en su mejor estado y funcione de manera óptima. De esta manera, puedes concentrarte en el crecimiento de tu negocio sin preocuparte por interrupciones o problemas técnicos. Con nuestra gestión integral, tu red estará siempre al máximo rendimiento, ofreciendo una experiencia fluida y confiable.
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
             Seguridad en Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
             En Soluciones Integrales JB, la seguridad de tu red es nuestra máxima prioridad. Implementamos las mejores prácticas y tecnologías avanzadas para proteger tu infraestructura contra amenazas externas e internas. Utilizamos firewalls de última generación, sistemas de detección de intrusos y soluciones de cifrado de datos para asegurar que tu red permanezca segura en todo momento. Nuestro enfoque integral te brinda tranquilidad al garantizar la integridad y confidencialidad de tu información. Confía en nosotros para mantener la protección continua de tus activos digitales.
            </p>
          </div>

          {/* Imagen */}
          <div className="md:w-1/2">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/images-2.jpg"
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
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/diversos-ingenieros-hombres-mujeres-discutiendo-sobre-tableta-digital-sala-servidores-computadoras-concepto-gestion-mantenimiento-servidor-bases-datos_13339-326644.jpg"
        className="rounded-lg shadow-md w-full"
      />

    </div>

    {/* Texto a la derecha */}
    <div className="md:w-1/2 text-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
         
Consultoría en Infraestructura
      </h2>
      <p className="mb-4 leading-relaxed text-justify">
      Nuestro servicio de consultoría en infraestructura está diseñado para asistirte en la planificación y ejecución de proyectos de redes con la máxima eficiencia y efectividad.
      </p>
       <p className="mb-4 leading-relaxed text-justify">
     Realizamos un análisis detallado de tus necesidades específicas y te ofrecemos soluciones personalizadas que optimizan tu infraestructura actual mientras preparan tu red para futuros crecimientos. Con Soluciones Integrales JB, contarás con una infraestructura robusta y escalable, capaz de soportar las demandas actuales y futuras de tu negocio, asegurando que estés siempre un paso adelante en el desarrollo tecnológico.
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

export default RedesEinfroestructura;
