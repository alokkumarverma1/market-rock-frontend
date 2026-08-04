import React from "react";

function SmallHeading({heading}){
 return(<>
  <div className="rockheaidng w-full dark:text-white  font-bold h-10 flex justify-start items-center">
        <h1>{heading}</h1>
    </div>
 </>)
}

export default SmallHeading;