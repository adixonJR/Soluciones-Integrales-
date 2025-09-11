import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Convenios: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Banner (Hero Section) */}
      <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/job-g9afc21b12_1920-1600x1000-1.jpg"
          alt="Fondo de la historia"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Tarjeta animada */}
        <motion.div
          className="absolute top-1/2 right-20 transform -translate-y-1/2 z-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center shadow-xl w-[400px] border-2 border-white group relative overflow-hidden">
            <h2 className="text-4xl font-semibold text-white mb-4">Convenios</h2>
            <p className="text-white text-lg mb-6">Prácticas - Profesionales</p>
             <a
      href="https://solucionesintegralesjb.com/comunidad2/#id-activa"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="cta">
        <span className="span">Información</span>
        <span className="second">
          <svg
            width="50px"
            height="20px"
            viewBox="0 0 66 43"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow" fill="none" fillRule="evenodd">
              <path
                className="one"
                d="M40.15 3.89L43.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L44.67 42.86a.5.5 0 01-.7 0L40.15 39.1a.5.5 0 01.01-.71L56.99 21.86a.5.5 0 000-.71L40.15 3.9z"
                fill="#fff"
              />
              <path
                className="two"
                d="M20.15 3.89L23.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L24.67 42.86a.5.5 0 01-.7 0L20.15 39.1a.5.5 0 01.01-.71L36.99 21.86a.5.5 0 000-.71L20.15 3.9z"
                fill="#fff"
              />
              <path
                className="three"
                d="M0.15 3.89L3.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L4.67 42.86a.5.5 0 01-.7 0L0.15 39.1a.5.5 0 01.01-.71L16.99 21.86a.5.5 0 000-.71L0.15 3.9z"
                fill="#fff"
              />
            </g>
          </svg>
        </span>
      </button>
    </a>
          </div>
        </motion.div>
      </div>

      {/* Sección de convenios */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Botón con enlace */}
        <div className="flex justify-center mb-8">
          <a
            href="https://solucionesintegralesjb.com/convenio2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>

        {/* Imagen + texto lado a lado */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          {/* Imagen a la izquierda */}
          <div className="flex-shrink-0">
            <img
              className="rounded-lg shadow-lg border-2 border-cyan-400 w-[400px] h-auto"
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/16735073773853.jpg"
              alt="Convenio - reunión"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold mb-2">
              ¿Por qué es importante el convenio?
            </h3>
            <p className="mb-6">
              Nuestra empresa tiene convenios con diversas instituciones públicas y privadas
              para la formación de nuevos profesionales. Nuestra propuesta de trabajo estratégico
              e integrado es ofrecer a través de diferentes áreas de servicios, en donde nuestros
              equipos de profesionales se encargan de transmitir todos los conocimientos necesarios
              para preparar a los estudiantes o egresados de una carrera como profesionales competentes.
            </p>

            <h4 className="text-xl font-bold mb-2">
              "Alianzas Estratégicas para Tu Futuro Profesional"
            </h4>
          </div>
        </div>

        {/* Imagen grande debajo */}
        <img
          className="rounded-lg shadow-lg mb-6 w-full max-w-4xl mx-auto"
          src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/Inauguracion-Ilo-03-scaled-1-1200x800.jpg"
          alt="Inauguración - convenio"
        />

        {/* Instituciones con carrusel */}
        <section className="mt-10 space-y-10">
          {/* SENATI */}
          <div>
            <h2 className="text-2xl font-bold mb-4">INSTITUTO NACIONAL SENATI</h2>
            <p className="mt-2 mb-6">
              La colaboración entre SENATI y Soluciones Integrales JB tiene como objetivo crear
              una sinergia que beneficie a ambas partes.
            </p>
            <Slider {...sliderSettings} className="mb-10">
              <div>
                <img
                  className="w-80 mx-auto rounded-lg border-2 border-cyan-400 shadow-lg"
                  src="https://assets.isu.pub/document-structure/230829222103-2b84e3d30152242c3ba8dc2f755b27d4/v1/47af25fc4572f3dbb0f926ee054ccff9.jpeg"
                  alt="SENATI 1"
                />
              </div>
              <div>
                <img
                  className="w-80 mx-auto rounded-lg border-2 border-cyan-400 shadow-lg"
                  src="https://elcomercio.pe/resizer/tH65A-_HcP1OBN1QnDPzdRKr8Vs=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FJSX7NXQS5GQ3J3MSKB7LXNKZA.jpg"
                  alt="SENATI 2"
                />
              </div>
              <div>
                <img
                  className="w-80 mx-auto rounded-lg border-2 border-cyan-400 shadow-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEt8LsudDua5jNDpRGb-rquvA14EMMUFIYgnO--wvcicRxcX86LX5wQVZNyVJCZ_4Gmg&usqp=CAU"
                  alt="SENATI 2"
                />
              </div>
            </Slider>
          </div>

          {/* Huando */}
          <div>
            <h2 className="text-2xl font-bold mb-4">INSTITUTO SUPERIOR HUANDO</h2>
            <p className="mt-2 mb-6">
              La alianza entre el Instituto de Educación Superior Huando y Soluciones Integrales JB
              mejoraría la empleabilidad de los estudiantes.
            </p>
            <Slider {...sliderSettings} className="mb-10">
              <div>
                <img
                  className="w-80 mx-auto rounded-lg border-2 border-cyan-400 shadow-lg"
                  src="https://via.placeholder.com/400x250"
                  alt="Huando 1"
                />
              </div>
              <div>
                <img
                  className="w-80 mx-auto rounded-lg border-2 border-cyan-400 shadow-lg"
                  src="https://via.placeholder.com/400x250"
                  alt="Huando 2"
                />
              </div>
            </Slider>
          </div>

          {/* Chancay */}
          <div>
            <h2 className="text-2xl font-bold mb-4">INSTITUTO SUPERIOR CHANCAY</h2>
            <p className="mt-2 mb-6">
              La colaboración entre el Instituto Superior Chancay y Soluciones Integrales JB
              permitirá a los estudiantes acceder a programas de formación práctica.
            </p>
            <Slider {...sliderSettings} className="mb-10">
              <div>
                <img
                  className="w-80 mx-auto rounded-lg border-2 border-cyan-400 shadow-lg"
                  src="https://via.placeholder.com/400x250"
                  alt="Chancay 1"
                />
              </div>
            </Slider>
          </div>

          {/* UNJFSC */}
          <div>
            <h2 className="text-2xl font-bold mb-4">UNIVERSIDAD NACIONAL JOSÉ FAUSTINO SÁNCHEZ</h2>
            <p className="mt-2 mb-6">
              La colaboración con la Universidad Nacional José Faustino Sánchez permite prácticas
              profesionales reales.
            </p>
            <Slider {...sliderSettings} className="mb-10">
              <div>
                <img
                  className="w-80 mx-auto rounded-lg border-2 border-cyan-400 shadow-lg"
                  src="https://via.placeholder.com/400x250"
                  alt="UNJFSC 1"
                />
              </div>
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Convenios;
