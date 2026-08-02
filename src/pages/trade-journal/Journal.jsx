import React from "react";
import Navbar from "../others/navbar";
import StrategyCard from "./StrategyCard";
import SmallHeading from "../others/smallHeading";
import LossReason from "./Loss-Reason";
import ProfitableDays from "./ProfitableDay";
import {
  BsBarChartLineFill,   // Trades
  BsGraphUpArrow,       // Profit
  BsGraphDownArrow,     // Loss
} from "react-icons/bs";


function Journal(){
    return(<>
    <Navbar></Navbar>
    <div className="general mt-10 sm:mt-20 p-2 bg-gray-50">
        {/* strategy cards */}
        <SmallHeading heading={"Your strategy"}></SmallHeading>
        <div className="strategycards scroller py-2  gap-5 ">
            <StrategyCard></StrategyCard>
             <StrategyCard></StrategyCard>
              <StrategyCard></StrategyCard>
               <StrategyCard></StrategyCard>
                <StrategyCard></StrategyCard>
             <StrategyCard></StrategyCard>
              <StrategyCard></StrategyCard>
               <StrategyCard></StrategyCard>
                <StrategyCard></StrategyCard>
             <StrategyCard></StrategyCard>
              <StrategyCard></StrategyCard>
               <StrategyCard></StrategyCard>
        </div>

    {/* nymber of trades */}
     <SmallHeading heading={"Trades summary"}></SmallHeading>
     <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-5 hover:shadow-xl transition-all">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500">
            Week • Month • Year
          </p>
      </div>

      {/* Table */}
      <div className="space-y-3">
        {/* Week */}
         <div className="grid grid-cols-4 items-center bg-gray-50 rounded-xl p-3">
          <div className="flex items-center gap-2 font-semibold text-gray-700">
            Week
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-400">Trades</p>
            <h3 className="font-bold text-lg">13</h3>
          </div>

          <div className="text-center text-green-600">
            <p className="text-xs text-green-400">Profit</p>
            <h3 className="font-bold text-lg">10</h3>
          </div>

          <div className="text-center text-red-600">
            <p className="text-xs text-red-400">Loss</p>
            <h3 className="font-bold text-lg ">3</h3>
          </div>
        </div>

        {/* Month */}
         <div className="grid grid-cols-4 items-center bg-gray-50 rounded-xl p-3">
          <div className="flex items-center gap-2 font-semibold text-gray-700">
            Month
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-400">Trades</p>
            <h3 className="font-bold text-lg">45</h3>
          </div>

          <div className="text-center text-green-600">
            <p className="text-xs text-green-400">Profit</p>
            <h3 className="font-bold text-lg">29</h3>
          </div>

          <div className="text-center text-red-600">
            <p className="text-xs text-red-400">Loss</p>
            <h3 className="font-bold text-lg ">16</h3>
          </div>
        </div>

        {/* Year */}
        <div className="grid grid-cols-4 items-center bg-gray-50 rounded-xl p-3">
          <div className="flex items-center gap-2 font-semibold text-gray-700">
            Year
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-400">Trades</p>
            <h3 className="font-bold text-lg">234</h3>
          </div>

          <div className="text-center text-green-600">
            <p className="text-xs text-green-400">Profit</p>
            <h3 className="font-bold text-lg">180</h3>
          </div>

          <div className="text-center text-red-600">
            <p className="text-xs text-red-400">Loss</p>
            <h3 className="font-bold text-lg ">54</h3>
          </div>
        </div>
      </div>

    </div>


{/* other data */}
     <div className="other-data flex gap-3 justify-between mt-5 flex-col sm:flex-row">

         <div className="loss-reason w-full sm:w-[45%]">
          <SmallHeading heading={"Loss reason"}></SmallHeading>
          <div className="loss-reason h-96 w-full mt-2">
          <LossReason></LossReason>
          </div>
         </div>

         <div className="profit-day  w-full sm:w-[45%]">
             <SmallHeading heading={"Profitable days"}></SmallHeading>
             <div className="loss-reason h-96 w-full mt-2">
             <ProfitableDays></ProfitableDays>
              </div>
         </div>

     </div>




   {/* extra */}
    <div className="extra h-40  w-full"></div>




        
    </div>
    </>)
}

export default Journal;