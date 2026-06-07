import React, { useState } from "react";

function Navbar(){

    const [show,setShow] = useState(true);

    let change = ()=>{
        setShow(!show);
    }
    return(<>
    <div className="navbar  flex fixed  right-0  sm:w-full w-40 bg-black z-50 top-0 sm:justify-center justify-end items-center">
        {/* max area navbar  */}   
     <div className={`middle z-50 bg-black shadow-gray-600 shadow sm:rounded-bl-2xl flex sm:justify-center  sm:rounded-br-2xl sm:h-10 h-screen sm:w-[80%] w-40 ${show ? "sm:flex hidden" : "flex sm:hidden"}`}>
      <ul className="w-full z-50 h-full flex sm:justify-around  pb-2 pt-3 sm:p-0  flex-col sm:flex-row items-center  gap-5 text-white">
        <li className="w-full sm:hidden  flex justify-start pl-2 text-white"><i class="fa-solid fa-xmark cursor-pointer" onClick={change}></i></li>
        <li  className="cursor-pointer">Home</li>
        <li  className="cursor-pointer">Rock</li>
        <li className="cursor-pointer">Learn</li>
        <li  className="cursor-pointer">More</li>
      </ul>
     </div>

     {/* icon */}
     <div className="h-10 sm:hidden w-10 absolute right-0 top-3 rounded-2xl" onClick={change}>
      <i class="fa-solid fa-bars text-white text-[20px]"></i>
     </div>

     {/* icon area  */}
     <div className="icon  top-2 absolute left-5 rounded-full h-9 w-9">
     
     </div>
    </div>
    </>)
}

export default Navbar;