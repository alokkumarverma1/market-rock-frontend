import React from "react";
import { Link } from "react-router-dom";

function IpoCard({ onClick }) {
  const ipo = {
    name: "Tata Technologies",
    status: "UpComing",
    priceLow: 475,
    priceHigh: 500,
    lotSize: 30,
    openDate: "01 Jul 2026",
    closeDate: "03 Jul 2026",
  };

  return (
    <Link to={"/ipoDetails"}>
    <div
      onClick={onClick}
      className="cursor-pointer max-h-45  min-w-60 rounded-2xl  shadow-md border-green-300 border-2 bg-white p-5 transition hover:border-green-300 hover:shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">
          {ipo.name}
        </h2>
        <span className=" bg-gray-100 text-[10px] font-medium px-2 py-1 rounded-md">
          {ipo.status}
        </span>
      </div>

      {/* Price */}
     <div className=" flex justify-between mt-2">
         <div className="">
        <p className="text-xs text-gray-500">Price Band</p>
        <p className="text-sm font-semibold text-gray-900">
          ₹{ipo.priceLow} - ₹{ipo.priceHigh}
        </p>
      </div>
      <div>
          <p className="text-xs text-gray-500">Lot Size</p>
          <p className="text-sm font-medium text-gray-900">
            {ipo.lotSize}
          </p>
        </div>
     </div>


    {/* open and close date */}
    <div className="flex flex-col gap-1 mt-3 text-[12px] text-gray-500">
     <div className="open flex gap-5"><p>Open</p><p>{ipo.openDate}</p></div>
     <div className="open flex gap-5"><p>Close</p><p>{ipo.openDate}</p></div>
    </div>

    </div>
    </Link>
  );
}

export default IpoCard;