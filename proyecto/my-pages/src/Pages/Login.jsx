import React from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Navbar from "../General/Navbar";


function Login() {

  const [loginData, setLoginData] = useState({
    user: "",
    password: "",
  });

  const navigate = useNavigate();

  const actData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const tryData = (e) => {
    e.preventDefault();

    localStorage.setItem("user", "true");

  const localUser = JSON.parse(localStorage.getItem("userData"));

  if (loginData.user === localUser.name && loginData.password === localUser.password) {
    navigate("/home");
  } else {
    alert("User and Password its not correct");
  }
};

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        <form onSubmit={tryData} className="w-80 flex flex-col">

          <label className="text-lg mb-2">User</label>
          <input
            type="text"
            name="user"
            placeholder="write your user"
            className="p-2 mb-4 border rounded-lg w-80"
            value={loginData.user}
            onChange={actData}
          />
          <label className="text-lg mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="write your password"
            className="p-2 mb-6 border rounded-lg w-80"
            value={loginData.password}
            onChange={actData}
          />
          <button type="submit" className="w-80 p-2 mb-4 bg-blue-500 text-white rounded-lg">
            Login
          </button>
          </form>

          <button 
          onClick={() => navigate("/register")}
          className="w-80 p-2 bg-green-500 text-white rounded-lg">
            Register
          </button>

      </div>
    </>
  );
}

export default Login;