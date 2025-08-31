import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">

        {/* Logo + descripción */}
        <div className="flex-1 min-w-[250px]">
          <img src="/logo2.jpg" alt="Logo" className="w-32 mb-4" />
          <p className="leading-relaxed">
            Impulsamos el éxito de tu negocio con soluciones digitales innovadoras y diseño creativo,
            adaptados a tus necesidades para asegurar tu crecimiento.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Servicios</h3>
          <ul className="space-y-2">
            <li>Tecnología de información</li>
            <li>Ingeniería eléctrica</li>
            <li>Marketing digital</li>
          </ul>
        </div>

        {/* Nosotros */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Nosotros</h3>
          <ul className="space-y-2">
            <li>¿Quienes Somos?</li>
            <li>Convenios</li>
            <li>Organigrama</li>
            <li>Términos y Garantías</li>
            <li>Formulario de Contacto</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Conecta con nosotros</h3>
          <ul className="space-y-2">
            <li>📍 Av. Lopez de Zúñiga Nº 547 2º Piso, Chancay</li>
            <li>✉️ consultas@solucionesintegralesjb.com</li>
            <li>📞 +51 996 720 630</li>
            <li>📞 +51 979 687 700</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-wrap items-center justify-between gap-4">

        {/* Botón subir */}
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-600 to-gray-900 hover:scale-105 transition text-white"
          title="Subir"
        >
          ↑
        </a>

        {/* Copyright */}
        <p className="text-sm text-center flex-1">
          © 2024 Soluciones Integrales JB S.A.C. - Todos los derechos reservados.
        </p>

        {/* Logo circular */}
        <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
          <img src="/logo2.jpg" alt="Mini Logo" className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
