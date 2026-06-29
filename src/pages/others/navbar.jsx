import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Navbar(){

    const [show,setShow] = useState(true);
    const [login , setLogin] = useState(false)

    let change = ()=>{
        setShow(!show);
    }

    // chek user login or not 
 useEffect(() => {
  const auth = getAuth();

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log("USER:", user);

    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });
  console.log("user"+ login)
  return () => unsubscribe();
}, []);

useEffect(() => {
  console.log("LOGIN STATE UPDATED:", login);
}, [login]);

    return(<>
    <div className="navbar bg-white  flex fixed  right-0  sm:w-full w-40 z-50 top-0 sm:justify-center justify-end items-center">
        {/* max area navbar  */}   
     <div className={`middle z-50 shadow-md border border-gray-200 sm:rounded-bl-2xl flex sm:justify-center bg-white  sm:rounded-br-2xl sm:h-12 h-screen sm:w-[80%] w-90 ${show ? "sm:flex hidden" : "flex sm:hidden"}`}>
      <ul className="w-full z-50 h-full p-2 sm:p-0 flex  sm:justify-around  pb-2 pt-3   flex-col sm:flex-row items-center  gap-1">
        <li className="w-full sm:hidden  flex justify-startpl-2"><i class="fa-solid fa-xmark cursor-pointer" onClick={change}></i></li>
        <div className="profile flex gap-2 sm:hidden w-full h-15 mb-2 flex-col justify-center items-center ">
            <div className="profile h-15 w-15 rounded-full bg-red-200 ">

            </div>
        </div>
        <li  className="cursor-pointer  rounded-2xl w-full hover:bg-gray-100 p-1 h-9 sm:w-20"><Link to={"/"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full"> <i class="fa-solid fa-house font-serif"></i><span>Home</span> </Link></li>
        <li  className="cursor-pointer  rounded-2xl w-full hover:bg-gray-100 p-1 h-9 sm:w-20"><Link to={"/rock"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full"> <i class="fa-solid fa-seedling"></i><span>Rock</span> </Link></li>
        <li  className="cursor-pointer  rounded-2xl w-full hover:bg-gray-100 p-1 h-9 sm:w-20"><Link to={"/learn"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full"> <i class="fa-solid fa-book-open"></i><span>Learn</span> </Link></li>
        <div className={`moreOption  relative  rounded-2xl hover:bg-gray-100 p-1 h-9 w-40  sm:w-20 ${login ? "block" : "hidden"}`}>
            <li  className={`moreOption cursor-pointer  rounded-2xl flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full `}> <i class="fa-solid fa-ellipsis-vertical"></i>More</li>
            <div className="other-option absolute  top-6 -left-1 min-h-30 w-40 rounded-2xl shadow-md bg-white">
                <ul className="h-full w-full flex flex-col pt-3 items-center pr-3 pl-3">
                      <li  className="cursor-pointer h-10 rounded-2xl w-full hover:bg-gray-100 text-center flex justify-center items-center "><Link to={"/profile"}>Profile</Link></li>
                      <li  className="cursor-pointer h-10 rounded-2xl w-full hover:bg-gray-100 text-center flex justify-center items-center ">My Course</li>
                      <li  className="cursor-pointer h-10 rounded-2xl w-full hover:bg-gray-100 text-center flex justify-center items-center ">About us</li>
                      <li  className="cursor-pointer h-10 rounded-2xl mb-2 w-full hover:bg-gray-100 text-center flex justify-center items-center ">Contact us</li>
                      <button className="border-red-600 border-2 bg-red-100 mb-3 w-full rounded-2xl h-9">Logout</button> 
                </ul>
            </div>
        </div>
         {
          <Link to={"/login"}> <li  className={`cursor-pointer ${login == true ? "hidden" : "block"} `}><button className="shape text-white border-white shadow-md h-9 w-20 rounded-2xl">Login</button></li></Link>
         
        }
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