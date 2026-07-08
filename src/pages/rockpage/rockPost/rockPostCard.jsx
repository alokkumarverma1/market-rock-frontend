import React from "react";
import { Link } from "react-router-dom";
function RockPostCard({data}) {

  return (
    <>
      <Link to={"/rockPostDetails"} state={data}>
        <div className="rockpostcard p-3 min-h-3  rounded-2xl shadow-md hover:shadow-xl w-full">
          
          <div className="flex w-full mb-1 items-center gap-2">
            <div className="h-5 w-5 rounded-full overflow-hidden">
              <img src="logo.png" alt="" />
            </div>
            <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">{data.heading}</h1>
          </div>

          <p className="ml-3text-xs sm:text-sm xl:text-[15px] text-gray-600 leading-6 line-clamp-3">
            {data.details}
          </p>

          <div className="w-full mt-2 flex justify-end">
            <h1 className="text-[10px] sm:text-xs">
              {data.date}
            </h1>
          </div>

        </div>
      </Link>
    </>
  );
}

export default RockPostCard;