import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // iconos para hamburguesa
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
        <img src={logo} alt="Logo" className="w-90 h-10" />
      </div>

      {/* Menú principal Desktop */}
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
            className="fixed left-0 top-[70px] w-screen bg-[#222] z-50 p-10 grid grid-cols-4 gap-10 
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                       transition-all duration-300"
          >
            {/* Columna 1 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">
                Nuestra Empresa
              </p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  <a href="/QuienesSomos" className="hover:text-cyan-400">
                    Quienes Somos
                  </a>
                </li>
                <li>
                  <a href="/NuestraHistoria" className="hover:text-cyan-400">
                    Nuestra Historia
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 2 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">
                Responsabilidad Social
              </p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  <a href="/Convenios" className="hover:text-cyan-400">
                    Convenios
                  </a>
                </li>
                <li>
                  <a href="/ComunidadActiva" className="hover:text-cyan-400">
                    Comunidad Activa
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">
                Consultoría
              </p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  <a href="/ConsultoriaTI" className="hover:text-cyan-400">
                    Consultoría TI
                  </a>
                </li>
                <li>
                  <a
                    href="/ConsultoriaEmpresarial"
                    className="hover:text-cyan-400"
                  >
                    Consultoría Empresarial
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">
                Nuestra Organización
              </p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  <a href="/Organigrama" className="hover:text-cyan-400">
                    Organigrama
                  </a>
                </li>
                <li>
                  <a href="/NuestroEquipo" className="hover:text-cyan-400">
                    Nuestro Equipo
                  </a>
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
            className="fixed left-0 top-[70px] w-screen bg-[#222] z-50 p-10 grid grid-cols-4 gap-10 
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                       transition-all duration-300"
          >
            {/* Columna 1 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">
                Tecnología de Información
              </p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  <a
                    href="/DesarrolloDeSoftware"
                    className="hover:text-cyan-400"
                  >
                    Desarrollo de Software
                  </a>
                </li>
                <li>
                  <a
                    href="/FacturacionElectronica"
                    className="hover:text-cyan-400"
                  >
                    Facturación Electrónica
                  </a>
                </li>
                <li>
                  <a
                    href="/TecnologiaEnSeguridad"
                    className="hover:text-cyan-400"
                  >
                    Tecnología en Seguridad
                  </a>
                </li>
                <li>
                  <a
                    href="/RedesEInfrostructura"
                    className="hover:text-cyan-400"
                  >
                    Redes e Infraestructura
                  </a>
                </li>
                <li>
                  <a href="/HostingYDominio" className="hover:text-cyan-400">
                    Hosting y Dominio
                  </a>
                </li>
                <li>
                  <a href="/SoporteTecnico" className="hover:text-cyan-400">
                    Soporte Técnico
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 2 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">
                Consultoría
              </p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  <a href="/ConsultoriaTI" className="hover:text-cyan-400">
                    Consultoría TI
                  </a>
                </li>
                <li>
                  <a
                    href="/ConsultoriaEmpresarial"
                    className="hover:text-cyan-400"
                  >
                    Consultoría Empresarial
                  </a>
                </li>
                <li>
                  <a
                    href="/ConsultoriaEducativa"
                    className="hover:text-cyan-400"
                  >
                    Consultoría Educativa
                  </a>
                </li>
                <li>
                  <a href="/Auditorias" className="hover:text-cyan-400">
                    Auditorías
                  </a>
                </li>
                <li>
                  <a
                    href="/SeguridadInformatica"
                    className="hover:text-cyan-400"
                  >
                    Seguridad Informática
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">
                Marketing Digital
              </p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  <a
                    href="/DesarrolloDeSitiosWeb"
                    className="hover:text-cyan-400"
                  >
                    Desarrollo de sitio Web
                  </a>
                </li>
                <li>
                  <a href="/PosicionamientoSEO" className="hover:text-cyan-400">
                    Posicionamiento SEO
                  </a>
                </li>
                <li>
                  <a
                    href="/GraficaPublicitaria"
                    className="hover:text-cyan-400"
                  >
                    Gráfica Publicitaria
                  </a>
                </li>
                <li>
                  <a href="/Merchandising" className="hover:text-cyan-400">
                    Merchandising
                  </a>
                </li>
                <li>
                  <a href="/SocialMedia" className="hover:text-cyan-400">
                    Social Media
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">
                Ing. Eléctrica
              </p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  <a
                    href="/MantenimientoElectrico"
                    className="hover:text-cyan-400"
                  >
                    Mantenimiento Eléctrico
                  </a>
                </li>
                <li>
                  <a
                    href="/RefrigeracionIndustrial"
                    className="hover:text-cyan-400"
                  >
                    Refrigeración Industrial
                  </a>
                </li>
                <li>
                  <a
                    href="/InstalacionesElectricas"
                    className="hover:text-cyan-400"
                  >
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

      {/* Botón Hamburguesa Mobile */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#1a1a1a] text-white flex flex-col gap-4 p-6 md:hidden">
          <Link
            to="/"
            className="hover:text-cyan-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            INICIO
          </Link>

          {/* Nosotros Mobile */}
          <div>
            <button
              className="w-full text-left hover:text-cyan-400"
              onClick={() => toggleDropdown("nosotros")}
            >
              NOSOTROS
            </button>
            {openDropdown === "nosotros" && (
              <ul className="ml-4 mt-2 space-y-1 text-gray-300 text-sm">
                <li>
                  <Link to="/QuienesSomos" onClick={() => setMobileMenuOpen(false)}>
                    Quienes Somos
                  </Link>
                </li>
                <li>
                  <Link to="/NuestraHistoria" onClick={() => setMobileMenuOpen(false)}>
                    Nuestra Historia
                  </Link>
                </li>
                <li>
                  <Link to="/Convenios" onClick={() => setMobileMenuOpen(false)}>
                    Convenios
                  </Link>
                </li>
                <li>
                  <Link to="/ComunidadActiva" onClick={() => setMobileMenuOpen(false)}>
                    Comunidad Activa
                  </Link>
                </li>
                <li>
                  <Link to="/ConsultoriaTI" onClick={() => setMobileMenuOpen(false)}>
                    Consultoría TI
                  </Link>
                </li>
                <li>
                  <Link to="/ConsultoriaEmpresarial" onClick={() => setMobileMenuOpen(false)}>
                    Consultoría Empresarial
                  </Link>
                </li>
                <li>
                  <Link to="/Organigrama" onClick={() => setMobileMenuOpen(false)}>
                    Organigrama
                  </Link>
                </li>
                <li>
                  <Link to="/NuestroEquipo" onClick={() => setMobileMenuOpen(false)}>
                    Nuestro Equipo
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Servicios Mobile */}
          <div>
            <button
              className="w-full text-left hover:text-cyan-400"
              onClick={() => toggleDropdown("servicios")}
            >
              SERVICIOS
            </button>
            {openDropdown === "servicios" && (
              <ul className="ml-4 mt-2 space-y-1 text-gray-300 text-sm">
                <li>
                  <Link to="/DesarrolloDeSoftware" onClick={() => setMobileMenuOpen(false)}>
                    Desarrollo de Software
                  </Link>
                </li>
                <li>
                  <Link to="/FacturacionElectronica" onClick={() => setMobileMenuOpen(false)}>
                    Facturación Electrónica
                  </Link>
                </li>
                <li>
                  <Link to="/TecnologiaEnSeguridad" onClick={() => setMobileMenuOpen(false)}>
                    Tecnología en Seguridad
                  </Link>
                </li>
                <li>
                  <Link to="/RedesEInfrostructura" onClick={() => setMobileMenuOpen(false)}>
                    Redes e Infraestructura
                  </Link>
                </li>
                <li>
                  <Link to="/HostingYDominio" onClick={() => setMobileMenuOpen(false)}>
                    Hosting y Dominio
                  </Link>
                </li>
                <li>
                  <Link to="/SoporteTecnico" onClick={() => setMobileMenuOpen(false)}>
                    Soporte Técnico
                  </Link>
                </li>
                <li>
                  <Link to="/ConsultoriaTI" onClick={() => setMobileMenuOpen(false)}>
                    Consultoría TI
                  </Link>
                </li>
                <li>
                  <Link to="/ConsultoriaEmpresarial" onClick={() => setMobileMenuOpen(false)}>
                    Consultoría Empresarial
                  </Link>
                </li>
                <li>
                  <Link to="/ConsultoriaEducativa" onClick={() => setMobileMenuOpen(false)}>
                    Consultoría Educativa
                  </Link>
                </li>
                <li>
                  <Link to="/Auditorias" onClick={() => setMobileMenuOpen(false)}>
                    Auditorías
                  </Link>
                </li>
                <li>
                  <Link to="/SeguridadInformatica" onClick={() => setMobileMenuOpen(false)}>
                    Seguridad Informática
                  </Link>
                </li>
                <li>
                  <Link to="/DesarrolloDeSitiosWeb" onClick={() => setMobileMenuOpen(false)}>
                    Desarrollo de Sitio Web
                  </Link>
                </li>
                <li>
                  <Link to="/PosicionamientoSEO" onClick={() => setMobileMenuOpen(false)}>
                    Posicionamiento SEO
                  </Link>
                </li>
                <li>
                  <Link to="/GraficaPublicitaria" onClick={() => setMobileMenuOpen(false)}>
                    Gráfica Publicitaria
                  </Link>
                </li>
                <li>
                  <Link to="/Merchandising" onClick={() => setMobileMenuOpen(false)}>
                    Merchandising
                  </Link>
                </li>
                <li>
                  <Link to="/SocialMedia" onClick={() => setMobileMenuOpen(false)}>
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link to="/MantenimientoElectrico" onClick={() => setMobileMenuOpen(false)}>
                    Mantenimiento Eléctrico
                  </Link>
                </li>
                <li>
                  <Link to="/RefrigeracionIndustrial" onClick={() => setMobileMenuOpen(false)}>
                    Refrigeración Industrial
                  </Link>
                </li>
                <li>
                  <Link to="/InstalacionesElectricas" onClick={() => setMobileMenuOpen(false)}>
                    Instalaciones Eléctricas
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            to="/contacto"
            className="hover:text-cyan-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACTO
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
