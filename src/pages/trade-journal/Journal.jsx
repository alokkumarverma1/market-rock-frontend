import React from "react";
import Navbar from "../others/navbar";
import StrategyCard from "./StrategyCard";
import SmallHeading from "../others/smallHeading";

function Journal(){
    return(<>
    <Navbar></Navbar>
    <div className="general mt-20 p-2">
        {/* strategy cards */}
        <SmallHeading heading={"Your strategy"}></SmallHeading>
        <div className="strategycards scroller py-2  gap-5 ">
            <StrategyCard></StrategyCard>
             <StrategyCard></StrategyCard>
              <StrategyCard></StrategyCard>
               <StrategyCard></StrategyCard>
                <StrategyCard></StrategyCard>
             <StrategyCard></StrategyCard>
              <StrategyCard></StrategyCard>
               <StrategyCard></StrategyCard>
                <StrategyCard></StrategyCard>
             <StrategyCard></StrategyCard>
              <StrategyCard></StrategyCard>
               <StrategyCard></StrategyCard>
        </div>


        
    </div>
    </>)
}

export default Journal;