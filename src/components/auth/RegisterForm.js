import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/user/register', formData);
      alert('Usuario registrado exitosamente!');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Hubo un error al registrar usuario. Por favor, intenta de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Apellido:
        <input type="text" name="last_name" id="last_name" value={formData.last_name} onChange={handleChange} />
      </label>
      <label>
        Correo electrónico:
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Contraseña:
        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterForm;