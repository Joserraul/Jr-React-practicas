import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./../General/Navbar";

/**
 * @function Register - Componente de registro
 * @newData - Función que actualiza los datos del usuario
 * @saveData - Función que guarda los datos del usuario
 * @returns {JSX.Element} - Componente de registro
 */


function Register() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    mail: "",
  });

  const navigate = useNavigate();

  const newData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveData =  (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Data saved");
    navigate("./../home");
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Register</h1>
        <form onSubmit={saveData} className="w-80 flex flex-col">
          <label className="text-lg mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="write your name"
            className="p-2 mb-4 border rounded-lg w-80"
            value={formData.name}
            onChange={newData}
          />
          <label className="text-lg mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="write your password"
            className="p-2 mb-6 border rounded-lg w-80"
            value={formData.password}
            onChange={newData}
          />

        <label className="text-lg mb-2">Mail</label>
              <input
                type="Mail"
                name="mail"
                placeholder="write your mail"
                className="p-2 mb-6 border rounded-lg w-80"
                value={formData.mail}
                onChange={newData}
        />
        <button 
          type="submit"
          className="w-80 p-2 mb-4 bg-blue-500 text-white rounded-lg"
        >
          Register
          
        </button>
          </form>
      </div>
    </>

  )};

  export default Register;