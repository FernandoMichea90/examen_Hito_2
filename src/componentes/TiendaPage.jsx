import React, { useEffect, useState } from 'react';
import CardVenta from './CardVenta';
import './TiendaPage.css';
import { api } from '../utils/axios';

function TiendaPage() {
  // Aquí la lógica para obtener los productos de la tienda desde back-end
  const [productos, setProductos] = useState([]);

  const [cargando, setCargando] = useState(false)



  const getProducts = async () => {
    try {
      setCargando(true)
      const response = await api.get('/api/productos')
      console.log(response)
      setProductos(response.data);

    } catch (error) {

    } finally {
      setCargando(false)
    }
  }


  useEffect(() => {
 
    getProducts();


  }, [])






  return (
    <div className="tienda-container">
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        productos.map((producto) => (
          <CardVenta key={producto.id} producto={producto} />
        ))
      )}
    </div>

  );
}

export default TiendaPage;
