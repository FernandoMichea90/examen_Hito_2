import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistroPage.css'; 

function RegistroPage() {
  const [formValues, setFormValues] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    correo: '',
    contrasena: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    const regexEmail = /\S+@\S+\.\S+/;
    const regexTelefono = /^[0-9]{8,10}$/;

    if (!formValues.nombre) errors.nombre = 'El nombre es obligatorio.';
    if (!formValues.direccion) errors.direccion = 'La dirección de envío es obligatoria.';
    if (!regexTelefono.test(formValues.telefono)) errors.telefono = 'El número debe tener entre 8 y 10 dígitos.';
    if (!regexEmail.test(formValues.correo)) errors.correo = 'Ingresa un correo electrónico válido.';
    if (formValues.contrasena.length < 6) errors.contrasena = 'La contraseña debe tener al menos 6 caracteres.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
     
      navigate('/login'); // Redirige a la página de login
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="nombre"
          value={formValues.nombre}
          onChange={handleInputChange}
          placeholder="Nombre completo"
        />
        {formErrors.nombre && <p className="error-message">{formErrors.nombre}</p>}
        
        <input
          type="text"
          name="direccion"
          value={formValues.direccion}
          onChange={handleInputChange}
          placeholder="Dirección de envío"
        />
        {formErrors.direccion && <p className="error-message">{formErrors.direccion}</p>}
  
        <input
          type="text"
          name="telefono"
          value={formValues.telefono}
          onChange={handleInputChange}
          placeholder="Número telefónico de contacto"
        />
        {formErrors.telefono && <p className="error-message">{formErrors.telefono}</p>}
  
        <input
          type="email"
          name="correo"
          value={formValues.correo}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
        />
        {formErrors.correo && <p className="error-message">{formErrors.correo}</p>}
  
        <input
          type="password"
          name="contrasena"
          value={formValues.contrasena}
          onChange={handleInputChange}
          placeholder="Contraseña"
        />
        {formErrors.contrasena && <p className="error-message">{formErrors.contrasena}</p>}
  
        <button type="submit">Finalizar Registro</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
  
}

export default RegistroPage;
