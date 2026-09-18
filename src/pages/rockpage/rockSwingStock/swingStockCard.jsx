import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { userProfileData } from "../../../firebase/services/userServiceFb";
import { onAuthStateChanged } from "firebase/auth";
import { deleteSwingStock } from "../../service/rockService";
import { FaArrowRight } from "react-icons/fa";
import { role } from "../../service/userSerivce";

function SwingStockCard({data}){

const [user,setUser] = useState("");

// delete stock 
const deleteStock = ()=>{
  const res = deleteSwingStock(data.id)
}

// check user role
useEffect(()=>{
  const res = role();
  setUser(res);
})


  return (
     <Link state={data} to={"/swingStockDetails"}>
   <div className="swing-stock relative shadow-md duration-300 hover:shadow-xl  flex flex-col items-center dark:text-white h-30 min-w-60 max-w-60 rounded-2xl p-2 bg-white dark:bg-zinc-800">
    {/* delete-button */}
    <div className={`${user == "ADMIN" ? "" : "hidden"}`}><i className="fa-solid absolute top-2 left-2 fa-trash cursor-pointer" onClick={deleteStock}></i></div>
    <div className="name h-10 flex justify-center items-center font-extrabold sm:font-bold">
      <h1>{data.stockName}</h1>
    </div>
    <p className="text-[10px] mb-3 text-gray-400 text-center">Educational purposes only. Please trade at your own risk. first learn no earn</p>
    <p className="font-light"><FaArrowRight></FaArrowRight></p>
     </div>
   </Link>
  );
}

export default SwingStockCard;