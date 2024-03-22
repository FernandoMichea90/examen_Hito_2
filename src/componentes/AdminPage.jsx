import React, { useState } from 'react';
import axios from 'axios';
import './AdminPage.css';

function AdminPage() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Envía los datos del nuevo producto al backend para ser agregado a la base de datos
      const response = await axios.post('/api/productos', {
        nombre,
        descripcion,
        precio,
        imagen
      });

      if (response.status === 201) {
        // Limpiar el formulario después de agregar el producto exitosamente
        setNombre('');
        setDescripcion('');
        setPrecio('');
        setImagen('');
        alert('Producto agregado exitosamente');
      }
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      alert('Error al agregar el producto. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="admin-page">
      <h2>Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>
        <label>
          Descripción:
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        </label>
        <label>
          Precio:
          <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        </label>
        <label>
          URL de la Imagen:
          <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} required />
        </label>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default AdminPage;
