import React from "react";
import { Link } from "react-router-dom";
import Input from "../Components/input";
import Button from "../Components/Button";


function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-purple-900 border">
      {/* Nombre en el lado izquierdo */}
      <div className="text-lg font-semibold">MyApp</div>

      {/* Buscador en el centro */}
      <div className="flex-grow mx-4">
        <Input
          type="text"
          placeholder="Buscar..."
          className="w-full p-2 rounded-lg focus:ring focus:ring-blue-500"
        />
      </div>

      {/* Botones en el lado derecho */}
      <div className="space-x-4">
        <Link to="./../Home">
          <Button >Home</Button>
        </Link>
        <Link to="./../login">
        < Button >Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;