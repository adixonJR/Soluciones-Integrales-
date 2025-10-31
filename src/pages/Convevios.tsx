import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Convenios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentInstitutoSlide, setCurrentInstitutoSlide] = useState({});

  const sliderImages = [
    {
      src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/Inauguracion-Ilo-03-scaled-1-1536x1024.jpg",
      title: "SENATI"
    },
    {
      src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/376237836_764535409042613_3847121157515574135_n-3.jpg",
      title: "Instituto Superior Huando"
    },
    {
      src: "https://cdn.www.gob.pe/uploads/document/file/6678958/991735-archivo.jpeg",
      title: "Instituto Superior Chancay"
    }
  ];

  const instituciones = [
    {
      nombre: "INSTITUTO NACIONAL SENATI",
      descripcion: "La colaboración entre SENATI y Soluciones Integrales JB tiene como objetivo crear una sinergia que beneficie a ambas partes. SENATI proporcionará formación técnica actualizada y alineada con las necesidades del mercado laboral, mientras que Soluciones Integrales JB ofrecerá oportunidades de prácticas profesionales.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEt8LsudDua5jNDpRGb-rquvA14EMMUFIYgnO--wvcicRxcX86LX5wQVZNyVJCZ_4Gmg&usqp=CAU",
        "https://elcomercio.pe/resizer/tH65A-_HcP1OBN1QnDPzdRKr8Vs=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FJSX7NXQS5GQ3J3MSKB7LXNKZA.jpg"
      ]
    },
    {
      nombre: "INSTITUTO SUPERIOR HUANDO",
      descripcion: "La alianza entre el Instituto de Educación Superior Huando y Soluciones Integrales JB mejoraría la empleabilidad de los estudiantes mediante programas de capacitación especializada.",
      images: [
        "https://portal.isthuando.edu.pe/wp-content/uploads/2024/07/admin-ajax.php-1.jpg",
        "https://cdn.www.gob.pe/uploads/document/file/5115620/376237836_764535409042613_3847121157515574135_n.jpg"
      ]
    },
    {
      nombre: "INSTITUTO SUPERIOR CHANCAY",
      descripcion: "La colaboración entre el Instituto Superior Chancay y Soluciones Integrales JB permitirá a los estudiantes acceder a programas de formación práctica en ambientes profesionales.",
      images: [
        "https://cdn.www.gob.pe/uploads/document/file/6678958/991735-archivo.jpeg",
        "https://elperuano.pe/fotografia/thumbnail/2024/07/30/000305023M.jpg"
      ]
    },
    {
      nombre: "UNIVERSIDAD NACIONAL JOSÉ FAUSTINO SÁNCHEZ",
      descripcion: "La colaboración entre la Universidad Nacional José Faustino Sánchez y Soluciones Integrales JB ofrecería a los estudiantes prácticas profesionales para aplicar sus conocimientos.",
      images: [
        "https://unjfsc.edu.pe/wp-content/uploads/2020/04/NUESTRA-HISTORIA2.jpg",
        "https://pbs.twimg.com/media/FTs9qv7XsAgJ0if?format=jpg&name=large"
      ]
    }
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const handleNextInstituto = (idx) => {
    setCurrentInstitutoSlide(prev => ({
      ...prev,
      [idx]: ((prev[idx] || 0) + 1) % instituciones[idx].images.length
    }));
  };

  const handlePrevInstituto = (idx) => {
    setCurrentInstitutoSlide(prev => ({
      ...prev,
      [idx]: ((prev[idx] || 0) - 1 + instituciones[idx].images.length) % instituciones[idx].images.length
    }));
  };

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Banner - SIN CAMBIOS */}
      <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
        <img
          src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/job-g9afc21b12_1920-1600x1000-1.jpg"
          alt="Fondo de la historia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          className="absolute top-1/2 right-20 transform -translate-y-1/2 z-20"
          initial={{ opacity: 0, x: 100, rotateY: 90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }}
        >
          <motion.div
            className="bg-gradient-to-br from-black/75 to-black/90 px-12 py-10 rounded-2xl border-2 border-cyan-500 text-center w-[480px] shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.05, borderColor: "rgb(34, 211, 238)" }}
          >
            
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-5xl font-black text-white mb-4 tracking-tight"
              >
                <span className="text-cyan-400 drop-shadow-lg">Convenios</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-cyan-300 text-lg font-semibold mb-6"
              >
                Prácticas - Profesionales
              </motion.p>
              
              <motion.a
                href="https://solucionesintegralesjb.com/convenio2/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: "0 0 40px rgba(239, 68, 68, 0.9), 0 10px 25px rgba(0, 0, 0, 0.8)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.92 }}
                  className="cta group/button relative overflow-hidden"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-0 group-hover/button:opacity-100"
                    animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <span className="span relative z-10 flex items-center justify-center gap-2">
                    Información
                  </span>
                  
                  <motion.span 
                    className="second relative z-10"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
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
                  </motion.span>
                </motion.button>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Por qué es importante */}
      <section className="py-24 px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <img
                className="rounded-3xl shadow-2xl border-4 border-cyan-400 w-full h-auto object-cover"
                src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/16735073773853.jpg"
                alt="Convenio"
              />
            </div>

            <div>
              <h3 className="text-5xl font-bold mb-8 text-cyan-500">
                ¿Por qué es importante el convenio?
              </h3>
              <p className="text-base text-gray-700 leading-8 text-justify">
                Nuestra empresa tiene convenios con diversas instituciones públicas y privadas para la formación de nuevos profesionales. Nuestra propuesta de trabajo estratégico e integrado es ofrecer a través de diferentes áreas de servicios, en donde nuestros equipos de profesionales se encargan de transmitir todos los conocimientos necesarios para preparar a los estudiantes o egresados de una carrera como profesionales competentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frase - FONDO OSCURO CON 2 IMÁGENES */}
      <section style={{ backgroundColor: "#262626" }} className="py-24 px-16 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold italic text-white">
              "Alianzas Estratégicas para Tu Futuro Profesional"
            </h2>
          </motion.div>
          
          {/* 2 Imágenes - Rectangulares y grandes */}
          <div className="relative w-full mx-auto">
            <div className="grid grid-cols-2 gap-12 px-8">
              {sliderImages.slice(0, 2).map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="overflow-hidden shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 h-full">
                    <img 
                      src={img.src}
                      alt={img.title}
                      className="w-full h-[350px] object-cover"
                    />
                    
                    {/* Overlay oscuro en hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-6"
                    >
                      <h3 className="text-white font-bold text-2xl text-center px-4">
                        {img.title}
                      </h3>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                      >
                        INFORMACIÓN
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Solo 2 Indicadores */}
            <div className="flex justify-center gap-3 mt-12">
              {sliderImages.slice(0, 2).map((_, idx) => (
                <button
                  key={idx}
                  className="h-3 w-3 rounded-full bg-cyan-400 transition-all duration-300 hover:bg-cyan-300"
                  disabled
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instituciones - CARRUSEL 3D */}
      <section className="py-24 px-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {instituciones.map((institucion, idx) => (
            <div key={idx}>
              <div className="grid grid-cols-2 gap-16 items-center">
                {/* Contenido izquierda */}
                <div>
                  <h3 className="text-4xl font-bold text-cyan-500 mb-8 uppercase leading-tight">
                    {institucion.nombre}
                  </h3>
                  <p className="text-base text-gray-700 leading-8 text-justify">
                    {institucion.descripcion}
                  </p>
                </div>

                {/* Carrusel 3D derecha */}
                <div className="relative h-80 flex items-center justify-center px-8">
                  <button
                    onClick={() => handlePrevInstituto(idx)}
                    className="absolute left-0 z-30 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Imagen izquierda pequeña */}
                    <motion.div
                      key={`left-${idx}`}
                      className="absolute left-0 w-24 h-32 z-10"
                    >
                      <img
                        src={institucion.images[(currentInstitutoSlide[idx] || 0) === 0 ? institucion.images.length - 1 : (currentInstitutoSlide[idx] || 0) - 1]}
                        alt="prev"
                        className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400 opacity-50"
                      />
                    </motion.div>

                    {/* Imagen central grande */}
                    <motion.div
                      key={`center-${currentInstitutoSlide[idx] || 0}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute z-20 w-96 h-64"
                    >
                      <img
                        src={institucion.images[currentInstitutoSlide[idx] || 0]}
                        alt={`${institucion.nombre}`}
                        className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400 shadow-2xl"
                      />
                    </motion.div>

                    {/* Imagen derecha pequeña */}
                    <motion.div
                      key={`right-${idx}`}
                      className="absolute right-0 w-24 h-32 z-10"
                    >
                      <img
                        src={institucion.images[(currentInstitutoSlide[idx] || 0) + 1 >= institucion.images.length ? 0 : (currentInstitutoSlide[idx] || 0) + 1]}
                        alt="next"
                        className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400 opacity-50"
                      />
                    </motion.div>
                  </div>

                  <button
                    onClick={() => handleNextInstituto(idx)}
                    className="absolute right-0 z-30 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Indicadores */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex justify-center gap-2">
                    {institucion.images.map((_, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => setCurrentInstitutoSlide(prev => ({ ...prev, [idx]: imgIdx }))}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          imgIdx === (currentInstitutoSlide[idx] || 0) ? 'bg-cyan-400 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Convenios;

const styles = `
  .cta {
    display: flex;
    padding: 16px 50px;
    text-decoration: none;
    font-size: 24px;
    color: #ffffff;
    background: #ff0000;
    transition: 1s;
    box-shadow: 6px 6px 0 black;
    transform: skewX(-15deg);
    border: none;
    cursor: pointer;
  }

  .cta:hover {
    transition: 0.5s;
    box-shadow: 10px 10px 0 #ffffff;
  }

  .cta .second {
    transition: 0.5s;
    margin-right: 0px;
  }

  .cta:hover .second {
    transition: 0.5s;
    margin-right: 45px;
  }

  .span {
    transform: skewX(15deg);
    font-weight: 600;
  }

  .second {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }

  .one {
    transition: 0.4s;
    transform: translateX(-60%);
  }

  .two {
    transition: 0.5s;
    transform: translateX(-30%);
  }

  .cta:hover .three {
    animation: color_anim 1s infinite 0.2s;
  }

  .cta:hover .one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
  }

  .cta:hover .two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
  }

  @keyframes color_anim {
    0% { fill: #fff; }
    50% { fill: #000; }
    100% { fill: #fff; }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
