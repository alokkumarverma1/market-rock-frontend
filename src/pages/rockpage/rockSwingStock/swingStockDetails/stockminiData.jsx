import React from "react";

function StockMiniData({name,data}){
    return(<>
      <div className="factor h-15  min-w-20 max-w-20 border-green-300 border-2 flex flex-col justify-center items-center rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-75">
        <h1 className="text-[12px]">{name}</h1>
        <p className="font-semibold">{data}</p>
       </div>
    </>)
}

export default StockMiniData;