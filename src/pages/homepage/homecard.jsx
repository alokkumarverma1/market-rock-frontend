import React from "react";

function Homecard({number , data}){
    return(<>
    <div className="homecard border-green-300 border-2 flex justify-center flex-col items-center gap-3 sm:h-30 h-20 sm:w-50 w-25 p-1 rounded-2xl shadow-xl ">
     <h1 className="font-bold sm:text-3xl text-[20px] metal-green">{number}</h1>
     <p className="sm:text-[15px] text-center text-[10px]">{data}</p>
    </div>
    </>)
}

export default Homecard;