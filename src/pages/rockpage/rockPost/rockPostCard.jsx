import React, { useState } from "react";
import { Link } from "react-router-dom";


function RockPostCard(){
    let data = "This is heading of post"
    let data2 = "this is one of the best plateform to create this unit of cloud in this infotmation in this you are one of the best plateform you can do this but you know this is not a lion it is a cat and cat not a applicable fo this is one of the best plateform to create this unit of cloud in this infotmation in this you are one of the best plateform you can do this but you know this is not a lion it is a cat and cat not a applicable fothis is one of the best plateform to create this unit of cloud in this infotmation in this you are one of the best plateform you can do this but you know this is not a lion it is a cat and cat not a applicable fo"
   
   return(<>
   <Link to={"/rockPostDetails"} state={data}>
    <div className="rockpostcard p-3 h-33 sm:h-25 xl:h-20 rounded-2xl shadow-md hover:shadow-xl w-full">
    <div className="flex w-full justify-between">
         <h1 className="font-semibold">{data}</h1>
     
    </div>
     <p className="text-[13px] text-gray-700">{ window.screen.width >= 300 ? data2.slice(0,100)  : data2.slice(0,120)}</p>
     <div className="w-full mt-2  flex justify-end">
            <h1 className="text-[10px]">18-06-2026</h1>
     </div>
    </div>
   </Link>
    
    </>)
}

export default RockPostCard;