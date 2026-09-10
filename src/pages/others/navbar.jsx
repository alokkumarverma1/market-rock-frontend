import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { RiVipDiamondFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";


function Navbar(){

    const [show,setShow] = useState(true);
    const [login , setLogin] = useState(false)
    const [role , setRole] = useState();
    const[dark,setDark] = useState(false);
    const navigate = useNavigate()

    let change = ()=>{
        setShow(!show);
    }

 // chek user login or not 
 useEffect(() => {
 const chekRole = ()=>{
  const token = localStorage.getItem("token");
  if(!token){
    setLogin(false);
    setRole(null);
    return;
  }
  setLogin(true)
  const data = jwtDecode(token);
  setRole(data.role)
}
chekRole();
}, []);

// cange thems 
const changeThems = ()=>{
setDark(!dark);
    if (!dark) {
      document.documentElement.classList.toggle("dark")
    } else {
      document.documentElement.classList.remove("dark");
    }
}



 // singout
 const userLogout = async ()=>{
  const auth = getAuth();
  await signOut(auth);
  localStorage.removeItem("token")
   navigate("/result" , {state:{ message:"Logout seccess", value:true , next:"/"}})
  
 }




    return(<>
    <div className="navbar  flex fixed bg-white dark:bg-zinc-800  right-0  sm:w-full w-40 z-40 top-0 sm:justify-center justify-end items-center">
        {/* max area navbar  */}   
     <div className={`middle z-50  shadow-md  bg-white dark:bg-zinc-800   border-gray-200 sm:rounded-bl-2xl flex sm:justify-center   sm:rounded-br-2xl sm:h-12 h-screen sm:w-[80%] w-90 ${show ? "sm:flex hidden" : "flex sm:hidden"}`}>
      <ul className="w-full rounded-2xl   bg-white dark:bg-zinc-800 dark:text-white  z-50 h-full p-2 sm:p-0 flex   pb-2 pt-3 sm:justify-around   flex-col sm:flex-row items-center  gap-2">
        {/* change thems */}
        <div onClick={changeThems} className="w-16 h-8  rounded-full bg-gray-300 dark:bg-slate-700 fixed top-2 right-3 z-50 shadow-md cursor-pointer  items-center p-1 transition">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-300 dark:translate-x-8 ">
            {dark ? <FaSun className="text-yellow-500 text-xs"/> :  <FaMoon className="text-slate-700 text-xs"/>}
          </div>
        </div>

         <li className="w-full  sm:hidden mb-5  flex justify-startpl-2"><i class="fa-solid fa-xmark cursor-pointer" onClick={change}></i></li>
         <div className={`profile  flex gap-2 sm:hidden w-full h-15 mb-2 flex-col justify-center items-center ${login ? "block" : "hidden"}` }>
           <Link to={"/profile"} >
            <div className="profile h-15 w-15 rounded-full bg-green-300 flex justify-center items-center"> <i className="fa-solid fa-user text-3xl text-white"></i></div>
          </Link>
        </div>
        <li  className="cursor-pointer   rounded-2xl w-full  p-1 h-9 sm:w-20"><Link to={"/"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full"> <i class="fa-solid fa-house font-serif"></i><span>Home</span> </Link></li>
        <li  className="cursor-pointer  rounded-2xl w-full  p-1 h-9 sm:w-20"><Link to={"/rock"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full"> <RiVipDiamondFill className=" text-[20px]" /><span>Rock</span> </Link></li>
        <li  className="cursor-pointer rounded-2xl w-full  p-1 h-9 sm:w-20"><Link to={"/rockAi"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full"> <i class="fa-solid fa-book-open"></i><span>RockAi</span> </Link></li>
        <li  className="cursor-pointer rounded-2xl w-full  p-1 h-9 sm:w-20"><Link to={"/learn"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full"> <FaGraduationCap size={22} /><span>Learn</span> </Link></li>

        <div className={`moreOption  relative  rounded-2xl  p-1 h-9 w-40  sm:w-20 `}>
        <li  className={`moreOption  cursor-pointer  rounded-2xl flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full `}> <i class="fa-solid fa-ellipsis-vertical"></i>More</li>
            <div className="other-option bg-white dark:bg-zinc-800 absolute  top-6 -left-1 min-h-30 w-40 rounded-2xl shadow-md ">
                <ul className="h-full w-full flex flex-col pt-3 items-center pr-3 pl-3">
                      <li  className="cursor-pointer h-10 rounded-2xl w-full  text-center flex justify-center items-center "><Link to={"/about"}>About</Link></li>
                      <li  className="cursor-pointer h-10 rounded-2xl mb-2 w-full  text-center flex justify-center items-center "><Link to={"/contact"}>Contact</Link></li>
                      <li  className="cursor-pointer hidden  h-10 rounded-2xl mb-2 w-full  text-center sm:flex justify-center items-center "><Link to={"/help"}>Help</Link></li>
                      <li  className={`cursor-pointer h-10 rounded-2xl mb-2 hidden w-full  text-center  justify-center items-center  ${role == "ADMIN" ? "sm:block" : "hidden"}`}><Link to={"/admin"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full pl-1"><i class="fa-solid fa-user-shield "></i> Admin</Link></li>
                      <button className={`border-red-600 mt-3  border-2 bg-red-500 text-white mb-3 w-full rounded-2xl h-9 cursor-pointer ${login == true ? " hidden sm:block" : "hidden"}`} onClick={userLogout}> <i className="fa-solid fa-right-from-bracket"></i> Logout</button> 
                </ul>
            </div>
        </div>
        <li  className={`cursor-pointer    rounded-2xl w-full  p-1 h-9 sm:w-20 ${login == true ? "hidden sm:flex" : "hidden"}`}><Link to={"/profile"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full"> <i className="fa-solid fa-user text-black dark:text-white"></i></Link></li>
        <li  className="cursor-pointer sm:hidden  rounded-2xl w-full  p-1 h-9 sm:w-20"><Link to={"/help"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full"> <i class="fa-solid fa-circle-question"></i><span>Help</span> </Link></li>
        <li  className={`cursor-pointer sm:hidden  h-10 rounded-2xl mb-2 w-full  text-center  justify-center items-center ${role == "ADMIN" ? "" : "hidden"}`}><Link to={"/admin"} className="flex gap-6 sm:gap-3 justify-start items-center sm:justify-center h-full w-full pl-1"><i class="fa-solid fa-user-shield"></i> Admin</Link></li>
        <button className={`border-red-600 mt-3 sm:hidden border-2 bg-red-500 text-white mb-3 w-full rounded-2xl h-9 cursor-pointer ${login == true ? "block" : "hidden"}`} onClick={userLogout}> <i className="fa-solid fa-right-from-bracket"></i> Logout</button> 
        <li  className={`cursor-pointer mt-2 sm:mt-0 ${login == true ? "hidden" : "block"} `}><Link to={"/singIn"}><button className="shape text-white border-white shadow-md h-9 w-20 rounded-2xl cursor-pointer">sing in</button></Link></li>
      </ul>
     </div>

     {/* icon */}
     <div className="h-10 sm:hidden w-10 dark:text-white absolute z-30 right-0 top-3 rounded-2xl" onClick={change}>
      <i class="fa-solid fa-bars text-[20px]"></i>
     </div>

     {/* icon area  */}
     <div className="icon w-full bg-white dark:bg-zinc-800  top-0 fixed shadow-md sm:shadow-none ">
      <img src="logo.png" alt="" className="h-10 w-10"/>
     </div>

     {/* change-thems */}
    <div onClick={changeThems} className="w-16 h-6 hidden sm:flex rounded-full  fixed top-3 right-3 z-50 shadow-md cursor-pointer  items-center p-1 transition">
      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-300 dark:translate-x-8 ">
        {dark ? <FaSun className="text-yellow-500 text-xs"/> :  <FaMoon className="text-slate-700 text-xs"/>}
      </div>
    </div>

    </div>
    </>)
}

export default Navbar;