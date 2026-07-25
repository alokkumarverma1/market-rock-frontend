import React from "react";
import Navbar from "../../../others/navbar";
import RockHeading from "../../rockHeading";
import StockChart from "./stockChart";
import StockFinanceChart from "./stockFinancialChart";
import StockHoldings from "./stockHoldings";
import Footer from "../../../others/footer";
import StockMiniData from "./stockminiData";
import { data, useLocation } from "react-router-dom";

function SwingStockDetails(){

const location = useLocation();
const stock = location.state;


    return(<>
    <Navbar></Navbar>
    <div className="swingstockdetails mt-15 p-3">
     {/* about stock */}
     {/* <div className="about-stock">

     </div> */}
     {/* stock chart */}
     <RockHeading heading={"Stock chart"} ></RockHeading>
     <div className="chartarea h-60 w-full flex justify-center items-center">
       <p>Comming soon...</p>
     </div>


{/* Rock Team Analysis */}

<RockHeading heading={"Rock Team Analysis"} />
  <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-1">
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-gray-500 text-sm">current price</p>
      <h3 className="sm:text-2xl text-[18px] font-bold mt-1">₹{stock.rockAnalysis.currentPrice}</h3>
    </div>
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-gray-500 text-sm">Expected  Range</p>
      <h3 className="sm:text-2xl text-[18px] font-bold text-green-600 mt-1">
       ₹{stock.rockAnalysis.minTarget} -  {stock.rockAnalysis.maxTarget}
      </h3>
    </div>
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-gray-500 text-sm">Key Support</p>
      <h3 className="sm:text-2xl text-[18px] font-bold text-red-500 mt-1">
        ₹{stock.rockAnalysis.support}
      </h3>
    </div>
    <div className="bg-gray-50 rounded-xl p-4">
      <p className="text-gray-500 text-sm">Confidence</p>
      <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
      <div className="bg-green-600 h-2 rounded-full" style={{ width: `${stock.rockAnalysis.confidence}%` }}/>
      </div>
      <p className="mt-2 font-semibold">{stock.rockAnalysis.confidence}%</p>
    </div>
  </div>

     {/* return of stock */}
     <RockHeading heading={"Return data data"}></RockHeading>
     <div className="return-data p-2 mb-10 flex flex-wrap gap-3 w-full">
       <StockMiniData name={"Last year"} data={stock.returnData.lastYear + "%"}></StockMiniData>
       <StockMiniData name={"last 6 month"} data={stock.returnData.last6Month + "%"}></StockMiniData>
       <StockMiniData name={"last week"} data={stock.returnData.lastWeek + "%"}></StockMiniData>
       <StockMiniData name={"last day"} data={stock.returnData.lastDay + "%"}></StockMiniData>
     </div>

     {/* key fector */}
     <RockHeading heading={"key factor"} ></RockHeading>
     <div className="fundamentaldata p-2 mb-10 flex flex-wrap gap-3 w-full">
       <StockMiniData name={"pe ration"} data={stock.keyFactors.peRatio}></StockMiniData>
       <StockMiniData name={"marketCap"} data={stock.keyFactors.marketCap}></StockMiniData>
       <StockMiniData name={"bookValue"} data={stock.keyFactors.bookValue}></StockMiniData>
       <StockMiniData name={"roe"} data={stock.keyFactors.roe}></StockMiniData>
       <StockMiniData name={"eps"} data={stock.keyFactors.eps}></StockMiniData>
     </div>

    {/* financial area */}
    <div className="financial-area flex-col flex  sm:flex-row w-full justify-around ">

      {/* revenue data */}
    <div className="revenue-data w-full sm:w-[40%] ">
      <RockHeading heading={"Financial revenue"}></RockHeading>
     <div className="financial-data min-h-40 w-full p-2">
      <StockFinanceChart year={stock.year} revenue={stock.profit} profitType={stock.profitType}></StockFinanceChart>
     </div>
    </div>
     
     {/* holding statement */}
    <div className="holding-data  w-full sm:w-[40%] mt-10 sm:m-0">
      <RockHeading heading={"Holding data"}></RockHeading>
      <div className="holding-data h-60 w-full">
      {console.log(stock.holding)}
      <StockHoldings holding={stock.holding}></StockHoldings>
    </div>

    </div>

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