import React from "react";
<body>
    <p>
    ‎‎‎‎‎‎‎‎‎‎‎
    </p>
</body>
const AboutSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Imagen principal */}
      <div className="text-center">
        <img
          src="https://solucionesintegralesjb.com/wp-content/uploads/2024/06/Frame-907-1.png"
          alt="Soluciones Integrales JB para impulsar tu negocio"
          className="w-[300px] md:w-[500px] mx-auto"
        />
        <h2 className="text-2xl font-bold mt-4">Somos tus aliados Digitales</h2>
        <p className="mt-2 text-gray-700">
          Somos una empresa dedicada a ofrecer servicios digitales
          personalizados, desde el desarrollo de software y sitios web con
          diseño gráfico. Transformamos tus ideas en soluciones que impulsan tu
          negocio hacia el éxito corporativo con Soluciones Integrales.
        </p>
      </div>

      {/* Características */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Características de Nuestros Servicios:</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            "Confianza",
            "Velocidad",
            "Calidad",
            "Seguridad",
            "Soporte",
            "Personalizado",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <img
                src="https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg"
                alt="check"
                className="w-6 h-6"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Servicios */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Soluciones Estratégicas para Crecer</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "Desarrollo de Software",
              img: "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/mejores-herramientas-desarrollo-software-1-400x267.png",
            },
            {
              title: "Facturación Electrónica",
              img: "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/s3-blog-facturacion-electronica-min-400x256.png",
            },
            {
              title: "Soporte Técnico",
              img: "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/Soporte-en-Sitio-¿Que-es-eso-copia-400x267.webp",
            },
            {
              title: "Tecnología en Seguridad",
              img: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/tecnologia-seguridad-1-768x512.jpg",
            },
          ].map((service, idx) => (
            <div key={idx} className="text-center shadow-md rounded-lg p-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{service.title}</h3>
              <button className="mt-2 text-blue-600 hover:underline">
                Información
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonios */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Qué dicen de nosotros</h2>
        <p className="text-gray-600">
          Opiniones auténticas que avalan la calidad y rendimiento de nuestros
          servicios.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            {
              name: "Italo Romero",
              comment: "Buen servicio de sitios web, excelente diseño y experiencia.",
              img: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-1.png",
            },
            {
              name: "William Moises",
              comment:
                "Buen lugar donde te ofrecen de todo en tecnología informática y ciber vigilancia.",
              img: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-2.png",
            },
            {
              name: "Fritzl Yacomin",
              comment:
                "Excelente atención, realmente muy profesionales en su trato y servicio.",
              img: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed.png",
            },
            {
              name: "Ana Montes",
              comment:
                "Muy buen servicio de parte de los empleados, atentos y serviciales.",
              img: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-4.png",
            },
          ].map((t, idx) => (
            <div key={idx} className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full" />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-600">{t.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clientes */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Nuestros Clientes</h2>
        <p className="text-gray-600">Las marcas que confían en Soluciones Integrales JB</p>
        <div className="flex flex-wrap gap-6 mt-6 justify-center">
          {[
            "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-5.svg",
            "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-4.svg",
            "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-1-1.svg",
            "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-7.svg",
            "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-10.svg",
          ].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Cliente ${idx + 1}`}
              className="h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
