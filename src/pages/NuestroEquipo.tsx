import React from "react";
import CircularGallery from "../components/CircularGallery";
import { miembros } from "../components/Miembros"; // Ajusta la ruta según tu estructura

const NuestroEquipo: React.FC = () => {
  // Convertimos los miembros al formato que necesita CircularGallery
const items = miembros.map(miembro => ({
  text2: miembro.nombre,
  image: miembro.imagen,
  text: `${miembro.nombre}\n${miembro.cargo}` // Nombre arriba, cargo abajo
}));



  return (
    <section className="w-full h-[600px] relative bg-gray-900 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nuestro Equipo</h2>
      <div className="w-full h-full">
        <CircularGallery
          items={items}
          bend={0}                 // Curvatura del carrusel
          textColor="#ffffff"      // Color del texto
          borderRadius={0.0}      // Bordes redondeados de las imágenes
          font="bold 20px Figtree" // Fuente del texto
          scrollSpeed={2}          // Velocidad de arrastre
          scrollEase={0.08}        // Suavizado del scroll
        />
      </div>
    </section>
  );
};

export default NuestroEquipo;
