import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../others/navbar";
import Footer from "../others/footer";

// firebase
import { userRegisterWithGoodle } from "../../firebase/services/profileService";

function Register() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  //  Google Login + Register (same button)
  const googleHandle = async () => {
  try{
    const res = await userRegisterWithGoodle();
    console.log(res)
    navigate("/result" , {state:{code:200 , value:true , next:"/"}})
  }catch(error){
    navigate("/result" , {state:{code:400 , value:false , next:"/register"}})
  }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md border-2 border-green-300 h-70 rounded-3xl pt-5 p-3 pb-5 shadow-md bg-white">
          <p className=" text-3xl font-semibold text-center mt-2">
            Sing in
          </p>

          {/* Google Button */}
          <button onClick={googleHandle} className="w-full mt-6 py-3 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:bg-gray-100">
            <i className="fa-brands fa-google text-red-500"></i>With Google
          </button>

         <div className=" w-full mt-2 text-gray-500 flex justify-center items-center"><p>or</p></div>
        {/* phone number */}
          <button className="w-full mt-4 py-3 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:bg-gray-100" >
            <i className="fa-solid fa-phone text-green-500"></i>Continue with Phone
          </button>
          <p className="text-red-500 text-center mt-3">{message}</p>
          

          {/* Login */}
          {/* <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </p> */}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;