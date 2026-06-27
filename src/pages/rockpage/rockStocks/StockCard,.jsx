import React from "react";

function StockCard({ name, color, price, date, time }) {
  return (
    <div className="rockcard h-50 min-w-60 p-4 bg-green-100 text-black rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-white/20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg ">{name}</h1>
        <div className="bg-white/20 backdrop-blur-sm h-8 w-8 rounded-full flex items-center justify-center">
          <i className="fa-solid fa-chart-line  text-sm"></i>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white shadow-lg rounded-2xl px-6 py-2">
          <p className="text-2xl font-bold text-gray-800">
            ₹{price}
          </p>
        </div>

        <div className="flex items-center gap-1  text-xs">
          <i className="fa-solid fa-clock"></i>
          <span>Update time price</span>
        </div>
      </div>

      {/* Footer */}
      <div className="space-y-2">
        <p className="text-[10px]  text-center leading-4">
          For educational purposes only. Please make your own investment
          decisions.
        </p>

        <div className="border-t border-white/20 pt-2 flex justify-center">
          <p className="text-[10px] ">
            {date} • {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StockCard;