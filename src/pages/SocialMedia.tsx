import React from 'react';

const SocialMedia: React.FC = () => {
  return (
    <div>
      {/* Banner con imagen de fondo y texto */}
      <div className="relative w-full h-64 md:h-80 bg-black text-white flex flex-col items-center justify-center overflow-hidden">
        
        {/* 1. Imagen de fondo */}
        <img 
          src="https://i.postimg.cc/90dGrGQD/fondoN.jpg" 
          alt="Fondo de ladrillos oscuros" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* 2. Capa oscura semitransparente */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

        {/* 3. Contenido del banner */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-400">
            Social Media
          </h1>
          <span className="mt-2 text-sm font-semibold tracking-wider text-gray-300">
            Inicio / Social Media
          </span>
        </div>
      </div>

      {/* Sección inferior (contenido principal) */}
      <div className="px-4 py-8 max-w-7xl mx-auto font-sans">
        <h2 className="text-3xl font-bold mb-6 text-center">Gestión de Redes Sociales</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Ofrecemos estrategias de social media marketing para impulsar tu marca, aumentar tu engagement y mejorar tu presencia digital.
        </p>
      </div>
    </div>
  );
};

export default SocialMedia;
