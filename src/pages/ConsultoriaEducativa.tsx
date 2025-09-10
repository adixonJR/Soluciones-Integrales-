import React from "react";
import fondoN from "../assets/fondoN.jpg"; // 👈 asegúrate de que la ruta sea correcta
import ScrollButton from "../components/ScrollButton";

const ConsultoriaEducativa = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondoN.jpg */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center z-10">
          Consultoría Educativa
        </h1>
      </div>

      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap mt-8">
          {/* Imagen a la izquierda */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/12/educativa.jpg"
              alt="Consultoría Educativa"
              className="w-full max-w-[3000px] h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Información a la derecha */}
          <div className="flex-1 min-w-[300px]">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-5 text-[#2c3e50]">
                <span className="text-[#3498db]">Consultoría Educativa</span>
              </h2>
              <p className="text-[#34495e] text-base leading-relaxed mb-5">
                Mi misión es apoyar a instituciones, docentes y estudiantes en
                la mejora de sus procesos educativos. Con experiencia en el
                sector, estoy aquí para ayudarte a enfrentar los desafíos de la
                educación moderna y aprovechar cada oportunidad para crecer.
              </p>

              <ul className="text-[#34495e] text-base leading-7 list-disc pl-6 text-left inline-block mb-5">
                <li>
                  <strong>Diseño curricular:</strong> desarrollo programas
                  educativos a medida para tus necesidades.
                </li>
                <li>
                  <strong>Formación docente:</strong> capacito a tu equipo para
                  que brinden lo mejor a sus estudiantes.
                </li>
                <li>
                  <strong>Tecnología educativa:</strong> implemento herramientas
                  digitales para mejorar el aprendizaje.
                </li>
                <li>
                  <strong>Evaluación de programas:</strong> analizo y optimizo
                  tus proyectos educativos existentes.
                </li>
              </ul>

              <p className="text-[#34495e] text-base leading-relaxed mb-6">
                Trabajo contigo de forma cercana y personalizada, diseñando
                estrategias educativas que realmente marquen la diferencia.
                Estoy comprometido con el éxito de tu comunidad educativa.
              </p>

              <a
                href="#contacto"
                className="bg-[#3498db] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#2980b9] transition duration-300"
              >
                ¡Conversemos!
              </a>
            </div>
          </div>
        </div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default ConsultoriaEducativa;
