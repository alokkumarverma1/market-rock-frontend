import React from "react";

function Heading({heading}){
    return(<>
  <div className="w-full text-center h-30 text-black  flex gap-2 justify-center items-center">
      <h1 className="font-bold  sm:text-3xl text-2xl">{heading}</h1>
  </div>
    
    </>)
}

export default Heading;