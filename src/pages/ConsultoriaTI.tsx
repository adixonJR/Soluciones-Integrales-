import React from "react";
import fondoN from "../assets/fondoN.jpg"; // asegúrate de que la imagen esté en tu carpeta assets

const ConsultoriaTI = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* Sección con fondo */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        {/* Overlay oscuro para resaltar el texto */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Texto encima */}
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center z-10">
          Consultoría TI
        </h1>
      </div>

      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        {/* Contenedor principal */}
        <div className="flex items-center mt-8 flex-wrap">
          {/* Imagen a la izquierda */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/qe0pwt6j.png"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </div>

          {/* Información a la derecha */}
          <div className="flex-1 min-w-[300px]">
            <div className="text-justify p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-[#2c3e50] mb-5 text-2xl font-semibold">
                Tecnologías de la Información (TI)
              </h2>
              <p className="text-[#34495e] text-base leading-relaxed mb-5">
                Mi misión es ayudarte a transformar tu empresa con soluciones
                tecnológicas efectivas y a medida. Con años de experiencia en el
                mundo de la TI, estoy aquí para apoyarte en cada paso de tu
                transformación digital.
              </p>
              <h3 className="text-[#2c3e50] mb-4 text-xl font-semibold">
                Te ofrezco:
              </h3>
              <ul className="text-[#34495e] text-base leading-7 list-disc pl-6 mb-5">
                <li>
                  <strong>Mejora de procesos internos:</strong> para que tu
                  equipo sea más eficiente.
                </li>
                <li>
                  <strong>Seguridad informática:</strong> protejo tus datos como
                  si fueran los míos.
                </li>
                <li>
                  <strong>Implementación de software:</strong> encuentro las
                  herramientas ideales para tu negocio.
                </li>
                <li>
                  <strong>Migración a la nube:</strong> doy el salto contigo
                  hacia tecnologías modernas.
                </li>
              </ul>
              <p className="text-[#34495e] text-base leading-relaxed">
                ¿Listo para llevar tu empresa al siguiente nivel? <br />
                Contáctame y hablemos de cómo puedo ayudarte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultoriaTI;
