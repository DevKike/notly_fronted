import React from 'react';
import ReactDOM from 'react-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import Register from './pages/register/Register';

import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import Login from './pages/login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    async lazy() {
      let Register = (await import("./pages/register/Register.js")).default
      return { Component: Register }
    },
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
