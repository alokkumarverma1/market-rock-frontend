import React from "react";
import { Link } from "react-router-dom";


function ControlCard({name , link}){
    return(<>
   <Link to={link}>
    <div className=" h-30 flex justify-center items-center dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl ">
     <h1 className="text-2xl font-extrabold sm:font-bold dark:text-white">{name}</h1>
    </div>
   </Link>
    
    </>)
}

export default ControlCard;