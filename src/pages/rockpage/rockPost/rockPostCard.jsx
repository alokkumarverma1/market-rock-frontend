import React from "react";
import { Link } from "react-router-dom";
function RockPostCard({ heading, details, date }) {

  return (
    <>
      <Link to={"/rockPostDetails"} state={{heading, details , date}}>
        <div className="rockpostcard p-3 min-h-3  rounded-2xl shadow-md hover:shadow-xl w-full">
          
          <div className="flex w-full mb-1 items-center gap-2">
            <div className="h-5 w-5 rounded-full overflow-hidden">
              <img src="logo.png" alt="" />
            </div>
            <h1 className="font-semibold">{heading}</h1>
          </div>

          <p className="ml-3 text-gray-800 text-xs sm:text-sm xl:text-base line-clamp-3 xl:line-clamp-1">
            {details}
          </p>

          <div className="w-full mt-2 flex justify-end">
            <h1 className="text-[10px] sm:text-xs">
              {date}
            </h1>
          </div>

        </div>
      </Link>
    </>
  );
}

export default RockPostCard;