import React from "react";

const Organigrama = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto font-sans">
  
      {/* Imagen */}
      <img
        src="https://i.postimg.cc/RV5pt7yf/Imagen-de-Whats-App-2025-08-14-a-las-14-57-25-53a7ebe1.jpg"
        alt="Organigrama de la empresa"
        className="max-w-4xl w-full mx-auto mb-12 rounded-2xl shadow-lg"
      />

      {/* Título de sección */}
      <section className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2c3e50] uppercase relative inline-block">
          Descripción de Cargos
          <span className="block w-12 h-1 bg-blue-500 mx-auto mt-3"></span>
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          En esta sección encontrarás una lista detallada de los cargos
          disponibles en nuestra empresa.
        </p>
      </section>

      {/* Recuadros de cargos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 text-center">
          <h3 className="text-xl font-semibold text-blue-500 border-b-2 border-gray-200 pb-2 mb-3">
            Gerente General
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed first-letter:font-bold first-letter:text-gray-900">
            Dirige y supervisa todas las operaciones de la empresa, toma
            decisiones estratégicas clave y coordina los esfuerzos de los
            diferentes departamentos.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 text-center">
          <h3 className="text-xl font-semibold text-blue-500 border-b-2 border-gray-200 pb-2 mb-3">
            Asesor Legal
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed first-letter:font-bold first-letter:text-gray-900">
            Brinda asesoramiento jurídico a la empresa, gestiona contratos y
            asegura el cumplimiento de las normativas legales aplicables.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 text-center">
          <h3 className="text-xl font-semibold text-blue-500 border-b-2 border-gray-200 pb-2 mb-3">
            Contabilidad
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed first-letter:font-bold first-letter:text-gray-900">
            Se encarga de llevar el control financiero de la empresa, gestionando
            ingresos, egresos, balances y declaraciones fiscales.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 text-center">
          <h3 className="text-xl font-semibold text-blue-500 border-b-2 border-gray-200 pb-2 mb-3">
            Gerente Administrativo
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed first-letter:font-bold first-letter:text-gray-900">
            Supervisa y gestiona los procesos administrativos de la empresa,
            asegurando la eficiencia en la gestión de recursos y operaciones
            internas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 text-center">
          <h3 className="text-xl font-semibold text-blue-500 border-b-2 border-gray-200 pb-2 mb-3">
            Gerente de Servicios
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed first-letter:font-bold first-letter:text-gray-900">
            Responsable de la gestión de servicios al cliente, asegurando que se
            entreguen de manera eficiente y cumpliendo con los estándares de
            calidad.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 text-center">
          <h3 className="text-xl font-semibold text-blue-500 border-b-2 border-gray-200 pb-2 mb-3">
            SSOMA
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed first-letter:font-bold first-letter:text-gray-900">
            Garantiza que las operaciones de la empresa se realicen de acuerdo
            con las normativas de seguridad, salud ocupacional y protección
            ambiental.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Organigrama;