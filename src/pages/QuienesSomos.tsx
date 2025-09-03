import React from "react";
import quienes from '../assets/quienes.jpg';
import { FaChartLine, FaEye } from "react-icons/fa";
import { FaShieldAlt, FaClock, FaKey, FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";



interface Feature {
  title: string;
  text: string;
  as?: "h3" | "h4";
}


interface Props {
  className?: string;
  heroImage?: string;
  heroImageAlt?: string;
  badges?: { label: string; icon: React.ReactNode }[];
  quienes?: string;
}
// ---- Data (from your snippet) ----
const badges = [
  { label: "Confianza", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Velocidad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Calidad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Seguridad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Soporte", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Personalizado", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
];


const heroImage = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/Frame-907-1.png";
const heroImageAlt = "Soluciones Integrales JB para impulsar tu negocio";
const uiImage = "https://solucionesintegralesjb.com/wp-content/uploads/elementor/thumbs/Frame-932-qqow7tfd3r2zohqj4jx9yf23tmjv30p5niiolmvipc.png";
const mockupImage = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/MacBook-Pro-and-iPhone-15-Pro-Mockup-768x787.png";
const videoUrl = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/ES-1.mp4";

// ---- Component ----
const Badge: React.FC<{ label: string; icon: string }>
  = ({ label, icon }) => (
  <div className="flex items-center gap-2 py-1">
    <img src={icon} alt="check icon" className="h-6 w-6" />
    <span className="text-sm sm:text-base">{label}</span>
  </div>
);

const valores = [
  {
    icon: <FaShieldAlt className="fa-3x" />,
    titulo: "SEGURIDAD",
    descripcion:
      "Nuestro objetivo es la protección de la información porque es un activo importante dentro de la organización, y se requiere de una protección adecuada; implementando un conjunto de políticas y controles de seguridad para la preservación de su confidencialidad, integridad y disponibilidad.",
  },
  {
    icon: <FaClock className="fa-3x" />,
    titulo: "EXPERIENCIA",
    descripcion:
      "La calidad de nuestros servicios y soluciones garantizan experiencias basadas en la responsabilidad, el trabajo en equipo y la comunicación con nuestros clientes para lograr los objetivos establecidos.",
  },
  {
    icon: <FaKey className="fa-3x" />,
    titulo: "CONFIANZA",
    descripcion:
      "Utilizamos la tecnología como socio estratégico, aplicándola como solución de negocio para mantener y aumentar la competitividad de nuestros clientes.",
  },
  {
    icon: <FaLightbulb className="fa-3x" />,
    titulo: "INNOVACIÓN",
    descripcion:
      "Nuestros equipos están en la continua búsqueda de nuevas soluciones tecnológicas, para integrarlas en los procesos de una organización.",
  },
  {
    icon: <FaUsers className="fa-3x" />,
    titulo: "EQUIPO",
    descripcion:
      "Somos ágiles, sabemos escuchar, trabajamos de forma rigurosa y transparente con un alto sentido del servicio, buscando siempre satisfacer las expectativas de nuestros clientes.",
  },
  {
    icon: <FaHeart className="fa-3x" />,
    titulo: "VOCACIÓN",
    descripcion:
      "Nuestra principal motivación es conocer y satisfacer las necesidades, dando respuestas rápidas y eficaces a los desafíos tecnológicos de nuestros clientes.",
  },
];




const SolucionesIntegralesJBSection: React.FC<Props> = ({ className }) => {
  return (
    <section className={"w-full " + (className || "")}>
      {/* Imagen con botón encima */}
      <div className="relative w-full">
        {/* Imagen */}
        <img
          src={quienes}
          alt="Quiénes somos"
          className="w-full h-[500px] object-cover"
        />
        {/* Botón centrado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://solucionesintegralesjb.com/#services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">
              <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">
                  Descubre nuestros servicios
                </span>
              </span>
            </button>
          </a>
        </div>
      </div>

      {/* Quienes somos */}
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-gray-500">Quienes somos</p>
          <h2 className="text-3xl font-bold">Somos tus aliados Digitales.</h2>
          <p>
            Somos una empresa dedicada a ofrecer servicios digitales personalizados, desde el desarrollo de software y sitios web con diseño gráfico. entre mas servicios. Transformamos sus ideas en soluciones que impulsan su negocio hacia el éxito corporativo con Soluciones Integrales.
          </p>
          <div>
            <p className="font-semibold mb-2">Características de Nuestros Servicios:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
              {badges.map((b) => (
                <Badge key={b.label} label={b.label} icon={b.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
{/* Misión y Visión */}
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8">
        {/* Card Misión */}
        <div className="custom-card">
          <div className="custom-card__icon">
            <FaChartLine />
            <p className="custom-card__text">MISIÓN</p>
          </div>
          <div className="custom-card__content">
            <p className="custom-card__title">Misión</p>
            <p className="custom-card__description">
              Trabajamos en el desarrollo e integración de múltiples soluciones
              basadas en la tecnología, con un equipo de profesionales altamente
              calificados para cumplir los requerimientos de nuestros clientes,
              aplicando los estándares de calidad, seguridad, y responsabilidad
              social, dentro del costo y plazo previsto.
            </p>
          </div>
        </div>

        {/* Card Visión */}
        <div className="custom-card light">
          <div className="custom-card__icon">
            <FaEye />
            <p className="custom-card__text">VISIÓN</p>
          </div>
          <div className="custom-card__content">
            <p className="custom-card__title">Visión</p>
            <p className="custom-card__description">
              Ser una empresa líder, en el desarrollo de soluciones de forma
              integral en la Tecnología de Información, formando alianzas
              estratégicas con la innovación tecnológica, para lograr los
              objetivos de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
                <section className="w-full bg-[#007BFF] py-16 flex justify-center items-center">
      <div className="max-w-3xl w-full text-center px-4">
        <h2 className="text-white text-3xl font-bold mb-6">OBJETIVOS</h2>
        <p className="text-white mb-8">
          La empresa se centra en reforzar la gestión de servicios de TI,
          desarrollando soluciones que respondan a las necesidades de los
          clientes mediante el uso de tecnología avanzada. Buscamos mejorar
          nuestras operaciones y proyectos, fortaleciendo nuestras habilidades
          para enfrentar los retos digitales actuales, promoviendo la seguridad
          y la productividad.
        </p>

        {/* Botón */}
        <div className="buttons flex justify-center">
          <button className="btn" onClick={() => alert("Abrir chat")}>
            <span></span>
            <p data-text="GRACIAS!" data-title="CONTACTANOS"></p>
          </button>
        </div>
      </div>

      {/* Estilos del botón */}
      <style>{`
        .buttons button {
          width: 180px;
          height: 60px;
          background-color: #007BFF;
          margin: 20px;
          color: white;
          position: relative;
          overflow: hidden;
          font-size: 16px;
          letter-spacing: 1px;
          font-weight: 500;
          text-transform: uppercase;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          padding: 0 10px;
        }

        .buttons button:before,
        .buttons button:after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background-color: white;
          transition: all 0.3s cubic-bezier(0.35, 0.1, 0.25, 1);
        }

        .buttons button:before {
          right: 0;
          top: 0;
          transition: all 0.5s cubic-bezier(0.35, 0.1, 0.25, 1);
        }

        .buttons button:after {
          left: 0;
          bottom: 0;
        }

        .buttons button span {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          margin: 0;
          padding: 0;
          z-index: 1;
        }

        .buttons button span:before,
        .buttons button span:after {
          content: "";
          position: absolute;
          width: 2px;
          height: 0;
          background-color: white;
          transition: all 0.3s cubic-bezier(0.35, 0.1, 0.25, 1);
        }

        .buttons button span:before {
          right: 0;
          top: 0;
          transition: all 0.5s cubic-bezier(0.35, 0.1, 0.25, 1);
        }

        .buttons button span:after {
          left: 0;
          bottom: 0;
        }

        .buttons button p {
          padding: 0;
          margin: 0;
          transition: all 0.4s cubic-bezier(0.35, 0.1, 0.25, 1);
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .buttons button p:before,
        .buttons button p:after {
          position: absolute;
          width: 100%;
          transition: all 0.4s cubic-bezier(0.35, 0.1, 0.25, 1);
          z-index: 1;
          left: 0;
        }

        .buttons button p:before {
          content: attr(data-title);
          top: 50%;
          transform: translateY(-50%);
        }

        .buttons button p:after {
          content: attr(data-text);
          top: 150%;
          color: white;
        }

        .buttons button:hover:before,
        .buttons button:hover:after {
          width: 100%;
        }

        .buttons button:hover span {
          z-index: 1;
        }

        .buttons button:hover span:before,
        .buttons button:hover span:after {
          height: 100%;
        }

        .buttons button:hover p:before {
          top: -50%;
          transform: rotate(5deg);
        }

        .buttons button:hover p:after {
          top: 50%;
          transform: translateY(-50%);
        }

        .buttons button:active {
          outline: none;
          border: none;
        }

        .buttons button:focus {
          outline: 0;
        }
      `}</style>
    </section>

      <div>
          <section className="mx-auto max-w-6xl px-4 py-16">
    <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {valores.map((valor, index) => (
        <div key={index} className="group perspective w-full h-64">
          <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-500 shadow-xl rounded-lg">
            {/* Frente */}
            <div className="absolute inset-0 bg-[#1c1c1c] text-white flex flex-col items-center justify-center p-6 backface-hidden rounded-lg">
              {valor.icon}
              <h3 className="mt-4 font-bold text-lg">{valor.titulo}</h3>
            </div>
            {/* Reverso */}
            <div className="absolute inset-0 bg-black text-white flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden rounded-lg">
              <p className="text-sm text-center">{valor.descripcion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
      </div>

      {/* Estilos personalizados */}
      <style>{`
        .custom-card {
          position: relative;
          width: 100%;
          min-height: 300px;
          background-color: #000000;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          perspective: 1000px;
          box-shadow: 0 0 0 5px #1E88E5;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          color: white;
        }
        .custom-card.light {
          background-color: #f2f2f2;
          color: #000;
        }
        .custom-card__icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 64px;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .custom-card.light .custom-card__icon {
          color: #1E88E5;
        }
        .custom-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        .custom-card__content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 25px;
          box-sizing: border-box;
          transform: rotateX(-90deg);
          transform-origin: bottom;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .custom-card:hover .custom-card__content {
          transform: rotateX(0deg);
        }
        .custom-card__title {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
        }
        .custom-card:hover .custom-card__icon {
          transform: scale(0);
        }
        .custom-card__description {
          margin: 15px 0 0;
          font-size: 16px;
          line-height: 1.6;
        }
        .custom-card__text {
          margin-top: 10px;
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>

       {/* Estilos botón */}
      <style>{`
        .button {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          border: none;
          background: none;
          color: #0f1923;
          cursor: pointer;
          position: relative;
          padding: 8px;
          margin-bottom: 20px;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 14px;
          transition: all .15s ease;
        }

        .button::before,
        .button::after {
          content: '';
          display: block;
          position: absolute;
          right: 0;
          left: 0;
          height: calc(50% - 5px);
          border: 1px solid #7D8082;
          transition: all .15s ease;
        }

        .button::before {
          top: 0;
          border-bottom-width: 0;
        }

        .button::after {
          bottom: 0;
          border-top-width: 0;
        }

        .button:active,
        .button:focus {
          outline: none;
        }

        .button:active::before,
        .button:active::after {
          right: 3px;
          left: 3px;
        }

        .button:active::before {
          top: 3px;
        }

        .button:active::after {
          bottom: 3px;
        }

        .button_lg {
          position: relative;
          display: block;
          padding: 10px 20px;
          color: #fff;
          background-color: black;
          overflow: hidden;
          box-shadow: inset 0px 0px 0px 1px transparent;
        }

        .button_lg::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          background-color: #0f1923;
        }

        .button_lg::after {
          content: '';
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
          width: 4px;
          height: 4px;
          background-color: white;
          transition: all .2s ease;
        }

        .button_sl {
          display: block;
          position: absolute;
          top: 0;
          bottom: -1px;
          left: -8px;
          width: 0;
          background-color: #106CD8;
          transform: skew(-15deg);
          transition: all .2s ease;
        }

        .button_text {
          position: relative;
        }

        .button:hover {
          color: #0f1923;
        }

        .button:hover .button_sl {
          width: calc(100% + 15px);
        }

        .button:hover .button_lg::after {
          background-color: #fff;
        }
      `}</style>
    </section>
  );
};

export default SolucionesIntegralesJBSection;
