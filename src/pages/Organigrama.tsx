import React, { useState, useEffect, useRef } from "react";

const Organigrama = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animatedSections, setAnimatedSections] = useState<boolean[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollToCargos = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setIsVisible(true);
    
    setAnimatedSections(new Array(6).fill(false));
    
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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.card-item');
    cards.forEach((card, index) => {
      card.setAttribute('data-index', index.toString());
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const cargos = [
    {
      titulo: "Gerente General",
      descripcion: "Dirige y supervisa todas las operaciones de la empresa, toma decisiones estratégicas clave y coordina los esfuerzos de los diferentes departamentos.",
      color: "from-blue-500 to-purple-600",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      titulo: "Asesor Legal",
      descripcion: "Brinda asesoramiento jurídico a la empresa, gestiona contratos y asegura el cumplimiento de las normativas legales aplicables.",
      color: "from-green-500 to-teal-600",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      titulo: "Contabilidad",
      descripcion: "Se encarga de llevar el control financiero de la empresa, gestionando ingresos, egresos, balances y declaraciones fiscales.",
      color: "from-amber-500 to-orange-600",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      titulo: "Gerente Administrativo",
      descripcion: "Supervisa y gestiona los procesos administrativos de la empresa, asegurando la eficiencia en la gestión de recursos y operaciones internas.",
      color: "from-red-500 to-pink-600",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      titulo: "Gerente de Servicios",
      descripcion: "Responsable de la gestión de servicios al cliente, asegurando que se entreguen de manera eficiente y cumpliendo con los estándares de quality.",
      color: "from-indigo-500 to-blue-600",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      titulo: "SSOMA",
      descripcion: "Garantiza que las operaciones de la empresa se realicen de acuerdo con las normativas de seguridad, salud ocupacional y protección ambiental.",
      color: "from-purple-500 to-indigo-600",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div 
      className="min-h-screen px-4 py-8 font-sans overflow-hidden relative"
      style={{
        backgroundImage: `url('https://i.postimg.cc/RCszYjSb/imagetecg391.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'contain',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const colors = [
            'rgba(59, 130, 246, 0.4)',
            'rgba(139, 92, 246, 0.4)',
            'rgba(16, 185, 129, 0.4)',
            'rgba(245, 158, 11, 0.4)',
            'rgba(236, 72, 153, 0.4)',
            'rgba(99, 102, 241, 0.4)',
          ];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <div
              key={i}
              className="absolute rounded-full animate-float-particle"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                background: randomColor,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                filter: 'blur(1.5px)',
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mt-8`}>
          <img
            src="https://i.postimg.cc/prqbFQts/imaget1.png"
            alt="Organigrama de la empresa"
            className="max-w-4xl w-full mx-auto mb-12 rounded-2xl shadow-xl border-4 border-white animate-float"
          />
        </div>

        <div className="flex flex-col items-center justify-center mb-8">
          <div 
            className="flex flex-col items-center cursor-pointer animate-bounce"
            onClick={scrollToCargos}
          >
            <span className="text-gray-200 text-lg mb-2 text-center">Explora nuestros cargos</span>
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        <section className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 uppercase relative inline-block pb-2 animate-fade-in-up"
          >
            <span className="animate-text-gradient bg-gradient-to-r from-blue-700 via-purple-800 to-blue-700 bg-clip-text text-transparent">
              Descripción de Cargos
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-700 to-purple-800 rounded-full animate-pulse"></span>
          </h2>
          <p 
            className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-medium"
            style={{ animationDelay: '0.5s' }}
          >
            En esta sección encontrarás una lista detallada de los cargos
            disponibles en nuestra empresa, con información sobre responsabilidades y funciones.
          </p>
        </section>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" ref={sectionRef}>
          {cargos.map((cargo, index) => (
            <div 
              key={index}
              data-index={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`card-item p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform border-l-4
                ${animatedSections[index] ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 rotate-2'} 
                hover:-translate-y-2 hover:scale-105 hover:rotate-0 relative overflow-hidden
                bg-gradient-to-br ${cargo.color}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-white opacity-0 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-20' : ''}`}></div>
              
              <div className="flex items-center justify-center mb-4 relative z-10">
                <div className="bg-white bg-opacity-20 p-4 rounded-full transition-all duration-500 hover:scale-110 hover:bg-opacity-30 hover:shadow-lg">
                  {cargo.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-4 transition-all duration-500 hover:scale-105 relative z-10 drop-shadow-md">
                {cargo.titulo}
              </h3>
              <p className="text-gray-100 text-justify leading-relaxed first-letter:font-bold first-letter:text-xl first-letter:text-white relative z-10 transition-all duration-500 drop-shadow-md">
                {cargo.descripcion}
              </p>
              
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-white hover:border-opacity-50 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping-slow"></div>
        </div>
        
        <div className="mt-16 mb-8">
          <div className="relative h-2 w-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 animate-wave-line rounded-full"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-particle {
          0% { 
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { 
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) rotate(360deg);
            opacity: 0;
          }
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
        
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
        
        @keyframes wave-line {
          0% { 
            transform: translateX(-100%) scaleY(1);
            opacity: 0;
          }
          15% { 
            opacity: 1;
            transform: translateX(-50%) scaleY(1.2);
          }
          50% { 
            transform: translateX(0%) scaleY(1);
          }
          85% { 
            opacity: 1;
            transform: translateX(50%) scaleY(1.2);
          }
          100% { 
            transform: translateX(100%) scaleY(1);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 20s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-ping-slow {
          animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-gradient 3s linear infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        
        .animate-wave-line {
          animation: wave-line 3s ease-in-out infinite;
        }
        
        .card-item {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, rotate 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Organigrama;