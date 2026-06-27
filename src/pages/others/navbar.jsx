import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){

    const [show,setShow] = useState(true);

    let change = ()=>{
        setShow(!show);
    }



    return(<>
    <div className="navbar bg-white  flex fixed  right-0  sm:w-full w-40 z-50 top-0 sm:justify-center justify-end items-center">
        {/* max area navbar  */}   
     <div className={`middle z-50 shadow-md border border-gray-200 sm:rounded-bl-2xl flex sm:justify-center bg-white  sm:rounded-br-2xl sm:h-12 h-screen sm:w-[80%] w-40 ${show ? "sm:flex hidden" : "flex sm:hidden"}`}>
      <ul className="w-full z-50 h-full flex sm:justify-around  pb-2 pt-3 sm:p-0  flex-col sm:flex-row items-center  gap-5">
        <li className="w-full sm:hidden  flex justify-start pl-2"><i class="fa-solid fa-xmark cursor-pointer" onClick={change}></i></li>
        <Link to={"/"}><li  className="cursor-pointer">Home</li></Link>
        <Link to={"/rock"}><li  className="cursor-pointer">Rock</li></Link>
        <Link to={"/learn"}><li className="cursor-pointer">Learn</li></Link>
        <Link to={"/login"}> <li  className="cursor-pointer"><button className="shape text-white border-white shadow-md h-9 w-20 rounded-2xl">Login</button></li></Link>
        <div className="moreOption relative hidden">
            <li  className="moreOption cursor-pointer">More</li>
            <div className="other-option absolute top-6 -left-10 min-h-30 w-40 rounded-2xl shadow-md bg-white">
                <ul className="h-full w-full flex flex-col pt-3 items-center pr-3 pl-3">
                      <li  className="cursor-pointer h-10 rounded-2xl w-full hover:bg-gray-100 text-center flex justify-center items-center ">Profile</li>
                      <li  className="cursor-pointer h-10 rounded-2xl w-full hover:bg-gray-100 text-center flex justify-center items-center ">My Course</li>
                      <li  className="cursor-pointer h-10 rounded-2xl w-full hover:bg-gray-100 text-center flex justify-center items-center ">About us</li>
                      <li  className="cursor-pointer h-10 rounded-2xl mb-2 w-full hover:bg-gray-100 text-center flex justify-center items-center ">Contact us</li>
                      <button className="border-red-600 border-2 bg-red-100 mb-3 w-full rounded-2xl h-9">Logout</button> 
                </ul>
            </div>
        </div>
      </ul>
     </div>

     {/* icon */}
     <div className="h-10 sm:hidden w-10 absolute right-0 top-3 rounded-2xl" onClick={change}>
      <i class="fa-solid fa-bars text-[20px]"></i>
     </div>

     {/* icon area  */}
     <div className="icon  top-2 fixed left-5 sm:left-10  rounded-full h-9 w-9">
      <img src="logo.png" alt="" />
     </div>

    </div>
    </>)
}

export default Navbar;