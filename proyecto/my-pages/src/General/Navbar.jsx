import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "../Components/input";


/**
 * @function Navbar - Componente de la barra de navegación
 * @returns {JSX.Element} - Componente de la barra de navegación
 * @const Token - Variable que almacena el token del usuario
 * @const isAuthenticated - Variable que almacena si el usuario está autenticado
 * @const location - Variable que almacena la ubicación del usuario
 */


function Navbar() {
const location = useLocation();
const navigate = useNavigate();
const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user");
    setIsAuthenticated(!!token);{
    } [location.pathname]
  });

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };


  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      {/* Nombre en el lado izquierdo */}
      <div className="text-lg font-semibold">MyApp</div>

      <div className="flex-grow mx-4">
        <Input
          type="text"
          placeholder="Buscar..."
          className="w-full p-2 rounded-lg focus:ring focus:outline-none"
        />
      </div>

      <div className="space-x-4">
        {location.pathname !== "/login" && (
          <>
            <Link to="/" className="text-white">Home</Link>
            {isAuthenticated ? (
              <button onClick={logout} className="text-white">Logout</button>
            ) : (
              <Link to="/login" className="text-white">Login</Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;