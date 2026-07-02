import React from "react";

function RockIndexCard({ name, direction, price, date, time }) {
  return (<>
    <div className="rockcard h-50  text-bl min-w-60 p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-white/20 bg-red-100 ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs">Market Index</p>
          <h1 className="font-bold text-xl ">
            {name}
          </h1>
        </div>

        <div className="h-10 w-10 rounded-full bg-white/20 flex justify-center items-center">
          <i className="fa-solid fa-chart-line "></i>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">
          {price}
        </h2>

      </div>

      {/* Footer */}
      <div className="space-y-2">
        <p className="text-[10px]  text-center leading-4">
        For educational purposes only. Always use a 5% stop loss.
        </p>

        <div className="border-t border-white/20 pt-2 flex justify-between text-[10px] ">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default RockIndexCard;