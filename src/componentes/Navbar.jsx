import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './navbar.css'; 
import logoEmpresa from '../assets/logoEmpresa.svg'; 

const Navbar = () => {
  const { usuario, cerrarSesion } = useContext(AuthContext);

  return (
    <nav className="navbar" style={{ backgroundColor: "#b1f78e" }}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoEmpresa} alt="Logo Empresa" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/tienda">Tienda</Link>
        {usuario && <Link to="/perfil">Perfil</Link>}
        {usuario && usuario.esAdministrador && <Link to="/admin">Administrar</Link>}
        {usuario ? (
          <button onClick={cerrarSesion}>Cerrar Sesión</button>
        ) : (
          <>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/registro">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
