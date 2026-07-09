import React from "react";

function RockIndexCard({data}) {


  const isCall = data.direction === "call";

  return (
<div
  className={`w-64 rounded-2xl min-w-60 max-w-60 h-60 p-3 shadow-md hover:shadow-xl transition-all duration-300
  ${isCall ? "bg-green-100" : "bg-red-50" }`}>
  {/* Header */}
  <div className="flex justify-between items-center">
    <div className="bg-white px-2 py-1 rounded-full shadow">
      <h2 className="font-semibold text-xs">{data.name}</h2>
    </div>

    <div className="w-8 h-8 rounded-full bg-white shadow flex justify-center items-center">
      <i className="fa-solid fa-chart-line text-sm"></i>
    </div>
  </div>

  {/* Price */}
  <div className="mt-3 flex justify-between items-center">
    <h1 className="text-xl font-bold">{data.price}</h1>

    <span
      className={`px-3 py-1 rounded-full text-[10px] font-semibold text-white ${
        isCall ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {data.direction.toUpperCase()}
    </span>
  </div>

  {/* Trade Details */}
  <div className="mt-3 bg-white rounded-xl p-2 shadow">
    <div className="grid grid-cols-2 gap-2">

      <div className="bg-red-50 h-8 flex justify-start items-center rounded-lg p-2">
        <p className="text-[10px] text-gray-500 pr-3">sl - </p>
        <h3 className="font-bold text-sm">{data.sl}</h3>
      </div>

      
      <div className="bg-w bg-blue-50 h-8 flex justify-start items-center rounded-lg p-2">
        <p className="text-[10px] text-gray-500 pr-3">Entry - </p>
        <h3 className="font-bold text-sm">{data.entry}</h3>
      </div>

      
      <div className="bg-green-50 h-8 flex justify-start items-center rounded-lg p-2">
        <p className="text-[10px] text-gray-500 pr-3">min - </p>
        <h3 className="font-bold text-sm">{data.minTarget}</h3>
      </div>

      
      <div className="bg-green-50 h-8 flex justify-start items-center rounded-lg p-2">
        <p className="text-[10px] text-gray-500 pr-3">max - </p>
        <h3 className="font-bold text-sm">{data.maxTarget}</h3>
      </div>

    </div>
  </div>

  {/* Footer */}
  <div className="mt-3">
    <div className=" flex justify-between pb-2 text-[10px] text-gray-600">
      <span>{data.date}</span>
      <span>{data.time}</span>
    </div>
     <p className="text-[7px] text-center text-gray-600 leading-3">
    Educational purposes only. Please trade at your own risk.
    </p>
  </div>
</div>
  );
}

export default RockIndexCard;