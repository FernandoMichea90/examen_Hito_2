import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetalleProductoPage.css'; 

function DetalleProductoPage() {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    
    fetch(`/api/productos/${id}`)
      .then((response) => response.json())
      .then((data) => setProducto(data));
  }, [id]);

  // Función para manejar la adición del producto al carrito
  const agregarAlCarrito = () => {

  };

  if (!producto) {
    return <div>Cargando...</div>; 
  }

  return (
    <div className="detalle-producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="info-producto">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default DetalleProductoPage;
