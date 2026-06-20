import React from "react";

function StockCard({name,color,price ,date,time}){
  
    return(<>
    <div className="rockcard h-50 min-w-60 transition-shadow justify-between p-3 flex items-center flex-col rounded-2xl shadow-md hover:shadow-xl" style={{backgroundColor:`${color}`}}>
    <h1 className="font-bold">{name}</h1>
    <div className="flex justify-center flex-col items-center">
        <div className="currentprice h-9 w-40 rounded-2xl bg-white flex justify-center items-center"><p>{price}</p></div>
        <p className="text-[10px] text-gray-700">update time price</p>
    </div>
   <div className="flex justify-center items-center flex-col gap-3">
     <p className="text-[10px] text-gray-700 text-center">only for education not any tips if you want to buy and sell it is your responceblity</p>
     <p className="text-[10px] text-gray-500">{date} , {time} </p>
   </div>


    </div>
    </>)
}

export default StockCard;