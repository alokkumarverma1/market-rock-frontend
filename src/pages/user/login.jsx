import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../others/navbar";
import Footer from "../others/footer";

// firebase
import { auth, db } from "../../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

 

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md border-2 border-green-300 h-60 rounded-3xl pt-5 p-3 pb-5 shadow-md bg-white">
          <p className=" text-3xl font-semibold text-center mt-2">
            Login with
          </p>

          {/* Google Button */}
          <button  className="w-full mt-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2 hover:bg-gray-100">
            <i className="fa-brands fa-google text-red-500"></i>Continue with Google
          </button>

        {/* phone number */}
          {/* <button className="w-full mt-4 py-3 rounded-xl border flex items-center justify-center gap-2 hover:bg-gray-100" >
            <i className="fa-solid fa-phone text-green-500"></i>Continue with Phone
          </button>
          <p className="text-red-500 text-center mt-3">{message}</p>
           */}

          {/* Login */}
          <p className="text-center text-gray-400 text-sm mt-6">
            I have no account?{" "}
            <Link to="/register" className="text-green-500 hover:underline">
              Register
            </Link>
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;