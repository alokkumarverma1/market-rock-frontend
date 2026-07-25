import React from "react";
import { Link } from "react-router-dom";
import { deleteStock } from "../../../firebase/services/rockService";
import { useNavigate } from "react-router-dom";

function SwingStockCard({data}){
const navigate = useNavigate();
const deleteItem = async ()=>{
 const res = await deleteStock(data.id);
 if(res == true){
  console.log("delete success")
 navigate("/result" , {state:{code:200 , value:true , next:"/rock"}})
 }else{
 navigate("/result" , {state:{code:401 , value:false , next:"/rock"}})
 }
}

  return (
    <div className={`rockcard h-50 min-w-60 max-w-60 p-3  text-black rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-white/20 ${parseInt(data.rockAnalysis.currentPrice) > parseInt(data.rockAnalysis.minTarget) ? "bg-red-200" : "bg-green-200"}`}>
      {/* Header */}
      <div className="flex mb-2 justify-between items-center">
        <h1 className="font-bold text-lg "></h1>
        <div className=" w-full  backdrop-blur-sm h-8  rounded-full flex items-center justify-between flex-row-reverse">
          <i className="fa-solid fa-chart-line  text-sm"></i>
          <i className="fa-solid fa-trash cursor-pointer" onClick={deleteItem}></i>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white shadow-lg rounded-2xl px-6 py-2">
          <p className=" font-bold text-gray-800">
            {data.stockName}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="space-y-2 flex justify-center items-center flex-col w-full mt-4">
        <p className="text-[10px]  text-center leading-4">
          For educational purposes only. Please make your own investment
          decisions.
        </p>
        <Link state={data}  to={"/swingStockDetails"}><p className="cursor-pointer"><i class="fa-solid fa-arrow-right"></i></p></Link>

        <div className="border-t border-white/20 mb-2 flex justify-center">
          <p className="text-[10px]">
           {data.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SwingStockCard;