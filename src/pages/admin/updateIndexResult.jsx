import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../others/navbar";
import { updateIndexProfit } from "../service/rockService";

function UpdateIndexResult() {

  const location = useLocation();
  const navigation = useNavigate();
  const [result, setResult] = useState({id:location.state || "" , profit:""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await updateIndexProfit(result)
      if(res.status == 201){
          navigate("/result" , {state:{value:true,message:"update success" ,next:"/"}})
      }else{
          navigate("/result" , {state:{value:false,message:"something wrong" ,next:"/rock"}})
      }
    }catch(error){
       navigate("/result" , {state:{value:false,message:"something wrong" ,next:"/rock"}})

    }
  };

  return (
   <>
   <Navbar></Navbar>
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-[400px] bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6"> Update Index Result</h2>
        <input type="text" value={result} onChange={(e) => setResult({...result ,profit: e.target.value})} placeholder="Enter Result" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"/>
        <button type="submit" className="w-full mt-5 shape text-white py-3 rounded-lg transition" >  Update Result </button>
      </form>
    </div>
   
   
   </>
  );
}

export default UpdateIndexResult;