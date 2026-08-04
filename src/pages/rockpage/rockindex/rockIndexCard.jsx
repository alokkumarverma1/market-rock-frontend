import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { userProfileData } from "../../../firebase/services/profileService";

function RockIndexCard({ data }) {

  const [user , setUser] = useState("");
  const [value , setValue] = useState("");

  const isCall = data.direction === "call";
  const res = data.result === "";
  const result = data.result>= 0;
   // chek user login or not 
   useEffect(() => {
    if(result > 0){
      setValue("profit "+data.result)
    }else{
       setValue("loss "+data.result.slice(1,data.result.length))
    }
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth,async (user) => {
      if (user) {
       const userdata = await userProfileData(user)
       setUser(userdata.role);
      } 
    });
  // get user auth
    return () => unsubscribe();
  }, []);



  return (
    <div className={`w-64 min-w-60 relative max-w-60 dark:text-white h-69 pt-2 py-3 px-2 rounded-2xl border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300
      ${ isCall ? "bg-green-50 border-green-200 dark:bg-zinc-800 dark:border-none " : "bg-red-50 border-red-200 dark:border-none dark:bg-zinc-800" }`}>
        {/*edit icon  */}

         {user == "admin" ? <Link to={"/addResult"} state={data.id}><p className=" absolute top-2 left-30 cursor-pointer"><FaEdit></FaEdit></p></Link> : ""}
      {/* header */}
      <div className="flex justify-between items-center">
        <div className="bg-white dark:bg-zinc-600 px-3 py-2 rounded-full shadow-sm">
          <h2 className="font-semibold text-xs tracking-wide"> {data.name}</h2>
        </div>

        <span className={`px-3 py-2 rounded-full text-[10px] font-bold text-white shadow-sm
          ${isCall ? "bg-green-600" : "bg-red-600"}`}>
          {data.direction.toUpperCase()}
        </span>
      </div>

      {/* Trade Data */}
      <div className="h-45 bg-white dark:bg-zinc-900 dark:border-none rounded-2xl border border-gray-100 shadow-sm mt-3 p-2">

        {/* Price */}
        <div className={`h-9 flex justify-center gap-3 items-center rounded-lg font-medium
          ${isCall ? "bg-green-50 dark:bg-zinc-900" : "bg-red-50 dark:bg-zinc-700"}`}>
            <p className="text-[13px] text-gray-300">price - </p>
          <p className="">{data.price} </p>
        </div>

        {/* Other Details */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="h-9 flex bg-red-100 dark:bg-zinc-700 justify-center items-center rounded-lg">
            <p className="text-[12px]"> <span className="text-gray-500">sl - </span>{data.sl}</p>
          </div>

          <div className="h-9 flex bg-blue-100 dark:bg-zinc-700 justify-center items-center rounded-lg">
            <p className="text-[12px]"> <span className="text-gray-500">en - </span>{data.entry}</p>
          </div>

          <div className="h-9 flex bg-green-100 dark:bg-zinc-700 justify-center items-center rounded-lg">
            <p className="text-[12px]"> <span className="text-gray-500">minT - </span>{data.minTarget}</p>
          </div>

          <div className="h-9 flex bg-green-200 dark:bg-zinc-700 justify-center items-center rounded-lg">
            <p className="text-[12px]"> <span className="text-gray-500">maxT - </span>{data.maxTarget}</p>
          </div>

        </div>

        {/* Result */}
        {
          res ? 
           <div className="mt-2 h-8  text-[15px] bg-gray-200 rounded-lg flex justify-center items-center font-semibold shadow-sm">
           result wait ...
        </div> 
        :
         <div className={`mt-2 h-8 text-[15px] rounded-lg flex justify-center items-center font-semibold shadow-sm
          ${ result ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {value} % 
        </div>


        }
    
      </div>

      {/* Footer */}
      <div className="mt-2">
        <div className="flex justify-between text-[10px] text-gray-500 dark:text-zinc-300">
          <span>{data.date}</span>
          <span>{data.time}</span>
        </div>
        <p className="text-[8px] text-center text-gray-700 dark:text-gray-300 mt-1 leading-3">
          Educational purposes only. Please trade at your own risk.
        </p>
      </div>
    </div>
  );
}

export default RockIndexCard;