import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import logo from '../assets/logo.svg';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-32 h-10 object-contain" />
      </div>

      {/* Botón hamburguesa (solo móvil) */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Menú principal (desktop) */}
      <ul className="hidden md:flex gap-8 text-sm font-semibold select-none">
        <li>
          <a href="/" className="hover:text-cyan-400 transition-colors duration-200">
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
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">Nuestra Empresa</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="/QuienesSomos" className="hover:text-cyan-400">Quienes Somos</a></li>
                <li><a href="/NuestraHistoria" className="hover:text-cyan-400">Nuestra Historia</a></li>
              </ul>
            </div>
            {/* Columna 2 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">Responsabilidad Social</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="/Convenios" className="hover:text-cyan-400">Convenios</a></li>
                <li><a href="/ComunidadActiva" className="hover:text-cyan-400">Comunidad Activa</a></li>
              </ul>
            </div>
            {/* Columna 3 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">Consultoría</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="/ConsultoriaTI" className="hover:text-cyan-400">Consultoría TI</a></li>
                <li><a href="/ConsultoriaEmpresarial" className="hover:text-cyan-400">Consultoría Empresarial</a></li>
              </ul>
            </div>
            {/* Columna 4 */}
            <div>
              <p className="text-xs uppercase font-bold text-cyan-400 mb-2">Nuestra Organización</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="/Organigrama" className="hover:text-cyan-400">Organigrama</a></li>
                <li><a href="/NuestroEquipo" className="hover:text-cyan-400">Nuestro Equipo</a></li>
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
            {/* Columnas igual que arriba */}
            {/* ... */}
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

      {/* Redes sociales (desktop) */}
      <div className="hidden md:flex gap-3">
        {[FaFacebookF, FaEnvelope, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok].map((Icon, idx) => (
          <div
            key={idx}
            className="bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-cyan-400 hover:text-white cursor-pointer transition-colors duration-200"
          >
            <Icon />
          </div>
        ))}
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1a1a1a] z-50 p-6 flex flex-col gap-6 transform 
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:hidden`}
      >
        <button className="self-end mb-4" onClick={() => setMobileOpen(false)}>
          <FaTimes size={22} />
        </button>

        <a href="/" className="hover:text-cyan-400">INICIO</a>
        <a href="/QuienesSomos" className="hover:text-cyan-400">Quienes Somos</a>
        <a href="/NuestraHistoria" className="hover:text-cyan-400">Nuestra Historia</a>
        <a href="/ConsultoriaTI" className="hover:text-cyan-400">Consultoría TI</a>
        <a href="/ConsultoriaEmpresarial" className="hover:text-cyan-400">Consultoría Empresarial</a>
        <a href="/contacto" className="hover:text-cyan-400">CONTACTO</a>

        {/* Redes sociales (móvil) */}
        <div className="flex gap-3 mt-auto">
          {[FaFacebookF, FaEnvelope, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok].map((Icon, idx) => (
            <div
              key={idx}
              className="bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-cyan-400 hover:text-white cursor-pointer transition-colors duration-200"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
