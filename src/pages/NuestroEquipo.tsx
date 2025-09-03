
import React from 'react';
import '../nuestroequipo.css';

interface MiembroEquipo {
  nombre: string;
  cargo: string;
  imagen: string;
  alt: string;
}

const NuestroEquipo: React.FC = () => {
  const miembros: MiembroEquipo[] = [
    {
      nombre: "Wilder Julca",
      cargo: "Gerente de Servicios",
      imagen: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-952.png",
      alt: "Wilder Julca - Gerente de Servicios"
    },
    {
      nombre: "Ytalo Romero",
      cargo: "Programador Web",
      imagen: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-953.png",
      alt: "Ytalo Romero - Programador Web"
    },
    {
      nombre: "Diego Chancafe",
      cargo: "Programador Móvil",
      imagen: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-956.png",
      alt: "Diego Chancafe - Programador Móvil"
    },
    {
      nombre: "Victor Galarza",
      cargo: "Analista de Sistemas",
      imagen: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-955.png",
      alt: "Victor Galarza - Analista de Sistemas"
    },
    {
      nombre: "Edwin Bustamante",
      cargo: "Administración de Redes",
      imagen: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-954.png",
      alt: "Edwin Bustamante - Administración de Redes"
    }
  ];

  const primerosTres = miembros.slice(0, 3);
  const ultimosDos = miembros.slice(3);

  return (
    <div className="equipo-container">
      <h1>Todos los miembros del equipo</h1>
      <h2>Nuestro Equipo</h2>
      
      <div className="fila-equipo">
        {primerosTres.map((miembro, index) => (
          <div key={index} className="miembro">
            <div className="imagen">
              <img src={miembro.imagen} alt={miembro.alt} />
            </div>
            <div className="nombre">{miembro.nombre}</div>
            <div className="cargo">{miembro.cargo}</div>
          </div>
        ))}
      </div>
      
      
      <div className="fila-equipo fila-inferior">
        {ultimosDos.map((miembro, index) => (
          <div key={index} className="miembro">
            <div className="imagen">
              <img src={miembro.imagen} alt={miembro.alt} />
            </div>
            <div className="nombre">{miembro.nombre}</div>
            <div className="cargo">{miembro.cargo}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NuestroEquipo;

