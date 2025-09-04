import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Datos de los Componentes ---
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

// --- DATOS RESTAURADOS ---
const electricalProjects = [
  { date: "MARZO DEL 2010", image: "https://i.postimg.cc/Th84b2Ys/imagen-1.png", description: "Instalación de alumbrado público en la obra Rehabilitación de pistas y veredas. Calle de 28 de Julio Chancay." },
  { date: "ABRIL DEL 2010", image: "https://i.postimg.cc/Bnf2rLVy/imagen-2.jpg", description: "Descripción de abril 2010." },
  { date: "JUNIO DEL 2010", image: "https://i.postimg.cc/DzMrYjkQ/imagen-3.jpg", description: "Descripción de junio 2010." },
  { date: "ABRIL DEL 2011", image: "https://i.postimg.cc/3JxwdKDR/imagen-4.jpg", description: "Descripción de abril 2011." },
  { date: "JUNIO DEL 2011", image: "https://i.postimg.cc/nrM6fwCH/Imagen5.png", description: "Descripción de junio 2011." },
  { date: "DICIEMBRE DEL 2013", image: "https://i.postimg.cc/htgRfsY0/imagen6.jpg", description: "Descripción de diciembre 2013." },
  { date: "JUNIO DEL 2019", image: "https://i.postimg.cc/yYyrrHfF/imagen-7.jpg", description: "Descripción de junio 2019." },
  { date: "ABRIL DEL 2021", image: "https://i.postimg.cc/Qxm0Jqtm/imagen-8.png", description: "Descripción de abril 2021." },
  { date: "AGOSTO DEL 2021", image: "https://i.postimg.cc/qq0x8tHW/imagen-9.jpg", description: "Realización de pozo a tierra para protección de la instalación eléctrica de los stands. Galería ShopPing Center Chancay." },
  { date: "SETIEMBRE DEL 2021", image: "https://i.postimg.cc/xdfQF5yd/imagen-10.jpg", description: "Descripción de setiembre 2021." },
  { date: "ENERO DEL 2024", image: "https://i.postimg.cc/rpwmtMHg/imagen-11.jpg", description: "Descripción de enero 2024." },
];

const securityProjects = [
  { date: "SEPTIEMBRE DEL 2015", image: "https://i.postimg.cc/j2MVCJGx/Imagen4.png", description: "Descripción del proyecto de seguridad de septiembre 2015." },
  { date: "JULIO DEL 2019", image: "https://i.postimg.cc/hvLjYMzC/imagen-12.png", description: "Montaje de torre para la conectividad de las cámaras de seguridad ciudadana. Municipalidad Distrital de San Ramon Chanchamayo." },
  { date: "ENERO DEL 2020", image: "https://i.postimg.cc/QtVppwtZ/Imagen13.png", description: "Descripción del proyecto de seguridad de enero 2020." },
  { date: "NOVIEMBRE DEL 2022", image: "https://i.postimg.cc/Z5ZpfCRc/Imagen14.jpg", description: "Descripción del proyecto de seguridad de noviembre 2022." },
];

// --- Tipos ---
interface Project {
  date: string;
  image: string;
  description: string;
}

interface ProjectSliderProps {
  title: string;
  projects: Project[];
}

// --- Componente Reutilizable para Sliders ---
const ProjectSlider: React.FC<ProjectSliderProps> = ({ title, projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (projects.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  if (projects.length === 0) return null;

  return (
    <section className="bg-gray-100 py-10 px-6 max-w-7xl mx-auto mt-20 rounded-xl shadow-lg">
      <h2 className="text-center font-bold text-2xl mb-6 text-gray-800">{title}</h2>
      <div className="border-4 border-cyan-400 rounded-xl overflow-hidden relative max-w-5xl mx-auto">
        <div className="w-full h-[600px] bg-black flex items-center justify-center">
          <img
            src={projects[activeIndex].image}
            alt={`Proyecto de ${projects[activeIndex].date}`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 text-center">
          {projects[activeIndex].description}
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-6">
        {projects.map((project, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 font-semibold rounded-lg border-2 transition-all duration-300 ${
              idx === activeIndex
                ? "border-cyan-400 bg-cyan-100 text-black"
                : "border-gray-300 text-gray-500 hover:border-cyan-400 hover:text-cyan-600"
            }`}
          >
            {project.date}
          </button>
        ))}
      </div>
    </section>
  );
};

// --- Componente Principal ---
const App: React.FC = () => {
  return (
    <>
      {/* Menú superior */}
      <div id="menu_main" className="absolute top-0 left-0 w-full bg-white bg-opacity-80 py-4 px-6 shadow-sm z-10">
        <p className="text-center font-bold text-gray-800">Menú de Navegación</p>
      </div>

      {/* Hero con animación */}
      <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
        <img
          src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/nhhh.png"
          alt="Fondo de la historia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          className="absolute top-1/2 right-20 transform -translate-y-1/2 z-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center shadow-xl w-[400px] border-2 border-white group relative overflow-hidden">
            <h2 className="text-4xl font-semibold text-white mb-4">Nuestra historia</h2>
            <p className="text-white text-lg mb-6">Conoce nuestra historia!</p>
            <button className="relative z-10 px-6 py-3 font-bold uppercase tracking-wide rounded-md border border-white bg-black text-white overflow-hidden group hover:text-white transition-all duration-300">
              <span className="relative z-10">Descubre nuestros servicios</span>
              <span className="absolute left-0 top-0 h-full w-full bg-blue-600 z-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Separador */}
      <div className="w-full h-16 bg-white"></div>

      {/* Timeline */}
      <section className="bg-[#1a1a1a] py-20 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto border-4 border-white rounded-xl p-10">
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-cyan-400 text-lg font-semibold mb-2"
            >
              Un viaje de innovación y crecimiento
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold mb-4"
            >
              Nuestra Historia
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-gray-300 max-w-3xl mx-auto mb-16"
            >
              Desde nuestros inicios, nos hemos dedicado a brindar soluciones tecnológicas innovadoras...
            </motion.p>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center w-full">
            <div className="hidden lg:block absolute top-0 left-0 w-full h-24 z-0">
              <svg width="100%" height="100%" viewBox="0 0 1200 100" preserveAspectRatio="none">
                <path
                  d="M0 50 C 200 0, 200 100, 400 50 C 600 0, 600 100, 800 50 C 1000 0, 1000 100, 1200 50"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  fill="none"
                />
              </svg>
            </div>
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-full lg:w-1/4 text-center relative mb-12 lg:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-24 h-24 mb-4 z-10 bg-[#1a1a1a] p-2 flex items-center justify-center">
                  <img
                    src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/cropped-Frame-937.png"
                    alt={`Icono ${item.year}`}
                    className="w-full h-full"
                  />
                </div>
                <h4 className="text-cyan-400 font-semibold text-lg mb-2">{item.year}</h4>
                <p className="text-sm text-gray-300">{item.text}</p>
                {index !== timelineItems.length - 1 && (
                  <div className="block lg:hidden h-16 w-0 border-l-2 border-dashed border-white mt-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sliders */}
      <ProjectSlider title="PROYECTOS ELÉCTRICOS" projects={electricalProjects} />
      <ProjectSlider title="PROYECTOS EN REDES Y EN TECNOLOGÍAS DE SEGURIDAD" projects={securityProjects} />
    </>
  );
};

export default App;
