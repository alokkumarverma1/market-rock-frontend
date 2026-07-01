import React from "react";
import { Link } from "react-router-dom";

function SwingStockCard() {
  return (
    <div className="rockcard h-50 min-w-60 max-w-60 p-4 bg-green-100 text-black rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-white/20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg "></h1>
        <div className="bg-white/20 backdrop-blur-sm h-8 w-8 rounded-full flex items-center justify-center">
          <i className="fa-solid fa-chart-line  text-sm"></i>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white shadow-lg rounded-2xl px-6 py-2">
          <p className=" font-bold text-gray-800">
            Ambani 
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="space-y-2 flex justify-center items-center flex-col w-full mt-4">
        <p className="text-[10px]  text-center leading-4">
          For educational purposes only. Please make your own investment
          decisions.
        </p>
        <Link to={"/swingStockDetails"}><p className="cursor-pointer"><i class="fa-solid fa-arrow-right"></i></p></Link>

        <div className="border-t border-white/20 pt-1 flex justify-center">
          <p className="text-[10px]">
           20-06-2026
          </p>
        </div>
      </div>
    </div>
  );
}

export default SwingStockCard;