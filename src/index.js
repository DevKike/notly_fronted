import React from 'react';
import ReactDOM from 'react-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';

import 'notyf/notyf.min.css'; // for React, Vue and Svelte

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    async lazy() {
      let Login = (await import("./pages/login/Login.js")).default
      return { Component: Login }
    },
  },
  {
    path: "/register",
    async lazy() {
      let Register = (await import("./pages/register/Register.js")).default
      return { Component: Register }
    },
  },
  {
    path: "/application",
    async lazy() {
      let Application = (await import("./pages/application/Application.js")).default
      return { Component: Application }
    },
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <div className=''>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
