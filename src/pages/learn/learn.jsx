import React from "react";
import Navbar from "../others/navbar";
import Footer from "../others/footer";
import Heading from "../others/heading";
import SmallHeading from "../others/smallHeading";
import RightArrow from "../others/rightArrow";
import FreeVideoCard from "./freeResource/freeVideoCard";
import { Link } from "react-router-dom";

function Learn(){
    return(<>
    <Navbar></Navbar>
    <div className="mt-10 sm:pt-5 p-2 w-full min-h-screen bg-gray-50 dark:bg-black dark:text-white">

    {/* rock course */}
    <SmallHeading heading={"Our courses"}></SmallHeading>
    <div className="learn-with-rock-tema flex justify-center items-center w-full min-h-65 rounded-2xl gap-5 p-5 flex-wrap text-gray-400">
    <p>No course...</p>
    </div> 


   {/* Live Market */}
  <SmallHeading heading={"Learn in live market"}></SmallHeading>
  <div className="w-full max-w-3xl rounded-2xl mt-5 mb-5  m-auto bg-white shadow-md p-4 sm:p-5">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
      {/* Left Side */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-100 flex items-center justify-center">
            <i className="fa-solid fa-tower-broadcast text-red-600 text-lg sm:text-xl"></i>
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>

        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-800">Live Market Session</h2>
          <p className="text-sm text-gray-500">
            Learn how trades are taken live with proper risk-reward and discipline.
          </p>
        </div>
      </div>
      {/* Right Side */}
      <Link to={"/joinLive"}> <button className="w-full sm:w-auto cursor-pointer bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-semibold transition">coming soon..</button></Link>
       </div>
  </div>


    {/* free resource */}
 <SmallHeading heading={"Free resource"}></SmallHeading>
  <div className="flex justify-start items-start scroller pt-5 pb-5  gap-4">
  <FreeVideoCard id={"r2LzjTUs3lo"} title={"Support resistance"} channel={"pushkar raj thakur"} />
  <FreeVideoCard id={"ZsKGhc0AXKs"} title={"Candilastic patter"} channel={"neeraj joshi"}></FreeVideoCard>
  <FreeVideoCard id={"L2OochgcO3E"} title={"Price action"} channel={"trade with purab"}></FreeVideoCard>
  <FreeVideoCard id={"OVs1Tj2y4Eg"} title={"Risk reward"} channel={"stock learners"}></FreeVideoCard>
  <FreeVideoCard id={"mazWDsIf2Cg"} title={"Trading psychology"} channel={"a digital bloger"}></FreeVideoCard>
  </div>
   <RightArrow></RightArrow>
    </div>
     <Footer></Footer>
    </>)
 
}

export default Learn;