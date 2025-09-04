import React from "react";
import fondoN from "../assets/fondoN.jpg"; // Asegúrate de que el archivo esté en /assets

const ConsultoriaEmpresarial = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondoN.jpg */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center z-10">
          Consultoría Empresarial
        </h1>
      </div>

      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap mt-8">
          {/* Imagen a la izquierda */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/12/empresarial.jpg"
              alt="Consultoría Empresarial"
              className="w-full max-w-[3000px] h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Información a la derecha */}
          <div className="flex-1 min-w-[300px]">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-5 text-[#2c3e50]">
                <span className="text-[#7FA]">Consultoría Empresarial</span>
              </h2>

              <p className="text-[#34495e] text-base leading-relaxed mb-5">
                Mi objetivo es ayudarte a llevar tu negocio al siguiente nivel,
                identificando oportunidades, resolviendo desafíos y optimizando
                cada aspecto de tu empresa. Con años de experiencia en el mundo
                empresarial, estoy aquí para trabajar contigo y construir
                soluciones efectivas y sostenibles.
              </p>

              <ul className="text-[#34495e] text-base leading-7 list-disc pl-6 text-left inline-block mb-5">
                <li>
                  <strong>Análisis estratégico:</strong> para identificar y
                  aprovechar tus ventajas competitivas.
                </li>
                <li>
                  <strong>Optimización de procesos:</strong> hago que tus
                  operaciones sean más ágiles y eficientes.
                </li>
                <li>
                  <strong>Gestión del cambio:</strong> acompaño a tu equipo en
                  las transiciones necesarias para crecer.
                </li>
                <li>
                  <strong>Planificación financiera:</strong> maximizo el uso de
                  tus recursos para alcanzar tus objetivos.
                </li>
              </ul>

              <p className="text-[#34495e] text-base leading-relaxed mb-6">
                Creo en un enfoque cercano y personalizado. Trabajo contigo como
                si fuera parte de tu equipo, escuchando tus necesidades y
                diseñando soluciones únicas para tu negocio.
              </p>

              <a
                href="#contacto"
                className="bg-[#007BFF] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#0056b3] transition duration-300"
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

export default ConsultoriaEmpresarial;
