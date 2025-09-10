import React from "react";
import fondoN from "../assets/fondoN.jpg"; // 
import ScrollButton from "../components/ScrollButton";

const SeguridadInformatica = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondo */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center z-10">
          Seguridad Informática
        </h1>
      </div>

      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap mt-8">
          {/* Imagen a la izquierda */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/12/seguridad_informatuca.jpg"
              alt="Consultoría en Seguridad Informática"
              className="w-full max-w-[3000px] h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Información a la derecha */}
          <div className="flex-1 min-w-[300px]">
            <div className="text-center p-6 bg-[#f4f9ff] rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-5 text-[#2c3e50]">
                <span className="text-[#3498db]">
                  Consultoría en Seguridad Informática
                </span>
              </h2>

              <p className="text-[#34495e] text-base leading-relaxed mb-5">
                Protege tu empresa de amenazas digitales con soluciones
                avanzadas y personalizadas. Mi compromiso es garantizar la
                integridad, disponibilidad y confidencialidad de tus datos,
                ayudándote a prevenir riesgos y fortalecer tus sistemas.
              </p>

              <ul className="text-[#34495e] text-base leading-7 list-disc pl-6 text-left inline-block mb-5">
                <li>
                  <strong>Análisis de vulnerabilidades:</strong> identifico y
                  elimino puntos débiles en tus sistemas.
                </li>
                <li>
                  <strong>Implementación de medidas de seguridad:</strong> diseño
                  soluciones adaptadas a tus necesidades.
                </li>
                <li>
                  <strong>Respaldo y recuperación:</strong> garantizo la
                  protección y recuperación de tu información crítica.
                </li>
                <li>
                  <strong>Capacitación en ciberseguridad:</strong> preparo a tu
                  equipo para enfrentar amenazas digitales.
                </li>
              </ul>

              <p className="text-[#34495e] text-base leading-relaxed mb-6">
                Mi enfoque es cercano y profesional, trabajando contigo para
                implementar estrategias de seguridad que mantengan tu negocio
                protegido en todo momento.
              </p>

              <a
                href="#contacto"
                className="bg-[#3498db] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#2980b9] transition duration-300"
              >
                ¡Protejamos tu empresa!
              </a>
            </div>
          </div>
        </div>
         <ScrollButton />
      </div>
    </div>
  );
};

export default SeguridadInformatica;
