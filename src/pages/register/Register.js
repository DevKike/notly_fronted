import React, { useState } from 'react';
import { post } from '../../utils/http';
import { errorAlert, successAlert } from '../../utils/toast';

import "./Register.css"

function Register() {
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
      await post('http://localhost:3001/user/register', formData);
      successAlert('Usuario registrado exitosamente!');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      errorAlert('Hubo un error al registrar usuario. Por favor, intenta de nuevo.');
    }
  };

  return <div className='card p-3 mx-auto my-auto mt-5' style={{ width: "30rem" }}>
    <p className='mx-auto'>Formulario de registro</p>
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className='mb-3 col-md-6'>
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input type="text" name="name" id="name" className="form-control" value={formData.name} onChange={handleChange} />
        </div>
        <div className='mb-3 col-md-6'>
        <label htmlFor="last_name" className="form-label">
            Apellido
          </label>
          <input type="text" name="last_name" id="last_name" className="form-control" value={formData.last_name} onChange={handleChange} />
        </div>
      </div>
      <div className='row'>
        <div className='mb-3 col-md-6'>
        <label htmlFor="email" className="form-label">
            Correo electronico
          </label>
          <input type="text" name="email" id="email" className="form-control" value={formData.email} onChange={handleChange} />
        </div>
        <div className='mb-3 col-md-6'>
        <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input type="text" name="password" id="password" className="form-control" value={formData.password} onChange={handleChange} />
        </div>
      </div>
      <button type="submit" className='btn btn-outline-success'>Registrarse</button>
    </form>
    </div>;
}

export default Register;