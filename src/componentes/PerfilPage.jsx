import React, { useContext } from 'react';
import CardVenta from './CardVenta';
import { FavoritosContext } from './FavoritosContext'; 
import './TiendaPage.css';

function PerfilPage() {
  const { favoritos } = useContext(FavoritosContext); 

  return (
    <div className="perfil-container">
      {favoritos.map((producto) => (
        <CardVenta key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default PerfilPage;
