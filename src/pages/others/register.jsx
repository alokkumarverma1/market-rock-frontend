import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

function Register() {
  return (
   <>
   <Navbar></Navbar>
    <div className="min-h-screen mb-20 mt-10 sm:mt-20  flex items-center justify-center px-4">
      <div className="w-full max-w-160 backdrop-blur-lg border border-green-500/20 rounded-3xl p-8 shadow-md">

        {/* Logo / Title */}
        <div className="text-center mb-8"><h1 className="text-3xl font-bold">Market rock</h1>
          <p className="text-gray-400 mt-2 text-sm">Create your account and start your journey.</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
           <div>
            <label className=" text-sm block mb-2">Full Name</label>
            <input type="text" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" />
          </div>

         <div>
            <label className=" text-sm block mb-2">Number</label>
            <input type="number" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" />
          </div>

          <div>
            <label className=" text-sm block mb-2">Email Address</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" />
          </div>

           <div>
            <label className=" text-sm block mb-2">Password</label>
            <input type="password" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" />
          </div>

           <div>
            <label className=" text-sm block mb-2"> Conform Password</label>
            <input type="password" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" />
          </div>


          <button type="submit" className="w-full py-3 rounded-xl shape border border-white text-white font-semibold transition duration-300 "> Create Account </button>
        
        </form>
        {/* Login Link */}
        <p className="text-center text-gray-400 text-sm mt-6"> Already have an account?{" "} <span className="text-green-400 cursor-pointer hover:underline"><Link to={"/login"}>Login</Link></span></p>
      </div>
    </div>
   <Footer></Footer>
   
   </>
  );
}

export default Register;