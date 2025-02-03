import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import './index.css';
import { Home, Login, Register } from './Pages/pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>

    </BrowserRouter>
  </StrictMode>
);
