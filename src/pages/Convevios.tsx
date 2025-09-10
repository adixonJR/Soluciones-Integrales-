import React from "react";
import ScrollButton from "../components/ScrollButton";

const Convenios = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">Convenios</h1>
      <h2 className="text-xl text-center mb-8">Prácticas - Profesionales</h2>

      <div className="flex justify-center mb-8">
        <a
          href="https://solucionesintegralesjb.com/convenio2/#id-conve"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta">
            <span className="span">Información</span>
            <svg
              width="50px"
              height="20px"
              viewBox="0 0 66 43"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M40.1543933,3.89485454 L43.9763149,0.139296592 ..."
                  fill="#FFFFFF"
                />
                {/* Agrega los otros paths del SVG aquí si los necesitas */}
              </g>
            </svg>
          </button>
        </a>
      </div>

      <div className="mb-10">
        <img
          className="mx-auto rounded-lg shadow-lg border-2 border-cyan-400"
          width="660"
          height="440"
          src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/16735073773853.jpg"
          alt="Convenio"
        />
      </div>

      <h3 className="text-2xl font-semibold mb-2">¿Por qué es importante el convenio?</h3>
      <p className="mb-6">
        Nuestra empresa tiene convenios con diversas instituciones públicas y privadas para la
        formación de nuevos profesionales. Nuestra propuesta de trabajo estratégico e integrado es
        ofrecer a través de diferentes áreas de servicios, en donde nuestros equipos de
        profesionales se encargan de transmitir todos los conocimientos necesarios para preparar a
        los estudiantes o egresados de una carrera como profesionales competentes.
      </p>

      <h4 className="text-xl font-bold mb-2">"Alianzas Estratégicas para Tu Futuro Profesional"</h4>

      <img
        className="rounded-lg shadow-lg mb-6 w-full max-w-4xl mx-auto"
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/Inauguracion-Ilo-03-scaled-1-1200x800.jpg"
        alt="Inauguración"
      />

      {/* Agrega más instituciones aquí si quieres reutilizar la misma estructura */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">SENATI</h2>
        <p className="mt-2 mb-6">
          La colaboración entre SENATI y Soluciones Integrales JB tiene como objetivo crear una
          sinergia que beneficie a ambas partes. SENATI proporcionará formación técnica actualizada
          y alineada con las necesidades del mercado laboral...
        </p>

        <figure className="flex justify-center mb-10 gap-4 flex-wrap">
          <img
            className="w-80 rounded-lg border-2 border-cyan-400 shadow-lg"
            src="https://assets.isu.pub/document-structure/230829222103-2b84e3d30152242c3ba8dc2f755b27d4/v1/47af25fc4572f3dbb0f926ee054ccff9.jpeg"
          />
          <img
            className="w-80 rounded-lg border-2 border-cyan-400 shadow-lg"
            src="https://elcomercio.pe/resizer/tH65A-_HcP1OBN1QnDPzdRKr8Vs=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FJSX7NXQS5GQ3J3MSKB7LXNKZA.jpg"
          />
          <img
            className="w-80 rounded-lg border-2 border-cyan-400 shadow-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEt8LsudDua5jNDpRGb-rquvA14EMMUFIYgnO--wvcicRxcX86LX5wQVZNyVJCZ_4Gmg&usqp=CAU"
          />
        </figure>
        <ScrollButton />
      </section>
         
      {/* Repite la misma estructura para otras instituciones como Huando, Chancay, UNJFSC, etc. */}
    </div>
  );
};

export default Convenios;