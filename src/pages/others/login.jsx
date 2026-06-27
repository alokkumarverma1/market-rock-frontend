import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
function Login() {
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen mt-10 mb-20  flex items-center justify-center px-4">
      <div className="w-full max-w-md  backdrop-blur-lg border border-green-500/20 rounded-3xl p-8 shadow-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Market rock</h1>
          <p className="text-gray-400 mt-2 text-sm">Welcome back! Login to your account.</p>
        </div>
        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className=" text-sm block mb-2">Email Address</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" />
          </div>
          <div>
            <label className=" text-sm block mb-2">password</label>
            <input type="password" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-500" /> Remember me
            </label>
            <a href="#" className="text-green-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl shape text-white font-semibold transition duration-300 border shadow-md border-white"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <span className="text-green-400 cursor-pointer hover:underline">
           <Link to={"/register"}> Register</Link>
          </span>
        </p>
      </div>
    </div>
    </>
  );
}

export default Login;