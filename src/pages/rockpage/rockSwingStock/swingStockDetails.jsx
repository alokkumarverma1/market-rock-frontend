import React from "react";
import Navbar from "../../others/navbar";
import RockHeading from "../rockHeading";

function SwingStockDetails(){
    return(<>
    <Navbar></Navbar>
    <div className="swingstockdetails border mt-15">
     {/* stock chart */}
     <div className="chartarea h-60 w-full border bg-gray-100">
     </div>

     {/* key fector */}
     <RockHeading heading={"key factor"} ></RockHeading>
     <div className="fundamentaldata p-3 mb-20 flex flex-wrap gap-3   h-40 w-full">
       <div className="factor border-green-300 border-2 flex flex-col justify-center items-center h-15 w-30 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-75">
        <h1 className="text-[12px]">PE RATIO</h1>
        <p className="font-semibold">21.68</p>
       </div>
       <div className="factor h-15 w-30 border-green-300 border-2 flex flex-col justify-center items-center rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-75">
       <h1 className="text-[12px]">PE RATIO</h1>
        <p className="font-semibold">21.68</p>
       </div>
       <div className="factor h-15 w-30 border-green-300 border-2 flex flex-col justify-center items-center rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-75">
        <h1 className="text-[12px]">PE RATIO</h1>
        <p className="font-semibold">21.68</p>
       </div>
       <div className="factor h-15 w-30 border-green-300 border-2 flex flex-col justify-center items-center rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-75">
        <h1 className="text-[12px]">PE RATIO</h1>
        <p className="font-semibold">21.68</p>
       </div>
        <div className="factor h-15 w-30 border-green-300 border-2 flex flex-col justify-center items-center rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-75">
        <h1 className="text-[12px]">PE RATIO</h1>
        <p className="font-semibold">21.68</p>
       </div>
     </div>

     {/* financial data */}
     <RockHeading heading={"Financial data"}></RockHeading>
     <div className="financial-data h-40 w-full bg-gray-200"></div>
     
     {/* holding statement */}
     <RockHeading heading={"Holding data"}></RockHeading>
     <div className="holding-data h-40 w-full bg-gray-200"></div>
     
     {/* disclamer */}
     <RockHeading heading={"Disclamer"}></RockHeading>
     <div className="disclamer h-30 w-full bg-gray-200"></div>

    </div>
    
    </>)
}

export default SwingStockDetails;