import React from "react";

function Homecard({number , data}){
    return(<>
    <div className="homecard flex justify-center flex-col items-center gap-3 sm:h-30 h-20 sm:w-50 w-25 p-1 rounded-2xl  border-white shadow-gray-600 shadow-md ">
     <h1 className="font-bold sm:text-3xl text-[20px] metal-green">{number}</h1>
     <p className="sm:text-2xl text-center text-[10px]">{data}</p>
    </div>
    </>)
}

export default Homecard;