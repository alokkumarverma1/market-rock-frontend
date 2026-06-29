import React from "react";
import { Link } from "react-router-dom";


function ControlCard({name , link}){
    return(<>
   <Link to={link}>
    <div className="control flex justify-center items-center font-bold text-3xl shadow-md hover:shadow-xl w-50 h-30 rounded-2xl bg-green-200 transition-shadow">
     <h1>{name}</h1>
    </div>
   </Link>
    
    </>)
}

export default ControlCard;