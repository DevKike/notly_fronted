import React from 'react';
import RegisterForm from './components/auth/RegisterForm'; // Importa el componente RegisterForm
//import LoginForm from './components/auth/LoginForm'; // Importa el componente LoginForm

function App() {
  return (
    <div>
      <h1>Registro de Usuarios</h1>
      <RegisterForm /> {/* Renderiza el componente de registro de usuarios */}
{/*       <hr /> */}
{/*       <h1>Iniciar Sesión</h1>
      <LoginForm /> {} */}
    </div>
  );
}

export default App;
