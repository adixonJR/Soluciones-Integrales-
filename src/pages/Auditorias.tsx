import React from "react";
import fondoN from "../assets/fondoN.jpg"; // 👈 asegúrate de que la ruta sea correcta
import ScrollButton from "../components/ScrollButton";

const Auditorias = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondoN */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center z-10">
          Auditorías
        </h1>
      </div>

      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap mt-8">
          {/* Imagen a la izquierda */}
          <div className="flex-1 pr-12 min-w-[300px]">
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/12/auditorias.jpg"
              alt="Auditorías profesionales"
              className="w-full max-w-[3000px] h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Información a la derecha */}
          <div className="flex-1 min-w-[300px]">
            <div className="text-center p-6 bg-[#f4f9ff] rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-5 text-[#2c3e50]">
                <span className="text-[#3498db]">Consultoría en Auditorías</span>
              </h2>

              <p className="text-[#34495e] text-base leading-relaxed mb-5">
                Mi compromiso es ayudarte a garantizar la transparencia,
                eficiencia y cumplimiento normativo en cada aspecto de tu
                organización. Con amplia experiencia en auditorías, estoy aquí
                para brindarte un servicio detallado y confiable.
              </p>

              <ul className="text-[#34495e] text-base leading-7 list-disc pl-6 text-left inline-block mb-5">
                <li>
                  <strong>Auditorías financieras:</strong> reviso tus registros
                  contables para asegurar exactitud y cumplimiento.
                </li>
                <li>
                  <strong>Auditorías internas:</strong> analizo tus procesos
                  para detectar áreas de mejora.
                </li>
                <li>
                  <strong>Auditorías de cumplimiento:</strong> verifico que tu
                  organización cumpla con las normativas aplicables.
                </li>
                <li>
                  <strong>Asesoría post-auditoría:</strong> te ofrezco soluciones
                  claras y viables para optimizar tu operación.
                </li>
              </ul>

              <p className="text-[#34495e] text-base leading-relaxed mb-6">
                Trabajo contigo de manera cercana y profesional, asegurándome de
                que cada auditoría agregue valor a tu negocio y contribuya a tu
                crecimiento.
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
        <ScrollButton />
      </div>
    </div>
  );
};

export default Auditorias;
