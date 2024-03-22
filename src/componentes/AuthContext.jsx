import React, { createContext, useState } from 'react';

export const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const iniciarSesion = (perfil) => {
    setUsuario(perfil);
  };

  const cerrarSesion = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
