import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaUsers,
  FaHistory,
  FaHandshake,
  FaPeopleCarry,
  FaLaptopCode,
  FaBuilding,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaShieldAlt,
  FaSitemap,
  FaUserTie,
  FaCode,
  FaFileInvoiceDollar,
  FaLock,
  FaNetworkWired,
  FaServer,
  FaTools,
  FaSearch,
  FaPaintBrush,
  FaGift,
  FaShareAlt,
  FaBolt,
  FaSnowflake,
  FaPlug,
  FaHeadset,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // iconos hamburguesa
import logo from "../assets/logo.svg";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-40 h-10" />
      </div>

      {/* Menú Desktop */}
      <ul className="hidden md:flex gap-8 text-sm font-semibold select-none">
        <li>
          <a
            href="/"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            INICIO
          </a>
        </li>

        {/* Dropdown Nosotros */}
        <li className="relative cursor-pointer group">
          <span className="hover:text-cyan-400 transition-colors duration-200">
            NOSOTROS
          </span>
          <div
            className="fixed left-0 top-[70px] w-[80%] mx-auto right-0 bg-white z-50 p-10 grid grid-cols-4 gap-10 
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                       transition-all duration-300 shadow-lg rounded-lg"
          >
            <div>
              <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                Nuestra Empresa
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaUsers /> <a href="/QuienesSomos">Quienes Somos</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaHistory /> <a href="/NuestraHistoria">Nuestra Historia</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                Responsabilidad Social
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaHandshake /> <a href="/Convenios">Convenios</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaPeopleCarry />{" "}
                  <a href="/ComunidadActiva">Comunidad Activa</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                Consultoría
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaLaptopCode /> <a href="/ConsultoriaTI">Consultoría TI</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaBuilding />{" "}
                  <a href="/ConsultoriaEmpresarial">Consultoría Empresarial</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                Nuestra Organización
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaSitemap /> <a href="/Organigrama">Organigrama</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaUserTie /> <a href="/NuestroEquipo">Nuestro Equipo</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Dropdown Servicios */}
        <li className="relative cursor-pointer group">
          <span className="hover:text-cyan-400 transition-colors duration-200">
            SERVICIOS
          </span>
          <div
            className="fixed left-0 top-[70px] w-[90%] mx-auto right-0 bg-white z-50 p-10 grid grid-cols-4 gap-10 
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                       transition-all duration-300 shadow-lg rounded-lg"
          >
            <div>
              <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                Tecnología de Información
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaCode />{" "}
                  <a href="/DesarrolloDeSoftware">Desarrollo de Software</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaFileInvoiceDollar />{" "}
                  <a href="/FacturacionElectronica">Facturación Electrónica</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaLock />{" "}
                  <a href="/TecnologiaEnSeguridad">Tecnología en Seguridad</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaNetworkWired />{" "}
                  <a href="/RedesEInfrostructura">Redes e Infraestructura</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaServer /> <a href="/HostingYDominio">Hosting y Dominio</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaTools /> <a href="/SoporteTecnico">Soporte Técnico</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                Consultoría
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaLaptopCode /> <a href="/ConsultoriaTI">Consultoría TI</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaBuilding />{" "}
                  <a href="/ConsultoriaEmpresarial">Consultoría Empresarial</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaChalkboardTeacher />{" "}
                  <a href="/ConsultoriaEducativa">Consultoría Educativa</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaClipboardCheck /> <a href="/Auditorias">Auditorías</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaShieldAlt />{" "}
                  <a href="/SeguridadInformatica">Seguridad Informática</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                Marketing Digital
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaCode />{" "}
                  <a href="/DesarrolloDeSitiosWeb">Desarrollo de Sitio Web</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaSearch />{" "}
                  <a href="/PosicionamientoSEO">Posicionamiento SEO</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaPaintBrush />{" "}
                  <a href="/GraficaPublicitaria">Gráfica Publicitaria</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaGift /> <a href="/Merchandising">Merchandising</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaShareAlt /> <a href="/SocialMedia">Social Media</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                Ing. Eléctrica
              </p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaBolt />{" "}
                  <a href="/MantenimientoElectrico">Mantenimiento Eléctrico</a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaSnowflake />{" "}
                  <a href="/RefrigeracionIndustrial">
                    Refrigeración Industrial
                  </a>
                </li>
                <li className="flex items-center gap-2 hover:text-cyan-600">
                  <FaPlug />{" "}
                  <a href="/InstalacionesElectricas">
                    Instalaciones Eléctricas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <Link
            to="/contacto"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            CONTACTO
          </Link>
        </li>
      </ul>

      {/* Redes sociales Desktop */}
      <div className="hidden md:flex gap-3">
        {[FaFacebookF, FaEnvelope, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok].map(
          (Icon, idx) => (
            <div
              key={idx}
              className="bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-cyan-400 hover:text-white cursor-pointer transition-colors duration-200"
            >
              <Icon />
            </div>
          )
        )}
      </div>

      {/* Botón hamburguesa */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg p-6 md:hidden">
          <ul className="space-y-4 font-semibold text-gray-800">
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                INICIO
              </Link>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("nosotros")}
                className="w-full text-left"
              >
                NOSOTROS
              </button>
              {openDropdown === "nosotros" && (
                <ul className="ml-4 mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FaUsers /> <a href="/QuienesSomos">Quiénes Somos</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHistory /> <a href="/NuestraHistoria">Nuestra Historia</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaSitemap /> <a href="/Organigrama">Organigrama</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaUserTie /> <a href="/NuestroEquipo">Nuestro Equipo</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("servicios")}
                className="w-full text-left"
              >
                SERVICIOS
              </button>
              {openDropdown === "servicios" && (
                <ul className="ml-4 mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FaLaptopCode />{" "}
                    <a href="/DesarrolloDeSoftware">Desarrollo de Software</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaFileInvoiceDollar />{" "}
                    <a href="/FacturacionElectronica">Facturación Electrónica</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLock />{" "}
                    <a href="/TecnologiaEnSeguridad">Tecnología en Seguridad</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaNetworkWired />{" "}
                    <a href="/RedesEInfraestructura">Redes e Infraestructura</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaServer /> <a href="/HostingYDominio">Hosting y Dominio</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHeadset /> <a href="/SoporteTecnico">Soporte Técnico</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClipboardCheck /> <a href="/Auditorias">Auditorías</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
