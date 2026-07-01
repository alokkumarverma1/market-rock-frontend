import React from "react";
import Navbar from "../../../others/navbar";
import RockHeading from "../../rockHeading";
import StockChart from "./stockChart";
import StockFinanceChart from "./stockFinancialChart";
import StockHoldings from "./stockHoldings";
import Footer from "../../../others/footer";

function SwingStockDetails(){
    return(<>
    <Navbar></Navbar>
    <div className="swingstockdetails mt-15">

     {/* stock chart */}
     <RockHeading heading={"Stock chart"} ></RockHeading>
     <div className="chartarea h-60 w-full flex justify-center items-center">
       <p>Comming soon...</p>
     </div>

     {/* key fector */}
     <RockHeading heading={"key factor"} ></RockHeading>
     <div className="fundamentaldata p-3 mb-10 flex flex-wrap gap-3 w-full">
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
     <RockHeading heading={"Financial revenue"}></RockHeading>
     <div className="financial-data min-h-40 w-full p-2">
      <StockFinanceChart></StockFinanceChart>
     </div>
     
     {/* holding statement */}
     <RockHeading heading={"Holding data"}></RockHeading>
     <div className="holding-data h-80 w-full">
      <StockHoldings></StockHoldings>
     </div>
     
     {/* disclamer */}
    <div className="disclamer bor min-h-30 w-full text-center p-2 mb-20">
      <h1 className="font-bold text-2xl">⚠️ <b>Disclaimer:</b></h1>
      <p className="text-[11px] text-gray-600 leading-5 p-2">
      This platform is created for educational and informational purposes only. 
      All stock data, charts, financial metrics, and analysis shown here are for learning purposes and do not constitute financial or investment advice.  
      Stock prices, company data, and other information may change or be updated after publication. 
      We do not guarantee the accuracy, completeness, or real-time validity of any data displayed.  
      Any investment decision made based on this information is strictly at your own risk. 
      We are not responsible for any financial loss, damage, or consequences arising from the use of this platform or its data.  
      Users are advised to do their own research or consult a certified financial advisor before making any investment decisions.   </p>
    </div>
   
  </div>
 
    
    </>)
}

export default SwingStockDetails;