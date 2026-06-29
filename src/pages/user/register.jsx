import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../others/footer";
import Navbar from "../others/navbar";
import { useNavigate } from "react-router-dom";

// firebaes
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/firebase";




// Add a new document with a generated id.


function Register() {


  const navigate = useNavigate();
 const [conform , setConform] = useState("")
 const [message , setMessage] = useState()
  const [register, setRegister] = useState({
    name:"",
    email:"",
    number:"",
    password:"",
    city:"",
    role:"",
  })

  const dataHandle = (e)=>{
     setRegister({...register , [e.target.name] : e.target.value}) 
  }

// register data in firestore
const registerHandle = async(e)=>{
  e.preventDefault(); 
  const userRole = register.email == "rockteamsupport@gmail.com" ? "admin" : "user";
  if(register.password != conform) return setMessage("password not match")
   try{
    const auth = getAuth();
    const userdata = await createUserWithEmailAndPassword(auth, register.email, register.password)
    const user = userdata.user;
     await addDoc(collection(db, "register"), {
        name: register.name,
        email: register.email,
        number: register.number,
        city: register.city,
        role:userRole,
        uid: user.uid,
      });
    
  navigate("/result" , {state:{message:"success" , value:"true" , next:"/"}})

  }
  catch(error){
     navigate("/result" , {state:{message:"no success" , value:"true" , next:"/"}})
    console.log(error.code);
   console.log(error.message);
  };

}


 





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
        <form className="space-y-5" onSubmit={registerHandle}>
           <div>
            <label className=" text-sm block mb-2">Full Name</label>
            <input type="text" name="name" value={register.name} onChange={dataHandle} placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" required />
          </div>

         <div>
            <label className=" text-sm block mb-2">Number</label>
            <input type="number" name="number" value={register.number} onChange={dataHandle} placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" required/>
          </div>

          <div>
            <label className=" text-sm block mb-2">Email Address</label>
            <input type="email" name="email" value={register.email} onChange={dataHandle} placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" required/>
          </div>

            <div>
            <label className=" text-sm block mb-2">City</label>
            <input type="text" name="city" value={register.city} onChange={dataHandle} placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" required/>
          </div>

           <div>
            <label className=" text-sm block mb-2">Password</label>
            <input type="password" name="password" value={register.password} onChange={dataHandle} placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" required/>
          </div>

           <div>
            <label className=" text-sm block mb-2"> Conform Password</label>
            <input type="text" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:border-green-400 transition" onChange={(e)=> setConform(e.target.value)} required />
          </div>

          <button type="submit" className="w-full py-3 rounded-xl shape border border-white text-white font-semibold transition duration-300 "> Create Account </button>
        
        </form>
        <p>{message}</p>
        {/* otehr  */}
        {/* <div className="other w-full flex-col flex justify-center items-center rounded-2xl gap-3 mt-6">
          <p>sing in with</p>
          <div className=" w-full h-15  rounded-2xl flex justify-center gap-5">
           <div className="google h-11 w-11 rounded-full bg-gray-400"></div>
           <div className="facebook h-11 w-11 rounded-full bg-gray-400"></div>
          </div>
        </div> */}
        {/* Login Link */}
        <p className="text-center text-gray-400 text-sm mt-6"> Already have an account?{" "} <span className="text-green-400 cursor-pointer hover:underline"><Link to={"/login"}>Login</Link></span></p>
      </div>
    </div>
   <Footer></Footer>
   
   </>
  );
}


export default Register;