import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Result(){

    const location = useLocation();
    const states = location.state?.next || "/";
    const navigate = useNavigate();
    const messages = {
  200: "Success",
  400: "user not found",
  401: "Login failed",
  404: "User does not exist",
  500: "Server error Try again",
};



   useEffect(()=>{
   setTimeout(()=>{
    navigate(states)
   },2000)
    })



    return(<>
    <div className="result w-full h-dvh flex justify-center items-center">
        <div className="middle flex justify-center items-center flex-col gap-5 h-60 w-60 sm:w-100 rounded-2xl shadow-xl ">
          <div className="icon w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center">
            {
                location.state?.value ? <i class="fa-solid fa-circle-check text-green-300 text-4xl"></i> : <i class="fa-solid fa-circle-xmark text-4xl text-red-400"></i>
            }
          </div>
          <div className="bottom flex flex-col gap-2 justify-center items-center">
            <p className="test[15px]">{messages[location.state?.code] || "something went wrong"}</p>
          </div>
        </div>
    </div>
    
    </>)
}


export default Result;