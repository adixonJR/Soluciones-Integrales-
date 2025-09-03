import React, { useState, useEffect } from "react";

const NuestraHistoria: React.FC = () => {
  const timelineItems = [
    {
      year: "2010",
      text: "Iniciamos ofreciendo soluciones en Ingeniería Eléctrica con servicios de consultoría y proyectos ejecutivos, comprometidos con la calidad y la tecnología como herramienta clave.",
    },
    {
      year: "2015",
      text: "Integramos soluciones digitales y Comunicación para automatizar procesos empresariales de manera eficiente y segura, utilizando metodologías avanzadas de gestión.",
    },
    {
      year: "2016",
      text: "Ampliamos nuestros servicios a soluciones en Seguridad Tecnológica, implementando herramientas avanzadas para mejorar la precisión y control desde dispositivos móviles.",
    },
    {
      year: "2018",
      text: "Iniciamos la transformación digital con Sistemas de Gestión Comercial y Facturación Electrónica, mejorando la eficiencia y competitividad en el mercado.",
    },
  ];

  const projects = [
    {
      date: "MARZO DEL 2010",
      image: "https://i.postimg.cc/Th84b2Ys/imagen-1.png",
      description:
        "Instalación de alumbrado público en la obra Rehabilitación de pistas y veredas. Calle de 28 de Julio Chancay.",
    },
    {
      date: "ABRIL DEL 2010",
      image: "https://i.postimg.cc/Bnf2rLVy/imagen-2.jpg",
      description: "Descripción de abril 2010.",
    },
    {
      date: "JUNIO DEL 2010",
      image: "https://i.postimg.cc/DzMrYjkQ/imagen-3.jpg",
      description: "Descripción de junio 2010.",
    },
    {
      date: "ABRIL DEL 2011",
      image: "https://i.postimg.cc/3JxwdKDR/imagen-4.jpg",
      description: "Descripción de abril 2011.",
    },
    {
      date: "JUNIO DEL 2011",
      image: "https://i.postimg.cc/nrM6fwCH/Imagen5.png",
      description: "Descripción de junio 2011.",
    },
    {
      date: "DICIEMBRE DEL 2013",
      image: "https://i.postimg.cc/htgRfsY0/imagen6.jpg",
      description: "Descripción de diciembre 2013.",
    },
    {
      date: "JUNIO DEL 2019",
      image: "https://i.postimg.cc/yYyrrHfF/imagen-7.jpg",
      description: "Descripción de junio 2019.",
    },
    {
      date: "ABRIL DEL 2021",
      image: "https://i.postimg.cc/Qxm0Jqtm/imagen-8.png",
      description: "Descripción de abril 2021.",
    },
    {
      date: "AGOSTO DEL 2021",
      image: "https://i.postimg.cc/qq0x8tHW/imagen-9.jpg",
      description:
        "Realización de pozo a tierra para protección de la instalación eléctrica de los stands. Galería ShopPing Center Chancay.",
    },
    {
      date: "SETIEMBRE DEL 2021",
      image: "https://i.postimg.cc/xdfQF5yd/imagen-10.jpg",
      description: "Descripción de setiembre 2021.",
    },
    {
      date: "ENERO DEL 2024",
      image: "https://i.postimg.cc/rpwmtMHg/imagen-11.jpg",
      description: "Descripción de enero 2024.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <>
      {/* Menú superior */}
      <div
        id="menu_main"
        className="absolute top-0 left-0 w-full bg-white bg-opacity-80 py-4 px-6 shadow-sm z-10"
      >
        <p className="text-center font-bold text-gray-800">Menú de Navegación</p>
      </div>

      {/* Imagen de fondo */}
      <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
        <img
          src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/nhhh.png"
          alt="Fondo de la historia"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cuadro negro con texto */}
        <div className="absolute top-1/2 right-20 transform -translate-y-1/2 z-20">
          <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center shadow-xl w-[400px] border-2 border-white">
            <h2 className="text-4xl font-semibold text-white mb-4">
              Nuestra historia
            </h2>
            <p className="text-white text-lg mb-6">Conoce nuestra historia!</p>

            <button className="bg-black text-white border border-white px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all whitespace-nowrap">
              Descubre nuestros servicios
            </button>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="w-full h-16 bg-white"></div>
      <div className="w-full h-[8px] bg-white"></div>

      {/* Timeline */}
      <section className="bg-[#1a1a1a] py-20 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto border-4 border-white rounded-xl p-10">
          <div className="text-center">
            <h3 className="text-cyan-400 text-lg font-semibold mb-2">
              Un viaje de innovación y crecimiento
            </h3>
            <h2 className="text-4xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-16">
              Desde nuestros inicios, nos hemos dedicado a brindar soluciones
              tecnológicas innovadoras. A lo largo de los años, hemos crecido y
              evolucionado, siempre comprometidos con la excelencia.
            </p>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-xs text-center relative"
              >
                <img
                  src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/cropped-Frame-937.png"
                  alt={`Icono ${item.year}`}
                  className="w-24 h-24 mb-4 z-10 bg-[#1a1a1a] relative"
                />

                <h4 className="text-cyan-400 font-semibold text-lg mb-2">
                  {item.year}
                </h4>
                <p className="text-sm text-gray-300">{item.text}</p>

                {/* Línea curva desktop */}
                {index !== timelineItems.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-[-50%] w-[100%] h-12 z-0 pointer-events-none">
                    <svg
                      viewBox="0 0 200 50"
                      preserveAspectRatio="none"
                      className="w-full h-full"
                    >
                      <defs>
                        <marker
                          id={`arrow-${index}`}
                          viewBox="0 0 10 10"
                          refX="5"
                          refY="5"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="#fff" />
                        </marker>
                      </defs>
                      <path
                        d="M0,25 C50,0 150,50 200,25"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        fill="none"
                        markerEnd={`url(#arrow-${index})`}
                      />
                    </svg>
                  </div>
                )}

                {/* Línea vertical mobile */}
                {index !== timelineItems.length - 1 && (
                  <div className="block lg:hidden h-12 border-l-2 border-dashed border-white mt-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider Proyectos */}
      <section className="bg-gray-100 py-10 px-6 max-w-7xl mx-auto mt-20 rounded-xl shadow-lg">
        <h2 className="text-center font-bold text-2xl mb-6">
          PROYECTOS ELÉCTRICOS
        </h2>

        {/* Imagen principal */}
        <div className="border-4 border-cyan-400 rounded-xl overflow-hidden relative max-w-5xl mx-auto">
          <div className="w-full max-h-[600px] overflow-hidden">
            <img
              src={projects[activeIndex].image}
              alt={`Proyecto de ${projects[activeIndex].date}`}
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 text-center rounded-b-xl">
            {projects[activeIndex].description}
          </div>
        </div>

        {/* Botones de fechas */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 font-semibold rounded-lg border-2 transition-all duration-300 ${
                idx === activeIndex
                  ? "border-cyan-400 bg-cyan-100 text-black"
                  : "border-gray-200 text-gray-400 hover:border-cyan-400 hover:text-cyan-600"
              }`}
            >
              {project.date}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default NuestraHistoria;
