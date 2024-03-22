import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AdminPage from './AdminPage';
import RegistroPage from './RegistroPage';
import LoginPage from './LoginPage';
import TiendaPage from './TiendaPage';
import DetalleProductoPage from './DetalleProductoPage';
import PerfilPage from './PerfilPage';
import CarritoPage from './CarritoPage';

function Rutas() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tienda" element={<TiendaPage />} />
        <Route path="/producto/:id" element={<DetalleProductoPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Routes>
  );
}

export default Rutas;
``
