import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa el componente App
/* import './index.css'; // Importa los estilos globales si los tienes */

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode>,
  document.getElementById('root')
);
