import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../General/Navbar";


function Login() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        <label className="text-lg mb-2">User</label>
        <input
          type="text"
          placeholder="write your user"
          className="p-2 mb-4 border rounded-lg w-80"
        />
        <label className="text-lg mb-2">Password</label>
        <input
          type="password"
          placeholder="write your password"
          className="p-2 mb-6 border rounded-lg w-80"
        />
        <button className="w-80 p-2 mb-4 bg-blue-500 text-white rounded-lg">
          Login
        </button>
        <Link to="./../register">
          <button className="w-80 p-2 bg-green-500 text-white rounded-lg">
            Register
          </button>
        </Link>
      </div>
    </>
  );
}

export default Login;