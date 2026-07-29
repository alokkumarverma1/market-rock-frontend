import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateIndexResult } from "../../firebase/services/rockService";
import Navbar from "../others/navbar";
function UpdateIndexResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state;

  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!result.trim()) {
      alert("Please enter result");
      return;
    }

    const res = await updateIndexResult(id, result);

    if (res === true) {
      alert("Result Updated Successfully");
      navigate("/result" , {state:{code:200 , value:true , next:"/rock"}})
    } else {
      navigate("/result" , {state:{code:400 , value:false , next:"/rock"}})
    }
  };

  return (
   <>
   <Navbar></Navbar>
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-[400px] bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6"> Update Index Result</h2>

        <input type="text" value={result} onChange={(e) => setResult(e.target.value)} placeholder="Enter Result" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"/>

        <button type="submit" className="w-full mt-5 shape text-white py-3 rounded-lg transition" >  Update Result </button>
      </form>
    </div>
   
   
   </>
  );
}

export default UpdateIndexResult;