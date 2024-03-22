import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { usuario, iniciarSesion } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica si hay un usuario y redirige basado en el rol
    if (usuario) {
      if (usuario.esAdministrador) {
        navigate('/admin');
      } else {
        navigate('/tienda');
      }
    }
  }, [usuario, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await iniciarSesion(email, password);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Correo electrónico</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        
        <label htmlFor="password">Contraseña</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginPage;
