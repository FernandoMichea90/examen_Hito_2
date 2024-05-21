import React, { useContext,useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './navbar.css';
import logoEmpresa from '../assets/logoEmpresa.svg';
import { useCarrito } from './CarritoContext';

const Navbar = () => {
  const {items}=useCarrito();
  const [itemsCarrito, setItemsCarrito] = useState(items);

  const { usuario, cerrarSesion } = useContext(AuthContext);


useEffect(() => {
  setItemsCarrito(items);
  console.log(items)
}, [items])


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
        <Link to="/tienda">
          <button style={{'color':'#708090'}} type="button" class="btn btn-primary position-relative">
               <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><circle cx="176" cy="416" r="32" fill="currentColor"/><circle cx="400" cy="416" r="32" fill="currentColor"/><path fill="currentColor" d="M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42z"/></svg>
        
            {items && items.length > 0 &&
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {items.length}
            </span>
            }
          </button>
        </Link>
      </div>
    </nav>
    
  );
};

export default Navbar;
