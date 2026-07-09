import React from "react";
import Navbar from "../others/navbar";
import Footer from "../others/footer";
import Heading from "../others/heading";
import RockHeading from "../rockpage/rockHeading";
import RightArrow from "../others/rightArrow";
import FreeVideoCard from "./freeResource/freeVideoCard";

function Learn(){
    return(<>
    <Navbar></Navbar>
    <div className="mt-10 sm:mt-20"></div>

    {/* rock course */}
    <RockHeading heading={"Our courses"}></RockHeading>
    <div className="learn-with-rock-tema flex justify-center items-center w-full min-h-65 rounded-2xl gap-5 p-5 flex-wrap">
    <p>Comming soon...</p>
    </div> 

    {/* daily live */}
     <RockHeading heading={"Learn in live market"}></RockHeading>
     <div className="learn-in-live w-full h-50 flex justify-center items-center">
      <p>comming soon...</p>
     </div>

    {/* free resource */}
    <RockHeading heading={"Free resource"}></RockHeading>
   <div className="grid scroller  p-3  gap-4">
  <FreeVideoCard />
  <FreeVideoCard />
  <FreeVideoCard />
  <FreeVideoCard />
  <FreeVideoCard />
  <FreeVideoCard />
  <FreeVideoCard />
  <FreeVideoCard />
   </div>
   <RightArrow></RightArrow>
    <Footer></Footer>
    </>)
}

export default Learn;