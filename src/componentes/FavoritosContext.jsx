import React, { createContext, useState, useContext } from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const agregarAFavoritos = (producto) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, producto]);
  };

  const removerDeFavoritos = (productoId) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.filter((producto) => producto.id !== productoId)
    );
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, agregarAFavoritos, removerDeFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritosContext);
