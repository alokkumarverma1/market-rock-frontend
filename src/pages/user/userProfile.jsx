import React, { useEffect, useState } from "react";
import Navbar from "../others/navbar";
import Heading from "../others/heading";
import { userProfileData } from "../../firebase/services/profileService";
import { useNavigate } from "react-router-dom";
import Result from "../others/result";
import { onAuthStateChanged , getAuth } from "firebase/auth";
import { Oval } from "react-loader-spinner";

function Profile() {

  const [user, setUser] = useState({});
  const [error,setError] = useState(true)
  const navigate = useNavigate();
  const [loading , setLoading] = useState(true)

// call user
useEffect(() => {
try{
  const auth = getAuth();
  const unsub = onAuthStateChanged(auth ,async(user)=>{
   if(!user) navigate("/result" , {state:{ code:500, value:false , next:"/login"}});
   const userdata = await userProfileData(user)
   setUser(userdata)  
   setLoading(false)
  })
  return ()=> unsub();
}catch(error){
 navigate("/result" , {state:{ code:500, value:false , next:"/login"}})
}

}, []);


  return (
  <>
  {loading == true ?
  <div className="h-screen flex items-center justify-center w-full"><Oval height={40} width={40}  /></div>
    :
  <div className="">
    <Navbar></Navbar>
  <div className="min-h-screen bg-white pt-15 sm:mt-15 px-4 sm:px-8 pb-10">
  {/* Profile Header */}
  <div className="bg-green-200  rounded-3xl p-8 shadow-lg relative overflow-hidden">
    {/* edit button */}
    <div className="absolute top-3 bg-white h-7 w-7 rounded-[7px] flex justify-center items-center right-5"><i class="fa-solid fa-pen-to-square"></i></div>
    {/* card */}
    <div className="flex flex-col md:flex-row items-center gap-6">

      {/* Avatar */}
      <div className="h-32 w-32 rounded-full bg-white shadow-xl flex items-center justify-center">
        <i className="fa-solid fa-user text-6xl text-green-300"></i>
      </div>

      {/* User Info */}
      <div className="flex-1  text-center md:text-left">
        <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
          <div className="bg-white h-10 p-2 flex gap-2 justify-center items-center  rounded-xl shadow">
            <i className="fa-solid fa-user text-green-300"></i>
           <p className="text-[14px]"> {user.name}</p>
          </div>
           <div className="bg-white px-4 py-2 rounded-xl shadow">
            <i className="fa-solid fa-location-dot text-green-300 mr-2"></i>
            {user.city}
          </div>
          <div className="bg-white h-10 p-2 flex justify-center items-center  rounded-xl shadow">
            <i className="fa-solid fa-envelope text-green-300 mr-1 sm:mr-2"></i>
           <p className="text-[14px]"> {user.email}</p>
          </div>

        
        </div>
      </div>
    </div>
  </div>

  {/* Stats */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
    <div className="bg-white border-2 border-green-300 rounded-3xl p-6 shadow-md">
      <p className="text-gray-500">Courses</p>
      <h2 className="text-3xl font-bold text-green-300 mt-2">0</h2>
    </div>

    <div className="bg-white border-2 border-green-300 rounded-3xl p-6 shadow-md">
      <p className="text-gray-500">Certificates</p>
      <h2 className="text-3xl font-bold text-green-300 mt-2">0</h2>
    </div>
  </div>

  {/* About */}
  <div className="bg-white border-2 mb-10 border-green-300 rounded-3xl p-8 mt-8 shadow-md">
  <h2 className="text-2xl font-semibold text-green-300 mb-4">About Me</h2>
    <p className="text-gray-600">Manage your account and access your learning resources from one place.</p>
  </div>

{/* courser area */}
<Heading heading={"Your course"}></Heading>
<div className="course w-full min-h-100">

</div>
</div>

  </div>
  }
  
  </>
  );
}

export default Profile;