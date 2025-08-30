import React from 'react';
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
  return (
    <nav className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between shadow-md relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-90 h-10" />
      </div>

      {/* Menú principal */}
      <ul className="hidden md:flex gap-8 text-sm font-semibold select-none">
        <li><a href="#inicio" className="hover:text-cyan-400 transition-colors duration-200">INICIO</a></li>

        {/* Dropdown Nosotros */}
        <li className="relative group cursor-pointer">
          <span className="hover:text-cyan-400 transition-colors duration-200">NOSOTROS</span>
          <div className="absolute left-0 top-full mt-2 w-56 bg-[#222] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
            <div className="px-4 py-3 border-b border-gray-700">
              <p className="text-xs uppercase font-bold text-gray-400 mb-2">NUESTRA EMPRESA</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="#quienes-somos" className="hover:text-cyan-400">Quienes Somos</a></li>
                <li><a href="#nuestra-historia" className="hover:text-cyan-400">Nuestra Historia</a></li>
              </ul>
            </div>
            <div className="px-4 py-3 border-b border-gray-700">
              <p className="text-xs uppercase font-bold text-gray-400 mb-2">RESPONSABILIDAD SOCIAL</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="#convenios" className="hover:text-cyan-400">Convenios</a></li>
                <li><a href="#comunidad-activa" className="hover:text-cyan-400">Comunidad Activa</a></li>
              </ul>
            </div>
            <div className="px-4 py-3">
              <p className="text-xs uppercase font-bold text-gray-400 mb-2">CONSULTORÍA</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="#consultoria-ti" className="hover:text-cyan-400">Consultoría TI</a></li>
                <li><a href="#consultoria-empresarial" className="hover:text-cyan-400">Consultoría Empresarial</a></li>
                <li><a href="#nuestra-organizacion" className="hover:text-cyan-400">Nuestra Organización</a></li>
                <li><a href="#organigrama" className="hover:text-cyan-400">Organigrama</a></li>
                <li><a href="#nuestro-equipo" className="hover:text-cyan-400">Nuestro Equipo</a></li>
              </ul>
            </div>
          </div>
        </li>

        {/* Dropdown Servicios */}
        <li className="relative group cursor-pointer">
          <span className="hover:text-cyan-400 transition-colors duration-200">SERVICIOS</span>
          <div className="absolute left-0 top-full mt-2 w-56 bg-[#222] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50 p-4 flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase font-bold text-gray-400 mb-2">Tecnología de Información</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="#desarrollo-software" className="hover:text-cyan-400">Desarrollo de Software</a></li>
                <li><a href="#facturacion-electronica" className="hover:text-cyan-400">Facturación Electrónica</a></li>
                <li><a href="#seguridad-tecnologia" className="hover:text-cyan-400">Tecnología en Seguridad</a></li>
                <li><a href="#redes" className="hover:text-cyan-400">Redes e Infraestructura</a></li>
                <li><a href="#hosting" className="hover:text-cyan-400">Hosting y Dominio</a></li>
                <li><a href="#soporte" className="hover:text-cyan-400">Soporte Técnico</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-gray-400 mb-2">CONSULTORÍA</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="#consultoria-ti" className="hover:text-cyan-400">Consultoría TI</a></li>
                <li><a href="#consultoria-empresarial" className="hover:text-cyan-400">Consultoría Empresarial</a></li>
                <li><a href="#consultoria-educativa" className="hover:text-cyan-400">Consultoría Educativa</a></li>
                <li><a href="#auditorias" className="hover:text-cyan-400">Auditorías</a></li>
                <li><a href="#seguridad-informatica" className="hover:text-cyan-400">Seguridad Informática</a></li>
                <li><a href="#marketing-digital" className="hover:text-cyan-400">Marketing Digital</a></li>
                <li><a href="#sitios-web" className="hover:text-cyan-400">Desarrollo de sitio Web</a></li>
                <li><a href="#seo" className="hover:text-cyan-400">Posicionamiento SEO</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-gray-400 mb-2">ING. ELÉCTRICA</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="#mantenimiento-electrico" className="hover:text-cyan-400">Mantenimiento Eléctrico</a></li>
                <li><a href="#refrigeracion" className="hover:text-cyan-400">Refrigeración Industrial</a></li>
                <li><a href="#instalaciones-electricas" className="hover:text-cyan-400">Instalaciones Eléctricas</a></li>
              </ul>
            </div>
          </div>
        </li>

        <li><a href="#contacto" className="hover:text-cyan-400 transition-colors duration-200">CONTACTO</a></li>
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
