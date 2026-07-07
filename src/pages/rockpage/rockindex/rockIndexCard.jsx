import React from "react";

function RockIndexCard({data }) {
  return (<>
    <div className={`rockcard h-50  text-bl min-w-60 p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-white/20 ${data.direction == "call" ? "bg-green-100" : "bg-red-100"}`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className=" w-25 h-8 flex justify-center items-center shadow font-semibold text-[15px] bg-white rounded-2xl p-2">
            {data.name}
          </h1>
        </div>

        <div className="h-10 w-10 rounded-full bg-white/20 flex justify-center items-center">
          <i className="fa-solid fa-chart-line "></i>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">
          {data.price} {data.direction}
        </h2>

      </div>

      {/* Footer */}
      <div className="space-y-2">
        <p className="text-[10px]  text-center leading-4">
        For educational purposes only. Always use a 5% stop loss.
        </p>

        <div className="border-t border-white/20 pt-2 flex justify-between text-[10px] ">
          <span>{data.date}</span>
          <span>{data.time}</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default RockIndexCard;