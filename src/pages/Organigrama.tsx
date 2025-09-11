import React, { useState, useEffect, useRef } from "react";

const Organigrama = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animatedSections, setAnimatedSections] = useState<boolean[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Inicializar el array de animaciones para cada cuadro
    setAnimatedSections(new Array(6).fill(false));
    
    // Configurar el Intersection Observer para animar al hacer scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setAnimatedSections(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observar todos los cuadros
    const cards = document.querySelectorAll('.card-item');
    cards.forEach((card, index) => {
      card.setAttribute('data-index', index.toString());
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  // Datos de los cargos para hacer el código más limpio y mantenible
  const cargos = [
    {
      titulo: "Gerente General",
      descripcion: "Dirige y supervisa todas las operaciones de la empresa, toma decisiones estratégicas clave y coordina los esfuerzos de los diferentes departamentos."
    },
    {
      titulo: "Asesor Legal",
      descripcion: "Brinda asesoramiento jurídico a la empresa, gestiona contratos y asegura el cumplimiento de las normativas legales aplicables."
    },
    {
      titulo: "Contabilidad",
      descripcion: "Se encarga de llevar el control financiero de la empresa, gestionando ingresos, egresos, balances y declaraciones fiscales."
    },
    {
      titulo: "Gerente Administrativo",
      descripcion: "Supervisa y gestiona los procesos administrativos de la empresa, asegurando la eficiencia en la gestión de recursos y operaciones internas."
    },
    {
      titulo: "Gerente de Servicios",
      descripcion: "Responsable de la gestión de servicios al cliente, asegurando que se entreguen de manera eficiente y cumpliendo con los estándares de calidad."
    },
    {
      titulo: "SSOMA",
      descripcion: "Garantiza que las operaciones de la empresa se realicen de acuerdo con las normativas de seguridad, salud ocupacional y protección ambiental."
    }
  ];

  return (
    <div 
      className="min-h-screen px-4 py-8 font-sans overflow-hidden"
      style={{
        backgroundImage: `url('https://i.postimg.cc/RCszYjSb/imagetecg391.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'contain',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Imagen con animación de entrada y flotación continua */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <img
            src="https://i.postimg.cc/RV5pt7yf/Imagen-de-Whats-App-2025-08-14-a-las-14-57-25-53a7ebe1.jpg"
            alt="Organigrama de la empresa"
            className="max-w-4xl w-full mx-auto mb-12 rounded-2xl shadow-xl border-4 border-white animate-float"
          />
        </div>

        {/* Título de sección con animación de escritura y movimiento */}
        <section className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-100 uppercase relative inline-block pb-2 animate-fade-in-up"
          >
            Descripción de Cargos
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          </h2>
          <p 
            className="text-lg text-gray-100 mt-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-500"
          >
            En esta sección encontrarás una lista detallada de los cargos
            disponibles en nuestra empresa, con información sobre responsabilidades y funciones.
          </p>
        </section>

        {/* Recuadros de cargos con animaciones al hacer scroll y efectos hover */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" ref={sectionRef}>
          {cargos.map((cargo, index) => (
            <div 
              key={index}
              data-index={index}
              className={`card-item bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform border-l-4 border-blue-500
                ${animatedSections[index] ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'} 
                hover:-translate-y-2 hover:opacity-100`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full transition-transform duration-300 hover:scale-110">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4 transition-all duration-300 hover:text-blue-600">
                {cargo.titulo}
              </h3>
              <p className="text-gray-700 text-justify leading-relaxed first-letter:font-bold first-letter:text-xl first-letter:text-gray-900">
                {cargo.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Elemento decorativo al final con animación */}
        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping-slow"></div>
        </div>
      </div>

      {/* Estilos para las animaciones personalizadas */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeInUp {
          0% { 
            opacity: 0;
            transform: translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pingSlow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.5s ease-out forwards;
          opacity: 0;
        }
        .animate-delay-500 {
          animation-delay: 0.5s;
        }
        .animate-ping-slow {
          animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        /* Efecto de aparición suave al hacer scroll */
        .card-item {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Organigrama;