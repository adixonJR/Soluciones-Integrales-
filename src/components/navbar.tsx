import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok
} from 'react-icons/fa';
import logo from '../assets/logo.svg';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null); // controlamos qué dropdown está abierto

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu); // alterna entre abrir/cerrar
  };

  return (
    <nav className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between shadow-md relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-90 h-10" />
      </div>

      {/* Menú principal */}
      <ul className="hidden md:flex gap-8 text-sm font-semibold select-none">
        <li>
          <a href="/" className="hover:text-cyan-400 transition-colors duration-200">
            INICIO
          </a>
        </li>

        {/* Dropdown Nosotros */}
        <li className="relative cursor-pointer">
          <span
            onClick={() => toggleMenu("nosotros")}
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            NOSOTROS
          </span>
          {openMenu === "nosotros" && (
            <div className="absolute left-0 top-full mt-2 w-56 bg-[#222] rounded shadow-lg z-50">
              <div className="px-4 py-3 border-b border-gray-700">
                <p className="text-xs uppercase font-bold text-gray-400 mb-2">NUESTRA EMPRESA</p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><a href="/QuienesSomos" className="hover:text-cyan-400">Quienes Somos</a></li>
                  <li><a href="/NuestraHistoria" className="hover:text-cyan-400">Nuestra Historia</a></li>
                </ul>
              </div>
              <div className="px-4 py-3 border-b border-gray-700">
                <p className="text-xs uppercase font-bold text-gray-400 mb-2">RESPONSABILIDAD SOCIAL</p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><a href="/Convenios" className="hover:text-cyan-400">Convenios</a></li>
                  <li><a href="/ComunidadActiva" className="hover:text-cyan-400">Comunidad Activa</a></li>
                </ul>
              </div>
              <div className="px-4 py-3">
                <p className="text-xs uppercase font-bold text-gray-400 mb-2">CONSULTORÍA</p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><a href="/ConsultoriaTI" className="hover:text-cyan-400">Consultoría TI</a></li>
                  <li><a href="/ConsultoriaEmpresarial" className="hover:text-cyan-400">Consultoría Empresarial</a></li>
                 <p className="text-xs uppercase font-bold text-gray-400 mb-2">Nuestra Organizacion</p>
                  <li><a href="/Organigrama" className="hover:text-cyan-400">Organigrama</a></li>
                  <li><a href="/NuestroEquipo" className="hover:text-cyan-400">Nuestro Equipo</a></li>
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* Dropdown Servicios */}
        <li className="relative cursor-pointer">
          <span
            onClick={() => toggleMenu("servicios")}
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            SERVICIOS
          </span>
          {openMenu === "servicios" && (
            <div className="absolute left-0 top-full mt-2 w-56 bg-[#222] rounded shadow-lg z-50 p-4 flex flex-col gap-4">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400 mb-2">Tecnología de Información</p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><a href="/DesarrolloDeSoftware" className="hover:text-cyan-400">Desarrollo de Software</a></li>
                  <li><a href="/FacturacionElectronica" className="hover:text-cyan-400">Facturación Electrónica</a></li>
                  <li><a href="/TecnologiaEnSeguridad" className="hover:text-cyan-400">Tecnología en Seguridad</a></li>
                  <li><a href="/RedesEInfrostructura" className="hover:text-cyan-400">Redes e Infraestructura</a></li>
                  <li><a href="/HostingYDominio" className="hover:text-cyan-400">Hosting y Dominio</a></li>
                  <li><a href="/SoporteTecnico" className="hover:text-cyan-400">Soporte Técnico</a></li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gray-400 mb-2">CONSULTORÍA</p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><a href="/ConsultoriaTI" className="hover:text-cyan-400">Consultoría TI</a></li>
                  <li><a href="/ConsultoriaEmpresarial" className="hover:text-cyan-400">Consultoría Empresarial</a></li>
                  <li><a href="/ConsultoriaEducativa" className="hover:text-cyan-400">Consultoría Educativa</a></li>
                  <li><a href="/Auditorias" className="hover:text-cyan-400">Auditorías</a></li>
                  <li><a href="/SeguridadInformatica" className="hover:text-cyan-400">Seguridad Informática</a></li>
                  
                <p className="text-xs uppercase font-bold text-gray-400 mb-2">Marketing Digital</p>
                <ul className="space-y-1 text-gray-300 text-sm"></ul>
                  <li><a href="/DesarrolloDeSitiosWeb" className="hover:text-cyan-400">Desarrollo de sitio Web</a></li>
                  <li><a href="/PosicionamientoSEO" className="hover:text-cyan-400">Posicionamiento SEO</a></li>
                  <li><a href="/GraficaPublicitaria" className="hover:text-cyan-400">Grafica Publicitaria</a></li>
                  <li><a href="/Merchandising" className="hover:text-cyan-400">Merchandising</a></li>
                  <li><a href="/SocialMedia" className="hover:text-cyan-400">Social Media</a></li>

                </ul>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gray-400 mb-2">ING. ELÉCTRICA</p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li><a href="/MantenimientoElectrico" className="hover:text-cyan-400">Mantenimiento Eléctrico</a></li>
                  <li><a href="/RefrigeracionIndustrial" className="hover:text-cyan-400">Refrigeración Industrial</a></li>
                  <li><a href="/InstalacionesElectricas" className="hover:text-cyan-400">Instalaciones Eléctricas</a></li>
                </ul>
              </div>
            </div>
          )}
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

      {/* Redes sociales */}
      <div className="hidden md:flex gap-3">
        {[FaFacebookF, FaEnvelope, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok].map((Icon, idx) => (
          <div
            key={idx}
            className="bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-cyan-400 hover:text-white cursor-pointer transition-colors duration-200"
            aria-label="Red social"
            role="button"
            tabIndex={0}
          >
            <Icon />
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
