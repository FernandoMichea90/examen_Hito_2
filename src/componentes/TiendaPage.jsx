import React from 'react';
import CardVenta from './CardVenta'; 
import './TiendaPage.css'; 

function TiendaPage() {
  // Aquí la lógica para obtener los productos de la tienda desde back-end
  const productos = []; 

  return (
    <div className="tienda-container">
      {productos.map((producto) => (
        <CardVenta key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default TiendaPage;
