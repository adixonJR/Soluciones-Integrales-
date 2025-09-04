import React from "react";
import '../comunidad.css';

const ComunidadActiva = () => {
  return (
    <div className="font-sans">
      {/* Portada estilo Hero */}
      <div className="relative w-full h-[500px]">
        {/* Imagen de portada */}
        <img
          src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/Fomentar-la-participacion-activa-en-tus-alumnos-1024x683-1.jpg"
          alt="Comunidad Activa"
          className="w-full h-full object-cover"
        />

        {/* Contenido encima de la imagen */}
        <div className="absolute inset-0 flex flex-col justify-center items-end pr-12">
          <div className="bg-black bg-opacity-40 px-6 py-4 rounded-lg text-right">
            <h1 className="text-3xl font-bold text-white mb-4">
              Comunidad Activa
            </h1>

            {/* Botón de información */}
            <a
              href="https://solucionesintegralesjb.com/comunidad2/#id-activa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-white bg-sky-500 shadow-lg skew-x-[-15deg] hover:shadow-2xl transition rounded-lg"
            >
              <span className="skew-x-[15deg] font-semibold">Información</span>
              <svg
                className="ml-4 w-8 skew-x-[15deg]"
                viewBox="0 0 66 43"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.15 3.89L43.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L44.67 42.86a.5.5 0 01-.7 0L40.15 39.1a.5.5 0 01.01-.71L56.99 21.86a.5.5 0 000-.71L40.15 3.9z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div>
          <section className="bg-[#111] text-white py-16 px-4 text-center">
      <h1 className="text-4xl font-bold text-[#4f7fff] mb-6">
        ¿Qué es una comunidad activa?
      </h1>
      <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
        Una comunidad activa se construye con <b>Progreso</b>,{" "}
        <b>Participación</b> y <b>Colaboración</b>. Aquí mostramos una
        representación visual de esos valores.
      </p>

      {/* Contenedor cubo + libro */}
      <div className="flex justify-center items-center flex-wrap gap-20">
        {/* Cubo 3D */}
        <div>
          <div className="my-loader">
            <div className="rubiks-cube">
              <div className="face front">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={`front-${i}`} className="cube"></div>
                ))}
              </div>
              <div className="face back">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={`back-${i}`} className="cube"></div>
                ))}
              </div>
              <div className="face left">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={`left-${i}`} className="cube"></div>
                ))}
              </div>
              <div className="face right">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={`right-${i}`} className="cube"></div>
                ))}
              </div>
              <div className="face top">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={`top-${i}`} className="cube"></div>
                ))}
              </div>
              <div className="face bottom">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={`bottom-${i}`} className="cube"></div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-[-40px] text-base">
            
          </p>
        </div>

        {/* Libro animado */}
        <div className="book">
          <div className="cover">
            <p className="text">Comunidad</p>
          </div>
          <div className="inner">
            <p className="text">Activa</p>
          </div>
        </div>
      </div>
    </section>
        

{/* Secciones con imágenes */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
  {/* Card 1 */}
  <div className="relative group overflow-hidden rounded-xl shadow-lg">
    <img
      src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/algo.jpg"
      alt="Comunidad 1"
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
      <h3 className="text-lg font-bold text-white mb-2">Nuestra Comunidad</h3>
      <p className="text-sm text-gray-200">
        Nuestra comunidad deportiva es un pilar esencial para apoyar a los niños
        en su crecimiento. Nos enfocamos en brindarles un espacio donde puedan
        mejorar sus habilidades deportivas y aprender valores fundamentales.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative group overflow-hidden rounded-xl shadow-lg">
    <img
      src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/que.jpg"
      alt="Comunidad 2"
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
      <h3 className="text-lg font-bold text-white mb-2">Nuestra Comunidad</h3>
      <p className="text-sm text-gray-200">
        Con nosotros, los niños no solo aprenden y mejoran sus habilidades, sino
        que también se divierten y crecen juntos. Esta experiencia les permite
        formar lazos y recuerdos que llevarán consigo en su vida.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative group overflow-hidden rounded-xl shadow-lg">
    <img
      src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/chamba.jpg"
      alt="Comunidad 3"
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
      <h3 className="text-lg font-bold text-white mb-2">Nuestra Comunidad</h3>
      <p className="text-sm text-gray-200">
        Creemos en la importancia de valores como el trabajo en equipo y la
        perseverancia. Celebramos cada logro y transformamos cada desafío en una
        oportunidad de aprendizaje, lo que ayuda a crear un sentido de
        pertenencia que fortalece su confianza.
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="relative group overflow-hidden rounded-xl shadow-lg">
    <img
      src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/sera.jpg"
      alt="Comunidad 4"
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
      <h3 className="text-lg font-bold text-white mb-2">Nuestra Comunidad</h3>
      <p className="text-sm text-gray-200">
        Además, promovemos hábitos saludables que impactan positivamente en su
        bienestar general. Fomentamos un ambiente seguro y positivo donde los
        niños puedan desarrollarse plenamente.
      </p>
    </div>
  </div>
</div>

<div>

</div>
       {/* Sección F.C Soledad */}
<section className="bg-[#1a1a1a] py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
    
    {/* Texto */}
    <div>
      <h2 className="text-3xl font-bold text-blue-500 mb-4">
        F.C Soledad 2016
      </h2>
      <hr className="border-gray-600 w-32 mb-4" />
      <p className="text-gray-200 leading-relaxed">
        Formando un ambiente tranquilo y seguro, para que nuestros niños
        puedan experimentar el deporte y puedan mejorar sus habilidades
        deportivas.
      </p>
    </div>

    {/* Video */}
    <div className="flex justify-center">
      <video
        className="rounded-lg shadow-lg w-full max-w-lg"
        controls
      >
        <source
          src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/Grabacion-de-pantalla-2024-11-24-181258-1.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos en HTML5.
      </video>
    </div>
  </div>
</section>

      </div>
    </div>
  );
};

export default ComunidadActiva;
