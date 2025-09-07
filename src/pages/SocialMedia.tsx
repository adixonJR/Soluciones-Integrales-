import React from "react";
import fondoN from "../assets/fondoN.jpg"; // 👈 asegúrate de que la ruta sea correcta

const Merchandising = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondoN */}
      <div
  className="w-full h-[300px] bg-center bg-no-repeat flex items-center justify-center relative"
  style={{
    backgroundImage: `url(${fondoN})`,
    backgroundSize: '120%' // Puedes ajustar este valor: 100% = normal, <100% = alejar
  }}
>
  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Texto centrado encima del fondo */}
  <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center z-10">
    Social Media
  </h1>
</div>



      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap mt-8">
          {/* Imagen a la izquierda */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/gestionar-redes-sociales-desde-computadora-o-celular.png"
              alt="Social Media"
              className="w-full max-w-[3000px] h-auto rounded-lg shadow-lg"
            />
          
          </div>
         

          {/* Información a la derecha */}
          <div className="flex-1 min-w-[300px]">
            <div className="text-center p-6 bg-[#f4f9ff] rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-5 text-[#2c3e50]">
                <span className="text-[#3498db]">Potencia Tu Presencia en Redes Sociales</span>
              </h2>

              <p className="text-[#34495e] text-base leading-relaxed mb-5">
                Potencia tu presencia en redes sociales con nuestro servicio de gestión eficaz. Creamos y publicamos contenido estratégico en plataformas clave como Facebook, Instagram y LinkedIn, optimizando cada publicación para aumentar el engagement y las conversiones. Monitorizamos el rendimiento en tiempo real y gestionamos interacciones con tu audiencia para asegurar una comunicación efectiva. Confía en nosotros para fortalecer tu marca digital y alcanzar tus objetivos de negocio a través de redes sociales.
              </p>

              {/* Botón de Contacto */}
        <div className="text-center">
          <a
            href="/Contacto"
            className="inline-block px-6 py-3 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-500 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline-block mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H8m0 0l4-4m-4 4l4 4"
              />
            </svg>
            CONTACTAR
          </a>
        </div>
      </div>

            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Merchandising;
