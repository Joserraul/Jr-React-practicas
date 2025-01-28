import React from "react"




function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Bienvenido</h1>
      <label className="text-lg mb-2">Usuario</label>
      <input
        type="text"
        placeholder="Escribe tu usuario"
        className="p-2 mb-4 border rounded-lg w-80"
      />
      <label className="text-lg mb-2">Contraseña</label>
      <input
        type="password"
        placeholder="Escribe tu contraseña"
        className="p-2 mb-6 border rounded-lg w-80"
      />
      <button className="w-80 p-2 mb-4 bg-blue-500 text-white rounded-lg">
        Entrar
      </button>
      <button className="w-80 p-2 bg-green-500 text-white rounded-lg">
        Registrarse
      </button>
    </div>
  );
}

export default Login;