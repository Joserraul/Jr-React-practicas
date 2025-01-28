import React from 'react'; // Importa React para evitar el error
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import { Home, Login } from './Pages/pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Home />
    <Login />
  </StrictMode>
);
