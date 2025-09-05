import React from "react";
import fondoN from "../assets/fondoN.jpg"; // 👈 asegúrate de que la ruta sea correcta

const Merchandising = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondoN */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center z-10">
          Merchandising
        </h1>
      </div>

      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap mt-8">
          {/* Imagen a la izquierda */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/merchandising-2.jpg"
              alt="Merchandising"
              className="w-full max-w-[3000px] h-auto rounded-lg shadow-lg"
            />
             <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/SERIGRAFIA-2.jpg"
              alt="Merchandising"
              className="w-full max-w-[3000px] h-auto rounded-lg shadow-lg"
            />
          </div>
         

          {/* Información a la derecha */}
          <div className="flex-1 min-w-[300px]">
            <div className="text-center p-6 bg-[#f4f9ff] rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-5 text-[#2c3e50]">
                <span className="text-[#3498db]">Productos Personalizados de Calidad</span>
              </h2>

              <p className="text-[#34495e] text-base leading-relaxed mb-5">
                En Soluciones Integrales JB, ofrecemos productos de merchandising personalizados que destacan la identidad de tu marca. Desde artículos promocionales como bolígrafos y llaveros hasta prendas de vestir y accesorios, nos aseguramos de que cada producto refleje tus valores y mensajes corporativos de manera efectiva. Utilizamos materiales de alta calidad y técnicas de impresión avanzadas para garantizar resultados duraderos y memorables.
              </p>

              <a
                href="#contacto"
                className="bg-[#3498db] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#2980b9] transition duration-300"
              >
                ¡Hablemos!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandising;
